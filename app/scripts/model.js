'use strict';

var Photo = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    url: ''
  },
});

var PhotoCollectionOne = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/lances-photos-one'
});

var PhotoCollectionTwo = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/lances-photos-two'
});

var PhotoCollectionThree = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/lances-photos-three'
});
