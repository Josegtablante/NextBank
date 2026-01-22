# NextBank, la banca del futuro

## 🔎 Descripción  
API REST para gestionar operaciones bancarias básicas (usuarios, cuentas, transacciones, transferencias, tarjetas) con autenticación y validaciones de seguridad.


## 🔎 Descripción General 
Creacion de un Homebanking , aplicando lo aprendido en el bootcamp de Full Stack Developer 

Esta aplicancion fue creada usando Java principalmente junto con Spring Frameworks para el backend y Vue.js, Axios, Boostrap, HTML5, Css3 y JavaScript para el frontend 


https://minhubbank.herokuapp.com/web/index.html

## 📁 Estructura del proyecto
```
NextBank/
├─ backend/                  # Spring Boot
│   ├─ src/main/java/
│   │   └─ com/.../configurations
|   |   └─ com/.../controllers
|   |   └─ com/.../DTOs
|   |   └─ com/.../Models
│   │   └─ com/.../repositories 
│   │   └─ com/.../services/
│   │      └─ implements
│   │   └─ com/.../utils
│   ├─ src/main/resources/
│   │   └─ application.properties
│   └─ build.gradle
├─ frontend/                 # Vue.js
│   ├─ src/main/resources/static
│   │   └─ css/
│   │   └─ img/
│   │   └─ js/
│   │   └─ web/
└─ README.md
```


## 🧰 Tecnologías  
- Vue.js  
- JavaScript (ES6+)
- Gradle
- Java version 11
- Spring
- Spring Web
- Spring Boot  
- Spring Security
- JPA
- Hibernate
- Base de datos h2

## 🚀 Instalación y ejecución  
Asegúrate de tener Java 11+ y Gradle instalados.

En la raíz del proyecto:
```bash
# Clonar el repositorio  
git clone https://github.com/Josegtablante/NextBank.git
cd NextBank

# Ejecutar proyecto de forma local desde Intelli J
gradlew bootRun
http://localhost:8080/web/index.html

```

## credenciales 
```
"firstName" : Melba,
"lastName" : Mora,
"password" : asd,
"email" : melbamora@gmail.com,
```

## 🚦 API Endpoints

## 👤 Clientes

| Método | Ruta                  | Descripción                      |
| ------ | --------------------- | -------------------------------- |
| GET    | `/api/clients`        | Obtiene lista de clientes        |
| GET    | `/api/clients/{id}`   | Obtiene clientes por ID          |
| POST   | `/api/clients`        | Crear nuevo cliente              |
| GET    | `/clients/current`    | Obtiene un cliente registrado    |

## 🎫 Cuentas

| Método | Ruta                            | Descripción                                 |
| ------ | ------------------------------- | ------------------------------------------- |
| GET    | `/api/accounts`                 | Optiene todas las cuentas del cliente       |
| GET    | `/api/accounts/{id}`            | Optiene una cuenta en especifico por su ID  |
| POST   | `/api/clients/current/accounts` | Crea una cuenta de un cliente registrado    |

## 💳 Tarjeta

| Método | Ruta                            | Descripción                                  |
| ------ | ------------------------------- | -------------------------------------------- |
| POST   | `/api/clients/current/cards`    | Crea una tarjeta para un cliente registrado  |


## 💵 Prestamos

| Método | Ruta            | Descripción                                          |
| ------ | --------------- | ---------------------------------------------------- |
| GET    | `/api/loans`    | Obtiene todos los prestamos de un cliente registrado |
| POST   | `/api/loans`    | Crea una prestamo para un cliente registrado         |

## 🔄️ Transacciones

| Método | Ruta                  | Descripción                                     |
| ------ | --------------------- | ----------------------------------------------- |
| POST   | `/api/transactions`   | Crea una transaccion entre clientes registrados |

## 🧩 Dependencias comunes (Spring Boot)

Estas dependencias suelen estar definidas en build.gradle para un proyecto como este.
```
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'com.h2database:h2'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```
## 📦 Dependencias Frontend (Vue)

En package.json podría incluirse:
```
{
  "dependencies": {
    "vue": "^3.x",
    "vue-router": "^4.x",
    "axios": "^1.x"
  },
  "devDependencies": {
    "@vue/cli-service": "~5.x"
  }
}
```
