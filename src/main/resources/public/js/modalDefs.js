var deleteModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    },
    node: undefined
});

// set content
deleteModal.setContent('<h1>Are you sure you wish to delete this factory?</h1>');

// add a button
deleteModal.addFooterBtn('Yes', 'tingle-btn tingle-btn--primary', function() {

    // here goes some logic
    sendDeleteMessage(deleteModal.node)
});

// add another button
deleteModal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    deleteModal.close();
});




//  create the modal for creating a factory
var createModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
createModal.setContent(''+
    '<fieldset id="add-factory">' +
    '<legend>Add Factory</legend>' +
    '<input id="addFactory_Name"  placeholder="Factory Name">' +
    '<input id="addFactory_Nodes" placeholder="how many nodes">' +
    '<input id="addFactory_Min" placeholder="min">' +
    '<input id="addFactory_Max" placeholder="max">' +
    '</fieldset>'
    );

// add a button
createModal.addFooterBtn('Add Factory', 'tingle-btn tingle-btn--primary', function() {
    if (sendCreateMessage()){
        createModal.close();
    }
    // here goes some logic

});

// add another button
createModal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    createModal.close();
});



//  create the modal for creating a redefining a factory
var redoFactoryModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }   ,
    node: null
});

// set content
redoFactoryModal.setContent(''+
    '<fieldset id="update-factory">' +
    '<legend>Update Factory</legend>' +
    '<input id="updateFactory_Id" placeholder="Node Id">' +
    '<input id="updateFactory_Name"  placeholder="factory name">' +
    '<input id="updateFactory_Nodes" placeholder="How many nodes">' +
    '<input id="updateFactory_Min" placeholder="min">' +
    '<input id="updateFactory_Max" placeholder="max">' +
    '<button id="updateFactory_Button">Update Factory</button>' +
    '</fieldset>' 
);

// add a button
redoFactoryModal.addFooterBtn('Regenerate Factory', 'tingle-btn tingle-btn--primary', function() {
        
    if (sendUpdateMessage()){
        redoFactoryModal.close();
    }
    // here goes some logic

});

// add another button
redoFactoryModal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    redoFactoryModal.close();
});





//  create the modal for creating a redefining a factory
var renameFactoryModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }   ,
    node: null
});

// set content
renameFactoryModal.setContent(''+
    '<fieldset id="update-factory">' +
    '<legend>Update Factory</legend>' +
    '<input id="updateFactory_Id" placeholder="Node Id">' +
    '<input id="updateFactory_Name"  placeholder="factory name">' +
    '<input id="updateFactory_Nodes" placeholder="How many nodes">' +
    '<input id="updateFactory_Min" placeholder="min">' +
    '<input id="updateFactory_Max" placeholder="max">' +
    '<button id="updateFactory_Button">Update Factory</button>' +
    '</fieldset>'
);

// add a button
renameFactoryModal.addFooterBtn('Rename Factory', 'tingle-btn tingle-btn--primary', function() {

    if (sendRenameMessage()){
        renameFactoryModal.close();
    }
    // here goes some logic

});

// add another button
renameFactoryModal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    renameFactoryModal.close();
});


