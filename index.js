let player='X';
let gameOver = false;

const changePlayer = () => {
    return player === 'X' ? '0':'X';
}

const checkWon = () =>{
    let boxTexts = document.getElementsByClassName("boxText");
    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
winPos.forEach(ele => {
    if(boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
        boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
        boxTexts[ele[0]].innerText !== ""){
            document.getElementById("result").innerText=boxTexts[ele[0]].innerText + " won";
            gameOver=true;
            document.querySelector("img").style.width = "200px";
         }
})
}
var count=0;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxText=box.querySelector(".boxText")
    box.addEventListener("click",()=>{
        if(boxText.innerText==="" && !gameOver){
        boxText.innerText=player;
        count++;
        player =changePlayer();
        checkWon();
        if(count ===9 && !gameOver){
            document.getElementById("result").innerText= " Game Draw";
        }
        document.getElementsByClassName("player")[0].innerText=player;    
    }
    })
});

let reset= document.getElementsByClassName("reset")[0];
reset.addEventListener("click",()=>{
    let boxTexts=document.querySelectorAll(".boxText");
    boxTexts.forEach(boxText=>{
        boxText.innerText="";
    })
    player='X';
    gameOver=false;
    count=0;
    document.getElementsByClassName("player")[0].innerText=player;
    document.getElementById("result").innerText="Game In Progress";
    document.querySelector("img").style.width = "0px";
});
