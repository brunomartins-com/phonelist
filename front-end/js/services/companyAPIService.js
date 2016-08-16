angular.module('phoneList').factory('APICompany', function ($http) {

    var _getCompanies = function () {
        return $http.get('http://localhost:8000/companies');
    };

    return {
        getCompanies: _getCompanies
    }
});