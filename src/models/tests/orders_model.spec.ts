import { Order, OrderStore } from "../orders";

describe('Order Store model Tests', () => {
  const orderStore = new OrderStore()
  describe('Order method definitions', () => {
    it('orderStore.show() is defined', () => {
      expect(orderStore.show).toBeDefined()
    })
    it('orderStore.create() is defined', () => {
      expect(orderStore.create).toBeDefined()
    })
  })
  describe('Order method functionalities', () => {
    it('orderStore.add() returns a new order', async () => {
      const newOrder = await orderStore.create({
        user_id: 1,
        quantity: 20,
        status: 'complete'
      })
      expect(newOrder.id >= 1).toBeTrue()
    })
    it('orderStore.show() return an order given an id', async () => {
      const order = await orderStore.show(1)
      expect(order.id >= 1).toBeTrue()
    })
  })
})
