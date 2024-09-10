pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Commandes de compilation, par exemple:
                // sh 'mvn clean install' pour un projet Maven
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Commandes de test, par exemple:
                // sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Commandes de déploiement, par exemple :
                // sh './deploy.sh'
            }
        }
    }
}
