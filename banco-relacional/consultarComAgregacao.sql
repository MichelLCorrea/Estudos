select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc

select 
    avg(populacao) as Total
from estados

-- sum(populacao) função de soma; ele somou a população de todos os estados
-- avg(populacao) função de média; pegou a média da população de todos os estados