"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./handlers/users"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var address = "0.0.0.0:".concat(process.env.SERVER_PORT);
var corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // for those hold head browsers
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(process.env.SERVER_PORT, function () {
    console.log("starting app on: ".concat(address));
});
(0, users_1.default)(app);
exports.default = app;
