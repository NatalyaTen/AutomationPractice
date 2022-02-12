const Page = require('./page');

class FormsPage extends Page {

    get pageTitleForms() {
        return $('//div[@class ="main-header"]');
    }

    open() {
        return super.open('forms');
    }
}

module.exports = new FormsPage();
