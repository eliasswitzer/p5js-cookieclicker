//Click the giant cookie to earn cookies. Use cookies upgrade your production.
//The faster you click, the more cookies you'll receive per click due to the multiplier.
//Upgrading the cookie will change the look of it, and double your cookies per click.
//You can upgrade the amount of farms and bakeries you have in the shop to speed up the autoclicker.
//Lastly, you can choose to reset your progress to prestige and make the game harder.

let points;

let cookie;
let autoclicker;

let startTime;
let multiplierTime;

let prestigeCount;
let prestigeCost;

function setup() {
  createCanvas(800, 500);

  points = 0;

  cookie = new Cookie();
  autoclicker = new Autoclicker();

  startTime = millis();
  multiplierTime = millis();

  prestigeCount = 1;
  prestigeCost = 15000;

}

function draw() {
  background(189, 162, 109);

  cookie.clickMultiplier();
  cookie.display();

  autoclicker.displayUpgrades();
  autoclicker.update();

  displayUI();

}

function displayUI() {

  //Buttons
  fill(140, 113, 59);
  noStroke();
  rect(50, 100, 150, 50);

  fill(255);
  textSize(14);
  text("Upgrade Cookie", 125, 115);
  text("Cost: " + cookie.intervalCost + " C", 125, 135)

  fill(140, 113, 59);
  rect(50, 175, 150, 50);

  if(autoclicker.pointUpgradeCount == 0) {
    fill(255);
    text("Start Farm/Bakery", 125, 190);
    text("Cost: " + autoclicker.pointCost + " C", 125, 210);
  }

  if(autoclicker.pointUpgradeCount > 0) {

  fill(255);
  text("Buy Farm", 125, 190);
  text("Cost: " + autoclicker.pointCost + " C", 125, 210);

  fill(140, 113, 59);
  rect(50, 250, 150, 50);
  fill(255);
  text("Buy Bakery", 125, 265);
  text("Cost: " + autoclicker.speedCost + " C", 125, 285);

  }

  fill(140, 113, 59);
  rect(50, 325, 150, 50);
  fill(255);
  if(prestigeCount - 1 < 5) {
    text("Prestige", 125, 340);
    text("Cost: " + prestigeCost + " C", 125, 360);
  }
  else {
    text("MAX PRESTIGE", 125, 340);
    text("LEVEL REACHED", 125, 360)
  }

  //Titles
  fill(112, 91, 47);
  stroke(112, 91, 47);
  strokeWeight(2);
  textSize(24);
  text("Shop", 125, 75);
  text("Production", 660, 75);

  textSize(36);
  text("COOKIE CLICKER", 400, 450);

  //Multiplier
  strokeWeight(1);
  textSize(24);
  text("Multiplier:", 380, 380);

  if (cookie.multiplier == 1) fill(255, 247, 247);
  else if (cookie.multiplier == 2) fill(255, 194, 194);
  else if (cookie.multiplier == 4) fill(255, 122, 122);

  stroke(0);
  text(cookie.multiplier + "x", 455, 380);

  //Prestige Stars

  fill(255, 255, 94);
  stroke(232, 232, 93);
  if (prestigeCount - 1 == 1) {
    star(400, 115);
  }
  else if (prestigeCount - 1 == 2) {
    star(375, 115);
    star(425, 115);
  }
  else if (prestigeCount - 1 == 3) {
    star(350, 115);
    star(400, 115);
    star(450, 115);
  }
  else if (prestigeCount - 1 >= 4) {
    star(325, 115);
    star(375, 115);
    star(425, 115);
    star(475, 115);

    if (prestigeCount - 1 >= 5) {
      fill(255, 220, 92);
      stroke(235, 201, 91);
      star(400, 80);
    }
  }

}

function prestige() {

  if (points >= prestigeCost) {

    points = 0;
    cookie.cookieUpgradeCount = 0;
    cookie.pointInterval = 1;
    autoclicker.pointUpgradeCount = 0;
    autoclicker.speedUpgradeCount = 0;
    autoclicker.pointInterval = 0;
    autoclicker.speedInterval = 0;

    prestigeCount++;
    prestigeCost *= prestigeCount;

    cookie.intervalCost = 25 * prestigeCount;
    autoclicker.pointCost = 50 * prestigeCount;
    autoclicker.speedCost = 50 * prestigeCount;

  }

}

function star(x, y) {
  push();
  translate(x, y);
  strokeWeight(2);
  beginShape();
  vertex(0, -25);
  vertex(7, -10);
  vertex(23.5, -7.5);
  vertex(11.5, 3.5);
  vertex(14.5, 20);
  vertex(0, 12.5);
  vertex(-14.5, 20);
  vertex(-11.5, 3.5);
  vertex(-23.5, -7.5);
  vertex(-7, -10);
  endShape(CLOSE);
  translate(100, 100);
  pop();
}

function mousePressed() {

  if (dist(400, 250, mouseX, mouseY) <= cookie.cookieDiameter / 2) {
    cookie.cookieDiameter += 10;
    cookie.topDiameter += 5;
    cookie.clicked = true;
  }

}

function mouseReleased() {

  if (cookie.clicked == true) {
    cookie.cookieDiameter -= 10;
    cookie.topDiameter -= 5;

    points += (cookie.pointInterval * cookie.multiplier);

    cookie.clicks += 1;

    cookie.clicked = false;
  }

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 100 && mouseY <= 150) {
    cookie.increaseInterval();
  }

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 175 && mouseY <= 225) {
    autoclicker.upgradePoints();
  }

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 250 && mouseY <= 300) {
    autoclicker.upgradeSpeed();
  }

  if (mouseX >= 50 && mouseX <= 200 && mouseY >= 325 && mouseY <= 375 && prestigeCount - 1 < 5) {
    prestige();
  }
}
