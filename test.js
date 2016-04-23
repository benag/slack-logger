var slackLogger = require('slack-logger');

slackLogger.config({
    method:'slack',

    webhookUri: '*******************',
    enableMsg: true,
    devChannel: '#dev',
    prodChannel: '#production'
});

slackLogger.restart();
