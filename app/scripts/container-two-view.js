var ContainerViewTwo = Backbone.View.extend({

  classname: 'thumbnail',

  containerTemplateTwo: _.template($('.thumbnail-template-two').text()),

  events: {

    'click .slide-button-one' : 'slideFirst',
    'click .slide-button-two' : 'slideSecond',
    'click .deletebutton'     : 'destroy',
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    $('.box-two').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.containerTemplateTwo(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },

  slideFirst: function() {
    this.model.destroy();
    this.remove();

    ContainerViewTwo.add(this.$el.get({ model: 'url' }))
    // $('.box-one').html('');
    $('.box-one').append(this.el);

    var renderTemp = this.containerTemplateTwo(this.model.attributes)
    this.$el.html(renderTemp);
  },

  slideSecond: function()  {
    this.model.destroy();
    this.remove();

    ContainerViewTwo.add(this.$el.get({ model: 'url' }))
    // $('.box-two').html('');
    $('.box-two').append(this.el);

    var renderTemp = this.containerTemplateTwo(this.model.attributes)
    this.$el.html(renderTemp);
  },
});


// jump3: function(){
//     $.post('http://tiny-pizza-server.herokuapp.com/collections/lances-photos-three', {
//       url: this.model.attributes.url,
//     });
//     this.model.destroy().done(function(){
//       $('.box-three').html('');
//       $('.box-three').append('');
//       var app = new AppView();
//     })
//   },

//   jump4: function(){
//     $.post('http://tiny-pizza-server.herokuapp.com/collections/lances-photos-one', {
//       url: this.model.attributes.url,
//     });
//     this.model.destroy().done(function(){
//       $('.box-one').html('');
//       $('.box-one').append('');
//       var app = new AppView();