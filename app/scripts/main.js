var AppView = Backbone.View.extend({

  initialize: function(){
    groupOnePhotos = new PhotoCollectionOne();
    groupTwoPhotos = new PhotoCollectionTwo();
    groupThreePhotos = new PhotoCollectionThree();

    groupOnePhotos.fetch();
    groupTwoPhotos.fetch();
    groupThreePhotos.fetch();

    this.listenTo(groupOnePhotos, 'add', function(photoOne){
      // groupOnePhotos.each( 'add', function(photoOne) { 
      new ContainerViewOne({model: photoOne});
    });
    this.listenTo(groupTwoPhotos, 'add', function(photoTwo){
      // groupTwoPhotos.each( 'add', function(photoTwo) { 
      new ContainerViewTwo({model: photoTwo});
    });
    this.listenTo(groupThreePhotos, 'add', function(photoThree){
      // groupThreePhotos.each( 'add', function(photoThree) { 
      new ContainerViewThree({model: photoThree})
    });
  },
});

var myApp = new AppView();