This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Clone the Project

First, clone the repository to your local machine:

```sh
git clone https://github.com/AlizadehAFPN/Ayadi.git
```

## Step 2: Navigate to the Project Folder

Change into the project directory:

```sh
cd Ayadi
```

## Step 3: Install Dependencies

Use **Yarn** to install all the necessary dependencies:

```sh
yarn install
```

> **Note**: If you encounter any issues while installing packages, try removing the `yarn.lock` file and run `yarn install` again:

```sh
rm yarn.lock
yarn install
```

## Step 4: Install iOS Dependencies (Mac Only)

For iOS, install CocoaPods dependencies:

```sh
cd ios && pod install && cd ..
```

> **Note**: If you face any issues installing the pods, try removing the `Podfile.lock` and reinstalling:

```sh
rm ios/Podfile.lock
cd ios && pod install && cd ..
```

## Step 5: Start Metro

Metro is the JavaScript bundler for React Native. Start it with:

```sh
yarn start
```

## Step 6: Build and Run Your App

With Metro running, open a new terminal window from the project root and use one of the following commands:

### Android

```sh
yarn android
```

### iOS

```sh
yarn ios
```

If everything is set up correctly, your app should launch in the Android Emulator, iOS Simulator, or a connected device.

## Step 7: Modify Your App

Now that your app is running, open `App.tsx` in your text editor and make some changes. When you save, the app will automatically update using [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

To manually reload:

- **Android**: Press <kbd>R</kbd> twice or open the **Dev Menu** with <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in the iOS Simulator.

## Congratulations! 🎉

You've successfully set up and run your React Native app! 🚀

### Now What?

- If you want to integrate this React Native code into an existing app, check out the [Integration Guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're new to React Native, explore the [official documentation](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you face any issues while setting up the project, refer to the [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

# Learn More

To dive deeper into React Native, check out these resources:

- [React Native Website](https://reactnative.dev) - Official documentation and guides.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - A complete setup guide.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - A beginner-friendly walkthrough.
- [React Native Blog](https://reactnative.dev/blog) - Latest news and updates.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - The official GitHub repository for React Native.

