const express = require('express');
const expApp = require("./express");

const app = expApp.getApp();

app.listen(3001, () => console.log(`Listening on 3001`));
