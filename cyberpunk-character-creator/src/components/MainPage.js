import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import CreationStep from './CreationStep';
import { Panel } from 'primereact/panel';


function MainPage() {
  return (
    <container>
      <div className='col-md-5'>
        <CreationStep></CreationStep>
      </div>
    </container>

  );
}

export default MainPage;
