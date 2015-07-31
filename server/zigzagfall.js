TheLines = new Mongo.Collection("lines");

 Meteor.startup( function () {
  TheLines.remove({});
 })


  Meteor.publish("lines", function () {
    return TheLines.find({}, {sort: {date: -1}});
      });



 

    
//added to determine who is online.  What package?
    Meteor.publish(null, function () {

    return [ Meteor.users.find ( {},
      {fields: {status:1, username: 1}},

      UserStatus.connections.find())]

  });