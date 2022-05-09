import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css";

export default function NoMatch() {
    return (
      <div className="NoMatch">
          
        <div className="lander">

        <h1>Nothing to see here!</h1>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
        <img src="/cat_eating_cords.png" width="500" height="400" />
        </div>

      </div>
    );
  }