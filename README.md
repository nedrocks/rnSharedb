Example application for React Native + Sharedb
======================

This example takes the leaderboard example found within the  (https://github.com/share/sharedb/tree/master/examples/leaderboard)[sharedb examples folder] and builds a react native application that runs in both iOS and Android.

Note that this is absolutely bare bones and requires updating `app/globals.js` to contain the correct IP for your host machine (as these run in a simulator and thus localhost doesn't work.)

# Setup

Setting up for running on iOS is rather minimal, assuming you are on a mac. I do not know if this works for iOS on windows or linux, but I presume it is tougher.

Regardless of which platform, remember to run `npm install`.

## Prereq:

Ensure the server is running within the sharedb example. Within `sharedb/examples/leaderboard` run `node server/index.js` and ensure it is working by navigating to `localhost:8080`.

## iOS (presuming running on mac)

(https://facebook.github.io/react-native/docs/getting-started.html)[Follow the react native setup guide] to install the required components. Then, from the command line, run:

`react-native run-ios`

## Android

Setting up android is quite a bit more laborious due to hardcoded versions of the android SDKs required to get going. (https://facebook.github.io/react-native/docs/getting-started.html)[Follow the react native setup guide for android]. Then export `ANDROID_HOME` to point to the android SDK folder (you may need to launch android studio to find this. (http://stackoverflow.com/a/34532235/1327710)[See here for more information on this].) The current version of react native requires android 23 and android tools 23, so make sure those are installed using the SDK manager. Then install `android-platform-tools` (I do this with home brew). Lastly, ensure an emulator is installed and running. Once all of this is done (will take approximately 30 minutes from scratch if you have a fast connection,) run

`react-native run-android`

# See it working

So now that you have your systems working, you can see the updates happening in real time within browser or either app!
