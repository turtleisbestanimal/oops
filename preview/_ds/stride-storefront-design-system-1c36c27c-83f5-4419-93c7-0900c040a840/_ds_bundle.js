/* @ds-bundle: {"format":4,"namespace":"StrideStorefrontDesignSystem_1c36c2","components":[{"name":"BagLineItem","sourcePath":"components/commerce/BagLineItem.jsx"},{"name":"CategoryTile","sourcePath":"components/commerce/CategoryTile.jsx"},{"name":"GalleryRail","sourcePath":"components/commerce/GalleryRail.jsx"},{"name":"HeroBillboard","sourcePath":"components/commerce/HeroBillboard.jsx"},{"name":"OrderSummary","sourcePath":"components/commerce/OrderSummary.jsx"},{"name":"PriceBlock","sourcePath":"components/commerce/PriceBlock.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SectionHeader","sourcePath":"components/commerce/SectionHeader.jsx"},{"name":"SizePicker","sourcePath":"components/commerce/SizePicker.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"EditorialCard","sourcePath":"components/content/EditorialCard.jsx"},{"name":"LinkColumn","sourcePath":"components/content/LinkColumn.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SizeChip","sourcePath":"components/forms/SizeChip.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"CarouselNav","sourcePath":"components/navigation/CarouselNav.jsx"},{"name":"FilterGroup","sourcePath":"components/navigation/FilterGroup.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"HeaderNav","sourcePath":"components/navigation/HeaderNav.jsx"},{"name":"LocalePopover","sourcePath":"components/navigation/LocalePopover.jsx"},{"name":"PromoBanner","sourcePath":"components/navigation/PromoBanner.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"}],"sourceHashes":{"components/commerce/BagLineItem.jsx":"532acb748935","components/commerce/CategoryTile.jsx":"8d6bf5b23def","components/commerce/GalleryRail.jsx":"b65f0b143dea","components/commerce/HeroBillboard.jsx":"3ce651ffb751","components/commerce/OrderSummary.jsx":"837ada2679b9","components/commerce/PriceBlock.jsx":"49104f6970f5","components/commerce/ProductCard.jsx":"1c068e324fb2","components/commerce/SectionHeader.jsx":"6e426ccb345a","components/commerce/SizePicker.jsx":"d855b1d305aa","components/content/Accordion.jsx":"72fa3471a074","components/content/EditorialCard.jsx":"378970a94daf","components/content/LinkColumn.jsx":"c5660f32990b","components/core/Button.jsx":"ba5aa7958302","components/core/Icon.jsx":"fe445f709e6c","components/core/IconButton.jsx":"b62946ad36ea","components/core/Pill.jsx":"bfbf50dfd6f1","components/forms/Checkbox.jsx":"8ca435c44bbc","components/forms/Select.jsx":"1fc4210f22a4","components/forms/SizeChip.jsx":"69f175af955c","components/forms/TextField.jsx":"ceb772ec71f7","components/navigation/CarouselNav.jsx":"8318032e8a0e","components/navigation/FilterGroup.jsx":"d46a5b438f84","components/navigation/Footer.jsx":"1e25e8b0e50f","components/navigation/HeaderNav.jsx":"1a2712cb7fe2","components/navigation/LocalePopover.jsx":"8ffb7f53402b","components/navigation/PromoBanner.jsx":"5b83c0a23cbf","components/navigation/SubNav.jsx":"8584ff559b9c","components/navigation/UtilityBar.jsx":"22850e55cd09","ui_kits/storefront/AccountScreen.jsx":"2e8c7bce6241","ui_kits/storefront/BagScreen.jsx":"986eee68123c","ui_kits/storefront/Chrome.jsx":"ac3af85f0911","ui_kits/storefront/HelpScreen.jsx":"c3e4a12945a1","ui_kits/storefront/HomeScreen.jsx":"d8110a72900f","ui_kits/storefront/ListingScreen.jsx":"8010ee840da1","ui_kits/storefront/ProductScreen.jsx":"a2ccbca1c3c4","ui_kits/storefront/data.js":"a0f22a0c11b4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StrideStorefrontDesignSystem_1c36c2 = window.StrideStorefrontDesignSystem_1c36c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Editorial tile: square-cornered image with a title and CTA beneath. Used for
   the "Shoes / Clothing / Accessories" and trending rows. */
function CategoryTile({
  image,
  title,
  action = "Shop",
  ratio = "1 / 1",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    style: {
      display: "block",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--surface-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-23)/var(--leading-28) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      boxShadow: "inset 0 -1px 0 0 var(--ink-100)"
    }
  }, action)));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/GalleryRail.jsx
try { (() => {
/* Product detail gallery: a vertical strip of square thumbnails on the left of
   the main image. Selected thumb carries a 1px #111 inset stroke. */
function GalleryRail({
  images = [],
  index = 0,
  onSelect,
  thumbSize = 63,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: src + i,
    onClick: () => onSelect && onSelect(i),
    "aria-label": `View image ${i + 1}`,
    style: {
      width: thumbSize,
      height: thumbSize,
      padding: 0,
      border: "none",
      background: "var(--surface-200)",
      boxShadow: i === index ? "inset 0 0 0 1px var(--ink-100)" : "none",
      cursor: "pointer",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))));
}
Object.assign(__ds_scope, { GalleryRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/GalleryRail.jsx", error: String((e && e.message) || e) }); }

// components/commerce/HeroBillboard.jsx
try { (() => {
/* Full-gutter billboard: a 1344×700 image with a centred lockup underneath —
   eyebrow 15/500, uppercase display title at 52–56/60, 15/24 body, then pills.
   The lockup is below the image, never overlaid. */
function HeroBillboard({
  image,
  eyebrow,
  title,
  body,
  actions,
  titleSize = 56,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1344 / 700",
      overflow: "hidden",
      background: "var(--surface-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "48px 168px 0"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "4px 0 0",
      font: `var(--weight-medium) ${titleSize}px/var(--leading-60) var(--font-core)`,
      color: "var(--text-primary)",
      textTransform: "uppercase"
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: 520,
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, body) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 24
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { HeroBillboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/HeroBillboard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceBlock.jsx
try { (() => {
/* PDP price stack: "MRP : ₹ 16 995.00" at Inter 15/500 over two 15/400 #757575
   tax lines. Vertical padding is 12px top and bottom. */
function PriceBlock({
  price,
  notes = ["incl. of taxes", "(Also includes all applicable duties)"],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "12px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: 16
    }
  }, notes.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-product)",
      color: "var(--text-secondary)"
    }
  }, n))));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Carousel / grid product card. Square image, then a 48px caption block:
   name 15/500 #111, category 15/400 #757575, price 15/500 #111. Corners are
   square — the source never rounds a product image. */
function ProductCard({
  image,
  name,
  category,
  price,
  badge,
  width = 441.359,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    style: {
      display: "block",
      width,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height: width,
      background: "var(--surface-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      paddingTop: 21,
      minHeight: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-promo)"
    }
  }, badge) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-secondary)"
    }
  }, category)), price ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, price) : null));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
/* Help-page FAQ block: bold 16/28 question over 16/28 body. The source shows it
   expanded with a hairline between entries. */
function Accordion({
  items = [],
  openIndex = 0,
  onToggle,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.question,
    style: {
      borderTop: i === 0 ? "none" : "1px solid var(--surface-line)",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onToggle && onToggle(i),
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      border: "none",
      background: "transparent",
      padding: 0,
      textAlign: "left",
      font: "var(--weight-bold) var(--size-16)/var(--leading-28) var(--font-core)",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, it.question, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "var(--ink-100)",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 8h12"
  }), openIndex === i ? null : /*#__PURE__*/React.createElement("path", {
    d: "M8 2v12"
  })))), openIndex === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      maxWidth: 843,
      font: "var(--weight-regular) var(--size-16)/var(--leading-28) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, it.answer) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/EditorialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Full-bleed editorial card used on the dark membership/campaign screens: an
   image with a caption block beneath in white type. */
function EditorialCard({
  image,
  kicker,
  title,
  dark = true,
  ratio = "324 / 450",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    style: {
      display: "block",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: ratio,
      overflow: "hidden",
      background: dark ? "var(--ink-200)" : "var(--surface-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-12)/var(--leading-14) var(--font-core)",
      color: dark ? "var(--ink-700)" : "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: dark ? "var(--surface-white)" : "var(--text-primary)"
    }
  }, title)));
}
Object.assign(__ds_scope, { EditorialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EditorialCard.jsx", error: String((e && e.message) || e) }); }

// components/content/LinkColumn.jsx
try { (() => {
/* A footer / sitemap link column: 12/500 uppercase heading over 15/400 links.
   Reused on light backgrounds in the help and account pages. */
function LinkColumn({
  heading,
  links = [],
  tone = "dark",
  style
}) {
  const headingColor = tone === "dark" ? "var(--surface-white)" : "var(--text-primary)";
  const linkColor = tone === "dark" ? "var(--ink-500)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 245.25,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-medium) var(--size-12)/var(--leading-14) var(--font-core)",
      color: headingColor,
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, heading), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      color: linkColor,
      textDecoration: "none"
    }
  }, l)));
}
Object.assign(__ds_scope, { LinkColumn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LinkColumn.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHTS = {
  sm: 39,
  md: 60,
  lg: 62
};
const PADS = {
  sm: "7.5px 21.5px",
  md: "18px 24px",
  lg: "19px 24px"
};

/* Pill button. The source draws every CTA at border-radius 30 with 15px/500
   type; only the height and horizontal padding change. */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    height: HEIGHTS[size],
    padding: PADS[size],
    width: fullWidth ? "100%" : undefined,
    borderRadius: "var(--radius-30)",
    border: "none",
    background: "transparent",
    font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: disabled ? "default" : "pointer",
    transition: "background-color 120ms linear, color 120ms linear, box-shadow 120ms linear"
  };
  const variants = {
    primary: {
      backgroundColor: "var(--action-primary)",
      color: "var(--action-primary-text)"
    },
    secondary: {
      color: "var(--text-primary)",
      boxShadow: "var(--stroke-outline-button)"
    },
    ghost: {
      color: "var(--text-primary)"
    }
  };
  const off = {
    backgroundColor: "var(--surface-disabled)",
    color: "var(--text-disabled)",
    boxShadow: "none"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...(disabled ? off : null),
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.backgroundColor = "var(--action-primary-hover)";
      if (variant === "secondary") e.currentTarget.style.boxShadow = "inset 0 0 0 1px var(--ink-100)";
      if (variant === "ghost") e.currentTarget.style.backgroundColor = "var(--action-ghost-hover)";
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.backgroundColor = variant === "primary" ? "var(--action-primary)" : "transparent";
      if (variant === "secondary") e.currentTarget.style.boxShadow = "var(--stroke-outline-button)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderSummary.jsx
try { (() => {
/* 350.672px summary column. Rows at Inter 15/28; the total row is boxed with a
   1px #E5E5E5 border and 17px vertical padding. */
function OrderSummary({
  heading = "Summary",
  rows = [],
  total,
  cta = "Member Checkout",
  onCheckout,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 350.672,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--weight-medium) var(--size-21)/var(--leading-33) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      justifyContent: "space-between",
      height: 28,
      font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", null, r.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
      padding: "17px 4px",
      border: "1px solid var(--surface-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-14)/var(--leading-28) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-14)/var(--leading-24) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, total)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    fullWidth: true,
    onClick: onCheckout,
    style: {
      marginTop: 32,
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-product)"
    }
  }, cta));
}
Object.assign(__ds_scope, { OrderSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderSummary.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wrapper over the SVGs extracted from the source file (assets/icons/*.svg).
   The file's glyphs are 0.75px-stroke line icons on a 24px box, rendered in
   currentColor. Pass `base` if the icons live at another relative depth. */
const NAMES = ["search", "search-alt", "bag", "heart", "pin", "phone", "chat", "plus", "minus", "star", "dash", "close", "edit", "trash", "chevron-right", "check-circle", "truck", "caret-down", "play", "dot"];
function Icon({
  name,
  size = 24,
  color = "currentColor",
  base = "assets/icons",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${base}/${name}.svg)`,
      maskImage: `url(${base}/${name}.svg)`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Icon.names = NAMES;
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BagLineItem.jsx
try { (() => {
/* Bag row: 150px square thumbnail, then a two-column block — name / category /
   size / quantity on the left, price right-aligned — with heart and bin icons
   underneath. All type is Inter here. */
function BagLineItem({
  image,
  name,
  category,
  size,
  quantity = 1,
  price,
  onRemove,
  iconBase = "assets/icons",
  style
}) {
  const meta = {
    font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-product)",
    color: "var(--text-secondary)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      padding: "24px 0",
      borderBottom: "1px solid var(--surface-line)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: 150,
      height: 150,
      objectFit: "cover",
      display: "block",
      background: "var(--surface-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-28) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: meta
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: meta
  }, "Size ", size), /*#__PURE__*/React.createElement("span", {
    style: meta
  }, "Quantity ", quantity)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Save to favourites",
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 22,
    base: iconBase
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trash",
    size: 22,
    base: iconBase
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-product)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, price)));
}
Object.assign(__ds_scope, { BagLineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BagLineItem.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Round icon affordance. 36px in the header (transparent, hover wash) and 48px
   as a carousel arrow (muted #F5F5F5 when disabled-looking, #E5E5E5 when live). */
function IconButton({
  size = 36,
  variant = "plain",
  label,
  children,
  style,
  ...rest
}) {
  const fills = {
    plain: "transparent",
    muted: "var(--surface-200)",
    filled: "var(--surface-line)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      padding: size === 36 ? 6 : 12,
      border: "none",
      borderRadius: size === 48 ? "var(--radius-24)" : "var(--radius-100)",
      backgroundColor: fills[variant],
      color: "var(--text-primary)",
      cursor: "pointer",
      overflow: "hidden",
      transition: "background-color 120ms linear",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.backgroundColor = "var(--surface-200)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.backgroundColor = fills[variant];
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 40px selection pill — the locale switcher in the location popover.
   Selected is a solid black fill; unselected is a 1px #7E7E7E outline. */
function Pill({
  selected = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      minWidth: 152,
      padding: "0 16px",
      border: "none",
      borderRadius: "var(--radius-20)",
      backgroundColor: selected ? "var(--ink-000)" : "transparent",
      boxShadow: selected ? "inset 0 0 0 1px var(--ink-000)" : "var(--stroke-outline-strong)",
      color: selected ? "var(--text-inverse)" : "var(--ink-000)",
      font: "var(--weight-regular) var(--size-16)/var(--leading-28) var(--font-fallback)",
      cursor: "pointer",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 20×20 filter checkbox, radius 4, 1px #CCC stroke. Label is 15/400 at 26px. */
function Checkbox({
  checked = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      cursor: "pointer",
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-4)",
      boxShadow: checked ? "inset 0 0 0 1px var(--ink-100)" : "inset 0 0 0 1px var(--ink-700)",
      backgroundColor: checked ? "var(--ink-100)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2 L4.6 8.8 L10 3.4",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.5"
  })) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The "Sort By" control: plain 15/400 label plus a small chevron. The source
   draws no field chrome around it. */
function Select({
  label = "Sort By",
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 28,
      padding: "0 6px",
      backgroundColor: "var(--surface-white)",
      color: "var(--text-primary)",
      font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-core)",
      cursor: "pointer",
      ...style
    }
  }, rest), label, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5 L7 10 L12 5",
    fill: "none",
    stroke: "var(--ink-000)",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SizeChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 120.672 × 48 size swatch, radius 4. Unselected carries a 1px #E5E5E5
   outer stroke; selected switches to a 1px #111 inset stroke. */
function SizeChip({
  selected = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 120.672,
      height: 48,
      padding: "12px 0",
      border: "none",
      borderRadius: "var(--radius-4)",
      backgroundColor: "var(--surface-white)",
      boxShadow: selected ? "var(--stroke-chip-selected)" : "var(--stroke-chip)",
      color: disabled ? "var(--text-placeholder)" : "var(--text-primary)",
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-product)",
      cursor: disabled ? "not-allowed" : "pointer",
      overflow: "hidden",
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && !selected) e.currentTarget.style.boxShadow = "var(--stroke-chip-hover)";
    },
    onMouseLeave: e => {
      if (!disabled && !selected) e.currentTarget.style.boxShadow = "var(--stroke-chip)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SizeChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SizeChip.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SizePicker.jsx
try { (() => {
/* "Select Size" header with a right-aligned "Size Guide" link, over a 3-column
   grid of 120.672px chips with 4px gaps. */
function SizePicker({
  sizes = [],
  value,
  onChange,
  unavailable = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: 376,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-product)",
      color: "var(--text-primary)"
    }
  }, "Select Size"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-product)",
      color: "var(--text-secondary)",
      textDecoration: "none"
    }
  }, "Size Guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 120.672px)",
      gap: 4
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement(__ds_scope.SizeChip, {
    key: s,
    selected: s === value,
    disabled: unavailable.includes(s),
    onClick: () => onChange && onChange(s)
  }, s))));
}
Object.assign(__ds_scope, { SizePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SizePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 56px input, radius 8, 1px #757575 inset stroke. The source shows a
   placeholder-only state; there is no floating label anywhere in the file. */
function TextField({
  placeholder,
  trailing,
  width = 304,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height: 56,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      width: "100%",
      height: 56,
      padding: trailing ? "0 44px 0 12px" : "0 12px",
      border: "none",
      borderRadius: "var(--radius-8)",
      boxShadow: "var(--stroke-input)",
      background: "var(--surface-white)",
      color: "var(--text-primary)",
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      outline: "none",
      boxSizing: "border-box"
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "inset 0 0 0 1px var(--ink-100)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "var(--stroke-input)";
    }
  }, rest)), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: 19,
      color: "var(--text-secondary)",
      display: "flex"
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CarouselNav.jsx
try { (() => {
/* Section carousel arrows: two 48px circles. The inactive one is #F5F5F5 with a
   #CCC chevron; the active one is #E5E5E5 with a #111 chevron. */
function CarouselNav({
  canPrev = false,
  canNext = true,
  onPrev,
  onNext,
  style
}) {
  const btn = active => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    border: "none",
    borderRadius: "var(--radius-24)",
    backgroundColor: active ? "var(--surface-line)" : "var(--surface-200)",
    cursor: active ? "pointer" : "default"
  });
  const chev = (active, dir) => /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "18",
    viewBox: "0 0 10 18",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === "prev" ? "M8 1 L1.5 9 L8 17" : "M2 1 L8.5 9 L2 17",
    fill: "none",
    stroke: active ? "var(--ink-100)" : "var(--ink-700)",
    strokeWidth: "1.5"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous",
    onClick: onPrev,
    style: btn(canPrev)
  }, chev(canPrev, "prev")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next",
    onClick: onNext,
    style: btn(canNext)
  }, chev(canNext, "next")));
}
Object.assign(__ds_scope, { CarouselNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CarouselNav.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SectionHeader.jsx
try { (() => {
/* Section title at 22–23/500 with an optional "Shop" link and carousel arrows.
   Sits in a 52px band above its content. */
function SectionHeader({
  title,
  action,
  size = 22,
  nav,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 52,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `var(--weight-medium) ${size}px/var(--leading-28) var(--font-core)`,
      color: "var(--text-primary)"
    }
  }, title), action || nav ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, action ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, action) : null, nav ? /*#__PURE__*/React.createElement(__ds_scope.CarouselNav, nav) : null) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterGroup.jsx
try { (() => {
/* Filter rail accordion. Header is 15/500 with a plus/minus glyph; the rail is
   188.156px wide with a 1px #E5E5E5 divider above each group. */
function FilterGroup({
  title,
  open = true,
  onToggle,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 188.156,
      borderTop: "1px solid var(--surface-line)",
      padding: "16px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      border: "none",
      background: "transparent",
      padding: 0,
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, title, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "var(--ink-100)",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 7h12"
  }), open ? null : /*#__PURE__*/React.createElement("path", {
    d: "M7 1v12"
  })))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginTop: 12
    }
  }, children) : null);
}
Object.assign(__ds_scope, { FilterGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const COLUMNS = [{
  heading: "Find a Store",
  links: ["Become A Member", "Sign Up for Email", "Send Us Feedback", "Student Discounts"]
}, {
  heading: "Get Help",
  links: ["Order Status", "Delivery", "Returns", "Payment Options", "Contact Us"]
}, {
  heading: "About",
  links: ["News", "Careers", "Investors", "Sustainability"]
}];

/* 331px #111 footer. Column headings 12/500 uppercase; links 15/400 #7E7E7E.
   Bottom row carries a locale pin, copyright at 11/400 #7E7E7E and legal links. */
function Footer({
  columns = COLUMNS,
  locale = "India",
  copyright = "© 2023 Stride, Inc. All Rights Reserved",
  legal = ["Guides", "Terms of Sale", "Terms of Use", "Privacy Policy"],
  iconBase = "assets/icons",
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      backgroundColor: "var(--surface-footer)",
      padding: "40px 34px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      paddingBottom: 16
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.heading,
    style: {
      width: 245.25,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-medium) var(--size-12)/var(--leading-14) var(--font-core)",
      color: "var(--surface-white)",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, c.heading), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--ink-500)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: 62,
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--weight-regular) var(--size-12)/var(--leading-12) var(--font-core)",
      color: "var(--surface-white)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pin",
    size: 15,
    color: "var(--surface-white)",
    base: iconBase
  }), locale), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-11)/var(--leading-12) var(--font-core)",
      color: "var(--ink-500)"
    }
  }, copyright)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      paddingBottom: 2
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--weight-regular) var(--size-11)/var(--leading-12) var(--font-core)",
      color: "var(--ink-500)",
      textDecoration: "none"
    }
  }, l)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/HeaderNav.jsx
try { (() => {
/* 60px white nav: wordmark left, 15/500 category links centred in a 760px band,
   a 180×40 search pill and two 36px icon buttons on the right. */
function HeaderNav({
  brand = "STRIDE",
  items = ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"],
  active,
  onSelect,
  iconBase = "assets/icons",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 60,
      padding: "0 38px 0 48px",
      backgroundColor: "var(--surface-white)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--weight-black) 22px/1 var(--font-product)",
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      textDecoration: "none",
      marginRight: 40
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flex: 1,
      justifyContent: "center"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(it);
    },
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)",
      textDecoration: "none",
      boxShadow: active === it ? "inset 0 -2px 0 0 var(--ink-100)" : "none",
      paddingBottom: 2,
      whiteSpace: "nowrap"
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: 180,
      height: 40,
      padding: "0 14px",
      borderRadius: "var(--radius-100)",
      backgroundColor: "var(--surface-200)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    base: iconBase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--size-15)/1 var(--font-core)",
      color: "var(--text-placeholder)"
    }
  }, "Search")), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: 36,
    label: "Favourites"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 22,
    base: iconBase
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: 36,
    label: "Bag"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bag",
    size: 22,
    base: iconBase
  }))));
}
Object.assign(__ds_scope, { HeaderNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/HeaderNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LocalePopover.jsx
try { (() => {
/* 370×162 popover, radius 3, with the only drop shadow in the file:
   0 0 15px 3px rgba(0,0,0,0.12). */
function LocalePopover({
  message,
  options = [],
  selected,
  onSelect,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 370,
      height: 162,
      padding: 25,
      borderRadius: "var(--radius-3)",
      backgroundColor: "var(--surface-white)",
      boxShadow: "var(--shadow-popover)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 8,
      right: 12,
      border: "none",
      background: "transparent",
      font: "var(--weight-regular) var(--size-32)/1 var(--font-product)",
      color: "var(--text-primary)",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 298,
      font: "var(--weight-medium) var(--size-16)/var(--leading-28) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, message), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 16
    }
  }, options.map(o => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: o,
    selected: o === selected,
    onClick: () => onSelect && onSelect(o)
  }, o))));
}
Object.assign(__ds_scope, { LocalePopover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LocalePopover.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PromoBanner.jsx
try { (() => {
/* 58px #F5F5F5 band with a 1px #E5E5E5 bottom hairline drawn as an inset
   shadow. Title 15/500 over 11/400 body, both centred. */
function PromoBanner({
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 58,
      backgroundColor: "var(--surface-200)",
      boxShadow: "var(--stroke-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-medium) var(--size-15)/var(--leading-16) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-11)/var(--leading-24) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, body));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
/* Sticky listing sub-nav: result count at 24/500 on the left, filter toggle
   and Sort By on the right. */
function SubNav({
  title = "New (500)",
  filtersShown = true,
  onToggleFilters,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 51,
      padding: "0 48px",
      backgroundColor: "var(--surface-white)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-medium) var(--size-24)/var(--leading-31-2) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleFilters,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 28,
      border: "none",
      background: "transparent",
      font: "var(--weight-regular) var(--size-16)/var(--leading-28) var(--font-core)",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, filtersShown ? "Hide Filters" : "Show Filters", /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "var(--ink-100)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })))), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Sort By",
    options: ["Featured", "Newest", "Price: High-Low", "Price: Low-High"]
  })));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
/* 36px #F5F5F5 strip above the main nav. Left slot holds a sub-brand mark in
   the source; right slot is a set of 11/500 links separated by 12/400 pipes. */
function UtilityBar({
  leading,
  links = ["Find a Store", "Help", "Join Us", "Sign In"],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 36,
      padding: "0 38px 0 48px",
      backgroundColor: "var(--surface-utility)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      padding: "0 8px",
      font: "var(--weight-medium) var(--size-11)/var(--leading-14) var(--font-core)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l), i < links.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-12)/var(--leading-14) var(--font-core)",
      color: "var(--text-primary)"
    }
  }, "|") : null))));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/AccountScreen.jsx
try { (() => {
const {
  TextField,
  Button,
  LocalePopover
} = window.StrideStorefrontDesignSystem_1c36c2;
function AccountScreen() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    first: "",
    last: ""
  });
  const [locale, setLocale] = React.useState("United States");
  const [popover, setPopover] = React.useState(true);
  const filled = form.email && form.password && form.first && form.last;
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      position: "relative",
      minHeight: 700,
      padding: "56px 48px 80px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 304,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-page-title)",
      textTransform: "uppercase"
    }
  }, "Become a Member"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 24px",
      font: "var(--type-body)",
      color: "var(--text-primary)"
    }
  }, "Create your account to access the best products, inspiration and stories."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Email address",
    value: form.email,
    onChange: set("email")
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Password",
    type: "password",
    value: form.password,
    onChange: set("password")
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "First Name",
    value: form.first,
    onChange: set("first")
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "Surname",
    value: form.last,
    onChange: set("last")
  })), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    fullWidth: true,
    disabled: !filled,
    style: {
      marginTop: 24
    }
  }, "Submit"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: "var(--weight-regular) var(--size-14)/var(--leading-20) var(--font-core)"
    }
  }, "Already a member? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-nav)",
      color: "var(--ink-000)",
      textDecoration: "none"
    }
  }, "Sign in"))), popover ? /*#__PURE__*/React.createElement(LocalePopover, {
    style: {
      position: "absolute",
      right: 48,
      bottom: 40
    },
    message: "We think you are in United States. Update your location?",
    options: ["India", "United States"],
    selected: locale,
    onSelect: setLocale,
    onClose: () => setPopover(false)
  }) : null);
}
Object.assign(window, {
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/AccountScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/BagScreen.jsx
try { (() => {
const {
  BagLineItem,
  OrderSummary,
  SectionHeader,
  ProductCard
} = window.StrideStorefrontDesignSystem_1c36c2;
const IMG4 = "../../assets/images";
function BagScreen({
  bag,
  onRemove,
  onCheckout
}) {
  const subtotal = bag.length ? "₹ " + (16995 * bag.length).toLocaleString("en-IN").replace(/,/g, " ") + ".00" : "₹ 0.00";
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "40px 48px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-summary)",
      color: "var(--text-primary)"
    }
  }, "Bag"), bag.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-product)"
    }
  }, "There are no items in your bag.") : bag.map((b, i) => /*#__PURE__*/React.createElement(BagLineItem, {
    key: i,
    image: IMG4 + "/bag-item-1.jpg",
    name: "Air Max 97 SE",
    category: "Men's Shoes",
    size: b.size,
    quantity: 1,
    price: "\u20B9 16 995.00",
    onRemove: () => onRemove(i),
    iconBase: "../../assets/icons"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-summary)"
    }
  }, "Favourites"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      font: "var(--weight-regular) var(--size-15)/var(--leading-28) var(--font-product)"
    }
  }, "There are no items saved to your favourites."))), /*#__PURE__*/React.createElement(OrderSummary, {
    rows: [{
      label: "Subtotal",
      value: subtotal
    }, {
      label: "Estimated Delivery & Handling",
      value: "Free"
    }],
    total: subtotal,
    onCheckout: onCheckout
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "You Might Also Like",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, window.STRIDE_DATA.products.slice(2, 6).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    width: "100%",
    image: IMG4 + "/" + p.image,
    name: p.name,
    category: p.category,
    price: p.price
  })))));
}
Object.assign(window, {
  BagScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/BagScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Chrome.jsx
try { (() => {
const {
  UtilityBar,
  HeaderNav,
  Footer
} = window.StrideStorefrontDesignSystem_1c36c2;
const ICONS = "../../assets/icons";
function Chrome({
  tab,
  onTab,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1440,
      margin: "0 auto",
      background: "var(--surface-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--surface-white)"
    }
  }, /*#__PURE__*/React.createElement(UtilityBar, {
    links: ["Find a Store", "Help", "Join Us", "Sign In"]
  }), /*#__PURE__*/React.createElement(HeaderNav, {
    active: tab,
    onSelect: onTab,
    iconBase: ICONS
  })), children, /*#__PURE__*/React.createElement(Footer, {
    iconBase: ICONS,
    copyright: "\xA9 2023 Stride, Inc. All Rights Reserved"
  }));
}
Object.assign(window, {
  Chrome,
  ICONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HelpScreen.jsx
try { (() => {
const {
  TextField,
  Accordion,
  LinkColumn,
  Icon
} = window.StrideStorefrontDesignSystem_1c36c2;
function HelpScreen() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "40px 48px 80px",
      background: "var(--surface-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-page-title)",
      textTransform: "uppercase"
    }
  }, "Get Help"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    width: 457.328,
    placeholder: "What can we help you with?",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      name: "search-alt",
      size: 18,
      base: "../../assets/icons"
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: "var(--surface-white)",
      padding: 28,
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-help-heading)",
      textTransform: "uppercase"
    }
  }, "What payment options can I use?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-long)",
      maxWidth: 905
    }
  }, "We want to make buying your favourite shoes and gear online fast and easy, and we accept the following payment options:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      font: "var(--type-body-long)",
      paddingLeft: 20,
      margin: "8px 0 24px"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Visa, Mastercard, Diners Club, Discover"), /*#__PURE__*/React.createElement("li", null, "If you enter your PAN information at checkout, you'll be able to pay for your order with a local credit or debit card."), /*#__PURE__*/React.createElement("li", null, "Apple Pay")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      font: "var(--weight-medium) var(--size-20)/var(--leading-24) var(--font-core)"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement(Accordion, {
    items: window.STRIDE_DATA.faqs,
    openIndex: open,
    onToggle: setOpen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LinkColumn, {
    tone: "light",
    heading: "Get Help",
    links: ["Order Status", "Delivery", "Returns", "Payment Options", "Contact Us"]
  }))));
}
Object.assign(window, {
  HelpScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HelpScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
const {
  PromoBanner,
  HeroBillboard,
  SectionHeader,
  ProductCard,
  CategoryTile,
  Button
} = window.StrideStorefrontDesignSystem_1c36c2;
const IMG = "../../assets/images";
function HomeScreen({
  onOpenProduct,
  onOpenListing
}) {
  const [start, setStart] = React.useState(0);
  const items = window.STRIDE_DATA.products;
  const visible = items.slice(start, start + 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PromoBanner, {
    title: "Hello App",
    body: "Download the app to access everything. Get Your Great"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 48px"
    }
  }, /*#__PURE__*/React.createElement(HeroBillboard, {
    image: IMG + "/hero-5.png",
    eyebrow: "First Look",
    title: "Air Max Pulse",
    body: "Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Notify Me"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onOpenListing
    }, "Shop Air Max"))
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 48px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Best of Air Max",
    action: "Shop",
    nav: {
      canPrev: start > 0,
      canNext: start + 3 < items.length,
      onPrev: () => setStart(Math.max(0, start - 3)),
      onNext: () => setStart(Math.min(items.length - 3, start + 3))
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginTop: 12
    }
  }, visible.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    width: "100%",
    image: IMG + "/" + p.image,
    name: p.name,
    category: p.category,
    price: p.price,
    badge: p.badge,
    onClick: e => {
      e.preventDefault();
      onOpenProduct();
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 48px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Featured",
    size: 23
  }), /*#__PURE__*/React.createElement(HeroBillboard, {
    image: IMG + "/hero-2.jpg",
    title: "Step Into What Feels Good",
    titleSize: 54,
    body: "Cause everyone should know the feeling of running in that perfect pair.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onOpenListing
    }, "Find Your Shoe")
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 48px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Shop By Category",
    size: 23
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CategoryTile, {
    image: IMG + "/hero-6.png",
    title: "Shoes"
  }), /*#__PURE__*/React.createElement(CategoryTile, {
    image: IMG + "/hero-3.png",
    title: "Clothing"
  }), /*#__PURE__*/React.createElement(CategoryTile, {
    image: IMG + "/hero-4.png",
    title: "Accessories"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 48px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Trending",
    size: 23
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 12
    }
  }, items.slice(4, 8).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    width: "100%",
    image: IMG + "/" + p.image,
    name: p.name,
    category: p.category,
    price: p.price,
    onClick: e => {
      e.preventDefault();
      onOpenProduct();
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80
    }
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ListingScreen.jsx
try { (() => {
const {
  SubNav,
  FilterGroup,
  Checkbox,
  ProductCard
} = window.StrideStorefrontDesignSystem_1c36c2;
const IMG2 = "../../assets/images";
function ListingScreen({
  onOpenProduct
}) {
  const data = window.STRIDE_DATA;
  const [showFilters, setShowFilters] = React.useState(true);
  const [open, setOpen] = React.useState({
    Gender: true,
    Kids: false,
    "Shop by Price": true,
    Colour: false
  });
  const [checked, setChecked] = React.useState({
    Men: true
  });
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(SubNav, {
    title: "New (" + data.listing.length + ")",
    filtersShown: showFilters,
    onToggleFilters: () => setShowFilters(!showFilters)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      padding: "0 48px 80px",
      alignItems: "flex-start"
    }
  }, showFilters ? /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 188.156,
      flexShrink: 0
    }
  }, data.filters.map(f => /*#__PURE__*/React.createElement(FilterGroup, {
    key: f.title,
    title: f.title,
    open: !!open[f.title],
    onToggle: () => setOpen({
      ...open,
      [f.title]: !open[f.title]
    })
  }, f.options.map(o => /*#__PURE__*/React.createElement(Checkbox, {
    key: o,
    label: o,
    checked: !!checked[o],
    onChange: () => setChecked({
      ...checked,
      [o]: !checked[o]
    })
  }))))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px 16px"
    }
  }, data.listing.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    width: "100%",
    image: IMG2 + "/" + p.image,
    name: p.name,
    category: p.category,
    price: p.price,
    badge: p.badge,
    onClick: e => {
      e.preventDefault();
      onOpenProduct();
    }
  })))));
}
Object.assign(window, {
  ListingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ListingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
const {
  GalleryRail,
  PriceBlock,
  SizePicker,
  Button,
  SectionHeader,
  ProductCard,
  Icon
} = window.StrideStorefrontDesignSystem_1c36c2;
const IMG3 = "../../assets/images";
function ProductScreen({
  onAddToBag
}) {
  const d = window.STRIDE_DATA.pdp;
  const [size, setSize] = React.useState(null);
  const [thumb, setThumb] = React.useState(0);
  const [err, setErr] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "52px 48px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(GalleryRail, {
    images: d.thumbs.map(t => IMG3 + "/" + t),
    index: thumb,
    onSelect: setThumb,
    thumbSize: 63
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, d.images.map(im => /*#__PURE__*/React.createElement("img", {
    key: im,
    src: IMG3 + "/" + im,
    alt: "",
    style: {
      width: "100%",
      aspectRatio: "1/1",
      objectFit: "cover",
      display: "block",
      background: "var(--surface-200)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 376,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-pdp-title)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-primary)"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, d.category), /*#__PURE__*/React.createElement(PriceBlock, {
    price: d.price
  }), /*#__PURE__*/React.createElement(SizePicker, {
    sizes: window.STRIDE_DATA.sizes,
    value: size,
    unavailable: window.STRIDE_DATA.unavailable,
    onChange: s => {
      setSize(s);
      setErr(false);
    }
  }), err ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: "var(--type-body-product)",
      color: "var(--accent-alert)"
    }
  }, "Please select a size.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => size ? onAddToBag(size) : setErr(true),
    style: {
      font: "var(--type-label)"
    }
  }, "Add to Bag"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    variant: "secondary",
    style: {
      font: "var(--type-label)",
      gap: 11
    }
  }, "Favourite ", /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    base: "../../assets/icons"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: "var(--type-body-product)",
      color: "var(--text-primary)"
    }
  }, d.description), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-16)/var(--leading-24) var(--font-product)"
    }
  }, d.colour), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-product)",
      marginTop: 4
    }
  }, d.style)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      marginTop: 24,
      border: "1px solid var(--ink-100)",
      padding: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--size-15)/var(--leading-24) var(--font-product)"
    }
  }, "View Product Details")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "You Might Also Like",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, window.STRIDE_DATA.products.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    width: "100%",
    image: IMG3 + "/" + p.image,
    name: p.name,
    category: p.category,
    price: p.price
  })))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
window.STRIDE_DATA = {
  nav: ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"],
  products: [{
    id: 1,
    name: "Air Max SYSTM",
    category: "Women's Shoes",
    price: "₹ 12 995.00",
    image: "carousel-1.png"
  }, {
    id: 2,
    name: "Air Max Pulse",
    category: "Men's Shoes",
    price: "₹ 16 995.00",
    image: "carousel-2.png"
  }, {
    id: 3,
    name: "Air Max 97 SE",
    category: "Men's Shoes",
    price: "₹ 16 995.00",
    image: "carousel-3.png",
    badge: "Just In"
  }, {
    id: 4,
    name: "Air Force 1 '07",
    category: "Women's Shoes",
    price: "₹ 8 695.00",
    image: "carousel-4.png"
  }, {
    id: 5,
    name: "Court Vision Low",
    category: "Men's Shoes",
    price: "₹ 5 495.00",
    image: "carousel-5.png"
  }, {
    id: 6,
    name: "Dunk Low Retro",
    category: "Men's Shoes",
    price: "₹ 9 295.00",
    image: "carousel-6.png"
  }, {
    id: 7,
    name: "Air Zoom Pegasus 40",
    category: "Women's Road Running Shoes",
    price: "₹ 11 895.00",
    image: "carousel-7.png"
  }, {
    id: 8,
    name: "Revolution 6",
    category: "Men's Road Running Shoes",
    price: "₹ 3 995.00",
    image: "carousel-8.png"
  }],
  listing: Array.from({
    length: 24
  }, (_, i) => ({
    id: 100 + i,
    name: ["Air Max 90", "Pegasus Trail 4", "Blazer Mid '77", "Free Metcon 5", "Invincible 3", "Air Max Dawn"][i % 6],
    category: ["Men's Shoes", "Women's Shoes", "Older Kids' Shoes"][i % 3],
    price: ["₹ 9 695.00", "₹ 12 495.00", "₹ 8 195.00", "₹ 11 295.00", "₹ 17 995.00", "₹ 7 495.00"][i % 6],
    image: "product-" + (i + 1) + ".png",
    badge: i % 7 === 0 ? "Just In" : undefined
  })),
  filters: [{
    title: "Gender",
    options: ["Men", "Women", "Unisex"]
  }, {
    title: "Kids",
    options: ["Boys", "Girls"]
  }, {
    title: "Shop by Price",
    options: ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00", "Over ₹ 7 500.00"]
  }, {
    title: "Colour",
    options: ["Black", "White", "Grey", "Blue", "Red"]
  }],
  sizes: ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 12"],
  unavailable: ["UK 6", "UK 11", "UK 12"],
  pdp: {
    name: "Air Max 97 SE",
    category: "Men's Shoes",
    price: "MRP : ₹ 16 995.00",
    description: "Layer on style with the Air Max 97. The cracked leather and soft suede update the iconic design while the original look (inspired by Japanese bullet trains and water droplets) still takes centre stage. Easy-to-style colours let you hit the streets quickly.",
    colour: "Colour Shown: Flat Pewter/Light Bone/Black/White",
    style: "Style: DV7421-001",
    images: ["pdp-1.png", "pdp-2.png", "pdp-3.png", "pdp-4.png", "pdp-5.png", "pdp-6.png", "pdp-7.png", "pdp-8.png"],
    thumbs: ["pdp-thumb-1.png", "pdp-thumb-2.png", "pdp-thumb-3.jpg", "pdp-thumb-4.jpg"]
  },
  faqs: [{
    question: "Does my card need international purchases enabled?",
    answer: "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled."
  }, {
    question: "Can I pay for my order with multiple methods?",
    answer: "No, payment for orders can't be split between multiple payment methods."
  }, {
    question: "Which payment options can I use?",
    answer: "We accept Visa, Mastercard, Diners Club, Discover and Apple Pay. If you enter your PAN information at checkout, you'll be able to pay with a local credit or debit card."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BagLineItem = __ds_scope.BagLineItem;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.GalleryRail = __ds_scope.GalleryRail;

__ds_ns.HeroBillboard = __ds_scope.HeroBillboard;

__ds_ns.OrderSummary = __ds_scope.OrderSummary;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SizePicker = __ds_scope.SizePicker;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.EditorialCard = __ds_scope.EditorialCard;

__ds_ns.LinkColumn = __ds_scope.LinkColumn;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SizeChip = __ds_scope.SizeChip;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CarouselNav = __ds_scope.CarouselNav;

__ds_ns.FilterGroup = __ds_scope.FilterGroup;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeaderNav = __ds_scope.HeaderNav;

__ds_ns.LocalePopover = __ds_scope.LocalePopover;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

})();
