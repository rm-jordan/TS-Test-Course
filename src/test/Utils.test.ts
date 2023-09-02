import { getStringInfo, toUpperCase } from "../app/Utils"


describe('Utils test suite', () => {

  it('should return uppercase of a valid string', () => {
    // arrange:
    const sut = toUpperCase
    const expected = "ABC"

    // act:
    const actual  = toUpperCase('abc')

    // assert:
    expect(actual).toBe('ABC')
  })

  it.only('should return info for valid string', () => {


    const actual = getStringInfo('My-String')

    // toBe - primitve types
    expect(actual.lowerCase).toBe('my-string')
    // toEqual 
    expect(actual.extraInfo).toEqual({})

    // toHaveLength - cleaner to read matcher
    expect(actual.characters).toHaveLength(9)

    expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
    expect(actual.characters).toContain<string>('M')

    //  characters not in order
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g','M', 'y', '-'])
    )

    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeUndefined()
    expect(actual.extraInfo).toBeDefined()

    // not sure what forms are but make sure its valid
    expect(actual.extraInfo).toBeTruthy()

  })

})