# Stride Storefront Design System

A desktop e-commerce design system extracted from an attached Figma file: **"Nike UI - Free UI Kit (Recreated) (Community).fig"** — a community-made recreation of a large athletic retailer's storefront, mounted read-only during the build.

## Important: this is a brand-neutral extraction

The source file recreates a real company's storefront: its wordmark, its swoosh, its sub-brand marks, its product photography and its marketing copy. Reproducing another company's brand identity is not something this system does, so the extraction was deliberately scoped:

- **Foundations, geometry and component anatomy are copied verbatim** from the file — every colour, type size, line-height, radius, padding and rail width is the file's literal value, including the odd ones (120.672px size chips, 188.156px filter rail, 350.672px summary column, 0.196px tracking).
- **Brand marks were not copied as assets.** The swoosh vector, the sub-brand logos and the four social-platform marks in the file were left behind. The wordmark slot renders the neutral name **STRIDE** in plain type. There is no logo file in `assets/` and none should be drawn.
- **One unavoidable exception: the copied photography.** The bitmaps in `assets/images/` are the source's own marketing photographs, and the products inside them carry the original brand's marks — a logo on a shoe upper, a logo on a bag. Frames whose *subject* was a logo lockup (an isolated swoosh, a circular campaign badge) were excluded and are not referenced anywhere in the kit. Incidental marks on photographed products remain, because they are baked into the pixels. This is the main reason to swap the imagery before anything ships.
- **Product and editorial photography was copied as-is** at the user's request (`assets/images/`). Treat those bitmaps as third-party marketing imagery: fine for internal mocks, replace them before anything ships.
- **Copy was genericized.** Product names, footer links and help articles read as generic retail copy.

Source inventory notes: the Figma file defines **0 component sets** (1 standalone symbol, a third-party watermark), **0 Variable collections** and **0 text styles**. It is 19 flat screen frames — so there was nothing to `fig_materialize`. The component inventory below was derived by reading the frames' exact geometry, and the token files were written from the file's measured values rather than from Figma Variables.

---

## Content fundamentals

**Voice.** Imperative and short. Copy tells you to do something: "Notify Me", "Shop Air Max", "Add to Bag", "Find Your Shoe", "Become a Member". Almost no sentence in the UI has a subject.

**Casing.** Three registers, used consistently:
- **UPPERCASE** for display headlines and page titles: `STEP INTO WHAT FEELS GOOD`, `GET HELP`, `WHAT PAYMENT OPTIONS CAN I USE?`
- **Title Case** for navigation, buttons, links and section headings: `New & Featured`, `Best of Air Max`, `Find a Store`, `Member Checkout`, `Select Size`
- **sentence case** for body copy and helper text: `incl. of taxes`, `There are no items saved to your favourites.`

**Person.** Second person for instruction and reassurance ("your order", "you'll be able to pay", "We think you are in United States"). First-person plural for the company voice in help copy ("We want to make buying your favourite shoes online fast and easy"). Never "I".

**Body copy rhythm.** Marketing copy is fragments strung with full stops: *"Extreme comfort. Hyper durable. Max volume."* Then one long sentence with an em-dash aside. Help copy is the opposite — full, plain, complete sentences at a 28px line height with generous measure (~843px).

**Precision in details.** Prices carry the currency mark, a thin-space thousands group and always two decimals on product pages: `₹ 16 995.00`, and `MRP :` as a prefix. Counts are parenthesised: `New (500)`. Styles are quoted as codes: `Style: DV7421-001`. Colourways are slash-joined: `Flat Pewter/Light Bone/Black/White`.

**No emoji anywhere.** No exclamation marks in UI copy. No em-dash-heavy prose. No "Discover" / "Explore" / "Unlock" marketing filler — CTAs name the action.

**Empty states are flat statements, not encouragement.** "There are no items saved to your favourites." — no illustration, no "Start browsing!" nudge.

---

## Visual foundations

**Palette.** Near-monochrome. `#111111` carries text, primary buttons and the footer; it is never pure black (`#000000` appears only in a few modal pills and glyph strokes). Secondary text is `#757575`; tertiary text on the dark footer is `#7E7E7E`; placeholders are `#CCCCCC`. Surfaces are five near-whites — `#FFFFFF`, `#F7F7F7`, `#F5F5F5`, `#F2F2F2` — with `#E5E5E5` as the hairline and disabled fill. Saturated colour is rationed to four values: `#9E3500` burnt orange for promo/sale copy, `#FF0017` for alerts, `#0075FF` for the focus ring, and a `#6CACE4 → #93CAEE` pale-blue run used once as a gradient. **Two background colours per screen at most** — white and one grey.

**Type.** Two families, split by surface. Helvetica Neue (Regular / Medium / Bold) for site chrome, home page and help pages; Inter (400–900) for product detail, bag and summary surfaces. Medium (500) does almost all the work — headings, nav, buttons, labels and prices are all 500. `15px/24px` is the workhorse size: nav links, body copy, button labels and prices all sit there. Display type is 52/54/56px over a 60px line, uppercase, medium. The only letter-spacing in the whole file is `+0.196px` on the 27px product title.

**Spacing and layout.** 1440px page, 48px gutters, 1344px content column. The footer breaks that rule with a 34px gutter. Fixed rails: 376px product buy column, 188.156px filter rail, 350.672px order summary, 245.25px footer link columns. Header is 96px total (36px utility strip + 60px nav) and sticks. Footer is 331px.

**Backgrounds and imagery.** No gradients, no textures, no patterns, no hand illustration. Backgrounds are flat white, flat `#F5F5F5`, or flat `#111111`. Imagery does all the visual work: full-gutter photographs at 1344×700, square product shots, and portrait editorial crops. Photography is cool and neutral — studio product shots on light grey or transparent, outdoor lifestyle shots in flat daylight. No grain, no duotone, no warm filter. **Type is never set over a photograph**: hero lockups sit centred *below* the image, which is the file's most distinctive layout decision.

**Corners.** Two worlds. Interactive controls are pills — 30px radius on buttons (39/60/62px tall), 100px on the search pill and icon buttons, 20px on the 40px locale pill, 24px on the 48px carousel arrow. Everything content-shaped is square or nearly so: product images and editorial cards have **0 radius**, size chips and checkboxes 4px, inputs 8px, the one popover 3px.

**Borders, shadows and cards.** Borders are drawn as inset box-shadow spreads (Figma inside-strokes), so they never affect layout: 1px `#757575` on inputs, 1px `#E5E5E5` on chips, 1px `#111111` on a selected chip, 1px `#CCCCCC` on secondary buttons. **There are no cards.** No panel has a shadow, a border and rounding together — content is separated by whitespace and hairlines. The only drop shadow in the entire file is `0 0 15px 3px rgba(0,0,0,0.12)` on the locale popover.

**Transparency and blur.** None. No frosted panels, no scrims over imagery, no protection gradients — because type is never placed over a photo, none are needed.

**Interaction states.** The source is a static file, so states were inferred conservatively and kept minimal:
- *Hover:* primary button darkens `#111111 → #191919`; secondary button's border darkens `#CCCCCC → #111111`; an unselected size chip's stroke darkens `#E5E5E5 → #767676`; ghost/icon buttons pick up a `#F5F5F5` wash; text links underline.
- *Selected:* a 1px `#111111` inset stroke (size chip, gallery thumb) or a solid `#111111` fill (checkbox, nav underline).
- *Focus:* 1px `#0075FF`, the only blue in the interface.
- *Disabled:* `#E5E5E5` fill with `#757575` text. It stays visible and full-opacity — the file never fades anything out.
- *Press:* darken only. Nothing scales, bounces or lifts.

**Animation.** The file specifies none, and none was invented. Anything built here should use short linear or ease-out colour transitions (~120ms) and nothing else. No bounce, no spring, no parallax.

---

## Iconography

Twenty line glyphs were copied verbatim out of the file into `assets/icons/` as SVGs: `search`, `search-alt`, `bag`, `heart`, `pin`, `phone`, `chat`, `plus`, `minus`, `star`, `dash`, `close`, `edit`, `trash`, `chevron-right`, `check-circle`, `truck`, `caret-down`, `play`, `dot`.

- **Style:** hairline outline icons, `0.75px` stroke, drawn on a 24px box, rendered in `currentColor` (mostly `#111111`, white in the footer, `#CCCCCC` when inactive).
- **No icon font and no sprite sheet** — the file uses loose vectors, one per instance. The `Icon` component wraps them with a CSS mask so they inherit colour.
- **Not copied:** the swoosh, the sub-brand marks and the four social-platform logos in the footer. These are third-party brand marks. The footer therefore ships without a social row; add your own marks if you need one.
- **No emoji, no unicode glyphs used as icons.** The one exception in the source is a literal `|` character as a separator between utility-bar links, and a `×` character as the popover close — both reproduced as text.
- No CDN icon library was substituted. The extracted set covers every glyph the source screens use.

---

## Fonts — substitution flagged

The `.fig` carries **no font binaries**. Its type specification is Helvetica Neue for chrome and Inter for product surfaces.

- **Inter** is loaded from Google Fonts (weights 400–900) — this is the file's real family, not a substitute.
- **Helvetica Neue** is resolved from the operating system where available and **falls back to Inter** elsewhere. This is a substitution.

**If you have licensed Helvetica Neue web fonts, drop the `.woff2` files into `assets/fonts/` and add `@font-face` rules to `tokens/fonts.css`.**

---

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `elevation.css`, `layout.css`, `base.css` |
| `components/core/` | `Button`, `IconButton`, `Icon`, `Pill` |
| `components/forms/` | `TextField`, `Checkbox`, `SizeChip`, `Select` |
| `components/navigation/` | `UtilityBar`, `HeaderNav`, `PromoBanner`, `SubNav`, `FilterGroup`, `Footer`, `CarouselNav`, `LocalePopover` |
| `components/commerce/` | `ProductCard`, `PriceBlock`, `SizePicker`, `SectionHeader`, `HeroBillboard`, `CategoryTile`, `BagLineItem`, `OrderSummary`, `GalleryRail` |
| `components/content/` | `Accordion`, `EditorialCard`, `LinkColumn` |
| `ui_kits/storefront/` | Six-screen click-through recreation — see its own `README.md` |
| `guidelines/` | Foundation specimen cards (colours, type, spacing, radii, strokes, icons, imagery) |
| `assets/icons/` | 20 SVG glyphs from the source |
| `assets/images/` | ~60 bitmaps from the source (heroes, product shots, editorial crops) |
| `SKILL.md` | Agent Skills wrapper |

### Components

`Button`, `IconButton`, `Icon`, `Pill`, `TextField`, `Checkbox`, `SizeChip`, `Select`, `UtilityBar`, `HeaderNav`, `PromoBanner`, `SubNav`, `FilterGroup`, `Footer`, `CarouselNav`, `LocalePopover`, `ProductCard`, `PriceBlock`, `SizePicker`, `SectionHeader`, `HeroBillboard`, `CategoryTile`, `BagLineItem`, `OrderSummary`, `GalleryRail`, `Accordion`, `EditorialCard`, `LinkColumn` — 28 in total.

### Intentional additions

The Figma file defines no component sets, so the inventory above was derived from the recurring anatomy of its 19 screens. Two entries have no single counterpart in the source and were added on purpose:

- **`Icon`** — a wrapper over the loose vectors, so a glyph is one call instead of an inline `<img>` with hand-set offsets.
- **`Select`** — the "Sort By" control is drawn as loose text plus a chevron with no field chrome; wrapping it makes it reusable without inventing a border.

Everything else maps to a specific measured element in a specific frame.

### Not in the source, and therefore not built

- **No mobile or tablet designs.** Every frame is 1440px wide (the delivery/terms frame is 1411px). There is no mobile UI kit.
- **No checkout or payment form.** The frames that look like checkout are a bag page and two help articles.
- **No order history, address book, wishlist or settings screens.**
- **No slide template or deck**, so no sample slides were created.
- **No toast, tooltip, tabs, avatar, badge or modal-dialog components** — the file contains none, and none were invented.
