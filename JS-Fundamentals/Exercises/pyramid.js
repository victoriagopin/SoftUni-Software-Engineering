// Write a JS program that calculates how much resources will be required for the construction of a pyramid.It is made
// out of stone, marble, lapis lazuli, and gold.Your program will receive an integer that will be the base width and
// length of the pyramid and an increment that is the height of each step.The bulk is made out of stone, while the
// outer layer is made out of marble.Every fifth step’s outer layer is made out of lapis lazuli instead of marble.The
// final step is made out of gold.
// The pyramid is built with 1x1 blocks with a height equal to the given increment.The first step of the pyramid has a
// width and length equal to the given base and every next step is reduced by 2 blocks(1 from each side).The height
// of every step equals the given increment.See the drawing for an example.White steps are covered in marble, blue
// steps are covered in lapis lazuli(every fifth layer from the bottom), and yellow steps are made entirely out of gold
// (top - most step).
//  Since the outer layer of each step is made of decorative material, to calculate the required stone for one step,
//  reduce the width and length by 2 blocks (one from each side), find its area, and multiply it by the increment. The
//   rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find
//   the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping
//   corners), and multiply the result by the increment.

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



