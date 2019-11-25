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

id("connection_status").addEventListener("click", function () {
    initConnections();
    id("connection_status").classList.replace('reddot', 'greendot' );
});

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
    factoryJson = rawFactoryJSON;
    if (isJson(rawFactoryJSON)){
      factoryJson = JSON.parse(rawFactoryJSON);
    }

    var factory = tree.createNode(factoryJson.name,false,'images/factory.jpeg',null,factoryJson.id,'factoryMenu');
    addNodes(factory, factoryJson.nodes);
}

function addNodes(factory, nodes){
    for (var x= 0 ; nodes !== null && x < nodes.length ; x++){
        var node = nodes[x];
        factory.createChildNode(node.value, false, 'images/shipping.jpg', 'parent' + node.id + '_' + node.id, 'context1');
    }
}


