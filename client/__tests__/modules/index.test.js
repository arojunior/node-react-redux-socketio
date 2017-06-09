import store from '../../src/modules'

describe('Redux Store', () => {
  test('Should return an object', () => {
    expect(store.getState()).toBeDefined()
  })
})
