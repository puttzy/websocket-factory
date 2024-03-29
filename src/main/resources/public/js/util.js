function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//Helper to select by id
function id(id) {
    return document.getElementById(id);
}

/*
id("connection_status").addEventListener("click", function () {
    requirementsModal.open();
});
*/

// Short-circuiting, and saving a parse operation
function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}


if(!String.prototype.trim){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g,'');
    };
}

function isBlank(input, label){
    if (input === "") {
        alert(label + ' cannot be empty');
        return true;
    }
    return false;

}


function addFactories(rawFactoriesJSON){
    var factoriesJSON = JSON.parse(rawFactoriesJSON);

    for (var i = 0 ; i < factoriesJSON.length ; i++){
        addFactory(factoriesJSON[i]);
    }
}


function addFactory(rawFactoryJSON){
    var factoryJson = rawFactoryJSON;
    if (isJson(rawFactoryJSON)){
        factoryJson = JSON.parse(rawFactoryJSON);
    }

    var factory = tree.createNode(factoryJson.name,false,'images/tree_factory2.png',null,factoryJson.id,'factoryMenu', factoryJson.number, factoryJson.min, factoryJson.max, factoryJson.name);
    addNodes(factory, factoryJson.nodes);
}

function addNodes(factory, nodes){
    for (var x= 0 ; nodes !== null && x < nodes.length ; x++){
        var node = nodes[x];
        factory.createChildNode(node.value, false, 'images/tree_shipping.jpg', 'parent' + node.id + '_' + node.id, null);
    }
}


//ensures that we escape all html characters so that we don't allow the user to inject javascript or stylized html
function html_encode(str){
    var div = document.createElement("div");
    div[("textContent" in div) ? "textContent" : "innerText"] = str;
    return div.innerHTML;
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function removeClasses(classToRemove, classToAdd) {
    var elements = document.getElementsByClassName(classToRemove)
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(classToAdd);
        elements[i].classList.remove(classToRemove);
    }
}

function redrawAllData(treeData) {
    var allData = treeData;
    if (isJson(allData)) {
        addFactories(allData);

    } else {alert('load - not json:' + treeData)}
}


function setErrorState(ele, isError){
    if (isError) {
        ele.classList.add('error_input')
        ele.value = '';
    } else {
        ele.classList.remove('error_input');
    }
}

function swapActionPanels(toShow, toHide){
    id(toHide).classList.replace('panel_visible', 'panel_hidden')
    id(toShow).classList.replace('panel_hidden', 'panel_visible')
}

function setNodeActionPanelVisibility(isVisible){
    if (isVisible){
        id('update_panel').classList.replace('panel_hidden', 'panel_visible')
    } else {
        id('update_panel').classList.replace('panel_visible', 'panel_hidden')
    }

}

function deselectNode(){
    document.getElementsByClassName('node_selected')[0].classList.remove('node_selected');
    setNodeActionPanelVisibility(false);
}


function setSelected(element, value){
    var options = id(element).options;
    for (var i = 0 ; i < options.length ; i++){
        if (options[i].value == value ){
            id(element).selectedIndex = i;
            break;
        }
    }
}


