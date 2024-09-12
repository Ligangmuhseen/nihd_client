import React from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import FooterComponent from "./FooterComponent";

const Partnership = () => {
  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="partnership" className="services" style={{}}>
          <div className="container">
            <div className="section-title">
              <h2>Ubia</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  style={{
                    wordSpacing: "10px",
                    lineHeight: "1.5",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <p>
                    Kampuni ya NIHD inatangaza nafasi ya ubia katika biashara ya
                    dawa za kibunifu. Kampuni imeweka mazingira mazuri kwa
                    makampuni ya kibayoteki ambayo yanazotafuta ukuaji wa
                    kibiashara Duniani na Serikali za nchi ambazo zinakusudia
                    kuboresha huduma za Afya ya matibabu kwa jamii kwa njia bora
                    na gharama nafuu.
                  </p>
                  <p>
                    Kampuni ya NIHD imejipanga kufanya biashara katika maeneo
                    mbali mbali Duniani kwa njia ya Ubia, bila ya kuweka vikwazo
                    vya eneo, kanda au nchi. Kampuni imejipanga kupanua soko kwa
                    njia zinazofaa bila ya kuathiri uchumi wa nchi husika.
                  </p>
                  <p>
                    Kampuni ya NIHD imeainisha maeneo maalum ya kimkakati ya
                    kufanya Ubia ;
                  </p>
                  <ul className="list-group list-group-flush">
                    <span>
                      <h5>1.Utengenezaji wa Dawa za PHVs:</h5>
                      kampuni ya NIHD inajishughurisha na utengenezaji wa dawa
                      za ubora wa juu za Binadam zinazotokana na mifumo bora ya
                      kisasa ya uzalishaji wa Dawa. kampuni imejipanga kutoa
                      ushirikiano wa kuimarisha ubia na kufikia malengo
                      yaliyokusudiwa.
                    </span><br/>
                    <span>
                      <h5> 2.Upanuzi wa soko:</h5>
                      Kampuni ya NIHD imedhamilia kuboresha huduma ya Afya
                      Duniani. Kampuni inaadhimia kufikia lengo lake kwa kutoa
                      fursa ya kibiashara kwa wadau wa Afya Duniani.
                    </span><br/>
                    <span>
                      <h5>3.Uendelezaji wa tafiti wa dawa za mfumo wa PHVs;</h5>
                      Kampuni ya NIHD imedhamilia kushirikiana na taasisi kubwa
                      za elimu, Taasisi za Afya, makampuni ya Dawa, kuendeleza
                      tafiti za dawa za mfumo wa PHVs.
                    </span>
                  </ul>

                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default Partnership;
