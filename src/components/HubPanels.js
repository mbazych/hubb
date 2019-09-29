import React, { Component } from 'react';
import {  Card, Button } from 'react-bootstrap'
import './HubPanels.css';

import { Link } from 'react-router-dom';




const HubPanel = (props) => (
            <Card className="HubPanel" style={{width: '30rem'}}>
                <Card.Img className="Zdjecie" variant="top"  src={props.src}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Link to={props.link}>
                    <Button variant="primary">Przejdź do apki</Button>
                    </Link>
                </Card.Body>
            </Card>

        );


export default HubPanel
