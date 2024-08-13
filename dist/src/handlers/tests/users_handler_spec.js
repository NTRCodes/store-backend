"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../users"));
// Since we have a test database we can use that instead of mocks??
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, users_1.default)(app);
beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});
describe('User Handler Routes Suite', () => {
    it('/users should return a list of users as json', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toBeInstanceOf((Array));
    }));
    // it('/users/:id should return a single user if they exist', async () => {
    //     const response = await request(app).get('/users/1')
    //     expect(response.status).toBe(200)
    //     expect(response.headers['content-type']).toMatch(/json/)
    //     expect(response.body).toContain({})
    // });
});
