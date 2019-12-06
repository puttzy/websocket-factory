var stompClient = null;
var MIN_VALUE = -10000000;
var MAX_VALUE = 10000000;

function regenerateFactory(node){

    redoFactoryModal.node = node;
    redoFactoryModal.setContent(''+
        '<fieldset id="update-factory">' +
        '<legend>Regenerate Factory:  "'+node.text+'"</legend>' +
        '<input id="updateFactory_Id" placeholder="Node Id" value="'+node.tag+'" hidden>' +
        '<label for="updateFactory_Name" class="form_label">New Name</label><input id="updateFactory_Name"  placeholder="Factory Name" maxlength="50" style="width: 60%" value="'+node.name+'"> <br/>' +
        '<label for="updateFactory_Nodes" class="form_label">Number Of Nodes</label>' +
        '   <select id="updateFactory_Nodes" placeholder="How many nodes">' +
        '       <option> 1 </option>' +
        '       <option> 2 </option>' +
        '       <option> 3 </option>' +
        '       <option> 4 </option>' +
        '       <option> 5 </option>' +
        '       <option> 6 </option>' +
        '       <option> 7 </option>' +
        '       <option> 8 </option>' +
        '       <option> 9 </option>' +
        '       <option> 10 </option>' +
        '       <option> 11 </option>' +
        '       <option> 12 </option>' +
        '       <option> 13 </option>' +
        '       <option> 14 </option>' +
        '       <option> 15 </option>' +
        '       </select>' +
        '<label for="updateFactory_Min" class="form_label" style="padding-left: 10%">Range</label><input id="updateFactory_Min" placeholder="min" style=" width: 10%" value="'+node.min+'">' +
        ' - <input id="updateFactory_Max" placeholder="max" style="width: 10%"  value="'+node.max+'">' +
        '</fieldset>'
    );
    redoFactoryModal.open();
    setSelected('updateFactory_Nodes', node.numberOfNodes);
}


function deleteFactory(node){

    removeClasses('node_selected', 'node')
    id(node).classList.add('delete-blink');
    setTimeout(function(){ tree.findNode(node).removeNode(); }, 800);

}



//Update the node specific node
function updateNode(factory) {
    factory = JSON.parse(factory);
    var parentNode = tree.findNode(factory.id);
    removeClasses('node_selected', 'node');
    id(factory.id).classList.add('update-blink');
    setTimeout(function(){
        id(factory.id).classList.remove('update-blink');
        parentNode.setText(factory.name);
        parentNode.number=factory.number;
        parentNode.min=factory.min;
        parentNode.max=factory.max;
        parentNode.name=factory.name;

        parentNode.removeChildNodes();
        addNodes(parentNode, factory.nodes);

        setNodeActionPanelVisibility(false);

    }, 800);


}




function isUpdateValid() {
    setErrorState(id("updateFactory_Id"), false);
    setErrorState(id("updateFactory_Name"), false);
    setErrorState(id("updateFactory_Min"), false);
    setErrorState(id("updateFactory_Max"), false);

    var nodeId = id("updateFactory_Id").value.trim();
    var name = id("updateFactory_Name").value.trim();
    var min = id("updateFactory_Min").value.trim();
    var max = id("updateFactory_Max").value.trim();

    id("updateFactory_Name").value = name.trim();

    var errMsg = '';

    var isUpdateValid = true;

    if (name === ""){
        isUpdateValid = false;
        errMsg += 'Factory Name is required.';
        setErrorState(id("updateFactory_Name"), true);
    }

    if (! isInt(min) || min < MIN_VALUE) {
        errMsg += '\nMinimum range must be an INT less than max range and greater than:' + MIN_VALUE;
        setErrorState(id("updateFactory_Min"), true);
        min = '';
        isUpdateValid = false;
    }

    if (! isInt(max) || max > MAX_VALUE) {
        errMsg += '\nMaximum range must be an INT greater than min range and less than: ' + MAX_VALUE;
        setErrorState(id("updateFactory_Max"), true);
        max = '';
        isUpdateValid = false;
    }

    if (parseInt(max) <= parseInt(min)) {
        errMsg += '\nMinimum range must be less than maximum range.';
        setErrorState(id("updateFactory_Min"), true);
        setErrorState(id("updateFactory_Max"), true);
        isUpdateValid = false;
    }

    if (!isUpdateValid){
        alert(errMsg);
    }

    return isUpdateValid;
}

function updateFactoryRequest() {

    if (isUpdateValid()) {
        this.id = id("updateFactory_Id").value;
        this.name = id("updateFactory_Name").value;
        this.number = id("updateFactory_Nodes").value;
        this.min = id("updateFactory_Min").value;
        this.max = id("updateFactory_Max").value;

        id("updateFactory_Id").value = '';
        id("updateFactory_Name").value = '';
        id("updateFactory_Nodes").value = '';
        id("updateFactory_Min").value = '';
        id("updateFactory_Max").value = '';
    } else {
        throw "Invalid input";
    }
}

function deleteFactoryRequest(node) {
        this.factoryId = node.tag;
}



function renameFactory(node){
    renameFactoryModal.node = node;
    renameFactoryModal.setContent(''+
        '<fieldset id="rename-factory"> '  +
        '<legend>Rename Factory "'+node.text+'"</legend> '  +
        '<input id="renameFactory_Id" placeholder="Node Id" hidden value="'+node.tag+'"> '  +
        '<label for="renameFactory_Name" class="form_label" >Factory Name: </label><input id="renameFactory_Name"  placeholder="New Factory Name" style="width: 50%"> '  +
        '</fieldset> ' 
    );
    renameFactoryModal.open();
}

function renameFactoryRequest() {

    setErrorState(id("addFactory_Min"), false);
    this.id = id("renameFactory_Id").value;
    this.name = id("renameFactory_Name").value;

    if ( id("renameFactory_Name").value.trim() === "" ) {
        alert('Factory Name is required');
        setErrorState(id("renameFactory_Name"), true);
        id("renameFactory_Name").value = '';
        throw "Invalid input";
    }

    id("renameFactory_Id").value = '';
    id("renameFactory_Name").value = '';

}

function isCreateValid() {
    setErrorState(id("addFactory_Min"), false);
    setErrorState(id("addFactory_Max"), false);
    setErrorState(id("addFactory_Name"), false);

    var min = id("addFactory_Min").value.trim();
    var max = id("addFactory_Max").value.trim();
    var name = id("addFactory_Name").value.trim();

    id("addFactory_Name").value = name.trim();
    var errMsg = '';
    var areInputsValid = true;

    if (name === ""){
        errMsg += 'Factory Name is required.';
        areInputsValid = false;
        setErrorState(id("addFactory_Name"), true);
    }

    if (! isInt(min) || min < MIN_VALUE) {
        errMsg += '\nMinimum range must be an INT less than max range and greater than:' + MIN_VALUE;
        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
    }

    if (! isInt(max) || max > MAX_VALUE) {
        errMsg += '\nMaximum range must be an INT greater than min range and less than: ' + MAX_VALUE;
        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
    }

    if (parseInt(max) <= parseInt(min)) {
        errMsg += '\nMinimum range must be less than maximum range.';

        areInputsValid = false;
        setErrorState(id("addFactory_Min"), true);
        setErrorState(id("addFactory_Max"), true);
    }

    if (!areInputsValid){
        alert(errMsg);
    }
    return areInputsValid;
}


function createFactoryRequest() {

    if (isCreateValid()) {

        this.name = html_encode(id("addFactory_Name").value);
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

function confirmDelete(node){
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






