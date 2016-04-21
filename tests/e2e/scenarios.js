'use strict';

describe ('iPlayer App', function() {

  describe('Program list', function() {
    it('should display a list of BBC programs', function() {
      var programList = element.all(by.repeater('program in programs'));

      browser.get('/')
      expect(programList.count()).toBe(20);
    })
  });
});
