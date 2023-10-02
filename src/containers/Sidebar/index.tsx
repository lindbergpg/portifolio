import Avatar from '../../conponents/Avatar'
import Paragrafo from '../../conponents/Paragrafo'
import Titulo from '../../conponents/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Lindberg Pereira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        lindbergpg
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
