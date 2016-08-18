angular.module('phoneList').factory('APICompany', function ($http, Config) {

    var _getCompanies = function () {
        return $http.get(Config.API + 'companies');
    };

    return {
        getCompanies: _getCompanies
    }
});