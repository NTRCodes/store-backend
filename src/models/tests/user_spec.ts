import { User, UserStore } from "../users";

function logClassMethods(classInstance: any): void {
  const proto = Object.getPrototypeOf(classInstance);
  const methodNames = Object.getOwnPropertyNames(proto)
    .filter(name => typeof proto[name] === 'function' && name !== 'constructor');

  console.log('Methods:', methodNames);
}


beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

describe("Users Store Model", () => {
  const store: UserStore = new UserStore()
  let user: User = {
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'testPassword'
  }

  describe("User methods are defined", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined()
      logClassMethods(store)
    });
    it('should have a show method', () => {
      expect(store.show).toBeDefined()
    });
    it('should have a test method', () => {
      expect(store.create).toBeDefined();
    });
  })

  describe("User methods functionality", () => {
    it('index method should return a list of Users', async () => {
      const result = await store.index()
      expect(result).toEqual([])
    });
  })


  //
  // it('store.show(id) should should return a single user', () => {
  //     expect(store.show("1")).toBeInstanceOf(Promise<User>);
  // });
});
