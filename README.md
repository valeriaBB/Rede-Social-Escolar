# TCC-Rede-Social-Escolar
Projeto em MEAN STACK - Rede Social Escolar, visa integrar a participação de pais e alunos no processo de ensino

Programação - MEAN STACK 

##Passo a passo para instalação
1- Instalação do Node.js ->  https://nodejs.org/en/ 
1.1 - Seguir o instalador;
1.2 - Ver se tudo deu certo pelo comando no prompt  ->  node -v

Obs: Versões do node superiores a 0.6.2 possuem por padrão o npm instalado. Caso sua versão seja inferior, necessário instalá-lo. https://www.npmjs.com/

2-Banco de dados - Mongo DB https://www.mongodb.com/download-center?jmp=nav#community 

3-Robo Mongo 0.9.0 - criar banco de dados chamado tcc2 - criar as collections conforme titulo dos controllers do serve.

4-Iniciar banco, prompt: mongod (se der erro, configurar a variavel de ambiente do SO)

5- Git clone do projeto em uma pasta do pc
5.1 Entrar na pasta do server -> abrir prompt -> comando npm install 
-> instala as dependencias do projeto, as quais podem ser verificadas no arquivo package.json
5.2 Entrar na pasta do cliente -> abrir prompt -> comando npm instal 
-> instala as dependencias do projeto, as quais podem ser verificadas no arquivo package.json

Obs: Na pasta node_modules encontra-se todos os módulos que a plicação precisa para funcionar.

6- Para executar o servidor: ng server ou instalar o nodemon.
6.1 O nodemon reinicia o servidor todas as vezes que alguma alteração é realizada -> npm install nodemon -g 
6.2 no prompt do servidor rodar: nodemon server

7-Instalar versões utilizadas:
-> angular-cli 1.0.0-beta.28.3
->node 6.9.4
