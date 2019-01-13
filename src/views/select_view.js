const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(container){
  this.container = container
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('DotaListView:character-selected', (event) => {
    this.populate(event.detail);

  });
  this.container.addEventListener('change', (event) => {
    const selectedCharacterRole = event.target.value
    console.log(selectedCharacterRole);
    PubSub.publish('SelectView:player-roles-ready', selectedCharacterRole)
  });
}


SelectView.prototype.populate = function(hero){
  this.container.innerHTML = ''
  heroObject = JSON.parse(hero)
  heroObject.roles.forEach((role) => {
    const option = document.createElement('option');
    option.value = role
    option.textContent = role
    this.container.appendChild(option);
  });
}

module.exports = SelectView;
