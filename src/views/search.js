var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click button': 'handleSearch',
    'keyup input': function(e) {
      if (e.keyCode === 13) {
        this.handleSearch();
      }
    },
    'keyup input': function(e) {
      // create a debounced version of this.handleSearch, binding the collection to it
      // then invoke immediately
      _.debounce(this.handleSearch.bind(this), 500)();
    }
  },

  handleSearch: function() {
    var query = $('.form-control').val();
    this.collection.search(query);
  },

  template: templateURL('src/templates/search.html')

});
