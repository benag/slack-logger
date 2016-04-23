

/*
    LogManager: Using Slack and logger to log errors.
    Created By: Ben goldenberg (goldenbergben@gmail.com)

 */


var Slack = require('slack-node');

var LogManager = {};

LogManager.GlobalMsg = true;
LogManager.Method = 'slack';
LogManager.slackDevChannel = '#dev';
LogManager.slackProdChannel = '#production';
LogManager.webhookUri = "";
LogManager.slack = new Slack();
LogManager.slack.setWebhook(LogManager.webhookUri);
LogManager.env = 'development';

LogManager.config = function (options){
    this.logger = options.logger;
    if (options.method != undefined) LogManager.Method = options.method;
    if (options.enableMsg != undefined) LogManager.GlobalMsg = options.enableMsg;
    if (options.devChannel != undefined) LogManager.slackDevChannel = options.devChannel;
    if (options.prodChannel != undefined) LogManager.slackProdChannel = options.prodChannel;
    if (options.webhookUri != undefined) LogManager.webhookUri = options.webhookUri;
    LogManager.env = process.env.NODE_ENV;
    //if (LogManager.env != 'production') LogManager.env = 'development';


};

LogManager.restart = function (){

    if (LogManager.env == "development") return;

    var msg = 'The server on ' + LogManager.env + ' was restarted';
    this.logger.info(msg);
    if (LogManager.GlobalMsg && LogManager.Method === 'slack'){
        LogManager.msgSlack(msg);
    }
};
LogManager.error = function(msg){
    msg = JSON.stringify(msg);
    console.log('ERROR: ' + msg);
    this.logger.error(msg);
    if (LogManager.GlobalMsg && LogManager.Method === 'slack'){
        LogManager.msgSlack('ERROR: ' + msg);
    }
};
LogManager.info = function(msg){
    console.log('INFO: ' + msg);
    this.logger.info(msg);
};
LogManager.msgSlack = function(text){
    var channel;
    if (LogManager.env === 'production'){
        channel = LogManager.slackProdChannel;
    }else{
        channel = LogManager.slackDevChannel;
    }
    LogManager.slack.webhook({
        channel: channel,
        username: "server",
        text: text
    }, function(err, response) {
        //console.log(response);
    });
};

module.exports = LogManager;





