function eval(){
    let input = document.getElementById("input").value;
    for(i=1; i<11; i++){
        alert(input + " * " + i + " = " + input*i );
    }
    document.getElementById("input").value = "";
}
