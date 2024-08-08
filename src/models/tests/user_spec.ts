import {UserStore} from "../users";

const store: UserStore = new UserStore()

describe("Users Store Model",  () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('index method should return a list of Users', async () => {
       const result = await store.index();
       expect(result).toEqual([]);
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });
    //
    // it('store.show(id) should should return a single user', () => {
    //     expect(store.show("1")).toBeInstanceOf(Promise<User>);
    // });
});