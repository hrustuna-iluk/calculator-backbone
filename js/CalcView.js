var CalcView = Backbone.View.extend({
    //el: ".calculationField",
    template: _.template($('#calculationField').html()),
    content: $("#main"),
    historyContent:$('#footer'),
    className: 'templateHolder',

    /*protected methods*/

    _attachEvents: function(){
        this.$el.on('keypress', $.proxy(this._operationKeyValue,this))
    },


    _operationKeyValue: function(e){
        switch(e.keyCode){
            case 43 : {
                this.model.set('operation' , '+');
                break;
            }
            case 45 : {
                this.model.set('operation' , '-');
                break;
            }
            case 42 : {
                this.model.set('operation' , '*');
                break;
            }
            case 47: {
                this.model.set('operation' , '/');
                break;
                }
            case 61: {
                e.preventDefault();
                this._setOperandsValue();
                this._calculateResult();
                break;
            }
            default: {
                this._numberKeyValue(e);
            }
        }
    },
    _numberKeyValue: function(e){
        var numberValue = '';
        if (e.keyCode >= 48 && e.keyCode <= 57 ){
            numberValue = String.fromCharCode(e.keyCode);
            return;
        }
        e.preventDefault();
        return alert("You can use only numbers and operations");
    },



    _setOperandsValue: function(){
        var RegExp = /[\+,\-,\*,\/]/;
        var masOfOperands = this.$('.calculationField').val().split(RegExp);
        this.model.set('firstOperand', masOfOperands[0]);
        this.model.set('secondOperand', masOfOperands[1]);
    },

    _calculateResult: function(){
        if(this.model.get('firstOperand')=== '' || this.model.get('secondOperand') === '' || this.model.get('operation') === null ){
          alert ("Input a correct operation.");
          return;
        }
        this.$('.calculationField').val(this.model.calculate());
        this._newHistoryItem();
        this.model.reset();
    },
    _newHistoryItem: function(){
         var historyItem = new CalcModel(this.model.toJSON());
         this.historyContent.append(new historyItemView({model:historyItem}).render().el);

    },
    /*public methods*/

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.content.html(this.$el);
        this._attachEvents()
        return this;
    }

});