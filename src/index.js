import packet from "dns-packet";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

window.onload = function() {
  document.getElementById("query").addEventListener(
    "submit",
    console.log("submit")
  );
};
