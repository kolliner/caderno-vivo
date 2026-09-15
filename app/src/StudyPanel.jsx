import {Books,Plus,FileText,CaretRight,ArrowRight} from '@phosphor-icons/react';
import {structureDescriptions,morphologySources} from './morphology-sources';

export function StudyPanel({stage,selected,detail,structures,suggested,notes,onSelect,onFront,onNextFront,onBackToNetwork,onReader,onNotebook,onNote,report}) {
  return <aside className="study-panel">
    <div className="panel-content">
      <span className="eyebrow">CONTEXTO DE ESTUDO</span>
      <h2>{selected||detail.title}</h2>
      <p className="description">{structureDescriptions[selected]||detail.description}</p>
      {selected==='Frente de expansão'&&<section className="panel-section structure-guide" aria-label="Estudo da frente de expansão">
        <div className="guide-actions"><button className="secondary" onClick={onFront}>Aproximar frente</button><button className="secondary" onClick={onNextFront}>Outra frente</button><button className="secondary" onClick={onBackToNetwork}>Voltar à rede</button></div>
        <h3>O que é?</h3><p>Região frontal em lâmina do plasmódio, ligada à rede de tubos. Os leques representam essa região de uma mesma célula.</p>
        <h3>Do que é composta?</h3><p>Citoplasma com uma fase fluida (endoplasma) e uma rede de filamentos de actina (ectoplasma). A contração envolve actina e miosina.</p>
        <h3>Como se comporta?</h3><p>Contrações geram diferenças de pressão e movimentam o citoplasma. Na região frontal, canais de fluxo podem se formar e dar origem a tubos. O artigo investiga esse processo com observações e um modelo matemático.</p>
        <button className="guide-source" onClick={()=>onReader(morphologySources[1])}>Guy et al. · 2011 — introdução e Fig. 1 ↗</button>
        <p className="guide-limit">Aqui você pode aproximar e percorrer os leques. A formação de canais não está animada e o interior da frente ainda não foi modelado.</p>
      </section>}
      <div className="panel-section">
        <h3>Estruturas {stage===3?'visíveis':'para explorar'}</h3>
        <div className="structure-list">
          {structures.map(([Icon,name,description])=><button key={name} className={selected===name?'selected':''} onClick={()=>onSelect(name)}>
            <span className="structure-icon"><Icon size={24} weight="duotone"/></span>
            <span><strong>{name}</strong><small>{description}</small></span>
            <CaretRight size={15}/>
          </button>)}
        </div>
      </div>
      <div className="panel-section">
        <h3>Fontes relacionadas</h3>
        <p className="section-note">Abra a fonte para ver a procedência e o escopo da consulta.</p>
        {suggested.map(source=><button className="evidence-row" key={source.id} onClick={()=>onReader(source)}>
          <FileText size={22}/>
          <span><strong>{source.shortTitle||source.title.replace(/\*/g,'').split('. ')[0]}</strong><small>{source.topic||(/Tong/.test(source.title)?'Núcleos e transporte':/Schaap/.test(source.title)?'Genoma e sinalização':'Genoma mitocondrial')}</small></span>
          <CaretRight size={15}/>
        </button>)}
      </div>
      <div className="panel-section personal">
        <h3>Seu caderno neste contexto</h3>
        <p>{notes.filter(n=>n.context===(selected||detail.title)).length} registros relacionados</p>
        <button className="text-button" onClick={onNotebook}>Abrir caderno <ArrowRight size={15}/></button>
      </div>
    </div>
    <div className="panel-footer">
      {report&&<button className="primary" onClick={()=>onReader(report)}><Books size={19}/>Ler relatório-base</button>}
      <button className="secondary" onClick={onNote}><Plus size={20}/>Registrar uma ideia</button>
    </div>
  </aside>;
}
