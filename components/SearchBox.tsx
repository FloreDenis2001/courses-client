import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
    setQuery('');
  };

  return (
    <div className='relative lg:flex items-center hidden '>
      {!isOpen && (
        <button 
          onClick={toggleSearchBox} 
          className='flex items-center space-x-2 text-primary focus:outline-none'
        >
          <FontAwesomeIcon icon={faSearch} className='w-5 h-5' />
        </button>
      )}
      
      {isOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '170px', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='flex items-center bg-white border border-gray-300  rounded-full shadow-lg'
        >
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='px-4 py-2 w-full rounded-full focus:outline-none'
            placeholder='Search...'
          />
          <button 
            onClick={toggleSearchBox} 
            className='px-2 text-gray-600 hover:text-primary focus:outline-none'
          >
            <FontAwesomeIcon icon={faX} className='w-3 h-3' />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBox;