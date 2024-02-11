class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });

        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let data = this.wines.find(wine => wine.wineName == wineName);

        if (!data) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if (data.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        if (data.paid == false) {
            data.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`
        }
    }

    openBottle(wineName) {
        let data = this.wines.find(wine => wine.wineName == wineName);

        if (!data) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }
        if (data.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        let indx = this.wines.indexOf(data);
        this.wines.splice(indx, 1);
        return `You drank a bottle of ${wineName}.`

    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`]

            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (let { wineName, wineType, paid } of sorted) {
                if (paid == true) {
                    result.push(`${wineName} > ${wineType} - Has Paid.`)
                } else {
                    result.push(`${wineName} > ${wineType} - Not Paid.`)
                }
            }
            return result.join('\n').trim();
        }

        let data = this.wines.find(wine => wine.wineType == wineType);

        if (!data) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        if (data.paid == true) {
            return `${data.wineName} > ${wineType} - Has Paid.`
        } else {
            return `${data.wineName} > ${wineType} - Not Paid.`
        }


    }
}