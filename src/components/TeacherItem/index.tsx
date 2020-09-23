import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/45502466?s=460&v=4" alt="" />
                <div>
                    <strong>Marthin Korb</strong>
                    <span>Filosofia</span>
                </div>
            </header>

        <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
           <br /><br />
           Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
           Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
           Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
        </p>

            <footer>
                <p>
                    Preço/hora: <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
