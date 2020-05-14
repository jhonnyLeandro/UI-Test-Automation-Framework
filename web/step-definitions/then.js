import { Then } from 'cucumber'
import gettingStartedPage from '../pages/gettingStartedPage'
import apiPage from '../pages/apiPage'
import helpPage from '../pages/helpPage'

Then (/^I validate that getting started page is visible$/, () => {
    expect (gettingStartedPage.isTitleVisible ()).to.be.true;
});

Then (/^I validate that api page is visible$/,()=> {
    expect (apiPage.isTitleVisible()).to.be.true;
});

Then (/^I validate that help page is visible$/, () => {
    expect(helpPage.isTitlePageVisible()).to.be.true;
});