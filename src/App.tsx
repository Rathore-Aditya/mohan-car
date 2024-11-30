import './App.css';
// import whatsapp from './assets/WhatsApp.webp';
import car from './assets/min_car.png';
import { message, WHATSAPP_LINK } from './utls/utils';

const App = () => {
  const handleWhatsappClick = () => {
    const url = `${WHATSAPP_LINK}?text=${message}`
    window.open(url, '_blank')
  }


  return (
    <main className='main-wrapper'>
      <div className='card-wrapper'>
        <span className='business-title'>Mohan Motar Car Training & Driving School.</span>
        <div className='owner-image-wrapper'>
            <img src={car} alt='car' />
        </div>

        <div className='address'>
          Maharaja Greens, Sonkh Road, Mathura.
        </div>

        <div className='contact-me' onClick={handleWhatsappClick}>
          {/* <img src={whatsapp} alt='whatsapp' /> */}
        </div>

        <div className='contact-support'>
          <span>9760245111</span>
          <span>9756119393</span>
        </div>
      </div>
      
    </main>
  )
}

export default App;
