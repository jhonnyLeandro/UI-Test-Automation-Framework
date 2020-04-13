class mainMenu{
	constructor() {
	}

	get homeButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" && name = "Home"')
	}
	get webViewButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" and name = "WebView"')
	}
	get loginButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" and name = "Login"')
	}
	get formsButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" and name = "Forms"')
    }
    get swipeButton() {
		return $('-ios predicate string:type = "XCUIElementTypeOther" and name = "Swipe"')
	}

	isHomeButtonVisible () {
		let isVisible = this.homeButton.waitUntil (function () {
			return this.isDisplayed ();
		});
		return isVisible;
	}

	clickLoginButton () {
		this.loginButton.click ();
	}
}

export default new mainMenu()