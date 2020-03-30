import React from "react";

function Footer(){

    // Set current Year for Copyrigt
    const currentYear = new Date().getUTCFullYear();

    return (<div>
        <footer>
        <p>Copyright © {currentYear} Aykut Sarac</p>
        </footer>
    </div>);
}


export default Footer;