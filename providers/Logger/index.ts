import {ApplicationContract} from "@ioc:Adonis/Core/Application";

export default class LoggerProvider{
  constructor(protected app : ApplicationContract) {
  }

  public register(){
    this.app.container.singleton('Logger', ()=>{
      // Clase con la liberia
      const Logger = require('./logger').default;
      // Configurarla (si lo requiere)

      return new Logger();

    })
  }
}
