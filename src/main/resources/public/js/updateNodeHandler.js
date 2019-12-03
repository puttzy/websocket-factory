function regenerateFactory(node){
    redoFactoryModal.node = node;
    redoFactoryModal.setContent(''+
        '<fieldset id="update-factory">' +
        '<legend>Regenerate Factory:  "'+node.text+'"</legend>' +
        '<input id="updateFactory_Id" placeholder="Node Id" value="'+node.tag+'" hidden>' +
        '<label for="updateFactory_Name" class="form_label">New Name</label><input id="updateFactory_Name"  placeholder="Factory Name" maxlength="50" style="width: 60%"> <br/>' +
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



        '<label for="updateFactory_Min" class="form_label" style="padding-left: 10%">Range</label><input id="updateFactory_Min" placeholder="min" style=" width: 10%">' +
        ' - <input id="updateFactory_Max" placeholder="max" style="width: 10%">' +
        '</fieldset>'
    );
    redoFactoryModal.open();
}


function deleteFactory(nodeId){

    removeClasses('node_selected', 'node')
    id(nodeId).classList.add('delete-blink');
    setTimeout(function(){ tree.findNode(nodeId).removeNode(); }, 800);

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
        parentNode.removeChildNodes();
        addNodes(parentNode, factory.nodes);


    }, 800);


}

function setErrorState(ele, isError){
    if (isError) {
        ele.classList.add('error_input')
    } else {
        ele.classList.remove('error_input');
    }
}


function isUpdateValid() {
    setErrorState(id("updateFactory_Id"), false);
    setErrorState(id("updateFactory_Name"), false);
    setErrorState(id("updateFactory_Nodes"), false);
    setErrorState(id("updateFactory_Min"), false);
    setErrorState(id("updateFactory_Max"), false);

    var nodeId = id("updateFactory_Id").value.trim();
    var name = id("updateFactory_Name").value.trim();
    var numNodes = id("updateFactory_Nodes").value.trim();
    var min = id("updateFactory_Min").value.trim();
    var max = id("updateFactory_Max").value.trim();

    id("updateFactory_Name").value = name.trim();

    console.log(nodeId);

    var isUpdateValid = true;

    if (isBlank(name, 'Factory Name')){
        isUpdateValid = false;
        setErrorState(id("updateFactory_Name"), true);
    }

    if (! isInt(numNodes)){
        alert('factory Nodes must be an INT between 1 and 15 (inclusive)');
        setErrorState(id("updateFactory_Nodes"), true);
        isUpdateValid = false;
    } else if (numNodes  < 1 || numNodes > 15) {
        alert('factory Nodes must be a INT between 1 and 15 (inclusive)');
        setErrorState(id("updateFactory_Nodes"), true);
        isUpdateValid = false;
    }

    if (! isInt(min)) {
        alert('Minimum range must be an integer less than max range');
        setErrorState(id("updateFactory_Min"), true);
        min = '';
        isUpdateValid = false;
    }

    if (! isInt(max)) {
        alert('Maximum range must be an integer greater than min range');
        setErrorState(id("updateFactory_Max"), true);
        max = '';
        isUpdateValid = false;
    }

    if (parseInt(max) <= parseInt(min)) {
        alert('Minimum range must be less than maximum range');
        setErrorState(id("updateFactory_Min"), true);
        setErrorState(id("updateFactory_Max"), true);
        isUpdateValid = false;
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
        '<label for="renameFactory_Name" class="form_label" >New Name: </label><input id="renameFactory_Name"  placeholder="New Name" style="width: 50%"> '  +
        '</fieldset> ' 
    );
    renameFactoryModal.open();
}

function renameFactoryRequest() {

    this.id = id("renameFactory_Id").value;
    this.name = id("renameFactory_Name").value;

    id("renameFactory_Id").value = '';
    id("renameFactory_Name").value = '';

}