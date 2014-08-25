var CalcModel = Backbone.Model.extend({
    defaults: function(){
      return  {
          firstOperand: '',
          secondOperand: '',
          operation: null,
          result: 0
      }

    },
    /*protected methods*/

    /* This methods are used for addition, multiplication, substraction and division of two operands*/

    _addition: function() {
        this.set({result: parseFloat(this.get('firstOperand')) + parseFloat(this.get('secondOperand'))});
        return this.get('result');
    },
    _substraction: function() {
        this.set({result: parseFloat(this.get('firstOperand')) - parseFloat(this.get('secondOperand'))});
        return this.get('result');
    },
    _multiplication: function() {
        this.set({result: parseFloat(this.get('firstOperand')) * parseFloat(this.get('secondOperand'))});
        return this.get('result');
    },
    _division: function() {
        this.set({result: parseFloat(this.get('firstOperand')) / parseFloat(this.get('secondOperand'))});
        return this.get('result');
    },
    /*public methods*/

    /*This method check what operation we can use*/

    calculate:function(){
        if(this.get('operation') == '+'){return this._addition()}
        if(this.get('operation') == '-'){return this._substraction()}
        if(this.get('operation') == '*'){return this._multiplication()}
        if(this.get('operation') == '/'){return this._division()}
    },

    clear: function() {
        this.destroy();
    },
    reset:function(){
        this.set({
            firstOperand: '',
            secondOperand: '',
            operation: null,
            result: 0
        })
    }


});