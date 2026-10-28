# Chat de IA com a API da Groq

Chat web que consome um modelo Llama 3.3 70B pela API da Groq.
Atividade da Aula 4 — TEC13 Engenharia de IA Aplicada, IFBA Campus Irecê.

**Dupla:** Thaylaine dos Santos Santana (individual)

## Tecnologias
Node.js, Express, groq-sdk, dotenv, HTML/CSS/JS puro

## Como rodar

1. Clone o repositório e instale as dependências:
   ```
   npm install
   ```
2. Copie `.env.example` para `.env` e preencha sua chave da Groq
   (gerada em console.groq.com):
   ```
   GROQ_API_KEY=gsk_sua_chave
   ```
3. Suba o servidor:
   ```
   npm start
   ```
4. Acesse http://localhost:3000

## Desafios implementados
- Desafio 2: foi feito a adição do balão de pensando enquanto a resposta é formulada pelo Chat. Está no arquivo main.js.

## Arquitetura

Descreva em um parágrafo por que a chamada à Groq acontece no servidor
e não no navegador.

A chamada à Groq ocorre via servidor devido a medidas de segurança visando a proteção da chave/credenciais. Em uma chamada via client a chave da API pode sofrer uma exposição, ficando suscetível a usos indevidos e roubos. Devido a isso, ao manter a chave escondida no servidor backend é possivel escondê-la e mantê-la segura desse tipo de esposição.

1. Por que a chamada à API da Groq tem de acontecer no servidor Express, e não no main.js?
É necessário manter a chamada a API da Groq no servidor Express por motivos de segurança, pois com esse cuidado é possível mantê-la protegida e segura da exposição e consequentemente de um possível roubo de credenciais.

2. Qual foi o erro que mais tempo levou para resolver?
O erro com o modelo da IA usada na função que tem o corpo da mensagem a ser enviada para a API, inicialmente julguei que esse erro estava ligado a código errado digitado por desatenção minha e/ou alguma coisa a mais faltando para conexão à API, porém no fim aconteceu que os modelos llama usados nos vídeos, site oficial e no site da atividade não funcionaram de nenhuma forma, então para resolver, testei um dos outros modelos, e foi somente assim que funcionou.

3. O que acontece quando vocês mudam o system prompt?
Ao mudar o system prompt para algo geral e mais abrangente e eu ter perguntando o que era uma floresta, observei que ele respondeu de forma coesa, especificando e trazendo o significado do que era uma floresta, tipos, dando exemplos de práticas ilegais que acontecem nesse tipo de lugar, suas características e mais informações relevantes. Já ao fazer uma pergunta aleatória com o prompt original o chat não respondeu, alegando que não poderia responder aquilo.

4. O modelo inventou alguma informação durante os testes?
Não inventou, acredito que poderia inventar durante alguma pergunta sobre IAs, com a pergunta em relação ao que elas fazem, pois poderia levantar alguma área em que ainda não possui interferência de IA, ou aumentar a presença de uma em uma área cujo sua presença não é tão forte.

5. Vocês colocariam este chat no site do IFBA Campus Irecê hoje?
Não pois ainda está em uma fase bem "iniciante", podendo oferecer respostas erradas, lentidão, travamento, além de que sua interface não está tão agradável, necessitando de algumas melhorias, como de acessibilidade por exemplo. Além disso, a questão de segurança também é algo a ser trabalhado.
