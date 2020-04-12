import { Given } from 'cucumber'
import homePage from '../pages/webdriverioHomePage'

Given(/^I am in webdriverio home page$/, () => {
    homePage.open ();
    expect(homePage.isTitleVisible ()).to.be.true;
});