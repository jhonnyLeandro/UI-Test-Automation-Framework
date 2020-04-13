class mainMenu{
	constructor() {
	}

	get homeButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("Home")')
	}
	get webViewButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("WebView")')
	}
	get loginButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("Login")')
	}
	get formsButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("Forms")')
    }
    get swipeButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("Swipe")')
	}
}

export default new mainMenu()