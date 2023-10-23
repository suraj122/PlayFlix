import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import VideoListWrapper from "./components/VideoListWrapper";
import Watchpage from "./components/Watchpage";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoListWrapper />,
      },
      { path: "/watch", element: <Watchpage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRoute} />
      </Provider>
    </>
  );
}

export default App;
