'use strict';

describe('Testing searchOutput Directive', function() {
	beforeEach(module('searchifyApp'));
	
	var element, scope, compile, validTemplate = '<search-ouput></search-output>', $httpBackend;
	
	beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
		scope = $rootScope.$new();
		compile = $compile;
		$httpBackend = _$httpBackend_;

		$httpBackend.whenGET('/i18n/es/header.json').respond(200);
		$httpBackend.whenGET('/i18n/es/login.json').respond(200);
		$httpBackend.whenGET('/i18n/es/register.json').respond(200);
	}));
	
	function createDirective(data, template){
		var elm;
		scope.data = data;
		elm = compile(template || validTemplate)(scope);
		return elm;
	}

	describe('when created', function () {
		it('should compile angular expressions', inject(function ($rootScope, $compile) {
			$rootScope.sum = 4;
			var expression = '<search-ouput></search-output>'
			var element = $compile(expression)($rootScope);

			expect(element.html()).not.toContain('2+2 = 4');

			$rootScope.$digest();
			
			expect(element.length).toBe(1);
		}));
	})
	
});
