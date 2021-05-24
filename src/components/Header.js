
import React, { } from "react";
import {Link} from "react-router-dom";

function Header() {
  
    return (
        <div className="page_header">
            {/* Header logo links back to HomePage */}
            <Link to="/">
                <img className="nba_logo" src="../nba-logo.svg" alt="NBA logo"></img>
            </Link>
            <h1>NBA Latest Matches</h1>
        </div>
    );
}

export default Header










