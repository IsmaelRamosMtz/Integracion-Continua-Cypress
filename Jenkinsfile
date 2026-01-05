pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente_1"
                    }
                    steps {
                        git url: 'https://github.com/IsmaelRamosMtz/Integracion-Continua-Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key b71f4410-15c1-4a28-81cf-23ee458a4e2c  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente_2"
                    }
                    steps {
                        git url: 'https://github.com/IsmaelRamosMtz/Integracion-Continua-Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key b71f4410-15c1-4a28-81cf-23ee458a4e2c  --parallel'
                    
                    }
                }

              /*   stage('Slave 3') {
                    agent {
                        label "Agente_3"
                    }
                    steps {
                        git url: 'https://github.com/IsmaelRamosMtz/Integracion-Continua-Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key b71f4410-15c1-4a28-81cf-23ee458a4e2c  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agente_4"
                    }
                    steps {
                        git url: 'https://github.com/IsmaelRamosMtz/Integracion-Continua-Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key b71f4410-15c1-4a28-81cf-23ee458a4e2c  --parallel'
                    
                    }
                } */
                  
            }

             
        }

    }
            
}