import { When } from 'cucumber'
import homePage from '../pages/webdriverioHomePage'
import getStartedPage from '../pages/gettingStartedPage'
import apiPage from '../pages/apiPage'

When (/^I go to getting started page$/, () => {
    homePage.touchGetStartedButton ();
});

When (/^I go to API doc Page$/, () => {
    getStartedPage.touchApiButton();
});

When (/^I go to Help Page$/, () => {
    apiPage.touchHelpButton ();
});