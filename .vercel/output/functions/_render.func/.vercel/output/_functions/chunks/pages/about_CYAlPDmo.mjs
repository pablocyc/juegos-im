import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_BCD2BdLs.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/pablo/Scouts/juegos-im/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About the Project</h1> <p data-astro-cid-kh7btl4r>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, ipsam! Quis obcaecati unde atque voluptates quos aut id itaque debitis, nostrum sunt corrupti totam illum vel. Molestiae eum dolores labore?</p> </main> ` })} `;
}, "/home/pablo/Scouts/juegos-im/src/pages/about.astro", void 0);

const $$file = "/home/pablo/Scouts/juegos-im/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
