'use strict';


/**
 * Operação de consulta dos produtos de catálogo cartão presente. Traz uma lista de todas as operadoras e seus respectivos produtos/valores.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaCatalogoCartaoPresenteReq Requisição de consulta valores de recarga de cartão.
 * returns consultaCatalogoCartaoPresenteResp
 **/
exports.consultaCatalogoCartaoPresentePOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfConsultaCatalogoCartaoPresente" : {
    "produtos" : [ {
      "nomeProvedor" : "STEAM",
      "valor" : "0003000",
      "eanProduto" : "4260433452913",
      "priority" : "1",
      "logoURL" : "dHUgw6kgbyBjYXJhIDsp",
      "descricaoProduto" : "Cartao Presente",
      "valorMaximo" : "0003000",
      "idProvedor" : "132",
      "idProduto" : "1",
      "statusProduto" : "1",
      "valorMinimo" : "0003000",
      "tipoProduto" : "PIN",
      "informacoes" : {
        "descricaoResgate" : "O cartão presente deve ser resgatado de tal forma.",
        "termoDeUso" : "O produto só poderá ser resgatado uma vez."
      },
      "nomeProduto" : "Cartao Presente",
      "tipoMoeda" : "BRL"
    }, {
      "nomeProvedor" : "STEAM",
      "valor" : "0003000",
      "eanProduto" : "4260433452913",
      "priority" : "1",
      "logoURL" : "dHUgw6kgbyBjYXJhIDsp",
      "descricaoProduto" : "Cartao Presente",
      "valorMaximo" : "0003000",
      "idProvedor" : "132",
      "idProduto" : "1",
      "statusProduto" : "1",
      "valorMinimo" : "0003000",
      "tipoProduto" : "PIN",
      "informacoes" : {
        "descricaoResgate" : "O cartão presente deve ser resgatado de tal forma.",
        "termoDeUso" : "O produto só poderá ser resgatado uma vez."
      },
      "nomeProduto" : "Cartao Presente",
      "tipoMoeda" : "BRL"
    } ]
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "mensagemCliente" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "numAgencia" : "4029",
    "numConta" : "0082348296",
    "dataHora" : "1122151032"
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
 * Confirmação de operação de compra de cartão presente.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de compra de cartão presente.
 * no response value expected for this operation
 **/
exports.efetuarCompraCartaoPresenteConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de compra de cartão presente.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body EfetuarCompraCartaoPresenteReq Requisição para a compra de cartão presente.
 * returns efetuarCompraCartaoPresenteResp
 **/
exports.efetuarCompraCartaoPresentePOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfEfetuarCompraCartaoPresente" : {
    "validadeChave" : "AAAAMMDDhhmmss",
    "chaveSerial" : "9999999999999999999",
    "idCompra" : "b1a5c4bd-a914-4506-8d1d-744a6b3a285c",
    "chaveResgate" : "93215783"
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "mensagemCliente" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "numAgencia" : "4029",
    "numConta" : "0082348296",
    "dataHora" : "1122151032"
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

