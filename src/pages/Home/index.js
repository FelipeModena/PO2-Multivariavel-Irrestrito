import React from 'react';
import './styles.css';
import 'materialize-css';
import { Row, CardPanel, Col, } from 'react-materialize';


export default function Home() {
    return (
        <div class='home'>
            <Row>
                <div class='container'>
                    <CardPanel>
                        <Row style={{ textAlign: "justify" }}>
                            <Col s={12} m={12} l={12}>
                                <h1 style={{ textAlign: "center", fontWeight: "bold" }} className="green text-darken-1">Trabalho de Pesquisa Operacional II </h1>
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <h3 style={{ fontWeight: "bold" }}>Sobre o trabalho</h3>
                            </Col>
                            <Col s={12} m={12} l={12}>
                                <h6>Este trabalho objetiva a resolução de problemas envolvendo funções não-lineares multivariáveis irrestritas pelos métodos:</h6>
                            </Col>
                            <Col s={11} m={11} l={11} offset="s1 m1 l1">

                                <h6><p>● Davidon-Fletcher-Powell</p></h6>
                                <h6><p>● Fletcher And Reeves</p></h6>
                                <h6><p>● Gradiente</p></h6>
                                <h6><p>● Hooke And Jeeves</p></h6>
                                <h6><p>● Newton</p></h6>
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <h3 style={{ fontWeight: "bold" }}>Alunos</h3>
                            </Col>
                                    <h1>Felipe Kroitor Cara Modena</h1>
                                    <p>RA: </p>

                                    <h1>Caio Regal</h1>
                                    <p>RA:</p>
                        </Row>
                    </CardPanel>

                </div>
            </Row>
        </div>
    );
}