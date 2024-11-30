import "./App.css";
import whatsapp from "./assets/WhatsApp.svg";
import car from "./assets/min_car.png";
import { message, WHATSAPP_LINK } from "./utls/utils";

const App = () => {
  const handleWhatsappClick = () => {
    const url = `${WHATSAPP_LINK}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <main className="main-wrapper">
      <div className="card-wrapper">
        <span className="business-title">
          Mohan Motar Car Training & Driving School.
        </span>
        <div className="owner-image-wrapper">
          <img src={car} alt="car" />
        </div>

        <div className="address">Maharaja Greens, Sonkh Road, Mathura.</div>

        <div className="contact-me" onClick={handleWhatsappClick}>
          <img src={whatsapp} alt="whatsapp" />
        </div>

        <div className="contact-support">
          <span>9760245111</span>
          <span>9756119393</span>
        </div>
      </div>

      <div className="map">
        <iframe
          // width="600"
          height="100"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d884.9465052414403!2d77.62972916958145!3d27.475920288354605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI4JzMzLjMiTiA3N8KwMzcnNDkuMyJF!5e0!3m2!1sen!2sin!4v1732967464237!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default App;
