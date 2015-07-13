//  -------------------------
//  games : collections : lib
//  -------------------------

//  collection
    Games = new Mongo.Collection('games');


//  hooks
    Games.before.insert(function (userId, game) {
      game.createdAt = Date.now();
    });


//  methods
    Meteor.methods({
      newGame: function (game) {
        Scores.remove({});

        return Games.insert(game, function (err, game) {
          if (err) throw new Meteor.Error(err.reason);

          Scores.insert({
            key: 'A',
            value: 50,
            bonus: true,
            bonusEvery: 3,
            bonusTotal: 0
          });

          Scores.insert({
            key: 'B',
            value: 30,
            bonus: true,
            bonusEvery: 2,
            bonusTotal: 0
          });

          Scores.insert({
            key: 'C',
            value: 20
          });

          Scores.insert({
            key: 'D',
            value: 15
          });

          return game;
        });
      }
    });
