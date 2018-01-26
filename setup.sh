#!/bin/sh

printf "Initialising local single-node Docker Swarm...\n";
docker swarm init;
printf "Initialising local throwaway Docker Registry on Swarm...\n";
docker service create --name registry --publish published=5000,target=5000 registry:2;
printf "Building images from docker-compose.yml...\n";
docker-compose build;
printf "Pushing images built from docker-compose.yml and starting them...\n";
docker-compose push;
printf "Starting it all...\n";
docker stack deploy --compose-file docker-compose.yml benchmarks
printf "READY for blasting! Good day, commander.\n";

