var FeelingsView = Backbone.View.extend({

 tagName: 'ul',
 className: 'feels',

 
 initialize: function(options){
   this.render(options.collection);
 },

 render: function(collection){
   //binding this to self for use in nested callbacks

   var self = this;

   //straight up underscore template
   var template =$('#feels').html();
   var rendered =_.template(template);

//iterating over our models
   _.each(collection.models, function(c){
     //each iteration...appendimg the data
     //to our elemant that backbone created
     self.$el.append(rendered(c.attributes));

   });
 //take the data and append it into a specific element
 //on my page
   $('#feelsContainer').html(this.el);
   return this;
 }

});
