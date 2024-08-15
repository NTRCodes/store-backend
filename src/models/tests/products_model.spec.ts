import { Product, ProductStore } from '../products'

describe('Product Store Model Tests', () => {
  const productStore: ProductStore = new ProductStore()
  let product: Product = {
    name: 'Test',
    price: 201,
    category: 'test category'
  }

  describe('Product method definitions', () => {
    it('productStore.index() is defined', () => {
      expect(productStore.index).toBeDefined()
    })
    it('productStore.show() is defined', () => {
      expect(productStore.show).toBeDefined()
    })
    it('productStore.create() is defined', () => {
      expect(productStore.create).toBeDefined()
    })
  })
  describe('Product method functionalities', () => {
    it('productStore.create() returns a new Product', async () => {
      const newProduct = await productStore.create(product)
      expect(Object.keys(newProduct)).toBeInstanceOf(Object)
    })
    it('productStore.show() returns a Product given an id', async () => {
      const product = await productStore.show(1)
      expect(Object.keys(product)).toContain('id')
    })
    it('productStore.index() returns a list of Products', async () => {
      const product = await productStore.index()
      expect(product).toBeInstanceOf(Array)
    })
  })
})
