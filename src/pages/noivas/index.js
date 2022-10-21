import Footer from "../../components/footer";
import Header from "../../components/header";
import './noivas.css';
import logoStudio from '../../assets/noivas/logoStudio.png';
import noivaConvidadas from '../../assets/noivas/noivaConvidadas.png';
import fotoTania from '../../assets/noivas/fotoTania.png';
import fotothay from '../../assets/noivas/fotothay.JPG';
import servicoImage from '../../assets/noivas/servicosImage.png'
import {AiOutlineInstagram } from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {TiSocialPinterest} from 'react-icons/ti';
import {GrFacebookOption} from 'react-icons/gr';
import ImageSlider from "../../components/imageSlider";


export default function Noivas(){
    return(
        <div className="noivasBack">
            <Header/>
            <div className="noivas_area">
                <div className="logoStudio_area">
                    <div className="logoStudio">
                        <img src={logoStudio}/>
                    </div>
                </div>
                <div className="noivas_section">
                    <div className="noivas_section_1">
                        <div className="img_noiva">
                            <img src={noivaConvidadas}/>
                        </div>
                        <div className="txt_noiva">
                            <h1>Quem somos nós?</h1>
                            <h3>
                                Somos uma empresa especializada na produção de Maquiagem e Penteado para casamentos
                            </h3>
                            <p>
                                Com uma equipe de excelentes
                                profissionais capacitados com as
                                técnicas mais atualizadas do
                                mercado. Estamos prontas a atendêlas para realçar os melhores pontos
                                da beleza e particularidades, para
                                agregar ao visagismo necessário para
                                um dia tão importante..
                            </p>
                        </div>
                    </div>
                    <div className="noivas_section_2">
                        <div className="txt_noiva2">
                            <h1>THAYSA LUCENA</h1>
                            <h3>
                                Olá, eu sou a Thay, cofundadora do Studio Lucenas e
                                responsável pela equipe de penteados. Sou especialista em
                                noivas e em penteados sociais.
                            </h3>
                            <p>
                                Iremos criar o seu penteado juntas, baseado no seu estilo,
                                na sua festa, vestido e inspirações, além de analisar
                                cuidadosamente os seus fios e o efeito que ele
                                proporciona para valorizar o seu rosto. Nele deve estar
                                assinado a sua IDENTIDADE. Será um PENTEADO
                                ÚNICO e EXCLUSIVO, pensando na qualidade, conforto
                                e durabilidade para um casamento à beira mar.
                            </p>
                            <p>
                                Cada tipo de cabelo merece um cuidado especial e uma
                                especialista para entender qual procedimento será ideal
                                para a construção do seu penteado. Não há limites para a
                                criação; você pode ser cacheada, ondulada, cabelos lisos,
                                finos ou grossos.. Temos uma infinidade de possibilidades
                                e uma única certeza: QUALIDADE NO SERVIÇO e
                                CUIDADO COM SEUS FIOS.
                            </p>
                            <div className="links_socialMedia_area">
                                <label>Sigam-me nas redes sociais</label>
                                <ul>
                                    <li><a href='https://www.instagram.com/thaylucenapenteados/'><AiOutlineInstagram className='inst' color='#FFF' size={35}/></a></li>
                                    <li><a href='https://br.pinterest.com/thaysaalves/'><TiSocialPinterest className='pint' color='#FFF' size={35}/></a></li>
                                    <li><a href='https://www.facebook.com/thaylucenapenteado/'><GrFacebookOption className='face' color='#FFF' size={35}/></a></li>
                                    <a className="linkWhats" href="https://wa.me/message/JAF2C2YLLJEWG1">Solicitar Orçamento<BsWhatsapp color="#FFF" size={25}/></a>
                                </ul>
                            </div>
                            
                            
                        </div>
                        <div className="img_perfil">
                            <img src={fotothay}/>
                        </div>
                    </div>    
                    <div className="noivas_section_3">
                        <div className="img_perfil">
                            <img src={fotoTania}/>
                        </div>
                        <div className="txt_noiva2">
                            <h1>TANIA LUCENA</h1>
                            <h3>
                                Olá, eu sou a Tânia, cofundadora do Studio Lucenas,
                                responsável pela equipe de maquiagens.
                            </h3>
                            <p>
                                Sou especialista em maquiagens para noivas, tenho como
                                ponto essencial a LEVEZA no toque, RESISTÊNCIA A
                                LÁGRIMAS e DURABILIDADE.
                            </p>
                            <p>
                                Em um momento único onde todas as atenções são
                                voltadas para a noiva e a produção será eternizada de
                                gerações a gerações, é necessária uma maquiagem que
                                fique perfeita do início ao fim da festa. Para isso é
                                utilizado os melhores produtos do mercado próprios para
                                noivas e a prova de lágrimas, suor... Tudo o que um clima
                                quente e úmido dificulta.
                            </p>
                            <p>
                                A maquiagem será criada de acordo com suas inspirações
                                e com o estilo que você deseja, sendo adaptada aos seus
                                traços para VALORIZAR A SUA BELEZA.
                            </p>
                            <div className="links_socialMedia_area">
                                <label>Sigam-me nas redes sociais</label>
                                <ul>
                                    <li><a href='https://www.instagram.com/tanialucenamakeup/'><AiOutlineInstagram className='inst' color='#FFF' size={35}/></a></li>
                                    <li><a href='https:https://www.facebook.com/www.taniamakeup.com.br'><GrFacebookOption className='face' color='#FFF' size={35}/></a></li>
                                    <a className="linkWhats" href="https://wa.me/message/JAF2C2YLLJEWG1">Solicitar Orçamento<BsWhatsapp color="#FFF" size={25}/></a>
                                </ul>
                            </div>
                        </div>   
                    </div>                
                </div>
                <div className="servicos">
                    <div className="servicos_section">
                        
                        <div className="servicos_section_txt">
                            <h3>DIA DA NOIVA</h3>
                            <p>
                                É a produção de maquiagem e
                                penteado para o dia oficial do
                                casamento. Nele organizaremos o
                                horário para cada momento do seu
                                grande dia como alimentação,
                                fotos de making off, entrega do
                                buquê... tudo calculado para a
                                PONTUALIDADE na entrega.
                            </p>
                        </div>
                        <div className="servicos_section_txt">
                            <h3>ACOMPANHAMENTO</h3>
                            <p>
                                É quando vamos aos local da festa
                                para fazer retoque de maquiagem e
                                penteado, ou também a troca do
                                look por uma maquiagem mais
                                forte e um penteado mais preso,
                                por exemplo. Ideal para as noivas
                                que desejam mudar de look após a
                                cerimônia.
                            </p>
                        </div>
                        <div className="servicos_section_txt">
                            <h3>PROVE/TESTE</h3>
                            <p>
                                É quando fazemos a simulação
                                da produção para o dia da
                                noiva. Neste caso agendamos
                                com antecedência para ser
                                feito um teste em Maceió ou
                                Milagres. Ideal para quem
                                deseja se sentir mais segura ou
                                está em dúvida nas escolhas da
                                produção.
                            </p>
                        </div>
                        <div className="servicos_section_txt">
                            <h3>PRÉ-WEDDING</h3>
                            <p>
                                Produção de
                                maquaigem e penteado
                                antes do casamento
                                para fotos ou welcome
                                party.
                            </p>
                        </div>
                        
                    </div>
                    <div className="img_perfil">
                        <img src={servicoImage}/>
                    </div>    
                </div>
                <div className="imageSlider_noivas">
                    <h1>Inspirações</h1>
                    <div className="imageSlider_noivas_area">
                        
                        <ImageSlider/>
                        
                    </div>
                    <p>Garanta sua data com antecedência <a href="https://wa.me/message/JAF2C2YLLJEWG1">➡Clicando aqui⬅</a></p>
                </div>
                

            </div>
            
            <Footer/>
        </div>
    )
}