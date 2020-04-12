import { When } from 'cucumber'
import homePage from '../pages/webdriverioHomePage'

When (/^I go to getting started page$/, () => {
    homePage.touchGetStartedButton ();
});