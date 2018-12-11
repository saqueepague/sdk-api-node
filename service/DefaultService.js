'use strict';


/**
 * Autenticacao_POST
 * Operação de autenticacao de cliente.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body AutenticacaoReq Requisição de autenticação.
 * returns autenticacaoResp
 **/
exports.autenticacaoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
  "InfAutenticacao" : {
    "nomeCliente" : "Carl Edward Sagan"
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
 * CancelaAgendamento_POST
 * Cancela um pagamento que está agendado.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body AgendamentoIdentificaoReq Dados de identificação do agendamento.
 * returns agendamentoIdentificaoResp
 **/
exports.cancelaAgendamentoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfAgendamento" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
    "valorNominal" : "000000005000",
    "dataPagamento" : "20181122",
    "valorJurosCalculado" : "000000000499",
    "valorTotal" : "000000005499",
    "modoEntrada" : 0,
    "modificado" : 0,
    "valorAbatimento" : "000000000499",
    "codigoBarras" : "84729304827364829301567829304562229483471004",
    "cedente" : "Cedente",
    "valorMultaCalculadada" : "000000000499"
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * CompraTitulosCapitalizacaoConf_POST
 * Confirmação de operação de compra de títulos de capitalização.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de compra de titulos de capitalizacao
 * no response value expected for this operation
 **/
exports.compraTitulosCapitalizacaoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * CompraTitulosCapitalizacao_POST
 * Operação de compra de títulos de capitalização.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body CompraTitulosCapitalizacaoReq Requisição de operação de compra de títulos de capitalização.
 * returns compraTitulosCapitalizacaoResp
 **/
exports.compraTitulosCapitalizacaoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfCompraTitulosCapitalizacao" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * ConsultaAgendamentos_POST
 * Operação de consulta de pagamentos agendados.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * returns consultaAgendamentoResp
 **/
exports.consultaAgendamentosPost = function(authenticationType,clientId,token) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
  "InfoAgendamentos" : [ {
    "dataPagamento" : "20181122",
    "dataVencimento" : "20181122",
    "valorTotal" : "000000005000",
    "id" : "234",
    "cedente" : "Cedente"
  }, {
    "dataPagamento" : "20181122",
    "dataVencimento" : "20181122",
    "valorTotal" : "000000005000",
    "id" : "234",
    "cedente" : "Cedente"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ConsultaComprovantePagamento_POST
 * Obtém a segunda via do comprovante de um pagamento já efetuado.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body InfPagamentoComprovanteReq Dados de identificação do pagamento a qual deseja-se obter uma segunda via do comprovante.
 * returns infPagamentoResp
 **/
exports.consultaComprovantePagamentoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
  "qtdeViasComprovante" : "1",
  "dataPagamento" : "20181122",
  "desconto" : "000000000499",
  "cupom" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
  "mensagem" : "mensagem",
  "valor" : "000000005000",
  "sistemaCobranca" : 0,
  "cedente" : "Cedente"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ConsultaComprovantes_POST
 * Operação de consulta de pagamentos já efetuados.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * returns consultaComprovantesResp
 **/
exports.consultaComprovantesPost = function(authenticationType,clientId,token) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
  "InfComprovantes" : [ {
    "dataPagamento" : "20181122",
    "dataVencimento" : "20181122",
    "valor" : "000000005000",
    "id" : "036200001842241",
    "cedente" : "Cedente"
  }, {
    "dataPagamento" : "20181122",
    "dataVencimento" : "20181122",
    "valor" : "000000005000",
    "id" : "036200001842241",
    "cedente" : "Cedente"
  } ],
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
 * ConsultaConta_POST
 * Operação de consulta de conta.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaContaReq Requisição de consulta de conta.
 * returns consultaContaResp
 **/
exports.consultaContaPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
  "InfConsultaConta" : {
    "solicDoc" : 0,
    "modalidadeDeposito" : 0,
    "nomeCliente" : "Carl Edward Sagan",
    "habilitaDeposito" : 0,
    "depositoIdentificado" : 0
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
 * ConsultaLimitesEmprestimo_POST
 * Operação de consulta dos limites disponíveis para empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaLimitesEmprestimoReq Requisição de consulta limites de empréstimo.
 * returns consultaLimitesEmprestimoResp
 **/
exports.consultaLimitesEmprestimoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
  "InfConsultaLimitesEmprestimo" : {
    "limiteMinimoEmprestimo" : "000000500000",
    "limiteMaximoEmprestimo" : "000005000000",
    "nomeAgenciaBancaria" : "Agência bancária",
    "nomeTitularConta" : "Carl Edward Sagan"
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
 * ConsultaPagamento_POST
 * Operação de consulta de pagamentos.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaPagamentoReq Requisição de consulta de pagamentos.
 * returns consultaPagamentoResp
 **/
exports.consultaPagamentoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
    "aceitaPagamentoParcial" : 0,
    "dda" : [ {
      "aceitaPagamentoParcial" : 0,
      "tipo" : "tipo",
      "numDDA" : "7123",
      "sacado" : "sacado",
      "dataVencimento" : "20181122",
      "valor" : "000000005000",
      "alegacao" : "alegacao",
      "modificado" : 0,
      "cedente" : "Cedente"
    }, {
      "aceitaPagamentoParcial" : 0,
      "tipo" : "tipo",
      "numDDA" : "7123",
      "sacado" : "sacado",
      "dataVencimento" : "20181122",
      "valor" : "000000005000",
      "alegacao" : "alegacao",
      "modificado" : 0,
      "cedente" : "Cedente"
    } ],
    "dataPagamento" : "20181122",
    "nomeFavorecidoDoacao" : "Carl Edward Sagan",
    "desconto" : "000000000499",
    "valor" : "valor",
    "cnpjFavorecidoDoacao" : "cnpjFavorecidoDoacao",
    "modificado" : 0,
    "sistemaCobranca" : 0,
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
 * ConsultaParcelasEmprestimo_POST
 * Operação de consulta das parcelas do empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaParcelasEmprestimoReq Requisição de consulta parcelas de empréstimo.
 * returns consultaParcelasEmprestimoResp
 **/
exports.consultaParcelasEmprestimoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * ConsultaProdutosRecarga_POST
 * Operação de consulta dos possíveis produtos de recarga de uma operadora.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaProdutosRecargaReq Requisição de consulta produtos de recarga.
 * returns consultaProdutosRecargaResp
 **/
exports.consultaProdutosRecargaPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
  "InfConsultaProdutosRecarga" : {
    "products" : [ {
      "name" : "Produto novo",
      "id" : "5"
    }, {
      "name" : "Produto novo",
      "id" : "5"
    } ]
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
 * ConsultaSaque_POST
 * Operação de consulta de saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaSaqueReq Requisição de consulta de saque.
 * returns consultaSaqueResp
 **/
exports.consultaSaquePost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
  "InfConsultaSaque" : {
    "perguntas" : [ {
      "pergunta" : "Qual o nome do seu primeiro animal de estimação?",
      "tamResposta" : "27",
      "id" : "1"
    }, {
      "pergunta" : "Qual o nome do seu primeiro animal de estimação?",
      "tamResposta" : "27",
      "id" : "1"
    } ],
    "nomeCliente" : "Carl Edward Sagan"
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
 * ConsultaTaxas_POST
 * Operação de consulta de taxas.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaTaxasReq Requisição de consulta de taxas.
 * returns consultaTaxasResp
 **/
exports.consultaTaxasPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
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
 * ConsultaTitulosCapitalizacao_POST
 * Operação de consulta dos possíveis produtos de títulos de capitalização de uma operadora.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaTitulosCapitalizacaoReq Requisição de consulta produtos de títulos de capitalização.
 * returns consultaTitulosCapitalizacaoResp
 **/
exports.consultaTitulosCapitalizacaoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
      "detalhes" : "Edição ouro de mais um produto do Grêmio Mais",
      "dataInicioVigencia" : "20181122",
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
      "detalhes" : "Edição ouro de mais um produto do Grêmio Mais",
      "dataInicioVigencia" : "20181122",
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
 * ConsultaValoresRecarga_POST
 * Operação de consulta dos possíveis valores de recarga.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ConsultaValoresRecargaReq Requisição de consulta valores de recarga.
 * returns consultaValoresRecargaResp
 **/
exports.consultaValoresRecargaPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
          "id" : "7",
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
          "id" : "7",
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
          "id" : "7",
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
          "id" : "7",
          "max_value" : "9000"
        } ]
      } ]
    }
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
 * DepositoConf_POST
 * Confirmação de operação de depósito.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de depósito.
 * no response value expected for this operation
 **/
exports.depositoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deposito_POST
 * Operação de depósito.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body DepositoReq Requisição de depósito.
 * returns depositoResp
 **/
exports.depositoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
  "InfDeposito" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
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
 * EmprestimoConf_POST
 * Confirmação de operação de empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de empréstimo.
 * no response value expected for this operation
 **/
exports.emprestimoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Emprestimo_POST
 * Operação de empréstimo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body EmprestimoReq Requisição de empréstimo.
 * returns emprestimoResp
 **/
exports.emprestimoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * ExtratoConf_POST
 * Confirmação de operação de extrato.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de extrato.
 * no response value expected for this operation
 **/
exports.extratoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Extrato_POST
 * Operação de extrato.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ExtratoReq Requisição de operação de extrato.
 * returns extratoResp
 **/
exports.extratoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfExtrato" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * Identificacao_POST
 * Operação de identificação de cliente através do cartão.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body IdentificacaoReq Requisição de identificação.
 * returns identificacaoResp
 **/
exports.identificacaoPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
    "dataHora" : "1122151032"
  },
  "InfIdentificacao" : {
    "pedirToken" : 0,
    "frase" : "Por favor, se identifique.",
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
    "saldo" : "saldo"
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
 * PagamentoConf_POST
 * Confirmação de operação de pagamento ou agendamento de pagamento.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de pagamento ou agendamento de pagamento.
 * no response value expected for this operation
 **/
exports.pagamentoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Pagamento_POST
 * Operação de pagamento ou agendamento de pagamento.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body PagamentoReq Requisição de operação de pagamento ou agendamento de pagamento.
 * returns pagamentoResp
 **/
exports.pagamentoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfPagamentoResp" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
    "qtdeViasComprovante" : "1",
    "dataPagamento" : "20181122",
    "desconto" : "000000000499",
    "cupom" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
    "mensagem" : "mensagem",
    "valor" : "000000005000",
    "sistemaCobranca" : 0,
    "cedente" : "Cedente"
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * RecargaConf_POST
 * Operação de confirmação de recarga.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de recarga.
 * no response value expected for this operation
 **/
exports.recargaConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recarga_POST
 * Operação de recarga.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body RecargaReq Requisição de operação de recarga.
 * returns recargaResp
 **/
exports.recargaPost = function(authenticationType,clientId,token,body) {
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
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * ReimpressaoComprovante_POST
 * Imprime segunda via de um comprovante de pagamento.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body ReimpressaoComprovanteReq Dados de identificação do comprovante de pgamento.
 * returns reimpressaoComprovanteResp
 **/
exports.reimpressaoComprovantePost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfReimpressaoComprovante" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   ",
    "dataPagamento" : "20181122",
    "dataVencimento" : "20181122",
    "valor" : "000000005000",
    "id" : "047382754927145",
    "cedente" : "Cedente"
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * SaldoConf_POST
 * Confirmação de operação de consulta de saldo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de consulta de saldo.
 * no response value expected for this operation
 **/
exports.saldoConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Saldo_POST
 * Operação de consulta de saldo.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body SaldoReq Requisição de operação de consulta de saldo.
 * returns saldoResp
 **/
exports.saldoPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfSaldo" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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
 * SaqueConf_POST
 * Confirmação de operação de saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body TransacConf Requisição de confirmação de operação de saque.
 * no response value expected for this operation
 **/
exports.saqueConfPost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Saque_POST
 * Operação de saque.
 *
 * authenticationType String Tipo de autenticação requerida.
 * clientId String Identificação do cliente.
 * token String Chave para validação do acesso ao serviço.
 * body SaqueReq Requisição de operação de saque.
 * returns saqueResp
 **/
exports.saquePost = function(authenticationType,clientId,token,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "InfSaque" : {
    "recibo" : "             TEU BILHETE ANTECIPADO             @                036200005433591                @               13/10/2018  20:24               @           VALOR DA RECARGA: R$ 48,00           @                 TAXAS: R$ 2,00                 @              TOTAL PAGO: R$ 50,00              @   OS CRÉDITOS ADQUIRIDOS ESTARÃO DISPONÍVEIS   @      NOS VALIDADORES DOS ÔNIBUS DA REGIÃO      @     METROPOLITANA QUE ACEITAM O CARTÃO TEU     @ OU NAS CATRACAS DO METRÔ, NOS SEGUINTES PRAZOS @            RECARGAS ATÉ O MEIO DIA:            @ CRÉDITOS DISPONÍVEIS NO DIA SEGUINTE DA COMPRA @           RECARGAS APÓS O MEIO DIA:           @   CRÉDITOS DISPONÍVEIS EM 48H APÓS A COMPRA   "
  },
  "InfTransacao" : {
    "cdProc" : "029100",
    "mensagemCliente" : "Não foi possível validar o cartão.",
    "nsu" : "000080247206",
    "codMoeda" : "986",
    "codOperadora" : "00000000914",
    "dataLocal" : "1122",
    "valor" : "5000",
    "errorMessage" : "Cartão inválido.",
    "nsuResposta" : "820",
    "horaLocal" : "151032",
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

