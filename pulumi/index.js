const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const api = require("../api/api.js");


// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API("hello", {
    routes: [
        // Serve static files from the `www` folder (using AWS S3)
        {
            path: "/",
            localPath: "build",
        },
        // Serve a simple REST API on `GET /name` (using AWS Lambda)
        {
            path: "/api/{proxy+}",
            method: "GET",
            eventHandler: (event, context) => {
                const express = require('express');


                const serverlessExpress = require('aws-serverless-express');

                const app = api.getApp(express)
                const server = serverlessExpress.createServer(app);

                return serverlessExpress.proxy(server, event, context)
            }
        }
    ]
});

// Export the public URL for the HTTP service
exports.url = endpoint.url;