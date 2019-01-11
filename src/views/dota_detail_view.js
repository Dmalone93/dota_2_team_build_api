const DotaDetailView = function(){

}

DotaDetailView.prototype.createHeroDetail = function(hero){
  const heroDiv = document.createElement('div');

  const heroName = document.createElement('h2')
  heroName.textContent = hero.localized_name
  heroDiv.appendChild(heroName);

  const role = document.createElement('h3')
  role.textContent = hero.role
  heroDiv.appendChild(role)

  return heroDiv
}


module.exports = DotaDetailView;
