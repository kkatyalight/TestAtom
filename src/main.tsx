import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Delivery from "./pages/Delivery.tsx";
import Main from "./pages/Main.tsx";
import Services from "./pages/Services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/delivery",
    element: <Delivery/>,
  },
  {
    path: "/services", 
    element: <Services /> 
  },
 ],
 {
   basename: "/TestAtom/",
}
);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)


