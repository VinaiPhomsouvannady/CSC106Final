//drawmoji function
var drawBitmoji = function(bitmojiObject) {
    
    noStroke();
    fill(143, 143, 143);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height    /200*34),bitmojiObject.height/200*60,bitmojiObject.height/200*30); //hood
    
    
    fill(199, 95, 95);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*94),bitmojiObject.height/200*60,bitmojiObject.height/200*25); //cap
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*80),bitmojiObject.height/200*60,bitmojiObject.height/200*43); //cap
    
    fill(0, 0, 0);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*71),bitmojiObject.height/200*61,bitmojiObject.height/200*50); //hair
    
    fill(189, 153, 110);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.height/200*60,bitmojiObject.height/200*61); //head
    
    fill(0, 0, 0);
    arc(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*80),bitmojiObject.height/200*57,bitmojiObject.height/200*25,-200,20); //hair
    
    
    fill(bitmojiObject.shirtColor);
    rect(bitmojiObject.x-(bitmojiObject.height/200*15),bitmojiObject.y-(bitmojiObject.height/200*47),bitmojiObject.height/200*30,bitmojiObject.height/200*16);//neck
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y+(bitmojiObject.height/200*13),bitmojiObject.height/200*91,bitmojiObject.height/200*107);//body
    
    
    fill(192, 199, 177);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*27),bitmojiObject.y+(bitmojiObject.height/200*20),bitmojiObject.height/200*54,bitmojiObject.height/200*103);//arm right
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*28),bitmojiObject.y+(bitmojiObject.height/200*20),bitmojiObject.height/200*54,bitmojiObject.height/200*103);//arm left
    
    fill(192, 199, 177);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*38),bitmojiObject.y+(bitmojiObject.height/200*24),bitmojiObject.height/200*31,bitmojiObject.height/200*103);//arm right
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*39),bitmojiObject.y+(bitmojiObject.height/200*24),bitmojiObject.height/200*31,bitmojiObject.height/200*103);//arm left
    
    fill(bitmojiObject.shirtColor);
    rect(bitmojiObject.x-(bitmojiObject.height/200*12),bitmojiObject.y-(bitmojiObject.height/200*31),bitmojiObject.height/200*25,bitmojiObject.height/200*94);
    
    fill(143, 143, 143);
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*21),bitmojiObject.y-(bitmojiObject.height/200*30),bitmojiObject.height/200*14,bitmojiObject.height/200*15); //hood left
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*21),bitmojiObject.y-(bitmojiObject.height/200*30),bitmojiObject.height/200*14,bitmojiObject.height/200*15); //hood right
    
    fill(189, 153, 110);
    arc(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*65),bitmojiObject.height/200*52,bitmojiObject.height/200*73,0,180);//chin
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*29),bitmojiObject.y-(bitmojiObject.height/200*63),bitmojiObject.height/200*10,bitmojiObject.height/200*17);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*28),bitmojiObject.y-(bitmojiObject.height/200*63),bitmojiObject.height/200*10,bitmojiObject.height/200*17);
    
    fill(235, 235, 235);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*12),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.height/200*16,bitmojiObject.height/200*9);
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*13),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.height/200*16,bitmojiObject.height/200*9);
    
    stroke(0, 0, 0);
    fill(240, 240, 240);
    rect(bitmojiObject.x-(bitmojiObject.height/200*21),bitmojiObject.y-(bitmojiObject.height/200*68),bitmojiObject.height/200*15,bitmojiObject.height/200*10);
    rect(bitmojiObject.x+(bitmojiObject.height/200*4),bitmojiObject.y-(bitmojiObject.height/200*68),bitmojiObject.height/200*15,bitmojiObject.height/200*10);
    line(bitmojiObject.x-(bitmojiObject.height/200*21),bitmojiObject.y-(bitmojiObject.height/200*63),bitmojiObject.x-(bitmojiObject.height/200*33),bitmojiObject.y-(bitmojiObject.height/200*69));
    line(bitmojiObject.x+(bitmojiObject.height/200*20),bitmojiObject.y-(bitmojiObject.height/200*63),bitmojiObject.x+(bitmojiObject.height/200*31),bitmojiObject.y-(bitmojiObject.height/200*71));
    line(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.x-(bitmojiObject.height/200*5),bitmojiObject.y-(bitmojiObject.height/200*62));
    
    noStroke();
    fill(0, 0, 0);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*12),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.height/200*7,bitmojiObject.height/200*7);
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*12),bitmojiObject.y-(bitmojiObject.height/200*62),bitmojiObject.height/200*7,bitmojiObject.height/200*7);//eyes
    
    fill(219, 131, 155);
    arc(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*47),bitmojiObject.height/200*25,bitmojiObject.height/200*17,0,180);//lip
    
    fill(209, 209, 209);
    arc(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*46),bitmojiObject.height/200*20,bitmojiObject.height/200*11,0,180);//lip
    
    
    
    fill(0, 0, 0);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*11),bitmojiObject.y-(bitmojiObject.height/200*68),bitmojiObject.height/200*15,bitmojiObject.height/200*3);
    ellipse(bitmojiObject.x-(bitmojiObject.height/200*12),bitmojiObject.y-(bitmojiObject.height/200*68),bitmojiObject.height/200*15,bitmojiObject.height/200*3);//pupils
    
    
    fill(107, 79, 48);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200*2),bitmojiObject.y-(bitmojiObject.height/200*58),bitmojiObject.height/200*1,bitmojiObject.height/200*12);
    ellipse(bitmojiObject.x+(bitmojiObject.height/200),bitmojiObject.y-(bitmojiObject.height/200*53),bitmojiObject.height/200*4,bitmojiObject.height/200*1);
    
    stroke(0, 0, 0);
    if(bitmojiObject.initials){
        line(bitmojiObject.x-(bitmojiObject.height/200*35),bitmojiObject.y+(bitmojiObject.height/200*45),bitmojiObject.x-(bitmojiObject.height/200*48),bitmojiObject.y+(bitmojiObject.height/200));
        line(bitmojiObject.x-(bitmojiObject.height/200*35),bitmojiObject.y+(bitmojiObject.height/200*45),bitmojiObject.x-(bitmojiObject.height/200*20),bitmojiObject.y+(bitmojiObject.height/200));
        
        line(bitmojiObject.x+(bitmojiObject.height/200*20),bitmojiObject.y+(bitmojiObject.height/200*45),bitmojiObject.x+(bitmojiObject.height/200*20),bitmojiObject.y+(bitmojiObject.height/200));
        line(bitmojiObject.x+(bitmojiObject.height/200*20),bitmojiObject.y+(bitmojiObject.height/200*28),bitmojiObject.x+(bitmojiObject.height/200*38),bitmojiObject.y+(bitmojiObject.height/200*15));
        line(bitmojiObject.x+(bitmojiObject.height/200*20),bitmojiObject.y+(bitmojiObject.height/200),bitmojiObject.x+(bitmojiObject.height/200*38),bitmojiObject.y+(bitmojiObject.height/200*15));
    }
};

//create slot object
var Slot = function(x, y, num) {
    this.x = x;
    this.y = y;
    this.size = 88;
    this.num = num;
};

//create slot draw function
Slot.prototype.draw = function() {
    fill(255, 217, 0);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    fill(0, 0, 0);
    textSize(90);
    text(this.num, this.x, this.y, 200, 200);
};

//use button object
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
};

//use button draw function
Button.prototype.draw = function() {
    fill(232, 0, 0);
    rect(this.x, this.y, this.width, this.height,1);
    fill(255, 255, 255);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

//use button is mouse inside function
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};


//create columns for each column

var col1 = [1,2,3,4,5,6,7,8,9];
var col2 = [1,2,3,4,5,6,7,8,9];
var col3 = [1,2,3,4,5,6,7,8,9];
var cols = [col1,col2,col3];

//set number of cols and rows
var NUM_COLS = 3;
var NUM_ROWS = 3;


//create shift function
var shift1 = function(array) {
    var temp = array[0];
    array.shift();
    array.push(temp);
};


//create slots
var nums;
var slots = [];
for (var i = 0; i < NUM_COLS; i++) {
    nums = cols[i];
    for (var j = 0; j < NUM_ROWS; j++) {
        var slotX = i * 95 + 100;
        var slotY = j * 95 + 10;
        var slotNum = nums[0];
        slots.push(new Slot(slotX, slotY, slotNum));
        shift1(nums);
    }
}

// set global variables
var totalspins = 0;
var spins = 0;
var winner = false;
var winspin = 0;
var money = 100;
var lastwins = [];
var loan = 0;
var currentScene = 0;
frameRate(30);


//create buttons
var btn1 = new Button({
    x: 300,
    y: 300,
    width: 160,
    label: "RANDOMIZE $1"
});

var btn2 = new Button({
    x: 25,
    y: 300,
    width: 250,
    
    label: "MONEY: $"
});

var btn3 = new Button({
    x: 400,
    y: 20,
    width: 75,
    
    label: "LOAN"
});
var startButton = new Button({
    x: 150,
    y: 234,
    label: "START",
});


//create mouse function for each button
mouseClicked = function() {
        if (startButton.isMouseInside()) {
            currentScene = 1;
        }
        if (btn3.isMouseInside()) {
            loan+=100;
            money+=100;
        }
        //main randomize function
        if (btn1.isMouseInside()) {
            if(money>0){
            spins++;
            totalspins++;
            money = money - 1;
            var pos1=0;
            var pos2=0;
            var pos3=0;
            
            var randomX = random(0, 10);
            for (var z = 0; z < randomX; z++){
                shift1(col1);
                
            }
            var randomY = random(0, 10);
            for (var z = 0; z < randomY; z++){
                shift1(col2);
                
            }
            var randomZ = random(0, 10);
            for (var z = 0; z < randomZ; z++){
                shift1(col3);
                
            }
            cols = [col1,col2,col3];
            for (var j = 0; j < 9; j++) {
                if((j%3)===0){
                    slots[j].num = cols[pos1][0];
                    pos1++;
                }
                else if((j%3)===1){
                    slots[j].num = cols[pos2][1];
                    pos2++;
                }
                else if((j%3)===2){
                    slots[j].num = cols[pos3][2];
                    pos3++;
                    
                }
                
            }
            
            }
            
        }
        
};

//create splash screen
var splashScreen = function(){
    background(84, 184, 186);
    fill(255, 255, 255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Press START to start the Game", 250, 150);
    text("Created By: Vinai", 250, 400);
    startButton.draw();
    drawBitmoji({    
        x:86,
        y:225,
        height:100,
        shirtColor:color(181, 79, 79),
        initials:false
    });
    noFill();
};

//main draw function
draw = function() {
    if (currentScene === 0){
    splashScreen();
    }
    else{
    background(0, 0, 0);
    stroke(255, 255, 255);

    for (var i = 0; i < slots.length; i++) {
        slots[i].draw();
    }
    if(slots[0].num===slots[3].num){
        if(slots[3].num===slots[6].num){
            if(spins>0){
                winner = true;
                winspin = spins;
                lastwins.push(winspin);
                spins = 0;
                money = money + 150;
            }
        }
    }
    btn1.draw();
    btn2.draw();
    btn3.draw();
    //display loan
    text("current\nloan: \n$" + loan,390,78);
    
    //display last 5 wins
    text("Last 5 :",10,10);
    for (var i = lastwins.length; i>lastwins.length-6; i--) {
        text(lastwins[i],10,(20*(i%5))+35);
    }
    
    //display money and total spins
    text(money,130,312);
    text("Totalspins: " + totalspins,15,460);
    
    //if win display winner and spins for win
    textSize(50);
    if(winner){
        fill(random(50,255), random(50,255), random(50,255));
        text("WINNER!!! + $150",30,351);
        text(winspin + " spins for last win",10,400);
    }
        drawBitmoji({    
        x:49,
        y:249,
        height:100,
        shirtColor:color(181, 79, 79),
        initials:false
    });
    }

};
