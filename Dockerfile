## STAGE 1: BUILD ANGULAR APPLICATION ##
FROM node:8 as builder

COPY DevelopersClub /DevelopersClub

WORKDIR /DevelopersClub

RUN  npm install
RUN  $(npm bin)/ng build

## stage 2 Run nginx to serve application ##
FROM nginx

COPY --from=builder /DevelopersClub/dist/* /usr/share/nginx/html

EXPOSE 80


##BUILD COMMAND
## docker build -t developers-club .


##TAG CURRENT BUILD FOR DOCKERHUB
##docker tag developers-club dbudnick/developers-club:version1

##PUSH TO DOCKERHUB
##docker push dbudnick/developers-club

##RUN COMMAND
##docker run -i -t -p 4200:80 developers-club:latest

