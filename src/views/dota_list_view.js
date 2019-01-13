const PubSub = require('../helpers/pub_sub.js')

const DotaListView = function(container, roleChoice){
  this.container = container
  this.roleChoice = roleChoice
};

DotaListView.prototype.bindEvents = function(){
  PubSub.subscribe('Dota:all-ready', (event) => {
    this.populate(event.detail)
  })
  this.container.addEventListener('change', (event) => {
    const selectedCharacter = event.target.value
    console.log(selectedCharacter);
    PubSub.publish('DotaListView:character-selected', selectedCharacter)
  })
};

DotaListView.prototype.populate = function(allHeroes){

  allHeroes.forEach((hero) => {
    const option = document.createElement('option');
    option.value = JSON.stringify(hero)
    option.textContent = hero.localized_name
    this.container.appendChild(option)
  })

};

DotaListView.prototype.render = function(heroChosen){
  heroChosen.forEach((choice) => {
    const heroDetail = new DotaDetailView();
    const playerDiv = heroDetail.createHeroDetail(heroChosen);
    this.heroContainer.appendChild(playerDiv);

  })
}

module.exports = DotaListView;
