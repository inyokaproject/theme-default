#!/usr/bin/env groovy

pipeline {
    agent {
        label 'inyoka-slave'
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }
        stage('Build virtuelenv') {
            steps {
                sh '''virtualenv venv
                . ./venv/bin/activate
                pip install -e .
                pip install -r tests/requirements.txt'''
            }
        }
        stage ('Tests') {
            steps {
                sh '''. venv/bin/activate
                nosetests --with-xcoverage --with-xunit'''
            }
        }

        stage('Publish test results') {
            steps {
                junit '**/nosetests.xml'
            }
        }
    }
}
