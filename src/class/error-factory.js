const handleErrorFactory = function (name) {
  return class ErrorHandler extends Error {
    constructor(message) {
      super(message);
      this.name = name;
      // this.stack = ''
    }
  };
};

const MongoConnError = handleErrorFactory("MongoConnError");
const SequelizeConnError = handleErrorFactory("SequelizeConnError");
const MySqlConnError = handleErrorFactory("MySqlConnError");

export { MongoConnError, SequelizeConnError, MySqlConnError };
