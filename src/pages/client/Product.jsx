import React, { useEffect, useState } from 'react';
import CardContent from './CardContent';
import Axial2 from './Axial2';
import Axial1 from "./Axial1";
import Vitality from './Vitality';
import axios from 'axios';
import API_BASE_URL from '../../components/apiConfig';
import Activator from './Activator';
import Header from './Header';
import FooterComponent from './FooterComponent';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';



const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/upload/`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Topbar/>
    <Header/>

     <main id="main" style={{paddingTop:"80px"}}>
    <section id="products" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Bidhaa Zetu</h2>
          <p>
          PHVs ni virusi vya asili ya binadamu ambavyo viliishi katika enzi ya ulimwengu wa virusi na viliweza kupambana na kushinda virusi nyingine bila ya kutokomezwa.  Ulimwengu uliendelea na mabadiliko yake na kusababisha virusi hivi kugeuka kuwa seli, tishu, viungo, mifumo pamoja na wanadamu.  Dawa zinazotokana na virusi hivi zina uwezo wa kuua aina zote za virusi vinavyoweza kumuathiri binadamu na kurudisha mwili katika hali yake ya kawaida bila kuleta madhara yoyote.
          </p>
        </div>

        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <CardContent
                  id={product.id}
                  img={product.image}
                  title={product.title}
                  desc={product.description}
                  headlist="Hutumiwa Kwa"
                  {...generateDiseasesFields(product.diseases)}

                  readmore=
                  {<Link to={`/modal-${product.id}`}>

                  <span
                    style={{color:"blue",cursor:"pointer"}}
                    className="card-link"
                  >
                    Soma Zaidi
                  </span>
                  
                  
                  </Link>
                 }
              
                />
                
                
      
              </div>
              
            </div>
          ))}
        </div>
        {/* <Axial2 />
        <Axial1/>
        <Vitality/>
        <Activator/> */}
      </div>
    </section>
    </main>
    <FooterComponent/>
    </>
  );
};

// Function to generate the diseases fields dynamically
const generateDiseasesFields = (diseases) => {
  const diseaseList = diseases.split(',').map((disease, index) => (
    <li key={index} className="fw-normal">
      
      <svg width="28px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#184dc9"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#1148ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>{disease.trim()}
    </li>
  ));

  // Generate l1, l2, l3, and so on based on the number of diseases
  const diseaseFields = {};
  for (let i = 0; i < diseaseList.length; i++) {
    diseaseFields[`l${i + 1}`] = diseaseList[i];
  }

  return diseaseFields;
};

export default Product;





















//import React from 'react';

// import CardContent from './CardContent';
// import Axial2 from './Axial2';



// const Product = () => {

//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     // Function to fetch data from your Django API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/product/upload/');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
    
//     // Call the fetchData function when the component mounts
//     fetchData();
//   }, []);
//   return (

//     <section id="products" className="services">

//       <div className="container">
//         <div className="section-title">
//           <h2>Our Product</h2>
//           <p>
//             PHVs are viruses of human origin that lived in the era of the viral world and were able to fight and defeat other viruses without being eradicated. The world continued its transformation and caused these viruses to turn into cells, tissues, organs, systems as well as humans. Medicines derived from these viruses have the ability to kill all types of viruses that can affect humans and return the body to its normal state without causing any harm.
//           </p>
//         </div>

//         <div className="row justify-content-center">
//         {products.map((product) => ())}
//           <div className="col-md-4">
//             <div className="card mb-4">
//               <CardContent img="" title="PHV 39 SOLUTION" desc="It is a broad-spectrum drug that kills all types of recto-viruses, and also reestablishing the cells of organs and body systems in their normal state." headlist="Curable diseases" l1="HIV" l2="Sickle cell disease" l3="Osteoporosis" l4="Cancers" l5="Polycystic Ovarian Syndrome" l6="Covid-19" l7="Herpes zoster" l8="Ebola" />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-4">
//               <CardContent img="" title="PHV-ACTIVATOR" desc="It is a medicine that effectively strengthens the functioning of the digestive system, promoting better digestion and overall gastrointestinal health." headlist="Curable diseases" l1="Obesity" l2="High Blood Pressure" l3="Diabetese Mellitus" />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-4">
//               <CardContent img="" title="PHV-AXIAL3" desc="It is a medicine  that strengthens the immunity of every cell in the body against the diseases that exist in the environments" headlist="Curable diseases" l1="Chronic Virginial discharges" l2="Chronic dermatitis" l3="Venereal warts" l4="Opportunistic infections" l5="Infected sinus" l6="cervical cancer"/>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-3">
//               <CardContent img="" title="PHV-INHIBITOR" desc="It is a medicine that strengthens the communication of emotions and the functioning of the reproductive and digestive systems" headlist="Curable diseases" l1="Loss of libido" l2="erecto disfunction" l3="Diabetese Mellitus" l4="Constipation" l5=".." />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card mb-4">
//               <CardContent img="" title="PHV-AXIAL2" desc="It is a drug that normalize the nervous system,  reproductive system and the immune system." headlist="Curable diseases" l1="Impotence" l2="Chronic UTI" l3="loss of memories." l4="Costipation" l5="Infertility" tar="#fullScreenModal" />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card mb-4">
//               <CardContent img="" title="PHV-DIAXIAL4" desc="It is a drug that strengthens the overall functioning of the communication system of all cells in the body." headlist="Curable diseases" l1="Nightmare" l2="Depression" l3="Unconsciousness" l4="immunodeficiency" l5="Detoxification" />
//             </div>
//           </div>
//         </div>
//         <Axial2/>
//       </div>
//     </section>
//   );
// }

// export default Product;



