function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/minif/place-link/master/link.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
}
}

placelink = getText();



