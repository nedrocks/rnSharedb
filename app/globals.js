/* @flow */

// const sharedb = require('sharedb/lib/client');
//
// class Connection {
//   connection: any;
//
//   constructor(websocketLoc: string) {
//     this.connection = new sharedb.Connection(new WebSocket(websocketLoc));
//   }
//
//   createQuery: Function = () => {
//     return this.connection.createSubscribeQuery('players', {$sort: {score: -1}});
//   }
// }
//
// const connection = new Connection('ws://10.1.20.219:8080');
//
// export {
//   connection,
// }

//const racerBrowserChannel = require('racer-browserchannel/lib/browserStandalone');
const racer = require('racer');

class Connection {
  connection: any;

  domain: string;
  port: number;
  path: string;

  model: ?Object;

  constructor(domain: string, port: number, path: string) {
    this.domain = domain;
    this.port = port;
    this.path = path;
    this.model = null;
  }

  connect: Function = (): Promise<Object> => {
    const elem = `http://${this.domain}:${this.port}/${this.path}.json`;
    return fetch(elem)
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.browserChannel = {
          base: `http://${this.domain}:${this.port}/${this.path}`,
        }
        this.model = racer.createModel(responseJson);
        this.model.at('_page.room');
        return this.model;
      }).catch((error) => {
        console.log(error);
      });
  }
}

const connection = new Connection('10.1.20.219', 3000, 'home');

export {
  connection
};
