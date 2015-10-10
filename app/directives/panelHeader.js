angular.module('searchifyApp').directive('panelHeader', panelHeader);

function panelHeader() {
        return {
                controller: HomeCtrl,
                controllerAs: 'vm',
                scope: {},
                templateUrl: 'directives/panelHeader.html'
        }
}

HomeCtrl.$inject = ['$scope', 'spotify', 'UserService', '$rootScope'];

function HomeCtrl ($scope, spotify, UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
                loadCurrentUser();
                loadAllUsers();
        }

        function loadCurrentUser() {
                UserService.GetByUsername($rootScope.globals.currentUser.username)
                        .then(function (user) {
                                vm.user = user;
                        });
        }

        function loadAllUsers() {
                UserService.GetAll()
                        .then(function (users) {
                                vm.allUsers = users;
                        });
        }

        function deleteUser(id) {
                UserService.Delete(id)
                        .then(function () {
                                loadAllUsers();
                        });
        }      
}
