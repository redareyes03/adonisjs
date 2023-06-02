import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostValidator from 'App/Validators/PostValidator'
import {ValidationException} from "@adonisjs/validator/build/src/ValidationException";
export default class PostsController {
  public async store({request} : HttpContextContract) {
    try{
      await request.validate(PostValidator);
    } catch (error){
      if(error instanceof ValidationException){
        return error.messages
      }
    }
    // todo store post in database
    return 'Post Created'
  }
}
