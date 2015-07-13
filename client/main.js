//  -------------
//  main : client
//  -------------

    Meteor.startup(function () {
      //  when the server starts, create a
      //  new game and set the session to current
      //  game.
      Meteor.call('newGame', {}, function (err, game) {
        if (err) return err.reason;

        Session.set('Game', game);
      });
    });
