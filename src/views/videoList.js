var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  events: {
    'click #autoplay': 'handleAutoplay'
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    if (this.collection.autoplay) {
      $('#autoplay').text('Turn autoplay off');
    } else {
      $('#autoplay').text('Turn autoplay on');
    }
    this.$el.children().append(
      this.collection.map(this.renderVideoListEntry));
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderVideoListEntry: function(video) {
    return new VideoListEntryView({model: video}).render().$el;
  },

  handleAutoplay: function() {
    this.collection.toggleAutoplay();
    this.render();
  }

});
