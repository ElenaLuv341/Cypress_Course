pipeline{
    agent any

    tools{nodejs "node"}

    stages{
        stage('Cypress Parallel Test Suit') {
            parallel {
                stage('Slave Node1') {
                    agent{
                        label "remote_node1"
                    }
                    steps{
                        git url: 'https://github.com/ElenaLuv341/Cypress_Course.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}