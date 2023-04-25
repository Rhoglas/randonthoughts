import React from "react";
import { AiOutlineCode } from "react-icons/ai";

const Instruction = () => {
  return (
    <aside className='instructions'>
      <h1 className='h-title'>Para que serve essa ferramenta?</h1>
      <ul>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              Essa ferramenta consome uma API que gera citações aleatórias de
              animes{" "}
              <a
                target='_blank'
                href='https://animechan.vercel.app/'
              >
                " Animechan "
              </a>{" "}
              e nela foi baseada a interface amigavel e de fácil utilização
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              Nela você pode encontrar inspirações e frases favoritas dos seus
              animes preferidos.
            </p>
          </span>
        </li>
      </ul>
      <h1>Como usar a ferramenta?</h1>
      <ul>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              1º - Clique no checkbox de sua preferência
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              2º - Escreva no input o NOME DO ANIME ou o NOME DO PERSONAGEM que
              você desejar.
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              3º - Clique no botão de gerar e a citação será mostrada na tela.
            </p>
          </span>
        </li>
      </ul>
      <h1>Observações !</h1>
      <ul>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              Será gerada uma sitação em inglês, aconselho que use o tradutor
              caso não possua conhecimentos sólidos em inglês
            </p>
          </span>
        </li>
        <li>
          <span>
            <p>
              <AiOutlineCode
                className='icon'
                color='#0ea394'
                size={20}
              />
              Certifique-se de inserir o nome do personagem ou anime
              corretamente, caso contrário não será possível fazer a pesquisa!
            </p>
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Instruction;
