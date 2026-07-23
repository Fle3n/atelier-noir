"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ru";

export function SiteMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const home = lang === "ru" ? "/ru" : "/";
  const prefix = lang === "ru" ? "/ru" : "/en";
  const labels = lang === "ru"
    ? { menu: "Меню", close: "Закрыть", collection: "Коллекция", manifesto: "Манифест", contact: "Контакты", note: "Париж · частные показы по записи" }
    : { menu: "Menu", close: "Close", collection: "Collection", manifesto: "Manifesto", contact: "Contact", note: "Paris · private viewings by appointment" };

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <>
    <button type="button" className="menu-trigger" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>{labels.menu}</button>
    {open && <div className="menu-layer" id="site-menu" role="dialog" aria-modal="true" aria-label={labels.menu}>
      <button type="button" className="menu-backdrop" aria-label={labels.close} onClick={() => setOpen(false)}/>
      <aside className="menu-panel">
        <div className="menu-top"><a className="logo" href={home} onClick={() => setOpen(false)}>ATELIER<br/>NOIR</a><button type="button" onClick={() => setOpen(false)}>{labels.close} ×</button></div>
        <nav aria-label={labels.menu}>
          <a href={`${prefix}/collection`} onClick={() => setOpen(false)}><small>01</small>{labels.collection}</a>
          <a href={`${prefix}/manifesto`} onClick={() => setOpen(false)}><small>02</small>{labels.manifesto}</a>
          <a href={`${home}#contact`} onClick={() => setOpen(false)}><small>03</small>{labels.contact}</a>
        </nav>
        <p>{labels.note}</p>
      </aside>
    </div>}
  </>;
}
