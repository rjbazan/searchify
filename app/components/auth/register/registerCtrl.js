(function () {
  'use strict';

  angular.module('sf.auth').controller('RegisterCtrl', RegisterController);

  RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
  function RegisterController(UserService, $location, $rootScope, FlashService) {
    var vm = this;

    vm.register = register;
    vm.provinces = ['Salta', 'Jujuy', 'Catamarca', 'Chaco', 'San Luis',
      'San Juan', 'Formosa', 'Tucuman', 'La Pampa', 'Santiago', 'La Rioja',
      'Neuquen', 'Buenos Aires', 'Misiones', 'Chubut', 'Entre Ríos', 'Santa Cruz',
      'Santa Fe', 'Tierra del Fuego', 'Mendoza', 'Corrientes', 'Rio Negro'];

    function register() {
      vm.dataLoading = true;
      UserService.Create(vm.user)
        .then(function (response) {
          if (response.success) {
            FlashService.Success('Registration successful', true);
            $location.path('#/login');
          } else {
            FlashService.Error(response.message);
            vm.dataLoading = false;
          }
        });
    }
  }

})();