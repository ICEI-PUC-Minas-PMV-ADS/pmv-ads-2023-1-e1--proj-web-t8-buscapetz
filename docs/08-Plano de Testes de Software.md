# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

## Cenários

### RF-001: O sistema deve restringir o acesso a usuários cadastrados para controle e segurança.

**Cenário de Teste:**

**Descrição:** Teste de acesso ao sistema por um usuário não cadastrado.

**Passos:**
* Tentar acessar o sistema com um usuário não cadastrado.

**Resultado Esperado:** O sistema deve exibir uma mensagem de erro informando que o acesso é restrito a usuários cadastrados.

### RF-002: O sistema deve permitir que novos usuários se cadastrem na plataforma.

**Cenário de Teste:**

**Descrição:** Teste de cadastro de um novo usuário.

**Passos:**
* Acessar a página de cadastro no sistema.
* Preencher corretamente todos os campos obrigatórios do formulário de cadastro.
* Clicar no botão de "Cadastrar".

**Resultado Esperado:** O sistema deve criar um novo usuário com sucesso e redirecionar para a página de login.

### RF-003: O sistema deve permitir ao usuário cadastrar um animal de estimação vinculado ao próprio usuário - Registro de pet.

**Cenário de Teste:**

**Descrição:** Teste de cadastro de um novo animal de estimação.

**Pré-condições:** O usuário está autenticado no sistema.

**Passos:**
* Acessar a página de cadastro de animal de estimação no sistema.
* Preencher corretamente todos os campos obrigatórios do formulário de cadastro do animal.
* Clicar no botão de "Cadastrar".

**Resultado Esperado:** O sistema deve criar um novo registro de animal de estimação vinculado ao usuário logado com sucesso.

## RF-004: O sistema deve permitir o usuário criar um anúncio de desaparecimento de animal de estimação - Reporte de desaparecimento.

**Cenário de Teste:**

**Descrição:** Teste de criação de um novo anúncio de desaparecimento.

**Pré-condições:** O usuário está autenticado no sistema e possui um animal de estimação cadastrado.

**Passos:**
* Acessar a página de criação de anúncio de desaparecimento no sistema.
* Selecionar o animal de estimação desaparecido.
* Preencher corretamente todos os campos obrigatórios do formulário de criação do anúncio.
* Clicar no botão de "Criar Anúncio".

**Resultado Esperado:** O sistema deve criar um novo anúncio de desaparecimento com sucesso, associado ao animal selecionado.

### RF-006: O usuário deve poder registrar que resgatou um animal antes reportado como desaparecido - Reporte de resgate.

**Cenário de Teste:**

**Descrição:** Teste de registro de resgate de um animal antes reportado como desaparecido.

**Pré-condições:** O usuário está autenticado no sistema e existem anúncios de desaparecimento ativos.

**Passos:**
* Acessar a página de registro de resgate no sistema.
* Selecionar o anúncio de desaparecimento correspondente ao animal resgatado.
* Preencher corretamente todos os campos obrigatórios do formulário de registro de resgate.
* Clicar no botão de "Registrar Resgate".

**Resultado Esperado:** O sistema deve registrar o resgate do animal desaparecido com sucesso, associado ao anúncio correspondente.

### RF-008: Listagem de pets desaparecidos.

**Cenário de Teste:**

**Descrição:** Teste de visualização da lista de pets desaparecidos.

**Passos:**
* Acessar a página de listagem de pets desaparecidos no sistema.

**Resultado Esperado:** O sistema deve exibir corretamente a lista de pets desaparecidos, apresentando todas as informações relevantes de cada animal.

### RF-009: Listagem de pets encontrados.

**Cenário de Teste:**

**Descrição:** Teste de visualização da lista de pets encontrados.

**Passos:**
* Acessar a página de listagem de pets encontrados no sistema.

**Resultado Esperado:** O sistema deve exibir corretamente a lista de pets encontrados, apresentando todas as informações relevantes de cada animal.

### RF-010: Listagem de possíveis adoções.

**Cenário de Teste:**

**Descrição:** Teste de visualização da lista de possíveis adoções.

**Passos:**
* Acessar a página de listagem de possíveis adoções no sistema.

**Resultado Esperado:** O sistema deve exibir corretamente a lista de possíveis adoções, apresentando todas as informações relevantes de cada animal disponível para adoção.

