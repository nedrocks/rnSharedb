/* @flow */

const sharedb = require('sharedb/lib/client');

class Connection {
  connection: any;

  constructor(websocketLoc: string) {
    this.connection = new sharedb.Connection(new WebSocket(websocketLoc));
  }

  createQuery: Function = () => {
    return this.connection.createSubscribeQuery('players', {$sort: {score: -1}});
  }
}

const connection = new Connection('ws://10.1.20.219:8080');

export {
  connection,
}
