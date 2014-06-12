
var ContainerViewOne = Backbone.View.extend({

  classname: 'detail-box',

  containerTemplateOne: _.template($('.template-one').text()),

  events: {

    'click .slide-button-one'	: 'slideFirst',
    'click .slide-button-two'	: 'slideSecond',
    'click .deletebutton'		: 'destroy',

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
      return this;
    }
  },

	slideFirst: function() {

		ContainerViewOne.add(this.$el.get({ model: 'url' }))
		// $('.box-one').html('');
		$('.box-one').append(this.el);

		var renderTemp = this.containerTemplateOne(this.model.attributes)
		this.$el.html(renderTemp);
	},

	slideSecond: function()  {

		ContainerViewOne.add(this.$el.get({ model: 'url' }))
		// $('.box-two').html('');
		$('.box-two').append(this.el);

		var renderTemp = this.containerTemplateOne(this.model.attributes)
		this.$el.html(renderTemp);
	},

	destroy: function()  {
		this.model.destroy();
		this.remove();
	},
});
