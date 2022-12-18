let result = document.getElementById("resultss")


try{
    let a = 3, b = 2;

    result.innerHTML = "Somme de a et de b " + (a + b)
}
catch (error){
    if (error instanceof TypeError){
        alert(
            "L'élément:" + (error.name) + (error.message)
        )
    }
    else{
        alert( "ça viens d'autre chose");
    }
}