class logIn {

	constructor() {

	}

	get title() {
		return $('-ios predicate string:type = "XCUIElementTypeStaticText" && name = "Login / Sign up Form"')
    }
    get loginButtonHeader() {
		return $('-ios predicate string:type = "XCUIElementTypeStaticText" && name = "Login"')
    }
    get signUpButtonHeader() {
		return $('-ios predicate string:type = "XCUIElementTypeStaticText" && name = "Sign up"')
	}
	get emailTextbox() {
		return $('-ios predicate string:type = "XCUIElementTypeTextField" && name = "input-email"')
	}
	get passwordTextbox() {
		return $('-ios predicate string:type = "XCUIElementTypeTextField" && name = "input-password"')
	}
	get loginButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" && name = "LOGIN"')
    }
    
    isTitleDisplayed () {
        let isVisible = this.title.waitUntil (function () {
            return this.isDisplayed ();
        });
        return isVisible;
    }
}


export default new logIn ()