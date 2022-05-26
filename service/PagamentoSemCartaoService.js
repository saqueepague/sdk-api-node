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

