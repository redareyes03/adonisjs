import { schema, rules, validator  } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from "../../providers/BaseValidator";

export default class PostValidator extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
    super();
  }

  public reporter = validator.reporters.api;

  public schema = schema.create({
    title: schema.string(),
    content: schema.string(),
    comments: schema.array.nullableAndOptional().members(
      schema.object().members({
        userName: schema.string({trim: true}, [rules.minLength(0)]),
        comment: schema.string({trim:true}, [rules.minLength(0)])
      })
    )
  })

}
