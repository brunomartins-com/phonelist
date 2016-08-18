angular.module("phoneList").service("Config", function() {
    if (window.location.host.match(/brunomartins\.com/)) {
        return this.API = 'http://api.phonelist.brunomartins.com/';
    } else {
        return this.API = 'http://localhost:8000/';
    }
});