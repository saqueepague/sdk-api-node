'use strict';

/**
 * Operação de identificação de cliente através do cartão.
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
      "frase" : "Gere um token pelo Unicred Mobile e digite-o:",
      "perguntas" : [ {
        "pergunta" : "Qual a sua senha?",
        "resposta" : "mimimi",
        "tamResposta" : "6",
        "id" : "1"
      }, {
        "pergunta" : "Qual a sua senha?",
        "resposta" : "mimimi",
        "tamResposta" : "6",
        "id" : "1"
      } ],
      "idPositiva" : [ {
        "pos8" : "A-C-D-3",
        "idTela" : "1",
        "pos4" : "A-C-D-3",
        "pos5" : "A-C-D-3",
        "pos6" : "A-C-D-3",
        "pos7" : "A-C-D-3",
        "pos1" : "A-C-D-3",
        "pos2" : "A-C-D-3",
        "pos3" : "A-C-D-3"
      }, {
        "pos8" : "A-C-D-3",
        "idTela" : "1",
        "pos4" : "A-C-D-3",
        "pos5" : "A-C-D-3",
        "pos6" : "A-C-D-3",
        "pos7" : "A-C-D-3",
        "pos1" : "A-C-D-3",
        "pos2" : "A-C-D-3",
        "pos3" : "A-C-D-3"
      } ],
      "transacValidas" : "068101068010",
      "saldo" : "000000005000"
    },
    "InfTransacao" : {
      "cdProc" : "029100",
      "mensagemCliente" : "Não foi possível validar o cartão.",
      "nsu" : "000080247206",
      "codMoeda" : "986",
      "codOperadora" : "00000000914",
      "dataLocal" : "1122",
      "errorMessage" : "Cartão inválido.",
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
 * Operação de consulta de conta, usada previamente ao depósito para verificar se a conta é válida e está habilitada para depósito.
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
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "Cartão inválido.",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "dataHora" : "1122151032"
  },
  "InfConsultaConta" : {
    "solicDoc" : "00",
    "modalidadeDeposito" : "00",
    "nomeCliente" : "Carl Edward Sagan",
    "depositoIdentificado" : "00",
    "habilitaDeposito" : "01"
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
 * Operação de depósito, cartão é opcional nesta operação.
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
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "errorMessage" : "Cartão inválido.",
    "valor" : "5000",
    "horaLocal" : "151032",
    "nsuResposta" : "820",
    "dataHora" : "1122151032"
  },
  "Cripto" : {
    "hash" : "hash"
  },
  "InfDeposito" : {
    "recibo" : "              DEPÓSITO EFETIVADO               @                036200005433591                @               13/10/2018  20:24               @            BANCO: BANCO FAVORECIDO            @                AGENCIA: 4029                  @              CONTA: 0082348296                @           VALOR DO DEPÓSITO: R$ 48,00         "
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