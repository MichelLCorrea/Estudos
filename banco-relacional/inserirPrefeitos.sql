select * from cidades;

INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rodrigo Neves', 2),
       ('Raquel Lyra', 3),
       ('Zenaldo Coutinho', null);

select * from prefeitos;

INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rafael Greca', null);

-- ERRO pois já tem um prefeito para a cidade com a cidade_id 3
INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rodrigo Pinheiro', 3);