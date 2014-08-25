
      //  var collection = new SentenceModelCollection();
/*        var questions = getData();

        questions.forEach(function(question) {
            var model = new SentenceModel({
                title: question
            });
            collection.add(model);
        });
*/

        new CalcView({
            model: new CalcModel,
        }).render();



