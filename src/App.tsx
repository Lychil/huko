import { Provider } from "react-redux";
import { store } from "@/store/store";
import RoutesProvider from "@/router/RoutesProvider";
import { GlobalStyles } from "@/common/styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RoutesProvider />
    </Provider>
  )
}

export default App;
