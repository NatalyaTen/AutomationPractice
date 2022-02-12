

const Page = require('./page');


class MainPage extends Page {

    get cardElements() {
        return $('//h5[text() ="Elements"]');
    }

    get cardForms() {
        return $('//h5[text() ="Forms"]');
    }

    get cardAlertFrameWindows() {
        return $('//h5[text() ="Alerts, Frame & Windows"]');
    }

    get cardWidgets() {
        return $('//h5[text() ="Widgets"]');
    }

    get cardInteractions() {
        return $('//h5[text() ="Interactions"]');
    }

    get cardBookStoreApp() {
        return $('//h5[text() ="Book Store Application"]');
    }



    open() {
        return super.open('');
    }
}

module.exports = new MainPage();
