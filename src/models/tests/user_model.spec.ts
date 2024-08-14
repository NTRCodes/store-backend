import { User, UserStore } from "../users"

describe("Users Store Model", () => {
  const store: UserStore = new UserStore()
  let user: User = {
    firstname: 'firstName',
    lastname: 'lastName',
    password: 'testPassword'
  }

  describe("User methods are defined", () => {
    it('UserStore.index() is defined', () => {
      expect(store.index).toBeDefined()
    })
    it('UserStore.show() is defined', () => {
      expect(store.show).toBeDefined()
    })
    it('UserStore.create() is defined', () => {
      expect(store.create).toBeDefined();
    })
  })

  describe("User methods functionality", () => {
    it('UserStore.create() returns a User', async () => {
      const newUser = await store.create(user)
      expect(Object.keys(newUser)).toContain('id')
    })
    it('UserStore.index() returns a list of Users', async () => {
      const users = await store.index()
      expect(users).toBeInstanceOf(Array)
    })
    it('UserStore.show() returns a user given an id', async () => {
      const user = await store.show(1)
      expect(user.id).toEqual(1)
    })
  })
})
