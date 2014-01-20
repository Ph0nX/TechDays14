(function () {
    "use strict";

    var _model = [
        { title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: "Item Subtitle: 1" },
        { title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: "Item Subtitle: 2" },
        { title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: "Item Subtitle: 3" },
        { title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: "Item Subtitle: 4" },
        { title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: "Item Subtitle: 5" },
    ];

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
