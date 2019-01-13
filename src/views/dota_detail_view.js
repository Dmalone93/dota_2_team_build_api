const PubSub = require('../helpers/pub_sub.js')

const DotaDetailView = function(direContainer,radientContainer){
  this.direContainer = direContainer;
  this.radientContainer = radientContainer;
};


DotaDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-selected', (event) => {
    this.renderCharacter(event.detail)
  })
  PubSub.subscribe('SelectView:player-roles-ready', (event) => {
    this.roleRender(event.detail)
  })
}


DotaDetailView.prototype.renderCharacter = function(){
  const header = document.createElement('h2');


}

DotaDetailView.prototype.roleRender = function(){

}

module.exports = DotaDetailView;
