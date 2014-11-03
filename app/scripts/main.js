//create an instance of our feelings
var all_feelings = new Feelings();

//pull our feelings from the server
all_feelings.fetch().done(function (){
 new FeelingsView({
   collection: all_feelings
 });
});
