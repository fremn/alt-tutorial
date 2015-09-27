var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');

class FavoritesStore {
  constructor() {
    this.locations = {} ;
    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      removeFavoriteLocation: LocationActions.UNFAVORITE_LOCATION
    });
  }

  addFavoriteLocation(location) {
    this.locations[location.id] = location;
  }

  removeFavoriteLocation(location) {
    this.locations[location.id] = null
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
