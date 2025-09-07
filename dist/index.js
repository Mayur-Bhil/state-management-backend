"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
setInterval(() => {
    store_1.gameManager.addGame(Math.random().toString());
}, 5000);
