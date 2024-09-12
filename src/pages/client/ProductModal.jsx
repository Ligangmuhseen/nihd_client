import React, { useState, useRef, useEffect } from 'react';

const ProductModal = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const tableRef = useRef(null);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const startAutoScroll = () => {
    if (tableRef.current && isScrolling) {
      const table = tableRef.current;
      const scrollInterval = setInterval(() => {
        if (table.scrollTop !== table.scrollHeight - table.clientHeight) {
          table.scrollTop += 1;
        } else {
          clearInterval(scrollInterval);
        }
      }, 50);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  };

  useEffect(startAutoScroll, [isScrolling]);

  const tableContainerStyle = {
    height: '400px',
    overflowY: 'scroll', // Use 'scroll' to enable manual scrolling
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
          <div className="modal-content">
            <div className="container">
              <div className="row">
                <div className="col" style={tableContainerStyle} onMouseEnter={toggleScrolling} onMouseLeave={toggleScrolling}>
                  <div style={tableContainerStyle} ref={tableRef}>
                    <table className="table table-image">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Product</th>
                          <th scope="col">Description</th>
                          <th scope="col">Curable diseases</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">3</th>
                          <td className="w-25">
                            <img src="image_url_3.jpg" className="img-fluid img-thumbnail" alt="Image 3" />
                          </td>
                          <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iste provident? Dignissimos animi repellat quisquam aliquam optio itaque nemo numquam expedita? Beatae nesciunt consequatur omnis fuga, ad distinctio. Doloremque, saepe!</td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ea suscipit quisquam molestiae! Ad quisquam numquam consequatur,
                            porro soluta nisi qui nam fugit delectus quo molestias illo nostrum
                            doloribus ipsa. Natus.
                          </td>

                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="w-25">
                            <img src="image_url_4.jpg" className="img-fluid img-thumbnail" alt="Image 4" />
                          </td>
                          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nesciunt tenetur officia praesentium maiores repellat odit doloremque pariatur debitis! Sed hic ducimus quis, laborum atque minus assumenda magnam. Corrupti, aut.

                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, temporibus. Voluptatibus nobis dolores quam voluptates inventore qui sed nisi. Ex laboriosam ipsum quibusdam. Atque ipsum tempora non quos magni in.
                          </td>

                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td className="w-25">
                            <img src="image_url_5.jpg" className="img-fluid img-thumbnail" alt="Image 5" />
                          </td>
                          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus rerum officiis unde suscipit? Velit, facere accusantium possimus corporis eius totam, qui minus suscipit perspiciatis harum deleniti repudiandae ipsum minima?</td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, assumenda ducimus vel pariatur doloremque illum dolor quas ab laboriosam, iusto iure veritatis nisi quis provident perspiciatis! Eos officia sit facere.</td>

                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="w-25">
                            <img src="image_url_3.jpg" className="img-fluid img-thumbnail" alt="Image 3" />
                          </td>
                          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis consequatur obcaecati enim? Culpa, animi fuga commodi dignissimos, magnam eligendi, enim sit tempora maiores perspiciatis quas modi vel iure neque blanditiis.</td>
                          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quam modi. Eius excepturi distinctio qui facere possimus placeat autem recusandae, ipsa eaque incidunt eum voluptatibus facilis. Ipsam autem quam eligendi!</td>

                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="w-25">
                            <img src="image_url_4.jpg" className="img-fluid img-thumbnail" alt="Image 4" />
                          </td>
                          <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae repudiandae error soluta sapiente, commodi ratione ipsam architecto alias temporibus voluptas cupiditate tempore ipsum ullam! Dolorum qui officia rem corporis quos.</td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis? Similique, praesentium expedita quaerat optio inventore amet porro dolores distinctio ipsa, saepe cum architecto odio nemo, voluptatibus soluta consequuntur error!</td>

                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td className="w-25">
                            <img src="image_url_5.jpg" className="img-fluid img-thumbnail" alt="Image 5" />
                          </td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum fugit rerum a necessitatibus. Omnis corporis incidunt delectus, distinctio libero dolor nam, minus ab voluptates labore, doloribus totam ipsam eaque.</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at dolorum architecto fugiat beatae quasi illo fuga facilis odio, porro ipsum distinctio. Tempora corrupti assumenda, expedita vero voluptatum necessitatibus ad?</td>

                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="w-25">
                            <img src="image_url_3.jpg" className="img-fluid img-thumbnail" alt="Image 3" />
                          </td>
                          <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus et officiis deserunt vitae. Possimus cupiditate ipsum, molestias pariatur numquam quo ratione similique velit. Repudiandae hic doloribus corporis necessitatibus amet?</td>
                          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat odio autem quisquam velit natus numquam fugit cumque ipsam doloremque? Non saepe, officiis sed soluta consequatur alias quisquam tempora ea possimus.</td>

                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="w-25">
                            <img src="image_url_4.jpg" className="img-fluid img-thumbnail" alt="Image 4" />
                          </td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit iusto dolor mollitia exercitationem vitae? Minima sequi fugit inventore consequuntur veniam? Consequuntur a laboriosam fuga fugit natus pariatur maxime cumque ea!</td>
                          <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eligendi unde possimus nisi laboriosam quidem quae ducimus eius in voluptates tempora itaque. In distinctio molestiae repellat! Explicabo ea porro dicta.</td>

                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td className="w-25">
                            <img src="image_url_5.jpg" className="img-fluid img-thumbnail" alt="Image 5" />
                          </td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas ad, itaque magni eum vel asperiores repellendus porro labore unde, ipsam, impedit maiores at ut sint et praesentium officia tempore.</td>
                          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsa dignissimos quo nisi ad laboriosam unde perferendis vel! Sit, molestiae! Ducimus doloremque consectetur ut nobis distinctio, suscipit qui aspernatur tenetur!</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
