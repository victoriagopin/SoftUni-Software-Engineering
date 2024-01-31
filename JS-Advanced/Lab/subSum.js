export function subSum(arr, startInd, endIndx) {

    let sum = 0;

    if (endIndx > arr.length) {
        endIndx = arr.length - 1;
    }

    if (startInd < 0) {
        startInd = 0;
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (let i = startInd; i <= endIndx; i++) {
        if (typeof arr[i] == 'number') {
            sum += Number(arr[i]);
        } else {
            return NaN;
        }

    }

    return sum
}