'use strict';

describe ('iplayerApp', function() {

  describe('Program list', function() {
    it('should display a list of BBC programs', function() {
      var programList = element.all(by.repeater('program in programs'));

      browser.get('index.html');
      expect(programList.count()).toBe(20);
    })
  });
});
