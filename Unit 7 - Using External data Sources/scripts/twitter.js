/*
 * This script will add a tweet button to the DOM using the Twitter JavaScript API.
 */

//The API hasn't loaded yet
if (typeof (twttr.ready) == "undefined") {

    //Wait until the API is loaded...
    document.getElementById("twitter-wjs").addEventListener("load", function () {
        //Wait for all the elements to load in
        $(document).ready(function () {
            //Add the Twitter tweet button
            twttr.widgets.createShareButton(
              //Product link
                $(document)[0].URL,
                document.getElementById("tweet-shareBtn"),
                {
                    size: "large",
                    text: "Check out our latest Goldfix product! Learn about, '" + $('.product-name')[0].innerHTML + "'",
                    hashtags: "Goldfix!",
                }
            );

        });
    });

} else { //The API loaded already

    console.log("Twitter API Loaded");

    //Add the Twitter tweet button
    twttr.widgets.createShareButton(
      //product link
        $(document)[0].URL,
        document.getElementById("tweet-container"),
        {
            size: "large",
            text: "Check out our latest Goldfix product! Learn about, '" + $('.product-name')[0].innerHTML + "'",
            hashtags: "Goldfix!",
        }
    );

}
