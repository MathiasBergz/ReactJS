import { Container, Links, Content } from './styles.js'

import { Button } from '../../components/button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return(
    <Container> 
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          
          <Section title="Links uteis">
            <Links>
              <li><a href="#">Link 1</a></li>          
              <li><a href="#">Link 1</a></li>          
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tags title="express"/>
            <Tags title="nodejs"/>
          </Section>
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}