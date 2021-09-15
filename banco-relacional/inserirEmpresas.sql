-- Modificando na tabela empresas o número de caracteres do cnpj
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas (nome, cnpj)
VALUES ('Bradesco', 37132204000196),
       ('Vale', 17774145000142),
       ('Cielo', 38587404000104);

desc empresas;

select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES (1, 1, 1),
       (1, 2, 0),
       (2, 1, 0),
       (2, 2, 1);