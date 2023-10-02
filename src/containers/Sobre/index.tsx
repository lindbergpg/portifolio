import Titulo from '../../conponents/Titulo'
import Paragrafo from '../../conponents/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, iParagrafosum dolor sit amet consectetur adipisicing elit. Commodi,
      inventore odit dolorem ut minima voluptatem animi harum. Neque enim amet
      corporis repellendus omnis, id a, consequatur quasi tempora laboriosam
      voluptates.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lindbergpg&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lindbergpg&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
