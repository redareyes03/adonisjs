import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }
  public register () {
    // Register your own bindings

  }
  public async boot () {
    // IoC container is ready
  }
  public async ready () {
    // App is ready
  }
  public async shutdown () {
    // Cleanup, since app is going down
  }
}

// 1. Crear un provider => node ace make:provider <name>
// 2. Crear una clase de la libreria a usar => MyLibrary
// 3. En el provider registrar dicha libreria en 
