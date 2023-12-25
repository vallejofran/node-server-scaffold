const handleErrorFactory = function (name) {
  return class ErrorHandler extends Error {
    constructor(message) {
      super(message);
      this.name = name;
    }
  };
};

const MongoConnError = handleErrorFactory("MongoConnError");
const SequelizeConnError = handleErrorFactory("SequelizeConnError");
const MySqlConnError = handleErrorFactory("MySqlConnError");

module.exports = {
  MongoConnError,
  SequelizeConnError,
  MySqlConnError,
};
