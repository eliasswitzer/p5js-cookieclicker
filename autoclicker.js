class Autoclicker {

    constructor() {

        this.pointInterval = 0;
        this.speedInterval = 0;

        this.pointCost = 50;
        this.speedCost = 50;

        this.pointUpgradeCount = 0;
        this.speedUpgradeCount = 0;

    }

    update() {

        if (millis() - startTime > this.speedInterval) {

            points+=this.pointInterval;
            startTime = millis();

        }

    }

    displayUpgrades() {

        //Farms
        fill(95, 176, 69);
        stroke(77, 133, 60);
        strokeWeight(2);

        if(this.pointUpgradeCount >= 1) square(600, 100, 20);
        if(this.pointUpgradeCount >= 2) square(625, 100, 20);
        if(this.pointUpgradeCount >= 3) square(650, 100, 20);
        if(this.pointUpgradeCount >= 4) square(675, 100, 20);
        if(this.pointUpgradeCount >= 5) square(700, 100, 20);
        if(this.pointUpgradeCount >= 6) square(600, 125, 20);
        if(this.pointUpgradeCount >= 7) square(625, 125, 20);
        if(this.pointUpgradeCount >= 8) square(650, 125, 20);
        if(this.pointUpgradeCount >= 9) square(675, 125, 20);
        if(this.pointUpgradeCount >= 10) square(700, 125, 20);

        textSize(24);
        text(this.pointUpgradeCount, 660, 170);

        //Bakeries
        fill(217, 61, 0);
        stroke(166, 47, 0);
        strokeWeight(2);

        if(this.speedUpgradeCount >= 1) square(600, 250, 20);
        if(this.speedUpgradeCount >= 2) square(625, 250, 20);
        if(this.speedUpgradeCount >= 3) square(650, 250, 20);
        if(this.speedUpgradeCount >= 4) square(675, 250, 20);
        if(this.speedUpgradeCount >= 5) square(700, 250, 20);
        if(this.speedUpgradeCount >= 6) square(600, 275, 20);
        if(this.speedUpgradeCount >= 7) square(625, 275, 20);
        if(this.speedUpgradeCount >= 8) square(650, 275, 20);
        if(this.speedUpgradeCount >= 9) square(675, 275, 20);
        if(this.speedUpgradeCount >= 10) square(700, 275, 20);

        text(this.speedUpgradeCount, 660, 320);

    }

    upgradePoints() {

        if(points >= this.pointCost) {

            points -= this.pointCost;

            if(this.pointInterval == 0 && this.speedInterval == 0) {
                this.pointInterval = 1;
                this.pointUpgradeCount ++;
                this.speedUpgradeCount ++;
                this.speedInterval = 5000;
            }
            else {
                this.pointInterval *= 2;
                this.pointUpgradeCount ++;
                this.pointCost += (50 * this.pointUpgradeCount * prestigeCount);
                this.speedCost += (50 * this.speedUpgradeCount * prestigeCount);
            }

        }

    }

    upgradeSpeed() {

        if(points >= this.speedCost) {

            points -= this.speedCost;

            if(this.speedInterval == 0 && this.pointInterval == 0) {
                this.speedInterval = 5000;
                this.speedUpgradeCount ++;
                this.pointUpgradeCount ++;
                this.pointInterval = 1;
            }
            else {
                this.speedInterval /= 1.5;
                this.speedUpgradeCount ++;
                this.speedCost += (100 * this.speedUpgradeCount * prestigeCount);
                this.pointCost += (50 * this.pointUpgradeCount * prestigeCount);
            }

        }

    }
}