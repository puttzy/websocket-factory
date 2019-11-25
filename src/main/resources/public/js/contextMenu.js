var factory_menu = {

};

var contex_menu = {
    'factoryMenu' : {
        elements : [
            {
                text : 'Delete Factory',
                icon: 'images/delete.png',
                action : function(node) {
                    sendDeleteMessage(node);
                }
            },{
                text : 'Rename Factory',
                icon: 'images/rename.png',
                action : function(node) {
                    node.setText('dan ');
                }
            },{
                text : 'Regenerate Factory',
                icon: 'images/regenerate.png',
                action : function(node) {
                    node.setText('dan ');
                }
            }
        ]
    }
    /*'context1' : {
        elements : [
            {
                text : 'Node Actions',
                icon: 'images/blue_key.png',
                action : function(node) {

                },
                submenu: {
                    elements : [
                        {
                            text : 'Toggle Node',
                            icon: 'images/shipping.jpg',
                            action : function(node) {
                                node.toggleNode();
                            }
                        },
                        {
                            text : 'Expand Node',
                            icon: 'images/shipping.jpg',
                            action : function(node) {
                                node.expandNode();
                            }
                        },
                        {
                            text : 'Collapse Node',
                            icon: 'images/shipping.jpg',
                            action : function(node) {
                                node.collapseNode();
                            }
                        },
                        {
                            text : 'Expand Subtree',
                            icon: 'images/tree.png',
                            action : function(node) {
                                node.expandSubtree();
                            }
                        },
                        {
                            text : 'Collapse Subtree',
                            icon: 'images/tree.png',
                            action : function(node) {
                                node.collapseSubtree();
                            }
                        },
                        {
                            text : 'Delete Node',
                            icon: 'images/delete.png',
                            action : function(node) {
                                node.removeNode();
                            }
                        }
                    ]
                }
            },
            {
                text : 'Child Actions',
                icon: 'images/blue_key.png',
                action : function(node) {

                },
                submenu: {
                    elements : [
                        {
                            text : 'Create Child Node',
                            icon: 'images/add1.png',
                            action : function(node) {
                                node.createChildNode('Created',false,'images/folder.png',null,'context1');
                            }
                        },
                        {
                            text : 'Create 1000 Child Nodes',
                            icon: 'images/add1.png',
                            action : function(node) {
                                for (var i=0; i<1000; i++)
                                    node.createChildNode('Created -' + i,false,'images/folder.png',null,'context1');
                            }
                        },
                        {
                            text : 'Delete Child Nodes',
                            icon: 'images/delete.png',
                            action : function(node) {
                                node.removeChildNodes();
                            }
                        }
                    ]
                }
            }
        ]
    }*/
};


tree = createTree('div_tree','white',contex_menu);
tree.drawTree();
