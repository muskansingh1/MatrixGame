var ClickedDivs = 0;
var DivsArr = [];

function MyFunction(BlockId) {

    ClickedDivs++;
    var block = document.getElementsByClassName(BlockId);
    block[0].style.backgroundColor = 'red';
    DivsArr.push(block[0]);
    if(ClickedDivs > 2){
        TurnFirstDivBackToBlue();
    }
  
}

function TurnFirstDivBackToBlue(){
    DivsArr[ClickedDivs-3].style.backgroundColor = 'blue';
    // DivsArr.pop();
}