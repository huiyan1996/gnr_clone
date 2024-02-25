#!/bin/sh

function start() {
    echo "Starting BO";
    cd /data/wwwroot/defibackend.mlitteam.co/vue_nuxt_defi_backoffice;
    /root/.nvm/versions/node/v16.18.1/bin/pm2 stop DefiAdminPanel;
    /usr/bin/git stash;
    /usr/bin/git pull;
    /root/.nvm/versions/node/v16.18.1/bin/yarn;
    /root/.nvm/versions/node/v16.18.1/bin/yarn run build;
    /root/.nvm/versions/node/v16.18.1/bin/pm2 start;
    echo "Done"
}

function stop() {
    echo "Stopping BO";
    cd /data/wwwroot/defibackend.mlitteam.co/vue_nuxt_defi_backoffice;
    /root/.nvm/versions/node/v16.18.1/bin/pm2 stop DefiAdminPanel;
    echo "Done"
}

case "$1" in
start)
  start
  ;;
stop)
  stop
  ;;
restart)
  restart
  ;;
status)
  status
  ;;
*)
  echo "Usage: $0 {start|stop|restart|status}"
  ;;
esac