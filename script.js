function deleteMe() {
    document.getElementById("myResult").value = "";
}

function calculator(NewValue){
    document.getElementById("myResult").value += NewValue;

}

function Answer(){
    let a = document.getElementById("myResult").value;
    let b = eval(a);
    document.getElementById("myResult").value = b;
}