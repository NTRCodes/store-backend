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
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
function logClassMethods(classInstance) {
    const proto = Object.getPrototypeOf(classInstance);
    const methodNames = Object.getOwnPropertyNames(proto)
        .filter(name => typeof proto[name] === 'function' && name !== 'constructor');
    console.log('Methods:', methodNames);
}
beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});
describe("Users Store Model", () => {
    const store = new users_1.UserStore();
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
        logClassMethods(store);
    });
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });
    // it('should have a test method', () => {
    //     expect(store.test()).toBeDefined();
    // });
    it('index method should return a list of Users', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([]);
    }));
    //
    // it('store.show(id) should should return a single user', () => {
    //     expect(store.show("1")).toBeInstanceOf(Promise<User>);
    // });
});
