const PubSub = require('../helpers/pub_sub.js')

const DotaDetailView = function(container){
  this.container = container
};




DotaDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-selected', (event) => {
    this.renderCharacterName(event.detail)
  })
  PubSub.subscribe('SelectView:player-roles-ready', (event) => {
    this.renderCharacterRole(event.detail)
    console.log(event.detail);
  })
}


DotaDetailView.prototype.renderCharacterName = function(character){
  const characterObject = JSON.parse(character)
  console.log(characterObject);
  const playerDiv = document.createElement('div');
  const header = document.createElement('h2');
  header.textContent = characterObject.localized_name
  console.log(header);
  playerDiv.appendChild(header);

  const playerRole = document.createElement('h3');
  playerRole.textContent = characterObject.roles
  console.log(playerRole);
  playerDiv.appendChild(playerRole);

};

DotaDetailView.prototype.renderCharacterRole = function(role){



};
module.exports = DotaDetailView;
