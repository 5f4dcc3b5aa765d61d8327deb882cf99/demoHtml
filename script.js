var clicked=false
function clickedButton(){

    var button = document.getElementById('btn')
    var gif = document.getElementById('gif')
    console.log(button + "clicked");
    if (clicked==false){
        button.style.backgroundColor="darkorange";
        button.style.color="aqua";
        clicked=true;
        gif.src="blueFlame.gif"
    }
    else{
        button.style.backgroundColor="aqua"
        button.style.color="darkorange";
        clicked=false;
        gif.src="flame.gif"
    }
}