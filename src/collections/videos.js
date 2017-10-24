var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.url = 'https://www.googleapis.com/youtube/v3/search';
    this.autoplay = false;
  },

  // learn how to search on Tuesday
  search: function(query) {
    this.fetch({
      data: {
        'key': window.YOUTUBE_API_KEY,
        'maxResults': '5',
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'
      }
    });
  },

  parse: function(response) {
    console.log('response', response);
    // this.set(response);
    return response.items;
  },

  toggleAutoplay: function() {
    console.log('we made it to toggleAutoplay');
    this.forEach(function(model, index) {
      model.set('autoplay', (model.get('autoplay') + 1) % 2);
    });
    this.autoplay = !this.autoplay;
  }

});
