
// coordniates for first 10 in the row 
const position = [
    // left to right (1st row)
    {x: 20, y: 550}, 
    {x: 120, y: 550}, 
    {x: 210, y: 550},
    {x: 300, y: 550},
    {x: 390, y: 550},
    {x: 480, y: 550},
    {x: 570, y: 550},
    {x: 660, y: 550},
    {x: 750, y: 550},
    {x: 840, y: 550},
    // right to left (2nd row)
    {x: 840, y: 489},
    {x: 750, y: 489},
    {x: 660, y: 489},
    {x: 570, y: 489},
    {x: 480, y: 489},
    {x: 390, y: 489},
    {x: 300, y: 489},
    {x: 210, y: 489},
    {x: 120, y: 489},
    {x: 20,  y: 489},
    //3rd row 
    {x: 20,  y: 428},
    {x: 120,  y: 428},
    {x: 210,  y: 428},
    {x: 300,  y: 428},
    {x: 390,  y: 428},
    {x: 480,  y: 428},
    {x: 570,  y: 428},
    {x: 660,  y: 428},
    {x: 750,  y: 428},
    {x: 840,  y: 428},
    //4th
    {x: 840, y: 367},
    {x: 750, y: 367},
    {x: 660, y: 367},
    {x: 570, y: 367},
    {x: 480, y: 367},
    {x: 390, y: 367},
    {x: 300, y: 367},
    {x: 210, y: 367},
    {x: 120, y: 367},
    {x: 20,  y: 367},
    //5th row
    {x: 20,  y: 306},
    {x: 120,  y: 306},
    {x: 210,  y: 306},
    {x: 300,  y: 306},
    {x: 390,  y: 306},
    {x: 480,  y: 306},
    {x: 570,  y: 306},
    {x: 660,  y: 306},
    {x: 750,  y: 306},
    {x: 840,  y: 306},
    //6th row 
    {x: 840, y: 245},
    {x: 750, y: 245},
    {x: 660, y: 245},
    {x: 570, y: 245},
    {x: 480, y: 245},
    {x: 390, y: 245},
    {x: 300, y: 245},
    {x: 210, y: 245},
    {x: 120, y: 245},
    {x: 20,  y: 245},
    //7th row 
    {x: 20,  y: 184},
    {x: 120,  y: 184},
    {x: 210,  y: 184},
    {x: 300,  y: 184},
    {x: 390,  y: 184},
    {x: 480,  y: 184},
    {x: 570,  y: 184},
    {x: 660,  y: 184},
    {x: 750,  y: 184},
    {x: 840,  y: 184},
    //8th row 
    {x: 840, y: 123},
    {x: 750, y: 123},
    {x: 660, y: 123},
    {x: 570, y: 123},
    {x: 480, y: 123},
    {x: 390, y: 123},
    {x: 300, y: 123},
    {x: 210, y: 123},
    {x: 120, y: 123},
    {x: 20,  y: 123},
    //9th row
    {x: 20,  y: 62},
    {x: 120,  y: 62},
    {x: 210,  y: 62},
    {x: 300,  y: 62},
    {x: 390,  y: 62},
    {x: 480,  y: 62},
    {x: 570,  y: 62},
    {x: 660,  y: 62},
    {x: 750,  y: 62},
    {x: 840,  y: 62}, 
    //10th row 
    {x: 840, y: 1},
    {x: 750, y: 1},
    {x: 660, y: 1},
    {x: 570, y: 1},
    {x: 480, y: 1},
    {x: 390, y: 1},
    {x: 300, y: 1},
    {x: 210, y: 1},
    {x: 120, y: 1},
    {x: 20,  y: 1}
]



const snakesAndLadders = {
    // ladders
    5:45,
    18:42,
    51:70,
    56:98,

    //snakes
    46:8,
    61:39,
    95:74
    // first snake

}
    

// place counter on canvas
var canvas = document.getElementById("slCanvas");
			var ctx = canvas.getContext("2d");

//counter height and width 
var counterHeight = 50;
var counterWidth = 50;

//counter start positon
var counterX = position[0].x
var counterY = position[0].y

//Drawing the counter image on the canvas
var CounterImg = new Image();
			//linking the counter image to the image in the folder
CounterImg.src = "Counter.png";			
			// compute the start co-ordinates of the counter when page loads			
CounterImg.addEventListener("load", function() 		
	{
				ctx.drawImage (CounterImg, counterX, counterY, counterWidth, counterHeight);
    }, false	
);

// moving through first 10 blocks
let currentBlock = 0;
function rollDice(){
    const diceVal = Math.floor(Math.random() * 6) + 1 // generates random num from 1 to 6
    alert('Dice rolled: ' + diceVal)
    return diceVal
}

//function to move the counter 
function move() {
    // check if current position is at the start
    if (currentBlock == position.length - 1){
        alert("Congratulations for reaching the end!")
        location.reload()//reloading the page 
        return; // exits function
    }

    const diceRll = rollDice();
    let newBlock = currentBlock + diceRll; //the new block

    // check if the new position is beyond last position
    
    if (newBlock >= position.length){
        newBlock = position.length - 1 // stay in the last block
        console.log('Reached last position at' + newBlock + 1 + 'cant move further')

    }
    
    
    if (snakesAndLadders.hasOwnProperty(newBlock)){
        newBlock = snakesAndLadders[newBlock] // If the new block is included in the snakeand ladders dictionary
    }
    currentBlock = newBlock // updating the current block 
    const newPosition = position[currentBlock]; 
    updateCounterPosition(newPosition) //positon of where the counter needs to be 
}
//drawing the image again
function updateCounterPosition(newPosition) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clearing the canvas then drawing the image again
    ctx.drawImage(CounterImg, newPosition.x, newPosition.y, counterWidth, counterHeight);
}


document.getElementById('DiceButton').addEventListener('click' , move) // add event listener to page onm mouseclick

