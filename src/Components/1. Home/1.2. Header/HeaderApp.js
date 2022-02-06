import React from "react";
import "./HeaderApp.css";
import {Carousel} from "react-bootstrap";

const HeaderApp = () => {
  return (
    <div>
      <div className="headerx1">
        <div className="left_part">
          <div className="max_left">
            <div className="tittle_left">
              <p>Dolce Profumo</p>
            </div>

            <div className="sentence_left">
              <p>Líderes en fragancias y perfumes a nivel mundial</p>
            </div>

            <div className="text_left">
              <p>
                Somos una empresa que brinda perfumes de alta calidad, de
                diversas marcas a precios accesibles para nuestros clientes.
                Tenemos diferentes puntos en diversas partes del mundo para
                hacer posible la entrega rápida de nuestros productos.
              </p>
            </div>

            <div className="buttom_left">
              <button classname='buto'>Contáctanos</button>
            </div>
          </div>
        </div>

        <div className="right_part">
          
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imag"
                src="https://www.bellezapura.com/wp-content/uploads/2021/02/perfumes-m%C3%A1s-originales.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="one">Calidad</h3>
                <p className="one">
                  Perfumes y fragancias de excelente calidad
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imag"
                src="https://www.sabinastore.com/img/cms/perfume-de-verano-de-mujer.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="two">Belleza</h3>
                <p className="two">
                  Complementa tu belleza con nuestros perfumes
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imag"
                src="https://www.perfumeriabenegas.com/imagenes/magazine/ChanelDansLeChamps20190823M.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="three"></h3>
                <p className="three">
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
