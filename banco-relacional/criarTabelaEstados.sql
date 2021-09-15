-- CRIANDO TABELA DE ESTADOS!!

create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);

-- id, nome, sigla, regiao, população são as colunas da tabela
-- NOT NULL quer diser que é um campo obrigatorio
-- VARCHAR são quantos caracteres deve ter no máximo
-- ENUM deve preencher com os dados que estão dentro dos parenteses
-- UNIQUE KEY não deve ser repetido na coluna escolhida
-- UNSIGNED quer dizer que não tem sinal '+ -'