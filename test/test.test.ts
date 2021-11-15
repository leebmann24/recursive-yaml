import load from '../src'

interface TestConfig {
  attr1: {
    prop1,
    prop2,
    prop3,
  },
  array: string[],
  nested: {
    deep_nested: {
      a: {
        rray: string[]
      }
    }
  }
}


it("test", () => {
  try {
    const config = load('./test/yaml') as TestConfig

    expect(config.attr1.prop1).toBe('value1')
    expect(config.attr1.prop2).toBe('value2')
    expect(config.attr1.prop3).toBe('value3')

    expect(config.array).toContain('value 1')
    expect(config.array).toContain('value 2')
    expect(config.array).toContain('value 3')

    expect(config.nested.deep_nested.a.rray).toContain('value 1')
    expect(config.nested.deep_nested.a.rray).toContain('value 2')
    expect(config.nested.deep_nested.a.rray).toContain('value 3')

  } catch (e) {
    expect(e).toBeNull()
  }
})

