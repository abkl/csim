import * as Yup from "yup"
import { createValidateObject } from "../src/components/form-components/form-util"
describe("createValidateObject", () => {
  test("should be properly created", () => {
    Yup.number()
      .isValid("4159")
      .then(c => expect(c).toBe(true))
  })
})
