// You will receive a single number between 0 and 100, which is divided with 10 
// without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on
//  the number you have received in the input.


function loadingBar(num) {
    if (num == 10) {
        console.log(`${num}% [%.........]`);
        console.log(`Still loading...`);
    } else if (num == 20) {
        console.log(`${num}% [%%........]`);
        console.log(`Still loading...`);
    } else if (num == 30) {
        console.log(`${num}% [%%%.......]`);
        console.log(`Still loading...`);
    } else if (num == 40) {
        console.log(`${num}% [%%%%......]`);
        console.log(`Still loading...`);
    } else if (num == 50) {
        console.log(`${num}% [%%%%%.....]`);
        console.log(`Still loading...`);
    } else if (num == 60) {
        console.log(`${num}% [%%%%%%....]`);
        console.log(`Still loading...`);
    } else if (num == 70) {
        console.log(`${num}% [%%%%%%%...]`);
        console.log(`Still loading...`);
    } else if (num == 80) {
        console.log(`${num}% [%%%%%%%%..]`);
        console.log(`Still loading...`);
    } else if (num == 90) {
        console.log(`${num}% [%%%%%%%%%.]`);
        console.log(`Still loading...`);
    } else if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }

}

loadingBar(30)