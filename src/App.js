import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./route/Home";
import Blog from "./route/Blogs"
import Contact from "./route/Contact"
export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contactMe" exact component={Contact} />
    </Router>
  );
}
