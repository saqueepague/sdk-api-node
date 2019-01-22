'use strict';


/**
 * Operação de autenticacao de cliente sem cartão, chamada para retornar o nome do cliente autenticado através de perguntas sobre ele.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body AutenticacaoReq Requisição de autenticação.
 * returns autenticacaoResp
 **/
exports.autenticacaoPOST = function(authenticationType,clientId,token,body) {
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
  "InfAutenticacao" : {
    "nomeCliente" : "Carl Edward Sagan"
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
    "recibo" : "               TÍTULOS COMPRADOS               @                036200005433591                @               13/10/2018  20:24               @                NOME DO TITULO                 @                 QUANTIDADE: 2                 @                VALOR: R$ 25,00                @              VALOR TOTAL: R$ 50,00            @              TELEFONE: 05199999999            @                CPF: 02358422785               "
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
 * Operação de consulta dos limites disponíveis para empréstimo. Hoje em dia esta operação é válida somente com os dados do cartão.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaLimitesEmprestimoReq Requisição de consulta limites de empréstimo, usando dados do cartão.
 * returns consultaLimitesEmprestimoResp
 **/
exports.consultaLimitesEmprestimoPOST = function(authenticationType,clientId,token,body) {
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
  "InfConsultaLimitesEmprestimo" : {
    "limiteMinimoEmprestimo" : "000000500000",
    "limiteMaximoEmprestimo" : "000005000000",
    "nomeAgenciaBancaria" : "Agência bancária",
    "nomeTitularConta" : "Carl Edward Sagan"
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
 * Operação de consulta de pagamentos para verificar se as informações são válidas pela CIP.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaPagamentoReq Requisição de consulta de pagamentos.
 * returns consultaPagamentoResp
 **/
exports.consultaPagamentoPOST = function(authenticationType,clientId,token,body) {
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
  "Terminal" : {
    "codEstab" : "000000000742673",
    "tipo" : "008",
    "id" : "05100004"
  },
  "InfConsultaPagamento" : {
    "aceitaPagamentoParcial" : "01",
    "dda" : [ {
      "aceitaPagamentoParcial" : "00",
      "tipo" : "tipo",
      "numDDA" : "7123",
      "sacado" : "sacado",
      "dataVencimento" : "20181122",
      "alegacao" : "alegacao",
      "valor" : "000000005000",
      "modificado" : "00",
      "cedente" : "Cedente"
    }, {
      "aceitaPagamentoParcial" : "00",
      "tipo" : "tipo",
      "numDDA" : "7123",
      "sacado" : "sacado",
      "dataVencimento" : "20181122",
      "alegacao" : "alegacao",
      "valor" : "000000005000",
      "modificado" : "00",
      "cedente" : "Cedente"
    } ],
    "dataPagamento" : "20181122",
    "desconto" : "000000000499",
    "nomeFavorecidoDoacao" : "Carl Edward Sagan",
    "cnpjFavorecidoDoacao" : "cnpjFavorecidoDoacao",
    "valor" : "000000005000",
    "modificado" : "01",
    "cip" : {
      "valorMaximoPermitidoPagamento" : "000000050000",
      "NumeroIdentificacaoConsultaPagamento" : "NumeroIdentificacaoConsultaPagamento",
      "valorMinimoPermitidoPagamento" : "000000000500",
      "valorJurosCalculado" : "000000000499",
      "valorAbatimento" : "000000000499",
      "tipoValorAceito" : "tipoValorAceito",
      "valorMultaCalculadada" : "000000000499"
    },
    "valorMinimo" : "000000000500",
    "cedente" : "Cedente"
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
 * Operação de consulta das parcelas do empréstimo.
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
      "qntParcelas" : "5"
    }, {
      "valorParcela" : "000000005000",
      "qntParcelas" : "5"
    } ],
    "dataPrimeiraParcela" : "20181122"
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
 * Operação de consulta dos possíveis produtos de recarga de um cartão de transporte ou pré-pago. Pega o número e operadora do cartão para ser verificado na requisição, não usa a autenticação ou identificação.
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
 * Operação de consulta de saque, para verificar se o saque poderá ser efetuado.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaSaqueReq Requisição de consulta de saque.
 * returns consultaSaqueResp
 **/
exports.consultaSaquePOST = function(authenticationType,clientId,token,body) {
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
  "InfConsultaSaque" : {
    "perguntas" : [ {
      "pergunta" : "INFORME OS 3 PRIMEIROS DIGITOS DO SEU CPF",
      "tamResposta" : "3",
      "id" : "1"
    }, {
      "pergunta" : "INFORME OS 3 PRIMEIROS DIGITOS DO SEU CPF",
      "tamResposta" : "3",
      "id" : "1"
    } ],
    "nomeCliente" : "Carl Edward Sagan"
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
 * Operação de consulta de taxas dinâmicas, requisitado antes de depósito ou saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaTaxasReq Requisição de consulta de taxas.
 * returns consultaTaxasResp
 **/
exports.consultaTaxasPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfConsultaTaxas" : {
    "transactions_fees" : [ {
      "fees" : [ {
        "min_amount" : "000",
        "max_amount" : "10000",
        "id" : "0201",
        "value" : "000"
      }, {
        "min_amount" : "000",
        "max_amount" : "10000",
        "id" : "0201",
        "value" : "000"
      } ],
      "name" : "deposit",
      "id" : "01"
    }, {
      "fees" : [ {
        "min_amount" : "000",
        "max_amount" : "10000",
        "id" : "0201",
        "value" : "000"
      }, {
        "min_amount" : "000",
        "max_amount" : "10000",
        "id" : "0201",
        "value" : "000"
      } ],
      "name" : "deposit",
      "id" : "01"
    } ]
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
 * Operação de consulta de todos os possíveis produtos e valores de recarga de cartão de transporte ou pré-pagos existentes na rede. Traz uma lista de todos os produtos e seus valores para depois serem filtrados pelo cartão do usuário.
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
    "recibo" : "                EXTRATO DE CONTA               @                036200005433591                @               13/10/2018  20:24               @                 BANCO: BANCO                  @                AGENCIA: 4029                  @              CONTA: 0082348296                @           DATA INICIAL: 12/10/2018            @           VALOR INICIAL: R$ 100,00            @            MOVIMENTACAO: R$ -50,00            @              VALOR FINAL: R$ 50,00            @             DATA FINAL: 13/10/2018            "
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
 * Confirmação de operação de pagamento ou agendamento de pagamento.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de pagamento ou agendamento de pagamento.
 * no response value expected for this operation
 **/
exports.pagamentoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de pagamento ou agendamento de pagamento.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body PagamentoReq Requisição de operação de pagamento ou agendamento de pagamento.
 * returns pagamentoResp
 **/
exports.pagamentoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfPagamentoResp" : {
    "recibo" : "",
    "qtdeViasComprovante" : "1",
    "dataPagamento" : "20181122",
    "desconto" : "000000000499",
    "mensagem" : "mensagem",
    "valor" : "000000005000",
    "sistemaCobranca" : "01",
    "cedente" : "Cedente"
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
 * Operação de confirmação de recarga de cartão de transporte ou pré-pago.
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
 * Operação de recarga de cartão de transporte ou pré-pago.
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
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
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
 * Confirmação de operação de consulta de saldo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de consulta de saldo.
 * no response value expected for this operation
 **/
exports.saldoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de consulta de saldo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body SaldoReq Requisição de operação de consulta de saldo.
 * returns saldoResp
 **/
exports.saldoPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfSaldo" : {
    "recibo" : "                 SALDO DE CONTA                @                036200005433591                @               13/10/2018  20:24               @                 BANCO: BANCO                  @                AGENCIA: 4029                  @              CONTA: 0082348296                @           VALOR NA DATA: R$ 50,00             "
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
 * Confirmação de operação de saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de saque.
 * no response value expected for this operation
 **/
exports.saqueConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body SaqueReq Requisição de operação de saque.
 * returns saqueResp
 **/
exports.saquePOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfSaque" : {
    "recibo" : "                 SAQUE DE CONTA                 @                036200005433591                @               13/10/2018  20:24               @                 BANCO: BANCO                  @                AGENCIA: 4029                  @              CONTA: 0082348296                @               VALOR: R$ 50,00                 "
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

