class GettingStarted {
    get titlePage() {return $('#__docusaurus')}
    
    isTitleVisible () {
        this.titlePage.waitUntil (function () {
            return this.isDisplayed ();
        });
        return this.titlePage.isDisplayed ();
    }
}

export default new GettingStarted ()