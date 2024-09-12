import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../components/apiConfig";
import Header from "./Header";
import FooterComponent from "./FooterComponent";
import Topbar from "./Topbar";
import scrollToTop from "./ScrollUp";

const Product2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/upload/`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Topbar />
      <Header />

      <section
        id="services"
        class="services serv"
        style={{ paddingTop: "160px" }}
      >
        <div class="container" data-aos="fade-up">
          <header class="section-title">
            <h2>Bidhaa zetu</h2>
            <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
              {" "}
              PHVs ni kundi la aina za virusi vya asili vinavyoishi ndani ya
              mwili wa Binadam ambavyo vilianza kuishi enzi za Ulimwengu wa
              virusi. Viliweza kupambana na kushinda virusi vingine bila ya
              kutokomezwa katika mapambano ya nafasi ya uhai yaliyostawishwa na
              hali ya mazingira. Ulimwengu uliendelea na mabadiliko ya asili na
              kusababisha virusi hivi kugeuka kuwa seli, tishu, viungo, mifumo
              na baadae kuwa Binadam kamili. Kundi hili la aina za virusi lina
              umuhim mkubwa katika utendaji kazi wa kinga ndani ya mwili wa
              Binadam kwa kuunda na kushindanisha KITEKIUHAKI za Binadam na zile
              za virusi madhara kwa kuruhusu uwezekano wa kumea nafasi dhaifu ya
              uhai zidi ya KITEKIUHAKI tawala za Binadam ambazo urejea kutokana
              na kumea kwa nafasi dhaifu ya uhai. Dawa zinazotokana na virusi
              hivi zina uwezo wa kuua aina zote za virusi madhara zidi ya
              Binadam na kurejesha mwili katika hali yake ya kawaida bila ya
              kusababisha madhara mwilini.
            </p>
          </header>

          <div class="row gy-4">
            {products.map((product) => (
              <div
                key={product.id}
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="serv-box blue">
                  <img
                    className="icon"
                    src={product.image}
                    style={{ width: "150px" }}
                    alt="alternative"
                  />
                  <h3>{product.title}</h3>
                  <h4>{product.description}</h4>
                  <h5 style={{ color: "green" }}>Hutumika kwa matibabu ya;</h5>
                  <p>{product.diseases}</p>
                  <Link to={`/modal-${product.id}`}>
                    <a
                      onClick={() => {
                        scrollToTop();
                      }}
                      className="read-more"
                    >
                      <span>Soma Zaidi</span> <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            ))}

            {/* <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div class="service-box orange">
        <i class="ri-discuss-line icon"></i>
        <h3>Eosle Commodi</h3>
        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div class="service-box green">
        <i class="ri-discuss-line icon"></i>
        <h3>Ledo Markt</h3>
        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div class="service-box red">
        <i class="ri-discuss-line icon"></i>
        <h3>Asperiores Commodi</h3>
        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="service-box purple">
        <i class="ri-discuss-line icon"></i>
        <h3>Velit Doloremque.</h3>
        <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
      <div class="service-box pink">
        <i class="ri-discuss-line icon"></i>
        <h3>Dolori Architecto</h3>
        <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
        <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
      </div>
    </div> */}
          </div>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default Product2;
