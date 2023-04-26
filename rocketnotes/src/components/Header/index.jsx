import { Container, Profile } from "./style";

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                    src="https://https://github.com/MathiasBergz.png" 
                    alt="Foto de perfil" 
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Mathias Bergmann</strong>
                </div>
            </Profile>
        </Container>
    )
}