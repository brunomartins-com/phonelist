angular.module("phoneList").controller("phoneListController", function ($scope, APIContact, APICompany) {
    $scope.app = "Phone List";

    $scope.successMessage = null;
    $scope.errorMessage = null;

    $scope.contacts = [];
    // FUNCTION TO LOAD THE CONTACTS
    var loadContacts = function () {
        APIContact.getContacts().success(function (data, status) {
            $scope.contacts = data;
        }).error(function (data, status) {
            $scope.errorMessage = "An error occurred loading contacts.";
        });
    };

    $scope.companies = [];
    // FUNCTION TO LOAD THE COMPANIES
    var loadCompanies = function () {
        APICompany.getCompanies().success(function (data, status) {
            $scope.companies = data;
        }).error(function (data, status) {
            $scope.errorMessage = "An error occurred while loading companies.";
        });
    };

    // ADD NEW CONTACT
    $scope.addContact = function(contact){
        // ERASE MESSAGES
        $scope.eraseMessages();

        // CALL API
        APIContact.postContact(contact).success(function (data, status) {
            if(data.status == false){
                $scope.errorMessage = data.errors;
            }else {
                delete $scope.contact;
                $scope.contactForm.$setPristine();
                $scope.successMessage = data.message;
                loadContacts();
            }
        }).error(function (data, status) {
            $scope.errorMessage = [{0:"An error occurred while creating."}];
        });
    };

    // DELETE CONTACTS
    $scope.deleteContacts = function(contacts){
        // ERASE MESSAGES
        $scope.eraseMessages();

        // FILTER BY SELECTED CONTACTS
        $scope.contacts = contacts.filter(function(contact){
            if(contact.selected){
                // CALL API
                APIContact.deleteContact(contact).success(function (data, status) {
                    if(data.status == false){
                        $scope.errorMessage = data.errors;
                    }else {
                        $scope.successMessage = data.message;
                        // $scope.contacts.splice(contacts, contact);
                        loadContacts();
                    }
                }).error(function (data, status) {
                    $scope.errorMessage = [{0:"An error occurred while deleting."}];
                });
            }else{
                return contact;
            }
        });
    };

    // ERASE MESSAGES FUNCTION
    $scope.eraseMessages = function () {
        $scope.successMessage = null;
        $scope.errorMessage = null;
    };

    // CONTACT SELECTED FUNCTION
    $scope.isContactSelected = function(contacts){
        return contacts.some(function(contact){
            return contact.selected;
        });
    };

    // TABLE ORDER BY FUNCTION
    $scope.tableOrderBy = function (field) {
        $scope.fieldOrdenation = field;
        $scope.directionOrdenation = !$scope.directionOrdenation;
    };

    // EXECUTE LOADS
    loadContacts();
    loadCompanies();
});