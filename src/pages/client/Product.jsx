import React from 'react';

import ProductModal from './ProductModal';


const Product = () => {
  return (
    <section id="product" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Product</h2>
          <p>
            PHVs are viruses of human origin that lived in the era of the viral world and were able to fight and defeat other viruses without being eradicated. The world continued its transformation and caused these viruses to turn into cells, tissues, organs, systems as well as humans. Medicines derived from these viruses have the ability to kill all types of viruses that can affect humans and return the body to its normal state without causing any harm.
          </p>
        </div>
        
        <div className="d-flex justify-content-center"> {/* Center the card */}
          <div className="card" style={{ width: '30rem' }}>
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">PHV 39 SOLUTION</h5>
              <p className="card-text">It is a broad-spectrum drug that kills all types of recto-viruses, and also reestablishing the cells of organs and body systems in their normal state.</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item text-center"><h4>Curable diseases</h4></li>
            
              <li className="list-group-item">HIV</li>
              <li className="list-group-item">Sickle Cells Disease</li>
              <li className="list-group-item">Osteoporosis</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link" data-toggle="modal" data-target=".product-modal-lg">Read More</a>
            
            </div>
            <ProductModal/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
