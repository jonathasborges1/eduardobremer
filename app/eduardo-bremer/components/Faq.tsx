import { Plus } from "lucide-react";
import { faq } from "../data";

export function Faq() {
  return (
    <section id="faq" className="section dark" aria-label="Dúvidas frequentes">
      <div className="wrap">
        <div className="sectionHead" data-reveal="">
          <div className="sectionHeadText">
            <span className="label">Dúvidas frequentes</span>
            <h2 className="title">Perguntas comuns, respostas claras.</h2>
          </div>
          <p className="lead">
            Respostas informativas, em tese, sobre temas trabalhistas,
            criminais, cíveis e previdenciários. Para análise do seu caso
            concreto, entre em contato.
          </p>
        </div>
        <div className="faqList">
          {faq.map((item, i) => (
            <details
              className="faqItem"
              key={item.q}
              data-reveal=""
              data-delay={String((i % 2) * 80)}
            >
              <summary>
                {item.q}
                <Plus size={16} className="faqIcon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
