<!-- Objective: The player will be showened a random number and will have to match the number by choosing from each of the crystals displayed on the page. Each crystal will have a random number associated to it and they will change everytime the game is won or lost.  

    Pseudocode:
1)Create a page that will ask the player to match the random number displayed by selecting one of the crystal options.
2)There are four crystals displayed as buttons on the page
3)The player will be showned a random number between 19-120 at the start of the game
4)When the player clicks on a crystal, the player's total score will be increased by a specific amount
  a)the game will hide this amount until the player clicks a crystal
  b)when the player clicks a crystal, the player's score counter will update
  c)each crystl will have a random number between 1-12.
5)The player wins if their total score equals the random number shown at the beginning of the game
6)The player loses if their score goes above the random number.
7)The game restarts whenever the player wins or loses
8)When the game begins again, the player will see a new random number. 
    a)In addition, all of the crystals will have four new hidden values.
    b)the user's score and the score counter will reset to zero
9)The app should show the number of games the player wins and loses. Refreshing the page will restart everying and the player's won game will be blank, do not refresh the page. 



Detailed instructions
1)create global variable section, funtcions and main process sections ✓✓
2)3 different categories we have to track: value of criystal each round, current and target score, wins and los counts ✓✓
3)create a generic crystal object, inside the object create subobjects for each of the colors.✓✓
---3)each of them are given a value property (value=0), and a name (name will be changed later on)✓✓
4)make variables to track the win and lose count scores ✓✓
5)make variables to track the number of times you win vs the number of times you loss a game ✓✓

-Creating click events
6)Create click events associated to each of your crystals with a specific id ✓✓
7)incoorporate jQuery (put it before js) ✓✓

Just put this link on your html file 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

8)use proper syntax to create a click event $ ("#").click(function(){here is what you want randofunction to perform you can use alert to make sure your code works when you press on a gem;} ✓✓

---create more complex values
9) create a startGame function, remember you need to name a function by assigning it with a variable ✓✓
10) reset the current score - use a variable to equal it to zero ✓✓
    *make sure you put it inside the startGame function ✓✓
11)set a new target score b/w 19 and 120 - for target score you need to use a number randomizer. "variable" + "name of variable" equal to function (parameter would be minimum and maximum) {here you can use the return action followed by the randomzier, this way you can call upon this funciton at a later time to get a random number} ✓✓
    *remember you are getting 5 different random numbers ✓✓
    *you can get a random number function to return a random number b/w the min and the max ✓✓
12)set different values for each of the crystals b/w 1-12 ✓✓
    *here use the object syntax format where you grab one of the global variables and along side with both of its sub-object and equal it to the randomizer function in order to get a random number b/w 1-12 (the 1-12 will be the parameters you would have to put)
    ****This would be a good place to use console log to test out your code and make sure it works ✓✓
13)change the html to reflect all of the before changes
    *make sure you place this inside your startGame function 
    14)Add the start game set up in the main process (on top of all other processes)✓✓
    15)change the target and your score html to reflect the random numbers✓✓
    16)add an id for the target score and another id for the player score✓✓
        
17)create a line that runs in jquery that runs player and target score  ✓✓
    **use a jquery selector + id score + where you want the document to be changed (try html) and include score or target score variable ✓✓
    **if there's flicker it might be due to the initial input you have on your html file for the player score and target score, delete them you don't need anything there ✓✓

Changing the current score in response to the crystals being clicked
18)create a new function, you can call it addValues () ✓✓
    *make sure you use the correct parameter for the acdValues function, this way your function will know what are the options you want it to
    *each of the crystals have been organized as objects
    *inside the funciton, equal the current score to current score plus the value of the crytal ( crystal.value ) ✓✓
    *console log your results to make sure the funcitons are working use the 
19)on the main processes create a process that will change the value of each crystal when you click on them. ✓✓
    *start with a jquery selector (crystal id) + click event + function { use the function created on step 18  and the parameters of the function will be one of the crystal objects .blue, .green, .red, .yerllow} ✓✓

Change the html to reflect changes in current score ✓✓
20) use a jquery selector, chose appropriate id, selecte where you want to place the output of the code, and include the variable of the id selected (it could be the variable you chose for the current score)
    *make sure to place this insue the addValues function
    ***the 

Incorporate a check to see if you win or lose
21) create  a new function (make sure to give it a useful name, for ecample "check if you win")
22)make sure you add a main process for the funciton you just created it (you can use the name of the funciton plus parentheses)
23) inside the new function create an if statment
    *check if the player score is larger than the target score
        *use the alert method to pop up a message to let the player know if they loss
        *console log it to make sure it works
    *check if player score is equal to the target score
        *do the same thing but if the player wins
    *make sure you change the html to reflect it by using the variable of the win or loss count and adding the plus sign twice
24)Change the loss count in html using the "else if" statement
    *jquery selector, loss count id, type of document, variable for id
    *do the same thing but for the win count id

Restarting the game
25) add the startGame process  at the end of the else if statment
        *make sure the current score is equal to zero ( it should be in a form of a variable, just remember if you put the same variable in the global scope and inside a function it might not reset back to zero)


















-->

