class Controller {
  constructor() {
    this.name = this.constructor.name;
    this.debug = true;
  }

  log(message, data) {
    if (!this.debug) {
      return;
    }
    if (!data) {
      console.log(this.name + " " + message);
    } else {
      console.log(this.name + " " + message, data);
    }
  }

  handleError(error, res) {
    console.error(error);

    res.status(500).send({
      controller: this.name,
      message: error.message,
      errorString: error.toString(),
      errorJson: JSON.stringify(error),
      errorObject: error,
    });
  }

  async handleRequest(req, res, handler) {
    try {
      await handler();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}

export default Controller;
