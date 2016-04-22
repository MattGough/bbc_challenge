'user strict';

describe('ProgramListCtrl', function() {
  var scope, ctrl, $httpBackend, response;

  beforeEach(module('iplayerApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    response = {atoz_programmes: {elements: [{title: "Abadas", images: {standard: 'http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg'}}]}};
    $httpBackend.expectGET('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').respond(response);

    scope = $rootScope.$new();
    ctrl = $controller('ProgramListCtrl', {$scope: scope});
  }));

  it('should make an API request and access program array', function() {
    expect(scope.programs).toBeUndefined();
    scope.getProgramList('a', '1');
    $httpBackend.flush();

    expect(scope.programs[0].title).toEqual("Abadas");
  });

  it('should add the image link to each element', function() {
    scope.getProgramList('a', '1');
    $httpBackend.flush();

    expect(scope.programs[0].image).toEqual('http://ichef.bbci.co.uk/images/ic/192x108/p017mqg6.jpg');
  });
});
