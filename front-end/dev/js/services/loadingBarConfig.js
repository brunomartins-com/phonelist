angular.module("phoneList").config(
    ['cfpLoadingBarProvider', function(cfpLoadingBarProvider)
        {
            cfpLoadingBarProvider.includeSpinner = false;
        }
    ]
);