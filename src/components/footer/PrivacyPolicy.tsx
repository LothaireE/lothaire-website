import { useLanguageContext } from "@/context/appContext";

const PrivacyPolicy = () => {
  const { t } = useLanguageContext();
  return (
    <section className="mx-auto w-full max-w-4xl px-6">
      <h2 className="text-3xl font-semibold tracking-[-0.04em]">Privacy</h2>
      <div className="mt-6 space-y-4 text-foreground/80">
        <p>Datenschutzerklärung</p>
        <div>
          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">1. Allgemeine Hinweise</h4>
            <p>
              Diese Website dient der Präsentation eines persönlichen
              Portfolios. Der Schutz Ihrer persönlichen Daten ist uns wichtig.
            </p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">2. Verantwortlicher</h4>
            <p>
              {t("profile.firstname")} {t("profile.lastname")}
            </p>
            <p>
              {t("profile.address.street")} {t("profile.address.streetNumber")}
            </p>
            <p>
              {t("profile.address.zipcode")} {t("profile.address.city")}
            </p>
            <p>{t("profile.address.country")}</p>

            <p className="pt-2">E-Mail: {t("profile.email")}</p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">3. Hosting</h4>
            <p>
              Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA gehostet.
            </p>
            <p>
              Vercel verarbeitet personenbezogene Daten wie IP-Adressen zur
              Bereitstellung der Website. Dabei kann es zu einer Übertragung von
              Daten in die USA kommen.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einem sicheren und effizienten
              Betrieb der Website).
            </p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">4. Zugriffsdaten (Server-Logfiles)</h4>
            <p>
              Beim Besuch dieser Website werden automatisch Informationen
              erfasst:
            </p>
            <ul className="py-0.5 pl-5">
              <li>- IP-Adresse</li>
              <li>- Datum und Uhrzeit der Anfrage</li>
              <li>- Browsertyp und Version</li>
              <li>- Betriebssystem</li>
            </ul>
            <p>
              Diese Daten dienen der Sicherstellung eines störungsfreien
              Betriebs und der Sicherheit der Website.
            </p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">5. Kontaktaufnahme</h4>
            <p>
              Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur
              Bearbeitung Ihrer Anfrage gespeichert.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO (Vertrag oder vorvertragliche Maßnahmen).
            </p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">6. Cookies</h4>
            <p>Diese Website verwendet keine Cookies zu Tracking-Zwecken.</p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">7. Ihre Rechte</h4>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="py-0.5 pl-5">
              <li>- Auskunft (Art. 15 DSGVO)</li>
              <li>- Berichtigung (Art. 16 DSGVO)</li>
              <li>- Löschung (Art. 17 DSGVO)</li>
              <li>- Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>- Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>- Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:</p>
            <p>{t("profile.email")}</p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <h4 className="pb-0.5">
              8. Beschwerderecht bei der Aufsichtsbehörde
            </h4>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren.
            </p>
          </div>

          <div className="py-2 md:py-4 text-foreground/80">
            <p>Zuständige Behörde in Berlin:</p>
            <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
            <p>Alt-Moabit 59-61</p>
            <p>10555 Berlin</p>
            <p>https://www.datenschutz-berlin.de/</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

//         <div>
//             <p>Datenschutzerklärung

// 1. Allgemeine Hinweise
// Diese Website dient der Präsentation eines persönlichen Portfolios. Der Schutz Ihrer persönlichen Daten ist uns wichtig.

// 2. Hosting
// Diese Website wird über Vercel Inc. gehostet.
// Beim Besuch der Website werden automatisch technische Daten erfasst (z. B. IP-Adresse, Browser, Betriebssystem).

// 3. Zugriffsdaten
// Beim Aufrufen dieser Website werden durch den Hostinganbieter automatisch Informationen erfasst und in sogenannten Server-Logfiles gespeichert:
// - IP-Adresse
// - Datum und Uhrzeit der Anfrage
// - Browsertyp und Version
// - Betriebssystem

// Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs.

// 4. Kontaktaufnahme
// Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zwecks Bearbeitung gespeichert.

// 5. Cookies
// Diese Website verwendet keine Cookies zu Tracking-Zwecken.
// (Falls tu ajoutes analytics → à modifier)

// 6. Ihre Rechte
// Sie haben jederzeit das Recht auf:
// - Auskunft
// - Berichtigung
// - Löschung Ihrer Daten

// Kontaktieren Sie uns dazu unter: [ton email]

// 7. Verantwortlicher
// Lothaire [Nom de famille]
// [Adresse complète]
// E-Mail: [ton email]</p>
//         </div>
