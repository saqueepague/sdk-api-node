'use strict';


/**
 * Operação de consulta de informações do boleto a ser pago em dinheiro ou débito em conta.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaPagamentoReq Requisição para consulta de pagamento de boleto com cartão.
 * returns consultaPagamentoResp
 **/
exports.consultaPagamentoPOST = function(authenticationType,clientId,token,body) {
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
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  },
  "Cripto" : {
    "hash" : "hash"
  },
  "InfConsultaPagamento" : {
    "aceitaPagamentoParcial" : "01",
    "dataPagamento" : "20181122",
    "desconto" : "000000000499",
    "mensagem" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "valor" : "000000005000",
    "cip" : {
      "valorMaximoPermitidoPagamento" : "000000050000",
      "valorMinimoPermitidoPagamento" : "000000000500",
      "valorJurosCalculado" : "000000000499",
      "valorAbatimento" : "000000000499",
      "tipoValorAceito" : "3",
      "valorMultaCalculadada" : "000000000499"
    },
    "valorMinimo" : "000000000500",
    "codBarras" : {
      "codigo" : "12345678912346579812345678912345678913456789123456789",
      "dataVencimento" : "20181122"
    },
    "cedente" : "Saque e Pague"
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
 * Confirmação de operação de pagamento de boleto de cobrança.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de pagamento.
 * no response value expected for this operation
 **/
exports.pagamentoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de pagamento de boleto de cobrança com cartão.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body PagamentoReq Requisição para pagamento de boleto com cartão.
 * returns pagamentoResp
 **/
exports.pagamentoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfPagamentoResp" : {
    "recibo" : "@            COMPROVANTE DE PAGAMENTO            @                                                @ CEDENTE: 008 BANCO SAQUE E PAGUE               @ VALOR..: 263,85                                @ DATA DO PAGAMENTO.: 29/01/2019                 @ CODIGO DE BARRAS                               @@   84600000000-3 25850072001-1                 @   10357244475-5 01192190121-8                  @",
    "qtdeViasComprovante" : "1",
    "dataPagamento" : "20181122",
    "desconto" : "000000000499",
    "mensagem" : "Esta &eacute; uma mensagem para exibi&ccedil;&atilde;o em tela.",
    "valor" : "000000005000",
    "cedente" : "Saque e Pague"
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
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  },
  "Cripto" : {
    "hash" : "hash"
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

