pipeline {
  agent any
 
  tools {nodejs "19.1.10"}
 
  stages {
    stage('Example') {
      steps {
        sh 'npm version'
      }
    }
  }
}