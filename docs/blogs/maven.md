mvn archetype:generate -DgroupId="com.example" -DartifactId="my-first-app" -DarchetypeArtifactId="maven-archetype-quickstart" -DinteractiveMode="false"

一定要加双引号！

mvn compile

mvn package

java -cp target\my-first-app-1.0-SNAPSHOT.jar com.example.App

Hello World!
