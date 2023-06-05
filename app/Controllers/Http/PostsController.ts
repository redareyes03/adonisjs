import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostValidator from 'App/Validators/PostValidator'
import {ValidationException} from "@adonisjs/validator/build/src/ValidationException";
import Database from '@ioc:Adonis/Lucid/Database'
import { v4 as uuidv4 } from 'uuid';
import Logger from "@ioc:Logger";
export default class PostsController {
  public async store({request, response} : HttpContextContract) {
    try{
      await request.validate(PostValidator);
    } catch (error){
      if(error instanceof ValidationException){
        return error.messages
      }
    }

    try{
      await Database.insertQuery().table('Posts').insert({id: uuidv4(), ...request.body()});
      return request.body()
    } catch (e) {
      return response.status(400).send('Error to create post: ' + e);
    }

    Logger.customMethod()
  }

  public async index(){
    return Database.from('Posts').select('*')
  }
}
