var clicked=false
function clickedButton(){

    var button = document.getElementById('btn')
    console.log(button + "clicked");
    if (clicked==false){
        button.style.backgroundColor="red";
        clicked=true;
    }
    else{
        button.style.backgroundColor="aliceblue"
        clicked=false;
    }
    return 0
}