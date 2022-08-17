import React from 'react'

import ponente from "../../assets/img/speakers/ponente.jpg"
import iconFacebook from "../../assets/img/icons/icon-facebook-purple.svg"
import iconTwitter from "../../assets/img/icons/icon-twitter-purple.svg"
import iconLinkedin from "../../assets/img/icons/icon-linkedin-purple.svg"

import "./SectionSpeakers.css"

const SectionSpeakers = () => {
  return (
    <section class="section-ponentes" id="ponentes">
    <div class="title-section flx-j-c">
      <h2 class="title-section__h2">Los Ponentes</h2>
      <p class="title-section__p">04 <span class="lined"></span> EXPERTOS DESTACADOS EN LA INDUSTRIA</p>
    </div>
    <div class="section-ponentes__cards  section-l">
      <article class="ponente">
        <div class="ponente__ocupacion">
          <div class="flx-a-c">01 <span></span> Analista de datos</div>
        </div>
        <div class="ponente__img">
          <img src={ponente} alt="ponente" />
        </div>
        <div class="ponente__info">
          <h2 class="ponente__name">Manuel Cotrado</h2>
          <p class="ponente__tema">&lt; Building Data Driven Companies &gt;</p>
          <p class="ponente__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            nobis architecto voluptate recusandae facere, commodi tempore
            eos nemo reprehenderit, accusantium deserunt dolore iure enim
            eligendi incidunt? Laborum beatae maiores quae?
          </p>
          <div class="ponente__redess flx-a-c">
            Redes_sociales = 
            <a class="icon__s" href="./#">
              <img
                src={iconFacebook}
                alt="iconFacebook"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconTwitter}
                alt="iconTwitter"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconLinkedin}
                alt="iconLinkedin"
              /> </a>
          </div>
        </div>
      </article>
      <article class="ponente">
        <div class="ponente__ocupacion">
          <div class="flx-a-c">01 <span></span> Analista de datos</div>
        </div>
        <div class="ponente__img">
          <img src={ponente} alt="ponente" />
        </div>
        <div class="ponente__info">
          <h2 class="ponente__name">Manuel Cotrado</h2>
          <p class="ponente__tema">&lt; Building Data Driven Companies &gt;</p>
          <p class="ponente__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            nobis architecto voluptate recusandae facere, commodi tempore
            eos nemo reprehenderit, accusantium deserunt dolore iure enim
            eligendi incidunt? Laborum beatae maiores quae?
          </p>
          <div class="ponente__redess flx-a-c">
            Redes_sociales = 
            <a class="icon__s" href="./#">
              <img
                src={iconFacebook}
                alt="iconFacebook"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconTwitter}
                alt="iconTwitter"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconLinkedin}
                alt="iconLinkedin"
              /> </a>
          </div>
        </div>
      </article>
      <article class="ponente">
        <div class="ponente__ocupacion">
          <div class="flx-a-c">01 <span></span> Analista de datos</div>
        </div>
        <div class="ponente__img">
          <img src={ponente} alt="ponente" />
        </div>
        <div class="ponente__info">
          <h2 class="ponente__name">Manuel Cotrado</h2>
          <p class="ponente__tema">&lt; Building Data Driven Companies &gt;</p>
          <p class="ponente__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            nobis architecto voluptate recusandae facere, commodi tempore
            eos nemo reprehenderit, accusantium deserunt dolore iure enim
            eligendi incidunt? Laborum beatae maiores quae?
          </p>
          <div class="ponente__redess flx-a-c">
            Redes_sociales = 
            <a class="icon__s" href="./#">
              <img
                src={iconFacebook}
                alt="iconFacebook"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconTwitter}
                alt="iconTwitter"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconLinkedin}
                alt="iconLinkedin"
              /> </a>
          </div>
        </div>
      </article>
      <article class="ponente">
        <div class="ponente__ocupacion">
          <div class="flx-a-c">01 <span></span> Analista de datos</div>
        </div>
        <div class="ponente__img">
          <img src={ponente} alt="ponente" />
        </div>
        <div class="ponente__info">
          <h2 class="ponente__name">Manuel Cotrado</h2>
          <p class="ponente__tema">&lt; Building Data Driven Companies &gt;</p>
          <p class="ponente__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            nobis architecto voluptate recusandae facere, commodi tempore
            eos nemo reprehenderit, accusantium deserunt dolore iure enim
            eligendi incidunt? Laborum beatae maiores quae?
          </p>
          <div class="ponente__redess flx-a-c">
            Redes_sociales = 
            <a class="icon__s" href="./#">
              <img
                src={iconFacebook}
                alt="iconFacebook"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconTwitter}
                alt="iconTwitter"
              /> </a>,
            <a class="icon__s" href="./#">
              <img
                src={iconLinkedin}
                alt="iconLinkedin"
              /> </a>
          </div>
        </div>
      </article>
    </div>
  </section>
  )
}

export default SectionSpeakers