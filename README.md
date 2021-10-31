# APLICAÇÃO DE CADASTRO E LISTAGEM DE USUÁRIOS.

### FUNÇÕES
[] - cadastrar funcionários
[] - listar funcionários

### REGRAS
[] - apenas o ADM pode listar os funcionários

## ROTAS
[] - POST -> /users -> {name, email} para cadastrar usuário
[] - PATCH -> /users/:user_id/admin -> {id} para transformar usuário do id em ADM
[] - GET -> /users/:user_id -> {id} retorna o usuário do id
[] - GET -> /users -> {user_id: id} retorna uma lista de usuários #REGRA