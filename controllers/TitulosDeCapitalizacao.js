'use strict';

var utils = require('../utils/writer.js');
var TitulosDeCapitalizacao = require('../service/TitulosDeCapitalizacaoService');

module.exports.compraTitulosCapitalizacaoConfPOST = function compraTitulosCapitalizacaoConfPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  TitulosDeCapitalizacao.compraTitulosCapitalizacaoConfPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.compraTitulosCapitalizacaoPOST = function compraTitulosCapitalizacaoPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  TitulosDeCapitalizacao.compraTitulosCapitalizacaoPOST(authenticationType,clientId,token,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultaTitulosCapitalizacaoPOST = function consultaTitulosCapitalizacaoPOST (req, res, next) {
  var authenticationType = req.swagger.params['authenticationType'].value;
  var clientId = req.swagger.params['clientId'].value;
  var token = req.swagger.params['token'].value;
  var body = req.swagger.params['body'].value;
  TitulosDeCapitalizacao.consultaTitulosCapitalizacaoPOST(authenticationType,clientId,token,body)
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
  TitulosDeCapitalizacao.tokenPOST(authenticationType,clientId,clientSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
