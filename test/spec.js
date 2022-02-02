describe('Simple test', () => {

  it("Homepage title should be 'Мебельный сервис | Мебельная фурнитура | Сообщество специалистов и партнёров'",  async () => {
    await browser.get('https://www.handler.by');
    const title = await browser.getTitle();
    expect(title).toEqual('Мебельный сервис | Мебельная фурнитура | Сообщество специалистов и партнёров')
  });

  it("'Политика' page should have 'Соглашение на обработку персональных данных' title", async () => {
    await browser.get('https://www.handler.by');
    await element(by.xpath("//*[contains(text(),'Политика')]")).click();
    const agreement = element(by.css('#pagetitle'));
    expect(agreement.getText()).toEqual('Соглашение на обработку персональных данных');
  });

})