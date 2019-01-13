const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Dota = function(){
  this.heroes = [];
}

Dota.prototype.bindEvents = function(){
    PubSub.subscribe('SelectView:player-roles-ready',(event) => {
      const characterRole = event.detail
      PubSub.publish('Dota:single-character-ready', characterRole)
    });

}

Dota.prototype.getData = function(){
  const request = new Request('https://api.opendota.com/api/heroes')
  request.get().then((data) => {
    this.heroes = data;
    PubSub.publish('Dota:all-ready', this.heroes)
  });
};


module.exports = Dota;
