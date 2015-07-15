  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.bannerT.rendered = function () {
 // $( '.zig' ).toggle('slide',{direction: 'right,down'} , 1200);
 // $( '.zag' ).delay(800).toggle('slide', {direction: 'left'} , 1200);
};

  

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

Accounts.ui.config({
 requestPermissions: {
    facebook: ['user_likes']
  },
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
