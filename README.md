A logger that logs Exceptions and restart events to slack as well as a logger.
This module exposes three functions: info, error and restart.
You can pass it a logger like winston, the logger need to expose also an info and error functions
for the slack-logger to be able to use it.
