'use strict';

var utils = require('../utils/writer.js');
var DepositoComCartao = require('../service/DepositoComCartaoService');

module.exports.depositoConfPOST = function depositoConfPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoComCartao.depositoConfPOST(authenticationType,clientId,token,body)
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
  DepositoComCartao.depositoPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identificacaoPOST = function identificacaoPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoComCartao.identificacaoPOST(authenticationType,clientId,token,body)
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
  DepositoComCartao.tokenPOST(authenticationType,clientId,clientSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
