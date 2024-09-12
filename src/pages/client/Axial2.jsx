import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import FooterComponent from "./FooterComponent";

const Axial2 = () => {
  const gheading = {
    color: "#2c4964",
    textAlign: "left",
  };
  return (
    <div>
      <Topbar />
      <Header />

      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="products" className="services">
          {/* column one start */}
          <div
            className="container p-5"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            <div className="section-title">
              <h2>PHV-AXIAL2</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h5 style={gheading}>JINA LA BIDHAA:</h5>
                <div>
                  <span style={{ color: "black" }}>Jina la asili:</span>
                  <br />
                  Nucleated PHV-26A414 solution au Nucleated PHV-63 solution
                  <br />
                  <span style={{ color: "black" }}>Jina la biashara:</span>
                  <br />
                  PHV-AXIAL2
                </div>
                <br />
                <h5 style={gheading}>UBORA NA VIAMBATA VILIVYOMO</h5>
                Kanuni ya dawa ni C32H66B, Kwa kila milimita ya ujazo wa
                Nucleated PHV-63solution ina idadi ya zaidi ya vivuli vya
                nucleated PHV-63 ambayo huwekwa kwenye mmumunyo wa chumvi.
                Kipunje kimoja cha molekuli ya PHV-63 inayofanya kazi, inauzito
                wa Atomiki 494 na uwezo wa upenyaji kwenye tishu za binadamu kwa
                kiwango cha 186 cha uzito wa Atomiki kwa Makro sekunde. Kivuli
                cha Nucleated PHV-63 kwa ukubwa wa molekuli ina{" "}
                <span style={{ color: "black" }}>
                  vivuli vya kemikali chanya vya asili:{" "}
                </span>
                Ga-64, Cl-35, Ar-37, K-39, Ca-41, Si-29, P-31
                <span style={{ color: "black" }}>
                  {" "}
                  Vivuli vya kemikali hasi vya asili:-{" "}
                </span>
                Mg-25, Ni-58, Co-59 Fe-56.
                <h5 className="mt-3" style={gheading}>
                  MUONEKANO WA DAWA;
                </h5>
                <div>Ina rangi ya maji na ladha ya chumvi</div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA UTENDAJI WA KAZI;
                </h5>
                <div>
                  <h6 style={{ color: "black" }}>Matibabu elekezi:-</h6>
                  Ni miongoni mwa dawa zinazorekebisha mfumo wa neva, mfumo wa
                  uzazi na mfumo wa kinga kurejea katika mwenendo sawia wa
                  Binadamu. Pia inazalisha kemikali zenye manufa katika
                  ukamilifu wa utendaji kazi wa KITEKIUHAKI 14 ( kiini tete
                  kinachoratibu uhai na asili ya kiumbe ) na husababisha
                  kuondokana na itilafu zozote za vimiminika kutoka katika tezi
                  za ndani.
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <h6 style={{ color: "black" }}>
                    Hutumika kwa ajili ya;
                  </h6>
                  kurejesha utendajikazi sawia wa mwili hususani wa mfumo wa
                  uzazi, mfumo wa kinga,mfumo wa moyo na mishipa,mfumo wa
                  neva,mfumo wa kusaga chakula na mfumo wa endocrine.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Namna ya utoaji wa dawa na vipimo vyake;
                  </h6>
                  Kiwango cha dawa kinachotumika na mgonjwa kinatafutwa kupitia
                  kanuni ya hesabu ya dawa PHV-63 Solution asilia;
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Kanuni
                  </h6>
                  Uzito wa dawa Nucleatrd PHV-63 Solution kwa kiwango cha
                  molecule moja (Atomiki mass) X ujazo (ml) gawanya kwa uwezo wa
                  upenyaji kwenye tishu za binadamu. Kiwango kinachopatikana ni
                  kipimo chamatumizi ya dawa kwa umri wa mgonjwa wa mwaka mmoja
                  au sawa na na mwenye uzito wa kilo kumi. Umri wa miaka 25
                  umechukuliwa kuwa ni umri wa mtu mzima, ni sawa na umri
                  kuanzia miaka 25 hadi 60, na zaidi ya umri wa miaka 60
                  uchukuliwa ni sawa na umri wa chini ya miaka 25.
                  <br />
                  <br />
                  <br/>
                  <span style={{ color: "black" }}>
                    UKOSEFU WA HAMU YA TENDO LA NDOA, UPUNGUFU WA UWEZO WA
                    KUSIMAMISHA KWA MWANAUME, KUSHINDWA KUPATA CHOO, UGONJWA WA
                    KISUKARI, KUPUNGUZA KITAMBI,UGUMBA, UTI SUGU, VIDONDA VYA
                    TUMBO, UKOSEFU WA KUMBUKUMBU, SHINIKIZO LA DAMU LA JUU NA LA
                    CHINI MATATIZO YA NGOZI,
                  </span>
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <span>
                    Utoaji wa dawa Nucleated PHV-63 Solution kwa magonjwa haya
                    sharti isiwe peke yake ila iambatane na dawa nyingine
                    maalumu kwa magonjwa haya zikiambatana na utumiaji chakula
                    bora kwa wakati na kufanya mazoezi ya afya.
                  </span>
                  <br />
                  <br />
                  Dozi ya mtu mzima ya Nucleated PHV-63 Solution ni 65ml kwa
                  kunywa mdomoni, inapaswa kutolewa mara moja usiku na wakati
                  amekula chakula kingi na kipimo kinapaswa kurudiwa baada ya
                  muda wa siku 60 kwa kila dozi kadhaa zinazofuata. Kipimo cha
                  watoto wachanga, watoto na wazee kinapaswa kuhesabiwa kutoka
                  kwa fomula ya kipimo. Kipimo kinapaswa kutumika baada ya
                  kupatiwa maelezo kutoka kwa daktari ya lini na kwa wakati gani
                  dawa inapaswa kutumika.
                  <br />
                  <div>
                   
                    <div>
                      <h6 className="mt-3" style={{ color: "black" }}>
                        Hairuhusiwi kutumika kwa;
                      </h6>
                      Nucleated PHV-63 Solution hairuhusiwi kutumika kwa mgonjwa
                      ambaye jamii ya dawa hii inamsababishia madhara makubwa.
                    </div>
                    <div>
                      <h6 className="mt-3" style={{ color: "black" }}>
                        Mazingatio na Tahadhari;
                      </h6>
                      Kabla ya kutumia dawa hakikisha umekula chakula cha
                      kutosha.
                    </div>
                    <div>
                      <h6 className="mt-3" style={{ color: "black" }}>
                        Mwingiliano na bidhaa zingine za matibabu na aina
                        zingine za mwingiliano katika utendaji kazi;
                      </h6>
                      Utumiaji wa dawa Nucleated PHV-63 Solution pamoja na pombe
                      kunapunguza utendaji kazi wa dawa ya Nucleated PHV-63
                      Solution mwilini.
                    </div>
                  </div>
                  <br />
                 
                </div>
              </div>
            </div>
          </div>
          {/* column 1 end */}

          <div style={{position:"relative",top:"-40px"}}>
            <p style={{ width: "1%", margin: "0 auto", color: "green" }}>1</p>
            <hr
              style={{
                borderTop: "6px solid darkblue",
                width: "3%",
                margin: "0 auto",
              }}
            />
          </div>

         

          {/* column 3 start */}
          <div
            className="container p-5"
            style={{ textAlign: "justify", textJustify: "inter-word",marginTop:"-60px" }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <h6 style={{ color: "black" }}>
                    Ujauzito na Unyonyeshaji;
                  </h6>
                  Dawa Nucleated PHV-63 Solution ni salama kwa mama mjamzito na
                  anayenyonyesha.
                </div>
                <h6
                  className="mt-4"
                  style={{ color: "black", textTransform: "lowercase" }}
                >
                  ATHARI JUU YA UWEZO WA KUENDESHA VYOMBO VYA MOTO NA KUTUMIA
                  MITAMBO;
                </h6>
                Hapana kuendesha vyombo vya moto na kuendesha mitambo unapokuwa
                kwenye matibabu ya Nucleated PHV-63 Solution la sivyo
                unaruhusiwa baada ya kuthibitishwa na daktari hivyo basi uko
                thabiti kwa hilo.
                <div>
                  <h6 style={{ color: "black" }}>Athari zisizohitajika;</h6>
                  Kwa ujumla Nucleated PHV-63 Solution huvumiliwa vyema kwa watu
                  wazima na watoto, madhara mengi ni madogo na mara chache
                  hakuna haja ya kusitishwa kwa tiba. Madhara mabaya ya kawaida
                  ni maumivu ya kichwa kidogo, Dalili hizi huchukua muda wa wiki
                  kadhaa kupungua.
                </div>
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Kupitiliza kiwango cha dawa;
                  </h6>
                  Kupitiliza kiwango cha Nucleated PHV-Solution kuliko kipimo
                  halisi, kunaweza kusababisha kushuka sukari mwilini, kukosa
                  usingizi na kutotulia. Iwapo itatokea hali hii anatakiwa
                  mgonjwa awekewe maji ya Dextrose yenye kiwango kikubwa cha
                  sukari kupitia mishipa ya vena. Mgonjwa aliye pitiliza kiwango
                  cha dawa na kupata athari anapaswa kuzingatiwa na kupatiwa
                  matibabu halisi kuhusiana na hali yake.
                  <h5 className="mt-3" style={gheading}>
                    UTHAMANI WA UTENDAJI KAZI WA DAWA ;
                  </h5>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Kundi la utibabu wa dawa;
                    </h6>
                    Imetaarishwa kwa ajili ya kurejesha utendaji kazi wa mwili
                    katika hali ya kawaida
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                hususani kwenye mfumo wa moyo na mishipa, mfumo wa nave, mfumo
                wa chakula na mfumo wa tezi ya ndani.
                <h6 className="mt-3" style={{ color: "black" }}>
                  Namna ya ufanyaji kazi wa dawa;
                </h6>
                Kiambata cha PHV-63 hufungamana kwa kuchagua sehemu ya ndani ya
                seli ambamo husisimuliwa KITEKIUHAKI (DNA) Nambari 26
                kujitengeneza. Kitekiuhaki nambari 26 iliyojitengeneza ndani ya
                mwili inashirikiana kwa pamoja na msururu wa KITEKIUHAKI 22X na
                Y na
                <div>
                  KITEKIUHAKI 5X na Y, KITEKIUHAKI 4X na Y.Ambapo muunganiko huu
                  unatengeneza mkusanyiko ambao ni chanzo kikuu cha kuteha( seli
                  ) zenye kiini katikati ( seli zenye nyuklia) kwa ajili ya
                  mfumo wa uzazi baadhi ya kuteha za ubongo na nave na baadhi ya
                  kuteha za kinga (seli za kinga). Pia punje ya Nucleated PHV-63
                  asilia hubeba baadhi ya huluki za kemikali za KITEKIUHAKI 14
                  (DNA14) ambazo zinarekebisha upungufu ndani KITEKIUHAKI namba
                  14. Kwa mantiki hiyo dawa hii inajulikana kwa jina la
                  PHV-26A4414.
                </div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA DAWA MWILINI;
                </h5>
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Ufonzwaji wa dawa;
                  </h6>
                  Baada ya kunywa dawa Nucleated PHV-63 Solution kiambata cha
                  dawa katika hali ya kivuli uingia ndani ya kuteha moja kwa
                  moja kutoka katika mfumo wa chakula kwa mitetemo vya iliyopo
                  katika virutubisho na utandu wa ngozi ndani ya utumbo. Mifumo
                  ya mwili inafanya kazi pamoja na kiambata dawa cha Nucleated
                  PHV-63 nakuendelea na utaratibu wake.
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <div>
                
                    <h6  style={{ color: "black" }}>
                      Utokaji wa dawa mwilini;
                    </h6>
                    Kiambata cha Nucleated PHV-63 kinatenganisha kemikali zote
                    mwilini ambazo si asilia na kuruhusiwa kutoka mwilini
                    kupitia mishipa ya lymph na kutolewa nje ya mwili kupitia
                    figo, mapafu, ngozi na kinyesi.
                  </div>
                  <h5 className="mt-3" style={gheading}>
                    WASIFA WA DAWA;
                  </h5>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Orodha ya vibebeo vya dawa;
                    </h6>
                    Sodium Lactate, Sodium Chloride, Potassium Chloride, Calcium
                    Chloride, maji ya sindano.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Vipingamizi vya dawa;
                    </h6>
                    Hakuna vizuizi
                  </div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Muda wa uwezo wa dawa kukaa;
                  </h6>
                  Nucleated PHV-63 Solution huchukua takriban miaka 3
                  inapohifadhiwa chini ya utaratibu uliopendekezwa.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Tahadhari maalum pindi unahifadhi;{" "}
                  </h6>
                  Hifahi mahali pakavu chini ya au kwa nyuzi joto 25. Ilinde
                  kutokana na mionzi ya jua, Iweke mbali na watoto.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Uwalisia wa dawa na ilivyohifadhiwa kwenye chombo;
                  </h6>
                  Nucleated PHV-63 Solution;
                  <br />
                  Inahifadhiwa kwenye chupa ya milimita 65 ya ujazo. Kila chupa
                  inapakiwa katika ndani ya kisanduku pamoja na kipeperushi cha
                  maelezo.
                </div>
              </div>
            </div>
          </div>

          {/* column three end */}
          <p style={{ width: "1%", margin: "0 auto", color: "green" }}>2</p>
          <hr
            style={{
              borderTop: "6px solid darkblue",
              width: "3%",
              margin: "0 auto",
            }}
          />
        </section>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Axial2;
