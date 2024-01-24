function extract(content) {
    let text = document.getElementById(content);
    text = text.textContent;

    let pattern = /\(([^)]+)\)/g;
    let matches = text.match(pattern);

    let result = matches.join('; ');
    return result;
}