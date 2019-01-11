const PubSub = require('../helpers/pub_sub.js')

const DotaListView = function(container, heroContainer){
  this.container = container
  this.heroContainer = heroContainer
};

DotaListView.prototype.bindEvents = function(){
  PubSub.subscribe('Dota:all-ready', (event) => {
    this.populate(event.detail)
    PubSub.publish('DotaListView:character-names-ready', event.detail)
  })
};


DotaListView.prototype.populate = function(allHeroes){

  // const list = allHeroes.map((hero) => {
  //   if(hero.primary_attr === "str"){
  //     return hero.localized_name;
  //   };
  // });

    allHeroes.forEach((hero) => {
    const heroOption = document.createElement('option')
    heroOption.value = hero
    heroOption.textContent = hero.localized_name
    this.container.appendChild(heroOption)
  });
};

DotaListView.prototype.render = function(heroChosen){
  heroChosen.forEach((choice) => {
    const heroDetail = new DotaDetailView();
    const playerDiv = heroDetail.createHeroDetail(heroChosen);
    this.heroContainer.appendChild(playerDiv);

  })
  player = new DotaDetailView
}

module.exports = DotaListView;
