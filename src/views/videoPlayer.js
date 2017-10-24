var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.switchVideo);
    // console.log('tc: ', this.collection);
    this.listenTo(this.collection, 'sync', this.switchOnSearch);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>'); // why is this here?
    console.log('curr', this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  switchOnSearch: function() {
    // on sync, we trigger this function
    // which calls select on the first collection item
    // and by calling select, will fire the select listener
    // which calls switchVideo
    // which re renders
    this.collection.at(0).select();

    // or we could be normal people and just do this:
    // this.model = this.collection.at(0);
    // this.render();
  },

  switchVideo: function(clickedVideo) {
    console.log('clickedVideo', clickedVideo);
    this.model = clickedVideo;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
