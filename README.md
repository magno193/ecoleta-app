# ECOLETA
Projeto da Next Level Week da Rocketseat

## API RESTful
Estrutura que retorna apenas os dados pelo response em formato JSON, dividindo uma estrutura para frontend e backend.
- Frontend com ReactJS;
- Backend com NodeJS;
- Mobile com React Native e Expo.

### Typescript
Javascript com possibilidade de adicionar tipagens.

### ReactJS
Componentização de elementos frontend e de interface.

### React Native
A interface gerada é nativa com a utilização de código javascript.

#### Diferenças com ReactJS
- Não existe as tags como p span e etc, é todo atribuido com Text, por exemplo;
- Não existe o css tradicional, é utilizado o StyleSheet próprio do React Native, que é um objeto javascript. As propriedades css são escritas em camelCase, entretando, as propriedades css são parecidas;
- Todos os elementos já possuem display flex por natureza;
- Não existe cascata e herança de estilos.

### Parâmetros de Rotas
- Request param: Parâmetrnos que vem na própria rota que identificam um recurso;
- Query param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação;
- Request body: Parâemtros para criação/atualização de informações.

## Dependências
*Em backend*:
- ```npm install typescript -D```
- ```npx tsc --init``` inicializar arquivo de configuração do typescript
- ```npm install ts-node -D``` para node entender typescript ```npx ts-node src/server.ts``` para executar
- ```npm install ts-node-dev -D``` parecido com o nodemon ```npx ts-node-dev src/server.ts``` para executar
- ```npm install express``` tipagem: ```npm install @types/express -D```
- ```npm install knex``` para querys de banco de dados
- ```npm install sqlite3```
- ```npx knex migrate:latest --knexfile knexfile.ts``` para rodar migration
- ```npm install cors```
- Upload de imagens: ```npm install multer```
- Futuro: Serialização e API Transform
- Validação: Yup, Joi ou Celebrate: ```npm install celebrate``` types: ```npm install @types/hapi__joi -D```

*Em frontend*:
- Pacote para começar app react: ```npx create-react-app web --template=typescript```
- Para icones: ```npm install react-icons```
- Para roteamento: ```npm install react-router-dom```
- Para mapa: ```npm install leaflet react-leaflet```
- Para conversar com dados de outra api: ```npm install axios```
- "Drop" de imagens:  ```npm install react-dropzone```

*Em mobile*:
- Pacote expo: ```npm install -g expo-cli```
- Iniciar pacote expo no projeto: ```expo init mobile``` selecione blank typescript
- Pacote de fontes para mobile: ```expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto```
- Pacote para navegação: ```npm install @react-navigation/native```
- ```expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view```
- ```npm install @react-navigation/stack```
- Mapa: ```expo install react-native-maps```
-```expo install constants ```
- Suporte para imagem svg: ```expo install react-native-svg```
- Para conversar com dados de outra api: ```npm install axios```
- Geolocalização: ```expo install expo-location```
- Email: ```expo install expo-mail-composer```
- (Desafio) Tag Select: ```npm install react-native-picker-select```