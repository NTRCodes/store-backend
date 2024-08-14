import { ProductStore } from '../products'

describe('Product Store Model Tests', () => {
  const store = new ProductStore()
  let product = {
    name: 'Test',
    price: 201,
    category: 'test category'
  }

  describe('Product method definitions', () => {
    it('Product should have an index method', () => {
      expect(store.index).toBeDefined()
    })
    it('Product should have a show method', () => {
      expect(store.show).toBeDefined()
    })
    it('Product should have a create method', () => {
      expect(store.create).toBeDefined()
    })
  })

  describe('Product methods functionality', () => {
    it('create method should create a new product', async () => {
      const result = await store.create(product)
      expect(result.id === undefined).toBeFalse()
    })
    it('show method should return a product given an id', async () => {
      const result = await store.show(1)
      expect(typeof result).toEqual('object')
    })
    it('index method should return all products', async () => {
      const result = await store.index()
      expect(result).toBeInstanceOf(Array)
    })
  })
})
