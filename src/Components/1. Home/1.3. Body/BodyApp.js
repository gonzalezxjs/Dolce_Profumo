import React from "react";
import { Card, Button } from "react-bootstrap";
import "./BodyApp.css";
import sec from '../../../images/g.png'

const BodyApp = () => {
  return (
    <div className="Big">
      <div className="small">
        <div className="tittle">
          <h2>Más que una perfumería</h2>
        </div>

        <div class="secc">
          <div class="secc_left">

            <div className="titulo">
              <h1>Nuestros productos</h1>
            </div>
            

            <div class="parrafos">
              
              <p class='especial'>
                Usamos perfume para sentirnos mejor. Más atractivos. Con más
                confianza. Nos permiten recobrar sensaciones y recuerdos. Es por
                ello que fabricamos los mejores perfumes y fragancias, con
                excelente calidad y concentración, así como también contamos con
                productos de marcas reconocidas como lo son TOMMY HILFIGER, PACO
                RABANNE, CAROLINA HERRERA, DIOR, entre otras. Su aroma se
                conservará por horas, e incluso días.
              </p>
              
              <p>Contamos con distintas clases de perfumes según la ocasión.</p>
              
              <p>
                Contamos con servicio contraentrega a nivel nacional<br></br> y envíos a más de 100 países.
              </p>
              
              <p>Somos los mejores en el mercado a nivel nacional.</p>

              <div class='imagen'>

                <img class='secure' src={sec} />
                
              </div>
            
            </div>
          </div>

          <div class="secc_right">
            
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.semana.com/resizer/7vRvuQfzzXPBTpbXYLWFQ84n7J0=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/VNR33KD6S5AXBFFFUSGK45C53U.jpg" />
              <Card.Body>
                <Card.Title>Nuestros perfumes</Card.Title>
                <Card.Text>
                  Mira nuestro catalogo de perfumes artesanales.
                </Card.Text>
                <Button variant="primary">Ver catalogo</Button>
              </Card.Body>
            </Card>
            <br></br>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://www.ecestaticos.com/imagestatic/clipping/353/d9e/353d9e4b4732f9802124c3090ed4b601/los-hombres-espanoles-gastan-un-7-mas-en-perfume-y-estas-son-sus-marcas-preferidas.jpg?mtime=1622652981" />
              <Card.Body>
                <Card.Title>Marcas reconocidas</Card.Title>
                <Card.Text>
                  Mira el catalogo de perfumes de las marcas más reconocidas.
                </Card.Text>
                <Button variant="primary">Ver catalogo</Button>
              </Card.Body>
            </Card>
            <br></br>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://preyco.com.co/wp-content/uploads/2019/06/envio-min.png" />
              <Card.Body>
                <Card.Title>Envíos fuera del país</Card.Title>
                <Card.Text>
                  Aquí podrás ver la lista de países a los que realizamos envios. (Más de 100)
                </Card.Text>
                <Button variant="primary">Ver lista de paises</Button>
              </Card.Body>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyApp;

