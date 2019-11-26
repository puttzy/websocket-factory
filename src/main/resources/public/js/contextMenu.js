var contex_menu = {
    'factoryMenu' : {
        elements : [
            {
                text : 'Delete Factory',
                icon: 'images/delete.png',
                action : function(node) {
                    showConfirmDeleteDialog(node);
                    //sendDeleteMessage(node);
                }
            },{
                text : 'Rename Factory',
                icon: 'images/rename.png',
                action : function(node) {
                    renameFactory(node);
                }
            },{
                text : 'Regenerate Factory',
                icon: 'images/regenerate.png',
                action : function(node) {
                    regenerateFactory(node);

                }
            }
        ]
    }
};


tree = createTree('div_tree','white',contex_menu);
tree.drawTree();
