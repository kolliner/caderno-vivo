export const digestionSource = {
  id: 'babonis-2019',
  title: 'Babonis et al. (2019) · Células glandulares e proteases',
  kind: 'Artigo original',
  origin: 'Nematostella vectensis · figuras 1–3',
  status: 'Evidência comparativa',
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6767649/',
  summaryLabel: 'Evidência e espécie',
  excerpt: 'O estudo descreve células glandulares e a expressão de genes de proteases na actinofaringe e nos mesentérios de Nematostella vectensis. A distribuição de células e enzimas na colônia de Actinia sp. permanece por investigar.',
};

export const atlasSource = {
  id: 'nematostella-atlas',
  title: 'Atlas celular de Nematostella vectensis',
  kind: 'Artigo original',
  origin: 'Nematostella vectensis · expressão gênica de célula única',
  status: 'Evidência comparativa',
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10946136/',
  excerpt: 'Atlas de referência para estudar a diversidade celular de Nematostella. Perfis de expressão descrevem estados celulares nas amostras analisadas.',
};



export const stages = [
  {name: 'Pólipo', title: 'Actinia sp.', evidence: 'Forma externa baseada em fotos da colônia', description: 'Duas vistas de exemplares distintos orientam a aparência e o volume aproximado do pólipo.'},
  {name: 'Disco oral', title: 'Disco oral e boca', evidence: 'Observação da colônia e anatomia esquemática', description: 'Os tentáculos circundam o disco oral. A abertura representada indica a posição esperada da boca, pouco definida na foto de referência.'},
  {name: 'Cavidade', title: 'Cavidade gastrovascular', evidence: 'Anatomia esquemática', description: 'O corte revela a continuidade entre boca, actinofaringe e cavidade. Os mesentérios se projetam da parede para dentro da cavidade.'},
  {name: 'Tecido', title: 'Filamento mesentérico', evidence: 'Referência comparativa · Nematostella vectensis', description: 'A margem do mesentério permite situar o filamento e explorar as células glandulares descritas na literatura.'},
  {name: 'Célula', title: 'Célula glandular', evidence: 'Referência comparativa · Nematostella vectensis', description: 'A vista mostra uma célula esquemática com núcleo e grânulos. O estudo de referência localizou expressão de genes de proteases em células da região.'},
  {name: 'Bioquímica', title: 'Secreção e proteólise', evidence: 'Esquema conceitual · sem medidas da colônia', description: 'A escala ilustra a ação de uma protease sobre uma cadeia proteica após a secreção.'},
];

export const themes = [
  ['Células e tecidos', [
    ['Composição celular', 'Que tipos celulares compõem os epitélios, os tentáculos e os mesentérios?', 4, atlasSource],
    ['Arquitetura molecular', 'Como membrana, matriz extracelular e junções dão forma aos tecidos?', 3],
    ['Secreção', 'Como uma célula glandular libera seu conteúdo para o meio local?', 5, digestionSource],
  ]],
  ['Genoma e regulação', [
    ['Genoma', 'Que recursos genômicos podem ajudar a contextualizar a colônia?', 4],
    ['Sinalização', 'Como os sinais entre células organizam tecidos e respostas?', 4],
    ['Reprodução', 'Como os processos reprodutivos se relacionam com tecidos e fases do ciclo de vida?', 0],
    ['Desenvolvimento', 'Como se formam os eixos, os tecidos e as estruturas do pólipo?', 0, atlasSource],
    ['Plasticidade', 'Que mudanças de forma e estado celular foram descritas?', 3],
  ]],
  ['Fisiologia', [
    ['Metabolismo', 'Como as células ajustam o uso de energia diante de diferentes condições?', 4],
    ['Transporte iônico', 'Como as trocas através da membrana contribuem para a homeostase?', 4],
    ['Digestão', 'Como estruturas internas e células glandulares participam da digestão?', 5, digestionSource],
    ['Resposta ambiental', 'Como mudanças no ambiente se refletem no pólipo e em suas células?', 0],
  ]],
  ['Interações e defesa', [
    ['Veneno e cnidócitos', 'Onde se situam as células especializadas envolvidas em captura e defesa?', 1, atlasSource],
    ['Imunidade', 'Como os tecidos respondem ao contato com microrganismos e a lesões?', 3],
    ['Microbioma', 'Que associações com microrganismos foram descritas e em quais espécies?', 3],
  ]],
];
export const tissueSource = {
  id: 'steinmetz-2017',
  title: 'Steinmetz et al. (2017) · Organização dos tecidos digestivos',
  kind: 'Artigo original',
  origin: 'Nematostella vectensis · mapa de destinos celulares e expressão de enzimas',
  status: 'Evidência comparativa',
  url: 'https://pubmed.ncbi.nlm.nih.gov/29185520/',
  excerpt: 'O estudo acompanha a origem de tecidos e localiza a expressão de genes ligados à digestão. O esquema da Fig. 1c situa funções e origens celulares no corte de um mesentério juvenil.',
};

export const scaleGuides = {
  0: {
    location: 'Do disco oral ao disco pedal, passando pela coluna.',
    explanation: 'O eixo oral–aboral liga a extremidade com boca e tentáculos à extremidade de fixação. A coluna conecta essas regiões. Gire o pólipo e selecione suas partes para comparar posição e função.',
    boundary: 'As fotos da colônia orientam a aparência. O disco pedal e as proporções ocultas foram estimados para a cena.',
    figure: ['Babonis et al. · Fig. 1, plano corporal em Nematostella', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig1'],
  },
  1: {
    location: 'Centro da coroa de tentáculos, na extremidade oral.',
    explanation: 'O disco oral circunda a boca. Os tentáculos ficam ao redor dessa superfície. A boca dá acesso à actinofaringe, que se prolonga para dentro da coluna.',
    boundary: 'A posição da abertura no modelo é anatômica e aproximada.',
    figure: ['Babonis et al. · Fig. 1, vistas da região oral e da faringe', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig1'],
  },
  2: {
    location: 'Interior da coluna, abaixo da região oral.',
    explanation: 'O tubo central é a actinofaringe. O espaço em torno e abaixo dele é a cavidade gastrovascular. As lâminas radiais são mesentérios, dobras da parede interna. A faixa salmão marca o filamento que será ampliado na próxima vista.',
    boundary: 'O corte orienta a leitura espacial. Forma e número de mesentérios foram simplificados e continuam por verificar na colônia.',
    figure: ['Babonis et al. · Fig. 1, relações entre faringe e mesentérios', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig1'],
  },
  3: {
    location: 'Margem de um mesentério, voltada para a cavidade gastrovascular.',
    explanation: 'O mesentério é uma dobra interna. O filamento ocupa a margem livre dessa dobra. Em Nematostella, essa região inclui um trato com células glandulares e cnidócitos. O destaque em azul-esverdeado marca uma célula glandular que será ampliada na etapa seguinte.',
    boundary: 'A distribuição das células e o relevo da dobra foram simplificados para orientar a exploração. A composição do tecido da colônia de Actinia sp. ainda não foi verificada em cortes histológicos.',
    figure: ['Babonis et al. · Fig. 2, cortes e micrografias do mesentério', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig2'],
  },
  4: {
    location: 'Uma célula glandular no epitélio do filamento.',
    explanation: 'A membrana translúcida envolve a célula. O núcleo fica na base e os grânulos âmbar se concentram no ápice. Para seguir a via secretora, selecione Ribossomos, Retículo endoplasmático rugoso, Complexo de Golgi, Grânulos e Membrana plasmática. As mitocôndrias ajudam a ligar o metabolismo a esse percurso. Em Nematostella, as micrografias mostram diferentes tipos de grânulos em células glandulares do mesentério.',
    boundary: 'As micrografias de Nematostella orientam a polaridade e a representação dos grânulos. A disposição dos outros componentes segue a biologia geral da célula animal. Suas posições e quantidades são didáticas; a organização interna da célula glandular dos exemplares do laboratório ainda não foi verificada.',
    figure: ['Babonis et al. · Fig. 2, células glandulares e grânulos em micrografia', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig2'],
  },
  5: {
    location: 'Espaço extracelular voltado para a cavidade gastrovascular.',
    explanation: 'O esquema começa após a liberação da enzima. A superfície azul-esverdeada representa uma protease. A depressão indica um sítio ativo esquemático. As esferas ligadas representam uma cadeia de aminoácidos. Ao longo da animação, a cadeia se separa em dois segmentos, ilustrando a quebra de uma ligação peptídica pela ação da enzima.',
    boundary: 'A forma das moléculas, a ligação ilustrada e o tempo são didáticos. O artigo de referência localiza transcritos de proteases em Nematostella; essa evidência de expressão não mede por si só a atividade enzimática da colônia.',
    figure: ['Babonis et al. · Fig. 3, localização de transcritos de proteases', 'https://link.springer.com/article/10.1186/s13227-019-0138-1#Fig3'],
  },
};

export const partGuides = {
  'Disco oral': 'Superfície que circunda a boca e sustenta a inserção dos tentáculos. No modelo, a área central mais clara ajuda a localizar o acesso à actinofaringe.',
  'Parede da coluna': 'Superfície interna visível no corte. A parede delimita a cavidade gastrovascular e é o ponto de origem das dobras mesentéricas.',
  'Mesentério': 'A lâmina ondulada representa uma dobra presa à parede da coluna. A margem livre carrega o filamento; compare as duas estruturas selecionando cada uma.',
  'Filamento mesentérico': 'A faixa salmão marca a margem livre da dobra. Em Nematostella, essa região contém tipos celulares especializados, como células glandulares identificadas em cortes e micrografias.',
  'Epitélio': 'O mosaico lilás representa o epitélio. Os pontos mais escuros dentro do mosaico representam núcleos das células. O esquema destaca a relação espacial entre a camada e a célula glandular.',
  'Célula glandular': 'O corpo azul-esverdeado representa a célula inteira. Na escala celular, a transparência permite distinguir o núcleo e os grânulos sem retirar a referência ao contorno da célula.',
  'Núcleo': 'O corpo violeta próximo à base representa o compartimento que abriga o DNA nuclear. A posição foi escolhida para deixar visível a polaridade da célula no esquema.',
  'Grânulos': 'As esferas âmbar dentro da célula representam compartimentos de armazenamento. A concentração perto da face apical ajuda a localizar a região associada à secreção.',
  'Protease': 'A forma azul-esverdeada representa a enzima. Sua função aqui é catalisar a hidrólise de uma ligação peptídica na cadeia proteica, usando água na reação.',
  'Cadeia proteica': 'Cada esfera representa um aminoácido na cadeia. A abertura de um espaço entre dois trechos representa a clivagem de uma ligação e a formação de fragmentos menores.',
};

export const actiniaSources = [digestionSource, tissueSource, atlasSource];
