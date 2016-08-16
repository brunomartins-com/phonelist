angular.module('phoneList').factory('APIContact', function ($http) {
    var _getContacts = function () {
        return $http.get('http://localhost:8000/contacts');
    };

    var _postContact = function (contact) {
        return $http.post('http://localhost:8000/contacts/add', contact);
    };

    var _deleteContact = function (contact) {
        return $http.delete('http://localhost:8000/contacts/delete', {params: {contactId: contact.contactId}});
    };

    return {
        getContacts:    _getContacts,
        postContact:    _postContact,
        deleteContact:  _deleteContact
    }
});