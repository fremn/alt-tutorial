var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');

class FavoritesStore {
  constructor() {
    this.locations = {} ;
    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      removeFavoriteLocation: LocationActions.UN_FAVORITE_LOCATION
    });
  }

  addFavoriteLocation(location) {
    this.locations[location.id] = location;
  }

  removeFavoriteLocation(location) {
    delete this.locations[location.id]
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
