const MainPage = require('../pageobjects/main.page');
const FormsPage = require('../pageobjects/forms.page');

describe('Test forms', () => {
    before('', async () => {
        await browser.maximizeWindow();
        await MainPage.open();
    });
    it('should open forms page', async () => {

        await MainPage.cardForms.scrollIntoView();
        await MainPage.cardForms.click();
        await expect(FormsPage.pageTitleForms).toHaveTextContaining('Forms');
    });
});


