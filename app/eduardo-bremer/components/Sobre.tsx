import Image from "next/image";
import { IMG, aboutTags, formation } from "../data";

export function Sobre() {
  return (
    <section id="sobre" className="section dark" aria-label="Sobre Dr. Eduardo Bremer">
      <div className="wrap about">
        <div className="aboutPhoto" data-reveal="left">
          <Image
            src={IMG.sobre}
            alt="Dr. Eduardo Bremer em retrato profissional"
            fill
            sizes="(max-width: 980px) 100vw, 44vw"
            loading="eager"
          />
        </div>
        <div className="aboutContent" data-reveal="right">
          <span className="label">Sobre</span>
          <h2 className="title">Dr. Eduardo Bremer</h2>
          <p className="bio">
            Advogado inscrito na OAB/ES 37.747 e OAB/BA 83.916, com atuação
            nas áreas Criminal, Cível, Trabalhista e Previdenciária. Seu
            trabalho combina técnica, escuta e comunicação acessível para
            orientar pessoas em decisões jurídicas relevantes.
          </p>
          <p className="bio">
            Atendimento presencial em Mucuri/BA, Teixeira de Freitas/BA e
            Vitória/ES, e online para todo o Brasil.
          </p>
          <div className="formation">
            <span className="formationLabel">Formação</span>
            <ul className="formationList">
              {formation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tags">
            {aboutTags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
