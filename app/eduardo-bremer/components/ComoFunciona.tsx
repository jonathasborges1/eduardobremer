import { process } from "../data";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section dark" aria-label="Como funciona o atendimento">
      <div className="wrap">
        <div className="sectionHead" data-reveal="">
          <div className="sectionHeadText">
            <span className="label">Como funciona</span>
            <h2 className="title">
              Um caminho simples para entender o seu caso.
            </h2>
          </div>
          <p className="lead">
            Do primeiro contato ao encaminhamento, o atendimento segue com
            escuta, análise e orientação clara sobre os próximos passos.
          </p>
        </div>
        <div className="processGrid">
          {process.map(([n, title, text], i) => (
            <article
              className="step"
              key={n}
              data-reveal=""
              data-delay={String(i * 120)}
            >
              <div className="stepNum">{n}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
