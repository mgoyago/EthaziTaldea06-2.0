//import Videobg from "../assets/video/videoplayback (1).mp4";
import './Section.css';
import FotoKoldo from "../assets/img/Koldo.jpg";
import FotoMikel from "../assets/img/Mikel.jpg";
import FotoIker from "../assets/img/Iker.png";

interface SectionProps {
  currentSection: string;
  currentLanguage: string;
}

function Section({ currentSection,currentLanguage }: SectionProps) {
  let language = [""];
  let languageForm = [""];
  if (currentLanguage=== "eus"){
    language=["Ongi etorri","Hasi nabigatzen","Ikusi"];
    languageForm=["Guri Buruz","Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da.   Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da.",
      "KONTAKTATU GUREKIN","Kontsulta mota", "Orokorra","Laguntza","Besteak","Enpresa","Enpresa mota","Hautatu","Startup","Korporatiboa","Besteak","Izena","Posta elektronikoa",
      "Mezua","Bidali","NORTZUK GARA"];
  }else if(currentLanguage === "es"){
    language=["Bienvenido","Empieza a navegar","Comenzar"];
    languageForm=["Sobre Nosotros","Somos un sitio web que brinda información sobre el mundo de los eSports. Nuestro objetivo es brindarle las últimas noticias e información sobre eventos sobre las principales competiciones y torneos de videojuegos.   Somos un sitio web que brinda información sobre el mundo de los eSports. Nuestro objetivo es brindarle las últimas noticias e información sobre eventos sobre las principales competiciones y torneos de videojuegos.",
      "CONTACTA CON NOSOTROS","Tipo de consulta", "General","Ayuda","Otros","Empresa","Tipo de empresa","Eligir","Startup","Corporativo","Otros","Nombre","Correo electronico",
      "Mensaje","Enviar","QUIENES SOMOS"];
  }else if(currentLanguage === "eng"){
    language=["Welcome","Start searching","Start"];
    languageForm=["About Us","We are a website that provides information about the world of eSports. Our goal is to provide you with the latest news and event information about major video game competitions and tournaments. We are a website that provides information about the world of eSports. Our goal is to provide you with the latest news and event information about major video game competitions and tournaments.",
      "CONTACT WITH US","Query type", "General","Help","Others","Company","Type of company","Select","Startup","Corporate","Others","Name","Email",
      "Message","Send","WHO WE ARE"];
  }

  if (currentSection === "home") {
    return (
      <div className="video-container bg-black overflow-hidden">
        {/*Video demasiado grande, no se puede guardar en github*/}
        <video autoPlay loop muted playsInline className="background-video">
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>{language[0]}</h1>
          <p>{language[1]}</p>
          <button className="btn btn-danger w-auto">{language[2]}</button>
        </div>
      </div>
    );
  } else if (currentSection === "form") {
    return (
      <div className="form-container bg-black position-relative w-100 pt-5 pb-3 overflow-hidden">
        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1 ">
            <h2>{languageForm[0]}</h2>
            <p>
              {languageForm[1]}
            </p>
          </div>
          <div style={{width:"32%"}}>

          </div>
        </div>

        <div className="row pt-5 d-flex justify-content-around ">
          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5 me-lg-5">
            <h2>{languageForm[2]}</h2>
            <div className="formulario-kontainer bg-dark p-4 rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="kontsulta" className="form-label text-white">
                  {languageForm[3]}
                  </label>
                  <select id="kontsulta" className="form-select input-pertsonalizatua">
                    <option selected>{languageForm[4]}</option>
                    <option value="orokorra">{languageForm[4]}</option>
                    <option value="laguntza">{languageForm[5]}</option>
                    <option value="besteak">{languageForm[6]}</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="enpresa" className="form-label text-white">
                      {languageForm[7]}
                    </label>
                    <input
                      type="text"
                      id="enpresa"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="enpresaMota" className="form-label text-white">
                      {languageForm[8]}
                    </label>
                    <select id="enpresaMota" className="form-select input-pertsonalizatua">
                      <option selected>{languageForm[9]}</option>
                      <option value="startup">{languageForm[10]}</option>
                      <option value="korporatiboa">{languageForm[11]}</option>
                      <option value="besteak">{languageForm[12]}</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="izena" className="form-label text-white">
                      {languageForm[13]} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="izena"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="posta" className="form-label text-white">
                      {languageForm[14]} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="posta"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="mezua" className="form-label text-white">
                    {languageForm[15]} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="mezua"
                    className="form-control input-pertsonalizatua"
                    rows={4}
                    placeholder="Idatzi hemen"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-outline-success w-100">
                    {languageForm[16]}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5">
            <h2>{languageForm[17]}</h2>
            <div className="d-flex justify-content-center gap-5 flex-wrap">
              <div className="kidea text-center">
                <img
                  src={FotoMikel}
                  alt="Mikel Goya"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Mikel Goya</h5>
              </div>
              <div className="kidea text-center">
                <img
                  src={FotoKoldo}
                  alt="Koldo Garcia"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Koldo Garcia</h5>
              </div>
              <div className="kidea text-center">
                <img
                  src={FotoIker}
                  alt="Iker Rodriguez"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Iker Rodriguez</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

      
export default Section;
