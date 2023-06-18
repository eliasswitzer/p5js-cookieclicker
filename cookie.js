class Cookie {

    constructor(){

        this.pointInterval = 1;
        this.intervalCost = 25;

        this.cookieUpgradeCount = 0;

        this.cookieDiameter = 200;
        this.topDiameter = 20;
        this.topColor = color(207, 151, 0);

        this.clicked = false;
        
        this.multiplier = 1;
        this.clicks = 0;
        this.cps = 0;

    }

    display() {

        if(this.cookieUpgradeCount < 6) {
            fill(207,151,0);
            stroke(156, 114, 0);
        }
        else if (this.cookieUpgradeCount >= 6) {
            fill(84, 62, 1);
            stroke(59, 43, 0);
        }

        if(this.cookieDiameter > 210 || this.topDiameter > 24) {
            this.cookieDiameter = 200;
            this.topDiameter = 20;
        }

        strokeWeight(6);
        circle(400, 250, this.cookieDiameter);

        if(this.cookieUpgradeCount == 0) this.topColor = color(207,151,0);
        else if(this.cookieUpgradeCount == 1 || this.cookieUpgradeCount == 6) this.topColor = color(94, 67, 8);
        else if(this.cookieUpgradeCount == 2 || this.cookieUpgradeCount == 7) this.topColor = color(255, 245, 222);
        else if(this.cookieUpgradeCount == 3 || this.cookieUpgradeCount == 8) this.topColor = color(255, 216, 99);
        else if(this.cookieUpgradeCount == 4 || this.cookieUpgradeCount == 9) this.topColor = color(15, 204, 214);
        else if(this.cookieUpgradeCount == 5 || this.cookieUpgradeCount == 10) this.topColor = color(135, 83, 166);

        fill(this.topColor);
        stroke(this.topColor);
        circle(390, 320, this.topDiameter);
        circle(440, 295, this.topDiameter-2);
        circle(465, 240, this.topDiameter+1);
        circle(370, 275, this.topDiameter-3);
        circle(330, 260, this.topDiameter-1);
        circle(350, 225, this.topDiameter+1);
        circle(395, 180, this.topDiameter);
        circle(430, 220, this.topDiameter-3);
        
        fill(255);
        noStroke();
        strokeWeight(2);
        textSize(20);
        textAlign(CENTER, CENTER)
        text(points, 400, 250);
    }

    increaseInterval() {

        if(points >= this.intervalCost) {
            points -= this.intervalCost;
            this.cookieUpgradeCount++;
            this.pointInterval *= 2;
            this.intervalCost *= 3;
        }

    }

    clickMultiplier() {

        if (millis() - multiplierTime > 1000) {
            
            this.cps = this.clicks;
            this.clicks = 0;

            multiplierTime = millis();

        }

        if (this.cps < 6) this.multiplier = 1;
        else if (this.cps >= 6 && this.cps < 11) this.multiplier = 2;
        else if (this.cps >= 11) this.multiplier = 4;

    }

}