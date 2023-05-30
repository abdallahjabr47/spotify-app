import React, { useState } from 'react';
import Navbar from './Navbar';

function SearchPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    if (pageNumber > 1
      ) {
      setPageNumber(pageNumber - 1);
      console.log('Previous button clicked');
    }
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
    console.log('Next button clicked');
  };

  return (
    <>
      <Navbar
        pageNumber={pageNumber}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      {/* <Search pageNumber={pageNumber} /> */}
    </>
  );
}

export default SearchPage;
