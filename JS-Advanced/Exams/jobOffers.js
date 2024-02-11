class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCaandidates = [];
    }

    jobApplication(candidates) {
        let names = [];
        for (let candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');

            this.jobCaandidates.push({
                name,
                education,
                yearsExperience
            });

            if (!names.includes(name)) {
                names.push(name);
            } else {
                let data = this.jobCaandidates.find(candidate => candidate.name == name);
                if (data.yearsExperience < yearsExperience) {
                    data.yearsExperience = yearsExperience;
                }
            }



        }

        return `You successfully added candidates: ${names.join(', ')}.`
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');

        let data = this.jobCaandidates.find(candidate => candidate.name == name);

        if (!data) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (data.yearsExpirience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        }

        data.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        let data = this.jobCaandidates.find(candidate => candidate.name == name);

        if (!data) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if (data.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (data.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (this.jobCaandidates.length == 0) {
            throw new Error(`Candidate Database is empty!`)
        }

        let result = ['Candidates list:']
        let sorted = this.jobCaandidates.sort((a, b) => a.name.localeCompare(b.name));

        for (let { name, yearsExperience } of sorted) {
            result.push(`${name}-${yearsExperience}`);
        }

        return result.join('\n');
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());