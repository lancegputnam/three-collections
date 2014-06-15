
var ContainerViewOne = Backbone.View.extend({

  classname: 'detail-box',

  containerTemplateOne: _.template($('.template-one').text()),

  events: {

    'click .slide-button-one'	: 'slideToYes',
    'click .slide-button-two'	: 'slideToNo',
    'click .deletebutton'		  : 'destroy',

  },

  // this initialize is appending to .box-one ... it is then being rendered
  initialize: function(){
    // this.listenTo(this.model, 'destroy', this.remove);
    $('.box-one').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderTemplate = this.containerTemplateOne(this.model.attributes);
      this.$el.html(renderTemplate);
      //shorthand method to chain, recommended to put on render 
      return this;
    }
  },

	slideToYes: function() {
    console.log(this.model)
		groupTwoPhotos.add(this.model)
		$('.box-two').append(this.el);

		var renderTemp = this.containerTemplateOne(this.model.attributes)
		this.$el.html(renderTemp);

    // this is not saving!!
    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });
	},

	slideToNo: function()  {
    console.log(this.model)
    groupTwoPhotos.add(this.model)
    $('.box-three').append(this.el);

		var renderTemp = this.containerTemplateOne(this.model.attributes)
		this.$el.html(renderTemp);

    // this is not saving!!!
    this.model.save().done(function() {
      this.$el.find('.status').html('Saved!');
    });
	},

	destroy: function()  {
		this.model.destroy();
		this.remove();
	},
});
