class HelpPage {

    get titlePage(){ return $('.postHeader')}

    isTitlePageVisible(){
        return this.titlePage.waitUntil(function(){
            return this.isDisplayed();
        });
    }
}

export default new HelpPage()