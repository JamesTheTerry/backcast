var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.url = 'https://www.googleapis.com/youtube/v3/search';
  },

  // learn how to search on Tuesday
  search: function() {
    // fetch()
  }

});
