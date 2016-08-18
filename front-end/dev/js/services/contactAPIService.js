angular.module('phoneList').factory('APIContact', function ($http, Config) {
    var _getContacts = function () {
        return $http.get(Config.API + 'contacts');
    };

    var _postContact = function (contact) {
        return $http.post(Config.API + 'contacts/add', contact);
    };

    var _deleteContact = function (contact) {
        return $http.delete(Config.API + 'contacts/delete', {params: {contactId: contact.contactId}});
    };

    return {
        getContacts:    _getContacts,
        postContact:    _postContact,
        deleteContact:  _deleteContact
    }
});