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
        parentNode.removeChildNodes();
        addNodes(parentNode, factory.nodes);


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

    console.log(nodeId);

    var isUpdateValid = true;

    if (name === ""){
        isUpdateValid = false;
        errMsg += 'Factory Name is required.';
        setErrorState(id("updateFactory_Name"), true);
    }

    if (! isInt(min)) {
        errMsg += '\nMinimum range must be an INT less than max range.';
        setErrorState(id("updateFactory_Min"), true);
        min = '';
        isUpdateValid = false;
    }

    if (! isInt(max)) {
        errMsg += '\nMaximum range must be an INT greater than min range.';
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