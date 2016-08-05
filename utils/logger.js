var winston = require('winston');
var appRoot = require('app-root-path');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
	new winston.transports.File({
            level: 'warning',
            filename: appRoot + '/logs/all-logs.log',
            handleExceptions: true,
	    humanReadableUnhandledException: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false,
	    timestamp: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
	    humanReadableUnhandledException: true,
            json: false,
            colorize: true,
	    prettyPrint: true
        })
    ],
   // Application continue to execution even after an exception is caught
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
