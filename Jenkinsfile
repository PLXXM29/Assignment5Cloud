pipeline {
    agent any

    tools {
        nodejs 'node16' // ชื่อที่คุณตั้งไว้ตอนติดตั้ง NodeJS ใน Global Tool Config
    }

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo...."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing node modules..."
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building project..."
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying to Firebase..."
                sh 'npm run deploy'
            }
        }
    }
}
