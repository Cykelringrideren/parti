import { useState } from "react";

const colors = {
  primary: {
    red: { hex: "#B22234", rgb: "178, 34, 52", name: "Fællesskab Rød" },
    blue: { hex: "#2C5282", rgb: "44, 82, 130", name: "Frihed Blå" },
    green: { hex: "#2D6A4F", rgb: "45, 106, 79", name: "Natur Grøn" },
  },
  neutral: {
    dark: { hex: "#1A1A1A", rgb: "26, 26, 26", name: "Tekst Sort" },
    text: { hex: "#444444", rgb: "68, 68, 68", name: "Brødtekst" },
    muted: { hex: "#555555", rgb: "85, 85, 85", name: "Sekundær Tekst" },
    border: { hex: "#E8E6E1", rgb: "232, 230, 225", name: "Skillelinje" },
    bgAlt: { hex: "#F3F1EC", rgb: "243, 241, 236", name: "Baggrund Alt" },
    bg: { hex: "#FAFAF7", rgb: "250, 250, 247", name: "Baggrund" },
  },
};

function ColorSwatch({ color, size = "large" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const isLarge = size === "large";
  return (
    <div
      onClick={handleCopy}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div
        style={{
          width: isLarge ? 160 : 120,
          height: isLarge ? 100 : 70,
          background: color.hex,
          borderRadius: 4,
          marginBottom: 10,
          position: "relative",
        }}
      >
        {copied && (
          <div style={{
            position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            background: "rgba(0,0,0,0.5)", borderRadius: 4,
            color: "#fff", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12,
          }}>
            Kopieret
          </div>
        )}
      </div>
      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, color: "#1A1A1A", marginBottom: 2 }}>
        {color.name}
      </p>
      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#555", marginBottom: 1 }}>
        {color.hex}
      </p>
      <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888" }}>
        RGB {color.rgb}
      </p>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} style={{ padding: "80px 0", borderBottom: "1px solid #E8E6E1" }}>
      <p style={{
        fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.1em", textTransform: "uppercase", color: "#B22234", marginBottom: 12,
      }}>
        {label}
      </p>
      <h2 style={{
        fontFamily: "'Spectral', Georgia, serif", fontSize: 32, fontWeight: 300,
        color: "#1A1A1A", marginBottom: 40, lineHeight: 1.3,
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Principle({ number, title, description }) {
  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 28 }}>
      <span style={{
        fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 600,
        color: "#2C5282", minWidth: 24,
      }}>
        {number}
      </span>
      <div>
        <h4 style={{
          fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
          color: "#1A1A1A", marginBottom: 6,
        }}>
          {title}
        </h4>
        <p style={{
          fontFamily: "'Spectral', Georgia, serif", fontSize: 15, lineHeight: 1.7,
          color: "#444", fontWeight: 300,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BrandGuide() {
  return (
    <div style={{
      fontFamily: "'Spectral', Georgia, serif",
      color: "#1A1A1A",
      background: "#FAFAF7",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;600;700&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #FAFAF7; }
        .guide-container { max-width: 860px; margin: 0 auto; padding: 0 32px; }
      `}</style>

      {/* Header */}
      <header style={{ padding: "48px 0 0", borderBottom: "1px solid #E8E6E1" }}>
        <div className="guide-container">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ display: "flex", gap: 3 }}>
              <div style={{ width: 4, height: 24, background: "#B22234" }} />
              <div style={{ width: 4, height: 24, background: "#2C5282" }} />
              <div style={{ width: 4, height: 24, background: "#2D6A4F" }} />
            </div>
            <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "0.04em" }}>
              FRIT FÆLLESSKAB
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 16 }}>
            Visuel identitet
          </h1>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "#555",
            lineHeight: 1.7, maxWidth: 520, paddingBottom: 48,
          }}>
            Retningslinjer for Frit Fællesskabs visuelle kommunikation. Farvekoder, typografi, logovariant, designprincipper og anvendelse.
          </p>
        </div>
      </header>

      <div className="guide-container">

        {/* ===== LOGO ===== */}
        <Section id="logo" label="01" title="Logo">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: 32 }}>
            Logoet består af tre vertikale streger i partiets farver efterfulgt af partiets navn i versaler. De tre streger symboliserer partiets tre kerneværdier: fællesskab (rød), frihed (blå) og natur (grøn). Logoet skal altid vises med tilstrækkelig luft omkring sig.
          </p>

          {/* Logo variants */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
            {/* Light bg */}
            <div style={{
              background: "#FAFAF7", border: "1px solid #E8E6E1", borderRadius: 4,
              padding: "40px 48px", flex: 1, minWidth: 280, textAlign: "center",
            }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  <div style={{ width: 5, height: 28, background: "#B22234" }} />
                  <div style={{ width: 5, height: 28, background: "#2C5282" }} />
                  <div style={{ width: 5, height: 28, background: "#2D6A4F" }} />
                </div>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", color: "#1A1A1A" }}>
                  FRIT FÆLLESSKAB
                </span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 16 }}>
                Primær variant, lys baggrund
              </p>
            </div>
            {/* Dark bg */}
            <div style={{
              background: "#1A1A1A", borderRadius: 4,
              padding: "40px 48px", flex: 1, minWidth: 280, textAlign: "center",
            }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 3 }}>
                  <div style={{ width: 5, height: 28, background: "#B22234" }} />
                  <div style={{ width: 5, height: 28, background: "#2C5282" }} />
                  <div style={{ width: 5, height: 28, background: "#2D6A4F" }} />
                </div>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", color: "#FAFAF7" }}>
                  FRIT FÆLLESSKAB
                </span>
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 16 }}>
                Inverteret variant, mørk baggrund
              </p>
            </div>
          </div>

          {/* Logo icon only */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            <div style={{
              background: "#FAFAF7", border: "1px solid #E8E6E1", borderRadius: 4,
              padding: "32px 48px", textAlign: "center",
            }}>
              <div style={{ display: "inline-flex", gap: 4 }}>
                <div style={{ width: 6, height: 36, background: "#B22234" }} />
                <div style={{ width: 6, height: 36, background: "#2C5282" }} />
                <div style={{ width: 6, height: 36, background: "#2D6A4F" }} />
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 12 }}>
                Ikon / favicon
              </p>
            </div>
            <div style={{
              background: "#F3F1EC", border: "1px solid #E8E6E1", borderRadius: 4,
              padding: "32px 48px", textAlign: "center",
            }}>
              <div style={{ display: "inline-flex", gap: 3 }}>
                <div style={{ width: 40, height: 3, background: "#B22234" }} />
                <div style={{ width: 40, height: 3, background: "#2C5282" }} />
                <div style={{ width: 40, height: 3, background: "#2D6A4F" }} />
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 12 }}>
                Horisontalt divider-element
              </p>
            </div>
          </div>
        </Section>

        {/* ===== FARVER ===== */}
        <Section id="farver" label="02" title="Farver">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: 32 }}>
            Partiets farvepalet er bygget op omkring tre primærfarver der hver repræsenterer en kerneværdi, understøttet af en neutral palette til tekst, baggrunde og struktur. Klik på en farve for at kopiere hex-koden.
          </p>

          <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 20 }}>
            Primærfarver
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginBottom: 48 }}>
            {Object.values(colors.primary).map((c) => (
              <ColorSwatch key={c.hex} color={c} />
            ))}
          </div>

          <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 20 }}>
            Neutrale farver
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {Object.values(colors.neutral).map((c) => (
              <ColorSwatch key={c.hex} color={c} size="small" />
            ))}
          </div>

          <div style={{ marginTop: 40, padding: 24, background: "#F3F1EC", borderRadius: 4 }}>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 10 }}>
              Anvendelse af primærfarver
            </h4>
            <div style={{ fontSize: 14, lineHeight: 1.8, color: "#444", fontWeight: 300 }}>
              <p style={{ marginBottom: 6 }}><span style={{ color: "#B22234", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}>Rød (#B22234)</span> bruges til fremhævede elementer, kapitelmarkører for samfundspolitiske emner, call-to-action knapper og det kulturelle.</p>
              <p style={{ marginBottom: 6 }}><span style={{ color: "#2C5282", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}>Blå (#2C5282)</span> bruges til strukturelle og institutionelle emner, links, sekundære markeringer og det demokratiske.</p>
              <p><span style={{ color: "#2D6A4F", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}>Grøn (#2D6A4F)</span> bruges til miljø- og naturemner, positive handlinger, sekundære knapper og det grønne.</p>
            </div>
          </div>
        </Section>

        {/* ===== TYPOGRAFI ===== */}
        <Section id="typografi" label="03" title="Typografi">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: 40 }}>
            Typografien bruger to skriftfamilier der komplementerer hinanden: en serif til overskrifter og brødtekst, og en sans-serif til navigation, labels og funktionelle elementer.
          </p>

          {/* Spectral */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2C5282" }}>
                Primær
              </h3>
              <div style={{ width: 32, height: 1.5, background: "#2C5282" }} />
            </div>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "#555", marginBottom: 20 }}>
              Spectral (Production Type, fransk skrifthus, open source, selvhostet) / Fallback: Georgia, serif
            </p>
            <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 4, padding: 32 }}>
              <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 42, fontWeight: 300, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 16 }}>
                Frihed. Tryghed. Fællesskab.
              </p>
              <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 42, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 24 }}>
                Frihed. Tryghed. Fællesskab.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Light 300</p>
                  <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 18, fontWeight: 300, color: "#1A1A1A" }}>Overskrifter, hero-tekst</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Regular 400</p>
                  <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 18, fontWeight: 400, color: "#1A1A1A" }}>Brødtekst, citater</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Semibold 600</p>
                  <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 18, fontWeight: 600, color: "#1A1A1A" }}>Fremhævelser</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hanken Grotesk */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#B22234" }}>
                Sekundær
              </h3>
              <div style={{ width: 32, height: 1.5, background: "#B22234" }} />
            </div>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "#555", marginBottom: 20 }}>
              Hanken Grotesk (finsk inspiration, open source, selvhostet) / Fallback: sans-serif
            </p>
            <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 4, padding: 32 }}>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.3, marginBottom: 12 }}>
                FRIT FÆLLESSKAB
              </p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3, marginBottom: 24 }}>
                FRIT FÆLLESSKAB
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Regular 400</p>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 400, color: "#1A1A1A" }}>Navigation, labels</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Medium 500</p>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 500, color: "#1A1A1A" }}>Links, knapper</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Bold 700</p>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: "#1A1A1A" }}>Logo, kapitelnavne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Type scale */}
          <div style={{ padding: 24, background: "#F3F1EC", borderRadius: 4 }}>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 16 }}>
              Typografisk skala
            </h4>
            {[
              { label: "Hero", font: "Spectral", weight: 300, size: "42-64px", leading: "1.15" },
              { label: "Kapiteloverskrift", font: "Spectral", weight: 300, size: "24-34px", leading: "1.3" },
              { label: "Sektionslabel", font: "Hanken Grotesk", weight: 600, size: "11-13px", leading: "1.2" },
              { label: "Underoverskrift", font: "Hanken Grotesk", weight: 600, size: "14px", leading: "1.4" },
              { label: "Brødtekst", font: "Spectral", weight: 300, size: "16-17px", leading: "1.75-1.85" },
              { label: "Navigation", font: "Hanken Grotesk", weight: 500, size: "13px", leading: "1.2" },
              { label: "Småtekst", font: "Hanken Grotesk", weight: 400, size: "11-12px", leading: "1.5" },
            ].map((t, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                padding: "10px 0", borderBottom: i < 6 ? "1px solid #E8E6E1" : "none",
                flexWrap: "wrap", gap: 8,
              }}>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", minWidth: 150 }}>{t.label}</span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "#555" }}>{t.font}, {t.weight}</span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "#888" }}>{t.size} / {t.leading}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== DESIGNPRINCIPPER ===== */}
        <Section id="principper" label="04" title="Designprincipper">
          <Principle
            number="01"
            title="Seriøs minimalisme"
            description="Designet skal udstråle ro, alvor og troværdighed. Ingen dekoration for dekorationens skyld. Hvert element skal have en funktion. Generøs luft, stram typografi og kontrolleret brug af farve."
          />
          <Principle
            number="02"
            title="Farve med mening"
            description="De tre primærfarver bruges intentionelt, aldrig tilfældigt. Rød markerer det kulturelle og samfundsmæssige. Blå markerer det institutionelle og demokratiske. Grøn markerer natur og miljø. Farverne skal aldrig konkurrere, men veksle og understøtte indholdet."
          />
          <Principle
            number="03"
            title="Typografi bærer budskabet"
            description="Serif til indhold og budskab. Sans-serif til struktur og navigation. Overskrifter i light weight giver et roligt, selvbevidst udtryk. Versaler med letter-spacing bruges sparsomt til labels og navigation. Aldrig versaler i brødtekst."
          />
          <Principle
            number="04"
            title="Dansk og nordisk tonalitet"
            description="Designet skal føles dansk. Ingen glitrende gradients, ingen aggressiv grafik, ingen amerikanske designklicheer. Inspirationen er skandinavisk design: funktionelt, ærligt og smukt i sin enkelhed."
          />
          <Principle
            number="05"
            title="Tilgængelighed"
            description="Alt indhold skal være læsbart og tilgængeligt. Kontrast skal overholde WCAG AA-krav. Tekst skal være læsbar på alle skærmstørrelser. Animationer skal være subtile og aldrig forhindre adgang til indhold."
          />
          <Principle
            number="06"
            title="Konsistens på tværs"
            description="Den visuelle identitet skal være genkendelig fra hjemmeside til partiprogram til sociale medier til trykt materiale. De tre farvede streger, typografien og det minimalistiske udtryk er de gennemgående elementer."
          />
        </Section>

        {/* ===== ELEMENTER ===== */}
        <Section id="elementer" label="05" title="Designelementer">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: 32 }}>
            En samling af genbrugelige visuelle elementer der sikrer konsistens på tværs af alle medier.
          </p>

          {/* Buttons */}
          <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 20 }}>
            Knapper
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            {[
              { label: "Primær handling", border: "#B22234", color: "#B22234", bg: "transparent" },
              { label: "Sekundær handling", border: "#2D6A4F", color: "#2D6A4F", bg: "transparent" },
              { label: "Primær fyldt", border: "#B22234", color: "#fff", bg: "#B22234" },
              { label: "Sekundær fyldt", border: "#2D6A4F", color: "#fff", bg: "#2D6A4F" },
            ].map((btn, i) => (
              <button key={i} style={{
                fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "14px 32px", border: `2px solid ${btn.border}`,
                background: btn.bg, color: btn.color, cursor: "pointer",
              }}>
                {btn.label}
              </button>
            ))}
          </div>

          {/* Dividers */}
          <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 20 }}>
            Skillelinjer
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", height: 3 }}>
                <div style={{ flex: 1, background: "#B22234" }} />
                <div style={{ flex: 1, background: "#2C5282" }} />
                <div style={{ flex: 1, background: "#2D6A4F" }} />
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 8 }}>Fuld bredde, tre farver</p>
            </div>
            <div>
              <div style={{ display: "flex", gap: 3 }}>
                <div style={{ width: 40, height: 2, background: "#B22234" }} />
                <div style={{ width: 40, height: 2, background: "#2C5282" }} />
                <div style={{ width: 40, height: 2, background: "#2D6A4F" }} />
              </div>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 8 }}>Accent-linje, tre farver</p>
            </div>
            <div>
              <div style={{ width: 48, height: 2, background: "#B22234" }} />
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#888", marginTop: 8 }}>Enkelt accent-linje</p>
            </div>
          </div>

          {/* Chapter label */}
          <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: 20 }}>
            Kapitelmarkering
          </h3>
          <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 4, padding: 32, marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "#2D6A4F" }}>05</span>
              <div style={{ width: 32, height: 1.5, background: "#2D6A4F" }} />
            </div>
            <h3 style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: 28, fontWeight: 300, color: "#1A1A1A" }}>
              Kapiteloverskrift
            </h3>
          </div>
        </Section>

        {/* ===== DO / DON'T ===== */}
        <Section id="regler" label="06" title="Gør / Gør ikke">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 64 }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 24, height: 1.5, background: "#2D6A4F" }} />
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D6A4F" }}>Gør</span>
              </div>
              {[
                "Brug generøs luft og hvidt rum",
                "Lad typografien bære udtrykket",
                "Brug farverne intentionelt og sparsomt",
                "Hold et roligt, seriøst visuelt toneleje",
                "Sørg for konsistens på tværs af medier",
                "Brug altid de specificerede skrifttyper",
              ].map((t, i) => (
                <p key={i} style={{
                  fontFamily: "'Spectral', Georgia, serif", fontSize: 14,
                  lineHeight: 1.7, color: "#444", fontWeight: 300,
                  padding: "10px 0", borderBottom: i < 5 ? "1px solid #E8E6E1" : "none",
                }}>
                  {t}
                </p>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 24, height: 1.5, background: "#B22234" }} />
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B22234" }}>Gør ikke</span>
              </div>
              {[
                "Brug gradients, skygger eller glans-effekter",
                "Bland primærfarverne i samme element",
                "Brug stock-fotos med generisk æstetik",
                "Tilføj emojis eller ikoner i officielt materiale",
                "Brug andre skrifttyper end de specificerede",
                "Forvrida eller ændr proportioner på logoet",
              ].map((t, i) => (
                <p key={i} style={{
                  fontFamily: "'Spectral', Georgia, serif", fontSize: 14,
                  lineHeight: 1.7, color: "#444", fontWeight: 300,
                  padding: "10px 0", borderBottom: i < 5 ? "1px solid #E8E6E1" : "none",
                }}>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== SLOGAN ===== */}
        <Section id="slogan" label="07" title="Slogan og tonalitet">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: 32 }}>
            Partiets slogan er kort og præcist. Det kommunikerer de tre kerneværdier uden overflødige ord.
          </p>
          <div style={{ background: "#1A1A1A", borderRadius: 4, padding: "48px 40px", textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontFamily: "'Spectral', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "#FAFAF7", fontStyle: "italic" }}>
              Frihed. Tryghed. Fællesskab.
            </p>
          </div>
          <div style={{ padding: 24, background: "#F3F1EC", borderRadius: 4 }}>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 12 }}>
              Tonalitet i kommunikation
            </h4>
            <div style={{ fontSize: 14, lineHeight: 1.8, color: "#444", fontWeight: 300 }}>
              <p style={{ marginBottom: 6 }}>Rolig og selvbevidst. Aldrig aggressiv eller polemisk.</p>
              <p style={{ marginBottom: 6 }}>Saglig og konkret. Aldrig abstrakt eller akademisk.</p>
              <p style={{ marginBottom: 6 }}>Dansk og direkte. Aldrig importeret retorik eller buzzwords.</p>
              <p>Alvorlig med varme. Aldrig kynisk eller kold.</p>
            </div>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{ background: "#1A1A1A", padding: "48px 32px", marginTop: 80 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 3 }}>
              <div style={{ width: 3, height: 18, background: "#B22234" }} />
              <div style={{ width: 3, height: 18, background: "#2C5282" }} />
              <div style={{ width: 3, height: 18, background: "#2D6A4F" }} />
            </div>
            <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: "#FAFAF7", letterSpacing: "0.04em" }}>
              FRIT FÆLLESSKAB
            </span>
          </div>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, color: "#FAFAF7", opacity: 0.35 }}>
            Visuel identitet, version 1.0
          </p>
        </div>
      </footer>
    </div>
  );
}
