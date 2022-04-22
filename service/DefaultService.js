'use strict';


/**
 * Operação de autenticação de cliente sem cartão, chamada para retornar o nome do cliente autenticado.
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
      "descricaoProduto" : "Cartao Presente",
      "valorMaximo" : "0003000",
      "idProvedor" : "132",
      "idProduto" : "1",
      "statusProduto" : "1",
      "valorMinimo" : "0003000",
      "tipoProduto" : "PIN",
      "informacoes" : "\"dHUgw6kgbyBjYXJhIDsp\"",
      "nomeProduto" : "Cartao Presente",
      "tipoMoeda" : "BRL"
    }, {
      "nomeProvedor" : "STEAM",
      "valor" : "0003000",
      "eanProduto" : "4260433452913",
      "priority" : "1",
      "descricaoProduto" : "Cartao Presente",
      "valorMaximo" : "0003000",
      "idProvedor" : "132",
      "idProduto" : "1",
      "statusProduto" : "1",
      "valorMinimo" : "0003000",
      "tipoProduto" : "PIN",
      "informacoes" : "\"dHUgw6kgbyBjYXJhIDsp\"",
      "nomeProduto" : "Cartao Presente",
      "tipoMoeda" : "BRL"
    } ]
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
  "InfConsultaConta" : {
    "solicDoc" : "00",
    "modalidadeDeposito" : "00",
    "depositoVarejista" : "01",
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
 * Operação de consulta de condições disponíveis de parcelamento do empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaFavorecidoReq Requisição de consulta parcelas de empréstimo.
 * returns consultaFavorecidoResp
 **/
exports.consultaFavorecidoPOST = function(authenticationType,clientId,token,body) {
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
  "InfConsultaFavorecido" : {
    "nomeCliente" : "Carl Edward Sagan",
    "favorecidos" : [ {
      "numAgencia" : "4029",
      "numConta" : "0082348296",
      "nomeBanco" : "BRADESCO",
      "cpf" : "02358422785",
      "tipoConta" : "CC",
      "codBanco" : "237",
      "nomeTitularConta" : "Carl Edward Sagan"
    }, {
      "numAgencia" : "4029",
      "numConta" : "0082348296",
      "nomeBanco" : "BRADESCO",
      "cpf" : "02358422785",
      "tipoConta" : "CC",
      "codBanco" : "237",
      "nomeTitularConta" : "Carl Edward Sagan"
    } ]
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
 * Operação de consulta dos limites disponíveis para empréstimo. Esta operação é válida somente com os dados do cartão.
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
        "taxaJurosMensal" : "0008094",
        "iof" : "0008094",
        "cetAnual" : "0008094",
        "cetMensal" : "0008094",
        "valorTotalParcelas" : "000000500010",
        "valorSolicitado" : "000000000499",
        "dataContratacao" : "20200928",
        "valorJuros" : "000000001099",
        "taxaJurosAnual" : "0008094",
        "ultimoVencimento" : "20200928",
        "iofAdicional" : "0008094",
        "primeiroVencimento" : "20200928"
      }
    }, {
      "valorParcela" : "000000005000",
      "qntParcelas" : "5",
      "tributos" : {
        "taxaJurosMensal" : "0008094",
        "iof" : "0008094",
        "cetAnual" : "0008094",
        "cetMensal" : "0008094",
        "valorTotalParcelas" : "000000500010",
        "valorSolicitado" : "000000000499",
        "dataContratacao" : "20200928",
        "valorJuros" : "000000001099",
        "taxaJurosAnual" : "0008094",
        "ultimoVencimento" : "20200928",
        "iofAdicional" : "0008094",
        "primeiroVencimento" : "20200928"
      }
    } ],
    "limiteMinimoEmprestimo" : "000000500000",
    "limiteMaximoEmprestimo" : "000005000000",
    "valorTotalDisponivel" : "000000700000",
    "dataPrimeiraParcela" : "20181122",
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
 * Operação de consulta dos possíveis produtos de recarga de cartão pré-pago. Operação relacionada a transação consultaPrePago.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaPrePagoReq Requisição de consulta produtos de recarga de cartão pré-pago.
 * returns consultaPrePagoResp
 **/
exports.consultaPrePagoPOST = function(authenticationType,clientId,token,body) {
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
  "InfConsultaPrePago" : {
    "produtos" : [ {
      "valorMaximo" : "1500",
      "idProduto" : "CLARO",
      "nomeOperadora" : "CLARO",
      "valorMinimo" : "1000"
    }, {
      "valorMaximo" : "1500",
      "idProduto" : "CLARO",
      "nomeOperadora" : "CLARO",
      "valorMinimo" : "1000"
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
 * Operação de consulta dos possíveis produtos de recarga de transporte para o cartão informado pelo cliente. Operação relacionada a transação consultaProdutosRecarga.
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
 * Operação de consulta para saque. Efetuada para autenticar cliente, retornando valorde saque, moeda e dados adicionais.
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
  "InfConsultaSaque" : {
    "perguntas" : [ {
      "pergunta" : "Informe os 3 primeiros dígitos do seu CPF",
      "tamResposta" : "3",
      "id" : "1"
    }, {
      "pergunta" : "Informe os 3 primeiros dígitos do seu CPF",
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
 * Operação de consulta de taxas dinâmicas, requisitado antes de depósito ou saque de carteira de digital.
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
 * Operação de consulta dos produtos de recarga de cartão pré-pago de transporte. Traz uma lista de todas as operadoras e seus respectivos produtos/valores.
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
 * Confirmação de operação de demonstrativo INSS.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de demonstrativo INSS.
 * no response value expected for this operation
 **/
exports.demonstrativoINSSConfPOST = function(authenticationType,clientId,token,body) {
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
 * body DemonstrativoINSSReq Requisição de operação de demonstrativo INSS.
 * returns demonstrativoINSSResp
 **/
exports.demonstrativoINSSPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfDemonstrativoINSS" : {
    "recibo" : "@                DEMONSTRATIVO INSS                @                                                @ CLIENTE: EUGENIO SCHMITT COELHO                @ AGENCIA: 0150 CONTA: 03.013689.0-1             @ SALDO DA CONTA                                 @ SALDO DEVEDOR...............R$          450,35-@ TOTAL DEVEDOR...............R$          450,35-@ LIMITE DA CONTA.............R$          100,00 @ LIMITE DA CONTA DISPONIVEL..R$          350,35-@--------- MOVIMENTOS DA CONTA CORRENTE ---------@@    SALDO ANT EM 18/01/2019               93,56-@    MOVIMENTOS JAN/2019                         @    COMPRAS           201218              85,68-@    COMPRAS           201218             139,14-@    COMPRAS           211218              20,70-@    COMPRAS           211218              39,00-@    SALDO NA DATA                        378,08-@",
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
 * Operação de confirmação de recarga de cartão pré-pago de transporte (bilhetagem).
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
 * Operação de recarga de cartão pré-pago de transporte (bilhetagem) em dinheiro.
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
    "recibo" : "@             TEU BILHETE ANTECIPADO             @                                                @ CARTAO: 036200005433591                        @ VALOR DA RECARGA: R$ 48,00                     @ TAXAS: R$ 2,00                                 @ TOTAL PAGO: R$ 50,00                           "
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
 * Confirmação de operação de recarga.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de recarga de celular pré-pago.
 * no response value expected for this operation
 **/
exports.recargaPrePagoConfPOST = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Operação de recarga de celular pré-pago.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body RecargaPrePagoReq Requisição para recarga de celular pré-pago.
 * returns recargaPrePagoResp
 **/
exports.recargaPrePagoPOST = function(authenticationType,clientId,token,body) {
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
  "InfRecargaPrePago" : {
    "idRecarga" : "b1a5c4bd-a914-4506-8d1d-744a6b3a285c",
    "bonus" : "000000000400"
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
 * Operação de consulta do valor de saldo disponível em conta.
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
    "recibo" : "                 SALDO EM CONTA                @                036200005433591                @               13/10/2018  20:24                @          BANCO: BANCO SAQUE E PAGUE           @          AGENCIA: 4029                        @          CONTA: 0082348296                    @          VALOR NA DATA: R$ 50,00              "
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
 * Operação de saque de dinheiro em moeda local ou estrangeira.
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
    "recibo" : "                 SAQUE DE CONTA                 @                036200005433591                @               13/10/2018  20:24               @                 BANCO: BANCO                  @                AGENCIA: 4029                  @              CONTA: 0082348296                @               %VALOR%: R$ 50,00                 ",
    "ispb" : "01234567"
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

