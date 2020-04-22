'use strict';

var utils = require('../utils/writer.js');
var DepositoSemCartao = require('../service/DepositoSemCartaoService');

module.exports.consultaContaPOST = function consultaContaPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoSemCartao.consultaContaPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.depositoConfPOST = function depositoConfPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoSemCartao.depositoConfPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.depositoPOST = function depositoPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoSemCartao.depositoPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tokenPOST = function tokenPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var clientSecret = req.swagger.params['clientSecret'].value;
  DepositoSemCartao.tokenPOST(authenticationType,clientId,clientSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
