const DotaListView = require('./views/dota_list_view.js')
const Dota = require('./models/dota.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');


  const heroMenu = document.querySelector('#character-select')
  const heroChoice = document.querySelector('#line-up-container')
  const dotaListView = new DotaListView(heroMenu, heroChoice);
  dotaListView.bindEvents();


  const dota = new Dota();
  dota.bindEvents();
  dota.getData();

})
