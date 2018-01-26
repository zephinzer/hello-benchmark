#!/bin/sh

printf "Removing all services...\n";
ls -1d */ | cut -f 1 -d '/' | xargs -I@ docker stack rm @;
printf "Throwing away throwaway registry...\n";
docker service rm registry;
printf "CLEANED up successfully! At ease, commander.\n";
