let myNum = 4;
const median = myNum-1;
// this loop is for rows
for (let row = 0; row <myNum; row++){
    //this loop is for columns
    let rowText = '';
    
    for (let col = 0; col<2*myNum-1; col++){
        if(col == median - row || col == median + row){
            rowText += '*';
        } else{
            rowText += ' '
        }
    }
    console.log(rowText);
}