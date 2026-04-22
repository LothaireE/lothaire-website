import { useLanguageContext } from "@/context/appContext";



const ImpressumSection = () => {
    const { t } = useLanguageContext();

    return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-semibold tracking-[-0.04em]">Impressum</h2>
        <div className="mt-6 space-y-4 text-foreground/80">
            <p>Angaben gemäß § 5 TMG</p>
            <p>{t("profile.firstname")} {t("profile.lastname")}</p>
            <div>
                <p>Impressum</p>  

            <p>Angaben gemäß § 5 TMG</p>

            <p>{t("profile.address.street")} {t("profile.address.streetNumber")}</p>
            <p>{t("profile.address.postalCode")} {t("profile.address.city")}</p>
            <p>{t("profile.address.country")}</p>

            <p>Kontakt</p>
            <p>E-Mail: {t("profile.email")}</p>
            <p>Telefon: {t("profile.phone")}</p>

            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>

            <p>Haftung für Inhalte</p>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>Haftung für Links</p>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.</p>

            <p>Urheberrecht</p>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht.</p>
        
            </div>
        </div>
        </section>
    );
};

export default ImpressumSection;


//         <div>
//             <p>Impressum

// Angaben gemäß § 5 TMG

// Lothaire [Nom de famille]
// [Adresse complète]
// [Code postal, Ville]
// Deutschland

// Kontakt
// E-Mail: [ton email]
// Telefon: [optionnel]

// Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
// Lothaire [Nom de famille]
// [Adresse complète]

// Haftung für Inhalte
// Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.

// Haftung für Links
// Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.

// Urheberrecht
// Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht.</p>
//         </div>