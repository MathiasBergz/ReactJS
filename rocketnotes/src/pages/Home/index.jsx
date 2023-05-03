import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="Reactjs"/></li>
                <li><ButtonText title="Node"/></li>                
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Content>

            </Content>
            <NewNotes>
                <FiPlus/>
                Criar nota
            </NewNotes>
        </Container>
    )
}