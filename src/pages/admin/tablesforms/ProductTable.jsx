import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../../components/apiConfig';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Function to fetch data from your Django API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/upload/`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-right">
              <Link to="productform">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productmodal">
                  Add New
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="card-body snipcss-tC4sd">
              {/* Table Header */}
              <table className="table table-bordered table-striped dataTable no-footer dtr-inline" aria-describedby="example1_info">
                <thead>
                  <tr>
                    <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Id: activate to sort column descending">
                      Id
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Title: activate to sort column ascending">
                      Image
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Content: activate to sort column ascending">
                      Title
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
                      Description
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
                      Diseases
                    </th>
                    <th scope="col" className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the products array and render each product */}
                  {products.map((product) => (
                    <tr key={product.id}>
                      <th scope="row" className="fw-bold dtr-control sorting_1" tabIndex="0">
                        {product.id}
                      </th>
                      <td>
                        <img src={product.image} alt="img" style={{width:"80px",height:"80px"}}/>
                      </td>
                      <td>
                        <p className="fw-normal">
                          {product.title}
                        </p>
                      </td>
                      <td>
                        <p className="fw-normal">
                          {product.description}
                        </p>
                      </td>
                      <td>
                        <ul>
                          {/* Split and map diseases */}
                          {product.diseases.split(',').map((disease, index) => (
                            <li key={index} className="fw-normal">
                              {disease.trim()}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="text-center py-0 align-middle">
                        <div className="btn-group btn-group-sm">
                          {/* Add your action buttons here */}
                          <Link to="#">
                            <button className="btn btn-primary" style={{ margin: "0 5px" }}>


                            <i className="fas fa-eye"></i>
                            </button>
                          </Link>
                          <Link to={`productform2/${product.id}`}> 
                          <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#productmodal2" style={{ margin: "0 5px" }}>
                            <i className="fas fa-edit"></i>
                            </button>
                          </Link>
                          <Link to={`productform3/${product.id}`}>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#productmodal3" style={{ margin: "0 5px" }}>
                            <i className="fas fa-trash"></i>
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
