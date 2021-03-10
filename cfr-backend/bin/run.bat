@echo off
echo.
echo [Devteam] Run cfr-backend
echo.

cd %~dp0
cd cfr-backend/target

set JAVA_OPTS=-Xms256m -Xmx1024m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=512m

java -jar %JAVA_OPTS% cfr-backend-1.0.jar

cd bin
pause