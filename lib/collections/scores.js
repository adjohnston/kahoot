//  --------------------------
//  scores : collections : lib
//  --------------------------

//  collection
    Scores = new Mongo.Collection(null);


//  hooks
    Scores.before.insert(function (userId, score) {
      score.count = 0,
      score.total = 0
    });
