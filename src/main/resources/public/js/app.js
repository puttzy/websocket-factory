var stompClient = null;

//Send a message if it's not empty, then clear the input field
function sendCreateMessage() {
    try {
        var message = new createFactoryRequest();
        stompClient.send("/app/add-factory",  {}, JSON.stringify(message));
        return true;
    } catch (e) {

    }
    return false;
}

function showConfirmDeleteDialog(node){
    deleteModal.node = node;
    deleteModal.setContent('<h3>Are you sure you wish to delete the factory named: "'+node.text+'"?</h3>');
    deleteModal.open();
}


function sendDeleteMessage(node) {

    try {
        stompClient.send("/app/delete-factory",  {}, JSON.stringify(new deleteFactoryRequest(node)));
        deleteModal.close();
    } catch (e) {

    }
}

//Send a message if it's not empty, then clear the input field
function sendUpdateMessage() {
    try {
        stompClient.send("/app/update-factory", {}, JSON.stringify(new updateFactoryRequest()));
        return true;
    } catch (e) {

    }
    return false;
}


function sendRenameMessage() {
    try {
        stompClient.send("/app/rename-factory", {}, JSON.stringify(new renameFactoryRequest()));
        return true;
    } catch (e) {

    }
    return false;
}
