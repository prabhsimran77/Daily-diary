const winner=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
let newgame=document.querySelector(".newgame");
let win=document.querySelector(".winner");
let outer=document.querySelector(".outer");
function checkwinner(){
    for (let pattern of winner) {

        pos1=btns[pattern[0]].innerText;
        pos2=btns[pattern[1]].innerText;
        pos3=btns[pattern[2]].innerText;
        if(pos1===pos2&& pos2===pos3){
          
            if(pos1==="X"){   
                win.innerText="Player1 is the winner"  ;
                win.style.display="flex";
                outer.style.display="none";
                reset.style.display="none";
                newgame.style.display="flex";
            }
            else if(pos1==="O"){
                win.style.display="flex";
                reset.style.display="none";
                outer.style.display="none";
                win.innerText="Player2 is the winner";
                newgame.style.display="flex";
            }
        }
    }
    let count=0;
    for (const btn of btns){
        if(btn.innerHTML!=""){
            count++;
        }
    }
    if(count==9){
        for (const btn of btns) {
            btn.innerText="";
        }
        turn1.innerText="Player1's Turn";
        turn2.innerText="";
        turn1.classList.add("shadow1");
        turn2.classList.remove("shadow2");
    }
    }
let turn=document.querySelector(".turn");
let turn1=document.querySelector(".turn1");
let turn2=document.querySelector(".turn2");
turn1.innerText="Player1's Turn";
turn1.classList.add("shadow");
function changeTurn(){
    if(turn1.innerText==="Player1's Turn"){
        turn2.innerText="Player2's Turn";
        turn1.innerText="";
        turn2.classList.add("shadow");
        turn1.classList.remove("shadow");
    }else{
        turn1.innerText="Player1's Turn";
        turn2.innerText="";
        turn1.classList.add("shadow");
        turn2.classList.remove("shadow");
    }
}
let btns= document.querySelectorAll(".btn");
for (const btn of btns) { 
    btn.addEventListener("click",()=>{
        if(btn.innerText===""){
            if(turn.innerText==="Player1's Turn") {
                btn.innerText="X"
            }else{
                btn.innerText="O"  
            }
            changeTurn();
        }
        checkwinner();
    })
  

}
let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    for (const btn of btns) {
        btn.innerText="";
    }
    turn1.innerText="Player1's Turn";
    turn2.innerText="";
    turn1.classList.add("shadow");
    turn2.classList.remove("shadow");
})
newgame.addEventListener("click",()=>{
    win.style.display="none";
                outer.style.display="flex";
                reset.style.display="flex";
                newgame.style.display="none";
                for (const btn of btns) {
                    btn.innerText="";
                }
                turn1.innerText="Player1's Turn";
                turn2.innerText="";
                turn1.classList.add("shadow");
                turn2.classList.remove("shadow");
})