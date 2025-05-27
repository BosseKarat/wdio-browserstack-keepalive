describe("My Login application", () => {
  it("Checking if Browserstack is throwing keep-alive error", async () => {
    await browser.url("https://webdriver.io/");

    await expect(await browser.$('//h1[@class="hero__title"]')).toExist();

        await expect(await browser.$('//div[@class="sponsors-grid"]')).toExist();


  });

});
