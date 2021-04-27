# Audio Player App
This application is called Audio Player App, because this app dedicated to load data from itunes sample endpoint and play the preview song.
You can check it out in https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api

To run this application you need install `yarn` or `npm` in your local machine and of course Android studio with simulators if you don't want to run to physical device.
Please keep in mind on that to easy you to run this application without any complain from your terminal command line.

###Run Commands:
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
