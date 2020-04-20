'use strict';

var utils = require('../utils/writer.js');
var DepsitoViaCarteiraDigital = require('../service/DepsitoViaCarteiraDigitalService');

module.exports.consultaContaPOST = function consultaContaPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  DepsitoViaCarteiraDigital.consultaContaPOST(authenticationType,clientId,token,body)
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
  DepsitoViaCarteiraDigital.consultaTaxasPOST(authenticationType,clientId,token,body)
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
  DepsitoViaCarteiraDigital.depositoConfPOST(authenticationType,clientId,token,body)
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
  DepsitoViaCarteiraDigital.depositoPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
