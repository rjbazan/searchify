angular.module('searchifyApp').directive('panelHeader', panelHeader);

function panelHeader() {
  return {
    controller: HomeCtrl,
    controllerAs: 'vm',
    scope: {},
    templateUrl: 'components/secured/home/panelHeader.html'
  }
}

HomeCtrl.$inject = ['$scope', 'spotify', 'UserService', '$rootScope', '$translate'];

function HomeCtrl($scope, spotify, UserService, $rootScope, $translate) {
  var vm = this;

  vm.user = null;
  vm.allUsers = [];
  vm.deleteUser = deleteUser;
  vm.changeLang = changeLang;

  initController();

  function changeLang() {
    if (localStorage.NG_TRANSLATE_LANG_KEY === 'es') {
      $translate.use('en');
    } else {
      $translate.use('es')
    }
  }

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
