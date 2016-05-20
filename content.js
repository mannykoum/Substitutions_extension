var elements = document.getElementsByTagName('*');
var subs = {};
subs["witnesses"] = "these dudes I know";
subs["allegedly"] = "kinda probably";
subs["new study"] = "Tumblr post";
subs["rebuild"] = "avenge";
subs["space"] = "spaaace";
subs["Google Glass"] = "Virtual Boy";
subs["smartphone"] = "Pokédex";
subs["electric"] = "atomic";
subs["senator"] = "Elf-lord";
subs["car"] = "cat";
subs["election"] = "eating contest";
subs["congressional leaders"] = "river spirits";
subs["homeland security"] = "Homestar Runner";
subs["could not be reached for comment"] = "is guilty and everyone knows it";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            for (var key in subs) {
                if (subs.hasOwnProperty(key)){
                    for (var i = 0; i < elements.length; i++) {
                        var element = elements[i];

                        for (var j = 0; j < element.childNodes.length; j++) {
                            var node = element.childNodes[j];

                            if (node.nodeType === 3) {
                                var text = node.nodeValue;
                                var re = new RegExp(key,"gi")
                                var replacedText = text.replace(re, subs[key]);

                                if (replacedText !== text) {
                                    element.replaceChild(document.createTextNode(replacedText), node);
                                }
                            }
                        }
                    }
                }
            }   
        }
    }
);