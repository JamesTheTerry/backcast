var VideoListView = Backbone.View.extend({

  initialize: function() {
    console.log(this.collection);
    this.collection.on('sync', this.render, this);
  },

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
