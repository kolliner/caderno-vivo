const reference = {
  anatomy: ['Babonis et al. (2019) · anatomia e células glandulares', 'https://link.springer.com/article/10.1186/s13227-019-0138-1'],
  muscles: ['Jahnel et al. (2014) · desenvolvimento e organização dos músculos', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4088927/'],
  tissues: ['Steinmetz et al. (2017) · origem e funções dos tecidos digestivos', 'https://pubmed.ncbi.nlm.nih.gov/29185520/'],
  familyDiagnosis: ['Carlgren · diagnóstico anatômico de Actiniidae', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/The_Danish_Ingolf-expedition_%28IA_danishingolfex5cpt9daniuoft%29.pdf'],
  taxonomy: ['Fautin, Crowther e Wallace (2008) · anatomia comparada e Actiniidae', 'https://www.museum.qld.gov.au/assets/media/project/qm/qm-website/collections-and-research/memoirs/nature-volume-54/mqm-n54-1-4-fautin-et-al.pdf'],
};

export const structureLessons = {
  'Mesentério': {
    summary: 'Uma dobra interna que amplia a superfície de contato com a cavidade e reúne regiões digestivas, musculares e, em muitos pólipos, reprodutivas.',
    sections: [
      ['Por que a parede se dobra?', 'Durante o desenvolvimento, partes do revestimento interno crescem para dentro da cavidade e formam lâminas longitudinais. Uma lâmina expõe duas faces ao conteúdo da cavidade. Isso aumenta a área de contato dentro do volume ocupado pelo pólipo. A dobra é formada durante o desenvolvimento do animal, antes de sua atuação na digestão.'],
      ['Digestão e absorção', 'Na margem livre, o filamento mesentérico abriga células especializadas. Enzimas secretadas ajudam a degradar o alimento fora das células. Outras regiões do mesentério participam da captação e do armazenamento de nutrientes. A dobra oferece mais superfície para essas trocas e posiciona o tecido digestivo perto do alimento retido na cavidade.'],
      ['Sustentação e movimento', 'O líquido da cavidade resiste à compressão e oferece apoio aos músculos da parede. Feixes retratores longitudinais associados aos mesentérios encurtam o corpo e ajudam a recolher o disco oral com os tentáculos. As dobras subdividem a cavidade parcialmente, permitindo compartimentos interligados.'],
      ['Reprodução', 'Nos mesentérios férteis, gametas amadurecem em regiões do próprio tecido mesentérico. A liberação de gametas ou de jovens e o local do desenvolvimento dependem da espécie e do modo reprodutivo.'],
      ['Filamento mesentérico e acôncio', 'O filamento é a margem especializada do mesentério. Acôncios são prolongamentos filamentosos ricos em cnidócitos em certos grupos de anêmonas. A ausência de acôncios é característica de Actiniidae, família de Actinia. Por isso, o corte mostra o filamento mesentérico.'],
    ],
    sources: [reference.anatomy, reference.tissues, reference.muscles, reference.familyDiagnosis],
  },
  'Coluna': {
    sections: [
      ['Forma e sustentação', 'A coluna é a parede que liga o disco oral ao disco pedal e delimita a cavidade gastrovascular. Alterações na pressão do líquido e no tônus muscular mudam a altura e o diâmetro do pólipo.'],
      ['Como o corpo muda de forma?', 'A musculatura da parede e os retratores internos atuam em conjunto. A contração longitudinal aproxima as duas extremidades. A pressão interna ajuda a manter a coluna distendida quando o animal está expandido.'],
    ],
    sources: [reference.muscles],
  },
  'Disco pedal': {
    sections: [
      ['Como ele fixa o pólipo?', 'Na extremidade aboral, a base se achata sobre o substrato. A geometria amplia a área de contato e a musculatura da região permite alterar a forma da base.'],
      ['Por que isso importa?', 'A fixação dá apoio à coluna enquanto a região oral se orienta e os tentáculos se movem. Na cena, a face inferior é uma aproximação porque fica escondida nas fotos da colônia.'],
    ],
    sources: [reference.taxonomy, reference.muscles],
  },
  'Tentáculos': {
    sections: [
      ['Como participam da alimentação?', 'A disposição em coroa coloca os tentáculos ao redor da boca. O contato com uma presa pode envolver adesão, ação de cnidócitos e movimentos que aproximam o alimento do disco oral.'],
      ['Como mudam de forma?', 'A musculatura e o líquido interno ajudam a estender, curvar e retrair os tentáculos. A aparência nas fotos também depende da postura do pólipo no instante do registro.'],
    ],
    sources: [reference.anatomy, reference.muscles],
  },
  'Disco oral': {
    sections: [
      ['Por que a boca fica no centro?', 'O disco organiza espacialmente a região de captura e a de entrada. A coroa de tentáculos ocupa sua periferia, e a posição central da boca oferece um trajeto curto entre o disco e a actinofaringe.'],
      ['Onde a alimentação pode parar?', 'Contato e deslocamento são etapas observáveis separadamente da ingestão.'],
    ],
    sources: [reference.anatomy],
  },
  'Boca': {
    sections: [
      ['O que passa por ela?', 'A boca é a abertura central do disco oral. O alimento ingerido passa por ela para a actinofaringe. Material não digerido pode sair pela mesma abertura.'],
      ['Por que o orifício muda de aspecto?', 'A abertura muda com a postura dos tecidos orais. No modelo, sua posição é esquemática, pois o limite da boca não ficou claro na fotografia usada para a vista inicial.'],
    ],
    sources: [reference.anatomy],
  },
  'Actinofaringe': {
    sections: [
      ['Como se forma o tubo?', 'O tecido da região oral se invagina e forma uma passagem revestida que se prolonga abaixo da boca. No corte, o tubo central permite acompanhar essa passagem até a cavidade.'],
      ['O que acontece além da passagem?', 'Em Nematostella, a faringe tem células glandulares e pode sofrer mudanças de posição durante a manipulação de alimento. Os mesentérios que chegam à faringe ajudam a conectar regiões do interior.'],
    ],
    sources: [reference.anatomy, reference.tissues],
  },
  'Filamento mesentérico': {
    sections: [
      ['Por que fica na margem livre?', 'Essa posição expõe o tecido especializado ao conteúdo da cavidade. Assim, o filamento pode ficar em contato próximo com o alimento, enquanto as faces do mesentério desempenham outras funções.'],
      ['Como participa da digestão?', 'Em Nematostella, micrografias mostram células glandulares intercaladas com cnidócitos nessa região. Células glandulares secretam produtos para o meio extracelular, e estudos de expressão mapeiam onde são produzidos transcritos de proteases.'],
    ],
    sources: [reference.anatomy, reference.tissues],
  },
  'Epitélio': {
    sections: [
      ['Por que as células ficam lado a lado?', 'A continuidade do revestimento cria uma interface entre dois ambientes. Na cavidade, a face apical das células fica voltada para seu conteúdo, e a face basal se relaciona com o tecido de suporte.'],
      ['Como essa organização favorece a digestão?', 'Na mesma superfície podem coexistir células de revestimento e células especializadas. A polaridade orienta a secreção ou a captação de substâncias para o lado funcional da interface.'],
    ],
    sources: [reference.anatomy, reference.tissues],
  },
  'Célula glandular': {
    sections: [
      ['Como ela entrega seus produtos?', 'A organização entre base e ápice direciona a secreção. Proteínas podem ser armazenadas em vesículas. A fusão dessas vesículas com a membrana apical libera o conteúdo no meio extracelular, processo chamado exocitose.'],
      ['O que a célula faz no filamento?', 'Células glandulares do trato mesentérico de Nematostella apresentam tipos distintos de grânulos. A localização de transcritos de proteases ajuda a identificar especializações, e a atividade de cada enzima exige caracterização própria.'],
    ],
    sources: [reference.anatomy],
  },
  'Núcleo': {
    sections: [
      ['Como o núcleo participa da secreção?', 'O núcleo guarda o DNA nuclear. Nele, genes podem ser transcritos em RNA. A produção das proteínas ocorre nos ribossomos, no citoplasma. A proteína pode então seguir caminhos de processamento e transporte dentro da célula.'],
      ['Por que aparece junto à base?', 'Na cena, a posição próxima à base separa visualmente o núcleo da região apical rica em grânulos. É uma escolha didática que ilustra polaridade celular.'],
    ],
    sources: [reference.anatomy],
  },
  'Grânulos': {
    sections: [
      ['Por que armazenar o conteúdo?', 'Guardar produtos em compartimentos delimitados por membrana permite separá-los do citoplasma e liberar conteúdo em momentos e locais específicos.'],
      ['O que dá para identificar em imagens?', 'Micrografias permitem distinguir grânulos por tamanho, densidade e localização. Inferir o conteúdo de um grânulo individual requer combinar a imagem com marcadores ou outras medidas.'],
    ],
    sources: [reference.anatomy],
  },
  'Protease': {
    sections: [
      ['Como uma protease corta uma proteína?', 'Uma região da enzima, o sítio ativo, interage com o substrato. Na hidrólise de uma ligação peptídica, a água participa da reação e a cadeia se divide. Cada protease tem preferências por determinados substratos e ligações.'],
      ['O que o movimento representa?', 'A aproximação e a separação dos fragmentos ilustram catálise, sem reproduzir dimensões, tempo ou estrutura molecular. A expressão de um gene de protease indica onde foi detectado seu RNA.'],
    ],
    sources: [reference.anatomy],
  },
  'Cadeia proteica': {
    sections: [
      ['O que cada esfera representa?', 'Cada esfera é um aminoácido dentro de uma cadeia. A ordem dos aminoácidos e as interações entre eles influenciam a forma e as propriedades da proteína.'],
      ['Por que dividir a cadeia?', 'A quebra de ligações peptídicas gera fragmentos menores. Quebras adicionais podem produzir peptídeos pequenos e aminoácidos que ainda precisam ser captados pelo tecido para serem aproveitados.'],
    ],
    sources: [reference.anatomy, reference.tissues],
  },
};
const cellBiology = {
  er: ['Alberts et al. · Retículo endoplasmático', 'https://www.ncbi.nlm.nih.gov/books/NBK26841/'],
  golgi: ['Cooper · Complexo de Golgi e a via secretora', 'https://www.ncbi.nlm.nih.gov/books/NBK9888/'],
  overview: ['Alberts et al. · Molecular Biology of the Cell', 'https://www.ncbi.nlm.nih.gov/books/NBK21054/'],
};

Object.assign(structureLessons, {
  'Membrana plasmática': {
    summary: 'O contorno translúcido delimita a célula. A extremidade apical fica voltada para o espaço onde a secreção é liberada.',
    sections: [['Como a secreção atravessa a membrana?', 'Uma vesícula secretora pode fundir sua membrana à membrana plasmática e liberar o conteúdo no exterior. Esse processo é a exocitose.']],
    sources: [cellBiology.golgi],
  },
  'Nucléolo': {
    summary: 'É a região mais escura mostrada dentro do núcleo.',
    sections: [['O que tem a ver com os ribossomos?', 'No nucléolo, parte do RNA ribossômico é produzida e se associa a proteínas para iniciar a montagem das subunidades do ribossomo. Elas saem do núcleo para participar da síntese de proteínas no citoplasma.']],
    sources: [cellBiology.overview],
  },
  'Retículo endoplasmático rugoso': {
    summary: 'As membranas lilás perto do núcleo formam o retículo endoplasmático rugoso.',
    sections: [['Onde começa a via secretora?', 'Ribossomos associados ao retículo sintetizam proteínas destinadas à secreção. A cadeia nascente pode entrar no interior do retículo, onde se dobra e passa por etapas de controle de qualidade.']],
    sources: [cellBiology.er],
  },
  'Ribossomos': {
    summary: 'Os pontos claros sobre o retículo representam ribossomos.',
    sections: [['O que eles produzem?', 'Os ribossomos leem o RNA mensageiro e unem aminoácidos para formar uma cadeia proteica. A associação ao retículo permite encaminhar certas cadeias para a via secretora.']],
    sources: [cellBiology.er],
  },
  'Complexo de Golgi': {
    summary: 'O conjunto rosado de bolsas achatadas representa o Golgi.',
    sections: [['O que acontece entre síntese e liberação?', 'O Golgi recebe proteínas vindas do retículo, modifica parte delas e as encaminha a destinos diferentes. Algumas seguem para vesículas ou grânulos de secreção.']],
    sources: [cellBiology.golgi],
  },
  'Mitocôndrias': {
    summary: 'Os corpos verdes alongados mostram pregas internas chamadas cristas.',
    sections: [['De onde vem parte da energia?', 'As cristas ampliam a superfície da membrana interna, onde ocorre a fosforilação oxidativa. O ATP produzido sustenta processos celulares, entre eles etapas do tráfego de vesículas.']],
    sources: [cellBiology.overview],
  },
});

structureLessons['Parede da coluna'] = structureLessons.Coluna;
