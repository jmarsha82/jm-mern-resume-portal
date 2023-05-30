import * as React from 'react';

const DevBooksDetails = ({ devBook }) => {
  return (
    <div className="devbooks-details">
      <h4>{devBook.title}</h4>
    </div>
  )
}

export default DevBooksDetails