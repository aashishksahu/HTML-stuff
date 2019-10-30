var pick = false;
var piece = null;
var turn = 1;


function getPiece(pieceID){
    if(pick==false && document.getElementById(pieceID).innerHTML!=""){
        piece = document.getElementById(pieceID);
        if(turn == 0 && piece.innerHTML.toString().includes("black")){
            pick = true;
            turn = 1;
            document.getElementById("status").innerHTML = "Turn: White";
            return;
        }

        if(turn == 1 && piece.innerHTML.toString().includes("white")){
            pick = true;
            turn = 0;
            document.getElementById("status").innerHTML = "Turn: black";
            return;
        }
    }

    if(pick==true){
        if(document.getElementById(pieceID).innerHTML==piece.innerHTML){
            pick = false;
            return;
        }
        document.getElementById(pieceID).innerHTML=piece.innerHTML;
        piece.innerHTML = "";
        pick = false;
        piece = null;
        return;
    }
    

}