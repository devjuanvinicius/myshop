import { Provider } from "react-redux";
import { Header } from "./components/Header.tsx";
import { ProductsList } from "./components/ProductsList.tsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { store } from "./redux/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
