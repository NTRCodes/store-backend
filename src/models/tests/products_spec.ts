import { Product, ProductStore } from '../products'

//git is annoying
describe('Product Store Model', () => {
  const store = new ProductStore()
  const product: Product = {
    name: 'Test',
    price: 200.50,
    category: 'test category'
  }

  describe('Product methods are defined', () => {
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
    it('create a new product', () => {
      const result = store.create(product)
      expect(typeof result).toEqual('object')
    })
    it('show method should return a product given an id', async () => {
      const result = await store.show(1)
      expect(result.category).toEqual('test category')
    })
    it('index method should return all products', async () => {
      const result = await store.index()
      expect(typeof result).toEqual('object')
    })
  })
})
