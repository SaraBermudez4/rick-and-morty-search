import { orderByName } from '../orderByName'

describe('orderByName', () => {
  it('should return an empty array if the input array is empty', () => {
    const result = orderByName([])
    expect(result).toEqual([])
  })

  it('should return the input array in alphabetical order by name', () => {
    const input = [
      { name: 'Rick' },
      { name: 'Morty' },
      { name: 'Jerry' },
      { name: 'Beth' },
    ]
    const expected = [
      { name: 'Beth' },
      { name: 'Jerry' },
      { name: 'Morty' },
      { name: 'Rick' },
    ]
    const result = orderByName(input)
    expect(result).toEqual(expected)
  })
})
