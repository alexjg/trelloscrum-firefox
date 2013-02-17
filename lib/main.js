var pageMod = require("sdk/page-mod");

var self = require("sdk/self");

pageMod.PageMod({
    include: "https://trello.com/*",
    contentScriptFile: [self.data.url("jquery-1.9.1.min.js"),
                        self.data.url("trelloscrum.js")],
    contentStyleFile: self.data.url("trelloscrum.css"),
    onAttach: function(worker){
        worker.port.emit("getImageUrls", {
            "iconUrl": self.data.url("images/storyoints-icon.png"),
            "pointsDoneUrl": self.data.url("images/points-done.png")
        })
    }
});
