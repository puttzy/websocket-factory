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
    mode: undefined
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