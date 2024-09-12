import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import FooterComponent from "./FooterComponent";

const Axial1 = () => {
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
              <h2>PHV-AXIAL1</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h5 style={gheading}>JINA LA BIDHAA:</h5>
                <div>
                  <span style={{ color: "black" }}>Jina la asili:</span>
                  <br />
                  Nucleated PHV-39 Solution
                  <br />
                  <span style={{ color: "black" }}>Jina la biashara:</span>
                  <br />
                  PHV-AXIAL 1
                </div>
                <br />
                <h5 style={gheading}>UBORA NA VIAMBATA VILIVYOMO</h5>
                Kanuni ya dawa ni C19H27F, Kwa kila milimita ya ujazo wa
                Nucleated PHV-39 Solution ina idadi ya zaidi ya vivuli vya
                Nucleated PHV-39 ambayo huwekwa kwenye mmumunyo wa chumvi.
                Kipunje kimoja cha molekuli ya PHV-39 inayofanya kazi, inauzito
                wa Atomiki 293 na uwezo wa upenyaji kwenye tishu za binadamu kwa
                kiwango cha 117 cha uzito wa Atomiki kwa Makro sekunde. Kivuli
                cha Nucleated PHV-39 kwa ukubwa wa molekuli ina{" "}
                <span style={{ color: "black" }}>
                  vivuli vya kemikali chanya vya asili:{" "}
                </span>
                K-40, Na-23, Mg-25, Al-27, Si-29, O-17, F-19, CI-35
                <span style={{ color: "black" }}>
                  {" "}
                  Vivuli vya kemikali hasi vya asili:-{" "}
                </span>
                C-13, S-36, P-34, P-32, Si-30, Si-31, Si-32, zikiambatana na
                kiwango kidogo cha B-11, Be-9 and Li-7.
                <h5 className="mt-3" style={gheading}>
                  MUONEKANO WA DAWA;
                </h5>
                <div>Ina rangi ya maji na ladha ya chumvi</div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA UTENDAJI WA KAZI;
                </h5>
                <div>
                  <h6 style={{ color: "black" }}>Matibabu elekezi:-</h6>
                  Ni dawa yenye wigo mpana ambayo inaua aina zote za virusi vya
                  recto-virusi, pia uziimarisha upya seli za viungo na mifumo ya
                  mwili katika hali zake za kawaida. Kiambata cha dawa PHV-39
                  Solution katika muhimili wake kimeundwa kwa mifereji ya aina
                  mbili yenye uwezo wa kupitisha Niutroni 0.6 na 1.2 Nfc (uwezo
                  wa kutiririka kupitia mfereji wa niutroni). Kwa mantiki hii
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  hutumika kwa ajili ya kutibu matatizo ya afya yanaosababishwa
                  na uambukizo wa virusi, kuimarisha upya seli za viungo na
                  mifumo ya mwili.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Hutumika kwa ajili ya;
                  </h6>
                  Dawa Nucleated PHV-39 Solution hutumika kwa kutibu magonjwa
                  nyemelezi kwa kupitia marekebisho kadhaa mwilini ambayo
                  hupandisha uwezo wa kinga za mwili, pia hurejesha viasili vya
                  mwili katika mpangilio wa X na Y za KITEKIUHAKI 14 ambazo
                  zilivurugwa na magonjwa.
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
                  uchukuliwa ni sawa na umri wa chini ya miaka 25. Mtoto mchanga
                  atapewa 0.125 ml/kg kulingana na uzito unaokubalika na haya
                  mahesabu yatafanywa na Daktari au;
                  <br />
                  <br />
                  <span style={{ color: "black" }}>
                    HIV, SARATANI, KUMENG’ËNYUKA KWA MIFUPA, UGUMBA, CHANGO LA
                    KINA MAMA,VIDONDA VYA TUMBO,MAGONJWA
                  </span>
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <span style={{ color: "black" }}>
                    SUGU YA NGOZI, KIHARUSI, VIKANGA SEHEMU YA SIRI, HOMA YA INI
                    B NA C.
                  </span>
                  <br />
                  <br />
                  Mtu mzima anatumia mililita 63 za dawa Nucleated PHV-39
                  Solution usiku wakati wa kulala, lakini awe amekula chakula
                  cha kutosha. Baada ya siku tatu kiwango cha dawa kinaweza
                  kurudiwa kwa ajili ya kupata matokeo bora ya utendaji kazi wa
                  dawa. Utaratibu huu wa dawa unahitajika urudiwe kila baada ya
                  miezi miwili kupita kwa awamu tisa wakati wa matibabu ya
                  ugonjwa.
                  <br />
                  Mara chache uhitajika kiwango cha mililta 20 cha dawa
                  Nucleated PHV-39 Solution baina ya dozi kwa ajili ya kutibu
                  matatizo ya kukohoa au kuhara wakati wa matibabu. Watoto wenye
                  umri wa mwaka 1-10 watahitajika kupewa dawa Nucleated PHV-39
                  Solution milita 2.5 hadi 25 kwa kunywa na watatumia dawa kwa
                  umbali sawa na wakubwa na idadi ya awamu.
                  <br />
                  Na kiwango cha milita 1-10 za dawa zitatolewa baina ya umbali
                  wa awamu na awamu iwapo kutakuwa na ulazima wa kufanya hivyo
                  kama ilivyo kwa wakubwa.
                  <br />
                  Kiwando cha dawa Nucleated PHV-39 Solution kitatumika
                  kulingana na uzito wa watoto wa changa kuanzia umri wa mwaka 0
                  hadi1 kwa kufuata milita 0.125 kwa kila kilo ya mtoto
                  zinazokubalika kulingana na hatua za ukuaji. Matibabu kwa
                  kutumia dawa Nucleated PHV-39Solution hayatosherezi yakiwa
                  pekee ila ni lazima dawa nyingine zitumike kwa ajili ya
                  ugonjwa huo kama vile Antibaotiki.
                </div>
              </div>
            </div>
          </div>
          {/* column 1 end */}

          <div style={{ position: "relative", top: "-40px" }}>
            <p style={{ width: "1%", margin: "0 auto", color: "green" }}>1</p>
            <hr
              style={{
                borderTop: "6px solid darkblue",
                width: "3%",
                margin: "0 auto",
              }}
            />
          </div>

          {/* column 2 start */}
          <div
            className="container p-5"
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              marginTop: "-60px",
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                <h5 style={gheading}>UGONJWA WA SELI MUNDU</h5>
                Kiwango cha kawaida cha dozi ya kumeza ya Nucleated PHV-39
                Solution kwa watoto wa mwaka 1 hadi 10 ni 2.5ml hadi 25ml hii ni
                kwa ajili ya matibabu ya Seli mundu ambayo yanatolewa kwa dozi
                moja kwa wakati wa usiku na inatakiwa unywe baada ya kula
                chakula chakutosha, kisha siku ya pili asubuhi inapaswa kunywewa
                kwa kiwango cha 1ml hadi 8ml kinachanganywa katika maji ya
                kunywa kwa kugawanywa katika sehemu mbili tofauti kwa kipimo
                sawa , Kisha kunywa moja asubuhi na nyingine jioni, kwa muda wa
                siku tatu mfululizo. Dozi hiyo inarudiwa tena baada ya muda wa
                siku 60. Wagonjwa wanapaswa kutumia dozi hiyo kwa awamu tisa.
                Dozi ya Nucleated PHV-39 Solution inatumiwa kulingana na umri,
                kwani mtoto chini ya umri wa mwaka 1 anapaswa kupewa 0.125 ml/kg
                kulingana na uzito wa mwili, na hii ni kwa kuchanganya au
                kutochanganya
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Ushauri;
                  </h6>
                  Matibabu ya dawa ya Nucleated PHV-39 Solution hayapaswi
                  kutumiwa peke yake, lazima iongezwe na dawa zingine kama vile
                  antibiotiki na dawa zingine kulingana na ugonjwa.
                  <br />
                  <h6 className="mt-3" style={{ color: "black" }}>
                    EBOLA, COVID-19 na aina zake;{" "}
                  </h6>
                  Dozi ya watu wazima ya Nucleated PHV-39 Solution ni 63ml
                  inatumiwa kwa kumeza katika siku ya kwanza na inapaswa mgonjwa
                  ale chakula chakutosha. kisha irudiwe tena baada ya masaa 72 .
                  <br />
                </div>
              </div>

              <div className="col-lg-4">
                Dozi atabadilishiwa na kupewa ya ujazo wa 30ml ikiwa kuna
                kikohozi kikavu kupita kiasi, kuhara, kutokwa na damu puani au
                sehemu ya haja kubwa kwa muda wa siku 3 hadi 5 hadi dalili
                zipungue. Dozi za watoto (Umri 1-10) za Nucleated PHV-39
                Solution zinapaswa kutolewa 2.5ml hadi 25ml. Dozi zinapaswa
                kugaiwa kulingana na umri, na kuwekewa kiwango cha muda wa
                matumizi kulingana sawa na kiwango cha watu wazima. Kiwango
                kinachoweza badilishwa cha dozi ya Nucleated PHV-39 Solution kwa
                ujazo wa 1ml hadi 10ml ya Nucleated PHV-39 Solution inapaswa
                kusimamiwa . Nucleated PHV-39 Solution inapaswa kutolewa pamoja
                na antibiotiki ambayo ni kwa ajili ya matibabu ya maambukizi ya
                mfumo wa mkojo, nimonia na magonjwa ya kuhara
                <h5 className="mt-3" style={gheading}>
                  KUONDOA MADHARA NA ATHARI ZILIZOACHWA NA DAWA NYINGINE
                </h5>
                Nucleated PHV-39 Solution inatolewa kwa dozi moja kulingana na
                hali aliyokuwa nayo mgonjwa. Kwa mgonjwa mwenye hali mbaya sana,
                anapewa dozi ya kiwango cha chini ya Nucleated PHV-39 Solution
                au inagawanywa ndani ya masaa 24. Dozi ya mtu mzima ya ujazo wa
                25 mpaka 63ml inaangaliziwa kwa dozi moja kutokana na hali ya
                mgonjwa. Dozi ya watoto kuanzia (mwaka 1-10) ya dawa ya
                Nucleated PHV-39 Solution inagawiwa kwa ujazo wa 1.25 mpaka 15ml
                na mtoto mchanga (mwaka 0-1) inagawiwa kwa ujazo wa 0.125ml/kg
              </div>

              <div className="col-lg-4">
                <div>
                  kulingana na uzito wa mwili ila ikiwa hali yake ni mbaya sana
                  atapewa dozi ya hiyo dozi.
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Hairuhusiwi kutumika kwa;
                    </h6>
                    Nucleated PHV-39 Solution hairuhusiwi kutumika kwa mgonjwa
                    ambaye jamii ya dawa hii inamsababishia madhara makubwa.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Mazingatio na Tahadhari;
                    </h6>
                    Kabla ya kutumia dawa hakikisha umekula chakula cha kutosha
                    na kufanya mazoezi kila siku jioni kwa muda wa nusu saa.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Mwingiliano na bidhaa zingine za matibabu na aina zingine
                      za mwingiliano katika utendaji kazi;
                    </h6>
                    Utumiaji wa dawa Nucleated PHV-39 Solution pamoja na pombe
                    kunapunguza utendaji kazi wa dawa ya Nucleated PHV-39
                    Solution mwilini.
                    <div>
                      <h6 className="mt-3" style={{ color: "black" }}>
                        Ujauzito na Unyonyeshaji;
                      </h6>
                      Dawa Nucleated PHV-63 Solution ni salama kwa mama mjamzito
                      na anayenyonyesha.
                    </div>
                  </div>
                  <h6
                    className="mt-4"
                    style={{ color: "black", textTransform: "lowercase" }}
                  >
                    ATHARI JUU YA UWEZO WA KUENDESHA VYOMBO VYA MOTO NA KUTUMIA
                    MITAMBO;
                  </h6>
                  Hapana kuendesha vyombo vya moto na kuendesha mitambo
                  unapokuwa kwenye matibabu ya Nucleated PHV-39 Solution la
                  sivyo unaruhusiwa baada ya kuthibitishwa na daktari hivyo basi
                  uko thabiti kwa hilo.
                </div>
              </div>
            </div>
          </div>
          {/* column two end */}

          <div style={{ position: "relative", top: "-40px" }}>
            <p style={{ width: "1%", margin: "0 auto", color: "green" }}>2</p>
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
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              marginTop: "-60px",
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <h6 style={{ color: "black" }}>Athari zisizohitajika;</h6>
                  Kwa ujumla Dawa Nucleated PHV-39 Solution haina usumbufu kwa
                  watu wazima na watoto, ila mara chache kwa baadhi ya watumiaji
                  husababisha maudhi madogo madogo ambayo hayahitaji dawa
                  kusitishwa. Maudhi hayo ni maumivu ya kichwa kidogo, kuhisi
                  uchovu, kichefuchefu, Tumbo kuuma na mara chache kizunguzungu
                  , athari ya ngozi, kuwashwa, uvimbe, maumivu ya mgongo. Dalili
                  hizi zote zinaondoka kwa kula chakula cha kutosha na kufanya
                  mazoezi ya afya.
                </div>
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Kupitiliza kiwango cha dawa;
                  </h6>
                  Kupitiliza kiwango cha Nucleated PHV-39 Solution mara sita
                  kuliko kipimo halisi, kunaweza kusababisha kushuka sukari
                  mwilini, Iwapo imetokea mgonjwa aliyepitiliza kiwago cha dawa
                  na kusababisha madhara ya kimwili, mara moja apatiwe huduma
                  kwa kuanza na kumuwekea chupa yenye Dextrose 10% kupitia
                  mishipa ya vena. Mgonjwa aliyepitiliza kiwango cha dawa
                  anahitaji uangalifu na apatiwe matibabu kulingana na hali
                  yake.
                  <h5 className="mt-3" style={gheading}>
                    UTHAMANI WA UTENDAJI KAZI WA DAWA ;
                  </h5>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Kundi la utibabu wa dawa;
                    </h6>
                    Imetaarishwa kwa ajili ya kuua aina zote za virusi vya
                    recto-virusi, pia uziimarisha upya seli za viungo na mifumo
                    ya mwili katika hali zake za kawaida.
                  </div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Namna ya ufanyaji kazi wa dawa;
                  </h6>
                  Kiambata tiba cha dawa Nucleated PHV-39 Solution
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  kinakamatana na kukibomboa KITEHAKAFU (kiini tete hai kadirio
                  funguo) cha kirusi madhara,aswah sehemu ya mashikio ya kirusi
                  ambayo utumia kwa ajili ya kuingia ndani ya Kuteha za mwili wa
                  Binadam, kwa hiyo ndani ya kirusi katika Phosphorasi zake
                  kunatokea mvutano wa kiatomiki ambao unapelekea kupasuka kwa
                  baadhi ya kemikali na kuzaliwa gasi ya Nitrogen-20 na
                  Oxygen-17. Mabaki ya viini vya kirusi kutoka katika
                  KITEKIUHAKI zinajikusanya kwa pamoja na kutengeneza mkusanyiko
                  mgumu kupasuka na kuwa ni moja ya vitu visivyohitajika mwilini
                  na kutolewa nje kuwa ni uchafu kupitia Figo. Pia kiambata tiba
                  cha Nucleated PHV-39 Solution kinakamatana na KITEHAKAFU cha
                  mwili wa Binadam na kurekebisha kila mapungufu
                  yaliyosababishwa na virusi mwilini au Madawa au sumu au vyote
                  kwa pamoja kwa kutengeneza kupitia kiini tete Purine au
                  Pyremidine ndani yake kwa kuzalisha VITEHI (viini tete hitaji)
                  (Amino acids) sawa na vile vya mwili wa Binadam na kutumika na
                  mwili kwa ajili ya kuujenga mwili upya na kuondoa ulemavu wa
                  kuteha zinazounda mifumo na viungo vya mwili.
                </div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA DAWA MWILINI;
                </h5>

                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Ufonzwaji wa dawa;
                  </h6>
                  Baada ya kunywa dawa Nucleated PHV-39 Solution kiambata cha
                  dawa katika hali ya kivuli uingia sehemu ya nje ya kuteha na
                  baada ya siku 90 inaingia katika sehemu ya ndani ya kuteha.
                  Kiambata cha dawa PHV-39 solution kinasambaa mwilini na
                  kukamatana na Kuteha za mwili pamoja na virusi madhara
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <div>
                    na kuanza kufanya marekebisho na uhaji wa virusi kutokana na
                    asili yake.
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Utokaji wa dawa mwilini;
                    </h6>
                    Kiambata cha Nucleated PHV-39 kinatenganisha kemikali zote
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
                    Chloride yenye maji kidogo.
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
                  Dawa Nucleated PHV-39 Solution huchukua takriban miaka 3 kishi
                  bila ya kuharibika inapohifadhiwa chini ya utaratibu
                  uliopendekezwa.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Tahadhari maalum pindi unahifadhi;{" "}
                  </h6>
                  Hifadhi mahali pakavu chini ya au kwa nyuzi joto 25C0. Ikinge
                  na mionzi ya jua. Iweke mbali na watoto.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Uwalisia wa dawa na ilivyohifadhiwa kwenye chombo;
                  </h6>
                  Nucleated PHV-39 Solution;
                  <br />
                  Imehifadhiwa kwenye chupa ya milimita 63 ya ujazo. Kila chupa
                  ya dawa katika kifungashio chake kuna kipeperushi cha maelezo.
                </div>
              </div>
            </div>
          </div>

          {/* column three end */}
          <p style={{ width: "1%", margin: "0 auto", color: "green" }}>3</p>
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

export default Axial1;
