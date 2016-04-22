'use strict';

describe ('iplayerApp', function() {

  describe('Program list', function() {

    describe('list of programs beignning with A', function() {

      it('should display a list of BBC programs begnning with A', function() {
        browser.get('index.html');
        element(by.id('A')).click();
        var programList = element.all(by.repeater('program in programs'));
        expect(programList.count()).toBe(20);
      });

      it('should display a the title for each program begnning with A', function() {
        element.all(by.repeater('program in programs')).then(function(programs) {
          var programTitle = programs[0].element(by.className('title'));
          expect(programTitle.getText()).toEqual('Abadas');
        });
      });

      it('should display an image with each program listed', function() {
        expect(element(by.id('http://ichef.bbci.co.uk/images/ic/192x108/p017mqg6.jpg')).isPresent()).toBe(true);
        expect(element(by.id('http://ichef.bbci.co.uk/images/ic/192x108/p02h7n5x.jpg')).isPresent()).toBe(true);
        expect(element(by.id('http://ichef.bbci.co.uk/images/ic/192x108/p028s846.png')).isPresent()).toBe(true);
      });

      it('should display a the synopsis for each program begnning with A', function() {
        element.all(by.repeater('program in programs')).then(function(programs) {
          var programSynopsis = programs[0].element(by.className('synopsis'));
          expect(programSynopsis.getText()).toEqual('Pop-up book adventures with the curious Abadas');
        });
      });
    });

    it('should display a the title for each program begnning with B', function() {
      browser.get('index.html');
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

    it('should display a the title for each program begnning with 0-9', function() {
      element(by.id('0-9')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('1916: The Irish Rebellion');
      });
    });
  });
});
