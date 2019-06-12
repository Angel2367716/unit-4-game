//GLOBAL VARIABLES----------------------------------------------------------

    //crystal variables
        let crystal = { 
            blue:   { name: "blue", value:0},
            green:  { name: "green", value:0},
            red:    {name: " red", value:0},
            yellow: { name: "yellow", value:0}
        }

    //Current and target score variables
        let targetScore = 0;
        let currentScore = 0;

    //Wincount and losecount variables
        let winCount = 0;
        let loseCount = 0;

//FUNTIONS-----------------------------------------------------------------
//Randomizer function
let getRandom = function(min, max) {return Math.floor(Math.random()* (max - min + 1)) + min;}

//Starts the game and restarts it
let startGame = function () {
    //reset current score
    let currentScore = 0;
    //set target score between 19 and 120
    targetScore = getRandom (19,120);
    //set different values for each of the crystals (bewteen 1-12)
    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);
    
    //testing
    console.log ("--------------------------")
    console.log ("Target Score:" + targetScore);
    console.log ("Blue:" + crystal.blue.value + "| Green:" + crystal.green.value + "| Red:" + crystal.red.value + "| Yellow:" + crystal.yellow.value);
    console.log ("--------------------------")

}; 

//MAIN PROCESSES-----------------------------------------------------------
    $("#blue").click(function(){
        //alert("test");
    });
    
    $("#green").click(function(){
        //alert("test");
    });
    
    $("#red").click(function(){
        //alert("test");
    });
    
    $("#yellow").click(function(){
        //alert("test");
    });

startGame ();