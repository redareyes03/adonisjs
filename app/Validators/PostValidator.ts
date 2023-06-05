import { schema, validator } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from "./BaseValidator";

export default class PostValidator extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
    super();
  }

  public reporter = validator.reporters.api;

  public schema = schema.create({
    title: schema.string(),
    content: schema.string()
  })

}
