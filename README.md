# ECOLETA
Projeto da Next Level Week da Rocketseat

## API RESTful
Estrutura que retorna apenas os dados pelo response em formato JSON, dividino uma estrutura para frontend e backend.
- Frontend com ReactJS;
- Backend com NodeJS;
- Mobile com React Native e Expo.

### Typescript
Javascript com possibilidade de adicionar tipagens.

### React
Componentização de elementos frontend e de interface.

### React Native
A interface gerada é nativa com a utilização de código javascript.

### Parâmetros de Rotas
- Request param: Parâmetrnos que vem na própria rota que identificam um recurso;
- Query param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação;
- Request body: Parâemtros para criação/atualização de informações.

## Dependências
Em backend:
- ```npm install typescript -D```
- ```npx tsc --init``` inicializar arquivo de configuração do typescript
- ```npm install ts-node -D``` para node entender typescript ```npx ts-node src/server.ts``` para executar
- ```npm install ts-node-dev -D``` parecido com o nodemon ```npx ts-node-dev src/server.ts``` para executar
- ```npm install express``` tipagem: ```npm install @types/express -D```
- ```npm install knex``` para querys de banco de dados
- ```npm install sqlite3```
- ```npx knex migrate:latest --knexfile knexfile.ts``` para rodar migration
- ```npm install cors```

Em frontend:
- Pacote para começar app react: ```npx create-react-app web --template=typescript```
- Para icones: ```npm install react-icons```
- Para roteamento: ```npm install react-router-dom```
- Para mapa: ```npm install leaflet react-leaflet```
- Para conversar com dados de outra api: ```npm install axios```