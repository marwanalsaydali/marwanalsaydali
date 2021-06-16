// Global CSS
import "./src/styles/global.css";
// Apply layout component accrouss all the pages
import React from "react";
import Layout from "./src/layouts/Layout";
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
