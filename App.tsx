import RootNavigation from "./src/navigation/RootNavigation";
import { PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
