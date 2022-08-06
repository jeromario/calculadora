function display(val){
    document.getElementById('resultado').value += val;
    return val;
}

function solve(){
    let x = document.getElementById('resultado').value;
    let y = eval(x);
    document.getElementById('resultado').value = y;
    return y;

}
 function clearScreen(){
    document.getElementById('resultado').value = '';
 }