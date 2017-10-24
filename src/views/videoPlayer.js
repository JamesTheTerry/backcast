var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.switchVideo);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>'); // why is this here?
    console.log('curr', this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  switchVideo: function(clickedVideo) {
    console.log('clickedVideo', clickedVideo);
    this.model = clickedVideo;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
