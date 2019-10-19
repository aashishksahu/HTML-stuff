/*
    this script inserts cross or zero at clicked table cells
    and checks if it is a match and displays who wins.
*/

var sign = ['x', 'o'];

var status = sign[0];

// function to check if there is a match in the rows, columns or diagonally
function check(table_) {
    // loop through rows(3) 
    for (let i = 0; i < 3; i++) {
        // check if the cell actually contains a "x" or "o"
        if (sign.includes(String(table_.rows[i].cells[0].innerHTML)) && sign.includes(table_.rows[i].cells[1].innerHTML) && sign.includes(table_.rows[i].cells[2].innerHTML)) {
            // loop through each row and check if the first element of the row is same as the second and third
            if (table_.rows[i].cells[0].innerHTML == table_.rows[i].cells[1].innerHTML && table_.rows[i].cells[0].innerHTML == table_.rows[i].cells[2].innerHTML) {
                // if true declare the result
                let result = document.getElementById("result");
                result.innerHTML = status + " wins!";
                return;
            }
        }
    }
    
    // loop through columns(3)
    for (let i = 0; i < 3; i++) {
        // check if the cell actually contains a "x" or "o"
        if (sign.includes(String(table_.rows[0].cells[i].innerHTML)) && sign.includes(table_.rows[1].cells[i].innerHTML) && sign.includes(table_.rows[2].cells[i].innerHTML)) {
            // loop through each column and check if the first element of the column is same as the second and third
            if (table_.rows[0].cells[i].innerHTML == table_.rows[1].cells[i].innerHTML && table_.rows[0].cells[i].innerHTML == table_.rows[2].cells[i].innerHTML) {
                // if true declare the result
                let result = document.getElementById("result");
                result.innerHTML = status + " wins!";
            }
        }
    }
    
    
    // check if the cell actually contains a "x" or "o"
    if (sign.includes(String(table_.rows[0].cells[0].innerHTML)) && sign.includes(table_.rows[1].cells[1].innerHTML) && sign.includes(table_.rows[2].cells[2].innerHTML)) {
        // check across the diagonals
        if(table_.rows[0].cells[0].innerHTML==table_.rows[1].cells[1].innerHTML && table_.rows[0].cells[0].innerHTML==table_.rows[2].cells[2].innerHTML){
            // if true declare the result
            let result = document.getElementById("result");
            result.innerHTML = status+" wins!";
        }
    } 
    
    // check if the cell actually contains a "x" or "o"
    if (sign.includes(String(table_.rows[0].cells[2].innerHTML)) && sign.includes(table_.rows[1].cells[1].innerHTML) && sign.includes(table_.rows[2].cells[0].innerHTML)) {
        // check across the diagonals
        if(table_.rows[0].cells[2].innerHTML==table_.rows[1].cells[1].innerHTML && table_.rows[0].cells[2].innerHTML==table_.rows[2].cells[0].innerHTML){
            // if true declare the result
            let result = document.getElementById("result");
            result.innerHTML = status+" wins!";
        }
    } 
    
    
}


function change_cross(cell_id) {


    // fetch the cell that got clicked
    var cell = document.getElementById(cell_id);
    // set 'o' or 'x' to the cell
    cell.innerHTML = status;

    // fetch the table for checking
    var table = document.getElementById("table");

    // check if there's a match 
    check(table);

    // swap the status to alternate between 'o' and 'x'

    if (status == sign[0]) {
        status = sign[1];
    } else if (status == sign[1]) {
        status = sign[0];
    }

}