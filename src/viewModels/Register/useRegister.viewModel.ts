import { useState } from "react";

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "Breno",
  });

  return {
    userData,
    setUserData,
  };
};
