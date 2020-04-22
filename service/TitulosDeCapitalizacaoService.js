'use strict';


/**
 * Confirmação de operação de compra de títulos de capitalização.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de compra de titulos de capitalizacao
 * no response value expected for this operation
 **/
exports.compraTitulosCapitalizacaoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de compra de títulos de capitalização.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body CompraTitulosCapitalizacaoReq Requisição de operação de compra de títulos de capitalização.
 * returns compraTitulosCapitalizacaoResp
 **/
exports.compraTitulosCapitalizacaoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfCompraTitulosCapitalizacao" : {
    "recibo" : "@               TITULOS COMPRADOS                @                                                @ NOME DO TITULO:  XXXXXXXXXXXXX                 @ QUANTIDADE: 2                                  @ VALOR: R$ 25,00                                @ VALOR TOTAL: R$ 50,00                          @ TELEFONE: 05199999999                          @ CPF: 02358422785                               "
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
 * Operação de consulta dos possíveis produtos de títulos de capitalização de uma operadora.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaTitulosCapitalizacaoReq Requisição de consulta produtos de títulos de capitalização.
 * returns consultaTitulosCapitalizacaoResp
 **/
exports.consultaTitulosCapitalizacaoPOST = function(authenticationType,clientId,token,body) {
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
  "InfConsultaTitulosCapitalizacao" : {
    "produtos" : [ {
      "limiteMaximoCompra" : "4",
      "tema" : {
        "estilos" : [ {
          "valor" : "#00288C",
          "nome" : "cor-fundo ou cor-botao"
        }, {
          "valor" : "#00288C",
          "nome" : "cor-fundo ou cor-botao"
        } ]
      },
      "valor" : "000000000500",
      "nome" : "Grêmio Mais",
      "id" : "7",
      "dataFimVigencia" : "20181130",
      "dataInicioVigencia" : "20181122",
      "detalhes" : "Edição ouro de mais um produto do Grêmio Mais",
      "descricao" : "Edição 115 Anos"
    }, {
      "limiteMaximoCompra" : "4",
      "tema" : {
        "estilos" : [ {
          "valor" : "#00288C",
          "nome" : "cor-fundo ou cor-botao"
        }, {
          "valor" : "#00288C",
          "nome" : "cor-fundo ou cor-botao"
        } ]
      },
      "valor" : "000000000500",
      "nome" : "Grêmio Mais",
      "id" : "7",
      "dataFimVigencia" : "20181130",
      "dataInicioVigencia" : "20181122",
      "detalhes" : "Edição ouro de mais um produto do Grêmio Mais",
      "descricao" : "Edição 115 Anos"
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

