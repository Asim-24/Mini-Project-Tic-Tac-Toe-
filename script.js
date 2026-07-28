console.log("hello js, wassup!!!")

// WHAT I NEED JS TO DO

/*

1. WHEN USER CLICKS - FILL X OR O
2. FILL X AND O TURN BY TURN
3. CHECK THE WINNING CONDITION
4. DISPLAY THE WINNER - X OR O


*/

let turn = "X";

let button = document.getElementById("reset");

button.addEventListener("click",() => {
    window.location.reload();
});

let blocks = document.getElementsByClassName("blocks");

let parent_container = document.getElementById("parent-container");

function listner (e) {
    // only targets the inner childs
    if(e.target.classList.contains("blocks")){
        // checks if the element already have a value of not
        if(e.target.innerText === "" ){
    e.target.innerText = turn;
    win_check();
    // change the turn each time
    if(turn ==="X"){
        turn = "O"
    } else{
        turn = "X";
    }
    }
}
}

parent_container.addEventListener("click", listner);

// winning conditions - 123, 456, 789, 147, 258, 369, 159, 357.

// if(arr[0] === arr[1] === arr[2]){
//     console.log(arr[1])
// }

// if(box[0] === box[1] === box[2])

let winner = document.getElementById("winner");

const win_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function win_check(){
    for(const condition of win_conditions){
    let val1 = blocks[condition[0]].innerText;
    let val2 = blocks[condition[1]].innerText;
    let val3 = blocks[condition[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("won");
            winner.innerText = val2;
            parent_container.removeEventListener("click", listner);
        }
    }
}
}

// if(parent_container.children.innerText != ""){
//     if(winner.innerText == ""){
//         winner.innerText = "Draw"
//     }
// }

