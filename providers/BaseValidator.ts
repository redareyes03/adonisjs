import {CustomMessages} from "@ioc:Adonis/Core/Validator";

export default class BaseValidator{
  public messages: CustomMessages = {
    required: '{{field}} is required to create new post',
    minLength : 'The {{field}} cannot be empty'
  }
}
