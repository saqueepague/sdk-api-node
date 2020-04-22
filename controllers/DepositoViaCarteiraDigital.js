'use strict';

var utils = require('../utils/writer.js');
var DepositoViaCarteiraDigital = require('../service/DepositoViaCarteiraDigitalService');

module.exports.consultaContaPOST = function consultaContaPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoViaCarteiraDigital.consultaContaPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultaTaxasPOST = function consultaTaxasPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepositoViaCarteiraDigital.consultaTaxasPOST(authenticationType,clientId,token,body)
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
  DepositoViaCarteiraDigital.depositoConfPOST(authenticationType,clientId,token,body)
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
  DepositoViaCarteiraDigital.depositoPOST(authenticationType,clientId,token,body)
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
  DepositoViaCarteiraDigital.tokenPOST(authenticationType,clientId,clientSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
