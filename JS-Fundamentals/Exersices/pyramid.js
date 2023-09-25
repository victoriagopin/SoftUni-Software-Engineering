function pyramid(base, increment) {
    let stoneRequired = 0;
    let toatlStone = 0;
    let marble = 0;
    let lapis = 0;
    let counter = base;
    let step = 0;
    let height = 0;
    let gold = 0;

    for (let i = base; counter <= i; i -= 2) {
        step++;
        height++;

        let total = i * i;

        if (i <= 2) {
            gold = total * increment;
            break;
        }
        if (step == 5) {
            stoneRequired = i - 2;
            stoneRequired *= stoneRequired;
            toatlStone += stoneRequired;
            lapis += total - stoneRequired;
            step = 0;
        } else {
            stoneRequired = i - 2;
            stoneRequired *= stoneRequired;
            toatlStone += stoneRequired;
            marble += total - stoneRequired;


        }
        counter -= 2;


    }
    toatlStone *= increment;
    marble *= increment;
    lapis *= increment;
    height *= increment;


    console.log(`Stone required: ${Math.ceil(toatlStone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramid(12, 1)