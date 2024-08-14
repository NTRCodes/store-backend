import { Product, ProductStore } from '../products'

describe('Product Store Model Tests', () => {
  const productStore: ProductStore = new ProductStore()
  let product: Product = {
    name: 'Test',
    price: 201,
    category: 'test category'
  }

  describe('Product method definitions', () => {
    it('Product should have an index method', () => {
      expect(productStore.index).toBeDefined()
    })
    it('Product should have a show method', () => {
      expect(productStore.show).toBeDefined()
    })
    it('Product should have a create method', () => {
      expect(productStore.create).toBeDefined()
    })
  })
  describe('Product method functionalities', () => {
    it('productStore.create() should return a new product', async () => {
      const newProduct = await productStore.create(product)
      expect(Object.keys(newProduct)).toBeInstanceOf(Object)
    })
    it('show method should return a product given an id', async () => {
      const product = await productStore.show(1)
      expect(Object.keys(product)).toContain('id')
    })
    it('index method should return all products', async () => {
      const product = await productStore.index()
      expect(product).toBeInstanceOf(Array)
    })
  })
})
