angular.module("demo",[])
.controller("demoCtrl",demoCtrl)


function demoCtrl(){

    var demo = this;
  
demo.langs = ["hi","en"];

demo.conversions = ["ayurveda to modern","modern to ayurveda"]
     
    demo.data ={
        "en":[  {baseUnit:"parmanu",convertedUnit:"mg",factor:"0.0016"},
        {baseUnit:"marichi",convertedUnit:"mg",factor:"0.32"}],
        "hi":[  {baseUnit:"परमाणु",convertedUnit:"mg",factor:"0.0016"},
        {baseUnit:"मारीचि",convertedUnit:"mg",factor:"0.32"}]

    }


    demo.calc = function(){
       return demo.selected*demo.input/demo.factor
    }
      
    

    demo.weights = [
        {name:"mg",unit:1},
        {name:"g",unit:1000},
        {name:"kg",unit:1000000}

    ]


}