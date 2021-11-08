import { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import './App.css';

import { Layout } from 'antd';

const { Content, Footer } = Layout;

function ShowMagic() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <Layout>
      <Content>
        <div className="App">
          { show && <h1>{ magicNumber }</h1> }
          <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber}
            show={show}
            setShow={setShow}
          />
          <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber} 
            amount={5}
            show={show}
            setShow={setShow}
          />
          <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber} 
            amount={25}
            show={show}
            setShow={setShow}
          />
          <Greeting name="Rene" age="21"/>
      </div>
    </Content>
      
    </Layout>
    
  );
}

export default ShowMagic;
