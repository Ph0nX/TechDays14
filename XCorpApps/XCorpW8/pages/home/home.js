(function () {
    "use strict";

    var _model = {
        name: "Stef"
    };

    var _viewModel = {
        model: _model
    };

    WinJS.Namespace.define("Application.Pages.home",{ "ViewModel": _viewModel})

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {
            WinJS.Binding.processAll(null, Application.Pages.home.ViewModel)

        }
    });
})();
