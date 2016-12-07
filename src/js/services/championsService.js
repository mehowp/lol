class ChampionService {

  constructor() {
    'ngInject;'
  }

  championStats(championName) {
  	var champion =  _.find(data.champions, { 'name': championName });
  	return champion.info;
  }

  getChampion(championName) {
  	return _.find(data.champions, { 'name': championName });
  }

  getAllChampions() {
  	return data.champions;
  }

}

export default ChampionService;