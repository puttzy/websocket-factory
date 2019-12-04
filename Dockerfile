FROM openjdk:8 AS TEMP_BUILD_IMAGE
ENV APP_HOME=.
WORKDIR $APP_HOME
COPY build.gradle settings.gradle gradlew $APP_HOME/
COPY gradle $APP_HOME/gradle
RUN ./gradlew build || return 0
COPY . .
RUN ./gradlew build

FROM openjdk:8
ENV ARTIFACT_NAME=demo-0.0.1-SNAPSHOT.jar
ENV APP_HOME=.
WORKDIR $APP_HOME
COPY --from=TEMP_BUILD_IMAGE $APP_HOME/build/libs/$ARTIFACT_NAME .
EXPOSE 8080
ENTRYPOINT java -jar /$ARTIFACT_NAME -Djava.security.egd=file:/dev/./urandom
