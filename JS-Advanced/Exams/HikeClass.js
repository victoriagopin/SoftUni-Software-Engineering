class SmartHike {
    constructor(userName) {
        this.userName = userName;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {

        if (peak in this.goals) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!(peak in this.goals)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let resourcesLeft = this.resources - time * 10;
        if (resourcesLeft < 0) {
            throw new Error("You don't have enough resources to complete the hike");
        }

        this.resources = resourcesLeft;
        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${100 - (time * 10)}% resources left`;

    }

    rest(time) {
        this.resources += time * 10;

        if (this.resources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        let filtered = this.listOfHikes.filter((el) => el.criteria == criteria);

        if (!filtered) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }


    }
}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));