'use strict';


/**
 * Operação de consulta de conta de favorecido, usada previamente ao depósito para verificar se a conta é válida e está habilitada para depósito.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaContaReq Requisição de consulta de conta.
 * returns consultaContaResp
 **/
exports.consultaContaPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "InfConsultaConta" : {
    "solicDoc" : "00",
    "numAgencia" : "4029",
    "numConta" : "0082348296",
    "modalidadeDeposito" : "00",
    "depositoVarejista" : "01",
    "nomeCliente" : "Carl Edward Sagan",
    "cpfFavorecido" : "02358422785",
    "ispb" : "01234567",
    "depositoIdentificado" : "00",
    "habilitaDeposito" : "01",
    "codBanco" : "237"
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
 * Confirmação de operação de depósito.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de depósito.
 * no response value expected for this operation
 **/
exports.depositoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de depósito em dinheiro, cartão é opcional nesta operação.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body DepositoReq Objeto da requisição de depósito, cartão é opcional.
 * returns depositoResp
 **/
exports.depositoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "Cripto" : {
    "hash" : "hash"
  },
  "InfDeposito" : {
    "recibo" : "@            COMPROVANTE DE DEPOSITO             @------------------------------------------------@ Agencia....: 0101                              @ Conta......: 74414-0                           @ Nome.......: EUGENIO SCHMITT COELHO            @@------------------------------------------------@ Favorecido: EUGENIO SCHMITT COELHO             @ Agencia Destino:                           0101@ Conta Destino:         Conta Corrente - 74414-0@@Tipo            NSU                        Valor@Dinheiro        697841472523             R$20,00@------------------------------------------------@               SAC - 0800 123 4569@      SAC - DEF. AUDITIVO - 0800 123 4568@            OUVIDORIA - 0800 123 4567@@             www.siteparceiro.com.br@"
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

