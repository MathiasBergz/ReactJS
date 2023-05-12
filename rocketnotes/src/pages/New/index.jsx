import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <h2>Criar nota</h2>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links uteis" >
                        <NoteItem value="htpps//app.rocketseat.com.br"/>
                        <NoteItem 
                        isNew
                        placeholder="Novo link"
                        />
                    </Section>

                    <Section title="Marcadores" >
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem 
                            isNew
                            placeholder="Novo marcador"
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}