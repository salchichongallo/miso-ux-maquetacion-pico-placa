# MISO UX - Maquetación Alarmas Pico Placa

### Prerrequisitos

Para desarrollar y compilar este projecto, necesitas tener configurado las siguientes heerramientas:

1. [Node.js >= 20](https://nodejs.org/)
2. [Android Studio](https://developer.android.com/studio)
3. Android SDK
4. Al menos un emulador de Android o un dispositivo físico

### Estructura de carpetas

```bash
.
├── android
│   └── app
│       └── build
│           └── outputs
│               └── apk
│                   └── debug  # Carpeta donde estará el APK después de compilar la app móvil
├── dist
│   ├── web     # Compilados estáticos de la aplicación web
│   └── mobile  # Compilados estáticos de la aplicación móvil
└── src
    ├── assets      # Recursos estáticos (fuentes, imágenes, ilustraciones, etc.)
    ├── components  # Componentes del sistema de diseño
    ├── mobile      # Código fuente de la aplicación móvil
    └── web         # Código fuente de la aplicación web
```

## Aplicación móvil

### Comenzar

1. Instalar dependencias: `npm install`
2. Correr el servidor de desarrollo: `npm run mobile`
3. Abrir la dirección `http://localhost:5173` en un navegador

### Ejecutar en Android

API 23+ (Android 6 o superior) es soportada.

Para ejecutar la app de Android, ejecuta los siguientes comandos:

1. `npm run build:mobile`
2. `npm run sync`
3. `npm run android`

(Opcional) Puedes generar el APK ejecutando `npm run android:build`. El archivo `app-debug.apk` se generará en el directorio `android/app/build/outputs/apk/debug/`.

### Ejecutar en iOS

1. `npm run build:mobile`
2. `npm run sync:ios`
3. `npm run ios`

## Web

### Comenzar

1. Instalar dependencias: `npm install`. Si ya hizo este paso para móvil, puede omitirlo
2. Correr el servidor de desarrollo: `npm run web`
3. Abrir la dirección `http://localhost:5173` en un navegador

### Compilar la aplicación web

1. Ejecutar: `npm run build:web`
2. Los archivos serán generados en el directorio `dist/web`
