import { Given } from 'cucumber'
import mainMenu from '../screens/mainMenu'

Given(/^I open the application on the welcome screen$/, () => {
    expect (mainMenu.isHomeButtonVisible ()).to.be.true;
})
