//  --------------------------
//  total : templates : client
//  --------------------------

    Template.Total.onCreated(function () {
      if (Session.get('Game'))
        this.subscribe('scores', Session.get('Game'));
    });

    Template.Total.helpers({
      total: function () {
        var scores = Scores.find({gameId: Session.get('Game')}).fetch();

        return scores.map(function (score) {
          return score.total + ((score.bonus) ? score.bonusTotal : 0);
        }).reduce(function (o, n) {
          return o + n;
        }, 0);
      }
    });
