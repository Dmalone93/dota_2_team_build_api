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

  const dota = new Dota();
  dota.bindEvents();
  dota.getData();

  const characterContainer = document.querySelector('#line-up-container');
  const dotaDetailView = new DotaDetailView(characterContainer);
  dotaDetailView.bindEvents();

});





















  // const submitButton = function (event) {
  //   event.preventDefault();
  //
  //   const playerDiv = new DotaDetailView()
  //   const singleCharacter = playerDiv.renderCharacter(event.target);
  //   console.log(singleCharacter);
  //   characterContainer.appendChild(singleCharacter);
  //
  //   event.target.reset();
  // };
  //
  //
  // const newPlayer = document.querySelector('#character-div-creator');
  // newPlayer.addEventListener('submit', submitButton);
