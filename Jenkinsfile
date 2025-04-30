pipeline {
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()  // Optional but recommended
            }
        }
        stage('Clone Repo') {
            steps {
                script {
                    try {
                        checkout scm
                        sh 'git branch -v'  // Debug: Verify repo was cloned
                    } catch (err) {
                        echo "Failed to clone repo: ${err}"
                        currentBuild.result = 'FAILURE'
                        error("Git checkout failed")
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building..."
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying..."
            }
        }
    }
}
