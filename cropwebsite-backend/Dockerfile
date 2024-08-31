# Start with a base image containing Java runtime
FROM openjdk:17-jdk-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file into the container
COPY pom.xml .

# Copy the source code into the container
COPY src src

# Build the application
RUN mvn package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Set the entry point of the container
ENTRYPOINT ["java","-jar","target/your-app.jar"]