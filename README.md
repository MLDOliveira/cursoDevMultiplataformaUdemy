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

---------------------------------------------------------------------------------

Durante o curso deve-se utilizar a versão do react-native 0.44, então para criar alguma aplicação deve usar o comando abaixo
react-native init --version="0.44.0" <nome_do_app> 

---------------------------------------------------------------------------------

Rodar APP no iOS:
- cd <diretorio do projeto>
- react-native run-ios
OU
- Open ios\teste.xcodeproj in Xcode
- Hit the Run button

Rodar APP no Android:
- cd <diretorio do projeto>
- Have an Android emulator running (quickest way to get started), or a device connected
- react-native run-android
   
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