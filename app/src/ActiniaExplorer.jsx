import {useEffect, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, CaretRight, FileText, Plus} from '@phosphor-icons/react';
import {createActinia} from './actinia-world';
import {atlasSource, digestionSource, partGuides, scaleGuides, stages, themes, tissueSource} from './actinia-content';
import {structureLessons} from './actinia-lessons';
import './actinia.css';

const localObservation = import.meta.env.DEV
  ? Object.values(import.meta.glob('./caderno-vivo-actinia-local.json', {eager: true, import: 'default'}))[0]
  : null;

const parts = [
  ['Disco oral', 'Tentáculos', 'Coluna', 'Disco pedal'],
  ['Boca', 'Disco oral', 'Tentáculos'],
  ['Actinofaringe', 'Parede da coluna', 'Mesentério', 'Filamento mesentérico'],
  ['Mesentério', 'Filamento mesentérico', 'Epitélio', 'Célula glandular'],
  ['Membrana plasmática', 'Núcleo', 'Nucléolo', 'Retículo endoplasmático rugoso', 'Ribossomos', 'Complexo de Golgi', 'Mitocôndrias', 'Grânulos'],
  ['Protease', 'Cadeia proteica'],
];

const partColors = {
  'Mesentério': '#b86a90',
  'Filamento mesentérico': '#d78490',
  'Epitélio': '#b989ad',
  'Célula glandular': '#68bdb0',
  'Núcleo': '#ad75a1',
  'Grânulos': '#e7a86d',
  'Membrana plasmática': '#68bdb0',
  'Nucléolo': '#9e79b3',
  'Retículo endoplasmático rugoso': '#968bd1',
  'Ribossomos': '#d1b7ed',
  'Complexo de Golgi': '#b8749e',
  'Mitocôndrias': '#99d5a8',
  'Protease': '#68cdb5',
  'Cadeia proteica': '#e2af6b',
};

const details = {
  'Tentáculos': 'Projeções ao redor do disco oral associadas à captura de alimento e ao contato com o ambiente.',
  'Coluna': 'Parede externa entre o disco oral e o disco pedal.',
  'Disco pedal': 'Região aboral de fixação ao substrato. A superfície de contato é aproximada neste modelo.',
  'Boca': 'Abertura central que comunica com a actinofaringe.',
  'Actinofaringe': 'Passagem entre a boca e a cavidade gastrovascular.',
  'Mesentério': 'Dobra interna que se projeta da parede do pólipo para a cavidade.',
  'Epitélio': 'Camada de células que reveste uma superfície. O arranjo mostrado é didático.',
  'Núcleo': 'Compartimento celular que contém o genoma nuclear.',
  'Grânulos': 'Compartimentos representados como reservas de conteúdo para secreção.',
  'Protease': 'Enzima que catalisa a quebra de ligações em proteínas.',
  'Cadeia proteica': 'A separação em fragmentos ilustra o efeito da proteólise, sem escala ou tempo experimental.',
};

export function ActiniaExplorer({active, onContext, onReader, onNote}) {
  const host = useRef(null);
  const world = useRef(null);
  const marker = useRef(null);
  const [stage, setStage] = useState(0);
  const [part, setPart] = useState('');
  const [theme, setTheme] = useState(null);
  const [panel, setPanel] = useState('structure');
  const [error, setError] = useState(false);
  const current = stages[stage];
  const guide = scaleGuides[stage];
  const lesson = structureLessons[part];

  useEffect(() => {
    try {
      world.current = createActinia(host.current, name => {
        setPart(name);
        if (name) {
          setTheme(null);
          setPanel('structure');
        }
      }, marker.current);
    } catch (cause) {
      console.error(cause);
      setError(true);
    }
    return () => {
      world.current?.dispose();
      world.current = null;
    };
  }, []);

  useEffect(() => { world.current?.select(part); }, [part]);
  useEffect(() => {
    if (!active || !part) return;
    function clearOnEscape(event) {
      if (event.key === 'Escape' && !document.querySelector('dialog[open]')) setPart('');
    }
    window.addEventListener('keydown', clearOnEscape);
    return () => window.removeEventListener('keydown', clearOnEscape);
  }, [active, part]);
  useEffect(() => { onContext(theme?.[0] || part || current.title); }, [theme, part, current, onContext]);

  function go(index) {
    setStage(index);
    setPart('');
    setTheme(null);
    setPanel('structure');
    world.current?.go(index);
  }

  const sources = stage >= 3 ? [digestionSource, tissueSource, atlasSource] : [digestionSource];

  return <main className={`explorer actinia-explorer ${active?'':'hidden'}`}>
    <section className="viewport actinia-viewport" aria-label="Exploração de Actinia">
      <div className="scene" ref={host} />
      <div className="actinia-selection-marker" ref={marker} aria-hidden="true" hidden>{part}</div>
      {error && <div className="scene-message">Não foi possível iniciar a cena 3D.</div>}
      <div className="scene-top">
        <nav className="breadcrumbs" aria-label="Escalas de Actinia">
          {stages.map(({name}, index) => <span key={name}>
            {index > 0 && <CaretRight size={12} />}
            <button aria-current={stage === index ? 'step' : undefined} className={stage === index ? 'current' : ''}
              onClick={() => go(index)}>{name}</button>
          </span>)}
        </nav>
      </div>
      <div className="scene-title actinia-title">
        <span className="eyebrow">ACTINIA · ALIMENTAÇÃO E DIGESTÃO</span>
        <h1>{stage === 0 ? <><em>Actinia</em> sp.</> : current.title}</h1>
      </div>
      <div className="scene-bottom actinia-controls">
        <button className="enter-button" onClick={() => go(stage - 1)} disabled={stage === 0}><ArrowLeft size={16} /> Voltar</button>
        <span>Arraste para girar · Clique para selecionar</span>
        <button className="enter-button" onClick={() => go(stage + 1)} disabled={stage === stages.length - 1}>Aprofundar <ArrowRight size={16} /></button>
      </div>
    </section>
    <aside className="study-panel actinia-panel">
      <div className="panel-content">
        <div className="actinia-panel-nav" aria-label="Painel de estudo">
          <button aria-pressed={panel === 'structure'} onClick={() => setPanel('structure')}>Estrutura</button>
          <button aria-pressed={panel === 'themes'} onClick={() => setPanel('themes')}>Índice de temas</button>
        </div>
        {panel === 'structure' ? <>
          <span className="eyebrow">{current.evidence}</span>
          <h2>{current.title}</h2>
          <p className="description">{guide?.location || current.description}</p>
          {part && <section className="actinia-selection" aria-live="polite">
            <span className="eyebrow">Estrutura selecionada</span>
            <div className="actinia-selection-heading"><h3>{part}</h3><button type="button" className="secondary" onClick={() => setPart('')}>Limpar seleção</button></div>
            <p>{lesson?.summary || partGuides[part] || details[part] || current.description}</p>
          </section>}
          {stage === 1 && localObservation && <p className="actinia-observation"><strong>{localObservation.title}</strong><br />{localObservation.text}</p>}
          <div className="panel-section">
            <h3>Estruturas selecionáveis</h3>
            <div className="actinia-chip-list">{parts[stage].map(name =>
              <button key={name} aria-pressed={part === name} onClick={() => setPart(selected => selected === name ? '' : name)}>
                {stage >= 3 && partColors[name] && <span className="actinia-part-swatch" style={{backgroundColor: partColors[name]}} aria-hidden="true" />}
                {name}
              </button>
            )}</div>
          </div>
          {lesson && <section className="panel-section actinia-guide" aria-label="Explicação da estrutura">
            {lesson.sections.map(([title, text]) => <div className="actinia-lesson-section" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>)}
            <details className="actinia-lesson-sources">
              <summary>Referências da ficha</summary>
              <ul>{lesson.sources.map(([label, href]) => <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">{label} ↗</a>
              </li>)}</ul>
            </details>
          </section>}
          {guide && <section className="panel-section actinia-guide">
            <h3>O que você está vendo</h3>
            <p>{guide.explanation}</p>
            <h3>Como sabemos</h3>
            <p>{guide.boundary}</p>
            <div className="actinia-figure-link">
              <FileText size={18} aria-hidden="true" />
              <div><span>Figura de referência · Nematostella vectensis</span>
                <a href={guide.figure[1]} target="_blank" rel="noreferrer">{guide.figure[0]} ↗</a>
              </div>
            </div>
          </section>}
          <div className="panel-section">
            <h3>{stage >= 3 ? 'Referências comparativas' : 'Leitura comparativa'}</h3>
            {sources.map(source => <button className="evidence-row" key={source.id} onClick={() => onReader(source)}>
              <FileText size={19} /><span><strong>{source.title}</strong><small>{source.origin}</small></span><CaretRight size={15} />
            </button>)}
          </div>
          {stage >= 3 && <button className="secondary" onClick={() => setPanel('themes')}>Ver temas celulares e moleculares</button>}
        </> : <>
          <h2>Celular e molecular</h2>
          {theme && <section className="actinia-theme-card">
            <h3>{theme[0]}</h3>
            <p>{theme[1]}</p>
            <p className="muted">{theme[3]?.origin || 'Tema do dossiê · referência primária a selecionar'}</p>
            <button className="secondary" onClick={() => { go(theme[2]); setPanel('structure'); }}>Ir para {stages[theme[2]].name}</button>
            {theme[3] && <button className="secondary" onClick={() => onReader(theme[3])}>Ver fonte</button>}
          </section>}
          {themes.map(([category, entries]) => <section key={category} className="panel-section">
            <h3>{category}</h3>
            <div className="actinia-chip-list">{entries.map(entry =>
              <button key={entry[0]} aria-pressed={theme === entry} onClick={() => setTheme(entry)}>{entry[0]}</button>
            )}</div>
          </section>)}
        </>}
      </div>
      <div className="panel-footer">
        <button className="primary" onClick={onNote}><Plus size={20} />Registrar uma ideia</button>
      </div>
    </aside>
  </main>;
}
