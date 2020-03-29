import React from "react";

function Footer(){

    // Set current Year for Copyrigt
    const currentYear = new Date().getUTCFullYear();

    return (<div>
        <footer>Copyright © {currentYear} Aykut Sarac</footer>
    </div>);
}


export default Footer;