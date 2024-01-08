//IMPORTANT NOTE: Use the arrow keys to make the snowman jump, or move left/right

// variables

// counting frames for sun/moon
var counter = 0;
    
// snowman x & y positions
var snowmanX = 200;
var snowmanY = 300;

// size of biggest snowball
var snowballSize = 150;

// sun x & y positions
var sunX = 0;
var sunY = 0;

// moon x & y positions
var moonX = 0;
var moonY = 0;

//snowflake angle
var angle = 0;

//background colour
var rc = 0;
var bc = 0;
var gc = 0;

//snow variable
var mp = 50;

// user interaction
keyPressed = function() {
    if (keyCode === UP) {
        snowmanY = snowmanY - 50;
    }
    
    if (keyCode === LEFT) {
        snowmanX = snowmanX - 15;
    }
    
     if (keyCode === RIGHT) {
        snowmanX = snowmanX + 15;
    }
};


// making a function(create  to create an array with 255 different colors in between 2 colours
// used for smoothing colour transition
var createColorRange = function(c1, c2) {
    var colorList = [];
    for (var i=0; i<255; i++) {
        // in this function, colors are taken from in between 2 set colours with the math, and the func makes the transition
        var r = c1[0] + ((i*(c2[0]-c1[0]))/255);
        var g = c1[1] + ((i*(c2[1]-c1[1]))/255);
        var b = c1[2] + ((i*(c2[2]-c1[2]))/255);
        colorList.push([r, g, b]);
    }
    return colorList;
};

// list of colours (r, g, b variables) for background
var c1 = [ 112, 196, 198 ];
var c2 = [ 84, 207, 207 ];
var c3 = [ 217, 219, 175 ];
var c4 = [ 237, 208, 92 ];
var c5 = [ 240, 210, 17];
var c6 = [ 222, 203, 77 ];
var c7 = [ 99, 194, 167 ];
var c8 = [ 25, 188, 209 ];
var c9 = [ 109, 98, 153 ];
var c10 = [ 74, 80, 112 ];
var c11 = [ 60, 62, 82 ];

// list of transition colours for day to night sequence
var colorRange1 = createColorRange(c1, c2);
var colorRange2 = createColorRange(c2, c3);
var colorRange3 = createColorRange(c3, c4);
var colorRange4 = createColorRange(c4, c5);
var colorRange5 = createColorRange(c5, c6);
var colorRange6 = createColorRange(c6, c7);
var colorRange7 = createColorRange(c7, c8);
var colorRange8 = createColorRange(c8, c9);
var colorRange9 = createColorRange(c9, c10);
var colorRange10 = createColorRange(c10, c11);
var colorRange11 = createColorRange(c11, c1);

// snowflakes
var particles = [];
for(var i = 0; i < mp; i++) {
	particles[i] = {
		x: random(0, 400),  // x position
		y: random(0, 400),  // y position
		r: random(1, 7),    // radius
		d: random(0, mp)    
	};
}

	
// starting the animation	
var draw = function() {
  
noStroke();

//day to night sequence:
// background
background(112,196,198);

counter = counter + 1; //counter: when from 0 - 800: sun, when from 800 - 1600: moon.

// a bunch of if/else if commands that handle the day to night background transition
if (sunX <= 30)
{
    //background(184, 207, 207);
    rc = colorRange1[sunX*8][0];
    gc = colorRange1[sunX*8][1];
    bc = colorRange1[sunX*8][2];
    background(rc, gc, bc);
}
else if (sunX > 30 && sunX <= 60)
{
    //background(217, 219, 175);
    rc = colorRange2[(sunX - 30) *8][0];
    gc = colorRange2[(sunX - 30) *8][1];
    bc = colorRange2[(sunX - 30) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 60 && sunX <= 90)
{
    //background(237, 208, 92);
    rc = colorRange3[(sunX - 60) *8][0];
    gc = colorRange3[(sunX - 60) *8][1];
    bc = colorRange3[(sunX - 60) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 90 && sunX <= 120)
{
    //background(240, 210, 17);
    rc = colorRange4[(sunX - 90) *8][0];
    gc = colorRange4[(sunX - 90) *8][1];
    bc = colorRange4[(sunX - 90) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 120 && sunX <= 180)
{
    //background(222, 203, 77);
    rc = colorRange5[(sunX - 120) *4][0];
    gc = colorRange5[(sunX - 120) *4][1];
    bc = colorRange5[(sunX - 120) *4][2];
    background(rc, gc, bc);
}
else if (sunX > 180 && sunX <= 240)
{
    //background(99, 194, 167);
    rc = colorRange6[(sunX - 180) *4][0];
    gc = colorRange6[(sunX - 180) *4][1];
    bc = colorRange6[(sunX - 180) *4][2];
    background(rc, gc, bc);
}
else if (sunX > 240 && sunX <= 270)
{
    //background(25, 188, 209);
    rc = colorRange7[(sunX - 240) *8][0];
    gc = colorRange7[(sunX - 240) *8][1];
    bc = colorRange7[(sunX - 240) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 270 && sunX <= 300)
{
    //background(109, 98, 153);
    rc = colorRange8[(sunX - 270) *8][0];
    gc = colorRange8[(sunX - 270) *8][1];
    bc = colorRange8[(sunX - 270) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 300 && sunX <= 330)
{
    //background(74, 80, 112);
    rc = colorRange9[(sunX - 300) *8][0];
    gc = colorRange9[(sunX - 300) *8][1];
    bc = colorRange9[(sunX - 300) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 330 && sunX <= 360)
{
    //background(60, 62, 82);
    rc = colorRange10[(sunX - 330) *8][0];
    gc = colorRange10[(sunX - 330) *8][1];
    bc = colorRange10[(sunX - 330) *8][2];
    background(rc, gc, bc);
}
else if (sunX > 360)
{
    background(60, 62, 82);
}

if (counter > 800 && counter < 1600)
{
    background(60, 62, 82);
}


// sun
fill(255, 255, 205);
ellipse(sunX , sunY + 400, 75, 75);

// sun moving
if (counter < 800)
{
    sunX = sunX + 0.5;
    sunY = sunY - 0.5;
}

// resetting sun position
if (counter === 800)
{
    sunX = 20;
    sunY = 0;
}


// moon
fill(255, 255, 255);
ellipse(moonX, moonY + 400, 75, 75);


// moon moving
if (counter > 800 && counter < 1600){
    moonX = moonX + 0.5;
    moonY = moonY - 0.5; 
}

// resetting moon position
if (counter === 1600)
{
    counter = 0;
    moonX = 20;
    moonY = 0;
}

// hill
fill(131, 161, 105);
arc(200, 410, 500, 280, -180, 0);


// snowman
    // body
    // bottom snowball
    fill(255, 255, 255);
    ellipse(snowmanX, snowmanY, snowballSize, snowballSize);
    // shadow
    fill(235, 235, 235);
    ellipse(snowmanX, snowmanY - 85, snowballSize * 0.8, snowballSize * 0.8);
    // middle snowball
    fill(255, 255, 255);
    ellipse(snowmanX, snowmanY - 90, snowballSize * 0.8, snowballSize * 0.8);
    // shadow
    fill(235, 235, 235);
    ellipse(snowmanX, snowmanY - 165, snowballSize * 0.6, snowballSize * 0.6);
    // top snowball
    fill(255, 255, 255);
    ellipse(snowmanX, snowmanY - 170, snowballSize * 0.6, snowballSize * 0.6);

    // buttons
    fill(140, 90, 0);
    ellipse(snowmanX, snowmanY - 80, snowballSize/15, snowballSize/15);
    ellipse(snowmanX, snowmanY - 100, snowballSize/15, snowballSize/15);

    // eyes
    fill(0, 0, 0);
    ellipse(snowmanX - 20, snowmanY - 170, 20, 20);
    ellipse(snowmanX + 20, snowmanY - 170, 20, 20);
    // pupils
    fill(100, 2240, 250);
    ellipse(snowmanX - 20, snowmanY - 170, 8, 8);
    ellipse(snowmanX + 20, snowmanY - 170, 8, 8);
    
    // hat
    fill(0, 0, 0);
    rect(snowmanX - 35, snowmanY - 250, 70, 50);
    rect(snowmanX - 50, snowmanY - 195, 100, 10);
    fill(0, 0, 255);
    rect(snowmanX - 37, snowmanY - 200, 74, 5);
    triangle(snowmanX + 35, snowmanY - 197, snowmanX + 50, snowmanY - 225, snowmanX + 50, snowmanY - 209);
    
    // nose
    fill(255, 120, 0);
    triangle(snowmanX, snowmanY - 165, snowmanX, snowmanY - 155, snowmanX + 20, snowmanY - 150);

    // mouth
    fill(255, 0, 0);
    arc(snowmanX, snowmanY - 145, 20, 15, 0, 180);
    fill(255, 50, 255);
    ellipse(snowmanX, snowmanY - 140.5, 10, 5);
    
    // thicker line for arms
    stroke(100, 50, 0);
    strokeWeight(4);
    
    // left arm
    line(snowmanX - 120, snowmanY - 140, snowmanX - 50, snowmanY - 100);
    line(snowmanX - 115, snowmanY - 115, snowmanX - 83, snowmanY - 117);
    // right arm
    line(snowmanX + 120, snowmanY - 140, snowmanX + 50, snowmanY - 100);
    line(snowmanX + 115, snowmanY - 115, snowmanX + 83, snowmanY - 117);
    
    // gradually bringing snowman back to original position
    if (snowmanY < 300)
    {
        snowmanY = snowmanY + 1.5;
    }
    
    if (snowmanX < 200)
    {
        snowmanX = snowmanX + 1;
    }
    
    if (snowmanX > 200)
    {
        snowmanX = snowmanX - 1;
    }
    
    // if snowman reaches corner, it comes back on other side
     if (snowmanX < -100)
    {
        snowmanX = 500;
    }
    
    if (snowmanX > 500)
    {
        snowmanX = -100;
    }
    
    //Draw snow flakes
    noStroke();
    
    for(var i = 0; i < mp; i++) {
		var p = particles[i];
		fill(255, 255, 255);
		ellipse(p.x, p.y, p.r, p.r);
	}
	
	//Reference: https://codepen.io/triss90/pen/ZBqBEM
	angle = angle + 0.01;
	for(var i = 0; i < mp; i++) {
		var p = particles[i];
		p.y += Math.cos(angle+p.d) + 1 + p.r/2;
		p.x += Math.sin(angle) * 2;
		if(p.x > 400+5 || p.x < -5 || p.y > 400) {
			if(i%3 > 0) {
				particles[i] = {x: Math.random()*400, y: -10, r: p.r, d: p.d};
			} else {
				if(Math.sin(angle) > 0) {
					particles[i] = {x: -5, y: Math.random()*400, r: p.r, d: p.d};
				} else {
					particles[i] = {x: 400+5, y: Math.random()*400, r: p.r, d: p.d};
				}
			}
		}
	}
};
