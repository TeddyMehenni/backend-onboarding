# backend-onboarding
Exercises to train and prepare new backend wizard

## Instructions

- You can use Javascript or Typescript
- StandardJs or airbnb style would be great.
- We love async/await syntaxe but you can use your favorite. Take care to callback hell :fire:
- You can use all npm packages

## EX00

> Arthur: Je voudrais un serveur HTTP avec des API REST, du CRUD sur chaque collection, evidemment en suivant les best practices KISS et SOLID sur ta POO.
> 
> Perceval: C'est pas faux...

For this exercise you have to: 
- Create a firebase project
- Use realtime database with the admin SDK to create Credential collection 
- Credential collection must store firebase serviceAccount (You can choose the structure of the collection.)
- Create an https server, using express (fastify, nestjs, koa..) or even native node !
- Create CRUD endpoints to manage Credential collection following REST and security best practices.

#### Bonus
- Add unit tests (Jest, Mocha...)
- Validate incoming request (JSON schema, body-parser...)
- Add strongs authorization / authentification middlewares
- What you want !
