
Slack-logger
===========
Logs Exceptions and restart events to slack as well as a logger.
This module exposes three functions: info, error and restart.
You can pass it a logger like winston, the logger need to expose also an info and error functions
for the slack-logger to be able to use it.

How to Install
============
npm install slack-logger


How to Use
===========
slackLogger = require('slack-logger');
slackLogger.config({
   logger:logger,
   method:'slack',
   webhookUri: '*******************',
   enableMsg: true,
   devChannel: '#dev',
   prodChannel: '#production'
});

