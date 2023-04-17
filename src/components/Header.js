import  React from 'react';



const Header = () => {

  const handleClick = () => {
      window.location.href = 'https://github.com/Gerson107'
  };
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a className='text-gradient text-[35px]' href='#homet'>
            DANI DEV
          </a>
        
            <button  onClick={handleClick} className='btn btn-sm'>
            Work with me
          </button>
            
          
        </div>
      </div>
    </header>
  )
};

export default Header;
