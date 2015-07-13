//  -----------------------------
//  new game : templates : client
//  -----------------------------

//  create a new game when button is
//  clicked.

    Template.NewGame.events({
      'click button': function (e, tmpl) {
        Meteor.call('newGame', {}, function (err, game) {
          if (err) return err.reason;

          Meteor.subscribe('currentGame', game);
          Session.set('Game', game);
        });
      }
    });
