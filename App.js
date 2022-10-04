import Router from "@src/routes/components/router.component";
import { store } from "@src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}