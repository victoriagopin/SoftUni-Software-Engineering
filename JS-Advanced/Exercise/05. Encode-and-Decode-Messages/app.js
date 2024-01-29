function encodeAndDecodeMessages() {
    let [encodeArea, decodeArea] = document.querySelectorAll('textarea');
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');

    encodeBtn.addEventListener('click', encode);

    function encode() {
        let textToDecode = encodeArea.value;
        let result = '';


        for (let digit of textToDecode) {
            let newDigit = digit.charCodeAt() + 1;
            newDigit = String.fromCharCode(newDigit);
            result += newDigit;
        }

        encodeArea.value = '';
        decodeArea.value = result;
    }

    decodeBtn.addEventListener('click', decode);

    function decode() {
        let result = '';
        let textToDecode = decodeArea.value;
        decodeArea.value = '';

        for (let digit of textToDecode) {
            let newDigit = digit.charCodeAt() - 1;
            newDigit = String.fromCharCode(newDigit);
            result += newDigit;
        }

        decodeArea.value = result;
    }
}