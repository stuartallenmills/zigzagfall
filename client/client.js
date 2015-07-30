  // counter starts at 0
 
 Accounts.ui.config({
   requestPermissions: {
     // facebook: ['user_likes']
   },
   requestOfflineToken: {
     // google: true
   },
   passwordSignupFields: 'USERNAME_AND_EMAIL' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
 });

  Meteor.subscribe('Lines');

  Template.bannerT.rendered = function () {
 // $( '.zig' ).toggle('slide',{direction: 'right,down'} , 1200);
 // $( '.zag' ).delay(800).toggle('slide', {direction: 'left'} , 1200);
};

var lineInput = function (event) {
      var val ={};
      try {
      val.aline = event.currentTarget.value;
      if (val.aline.length < 1) {
        return;
      }
      val.user = Meteor.user().username;
      val.date = new Date();
      console.log(val);
     // Lines.insert(val);
      Meteor.call('doupdate', val);
      event.currentTarget.value="";
    }
    catch (err) {
      alert("error -"+ err);
    }
 
}
  Template.body.helpers ( {
    users: function (){
      var theusers = Meteor.users.find(); 
      var ucount = theusers.count();
      var thearray = theusers.fetch();
      var first=thearray[0];
      return theusers;
    },

    lines: function() {
      var lcount= Session.get('lineCount');
      var lines= Lines.find({}, {sort: {date: -1}});
      var nlines = lines.count();
      if (nlines > lcount)   {

        var sound = document.getElementById("audio");
          sound.play();
          }  
      Session.set('lineCount', nlines);   
      var larr = lines.fetch();
      console.log(larr);
      var f = larr[0];
      console.log(f);
      return lines;
    },

    formatDate: function(date) {
      var options={
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
};
    

    
    aval = date.toLocaleTimeString("en-us", options);
  
     if (aval.length >0) {
      return aval;
     } else {
      return date;
     }
    }



  });

  Template.body.events ( {
    'blur #whatsup': function (event) {
      lineInput(event);

    },

    'keypress #whatsup': function(event) {
      if ((event.which == 13) || (event.which == 9)) {
        lineInput(event);
       }
     },

      'click #audiob': function  (event) {
          var sound = document.getElementById("audio");
          sound.play();
      }
  });

  Template.userPill.helpers ({
    labelclass: function () {
      console.log(this);
     if (this.status.online)
        return "label-success"
      else
        return "label-default"
    }
  })

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
