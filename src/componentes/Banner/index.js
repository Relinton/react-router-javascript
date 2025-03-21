import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/relinton_pinheiro.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao menu espaço pessoal! Eu sou Relinton Pinheiro.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                src={circuloColorido} 
                aria-hidden={true} alt='imagem de circulo colorido'/>

                <img className={styles.minhaFoto}
                src={minhaFoto} alt='Foto de Relinton Pinheiro'/>
            </div>
        </div>
    )
}