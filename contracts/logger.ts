declare module '@ioc:Logger'{
  import CustomLogger from "providers/Logger/logger";
  const Logger : CustomLogger;

  export default Logger;
}
