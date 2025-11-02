import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import { handleRefreshToken } from "../services/auths.service";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  });
};

export const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("marketplace-auth");

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.request.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status == 401 &&
          error.response?.data?.message === "Token expirado" &&
          !originalRequest._retry &&
          !this.isRefreshing
        ) {
          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const userData = await AsyncStorage.getItem("marketplace-auth");

            if (!userData) {
              throw new Error("Usuário não autenticado");
            }

            const {
              state: { refreshToken },
            } = JSON.parse(userData);

            if (!refreshToken) {
              throw new Error("RefreshToken não encontrado");
            }

            const response = await handleRefreshToken(refreshToken);

            const updatedUserData = {
              ...JSON.parse(userData),
              ...response,
            };

            await AsyncStorage.setItem(
              "marketplace-auth",
              JSON.stringify(updatedUserData)
            );

            originalRequest.headers.Authorization = `Bearer ${response.token}`;

            return this.instance(originalRequest);
          } catch (error) {
            this.handleUnauthorized();

            return Promise.reject(
              new Error("Sessão expirada. Faça login novamente.")
            );
          } finally {
            this.isRefreshing = false;
          }
        }

        if (error.response.status === 401) {
          this.handleUnauthorized();
        }

        if (error.response && error.response.data) {
          return Promise.reject(new Error(error.response.data.message));
        } else {
          Promise.reject(new Error("Falha na requisição"));
        }
      }
    );
  }

  private async handleUnauthorized() {
    delete this.instance.defaults.headers.common["Authorization"];
    await AsyncStorage.removeItem("marketplace-auth");
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
