/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'
import { type Controller, type EmailValidator, type HttpRequest, type HttpResponse, type AddAccount } from './signupProtocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAcount: AddAccount

  constructor (emailValidator: EmailValidator, addAcount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAcount = addAcount
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      this.addAcount.add({
        name,
        email,
        password
      })

      return badRequest(new MissingParamError('badRequest'))
    } catch (error) {
      return serverError()
    }
  }
}
