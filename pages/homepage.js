
let homepage =function(){
let fNumber = element(by.model('first'));
let sNumber = element(by.model('second'));
let buttonSubmit = element(by.css('[ng-click="doAddition()"]'));


   this.enterFirstName = function(fNum){
     fNumber.sendKeys(fNum);
   };
      this.enterSecondName = function(sNum){
     sNumber.sendKeys(sNum);
   };
   this.clickSubmit = function(){
       buttonSubmit.click();
   };
   this.verifyTest = function(result){
      //let output = element(by.className('ng-binding'))
       let output = element(by.cssContainingText('.ng-binding',result));
    expect(output.getText()).toEqual(result);
   };
   this.get=function(url){
browser.get(url);
   };

};
module.exports = new homepage();