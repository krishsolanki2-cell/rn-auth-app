User Authentication App
This assignment demonstrates a complete authentication flow using React Context API for state management and React Navigation for secure routing.

🚀 Implemented Features
Authentication Context: Global AuthContext to manage login, signup, logout, and user state.

Secure Navigation: Conditional stacks to prevent unauthenticated users from accessing the Home screen.

Validation Logic: - Email format verification using Regex.

Password strength check (minimum 6 characters).

Required field validation for Signup.

UI/UX Enhancements: - Password visibility toggle (Eye icon).

Dynamic error messages for incorrect credentials.

Getting Started
Note: Make sure you have completed the Set Up Your Environment guide before proceeding.

Step 1: Start Metro
First, you will need to run Metro, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

npm start

Step 2: Build and run your app
With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

Android
npx react-native run-android

iOS
For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

bundle install
bundle exec pod install

npm run ios

Demo link: https://drive.google.com/file/d/1XB6aqrB_V6pnRob64vblPU_r3yhPaabH/view?usp=drive_link
