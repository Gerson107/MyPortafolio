import  React, {useContext} from 'react';
import es from './../assets/espana.png';
import en from './../assets/reino-unido.png';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../context/langContext';


const Header = () => {

  const handleClick = () => {
      window.location.href = 'https://github.com/Gerson107';
  };
  const lenguages = useContext(langContext);

  return (
    <header className='mt-10' id="homet">
      <div className='container mx-auto flex  justify-between items-center'>
        <div className='flex justify-between items-center'>
          <a className='text-gradient text-[35px]' href='#homet'>
            <FormattedMessage
            id="header.title"
            defaultMessage="Dani Dev"/>
          </a>
        </div>
        <div className='flex flex-wrap justify-center gap-y-3'>
        <button onClick={() => lenguages.initLenguaje('es-MX')}><img className='h-7 w-7 mr-2 ' src={es} alt="espana"/></button>
					<button onClick={() => lenguages.initLenguaje('en-US')}><img className='h-7 w-7' src={en} alt="ingla"/></button>
        <button onClick={handleClick} className='btn btn-sm ml-4 '>
        <FormattedMessage
            id="header.button"
            defaultMessage="Work With me"/>
          </button>
        
        </div>
      </div>
    </header>
  )
};

export default Header;
