//  -----------------------------
//  games : publications : server
//  -----------------------------

    Meteor.publish('currentGame', function (game) {
      return Games.find(game);
    });
