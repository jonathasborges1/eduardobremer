import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { IMG, WA, areas } from "../data";

export function Especialidades() {
  return (
    <section id="especialidades" className="section dark" aria-label="Especialidades">
      <div className="wrap especialidadesWrap">
        <div className="especialidadesPhoto" data-reveal="left">
          <Image
            src={IMG.atuacoes}
            alt="Dr. Eduardo Bremer — áreas de atuação"
            fill
            sizes="(max-width: 980px) 100vw, 36vw"
          />
        </div>
        <div className="especialidadesContent">
          <div className="sectionHead" data-reveal="">
            <div className="sectionHeadText">
              <span className="label">Especialidades</span>
              <h2 className="title">
                Problemas reais pedem resposta jurídica clara.
              </h2>
            </div>
            <p className="lead">
              Atuação em áreas que exigem atenção, estratégia e
              acompanhamento profissional desde o primeiro contato.
            </p>
          </div>
          <div className="especialidadesPhotoMobile" aria-hidden="true">
            <Image
              src={IMG.atuacoes}
              alt=""
              fill
              sizes="(max-width: 980px) calc(100vw - 28px), 1px"
            />
          </div>
          <div className="areaGrid">
            {areas.map(({ Icon, title, text }, i) => (
              <article
                className="area"
                key={title}
                data-reveal=""
                data-delay={String(i * 80)}
              >
                <div className="areaIcon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={WA} target="_blank" rel="noreferrer">
                  Solicitar orientação <ChevronRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
