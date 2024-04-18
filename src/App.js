import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <Watchpage />,
    },
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
