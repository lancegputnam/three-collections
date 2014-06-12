var AppView = Backbone.View.extend({

  initialize: function(){
    var groupOnePhotos = new PhotoCollectionOne();
    var groupTwoPhotos = new PhotoCollectionTwo();
    var groupThreePhotos = new PhotoCollectionThree();

    groupOnePhotos.fetch();
    groupTwoPhotos.fetch();
    groupThreePhotos.fetch();

    this.listenTo(groupOnePhotos, 'add', function(photoOne){
      new ContainerViewOne({model: photoOne});
    });
    this.listenTo(groupTwoPhotos, 'add', function(photoTwo){
      new ContainerViewTwo({model: photoTwo});
    });
    this.listenTo(groupThreePhotos, 'add', function(photoThree){
      new ContainerViewThree({model: photoThree})
    });
  },
});

new AppView();