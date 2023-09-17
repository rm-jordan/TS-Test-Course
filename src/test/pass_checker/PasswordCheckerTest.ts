import { PasswordChecker } from "../../app/pass_checker/PasswordChecker"


describe('PasswordChecker test suite',  ()=>{
  let sut: PasswordChecker

  beforeEach(()=> {
    sut = new PasswordChecker()
  })

  it('Password with less than eight characters is invalid', ()=> {
  const actual =  sut.checkPassword('1234567')
  expect(actual).toBe(false)
  })

  it('Password with more than eight characters is valid', ()=> {
    const actual =  sut.checkPassword('12345678')
    expect(actual).toBe(true)
    })
})