require('dotenv').config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    define: {
        timestamps: false,
        underscored: false,
        freezeTableName: true,
        useUTC: false,
        dateStrings: true
      },
      logging: false,
}