import Image from "next/image";
import { SiteFooter } from "./site-footer";
import { SiteNavigation } from "./site-navigation";

export function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <SiteNavigation className="final-navbar final-navbar--visible project-navbar" rootNavigation />
      <section className="contact-page__split" aria-labelledby="contact-title">
        <div className="contact-page__image">
          <Image
            src="/images/projects/dh-68/6.jpg"
            alt="A light-filled White Linen living room with natural stone shelving and sculptural furniture."
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="contact-page__panel">
          <div className="contact-page__form-wrap">
            <h1 id="contact-title">Get in touch</h1>
            <form
              className="contact-form"
              action="mailto:alexandra@whitelinen.ae"
              method="post"
              encType="text/plain"
            >
              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span>Your name</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label className="contact-form__field">
                  <span>Email address</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
              </div>
              <label className="contact-form__field">
                <span>Subject of message</span>
                <input type="text" name="subject" required />
              </label>
              <label className="contact-form__field contact-form__field--message">
                <span>Your message</span>
                <textarea name="message" required />
              </label>
              <button className="contact-form__submit" type="submit">Submit form</button>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
