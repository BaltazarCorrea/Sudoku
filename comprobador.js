function comprobar(){
    //Definicion de variables
    let control = []
    let origen = []
    let linea1 = []
    let linea2 = []
    let linea3 = []
    let linea4 = []
    let linea5 = []
    let linea6 = []
    let linea7 = []
    let linea8 = []
    let linea9 = []
    let uno=0, dos=0, tres=0, cuatro=0, cinco=0, seis=0, siete=0, ocho=0, nueve=0;
    var aux=1;
    var contador=0;
    //Asignacion de valores a las lineas y crecion del array principal
    for(let i = 1; i<82; i++){
            if(i<10){
                uno = document.getElementById(i);
                linea1.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<19){
                uno = document.getElementById(i);
                linea2.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<28){
                uno = document.getElementById(i);
                linea3.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<37){
                uno = document.getElementById(i);
                linea4.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<46){
                uno = document.getElementById(i);
                linea5.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<55){
                uno = document.getElementById(i);
                linea6.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<64){
                uno = document.getElementById(i);
                linea7.push(parseInt(uno.getAttribute("value")))
            }
            else if(i<73){
                uno = document.getElementById(i);
                linea8.push(parseInt(uno.getAttribute("value")))
            }
            else{
                uno = document.getElementById(i);
                linea9.push(parseInt(uno.getAttribute("value")))
            }
    }

    origen.push(linea1);
    origen.push(linea2);
    origen.push(linea3);
    origen.push(linea4);
    origen.push(linea5);
    origen.push(linea6);
    origen.push(linea7);
    origen.push(linea8);
    origen.push(linea9);

    control.push(linea1);
    control.push(linea2);
    control.push(linea3);
    control.push(linea4);
    control.push(linea5);
    control.push(linea6);
    control.push(linea7);
    control.push(linea8);
    control.push(linea9);
    
    for(let i = 0; i<9; i++){
        for(let j = 0; j<9; j++){
            if(origen[i][j]===0){
                origen[i][j]="x";
            }
        }
    }

    
    console.log(origen);
    console.log(control);
}