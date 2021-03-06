var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('autoplay', 0);
  },

  select: function() {
    console.log(this.get('autoplay'));
    this.trigger('select', this);
  }

});
