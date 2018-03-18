import packet from "dns-packet";
import axios from 'axios';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function send(qname, rrtype, url) {
  const buf = packet.encode({
    type: 'query',
    id: getRandomInt(1, 65534),
    flags: packet.RECURSION_DESIRED,
    questions: [{
      type: rrtype,
      name: qname
    }]
  });

  axios.request({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/dns-udpwireformat',
    },
    data: buf
  })
  .then(function (response) {
    console.log(packet.decode(response));
  })
  .catch(function (error) {
    console.log(error);
  });
}

window.onload = function() {
  var submit = document.getElementById("query");
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    const qname = document.getElementById("qname").value;
    const rrtype = document.getElementById("rrtype").value;
    const https_url = document.getElementById("https_url").value;
    send(qname, rrtype, https_url);
  }, false);
};
