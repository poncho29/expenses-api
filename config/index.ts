import "dotenv/config"

const config = {
  port: process.env.PORT || 4000,
  dbHost: process.env.HOST,
  dbName: process.env.NAME_DB,
  dbUser: process.env.USER_DB,
  dbPass: process.env.PASS_DB
}

export { config }
