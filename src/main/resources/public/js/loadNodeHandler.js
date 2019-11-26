
function redrawAllData(treeData) {
    var allData = treeData;
    if (isJson(allData)) {
        addFactories(allData);

    } else {alert('load - not json:' + treeData)}
}

