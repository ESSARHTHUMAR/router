import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"

import "./index.css";
import User from "./Components/User/User.jsx";
import Github, {githubInfo} from "./Components/Github/Github.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route 
    loader={githubInfo}
    path='github' 
    element={<Github />}
     />
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
