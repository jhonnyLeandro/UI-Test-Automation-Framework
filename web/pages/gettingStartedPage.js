class GettingStarted {
    get titlePage() {return $('#__docusaurus')}

    get apiButton() {return $('//a[text()="API"]')}
    
    isTitleVisible () {
        return this.titlePage.waitUntil (function () {
            return this.isDisplayed ();
        });
    }

    touchApiButton(){
        this.apiButton.waitUntil(function(){
            return this.isDisplayed();
        });
        this.apiButton.click();
    }
}

export default new GettingStarted ()