const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(container){
  this.container = container
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-names-ready', (event) => {
    roleList = this.container
    // PubSub.publish('SelectView:character-roles', event.detail)
  });

  this.container.addEventListener('change', (event) => {
    const selectedCharacter = event.target.value
    PubSub.publish('SelectView:player-roles-ready', selectedCharacter)
  })
}


SelectView.prototype.populateRole = function(characters){
  // list = characters.map((character) => {
  //   return character.role
  //   console.log(list);
  // })

  characters.forEach((character) => {
    const heroRole = document.createElement('option')
    heroOption.value = character
    heroOption.textContent = character
    this.container.appendChild(heroRole)
    console.log(heroRole);
  });
}

module.exports = SelectView;
