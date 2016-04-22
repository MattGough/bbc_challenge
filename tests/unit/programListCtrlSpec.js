'user strict';

describe('ProgramListCtrl', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('iplayerApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').respond({atoz_programmes: {elements: [{title: "Abadas"},{title: "A Boder of Life and Death"}]}});

    scope = $rootScope.$new();
    ctrl = $controller('ProgramListCtrl', {$scope: scope});
  }));

  it('should make an API request and access program array', function() {
    expect(scope.programs).toBeUndefined();
    $httpBackend.flush();

    expect(scope.programs).toEqual([{title: "Abadas"},{title: "A Boder of Life and Death"}]);
  });
});
