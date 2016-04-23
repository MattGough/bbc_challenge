'use strict';

describe ('iplayerApp', function() {

  describe('Program list', function() {

    describe('list of programs beignning with A', function() {

      it('should display a list of BBC programs begnning with A', function() {
        browser.get('index.html');
        element(by.id('A1')).click();
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

      it('should display title as link to watch program', function() {
        element(by.id('Adventure')).click();
        browser.sleep(5000);
        expect(browser.driver.getCurrentUrl()).toEqual('http://www.bbc.co.uk/iplayer/episode/p00y1hbb/adventure-zambezi-3-livingstones-river');
      });

      it('should display image as link to watch program', function() {
        browser.get('index.html');
        element(by.id('A1')).click();
        element(by.id('http://ichef.bbci.co.uk/images/ic/192x108/p028s846.png')).click();
        browser.sleep(5000);
        expect(browser.driver.getCurrentUrl()).toEqual('http://www.bbc.co.uk/iplayer/episode/p00y1hbb/adventure-zambezi-3-livingstones-river');
      });

      it('should split A programs into four pages', function() {
        browser.get('index.html');
        element(by.id('A1')).click();
        expect(element(by.id('A1')).isPresent()).toBe(true);
        expect(element(by.id('A2')).isPresent()).toBe(true);
        expect(element(by.id('A3')).isPresent()).toBe(true);
        expect(element(by.id('A4')).isPresent()).toBe(true);
      });

      it('should display multiple pages of program begnning with A', function() {
        element(by.id('A2')).click();
        element.all(by.repeater('program in programs')).then(function(programs) {
          var programTitle = programs[0].element(by.className('title'));
          expect(programTitle.getText()).toEqual("Alistair Cooke's America");
        });
      });
    });

    it('should display a the title for each program begnning with B', function() {
      browser.get('index.html');
      element(by.id('B1')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('Baby Jake');
      });
    });

    it('should display a the title for each program begnning with T', function() {
      element(by.id('T1')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('TAG');
      });
    });

    it('should display a the title for each program begnning with 0-9', function() {
      element(by.id('0-91')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('1916: The Irish Rebellion');
      });
    });

    it('should split lists of more than 20 programs into separate pages', function() {
      element(by.id('T1')).click();
      element(by.id('T3')).click();
      browser.sleep(2000);
      element.all(by.repeater('program in programs')).then(function(programs) {
        var programTitle = programs[0].element(by.className('title'));
        expect(programTitle.getText()).toEqual('The Tracy Beaker Survival Files - Tales from the Dumping Ground');
      });
    });
  });
});
