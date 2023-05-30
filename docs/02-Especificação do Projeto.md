# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários


## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

### Persona 1 - Adriana Maria
**Idade:** 65
**Localidade:** Contagem - Minas Gerais
**Ocupação:** Aposentada
**Moradia:** Casa
**Animal:** Gato

**Relação com a tecnologia:** uma senhora com acesso à internet e conhecimento limitado perante as tecnologias atuais, constantemente precisa do auxílio de seus familiares para acessar redes sociais.

**O que ela procura:** divulgar seu animal desaparecido.

### Persona 2 - Anna Beatriz
**Idade:** 20
**Localidade:** Nova Lima - Minas Gerais
**Ocupação:** Estudante
**Moradia:** Apartamento (3° andar)
**7Animal:** Cachorro

**Relação com a tecnologia:** é uma jovem atualizada com as tendências e tem fácil acesso à internet.

**O que ela procura:** durante um passeio, sua cadela Canela se soltou da coleira e se perdeu pelo seu bairro, ela busca um método efetivo para encontrar o seu animal perdido.

### Persona 3 - Carlos Gomes
**Idade:** 12
**Localidade:** Santa Luzia - Minas Gerais
**Ocupação:** Estudante
**Moradia:** Apartamento (5º andar)
**Animal:** Cachorro

**Relação com a tecnologia:** é um jovem com acesso à internet

**O que ele procura:** está em busca de um animal para adotar, mas não conhece ninguém em
sua região que esteja doando.

### Persona 4 - André Alves
**Idade:** 40
**Localidade:** Ribeirão das Neves - Minas Gerais
**Ocupação:** Vendedor
**Moradia:** Casa

**Relação com a tecnologia:** Possui afinidade com eletrônicos devido ao contato diário. Atualmente seu celular é indispensável para todas as suas atividades.

**O que ele procura:** André encontrou um cachorrinho próximo ao seu trabalho, sua esposa tem alergia e ele não pode ficar com o animal. Agora ele precisa urgentemente encontrar o seu tutor ou doá-lo.


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Adriana Maria      | Divulgar o desaparecimento do meu animal de estimação | aumentar as chances de encontrá-lo |
| Adriana Maria      | Ser notificada quando encontrarem meu pet | resgatá-lo o mais rápido possível |
| Anna Beatriz       | Uma busca refinada por pets já encontrados    | descobrir se alguém já avistou meu pet ou já o resgatou |
| André Alves        | Ser avisado que um animal desapareceu na minha região | poder avisar quando encontrá-lo |
| André Alves        | Uma plataforma que divulgue animais desaparecido | Divulgar o animal que eu encontrei |
| Carlos Gomes       | Acesso a animais de estimação      | Encontrar um animal para adotá-lo |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve restringir o acesso a usuários cadastrados para controle e segurança | ALTA |
|RF-002| O sistema deve permitir que novos usuários se cadastrem na plataforma   | ALTA |
|RF-003| O sistema deve permitir ao usuário cadastrar um animal de estimação vinculado ao próprio usuário - Registro de pet   | ALTA |
|RF-004| O sistema deve permitir o usuário criar um anúncio de desaparecimento de animal de estimação - Reporte de desaparecimento   | ALTA |
|RF-005| O usuário deve poder registrar que avistou um animal anunciado como desaparecido - Reporte de avistamento   | ALTA |
|RF-006| O usuário deve poder registrar que resgatou um animal antes reportado como desaparecido - Reporte de resgate   | ALTA |
|RF-007| O sistema deve permitir que usuários troquem mensagens entre quem reportou um desaparecimento e quem reportou o avistamento ou resgate   | MÉDIA |
|RF-008| Listagem de pets desaparecidos   | ALTA |
|RF-009| Listagem de pets encontrados   | MÉDIA |
|RF-010| Listagem de possíveis adoções   | MÉDIA |
|RF-011| Notificação de desaparecimento   | ALTA |
|RF-012| Notificação de encontro   | ALTA |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages); | ALTA | 
|RNF-002| O site deverá ser construído com o conceito de mobile first, ou seja, pensado inicialmente para ser acessado via dispositivos móveis |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade |  MÉDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2023. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.       |

