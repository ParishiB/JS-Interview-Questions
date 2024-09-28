function x(){
    for(let i = 1 ; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        } , i * 1000)
    }
    console.log("follow mw")
}

x();



function x1(){
    for(var i = 1 ; i <= 5; i++){
        function print(value){
            setTimeout(function(){
            console.log(value);
           } , i * 1000)
        }
        print(i);
    
    }
    console.log("follow me")
}

x1();


