pipeline {
  agent {
    node {
      label 'build'
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