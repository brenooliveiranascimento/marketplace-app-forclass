import { Redirect } from "expo-router";

export default function App() {
  const userData = false;

  if (userData) {
    return <Redirect href={"/(private)"} />;
  }

  return <Redirect href={"/login"} />;
}
