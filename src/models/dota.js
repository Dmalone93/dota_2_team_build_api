const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Dota = function(){
  this.heroes = [];
}

Dota.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-names-ready', (event) => {
    console.log("passing event", event.detail);
    this.findByRole(event.detail)
    PubSub.subscribe('SelectView:player-roles-ready',() => {

    })
  })
}

Dota.prototype.getData = function(){
  const request = new Request('https://api.opendota.com/api/heroes')
  request.get().then((data) => {
    this.heroes = data;
    PubSub.publish('Dota:all-ready', this.heroes)
  });
};


Dota.prototype.findByRole = function(role){
  return this.heroes.filter((hero) => {
    return hero.role === role;
  })
}

module.exports = Dota;
