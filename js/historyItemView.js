var historyItemView = Backbone.View.extend({

    template: _.template($('#calculationHistory').html()),
    className: "newItem",

    initialize: function(options) {
        this.model = options.model;
    },
    attachEvent:function(){
        this.$('.delete').on('click', $.proxy(this.remove,this));
    },

    render: function(model) {
        this.$el.html(this.template(this.model.toJSON()));
        this.attachEvent();
        return this;
        }
});