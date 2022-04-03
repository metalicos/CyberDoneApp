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
    stage('Install Software') {
      steps {
        script {
          echo "========================== INSTALL NEEDED SOFTWARE =========================="
          bat "npm install -g npm@latest"
          echo "==== Installed node.js ==="

          bat "npm install -g @angular/cli@latest"
          echo "==== Installed Angular CLI ==="
          echo "======================== SOFTWARE INSTALL IS SUCCESSFUL ======================="
        }
      }
    }
    stage('Create Docker Image') {
      steps {
        script {
          echo "========================== STARTING DOCKER IMAGE CREATION =========================="
          bat "docker build -t cyberdone-iot-ui-image:latest ."
          echo "======================== DOCKER IMAGE CREATION IS SUCCESSFUL ======================="
        }
      }
    }
    stage('Run Docker Image') {
      steps {
        echo "=============================== STARTING DEPLOY ===================================="
        script {
          try {
            bat "docker stop cyberdone-iot-ui"
            bat "docker rm cyberdone-iot-ui"
          } catch (Exception e) {
            echo "None running containers found, continue."
          }
          bat "docker run --name=cyberdone-iot-ui -d -p 80:80 cyberdone-iot-ui-image"
          echo "=============================== DEPLOY SUCCESSFUL =================================="
        }
      }
    }
  }
}
