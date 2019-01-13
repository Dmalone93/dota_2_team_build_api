const PubSub = require('../helpers/pub_sub.js')

const DotaDetailView = function(container){
  this.container = container
};




DotaDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-selected', (event) => {
    this.renderCharacterName(event.detail)

  })
  PubSub.subscribe('SelectView:player-roles-ready', (event) => {
    this.renderCharacterRole(event.target.value)
    console.log(event.detail);
  })
}


DotaDetailView.prototype.renderCharacterName = function(character){
  const characterObject = JSON.parse(character);
  const playerDiv = document.createElement('div');
  const header = document.createElement('h2');
  header.textContent = characterObject.localized_name
  console.log(header);
  playerDiv.appendChild(header);
  console.log(playerDiv);

};

DotaDetailView.prototype.renderCharacterRole = function(role){
  character.forEach((characterRole) => {
    const playerRole = document.createElement('h3')
    playerRole.value = characterRole
    playerRole.textContent = characterRole.roles
    console.log(playerRole);
    playerDiv.appendChild(playerRole);
  });


};







module.exports = DotaDetailView;
