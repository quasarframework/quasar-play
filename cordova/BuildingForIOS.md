## Building for iOS

1. Get XCode set up.
2. Install the distribution provisioning profile on your build Mac OS.
3. Make sure the version number in `config.xml` is correct for the next release.
4. `cordova platform add ios`
5. `cordova build ios --device --release --buildConfig iosbuild.json`
6. Use *Application Loader* to upload the `platforms/ios/build/device/Quasar Play.ipa` file to iTunesConnect.
7. Publish in iTunesConnect.