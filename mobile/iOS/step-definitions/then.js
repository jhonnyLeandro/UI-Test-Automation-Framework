import { Then } from 'cucumber'
import logIn from '../screens/logIn'

Then(/^I expect to see log in screen$/, () => {
	expect(logIn.isTitleDisplayed ()).to.be.true
})
