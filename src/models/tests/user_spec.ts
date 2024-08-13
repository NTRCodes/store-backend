import { User, UserStore } from "../users";


beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

describe("Users Store Model", () => {
  const store: UserStore = new UserStore()
  let user: User = {
    firstname: 'firstName',
    lastname: 'lastName',
    password: 'testPassword'
  }

  describe("User methods are defined", () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined()
    });
    it('should have a show method', () => {
      expect(store.show).toBeDefined()
    });
    it('should have a test method', () => {
      expect(store.create).toBeDefined();
    });
  })

  describe("User methods functionality", () => {
    it('create a new User', async () => {
      const result = await store.create(user)
      expect(typeof result).toEqual('object')
    });
    it('index method should return a list of Users', async () => {
      const result = await store.index()
      expect(typeof result).toEqual('object')
    });
    it('show method should return a single User', async () => {
      const result = await store.show(1)
      expect(result).toEqual({ ...user, id: 1 })
    });
  })
});
