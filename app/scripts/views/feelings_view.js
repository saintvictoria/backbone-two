(function () {

  App.Views.FeelingsView = Backbone.View.extend({

    tagName: 'ul',
    className: 'feels',

    initialize: function () {
      this.render(App.all_feelings);
    },

    render: function (collection) {
      // Binding `this` to `self` for use in
      // nested functions/callbacks
      var self = this;

      // Straight up Underscore Template Goodness
      var template = $('#feels').html();
      var rendered = _.template(template);

      // Iterating over our models
      _.each(collection.models, function (c) {
          // Each iteration... appending the data
          // to our element that Backbone created
          self.$el.append(rendered(c.attributes));
      });

      // Take the data and append it into a specific element
      // on my page
      $('#feelsContainer').html(this.el);

      return this;
    }

  });

}());
