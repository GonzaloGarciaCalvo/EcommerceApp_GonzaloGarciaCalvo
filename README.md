# Descripción
Proyecto Final del curso Desarrolllo de Aplicaciones de Coderhouse. 
Se implementa un simulador de E-commerce de venta de bebidas alcoholicas y accesorios. Se hace uso de cámara y localización del dispositivo.
Hay autenticación con Firebase, signin y login.
En TAB shop se puede filtrar según categorías y según producto en stacks diferentes.
En el inicio se puede seleccionar una categoría, luego un producto, y se navega al detalle del producto, donde se puede seleccionar el producto e incrementar la cantidad. 
En TAB carrito se puede incrementar o disminuir la cantidad, o borrar una orden completa.
Al realizar la confirmación de compra, se despliega el código de compra y se vacía el carrito.
En TAB orders se muestran todas las ordenes realizadas por el usuario, que se actualiza al realizar una compra.
En TAB ubicación se puede seleccionar una locación, u obtenerla con googlemaps, tomar una foto o seleccionar una de galería y guardar la locación. Para guardar la locación se equiere al menos completar el título y la imágen.

# Herramientas
Aplicación de React Native creada con expo

## Librerías
- "@react-navigation/bottom-tabs": "^6.3.1",
- "@react-navigation/native": "^6.0.10",
- "@react-navigation/native-stack": "^6.6.2",
- "@reduxjs/toolkit": "^1.8.2",
- "expo": "^45.0.0",
- "expo-app-loading": "~2.0.0",
- "expo-file-system": "^14.0.0",
- "expo-font": "~10.1.0",
- "expo-image-picker": "^13.1.1",
- "expo-location": "^14.2.2",
- "expo-sqlite": "^10.2.0",
- "expo-status-bar": "~1.3.0",
- "formik": "^2.2.9",
- "react": "17.0.2",
- "react-dom": "17.0.2",
- "react-native": "0.68.2",
- "react-native-maps": "0.30.2",
- "react-native-safe-area-context": "4.2.4",
- "react-native-screens": "~3.11.1",
- "react-native-web": "0.17.7",
- "react-redux": "^8.0.2",
- "yup": "^0.32.11"