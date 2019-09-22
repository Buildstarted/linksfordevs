(function() {
    var COLLECT_URL = "https://dna.buildstarted.com/t";
    var SITE_ID = "linksfor.devs";
    var GLOBAL_VAR_NAME = "__DNA__";

    window[GLOBAL_VAR_NAME] = {};

    window[GLOBAL_VAR_NAME].sendPageView = function() {
        var path = location.pathname;
        var referrer = document.referrer;

        var url = COLLECT_URL + "?siteid=" + SITE_ID + "&p=" + encodeURIComponent(path) + "&r=" + encodeURIComponent(referrer);

        fetch(url, { method: "GET" });
    };

    window[GLOBAL_VAR_NAME].sendPageView();
})();