import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import data from "./data.json";

console.log(data);
console.log(window.innerWidth);

export const user = data.currentUser;

const root = createRoot(document.getElementById("root"));
root.render(<App comments={data.comments} />);
