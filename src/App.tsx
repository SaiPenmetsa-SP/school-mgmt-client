import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Users from "./components/pages/Users";
import Home from "./components/pages/Home.jsx";
import Room from "./components/pages/Room";
import Setting from "./components/pages/Setting";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import NoAccess from "./components/pages/NoAccess";
import Forms from "./components/pages/Forms.jsx";
import Database from "./components/pages/Database";
import Tasks from "./components/pages/Tasks";
import { Provider } from "react-redux";
import store from "./components/store/store";
import OpenForm from "./components/pages/OpenForm.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role={["Admin", "Teacher", "Student"]}>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute role={["Admin"]}>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute role={["Admin"]}>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute role={["Teacher", "Admin"]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "/room",
        element: (
          <ProtectedRoute role={["Student", "Admin"]}>
            <Room />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute role={["Admin", "Student", "Teacher"]}>
            <Setting />
          </ProtectedRoute>
        ),
      },
      {
        path: "/no-access", // Add route for No Access page
        element: <NoAccess />,
      },
      {
        path: "/form",
        element: (
          <ProtectedRoute role={["Admin"]}>
            <Forms data={undefined} />
          </ProtectedRoute>
        ),
      },
      {
        path: "/database",
        element: (
          <ProtectedRoute role={["Admin"]}>
            <Database />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tasks",
        element: (
          <ProtectedRoute role={["Student"]}>
            <Tasks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/form/:id",
        element: (
          <ProtectedRoute role={["Admin"]}>
            <OpenForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
