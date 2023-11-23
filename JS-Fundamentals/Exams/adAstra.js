function adAstra([input]) {

    let pattern = /(#|\|)(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;

    let match = pattern.exec(input);
    let totalKcal = 0;

    while (match) {
        let kcal = Number(match[4]);
        totalKcal += kcal;

        match = pattern.exec(input);
    }

    
    let days = Math.floor(totalKcal / 2000);
     
        console.log(`You have food to last you for: ${days} days!`);

    let matches = input.matchAll(pattern);
  
    if (matches) {
        for (match of matches) {
            let { item, date, cal } = match.groups;

            console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${cal}`);
        }
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);