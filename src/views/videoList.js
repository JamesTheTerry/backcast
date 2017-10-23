var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().children().detach(); // we're clearing the children in a very weird way
    this.$el.children().append(
      this.collection.map(this.renderVideoListEntry));
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderVideoListEntry: function(video) {
    return new VideoListEntryView({model: video}).render().$el;
  }

});
