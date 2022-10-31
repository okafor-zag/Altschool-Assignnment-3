import React from "react";
import { Link } from "react-router-dom";

const Secondary = () => {
  return (
    <section>
      <div >
        <h1>page not found</h1> 
        <div>404 error page</div>
     </div>
      <Link to="/">Go back to homepage</Link>
    </section>
  );
};

export default Secondary;
