





 Meteor.methods({
  doupdate: function (val ) {
    try {
    TheLines.insert(val);
     console.log(val);
   } catch (err) {
   	console.log("doupdate error "+err)
   }

  }
}); 