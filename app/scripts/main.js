var AppView = Backbone.View.extend({

  initialize: function(){
    var coolPhotos = new PhotoCollectionOne();
    var coolerPhotos = new PhotoCollectionTwo();
    var coolestPhotos = new PhotoCollectionThree();

    coolPhotos.fetch();
    coolerPhotos.fetch();
    coolestPhotos.fetch();

    this.listenTo(coolPhotos, 'add', function(photo1){
      new ContainerViewOne({model: photo1});
    });
    this.listenTo(coolerPhotos, 'add', function(photo2){
      new ContainerViewTwo({model: photo2});
    });
    this.listenTo(coolestPhotos, 'add', function(photo3){
      new ContainerViewThree({model: photo3})
    });
  },
});

new AppView();