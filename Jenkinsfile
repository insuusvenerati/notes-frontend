pipeline {
  agent {
    docker {
      image 'node:lts'
    }

  }
  stages {
    stage('install and build') {
      steps {
        sh 'yarn'
        sh 'yarn build'
      }
    }

  }
}