function pieceOfPie(arr, start, end) {
    let strtIndx = arr.indexOf(start);
    let endIndx = arr.indexOf(end);

    let result = arr.slice(strtIndx, endIndx + 1);
    return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');