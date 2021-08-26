'use strict';


/**
 * Confirmação de operação de extrato.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de extrato.
 * no response value expected for this operation
 **/
exports.extratoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de extrato.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ExtratoReq Requisição de operação de extrato.
 * returns extratoResp
 **/
exports.extratoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfExtrato" : {
    "recibo" : "@                EXTRATO DE CONTA                @                                                @ CLIENTE: EUGENIO SCHMITT COELHO                @ AGENCIA: 0150 CONTA: 03.013689.0-1             @ SALDO DA CONTA                                 @ SALDO DEVEDOR...............R$          450,35-@ TOTAL DEVEDOR...............R$          450,35-@ LIMITE DA CONTA.............R$          100,00 @ LIMITE DA CONTA DISPONIVEL..R$          350,35-@--------- MOVIMENTOS DA CONTA CORRENTE ---------@@    SALDO ANT EM 18/01/2019               93,56-@    MOVIMENTOS JAN/2019                         @    COMPRAS           201218              85,68-@    COMPRAS           201218             139,14-@    COMPRAS           211218              20,70-@    COMPRAS           211218              39,00-@    SALDO NA DATA                        378,08-@",
    "qtdPaginas" : "000010"
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
 * Operação de identificação do cliente e informações adicionais de sua conta.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body IdentificacaoReq Requisição de identificação.
 * returns identificacaoResp
 **/
exports.identificacaoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfIdentificacao" : {
    "pedirToken" : "01",
    "valorLimiteFavorecido" : "000000030000",
    "frase" : "Informe o token gerado em seu app:",
    "numAgencia" : "4029",
    "perguntas" : [ {
      "pergunta" : "Qual é o dia de seu aniversário?",
      "tamResposta" : "2",
      "id" : "1"
    }, {
      "pergunta" : "Qual é o dia de seu aniversário?",
      "tamResposta" : "2",
      "id" : "1"
    } ],
    "idPositiva" : [ {
      "pos8" : "4E-8G-1P",
      "idTela" : "1",
      "pos4" : "P1-G8-E4",
      "pos5" : "REG SOS",
      "pos6" : "EN/UQ/AM",
      "pos7" : "69 05 41",
      "pos1" : "SOS GER",
      "pos2" : "MA/QU/NE",
      "pos3" : "14 50 96"
    }, {
      "pos8" : "4E-8G-1P",
      "idTela" : "1",
      "pos4" : "P1-G8-E4",
      "pos5" : "REG SOS",
      "pos6" : "EN/UQ/AM",
      "pos7" : "69 05 41",
      "pos1" : "SOS GER",
      "pos2" : "MA/QU/NE",
      "pos3" : "14 50 96"
    } ],
    "numConta" : "0082348296",
    "transacValidas" : "068101068010",
    "saldo" : "000000005000"
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

