import {app} from './index'

app.listen(3333, ()=> console.log('Runing on port 3333'));

/**
 * para facilitar, crie nessa ordem
 * 1 - Models -> Modelo de dados da aplicação
 * 2 - IUserRepository -> Responsavel pelas interfaces de operações com o banco de dados
 * 3 - Implementation do repository -> Responsavel pelas classes de operações com o banco de dados
 * 4 - UseCases -> responsavel por fazer a comunicação entre o controller e o repository
 * 5 - Controlles -> vai controlar as requisições e respostas, vai passar as requisições para os useCase e as respostas devolver para as rotas
 * 6 - Cria o index para fazer a ligação entre o repositório, useCase e Controller
 * 
 * documentação com o swagger
 * 1 - Instale o swagger-ui-express
 * 2 - Crie um arquivo swagger.json
 * 2 - Crie uma rota ("/api-docs", swaggerUi.server, swaggerUi.setup(swaggerFile));
 */