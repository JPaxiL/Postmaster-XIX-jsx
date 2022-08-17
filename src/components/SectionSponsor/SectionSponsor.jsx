import React from "react";

import alienware from "../../assets/img/sponsors/alienware.svg"
import asus from "../../assets/img/sponsors/asus.svg"
import msi from "../../assets/img/sponsors/msi.svg"
import nvidia from "../../assets/img/sponsors/nvidia.svg"

import "./SectionSponsor.css"

const SectionSponsor = () => {
  return (
    <section class="section-auspiciadores" id="auspiciadores">
      <div class="title-section flx-j-c title-section--gapmin">
        <h2 class="title-section__h2 title-section__h2--white">
          Nuestros Auspiciadores
        </h2>
        <p class="title-section__p title-section__p--white">
          <span class="lined lined--white"></span>LIDERES EN LA INDUSTRIA
        </p>
      </div>
      <div class="auspiciadores section-l">
        <a class="auspiciadores__link" href="#">
          <img src={alienware} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={asus} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={msi} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={nvidia} alt="" />
        </a>

        <a class="auspiciadores__link" href="#">
          <img src={nvidia} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={msi} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={asus} alt="" />
        </a>
        <a class="auspiciadores__link" href="#">
          <img src={alienware} alt="" />
        </a>
      </div>
    </section>
  );
};

export default SectionSponsor;
