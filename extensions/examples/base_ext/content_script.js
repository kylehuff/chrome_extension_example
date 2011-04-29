window["my_custom_function"] = function(state) {
  alert('HELLO');
}

window.my_custom_function();


var myContentScript = {

    onLoad: function() {
        console.log("Loaded....");
        // Create a port to the background page for long-lived connections
        var port = chrome.extension.connect({"name": "your content script"});
        port.postMessage({"msg": "I have a message for you..."});
        port.onMessage.addListener(function(msg) {
            myContentScript.onPortMessage(port, msg);
        });
    },

    onPortMessage: function(port, msg) {
        console.log("we have received a message from ", port, " here is the message: ", msg);
    },

};

myContentScript.onLoad();

