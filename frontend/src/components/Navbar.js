import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand"  style={{paddingLeft: "6rem"}} href="#">Mon Bureau</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
    )
}

export default Navbar;