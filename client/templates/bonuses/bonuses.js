//  ----------------------------
//  bonuses : templates : client
//  ----------------------------

    Template.Bonuses.onCreated(function () {
      var gameId = Session.get('Game');

      if (gameId)
        this.subscribe('scores', gameId);
    });

    Template.Bonuses.helpers({
      total: function () {
        var scores = Scores.find({gameId: Session.get('Game')}).fetch();

        return scores.map(function (score) {
          return (score.bonus) ? score.bonusTotal : 0;
        }).reduce(function (o, n) {
          return o + n;
        }, 0);
      }
    });
