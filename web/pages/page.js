export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(url) {
        browser.url(url)
    }
}