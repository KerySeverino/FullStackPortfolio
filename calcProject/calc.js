//Updates screen
function display(data){
    document.getElementById('screen').value += data;
    return data;
}

function clearDisplay(){
    document.getElementById('screen').value = "";
}

function solve(){
    let screen = document.getElementById('screen');
    let data = screen.value;
    let result = eval(data);
    screen.value = result;
    return result;
}

