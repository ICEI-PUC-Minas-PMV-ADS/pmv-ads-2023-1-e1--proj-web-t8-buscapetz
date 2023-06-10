# FUNCIONALIDADES DO SISTEMA (TELAS)

## Funcionalidades do sistema (Telas)

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso serão apresentadas na sequência.

## Visualização da tela de Home-Page

A tela principal apresenta um Slide com informações sobre o projeto para novos usuários e na parte de baixo da página o FAQ - Central de Dúvidas. Na Home Page temos estruturas de dados baseada em HMTL e JS. Segue a tela Home Page:

![Home page](img/6%20home%20page.png)
![Home Page2](img/6%20faq.png)

### Artefatos da funcionalidade

- index.html
- script_home.js
- style.css

### Estrutura de Dados

    {
	    "duvida_form": [
		    {
			    "first_name": “Usuario”,
			    "last_name": "Um",
			    "email": "usuario_um@dominiodeemail.com",
			    "cidade": "Belo Horizonte",
			    "estado": "Minas Gerais",
			    "aceite_termo": 1,
			    "texto": "Dúvida ou sugestão enviada pelo formulário na home page do site"
    		}
    	]
    }

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page   
   

## Visualização da tela de Login

O acesso à tela de Login poderá ser realizado na tela inicial do sistema através do botão “Login”, alocado no canto superior direito e as estruturas dadas foram baseadas em HMTL e CSS. Segue a tela de Login:

![Area de Login](img/6%20login.png)

### Requisitos atendidos

- RF-01

### Artefatos da funcionalidade
  
- index.html
- script
- styles.css

### Estrutura de dados

    {
	    "usuario": [
		    {
			    "email": "usuario_um@dominiodeemail.com",
			    "password": "12345678"
            }
        ]
    }

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e clique no botão login 

## Visualização da tela de cadastro

Caso o usuário ainda não tenha um cadastro, poderá ser realizado na tela inicial do sistema através do botão “Login => Novo Cadastro”, alocado no canto superior direito e a estruturas de dados utilizadas foi baseada em HMTL e CSS. Segue a tela de Cadastro: 

![Tela de Cadastro](img/6%20cadastro.png)
![Tela de Cadastro 2](img/6%20cadastro%202.png)


### Artefatos da funcionalidade

- index.html
- script
- style.css

### Estrutura de Dados

	{
		"usuario_cadastro": [
			{
				"id": 1,
				"first_name": “Usuario”,
				"last_name": "Um",
				"email": "usuario_um@dominiodeemail.com",
				"celular": "+5531990909090",
				"endereco": "Rua nome de exemplo",
				"numero": "9999",
				"bairro": "Centro",
				"cidade": "Belo Horizonte",
				"senha": "12345678",
				"genero": "nao_informado",
			}
		]
	}


### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e clique no botão login 
3. Na página login tem o botão Novo Cadastro

## Visualização da tela do usuário cadastrado

Essa tela permite ao usuário realizar alterações dos seus dados pessoais e senha. As estruturas de dados utilizadas foram baseadas em HMTL e CSS. Segue a tela do usuário cadastrado:

### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"usuario_cadastro": [
			"user_data": {
				"id": 1,
				"first_name": “Usuario”,
				"last_name": "Um",
				"email": "usuario_um@dominiodeemail.com",
				"celular": "+5531990909090",
				"endereco": "Rua nome de exemplo",
				"numero": "9999",
				"bairro": "Centro",
				"cidade": "Belo Horizonte",
				"senha": "********",
				"genero": "nao_informado",
			},
				"pets": {
				"0": {
				"pet_id": 1
				},
				"1": {
				"pet_id": 2
				}
				}
		]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre.
3. Após o Login, em todas as páginas, estará disponível no menu à direita o nome do usuário
4. Ao clicar no nome do usuário, ele entrará na página do Usuário

## Visualização da tela de registro do animal

Essa tela permite que o usuário realize um cadastro do seu animal perdido, baseado nas informações pessoais e fotos do seu animal. As estruturas de dados foram baseadas em HMTL e JS. Segue a tela de registro do animal:

![Registro Animal 1](img/6%20registro%20animal%201.png)
![Registro Animal 1](img/6%20registro%20animal%202.png)

### Requisitos atendidos

- RF-03
- RF-04
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"pet": [
				"id":1,
				"name":"Catito",
				"tipo":"Gato",
				"situacao":"Perdido",
				"caracteristicas":[
					"raca":"angorá",
					"porte": "pequeno",
					"idade": "Dois anos",
					"pelo_cor": "branco",
					"docil": "Dócio com humanos",
					"possui_chip": true,
					"olhos_cor": "azul e verde",
					"castrado": true,
					"ganero": "Macho"
				],
				"images":{
					"0":"catito_1.jpg",
					"1":"catito_2.jpg",
					"2":"catito_3.jpg"
				},
			"detalhes": "informações e demais detalhes do animal"
		]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre
3. Na página Meus Petz acesse no menu Registro ou na tela do Meus Petz clique em Registre um Pet

## Visualização da tela Meus Petz

Esta é a página principal após o usuário efetuar o Login. Essa tela permite que o usuário visualize quais os animais já foram cadastrados, acessar a página de registro de um novo animal e a página de comparação entre o seu animal e outros animais cadastrados. As estruturas de dados foram baseadas em HMTL e JS. Segue imagens da Tela Meus Petz:

![Meus Petz](img/6%20meus%20petz%201.png)
![Meus Petz](img/6%20meus%20petz%202.png)
### Requisitos atendidos

- RF-04
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"pets":
			"0": [
					"id":1,
					"name":"Catito",
					"tipo":"Gato",
					"situacao":"Perdido",
					"caracteristicas":[
						"raca":"angorá",
						"porte": "pequeno",
						"idade": "Dois anos",
						"pelo_cor": "branco",
						"docil": "Dócio com humanos",
						"possui_chip": true,
						"olhos_cor": "azul e verde",
						"castrado": true,
							"ganero": "Macho"
					],
					"images":{
						"0":"catito_1.jpg",
						"1":"catito_2.jpg",
						"2":"catito_3.jpg"
					}
			]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre
3. Após o Login você será redirecionado automaticamente para a página Meus Petz
## Visualização da tela de animais encontrados

Essa tela permite que o usuário visualize quais os animais foram encontrados mediante à divulgação no site e compartilhamento de informações entre os usuários. As estruturas de dados foram baseadas em HMTL e JS. Segue a tela de animais encontrados:

![Encontrados 1](img/6%20encontrados%201.png)
![Encontrados 2](img/6%20encontrados%202.png)
![Encontrados 3](img/6%20encontrados%203.png)
### Requisitos atendidos

- RF-09
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"pets":
			"0": [
					"id":1,
					"name":" ",
					"tipo":"cachorro",
					"situacao":"Encontrado",
					"caracteristicas":[
						"porte": "pequeno",
						"pelo_cor": "caramelo",
							"fase_vida": "filhote"
					],
					"images":{
						"0":"dog_caramelo_1.jpg"
					},
				"observacao": "encontrado no centro de recife"
			]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre
3. Na página Meus Petz acesse o menu Listas
4. No menu Listas selecione a lista de Animais Encontrados

## Visualização da tela de animais perdidos

Essa tela permite que o usuário visualize quais os animais foram perdidos conforme cadastrado realizado pelo próprio ou demais usuários. As estruturas de dados foram baseadas em HMTL e JS. Segue a tela de animais perdidos:

![Perdidos 1](img/6%20perdidos%201.png)
![Perdidos 2](img/6%20perdidos%202.png)
![Perdidos 3](img/6%20perdidos%203.png)

### Requisitos atendidos

- RF-08
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"pets":
			"0": [
					"id":1,
					"name":" ",
					"tipo":"cachorro",
					"situacao":"Perdido",
					"caracteristicas":[
						"porte": "pequeno",
						"pelo_cor": "caramelo",
							"fase_vida": "filhote"
					],
					"images":{
						"0":"dog_caramelo_1.jpg"
					},
				"observacao": "encontrado no centro de recife"
			]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre
3. Na página Meus Petz acesse o menu Listas
4. No menu Listas selecione a lista de Animais Perdidos

## Visualização da tela de lista de animais para adoção

Essa tela permite que o usuário visualize quais os animais estão disponíveis para adoção conforme cadastrado realizado por outros usuários. As estruturas de dados foram baseadas em HMTL e JS. Segue a tela de animais para adoção:

![Adoção 1](img/6%20adocao%201.png)
![Adoção 2](img/6%20adocao%202.png)
![Adoção 3](img/6%20adocao%203.png)
### Requisitos atendidos

- RF-10
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css
### Estrutura de Dados

	{
		"pets":
			"0": [
					"id":1,
					"name":" ",
					"tipo":"cachorro",
					"situacao":"Encontrado",
					"caracteristicas":[
						"porte": "Médio",
						"pelo_cor": "caramelo",
							"fase_vida": "filhote"
					],
					"images":{
						"0":"dog_caramelo_1.jpg"
					},
				"observacao": " "
			]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e faça seu login ou se registre
3. Na página Meus Petz acesse o menu Listas
4. No menu Listas selecione a lista de Animais Para Adoção

## Visualização da tela de comparação do PET

Essa tela permite que o usuário visualize seu animal registrado e o compare com outros cadastrados no sistema, tendo como auxílio às TAGS que são marcadas para facilitar a comparação entre os animais. As estruturas de dados foram baseadas em HMTL e JS. Segue a tela de Comparação:

![Comparação de Petz](img/6%20comparacao%201.png)

### Requisitos atendidos

- RF-10
### Artefatos da funcionalidade

- index.html 
- script_home.js
- style.css

### Estrutura de Dados

	{
		"meu_pet": [
				"id":1,
				"name":"Catito",
				"tipo":"Gato",
				"situacao":"Perdido",
				"caracteristicas":[
					"raca":"angorá",
					"porte": "pequeno",
					"idade": "Dois anos",
					"pelo_cor": "branco",
					"docil": "Dócio com humanos",
					"possui_chip": true,
					"olhos_cor": "azul e verde",
					"castrado": true,
					"ganero": "Macho"
				],
				"images":{
					"0":"catito_1.jpg"
				},
			"detalhes": "informações e demais detalhes do animal"
		],
		"pets":
			"0": [
					"id":3,
					"name":"Pet 1",
					"tipo":"Gato",
					"situacao":"Perdido",
					"caracteristicas":[
						"raca":"Sem raça definida",
						"porte": "pequeno",
						"idade": "Três anos",
						"pelo_cor": "larnaja",
						"docil": "Dócio com humanos",
						"possui_chip": true,
						"olhos_cor": "Castanhos",
						"castrado": true,
							"ganero": "Macho"
					],
					"images":{
						"0":"pet1_1.jpg"
					}
			]
	}

### Instruções de acesso

1. Abra um navegador de Internet e pesquise Busca Petz
2. Acesse a Home Page e clique no botão login ou se registre
3. Na página Meus Petz registre um PET
4. Após o usuário registrar um PET, o perfil dele estará disponível na página Meus Petz e abaixo de suas informações terá um botão COMPARE
5. Pressione o botão compare e acesse a tela de comparação
