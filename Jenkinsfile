pipeline {
  agent {
    docker {
      image 'node:lts'
    }

  }
  stages {
    stage('install') {
      steps {
        sh 'yarn'
        sh 'yarn build'
      }
    }

  }
}