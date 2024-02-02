function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidMsgSymbols = ['<', '>', '\\', '&', '\'', '\"'];
    let uriPattern = /^[\w.]+$/g;

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }
    for (let char of obj.message) {
        if (invalidMsgSymbols.includes(char)) {
            throw new Error("Invalid request header: Invalid Message");

        }
    }

    if (!obj.uri || !obj.uri == '*' || !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    return obj;
}

requestValidator({
    method: 'po',
    uri: 'svn_-public.catalog',
    version: 'HTTP/1.1',
    message: ''
});