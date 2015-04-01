var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
                                  id: "mozilla-link",
                                  label: "Submit Tabs to Archive",
                                  icon: {
                                  "16": "./vault-16.png",
                                  "32": "./vault-32.png",
                                  "64": "./vault-64.png"
                                  },
                                  onClick: handleClick
                                  });

function handleClick(state) {
    listTabs();
}

function listTabs() {
    var modal = "";
    var tabs = require("sdk/tabs");
    for (let tab of tabs){
        if(tab.url != null){
            var url = encodeURIComponent(tab.url);
            console.log(url);
            var Request = require("sdk/request").Request;
            var archiveReq = Request({
                url: "https://wasson.io/url-addon/?url="+url,
                onComplete: function (response) {
                    console.log(response.text);
                    modal = modal + response.text+"<br/>";
                }
                });
            archiveReq.get();
            tab.attach({
                       contentScript: "document.body.style.border = '5px solid green';"
                       });
            //tabs.open("https://wasson.io/url-addon/?url="+url);
        }
    }
    
}