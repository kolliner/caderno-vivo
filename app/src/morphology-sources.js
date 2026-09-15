// Human-readable provenance: these limited checks do not validate the generated mesh.
export const morphologySources = [
  {
    id:'morphology-alim-2013',
    title:'Alim et al. (2013) — Random network peristalsis in Physarum polycephalum organizes fluid flows across an individual',
    shortTitle:'Alim et al. · 2013',
    topic:'Rede tubular e contrações',
    url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC3746869/',
    kind:'Artigo científico',
    status:'Consulta parcial ao original',
    origin:'Consulta direta · introdução e legenda da Fig. 1',
    summaryLabel:'Síntese da consulta',
    excerpt:'O estudo descreve redes tubulares com conexões fechadas e fluxo citoplasmático oscilatório. Orienta a presença de ciclos na malha representativa. A geometria gerada não reproduz um espécime do artigo nem seu modelo de escoamento.',
    checkedAt:'2026-09-14',
  },
  {
    id:'morphology-guy-2011',
    title:'Guy, Nakagaki e Wright (2011) — Flow-induced channel formation in the cytoplasm of motile cells',
    shortTitle:'Guy et al. · 2011',
    topic:'Frente em lâmina e ramificações',
    url:'https://doi.org/10.1103/PhysRevE.84.016310',
    kind:'Artigo científico',
    status:'Consulta parcial ao original',
    origin:'Manuscrito aceito do editor · introdução e legenda da Fig. 1; contexto de composição e fluxo consultado para a frente',
    summaryLabel:'Síntese da consulta',
    excerpt:'Descreve a frente em lâmina, a rede tubular e as fases fluida e filamentosa do citoplasma. A introdução relaciona contração, pressão e formação de canais. O modelo matemático do artigo não foi implementado nesta visualização; os leques são ilustrativos.',
    checkedAt:'2026-09-14',
  },
];

export const structureDescriptions = {
  'Rede tubular':'Uma malha com caminhos conectados e ciclos. As espessuras variam para facilitar a leitura da organização; não representam medições de uma amostra.',
  'Frente de expansão':'Região em lâmina representada nos leques da borda. A distinção entre frente e rede se apoia na literatura; o contorno mostrado é ilustrativo.',
  'Tubo plasmodial':'Trecho integrado à malha. O acesso ao interior usa um corte didático: não representa uma abertura natural do organismo.',
  'Endoplasma':'Região interna representada pelo movimento das partículas. A animação é qualitativa e não calcula velocidades ou transporte experimental.',
  'Córtex contrátil':'Camada periférica mostrada pelas fibras. O arranjo, as cores e as proporções são esquemáticos, não uma reconstrução de microscopia.',
  'Núcleo':'Núcleo selecionado. Consulte as referências e registre perguntas sobre o que está observando. A exploração interna do núcleo será a próxima escala.',
};
