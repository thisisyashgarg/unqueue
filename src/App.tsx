import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";
import AdminRegistration from "./components/AdminRegistration";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AdminVerification from "./components/AdminVerificationPage";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  // let home = <HomePage />;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = getAuth();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       navigate("/dashboard");
  //     } else {
  //       navigate("/login");
  //     }
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/domains",
        element: <Domains />,
      },
      {
        path: "/admin",
        element: <AdminRegistration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/emailsent",
        element: <AdminVerification />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
