import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobre_mim_foto.jpg';

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Relinton!
            </h3>

            <img src={fotoSobreMim} alt="Foto de Relinton Pinheiro" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>
                Sou um Desenvolvedor Full Stack na Controladoria Geral do Estado de Rondônia, onde trabalho desde novembro de 2021. Formei-me em Sistemas de Informação pela UNIRON em 2018. Tenho dedicado meu tempo ao estudo aprofundado de C#, focando em boas práticas de programação e na escrita de código limpo. Estou comprometido em criar software robusto e de alta qualidade, seguindo os princípios do clean code. Meu foco é desenvolver aplicações em C# usando as tecnologias .NET e .NET Core, seguindo as abordagens de TDD e BDD e as boas práticas de desenvolvimento. Tenho experiência na manutenção de sistemas em produção, no uso do GitLab e do SonarQube para controle de qualidade e na aplicação da metodologia SCRUM. Busco sempre aprender, melhorar e entregar valor ao cliente, trabalhando em equipe e com flexibilidade.
            </p>
        </PostModelo>
    )
}