import { When } from 'cucumber'
import mainMenu from '../screens/mainMenu'

When(/^I go to login screen$/, () => {
	mainMenu.clickLoginButton ();
})
