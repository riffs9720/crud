const pino = require('pino')({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            colorize: true,
            translateTime: true,
            messageFormat: true,
            ignore: 'pid,hostname'
        }
    }
})

module.exports = pino