import React from 'react';

const ProductModal = () => {
  const modalContentStyle = {
    maxHeight: '80vh', // Adjust the maximum height as needed
    overflowY: 'auto',
  };

  const gridColStyle = {
    margin: '10px',
    backgroundColor: 'lightgray', // Adjust the background color as needed
    padding: '10px', // Add some padding for better readability
  };

  return (
    <div>
      <div
        className="modal fade product-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={modalContentStyle}>
            {/* Your modal content goes here */}
            {/* Include the grid columns within the modal content */}
            <div className="container">
              <div className="row">
                <div className="col" style={gridColStyle}>
                  <span>PHV39 SOLUTION</span>
                  <h6>
                    It is a broad-spectrum drug that kills all types of
                    recto-viruses, and also reestablishing the cells of organs
                    and body systems in their normal state.
                  </h6>
                </div>
                <div className="col" style={gridColStyle}>
                  <ul className="list-group">
                    <span>Curable diseases</span>
                    <li className="list-group-item bi bi-chevron-double-right">
                      HIV
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Sickle Cells Disease
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Osteoporosis
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Cancers
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      HIV
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Sickle Cells Disease
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Osteoporosis
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Cancers
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      HIV
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Sickle Cells Disease
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Osteoporosis
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Cancers
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      HIV
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Sickle Cells Disease
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Osteoporosis
                    </li>
                    <li className="list-group-item bi bi-chevron-double-right">
                      Cancers
                    </li>
                    {/* Add the class to other list items as well */}
                  </ul>
                </div>
              </div>
            </div>
            {/* Rest of your modal content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
