<h1 align="center">Desafio Delivery Much</h1>

O desafio foi desenvolvido com Cypress e para realizar o report foi integrado com Allure.

- Cypress Documentation: https://docs.cypress.io/guides/overview/why-cypress
- Allure Framework Documentation: https://docs.qameta.io/allure/

<h2 align="center">Setup</h2> 

* Baixe o projeto no Github:
	`https://github.com/CarrascoFrank/DesafioDeliveryMuch/tree/master`

Passo a passo para executar os testes:
* Acessar o diretório do prejeto
* Em seguida digite o seguinte comando: `npm install`
* Apos finalizar o comando anterior digite o seguinte comonando: `npm install cypress --save-dev`
* Vamos finalizar a configuração do Cypress com o seguinte comando `cypress install`
* Por ultimo agora iremos rodar os testes com o seguinte comando: `npm run cypress:run`

> Extra

Caso queira visuazar o report atravez do allure precisará fazer a instalação do allure na maquina

```Comandos de instalação para macOs```

* Instalar o Allure na maquiana com o seguinte comando: `brew install allure`

apos instalar precisa apenas realizar os seguintes comandos.

* `npm run allure:clean` Serve para limpar o ultimo relatorio gerado.
* `npm run cy:run` Serve para rodar os testes com o plugin da Allure.
* `npm run allure:generate` Ajuda a gerar a pagina para ver os resultados dos testes.
* `npm run allure:open` Inicia um server e abre a pagina com o relatorio dos testes rodados.

<h2 align="center">Reports dos testes Executados</h2> 

O overview dos testes executados.
![Overview report](https://github.com/CarrascoFrank/DesafioDeliveryMuch/blob/master/img-reports/allure-report-overview-run.png)

Visualização rapida dos testes de que falharam
![Failure report](https://github.com/CarrascoFrank/DesafioDeliveryMuch/blob/master/img-reports/allure-report-product-defects.png)

Visualização de todos os cenarios executados
![Failure report](https://github.com/CarrascoFrank/DesafioDeliveryMuch/blob/master/img-reports/allure-report-all-suites.png)


Repositório referente ao desafio da Delivery Much, onde foi feito o teste automatizado de uma API

- Nome: Frank Carrasco
- Email: carrasco.frank10@gmail.com
