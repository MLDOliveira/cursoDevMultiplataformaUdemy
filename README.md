# curso_dev_multiplataforma
Curso de desenvolvimento multiplataforma com React Native + Redux


--Versão do React Native
Atualmente o React Native está na versão 0.49 porém nesse curso iremos utilizar a versão 0.44.
Recomendo fortemente que você utilize a versão 0.44 ao longo desse treinamento para otimizar sua experiência no curso.
Ao término do curso você estará apto a atualizar seus projetos para versão 0.49 já que terá um conhecimento mais amplo e consistente do framework.

Como utilizar a versão 0.44 do framework (dica para próxima aula):
Ao iniciar os seus projetos utilize a flag --version  informando o parâmetro"0.44.0"  para setar a versão do framework a ser utilizado. O Comando completo pode ser visto abaixo:
react-native init --version="0.44.0" <nome_do_app> 
Qualquer dúvida favor relatar no fórum.

----

To run your app on iOS:
   cd D:\GitHub\curso_dev_multiplataforma\APP01\teste
   react-native run-ios
   - or -
   Open ios\teste.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd D:\GitHub\curso_dev_multiplataforma\APP01\teste
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
   
------- Comandos ADB
- adb devices - lista os aparelhos que estão sendo reconhecidos
- gradlew assembledebug - gera o APK 
- react-native start
- adb reverse tcp:8081 tcp:8081
- adb install app-debuk.apk 
- adb shell input keyevent 46 46 (46 é igual a tecla R)
- adb shell input keyevent 82 (82 é igual a tecla de menu)