import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Map from "./pages/Map";
import Form from "./pages/Form";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "map",
    element: <Map />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "projects/:id",
    element: <Projects />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading....</div>} />
  );
}

export default App;
