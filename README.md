# Boas vindas ao repositório do projeto Paint Calculator

Esta é uma aplicação que ajuda o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Ela considera que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema aponta o tamanhos e a quantidade de latas de tinta que o usuário deve comprar.

### Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura da parede deve ser, no mínimo, 30 centímetros maior que a altura da porta.
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados.
7. As variações de tamanho das latas de tinta são:
    - 0,5 L
    - 2,5 L
    - 3,6 L
    - 18 L

### PARA VOCÊ MEXER NO PROJETO:

Este repositório já contém uma aplicação React criada e configurada. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional.

1. Clone o repositório em uma pasta local criada por você
  * `git clone https://github.com/NicoleTeisen/App-paint-calculator.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd pasta-criada`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para você não fazer alterações na master
    * Exemplo: `git checkout -b sua-branch`

### COMANDOS PARA UTILIZAR A APLICAÇÃO LOCALMENTE:

* Iniciar aplicação no browser
    `npm start`

* Para executar os testes
    * `npm test`

    