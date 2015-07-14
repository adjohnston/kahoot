//  -------------------------------
//  score card : templates : client
//  -------------------------------

    Template.ScoreCard.onCreated(function () {
      //  counter is for deciding when bonus points
      //  should be applied.
      this.counter = new ReactiveVar(0);

      //  get the current game data.
      this.subscribe('currentGame', Session.get('Game'));
    });


//  when a score card is clicked, update the score
//  collection.
    Template.ScoreCard.events({
      'click li': function (e, tmpl) {
        var game = Games.findOne(Session.get('Game')),
            bonusCount = tmpl.counter.get();

        //  update the counter.
        tmpl.counter.set(bonusCount += 1);

        //  check counter and whether bonus points
        //  should added.
        if (this.bonus && bonusCount % this.bonusEvery === 0) {
          Scores.update(this._id, {$inc: {'bonusTotal': this.value}});
        }

        //  show notification then hide again
        tmpl.$('.card__notify').addClass('show');
        setTimeout(function () {
          tmpl.$('.card__notify').removeClass('show');
        }, 1500);

        Scores.update(this._id, {
          $set: { gameId: game._id },
          $inc: { count: 1,
                  total: this.value }
        });
      }
    });
