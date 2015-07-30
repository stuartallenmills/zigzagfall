
  Meteor.startup(function () {
    // code to run on server at startup
    Lines.remove({});

      Meteor.publish('Lines', function () {
    return Lines.find({}, {sort: {date: -1}});
  });

 Meteor.publish(null, function () {

    return [ Meteor.users.find ( {},
      {fields: {status:1, username: 1}},

      UserStatus.connections.find())]

  });

  });

  Meteor.methods({
  doupdate: function (val ) {
    Lines.insert(val);
  }
});

