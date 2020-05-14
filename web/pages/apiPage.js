class ApiPage {

    get titlePage(){ return $('.postHeaderTitle')}
    get helpButton(){ return $('(//a[text()="Help"])[1]')}

    isTitleVisible() {
        return this.titlePage.waitUntil(function(){
            return this.isDisplayed();
        });
    }

    touchHelpButton(){
        this.helpButton.waitUntil(function(){
            return this.isDisplayed();
        });
        this.helpButton.click();
    }
}

export default new ApiPage ();