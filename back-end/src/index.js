const express = require('express');
const routes = require('./routs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Resurso
 */
/** Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no backend.
 * POST: Cria uma irformação no backend.
 * PUT: Altera uma informação no backend.
 * DELETE: Deleta uma informação no backend.
 */

 /** Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após "?", usado para(filtros, paginação)
  * Route Params: Parâmetros para identificar recursos.
  * Requeste Body: É o corpo da requisição, utilizado para criar ou alterar recursos.
  */
 /**
  * SQL é o formado que a gente usa para se comunicar com o banco
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server.
  * NoSQL: mongoDB, CounchDB
  */

app.listen(3333); 