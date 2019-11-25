
function redrawAllData(msg) {
    var allData = msg;
    if (isJson(allData)) {
        addFactories(allData);

    } else {alert('load - not json:' + msg)}
}

