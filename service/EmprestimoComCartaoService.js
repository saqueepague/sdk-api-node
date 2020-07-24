'use strict';


/**
 * Operação de consulta de condições disponíveis de parcelamento do empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaParcelasEmprestimoReq Requisição de consulta parcelas de empréstimo.
 * returns consultaParcelasEmprestimoResp
 **/
exports.consultaParcelasEmprestimoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfConsultaParcelasEmprestimo" : {
    "opcoesParcelas" : [ {
      "valorParcela" : "000000005000",
      "qntParcelas" : "5",
      "tributos" : {
        "taxaJurosMensal" : "0809445",
        "iof" : "0809445",
        "cetAnual" : "0809445",
        "cetMensal" : "0809445",
        "valorSolicitado" : "000000000499",
        "dataContratacao" : "20200928",
        "valorJuros" : "0002422",
        "taxaJurosAnual" : "0809445",
        "ultimoVencimento" : "20200928",
        "iofAdicional" : "0809445",
        "primeiroVencimento" : "20200928"
      }
    }, {
      "valorParcela" : "000000005000",
      "qntParcelas" : "5",
      "tributos" : {
        "taxaJurosMensal" : "0809445",
        "iof" : "0809445",
        "cetAnual" : "0809445",
        "cetMensal" : "0809445",
        "valorSolicitado" : "000000000499",
        "dataContratacao" : "20200928",
        "valorJuros" : "0002422",
        "taxaJurosAnual" : "0809445",
        "ultimoVencimento" : "20200928",
        "iofAdicional" : "0809445",
        "primeiroVencimento" : "20200928"
      }
    } ],
    "limiteMinimoEmprestimo" : "000000500000",
    "limiteMaximoEmprestimo" : "000005000000",
    "nomeAgenciaBancaria" : "Agência bancária",
    "nomeTitularConta" : "Carl Edward Sagan"
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
 * Confirmação de operação de empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de empréstimo.
 * no response value expected for this operation
 **/
exports.emprestimoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body EmprestimoReq Requisição de empréstimo.
 * returns emprestimoResp
 **/
exports.emprestimoPOST = function(authenticationType,clientId,token,body) {
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
  "Cripto" : {
    "hash" : "hash"
  },
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  },
  "InfEmprestimo" : {
    "recibo" : "@           COMPROVANTE DE EMPRESTIMO            @------------------------------------------------@ Agencia....: 0101                              @ Conta......: 74414-0                           @ Nome.......: EUGENIO SCHMITT COELHO            @@------------------------------------------------@ Favorecido: EUGENIO SCHMITT COELHO             @ Agencia Destino:                           0101@ Conta Destino:         Conta Corrente - 74414-0@@Tipo            NSU                        Valor@Dinheiro        697841472523             R$20,00@------------------------------------------------@               SAC - 0800 123 4569@      SAC - DEF. AUDITIVO - 0800 123 4568@            OUVIDORIA - 0800 123 4567@@             www.siteparceiro.com.br@"
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

