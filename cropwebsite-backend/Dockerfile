# 使用带有 Maven 的基础镜像
FROM maven:3.9-amazoncorretto-17-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file and any other necessary files
COPY pom.xml ./

# Download dependencies
RUN mvn dependency:go-offline

# Copy the rest of your application source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Set the entry point of the container
ENTRYPOINT ["java","-jar","target/cropwebsite-backend-0.0.1-SNAPSHOT.jar"]