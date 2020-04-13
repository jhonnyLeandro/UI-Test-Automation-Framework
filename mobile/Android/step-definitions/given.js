import { Given } from 'cucumber'
import mainMenu from '../screens/mainMenu'

Given(/^I open the application on the welcome screen$/, () => {
	mainMenu.homeButton.waitForDisplayed (10000);
})
