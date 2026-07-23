const looks = ["STRUCTURE / 01", "VOID / 02", "MOTION / 03"];

export default function Home() {
  return (
    <main>
      <nav><a className="logo" href="#top">ATELIER<br/>NOIR</a><div><a href="#collection">Collection</a><a href="#manifesto">Manifesto</a><a href="#contact">Stockists</a></div><button aria-label="Open menu">MENU ☰</button></nav>
      <section className="hero" id="top">
        <div className="issue">ISSUE N°07 <span>PARIS / 2026</span></div>
        <h1>FORM<br/><i>FOLLOWS</i><br/>FEELING.</h1>
        <div className="figure" aria-hidden="true"><div className="head"/><div className="body"/></div>
        <p className="caption">AUTUMN / WINTER<br/>A STUDY IN SILHOUETTE</p>
        <a className="discover" href="#collection">DISCOVER THE EDIT →</a>
        <div className="vertical">INDEPENDENT FASHION HOUSE</div>
      </section>

      <section className="manifesto" id="manifesto"><span>(01)</span><p>We make clothes for the space<br/>between <em>presence</em> and <em>absence.</em></p><small>PARIS — TOKYO<br/>EST. 2018</small></section>

      <section className="collection" id="collection">
        <div className="head"><span>(02) SELECTED LOOKS</span><h2>AW / 26</h2><p>Three studies in engineered volume, cut from deadstock wool and technical silk.</p></div>
        <div className="looks">
          {looks.map((look, i)=><article className={`look l${i+1}`} key={look}><div className="silhouette"><i/><b/></div><span>{look}</span><a href="#contact">VIEW LOOK ↗</a></article>)}
        </div>
      </section>

      <section className="quote"><p>NO TREND.<br/>NO SEASON.<br/><i>ONLY FORM.</i></p><span>THE NOIR MANIFESTO / 2026</span></section>
      <footer id="contact"><a className="logo" href="#top">ATELIER NOIR</a><p>41 RUE DE SAINTONGE<br/>75003 PARIS</p><a href="mailto:studio@noir.example">STUDIO@NOIR.PARIS ↗</a></footer>
    </main>
  );
}
