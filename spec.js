const { element } = require("protractor");

describe('Protractor Home Task', function() {
  it('should open home page', function() {
    browser.get('https://www.westerndigital.com/');
      
    const europe = element(by.className('selectedOption pt-px block'));
    expect(europe.getText()).toEqual('Europe');
    europe.click();
    element(by.linkText('Other country or region')).click();
    element(by.linkText('Continue')).click();
    element(by.className('truste-button2')).click();
    element(by.xpath("//span[text()='United States']/..")).click();
    element(by.className('button searchbutton')).click();
    element(by.className('search expandright searchBTN')).sendKeys("MP player", protractor.Key.ENTER);
    element(by.xpath("//input[@value='Products']/..")).click();
    element.all(by.css('#searchResultContainerDiv li')).each(function(index) {
      console.log(index);
    });
  });
})
