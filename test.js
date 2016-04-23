var slackLogger = require('slack-logger');

slackLogger.config({
    method:'slack',
    msgSlack: true,
    webhookUri: '*******************',
    enableMsg: true,
    devChannel: '#dev',
    prodChannel: '#production',
    env: 'development'
});

slackLogger.info('test slack logger');
