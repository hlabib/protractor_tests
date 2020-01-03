let homepage = require('../pages/homepage');

describe("Demo calculator tests", function() {

  it("addition test", function() {

    //browser.get('http://juliemr.github.io/protractor-demo/');
    homepage.get('http://juliemr.github.io/protractor-demo/');
    //element(by.model('first')).sendKeys('2');
homepage.enterFirstName('4');
   // element(by.model('second')).sendKeys('3');
homepage.enterSecondName('3');
  //  element(by.css('[ng-click="doAddition()"]')).click();
homepage.clickSubmit();
     browser.sleep(2000)
    //let result = element(by.cssContainingText('.ng-binding', '5'));
  //  let result =  element(by.className('ng-binding'))
  //   expect(result.getText()).toEqual('5');
homepage.verifyTest('7');
    browser.sleep(3000)

  });
});
