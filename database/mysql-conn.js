const mysql = require('mysql');

const config = require('../config/db-config')


class MysqlConnection {
	constructor() {
		if (process.env.NODE_ENV === 'production') {
			this.connection = mysql.createConnection({
				host: config.production.host,
				user: config.production.username,
				password: config.production.password,
				database: config.production.database,
			});
		} else {
			this.connection = mysql.createConnection({
				host: config.development.host,
				user: config.development.username,
				password: config.development.password,
				database: config.development.database,
			});
		}
	}

	connect() {
		return new Promise((resolve, reject) => {
			this.connection.connect((error) => {
				if (error) {
					console.error('Error en la conexion de MySql _>'.brightRed, error);
					reject(error);
				} else {
					console.log(`Conectado a la base de datos ${this.connection.config.database}`.brightGreen);
					console.log();
					resolve(this.connection);
				}
			});
		});
	}

	disconnect() {
		this.connection.end();

		console.log();
		console.log(`Cerrando la conexion a la base de datos ${this.connection.config.database}`.brightGreen);
		console.log();
	}

	runQuery(sql) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}
}

module.exports = new MysqlConnection();