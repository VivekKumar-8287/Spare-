import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { productInputs, userInputs } from "./formSource";
import Sidebar from "./Components/Sidebar";

function Layout() {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <div className="flex ">
        <div className="basis-1/6 border-r-0.5 border-solid border-gray-300 min-h-screen bg-white sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" className='flex-6' />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="Add new products" className='flex-6'/>}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
