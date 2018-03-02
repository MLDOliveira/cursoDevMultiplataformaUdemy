ENGLISH VERSION

---------------------------------------------------------------------------------

VERSÃO EM PORTUGUÊS

# Curso de Desenvolvimento Multiplataforma com React Native + Redux
Udemy - https://www.udemy.com/desenvolvedor-multiplataforma-androidios-com-react-e-redux

Passos de instalação
- Instalação do JDK 8
- Instalação do Python 2.7
- Instalação do NodeJS + NPM
- Instalação do Android Studio
- Instalação do React Native CLI (npm install -g react-native-cli)
- Atualizar SDK do Android
- Configuração das variáveis de ambiente
- Criação do projeto react-native init --version="0.44.0" <nome_do_app>
- Instalando ESLINT | npm install --save-dev eslint-config-rallycoding
- Instalando babel | npm install --save-dev babel-present-es2015
- Instalando babel react | npm install --save-dev babel-preset-react
- Instalando Axios | npm install --save axios
- Durante o curso deve-se utilizar a versão do react-native 0.44, - react-native init --version="0.44.0" <nome_do_app> 
- Instalando Router Flux - npm install --save react-native-router-flux@3.38.0

---------------------------------------------------------------------------------

Rodar APP no iOS:
- cd "diretorio do projeto"
- react-native run-ios
OU
- Open ios\teste.xcodeproj in Xcode
- Hit the Run button

Rodar APP no Android:
- cd "diretorio do projeto"
- Have an Android emulator running (quickest way to get started), or a device connected
- react-native run-android

YARN
  yarn start
    Starts the development server so you can open your app in the Expo
    app on your phone.

  yarn run ios
    (Mac only, requires Xcode)
    Starts the development server and loads your app in an iOS simulator.

  yarn run android
    (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

  yarn test
    Starts the test runner.

  yarn run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can't go back!

We suggest that you begin by typing:

  cd AwesomeProject
  yarn start

   
---------------------------------------------------------------------------------
Comandos ADB
- adb devices - lista os aparelhos que estão sendo reconhecidos
- gradlew assembledebug - gera o APK 
- react-native start
- adb reverse tcp:8081 tcp:8081
- adb install app-debuk.apk 
- adb shell input keyevent 46 46 (46 é igual a tecla R)
- adb shell input keyevent 82 (82 é igual a tecla de menu)

---------------------------------------------------------------------------------