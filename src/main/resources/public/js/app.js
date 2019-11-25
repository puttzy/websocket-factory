var stompClient = null;

//Send a message if it's not empty, then clear the input field
function sendCreateMessage() {
    try {
        var message = new createFactoryRequest();
        stompClient.send("/app/add-factory",  {}, JSON.stringify(message));
    } catch (e) {

    }
}


function sendDeleteMessage(node) {
    try {
        stompClient.send("/app/delete-factory",  {}, JSON.stringify(new deleteFactoryRequest(node)));
    } catch (e) {

    }
}

//Send a message if it's not empty, then clear the input field
function sendUpdateMessage() {
    stompClient.send("/app/update-factory",  {}, JSON.stringify(new updateFactoryRequest()));
}