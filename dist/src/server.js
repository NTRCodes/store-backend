"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./handlers/users"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const address = `0.0.0.0:${process.env.SERVER_PORT}`;
const corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // for those hold head browsers
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(process.env.SERVER_PORT, function () {
    console.log(`starting app on: ${address}`);
});
(0, users_1.default)(app);
exports.default = app;
