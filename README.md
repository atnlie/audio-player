# Audio Player App
This application is called Audio Player App, because this app dedicated to load data from itunes sample endpoint and play the preview song.
You can check it out in https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api

To run this application you need install `yarn` or `npm` in your local machine and of course Android studio with simulators if you don't want to run to physical device.
Please keep in mind on that to easy you to run this application without any complain from your terminal command line.

###Run Commands:
- Please make sure you have `nvm version 12 or later` to run this app.
- Go to inside `audio_player` and type `yarn` to install dependency libraries from `package.json` 
- Type `yarn android` to run application in simulator
- Wait until you get android simulator ready to use

###How To Use
- In the homepage there are two kinds of user input, first is input to get song lint from itunes api and by default will use `love` search criteria.
- In song list, click one of them to activate play the song.
- Press `Play` button to play your selected song and press `Stop` to end listen that song.

###Execute Unit Test and Coverage
- To run test unit test cases: `yarn test`
- To run test coverage unit test cases: `yarn test:coverage`

###Minimum Specification
- Device: Android Version 5.0 (Lollipop - API Level 21) or above
- Has stable internet connection because all the song will fetch from internet

###Caveat
- Library `react-native-sound-player` has a bug can not play sound second onward without reload app
- Here you go to the issue: https://github.com/johnsonsu/react-native-sound-player/issues/120
- this is one of the simplest play audio library
- Unit testing not 100% covered but all of them are regarding useSelector scenario test - time's up

###Solution
- Change library to complex library and check issue, use the up to date one to avoid any issue unresolved to long
- this the library https://github.com/react-native-kit/react-native-track-player#readme
- there are also a lot of issue https://github.com/react-native-kit/react-native-track-player/issues

