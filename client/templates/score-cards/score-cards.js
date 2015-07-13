//  --------------------------------
//  score cards : templates : client
//  --------------------------------

    Template.ScoreCards.onCreated(function () {
      this.subscribe('scores');
    });

    Template.ScoreCards.helpers({
      scores: function () {
        return Scores.find();
      }
    });
