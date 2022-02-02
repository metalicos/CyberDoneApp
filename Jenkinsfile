#!groovy

properties([disableConcurrentBuilds()])
pipeline {
  agent any
  triggers {
    pollSCM('* * * * *')
  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
    skipDefaultCheckout(true)
    skipStagesAfterUnstable()
    timestamps()
  }
  stages {
    stage('Prepare') {
      steps {
        checkout scm
      }
    }
    stage('Create Docker Image') {
      steps {
        echo "========================== STARTING DOCKER IMAGE CREATION =========================="
        bat "docker build -t cyberdone-iot-ui-image:latest ."
        echo "======================== DOCKER IMAGE CREATION IS SUCCESSFUL ======================="
      }
    }
    stage('Run Docker Image') {
      steps {
        echo "=============================== STARTING DEPLOY ===================================="
        script {
          try {
            bat "docker stop cyberdone-iot-ui-image"
            bat "docker rm cyberdone-iot-ui-image"
          } catch (Exception e) {
            echo "None running containers found, continue."
          }
          bat "docker run -d -t -i -p 80:80 --name=cyberdone-iot-ui-image"
          echo "=============================== DEPLOY SUCCESSFUL =================================="
        }
      }
    }
  }
}