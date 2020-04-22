'use strict';


/**
 * Operação de consulta dos possíveis produtos de recarga de transporte para o cartão informado pelo cliente. Operação relacionada a transação consultaProdutosRecarga.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaProdutosRecargaReq Requisição de consulta produtos de recarga disponíveis para um cartão.
 * returns consultaProdutosRecargaResp
 **/
exports.consultaProdutosRecargaPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "dataHora" : "1122151032"
  },
  "InfConsultaProdutosRecarga" : {
    "products" : [ {
      "name" : "Produto de Recarga",
      "id" : "1"
    }, {
      "name" : "Produto de Recarga",
      "id" : "1"
    } ]
  },
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Operação de consulta dos produtos de recarga de cartão pré-pago de transporte. Traz uma lista de todas as operadoras e seus respectivos produtos/valores.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaValoresRecargaReq Requisição de consulta valores de recarga de cartão.
 * returns consultaValoresRecargaResp
 **/
exports.consultaValoresRecargaPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "dataHora" : "1122151032"
  },
  "InfConsultaValoresRecarga" : {
    "valores" : {
      "issuers" : [ {
        "card_number_mask" : "XXXXXXXXXXXXXX-X",
        "card_number_length" : 15,
        "name" : "TEU",
        "id" : 1,
        "products" : [ {
          "min_value" : "1000",
          "fee" : "200",
          "values" : [ {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          }, {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          } ],
          "name" : "Bilhete Antecipado",
          "id" : "1",
          "max_value" : "9000"
        }, {
          "min_value" : "1000",
          "fee" : "200",
          "values" : [ {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          }, {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          } ],
          "name" : "Bilhete Antecipado",
          "id" : "1",
          "max_value" : "9000"
        } ]
      }, {
        "card_number_mask" : "XXXXXXXXXXXXXX-X",
        "card_number_length" : 15,
        "name" : "TEU",
        "id" : 1,
        "products" : [ {
          "min_value" : "1000",
          "fee" : "200",
          "values" : [ {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          }, {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          } ],
          "name" : "Bilhete Antecipado",
          "id" : "1",
          "max_value" : "9000"
        }, {
          "min_value" : "1000",
          "fee" : "200",
          "values" : [ {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          }, {
            "fee" : "200",
            "id" : "1",
            "value" : "2000"
          } ],
          "name" : "Bilhete Antecipado",
          "id" : "1",
          "max_value" : "9000"
        } ]
      } ]
    }
  },
  "Cripto" : {
    "hash" : "hash"
  },
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Operação de confirmação de recarga de cartão pré-pago de transporte (bilhetagem).
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de recarga.
 * no response value expected for this operation
 **/
exports.recargaConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de recarga de cartão pré-pago de transporte (bilhetagem) em dinheiro.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body RecargaReq Requisição de operação de recarga de um cartão.
 * returns recargaResp
 **/
exports.recargaPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfRecarga" : {
    "recibo" : "@             TEU BILHETE ANTECIPADO             @                                                @ CARTAO: 036200005433591                        @ VALOR DA RECARGA: R$ 48,00                     @ TAXAS: R$ 2,00                                 @ TOTAL PAGO: R$ 50,00                           "
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "dataHora" : "1122151032"
  },
  "Cripto" : {
    "hash" : "hash"
  },
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * clientSecret String Cliente Secret.
 * returns infTokenResp
 **/
exports.tokenPOST = function(authenticationType,clientId,clientSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "847c2530-9819-434b-82fb-a9058a1ec957",
  "token_type" : "bearer"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

