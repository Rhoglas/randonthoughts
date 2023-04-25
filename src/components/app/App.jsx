import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
// import RandomAnime from "./functions/RandomAnime";
import SearchAnime from "./functions/SearchAnime";
import SearchPerson from "./functions/SearchPerson";
import Instruction from "./functions/Instruction";

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleInputChange1 = (e) => {
    setIsChecked1(e.target.checked);
  };
  const handleInputChange2 = (e) => {
    setIsChecked2(e.target.checked);
  };

  const disabled1 = isChecked2 === true;
  const disabled2 = isChecked1 === true;

  return (
    <div className='App'>
      <header>
        <div>
          <img
            className='icon-logo'
            src='/icon.svg'
          />
          <h3>Random Thoughts</h3>
        </div>
        <a
          href='https://github.com/Rhoglas/randonthoughts.git'
          target='_blank'
        >
          <BsGithub
            color='#242424'
            size={48}
          />
        </a>
      </header>
      <main>
        <div className='cont00'>
          <Instruction />
          <div className='options'>
            <div className='cont-input'>
              <label>
                <input
                  className='input-check'
                  type='checkbox'
                  checked={isChecked1}
                  disabled={disabled1}
                  onChange={handleInputChange1}
                />
                Anime
              </label>
              <label>
                <input
                  className='input-check'
                  type='checkbox'
                  checked={isChecked2}
                  disabled={disabled2}
                  onChange={handleInputChange2}
                />
                Personagem
              </label>
            </div>
            <div className='cont-thoughts'>
              {isChecked1 && (
                <div>
                  <SearchAnime />
                </div>
              )}
              {isChecked2 && (
                <div>
                  <SearchPerson />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Create{" "}
          <a
            href='http://kelrho.com.br'
            target='_blank'
          >
            {" "}
            @Rhoglas 💕
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
