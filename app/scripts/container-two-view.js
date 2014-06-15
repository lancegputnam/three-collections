var ContainerViewTwo = Backbone.View.extend({

  classname: 'thumbnail',

  containerTemplateTwo: _.template($('.thumbnail-template-two').text()),

  events: {

    'click .slide-button-one' : 'slideToYes',
    'click .slide-button-two' : 'slideToNo',
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

  slideToYes: function() {
    console.log(this.model)
    groupTwoPhotos.add(this.model)
    $('.box-two').append(this.el);

    var renderTemp = this.containerTemplateTwo(this.model.attributes)
    this.$el.html(renderTemp);

    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });
  },

  slideToNo: function()  {
    console.log(this.model)
    groupTwoPhotos.add(this.model)
    $('.box-three').append(this.el);

    var renderTemp = this.containerTemplateTwo(this.model.attributes)
    this.$el.html(renderTemp);

    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });
  },

  destroy: function()  {
    this.model.destroy();
    this.remove();
  },

});
