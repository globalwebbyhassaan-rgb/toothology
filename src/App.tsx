import { FormEvent, useState } from "react";

const heroImage =
  "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2200&h=1500";
const aboutImage =
  "https://images.pexels.com/photos/5793695/pexels-photo-5793695.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1100";
const physioImage =
  "https://images.pexels.com/photos/4506160/pexels-photo-4506160.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1100";

type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "check"
  | "clock"
  | "map-pin"
  | "menu"
  | "phone"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M4 12h15" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7.4 4.5 5.8 6.2c-.7.7-.9 1.8-.5 2.7 1.9 4.5 5.4 8 9.9 9.9.9.4 2 .2 2.7-.5l1.7-1.6c.6-.6.6-1.6 0-2.2l-1.9-1.9c-.5-.5-1.3-.6-1.9-.2l-1.5 1.1c-2.1-1.1-3.8-2.8-4.9-4.9l1.1-1.5c.4-.6.3-1.4-.2-1.9L9.6 4.5c-.6-.6-1.6-.6-2.2 0Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
  }
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <path d="M21 5.5v31M5.5 21h31" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12.8 12.8 29.2 29.2M29.2 12.8 12.8 29.2" stroke="currentColor" strokeWidth="1.1" opacity=".5" />
        <circle cx="21" cy="21" r="4" fill="currentColor" />
      </svg>
    </span>
  );
}

type FormFields = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const initialForm: FormFields = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

const dentalServices = [
  "General Dentistry",
  "Teeth Cleaning & Hygiene",
  "Dental Fillings",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Cosmetic Dentistry",
  "Dental Checkups",
];

const physiotherapyServices = [
  "Pain management",
  "Muscle and joint rehabilitation",
  "Sports injuries",
  "Post-injury recovery",
  "Mobility and strength improvement",
];

const benefits = [
  {
    number: "01",
    title: "Professional care",
    copy: "Thoughtful clinical decisions, clear guidance and attention to every detail.",
  },
  {
    number: "02",
    title: "Patient-focused treatment",
    copy: "Care plans shaped around your comfort, goals and everyday life.",
  },
  {
    number: "03",
    title: "A clean, calm environment",
    copy: "A hygienic clinic designed to make every visit feel considered and easy.",
  },
  {
    number: "04",
    title: "Evening appointments",
    copy: "Dental and physiotherapy services in one convenient Lahore location.",
  },
];

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <Mark />
        <p className="section-kicker">Amin Health Studio</p>
        <h1>That page has moved.</h1>
        <p>Return to our clinic homepage to explore dental and physiotherapy care in Lahore.</p>
        <a className="button button-dark" href="/">
          Return home <Icon name="arrow-up-right" size={17} />
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormFields>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const isNotFound = window.location.pathname !== "/" && window.location.pathname !== "/index.html";

  if (isNotFound) {
    return <NotFound />;
  }

  const closeMenu = () => setMenuOpen(false);
  const updateField = (field: keyof FormFields, value: string) => {
    setSubmitted(false);
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <img className="hero-image" src={heroImage} alt="Dentist providing attentive care in a bright modern clinic" />
        <div className="hero-overlay" />
        <nav className="site-nav page-width" aria-label="Main navigation">
          <a className="brand brand-light" href="#top" aria-label="Amin Health Studio home" onClick={closeMenu}>
            <Mark />
            <span className="brand-copy">
              <strong>Amin Health</strong>
              <small>Dental + Physiotherapy</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={22} />
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Dental</a>
            <a href="#physiotherapy" onClick={closeMenu}>Physiotherapy</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#appointments" onClick={closeMenu}>
              Book an Appointment <Icon name="arrow-up-right" size={16} />
            </a>
          </div>
        </nav>

        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Amin Health Studio, Lahore</p>
            <h1>Care that helps you <em>move forward.</em></h1>
            <p className="hero-tagline">Specialized Dental clinic &amp; Physiotherapy</p>
            <p className="hero-description">
              Thoughtful dental and physiotherapy care, delivered with clinical confidence and a human touch.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#appointments">
                Book an Appointment <Icon name="arrow-up-right" size={17} />
              </a>
              <a className="text-link light-link" href="tel:+923260866651">
                <Icon name="phone" size={17} /> Call 03260866651
              </a>
            </div>
          </div>
          <div className="hero-footnote">
            <span>12 PM - 9 PM</span>
            <span className="hero-footnote-line" />
            <span>60 CCA, Khayaban E Amin</span>
          </div>
        </div>
      </header>

      <main>
        <section className="section intro-section" id="about">
          <div className="page-width intro-grid">
            <div className="intro-heading reveal-on-load">
              <p className="section-kicker">A considered approach to care</p>
              <h2>Clinical expertise, delivered with <em>ease.</em></h2>
            </div>
            <div className="intro-copy reveal-on-load">
              <p className="lead-copy">
                Amin Health Studio is a calm, modern clinic for the care your body relies on. We bring professional dentistry and physiotherapy together under one roof in Lahore.
              </p>
              <p>
                Every appointment is grounded in clear advice, careful treatment and respect for your comfort. From regular hygiene visits to recovery support, we take the time to make care feel personal.
              </p>
              <a className="text-link dark-link" href="#services">
                Explore our services <Icon name="arrow-right" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section about-section" aria-label="Our approach">
          <div className="page-width about-grid">
            <div className="image-frame about-image-wrap">
              <img src={aboutImage} alt="Physiotherapist guiding a patient through a treatment session" loading="lazy" />
              <span className="image-caption">Personalized care, every visit</span>
            </div>
            <div className="about-details">
              <p className="section-kicker">Why Amin Health Studio</p>
              <h2>Better care starts with feeling <em>heard.</em></h2>
              <p>
                Your goals shape the plan. We pair experienced treatment with an environment that feels clean, unhurried and reassuring, so you can leave knowing what comes next.
              </p>
              <div className="detail-lines">
                <div><span>01</span><strong>Comfort first</strong><p>Clear explanations and a gentle pace from consultation to follow-up.</p></div>
                <div><span>02</span><strong>Hygiene always</strong><p>Thoughtful protocols and a clinic kept to a high standard.</p></div>
                <div><span>03</span><strong>One trusted place</strong><p>Dental and physiotherapy support, conveniently together.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-width">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">Dental care</p>
                <h2>Confident smiles begin with <em>good care.</em></h2>
              </div>
              <p>From everyday prevention to restorative and cosmetic treatment, our dental services are designed around lasting oral health.</p>
            </div>
            <div className="service-list dental-list">
              {dentalServices.map((service, index) => (
                <a className="service-row" href="#appointments" key={service}>
                  <span className="service-number">0{index + 1}</span>
                  <span>{service}</span>
                  <Icon name="arrow-up-right" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section physio-section" id="physiotherapy">
          <div className="page-width physio-grid">
            <div className="physio-copy">
              <p className="section-kicker">Physiotherapy</p>
              <h2>Get back to the things that <em>matter.</em></h2>
              <p className="lead-copy">
                Practical, progressive physiotherapy for less pain, better movement and more confidence in your body.
              </p>
              <p>
                Whether you are recovering from an injury, managing ongoing discomfort or building strength, we meet you where you are and help you move with purpose.
              </p>
              <div className="service-list physio-list">
                {physiotherapyServices.map((service) => (
                  <a className="service-row" href="#appointments" key={service}>
                    <span>{service}</span>
                    <Icon name="arrow-up-right" size={18} />
                  </a>
                ))}
              </div>
              <a className="button button-dark" href="#appointments">
                Book physiotherapy <Icon name="arrow-up-right" size={17} />
              </a>
            </div>
            <div className="image-frame physio-image-wrap">
              <img src={physioImage} alt="Physiotherapist supporting a patient's shoulder mobility" loading="lazy" />
              <div className="image-side-note"><span>Movement</span><span>with purpose</span></div>
            </div>
          </div>
        </section>

        <section className="why-section" id="why-us">
          <div className="page-width">
            <div className="why-intro">
              <p className="section-kicker section-kicker-light">The Amin standard</p>
              <h2>Professional care.<br /><em>Humanly delivered.</em></h2>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit.number}>
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section appointment-section" id="appointments">
          <div className="page-width appointment-grid">
            <div className="appointment-intro">
              <p className="section-kicker">Start with a conversation</p>
              <h2>Let us find the right next <em>step.</em></h2>
              <p>Tell us a little about what you need. Our team will get back to you to confirm a time that works.</p>
              <div className="direct-contact">
                <span className="contact-label">Prefer to call?</span>
                <a href="tel:+923260866651">03260866651</a>
                <span>Open daily, 12 PM - 9 PM</span>
              </div>
            </div>
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" value={formData.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your full name" autoComplete="name" required />
                </label>
                <label>
                  <span>Phone number</span>
                  <input type="tel" name="phone" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="03XX XXXXXXX" autoComplete="tel" inputMode="tel" pattern="[0-9+()\-\s]{10,18}" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Preferred service</span>
                  <select name="service" value={formData.service} onChange={(event) => updateField("service", event.target.value)} required>
                    <option value="" disabled>Select a service</option>
                    <option>Dental consultation</option>
                    <option>Dental treatment</option>
                    <option>Teeth cleaning</option>
                    <option>Physiotherapy consultation</option>
                    <option>Physiotherapy treatment</option>
                  </select>
                </label>
                <label>
                  <span>Preferred date / time</span>
                  <input type="text" name="date" value={formData.date} onChange={(event) => updateField("date", event.target.value)} placeholder="e.g. Tuesday after 5 PM" required />
                </label>
              </div>
              <label>
                <span>Message <small>(optional)</small></span>
                <textarea name="message" value={formData.message} onChange={(event) => updateField("message", event.target.value)} placeholder="How can we help?" rows={4} />
              </label>
              <div className="form-submit-row">
                <button className="button button-dark" type="submit">Request an appointment <Icon name="arrow-up-right" size={17} /></button>
                {submitted && <p className="form-success" role="status"><Icon name="check" size={16} /> Thank you. We will call to confirm.</p>}
              </div>
            </form>
          </div>
        </section>

        <section className="section location-section" id="contact">
          <div className="page-width location-grid">
            <div className="location-copy">
              <p className="section-kicker">Visit the clinic</p>
              <h2>Good care, close to <em>home.</em></h2>
              <p className="lead-copy">Find us at 60 CCA, Khayaban E Amin, Lahore, Pakistan.</p>
              <div className="location-details">
                <div><Icon name="map-pin" size={19} /><span>60 CCA, Khayaban E Amin<br />Lahore, Pakistan</span></div>
                <div><Icon name="clock" size={19} /><span>Open daily<br />12 PM - 9 PM</span></div>
                <div><Icon name="phone" size={19} /><a href="tel:+923260866651">03260866651</a></div>
              </div>
              <a className="button button-dark" href="https://www.google.com/maps/dir/?api=1&destination=60%20CCA%2C%20Khayaban%20E%20Amin%2C%20Lahore%2C%20Pakistan" target="_blank" rel="noreferrer">
                Get directions <Icon name="arrow-up-right" size={17} />
              </a>
            </div>
            <div className="map-wrap">
              <iframe
                title="Map showing Amin Health Studio in Khayaban E Amin, Lahore"
                src="https://www.google.com/maps?q=60%20CCA%2C%20Khayaban%20E%20Amin%2C%20Lahore%2C%20Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="Amin Health Studio home">
              <Mark />
              <span className="brand-copy">
                <strong>Amin Health</strong>
                <small>Dental + Physiotherapy</small>
              </span>
            </a>
            <p>Specialized Dental clinic &amp; Physiotherapy</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#about">About the clinic</a>
            <a href="#services">Dental services</a>
            <a href="#physiotherapy">Physiotherapy</a>
            <a href="#why-us">Why choose us</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Contact</span>
            <a href="tel:+923260866651">03260866651</a>
            <span>12 PM - 9 PM, daily</span>
            <span>60 CCA, Khayaban E Amin<br />Lahore, Pakistan</span>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Amin Health Studio</span>
          <span>Dental care and physiotherapy in Lahore</span>
        </div>
      </footer>
    </div>
  );
}