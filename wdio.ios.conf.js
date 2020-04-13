const { config } = require('./wdio.android.conf')
const { join } = require('path');

config.cucumberOpts.require = ['./mobile/iOS/step-definitions/*.js']
config.specs = [ './mobile/iOS/features/*.feature']

config.capabilities = [
	{
		deviceName: 'iPhone 7',
		platformVersion: '12.1',
		platformName: 'iOS',
		automationName: 'XCUITest',
		fullReset: true,
		app: join (process.cwd (), './apps/iOS/iOS-Simulator-NativeDemoApp-0.2.1.app.zip')
	}
]

exports.config = config