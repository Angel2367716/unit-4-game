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

//Start and restart function
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
    
    //Changing html to reflect changes made by random functions
    $("#targetScore").html(targetScore);
    //$("#currentScore").html(currentScore);
    
    //testing
    console.log ("--------------------------")
    console.log ("Target Score:" + targetScore);
    console.log ("Blue:" + crystal.blue.value + "| Green:" + crystal.green.value + "| Red:" + crystal.red.value + "| Yellow:" + crystal.yellow.value);
    console.log ("--------------------------")

}; 

//Funtion to reflect currentscore after clicking on each crystal
let addValues = function (crystal){
    
    //changes currentScore
    currentScore = currentScore + crystal.value; 

    //change the HTml to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    //testing console
    console.log ("Current Score:" + currentScore);
}
    
//MAIN PROCESSES-----------------------------------------------------------
    //Start the gme the first time
    startGame ();
    
    
    $("#blue").click(function(){
        //alert("test");
        addValues(crystal.blue);
    });
    
    $("#green").click(function(){
        //alert("test");
        addValues(crystal.green);
    });
    
    $("#red").click(function(){
        //alert("test");
        addValues(crystal.red);
    });
    
    $("#yellow").click(function(){
        //alert("test");
        addValues(crystal.yellow);
    });
