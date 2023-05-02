import { Container, Links } from './styles.js'

import { Button } from '../../components/button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export function Details() {
  return(
    <Container> 
      <Header />
      <Section title="Links uteis">
        <Links>
          <li><a href="#">Link 1</a></li>          
          <li><a href="#">Link 1</a></li>          
        </Links>
      </Section>
      <Section title="Links uteis">
        <Links>
          <li><a href="#">Link 1</a></li>          
          <li><a href="#">Link 1</a></li>          
        </Links>
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}