function match(str) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = str.match(regex);
    console.log(result.join(' '));
}

match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");