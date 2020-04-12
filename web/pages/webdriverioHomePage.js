import Page from './page'

class WebdriverioHomePage extends Page {
    
    get titlePage(){ return $('.projectTitle')}

    get getStartedButton(){ return $('//a[text() = "Get Started"]')}

    open (){
        super.open ('https://webdriver.io/')
    }

    isTitleVisible () {
        this.titlePage.waitUntil (function () {
            return this.isDisplayed ();
        });
        return this.titlePage.isDisplayed ();
    }

    touchGetStartedButton(){
        this.getStartedButton.waitUntil(function (){
            return this.isDisplayed ();
        });
        this.getStartedButton.click ();
    }
}

export default new WebdriverioHomePage ()