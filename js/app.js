
      //  var collection = new SentenceModelCollection();
/*        var questions = getData();

        questions.forEach(function(question) {
            var model = new SentenceModel({
                title: question
            });
            collection.add(model);
        });
*/      var collection = new CalcCollection();

        new CalcView({
            model: new CalcModel,
            collection:collection
        }).render();

       new CalcCollectionView({
           collection:collection
       }).render();

