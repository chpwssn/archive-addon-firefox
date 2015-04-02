var buttons = require('sdk/ui/button/toggle');
var tabs = require("sdk/tabs");
require("sdk/tabs").on("ready", logURL);
var panels = require("sdk/panel");
var self = require("sdk/self");
var panel = panels.Panel({
     contentURL: self.data.url("panel.html"),
     onHide: handleHide
     });

var button = buttons.ToggleButton({
    id: "arctoggle",
    label: "Enable URL Reporting",
    icon: {
    "16": "./vault-16.png",
    "32": "./vault-32.png",
    "64": "./vault-64.png"
    },
    //onClick: handleClick,
    onChange: function(){
      this.checked = !this.checked;
      if(this.checked){
          this.badge = 0;
          panel.show({
                     position: button
                     });
      }
      if (this.checked) {
        this.badgeColor = "#AA00AA";
      }
      else {
        this.badgeColor = "#00AAAA";
      }
      
    }
    });

function handleClick(state) {
    listTabs();
}
function handleHide() {
    //button.state('window', {checked: false});
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
                url: "https://wasson.io/archive-addon/?url="+url,
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

function logURL(tab){
    if(button.checked){
        button.badge = button.badge + 1;
        console.log(tab.url);
        var url = encodeURIComponent(tab.url);
        console.log(url);
        var Request = require("sdk/request").Request;
        var archiveReq = Request({
             url: "https://wasson.io/archive-addon/?url="+url,
             onComplete: function (response) {
             console.log(response.text);
             }
         });
        archiveReq.get();
    }
}


