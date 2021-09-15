-- Selecionando todas colunas da tabela
select * from estados 

-- Selecionando só as colunas sigla e nome que estão na região sul
select sigla, nome as 'Nome dos estados' from estados
where regiao = 'Sul'

-- Selecioando as colunas nome e região com a população maior que 10 em ordem decrescente(do maior para o menor)
select nome, regiao from estados
where populacao >= 10
order by populacao desc