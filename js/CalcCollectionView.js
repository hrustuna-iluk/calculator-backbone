var CalcCollectionView = Backbone.View.extend({
   // el:"li",
    //tagName: 'li',
    template: _.template($('#calculationHistory').html()),
    content: $('footer #historyList'),
    initialize: function(options) {
        this.collection = options.collection;
        this._attachEvents();
    },
    _attachEvents: function() {
        this.collection.on('add', $.proxy(this.render, this));
        this.collection.on('remove', this.remove, this);
    },
    render: function() {
        if(this.collection.length){
            var collectionArr = this.collection.toArray();
            collectionArr.forEach(function(model) {
                this.$el.html();
                this.content.html(this.$el);

            });
        return this;
        }
        return;
       /* var self = this;

        this.el.html('');
        _.each(this.collection.toArray(), function (calc, i) {
            self.el.append((new CalcView({model: calc})).render().el);
        });
        */
    },
    remove: function(model) {
        this.collection.remove(model);
    }
});