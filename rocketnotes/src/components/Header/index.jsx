import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/MathiasBergz.png" 
                    alt="Foto de perfil" 
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Mathias Bergmann</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}