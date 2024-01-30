function calculator() {
    let functionaliy = {
        num1Ref: null,
        num2Ref: null,
        resultRef: null,
        num1: 0,
        num2: 0,

        init: function (selector1, selector2, resultSelector) {
            this.num1Ref = document.querySelector(selector1);
            this.num2Ref = document.querySelector(selector2);
            this.resultRef = document.querySelector(resultSelector);
            this.num1 = Number(this.num1Ref.value);
            this.num2 = Number(this.num2Ref.value);
        },

        add: function () {
            this.num1 = Number(this.num1Ref.value);
            this.num2 = Number(this.num2Ref.value);
            this.resultRef.value = this.num1 + this.num2;
        },
        subtract: function () {
            this.num1 = Number(this.num1Ref.value);
            this.num2 = Number(this.num2Ref.value);
            this.resultRef.value = this.num1 - this.num2;
        }
    }

    return functionaliy;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');