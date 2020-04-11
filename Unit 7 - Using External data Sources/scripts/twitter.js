/*
 * This script will add a tweet button to the DOM using the Twitter JavaScript API.
 * Source: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
 */

//The API hasn't loaded yet
if (typeof (twttr.ready) == "undefined") {
    // Wait for API to load
    document.getElementById("twitter-wjs").addEventListener("load", function () {
        //Wait for all the elements to load in
        $(document).ready(function () {
            //Add the tweet button
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
    
    //Add the tweet button
    twttr.widgets.createShareButton(
      //product link
        $(document)[0].URL,
        document.getElementById("tweet-shareBtn"),
        {
            size: "large",
            text: "Check out our latest Goldfix product! Learn about, '" + $('.product-name')[0].innerHTML + "'",
            hashtags: "Goldfix!",
        }
    );

}
