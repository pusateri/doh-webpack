# doh-webpack

Web DNS over HTTP (DOH) in browser test tool

This sample code provides a client implementation for https://tools.ietf.org/html/draft-ietf-doh-dns-over-https-03

This is an IETF work in progress.

You may notice that this code may not return an answer and instead end in a pre-flight 400 or 405 error. This is to be expected since we are sending a POST method with:

    Content-Type: 'application/dns-udpwireformat'

See [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests) for more info.

If DNS over HTTPS servers want to support arbitrary requests from a web page over HTTPS, the server will have to support OPTIONS pre-flight requests to allow the POST to be sent.

## Install
    npm install

## Run
    npm start

