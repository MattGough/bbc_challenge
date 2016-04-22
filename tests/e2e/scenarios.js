'use strict';

describe ('iplayerApp', function() {

  describe('Program list', function() {
    it('should display a list of BBC programs begnning with A', function() {
      browser.get('index.html');

      element(by.id('A')).click();
      var programList = element.all(by.repeater('program in programs'));
      expect(programList.count()).toBe(20);
    });

    it('should display a the title for each program begnning with A', function() {
      element(by.id('A')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('Abadas');
      });
    });

    it('should display a the title for each program begnning with B', function() {
      element(by.id('B')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('Baby Jake');
      });
    });

    it('should display a the title for each program begnning with T', function() {
      element(by.id('T')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('TAG');
      });
    });
  });
});
