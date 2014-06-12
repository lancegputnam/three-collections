var ContainerViewThree = Backbone.View.extend({

  classname: 'thumbnail',
  containerTemplateThree: _.template($('.template-three').text()),

  events: {

    'click .slide-button-one' : 'slideFirst',
    'click .slide-button-two' : 'slideSecond',
    'click .deletebutton'     : 'destroy',
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    $('.box-three').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.containerTemplateThree(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },

  slideFirst: function() {
    this.model.destroy();
    this.remove();

    ContainerViewThree.add(this.$el.get({ model: 'url' }))
    // $('.box-one').html('');
    $('.box-one').append(this.el);

    var renderTemp = this.containerTemplateThree(this.model.attributes)
    this.$el.html(renderTemp);
  },

  slideSecond: function()  {
    this.model.destroy();
    this.remove();

    ContainerViewThree.add(this.$el.get({ model: 'url' }))
    // $('.box-two').html('');
    $('.box-two').append(this.el);

    var renderTemp = this.containerTemplateThree(this.model.attributes)
    this.$el.html(renderTemp);
  
  },
});