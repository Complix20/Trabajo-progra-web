import Sequelize from 'sequelize'

const hostname = 'localhost'
const username = 'postgres'
const password = 'ASM1PT'
const database = 'PrograWeb'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;