//This script is intended to replace the search or quiz script with a IE 11 and older compatible script

/* The IE detection portion of the script was developed by "Ryan Wilson" on StackOverflow; How to detect Internet Explorer 11 and below versions
Link to original post: https://stackoverflow.com/questions/49986720/how-to-detect-internet-explorer-11-and-below-versions
OverFlow License Policy: https://stackoverflow.com/help/licensing
Creative Common License: https://creativecommons.org/licenses/by-sa/4.0/ */

var script = document.createElement("script");
script.type = "text/javascript";

//Search results script
if (document.title == "Goldfix_Limited_Home_Page") {
    //IE will use this script
    if (window.navigator.userAgent.match(/(MSIE|Trident)/)) {

        script.src = "scripts/searchIE.js";

    }
    //All other browsers to use default script
    else {

        script.src = "scripts/search.js";
    }
}
//ForValidation script
else {
  //IE will use this script
    if (window.navigator.userAgent.match(/(MSIE|Trident)/)) {

        script.src = "scripts/formValidationIE.js";

    }
    //All other browsers, default to the orginal script
    else {

        script.src = "scripts/formValidation.js";
    }
}
//write to the DOM
document.getElementById("mainPage").appendChild(script);
