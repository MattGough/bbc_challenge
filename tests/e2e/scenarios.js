'use strict';

describe ('iplayerApp', function() {

  describe('Program list', function() {
    it('should display a list of BBC programs', function() {
      var programList = element.all(by.repeater('program in programs'));

      browser.get('index.html');
      expect(programList.count()).toBe(20);
    });

    it('should display a the title for each program', function() {
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('Abadas');
      });
    });
  });
});
