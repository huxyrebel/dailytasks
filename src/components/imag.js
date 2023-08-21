import React from 'react';
import '../components/imag.css';

function Image() {
  return (
    <div class="container d-flex justify-content-center ">
      <div class="row">
        <div class="col-lg-4">
          <img
            src="https://static1.bigstockphoto.com/0/0/2/large1500/200681653.jpg"
            alt="Table Full of Spices"
            class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
          />
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto="
            alt="Coconut with Strawberries"
            class="w-100 mx-w-234px shadow-1-strong rounded"
          />
        </div>
        <div class="col-lg-6 bb">
          <img
            src="https://i.ytimg.com/vi/4MxRhjHmiVw/maxresdefault.jpg"
            alt="Dark Roast Iced Coffee"
            class="w-100 shadow-1-strong rounded"
          />
          <div className='row mt-2'>
            <div className='col-6 '>
              <img
                src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto"
                alt="Table Full of Spices"
                class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
              />
            </div>
            <div className='col-6'>
              <img
                src="https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&auto"
                alt="Table Full of Spices"
                class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
