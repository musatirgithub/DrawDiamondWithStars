let myNum = 8;
const median = myNum-1;
// this loop is for rows
for (let row = 0; row <2* myNum -1; row++){
    //this loop is for columns
    let rowText = '';
    // if statement is for 
    if (row < myNum) {
        for (let col = 0; col<2*myNum-1; col++){
            if(col == median - row || col == median + row){
                rowText += '*';
            } else{
                rowText += ' '
            }
        }
    } else {
        for (let col = 0; col<2*myNum-1; col++){
            if(col == median - (2*myNum -2 - row) || col == median + (2*myNum -2 - row)){
                rowText += '*';
            } else{
                rowText += ' '
            }
        }
    }
    console.log(rowText);
}