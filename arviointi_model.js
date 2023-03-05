const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (arvosana,pvm,Opiskelija_idOpiskelija,Opintojakso_idOpintojakso) values(?,?,?,?)',
      [arviointi.arvosana, arviointi.pvm, arviointi.Opiskelija_idOpiskelija, arviointi.Opintojakso_idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set arvosana=?,pvm=?, Opiskelija_idOpiskelija=?, Opintojakso_idOpintojakso=? where idArviointi=?',
      [arviointi.arvosana, arviointi.pvm, arviointi.Opiskelija_idOpiskelija, arviointi.Opintojakso_idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;