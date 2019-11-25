//Update the chat-panel, and the list of connected users
function redrawAllData(msg) {
    var allData = msg;
    if (isJson(allData)) {
        addFactories(allData);

        //id("chat").innerHTML =  msg.data;
    } else {alert('load - not json:' + msg)}
}

