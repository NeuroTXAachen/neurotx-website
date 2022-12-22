import { FooterComponent } from "../../components/FooterComponent";
import { footerDataObj } from "../../components/FooterComponent/FooterData";

import Navbar from "../../components/Navbar";
import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  opacity: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: fit-content;
  background-color: #040142;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;

export const Heading = styled.p`
  position: relative;
  line-height: 1.8;
  font-size: 120px;
  padding-top: 10vh;
  margin: 0 5rem 0 5rem;
  color: #fff;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: 5vw;
    padding-top: 5vh;
    padding-left: 0%;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  line-height: 1.2;
  font-family: "Montserrat", sans-serif;
  z-index: 10;
  margin: 0 5rem 0 5rem;
  font-size: 24px;
  color: #fff;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 16pt;
    margin: 5vw;
  }
`;
const Impressum = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Heading>Impressum</Heading>
        <Subtitle>
          NeuroTX Aachen e.V. ist eingetragen beim Amtsgericht Aachen, <br />
          Nr. VR 6094. <br />
          Vertretungsberechtigter Vorstand gemäß § 26 <br />
          BGB: Mohamed Alhaskir. <br />
          <br />
          <strong>
            ALLGEMEINER HINWEIS UND PFLICHTINFORMATIONEN BENENNUNG DER
            VERANTWORTLICHEN STELLE
          </strong>
          <br />
          <br />
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist: <br />
          <br />
          NeuroTX Aachen e.V.,
          <br />
          Collective Incubator e. V.
          <br />
          Jülicher Str. 209 <br />
          52070 Aachen <br />
          <br />
          Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.). <br />
          <br />
          HAFTUNG FÜR INHALTE <br />
          <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
          <br />
          <br />
          HAFTUNG FÜR LINKS <br />
          <br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen. <br />
          <br />
          URHEBERRECHT
          <br />
          <br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
          <br />
          <br />
          WIDERRUF IHRER EINWILLIGUNG ZUR DATENVERARBEITUNG
          <br />
          <br />
          Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
          Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
          Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
          formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          <br />
          <br />
          RECHT AUF BESCHWERDE BEI DER ZUSTÄNDIGEN AUFSICHTSBEHÖRDE
          <br />
          <br />
          Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
          Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen
          ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
          Sitz unseres Unternehmens befindet. Der folgende Link stellt eine
          Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
          <br />
          <br />
          RECHT AUF DATENÜBERTRAGBARKEIT
          <br />
          <br />
          Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
          Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
          die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          <br />
          <br />
          RECHT AUF AUSKUNFT, BERICHTIGUNG, SPERRUNG, LÖSCHUNG
          <br />
          <br />
          Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an
          uns wenden.
          <br />
          <br />
          SSL- BZW. TLS-VERSCHLÜSSELUNG
          <br />
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
          Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
          über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
          erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile
          Ihres Browsers und am Schloss-Symbol in der Browserzeile.
          <br />
          <br />
          KONTAKTFORMULAR
          <br />
          <br />
          Per Kontaktformular übermittelte Daten werden einschließlich Ihrer
          Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um
          für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten
          findet ohne Ihre Einwilligung nicht statt. Die Verarbeitung der in das
          Kontaktformular eingegebenen Daten erfolgt ausschließlich auf
          Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein
          Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich.
          Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Über das
          Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
          keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende
          gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben
          unberührt.
          <br />
          <br />
          YOUTUBE
          <br />
          <br />
          Für Integration und Darstellung von Videoinhalten nutzt unsere Website
          Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC,
          901 Cherry Ave., San Bruno, CA 94066, USA. Bei Aufruf einer Seite mit
          integriertem YouTube-Plugin wird eine Verbindung zu den Servern von
          YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten
          Sie aufgerufen haben. YouTube kann Ihr Surfverhalten direkt Ihrem
          persoenlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto
          eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit,
          dies zu unterbinden. Die Nutzung von YouTube erfolgt im Interesse
          einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt
          ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
          dar. Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von YouTube unter:
          https://www.google.de/intl/de/policies/privacy.
          <br />
          <br />
          COOKIES
          <br />
          <br />
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
          Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei,
          unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende
          Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere
          Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
          Solche Cookies helfen uns, Sie bei Rueckkehr auf unserer Website
          wiederzuerkennen. Mit einem modernen Webbrowser können Sie das Setzen
          von Cookies überwachen, einschränken oder unterbinden. Viele
          Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
          Schliessen des Programms von selbst gelöscht werden. Die Deaktivierung
          von Cookies kann eine eingeschränkte Funktionalität unserer Website
          zur Folge haben. Das Setzen von Cookies, die zur Ausuebung
          elektronischer Kommunikationsvorgänge oder der Bereitstellung
          bestimmter, von Ihnen erwuenschter Funktionen (z.B. Warenkorb)
          notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Als Betreiber dieser Website haben wir ein berechtigtes Interesse an
          der Speicherung von Cookies zur technisch fehlerfreien und
          reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung
          anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in
          dieser Datenschutzerklärung separat behandelt.
          <br />
          <br />
          GOOGLE WEB FONTS
          <br />
          <br />
          Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google
          Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Durch
          den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns
          gewünschte Darstellung unserer Website zu präsentieren, unabhängig
          davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt
          über den Abruf der Google Web Fonts von einem Server von Google in den
          USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei
          handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns
          besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage
          von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
          ein berechtigtes Interesse an der optimalen Darstellung und
          Übertragung unseres Webauftritts. Das Unternehmen Google ist für das
          us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert.
          Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU
          geltenden Datenschutzniveaus gewährleisten. Einzelheiten über Google
          Web Fonts finden Sie unter:{" "}
          <a
            href="https://www.google.com/fonts#AboutPlace:about"
            target="_blank"
            style={{ color: "white", textDecoration: "underline" }}
          >
            www.google.com/fonts#AboutPlace:about
          </a>{" "}
          &nbsp; und weitere Informationen in den Datenschutzbestimmungen von
          Google:{" "}
          <a
            href="https://policies.google.com/privacy/partners?hl=de"
            target="_blank"
            style={{ color: "white", textDecoration: "underline" }}
          >
            policies.google.com/privacy/partners?hl=de
          </a>{" "}
          <br />
          <br />
          <br />
          <br />
        </Subtitle>
      </Container>
      <FooterComponent {...footerDataObj} />
    </>
  );
};

export default Impressum;
