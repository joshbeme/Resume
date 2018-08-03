import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let Distance = () => {
    let stuff = document.querySelector("#skillsTreeImg").clientWidth -
    document.querySelector("#skills2").clientWidth;  
    return ({stuff})
};

export default Distance