class logIn {

	constructor() {

	}

	get title() {
		return $('android=new UiSelector().className("android.widget.TextView").textContains("Login / Sign up Form")')
    }
    get loginButtonHeader() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("button-login-container")')
    }
    get signUpButtonHeader() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("button-sign-up-container")')
	}
	get emailTextbox() {
		return $('android=new UiSelector().className("android.widget.EditText").description("input-email")')
	}
	get passwordTextbox() {
		return $('android=new UiSelector().className("android.widget.EditText").description("input-password")')
	}
	get loginButton() {
		return $('android=new UiSelector().className("android.view.ViewGroup").description("button-LOGIN")')
	}
}


export default new logIn ()