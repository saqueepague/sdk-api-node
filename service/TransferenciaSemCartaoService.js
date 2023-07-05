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
    "modalidadeDeposito" : "00",
    "informarCpfPortador" : "00",
    "depositoVarejista" : "01",
    "informarDataNascPortador" : "00",
    "ispb" : "01234567",
    "depositoIdentificado" : "00",
    "habilitaDeposito" : "01",
    "solicDoc" : "00",
    "numAgencia" : "4029",
    "numConta" : "0082348296",
    "nomeCliente" : "Carl Edward Sagan",
    "cpfFavorecido" : "02358422785",
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


/**
 * Confirmação de operação de transferência.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de transferência.
 * no response value expected for this operation
 **/
exports.transferenciaConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de transferência entre contas.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransferenciaReq Requisição de operação de transferência.
 * returns transferenciaResp
 **/
exports.transferenciaPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Inftransferencia" : {
    "recibo" : "          COMPROVANTE DE TRANSFERENCIA          @           TRANSFERENCIA ENTRE CONTAS           @ORIGEM: CONTA CORRENTE - 123/1234567890         @DESTINO: CONTA CORRENTE - 456/9876543210        @VALOR TRANSFERENCIA: 123,456                    ",
    "origem" : {
      "nome" : "Jean-Luc Picard"
    },
    "destino" : {
      "nome" : "William Thomas Riker"
    }
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

