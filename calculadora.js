
module.exports ={

    soma:function(n1, n2){

        if(!isNaN(n1) || !isNaN(n2)){

            return parseFloat(n1)+parseFloat(n2)
        }
        return n1 + n2;
    },

    subtracao: function(n1, n2){

        return n1 -n2
    },
    multiplicacao: function(n1, n2){

        return n1 * n2;
    },
    divisao: function(n1,n2){

        return n1 /n2;

    }
}