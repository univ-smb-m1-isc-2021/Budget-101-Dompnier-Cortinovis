# Budget-101-Dompnier-Cortinovis

## But :
* Réaliser une application de planification et suivie de dépenses

## Participants:
* Cortinovis Enzo
* Dompnier Silvio 

## Fonctionnalitées :
* application multi-utilisateur (s'enregistrer / supprimer son compte)
* je peux créer une prévision de dépense étalée sur un an ( voiture 500 en novembre, 500 e en avril ;  200 e en janvier )
* je peux saisir des provisions automatiquement (virement mensuel à date d'une somme définie)
* je peux saisir des dépenses ponctuelles (5 janvier ; vidange ; 85e)
* ces 3 critères prévision de dépenses ; provisions ; dépenses ; constituent un budget
* je reçois un mail récapitulatif en fin de mois avec l'état de chacun de mes différents budgets

L'argent de tous ces budgets s'agrègent dans un compte global.

## Mindmap :

![mindmap](/mindmap/mindmap.png)

## project kick-off

 - master branch is now analysed on https://sonarcloud.io/dashboard?id=gjambet_chuck-facts


Now with a controller

application can be run locally with the following command :

cd dev-station
docker-compose up
cd ..
mvn spring-boot:run

(please do make sure you can run maven on command line)

 - actuator endpoints available on http://localhost:8080/actuator/health
 - first controller available here http://localhost:8080/api/chuck-facts


## Upgrade dependencies version : 
check latest pom parent version
mvn versions::use-latest-versions


