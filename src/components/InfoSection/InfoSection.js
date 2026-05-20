import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="infoSect">
      <p className="infoSect-title">важлива інформація</p>

      <div className="infoSect-wrapper">
        <div className="infoSect-image">
          <img src="/laptop.jpg" alt="Процес роботи" />
        </div>
        <div className="infoSect-card">
          <div className="infoSect-card-content">
            <h3>ВАШ КОМФОРТ — НАШ ПРІОРІТЕТ</h3>
            <p>
              Ми віримо, що меблі — це не просто предмети інтер’єру, а основа вашого 
              щоденного затишку. Кожна модель у нашому каталозі проходить ретельну 
              перевірку якості, щоб ви могли насолоджуватися комфортом довгі роки. 
              Створюйте простір, у який хочеться повертатися кожного дня.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;