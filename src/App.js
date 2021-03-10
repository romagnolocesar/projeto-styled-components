import React from 'react';
import {Container, Header, BemVindo} from './styles';

function App() {
  return (
    <Container>
      <Header>
          <a className="titulo">Projeto Styled</a>
      </Header>
      <BemVindo cor="FF0000" tamanho={35}>
        Bem-vindo ao sistema!
      </BemVindo>
    </Container>
  );
}

export default App;

/* <div className="container">
<header className="header">
  
</header>

</div> */