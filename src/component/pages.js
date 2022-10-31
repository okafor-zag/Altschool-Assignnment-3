import React from "react";
import { Link } from "react-router-dom";
import "./pages.css"

const Pages = () => {
  return (
    <section>
      <h1 className="h1">Altschool Africa Pagination and stuff</h1>
      <Link to="/nested">nested</Link>
  
    </section>
  );
};

export default Pages;
