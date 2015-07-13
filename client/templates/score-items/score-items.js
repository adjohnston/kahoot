//  --------------------------------
//  score items : templates : client
//  --------------------------------

    Template.ScoreItems.onCreated(function () {
      if (Session.get('Game'))
        this.subscribe('scores', Session.get('Game'));
    });

    Template.ScoreItems.helpers({
      scores: function () {
        //  sort scores by key name
        return Scores.find({gameId: Session.get('Game')}, {sort: {key: 1}});
      },

      total: function () {
        if (this.bonusFn)
          this.bonusFn();

        return this.total + ((this.bonus) ? this.bonusTotal : 0);
      }
    });
