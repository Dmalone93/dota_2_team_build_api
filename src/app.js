const DotaListView = require('./views/dota_list_view.js');
const Dota = require('./models/dota.js');
const SelectView = require('./views/select_view.js');
const DotaDetailView = require('./views/dota_detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');



  const heroRoleSelector = document.querySelector('#role-select');
  const selectView = new SelectView(heroRoleSelector);
  selectView.bindEvents();



  const heroMenu = document.querySelector('#character-select')
  const heroChoice = document.querySelector('#role-select')
  const dotaListView = new DotaListView(heroMenu, heroChoice);
  dotaListView.bindEvents();



  const direPlayer = document.querySelector('#dire-team-container')
  const radientPlayer = document.querySelector('#radient-team-container')
  // const dotaDetailView = new DotaDetailView(direPlayer, radientPlayer);
  // dotaDetailView.bindEvents();


  const dota = new Dota();
  dota.bindEvents();
  dota.getData();

})
