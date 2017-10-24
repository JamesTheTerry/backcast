var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>'); // why is this here?
    // this.$el.html(this.template())
    console.log('curr', this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
