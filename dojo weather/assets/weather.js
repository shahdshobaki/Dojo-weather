function stateWeather(element){
    alert("loading weather report ...");
}
function removeMe(){
document.querySelector('.footer').remove();
}

 x = document.querySelectorAll('.degree')
function chooseTemp(element){
    if (element.value== "Celsius"){
        for(i=0;i<x.length;i++){
            var y = x[i].innerText
            var z = (y-32)*5/9
            x[i].innerText = Math.round(z)
            
        }
        
    } 
    else if(element.value=="Fahrenheit"){
        for(i=0;i<x.length;i++){
            var y = x[i].innerText
            var z = (y*9/5)+32
            x[i].innerText =Math.round(z)
           
        }
}
}

