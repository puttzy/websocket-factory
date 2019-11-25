var sessionId = uuidv4();

initConnections();

function initConnections(){
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/factory-added', function (node) {
            addToTree(node.body);
        });
        stompClient.subscribe('/topic/load/' + sessionId, function (body) {
            redrawAllData(body.body);
        });

        stompClient.subscribe('/topic/factory-deleted', function (body) {
            deleteFactory(body.body);
        });

        stompClient.subscribe('/topic/factory-updated', function (body) {
            updateNode(body.body);
        });

        // starts with the initial load
        stompClient.send("/app/load/" + sessionId,  {}, '');
    });
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

