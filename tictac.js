let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turn0=true;//player x, player O

let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner=()=>{
   for (let Pattern of  arr){
    // console.log(Pattern[0],Pattern[1],Pattern[2]);
    // console.log(
    //     boxes[Pattern[0]].innerText,
    //     boxes[Pattern[1]].innerText,
    //     boxes[Pattern[2]].innerText

    // );
    let pos1val=boxes[Pattern[0]].innerText;
    let pos2val=boxes[Pattern[1]].innerText;
    let pos3val=boxes[Pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Winner",pos1val);
            showwinner(pos1val);
        }

    }

   }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);