# MISO UX - Maquetación Alarmas Pico Placa

## Mobile

### Getting Started

1. Install Node.js v20 or superior
2. Install dependencies: `npm install`
3. Run dev server: `npm run mobile:dev`
4. Open `http://localhost:5173`

### Running on Android

API 23+ (Android 6 or later) is supported.

To run the App on Android, run the following commands:

1. `npm run mobile:build`
2. `npm run sync:android`
3. `npm run android`

(Optional) To generate a release APK you can run `npm run build:android`. The `app-debug.apk` file will be generated in the `android/app/build/outputs/apk/debug/` directory.

## Web

### Getting Started

1. Install Node.js v20 or superior
2. Install dependencies: `npm install`
3. Run dev server: `npm run web:dev`
4. Open `http://localhost:5173`

### Building the web

1. `npm run web:build`
2. Files will be generated in the `dist/web` directory.
