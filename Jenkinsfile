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
        script {
          echo "========================== STARTING DOCKER IMAGE CREATION =========================="
          bat "npm install -g npm@8.4.0"
          echo "==== Installed node.js ==="

          bat "npm install -g @angular/cli@11.2.15"
          echo "==== Installed Angular CLI ==="

//           try {
//             bat "npm uninstall @angular-devkit/build-angular"
//             echo "==== UnInstalled Angular Devkit build-angular ==="
//           } catch (Exception ex) {
//             echo "==== Angular Devkit build-angular was not installed ==="
//           }
//
//           bat "npm install --save-dev @angular-devkit/build-angular"
//           echo "==== Installed Angular Devkit build-angular ==="

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
            bat "docker stop cyberdone-iot-ui-image"
            bat "docker rm cyberdone-iot-ui-image"
          } catch (Exception e) {
            echo "None running containers found, continue."
          }
          bat "docker run --name=cyberdone-iot-ui-image -d -p 80:80 cyberdone-iot-ui-image"
          echo "=============================== DEPLOY SUCCESSFUL =================================="
        }
      }
    }
  }
}
