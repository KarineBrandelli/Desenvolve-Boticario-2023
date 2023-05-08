/*
Ao desligar o computador e precisar reiniciar o servidor, seguir os seguintes comandos:

  sudo chown -R mongodb:mongodb /var/lib/mongodb
  sudo chown mongodb:mongodb /tmp/mongodb-27017.sock

Depois reiniciar o servidor:

  sudo systemctl start mongod

Depois verificar o status do servidor:

  sudo systemctl status mongod

Por fim, iniciar o servidor:

  mongosh
*/

// Criando uma coleção chamada 'alunos':

db.createCollection("alunos");

// Inserindo informações:

db.alunos.insert({
  nome: "Julio",
  data_nascimento: new Date(1972, 08, 30),
  curso: {
    nome: "Medicina",
  },
  habilidades: [
    {
      nome: "inglês",
      nível: "avançado",
    },
  ],
});

db.alunos.insert({
  nome: "Alberto",
  data_nascimento: new Date(1972, 09, 25),
  curso: {
    nome: "Engenharia Química",
  },
  habilidades: [
    {
      nome: "inglês",
      nível: "intermediário",
    },
  ],
});

db.alunos.insert({
  nome: "Daniela",
  data_nascimento: new Date(1995, 09, 25),
  curso: {
    nome: "Moda",
  },
  habilidades: [
    {
      nome: "alemão",
      nível: "básico",
    },
  ],
});

db.alunos.insert({
  nome: "Fernando",
  data_nascimento: new Date(1994, 03, 26),
  notas: [10, 4.5, 7],
  curso: {
    nome: "Sistema de informação",
  },
});

db.alunos.insert({
  nome: "André",
  data_nascimento: new Date(1991, 01, 25),
  curso: {
    nome: "Matemática",
  },
  notas: [7, 5, 9, 4.5],
});

db.alunos.insert({
  nome: "Lúcia",
  data_nascimento: new Date(1984, 07, 17),
  curso: {
    nome: "Matemática",
  },
  notas: [8, 9.5, 10],
});

// Mostrando todas informações:

db.alunos.find();

// Removendo informações:

db.alunos.remove({
  _id: ObjectId("6456535d045e6ae6be1f7762"),
});

// Procurando informações específicas:

db.alunos.find({
  nome: "Felipe",
});

db.alunos.find({
  "habilidades.nome": "inglês",
});

db.alunos.find({
  nome: "Felipe",
  "habilidades.nome": "inglês",
});

// Procurando por mais de uma condição
// Assim o valor é sobrescrito, precisamos usar o 'or':

db.alunos.find({
  "curso.nome": "Sistemas de informação",
  "curso.nome": "Engenharia Química",
});

// Utilizando o 'or':

db.alunos.find({
  $or: [
    { "curso.nome": "Sistemas da Informação" },
    { "curso.nome": "Engenharia Química" },
  ],
});

db.alunos.find({
  $or: [
    { "curso.nome": "Sistemas da Informação" },
    { "curso.nome": "Engenharia Química" },
  ],
  nome: "Daniela",
});

// Utilizando o 'in':

db.alunos.find({
  "curso.nome": {
    $in: ["Sistema da Informação", "Engenharia Química"],
  },
});

// Atualizando informações:
// O update por padrão só atualiza o primeiro elemento que ele encontra:

db.alunos.update(
  { "curso.nome": "Sistemas da Informação" },
  {
    $set: {
      "curso.nome": "Sistemas de informação",
    },
  }
);

// Atualizando para várias linhas:

db.alunos.update(
  { "curso.nome": "Sistema de informação" },
  {
    $set: { "curso.nome": "Sistemas de Informação" },
  },
  {
    multi: true,
  }
);

// Adicionando informações utilizando $set:

db.alunos.update(
  { _id: ObjectId("64565419045e6ae6be1f7763") },
  {
    $set: {
      notas: [10, 9, 4.5, 8.5],
    },
  }
);

// Adicionando notas utilizando $push (apenas com um valor):

db.alunos.update(
  { _id: ObjectId("56cb0002b6d75ec12f75d3b5") },
  {
    $push: {
      notas: 8.5,
    },
  }
);

// Adicionando notas utilizando $push e $each (com mais de um valor):

db.alunos.update(
  { _id: ObejctId("56cb0139b6d75ec12f75d3b6") },
  {
    $push: {
      notas: { $each: [8.5, 3] },
    },
  }
);

// Procurando notas com o $gt (greater than):

db.alunos.find({
  notas: { $gt: 5 },
});

// O operador que equivale ao "menor que" é o $lt:

db.alunos.find({ notas: { $lt: 5 } });

// Se quisermos encontrar apenas um aluno cuja nota seja maior do que 5:

db.alunos.findOne({
  notas: { $gt: 5 },
});

// Para pedir que essa lista venha em ordem alfabética podemos usar o sort para ordenar os elementos. Passaremos um objeto dizendo para organizar por campo "nome" e que essa ordem seja crescente 1:

db.alunos.find().sort({ nome: 1 });

// Rodando isso teremos os nomes em ordem alfabética, podemos, ainda utilizar o -1 para que os nomes venham na ordem contrária:

db.alunos.find().sort({ nome: -1 });

// Além de ordenar podemos, também, pedir apenas os três primeiros nomes. Isto é, limitar o número de alunos que queremos visualizar:

db.alunos.find().sort({ nome: 1 }).limit(3);

// Adicionando coordenadas:

db.alunos.update(
  { _id: ObjectId("64565419045e6ae6be1f7763") },
  {
    $set: {
      localizacao: {
        endereco: "Rua Vergueiro, 3185",
        cidade: "São Paulo",
        coordinates: [-23.588213, -46.632356],
        type: "Point",
      },
    },
  }
);

// Importando arquivos JSON externos

// Abrir outro terminal, navegar até o diretório onde está o JSON

// Em seguida executar o comando

// mongoimport -c alunos --jsonArray < alunos.json

// Voltar ao terminal do banco e consultar todos os alunos.

// Criar um índice de busca, o db.alunos.createIndex()

db.alunos.createIndex({
  localizacao: "2dsphere",
});

// calcular a distância entre esses dois pontos. Teremos que falar ao $geoNear que a forma é spherical : true, ou seja, que a comparação não deve ser entre as distâncias de uma linha, e sim, de uma esfera. Além disso, temos que falar o que deve ser feito com a distância, então, temos que criar o campo distanceField: "distance.calculada":

db.alunos.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-23.5640265, -46.6527128],
        type: "Point",
      },
      distanceField: "distancia.calculada",
      spherical: true,
    },
  },
]);

// O ponto mais próximo é ele mesmo, então pedimos pra que ele traga os 4 primeiros pontos, pulando o primeiro ponto:

db.alunos.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-23.5640265, -46.6527128],
        type: "Point",
      },
      distanceField: "distancia.calculada",
      spherical: true,
    },
  },
  { $limit: 4 },
  { $skip: 1 },
]);
