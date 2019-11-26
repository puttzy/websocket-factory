function regenerateFactory(node){
    redoFactoryModal.node = node;
    redoFactoryModal.setContent(''+
        '<fieldset id="update-factory">' +
        '<legend>Regenerate Factory:  "'+node.text+'"</legend>' +
        '<input id="updateFactory_Id" placeholder="Node Id" value="'+node.tag+'" hidden>' +
        '<input id="updateFactory_Name"  placeholder="factory name">' +
        '<input id="updateFactory_Nodes" placeholder="How many nodes">' +
        '<input id="updateFactory_Min" placeholder="min">' +
        '<input id="updateFactory_Max" placeholder="max">' +
        '</fieldset>'
    );
    redoFactoryModal.open();
}


function deleteFactory(nodeId){
    id(nodeId).classList.add('delete-blink');
    setTimeout(function(){ tree.findNode(nodeId).removeNode(); }, 800);

}



//Update the node specific node
function updateNode(factory) {
    factory = JSON.parse(factory);
    var parentNode = tree.findNode(factory.id);
    id(factory.id).classList.add('update-blink');
    setTimeout(function(){
        id(factory.id).classList.remove('update-blink');
        parentNode.setText(factory.name);
        parentNode.removeChildNodes();
        addNodes(parentNode, factory.nodes);


    }, 800);


}


function isUpdateValid() {
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
    }

    if (! isInt(numNodes)){
        alert('factory Nodes must be a number INT between 1 and 15 (inclusive)');
        isUpdateValid = false;
    } else if (numNodes  < 1 || numNodes > 15) {
        alert('factory Nodes must be a number INT between 1 and 15 (inclusive)');
        isUpdateValid = false;
    }

    if (! isInt(min)) {
        alert('Minimum range must be an integer less than max range');
        min = '';
        isUpdateValid = false;
    }

    if (! isInt(max)) {
        alert('Maximum range must be an integer greater than max range');
        max = '';
        isUpdateValid = false;
    }

    if (max <= min) {
        alert('Minimum range must be less than maximum range');
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
        '<input id="renameFactory_Name"  placeholder="New Name"> '  +
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