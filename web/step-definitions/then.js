import { Then } from 'cucumber'
import gettingStartedPage from '../pages/gettingStartedPage'


Then (/^I validate that getting stated page is visible$/, () => {
    expect (gettingStartedPage.isTitleVisible ()).to.be.true;
});