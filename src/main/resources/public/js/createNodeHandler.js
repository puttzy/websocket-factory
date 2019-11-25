
/*createNodeSocket.onmessage = function (msg) { addToTree(msg); };
createNodeSocket.onclose = function () {
    socketClosed();
};*/

//Send message if "Send" is clicked
id("addFactory_Button").addEventListener("click", function () {
    sendCreateMessage();
});




//Update the chat-panel, and the list of connected users
function addToTree(factory) {

    if (isJson(factory)){
        //id("chat").innerHTML = id("chat").innerHTML + msg.data;
        addFactory(factory);
    } else {alert('create not json:' + factory)}
}


function isCreateValid() {
    var numNodes = id("addFactory_Nodes").value.trim();
    var min = id("addFactory_Min").value.trim();
    var max = id("addFactory_Max").value.trim();
    var name = id("addFactory_Name").value.trim();

    id("addFactory_Name").value = name.trim();



    var areInputsValid = true;

    if (isBlank(name, 'Factory Name')){
        areInputsValid = false;
    }

    if (! isInt(numNodes)){
        alert('factory Nodes must be a number INT between 1 and 15 (inclusive)');
        numNodes = '';
        areInputsValid = false;
    } else if (numNodes  < 1 || numNodes > 15) {
        alert('factory Nodes must be a number INT between 1 and 15 (inclusive)');
        numNodes = '';
        areInputsValid = false;
    }

    if (! isInt(min)) {
        alert('Minimum range must be an integer less than max range');
        min = '';
        areInputsValid = false;
    }

    if (! isInt(max)) {
        alert('Maximum range must be an integer greater than max range');
        max = '';
        areInputsValid = false;
    }

    if (max <= min) {
        alert('Minimum range must be less than maximum range');
        max = '';
        areInputsValid = false;
    }

    return areInputsValid;
}


function createFactoryRequest() {

    if (isCreateValid()) {

        this.name = id("addFactory_Name").value;
        this.number = id("addFactory_Nodes").value;
        this.min = id("addFactory_Min").value;
        this.max = id("addFactory_Max").value;

        id("addFactory_Name").value = '';
        id("addFactory_Nodes").value = '';
        id("addFactory_Min").value = '';
        id("addFactory_Max").value = '';
    } else {
        throw "Invalid input";
    }


}



