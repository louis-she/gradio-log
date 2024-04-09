const {
  SvelteComponent: Kt,
  assign: Vt,
  create_slot: Gt,
  detach: Xt,
  element: Jt,
  get_all_dirty_from_scope: $t,
  get_slot_changes: Yt,
  get_spread_update: Zt,
  init: Qt,
  insert: ei,
  safe_not_equal: ti,
  set_dynamic_element_data: it,
  set_style: ne,
  toggle_class: ue,
  transition_in: Mt,
  transition_out: xt,
  update_slot_base: ii
} = window.__gradio__svelte__internal;
function si(E) {
  let m, S, y;
  const R = (
    /*#slots*/
    E[18].default
  ), M = Gt(
    R,
    E,
    /*$$scope*/
    E[17],
    null
  );
  let k = [
    { "data-testid": (
      /*test_id*/
      E[7]
    ) },
    { id: (
      /*elem_id*/
      E[2]
    ) },
    {
      class: S = "block " + /*elem_classes*/
      E[3].join(" ") + " svelte-nl1om8"
    }
  ], i = {};
  for (let n = 0; n < k.length; n += 1)
    i = Vt(i, k[n]);
  return {
    c() {
      m = Jt(
        /*tag*/
        E[14]
      ), M && M.c(), it(
        /*tag*/
        E[14]
      )(m, i), ue(
        m,
        "hidden",
        /*visible*/
        E[10] === !1
      ), ue(
        m,
        "padded",
        /*padding*/
        E[6]
      ), ue(
        m,
        "border_focus",
        /*border_mode*/
        E[5] === "focus"
      ), ue(
        m,
        "border_contrast",
        /*border_mode*/
        E[5] === "contrast"
      ), ue(m, "hide-container", !/*explicit_call*/
      E[8] && !/*container*/
      E[9]), ne(
        m,
        "height",
        /*get_dimension*/
        E[15](
          /*height*/
          E[0]
        )
      ), ne(m, "width", typeof /*width*/
      E[1] == "number" ? `calc(min(${/*width*/
      E[1]}px, 100%))` : (
        /*get_dimension*/
        E[15](
          /*width*/
          E[1]
        )
      )), ne(
        m,
        "border-style",
        /*variant*/
        E[4]
      ), ne(
        m,
        "overflow",
        /*allow_overflow*/
        E[11] ? "visible" : "hidden"
      ), ne(
        m,
        "flex-grow",
        /*scale*/
        E[12]
      ), ne(m, "min-width", `calc(min(${/*min_width*/
      E[13]}px, 100%))`), ne(m, "border-width", "var(--block-border-width)");
    },
    m(n, o) {
      ei(n, m, o), M && M.m(m, null), y = !0;
    },
    p(n, o) {
      M && M.p && (!y || o & /*$$scope*/
      131072) && ii(
        M,
        R,
        n,
        /*$$scope*/
        n[17],
        y ? Yt(
          R,
          /*$$scope*/
          n[17],
          o,
          null
        ) : $t(
          /*$$scope*/
          n[17]
        ),
        null
      ), it(
        /*tag*/
        n[14]
      )(m, i = Zt(k, [
        (!y || o & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          n[7]
        ) },
        (!y || o & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          n[2]
        ) },
        (!y || o & /*elem_classes*/
        8 && S !== (S = "block " + /*elem_classes*/
        n[3].join(" ") + " svelte-nl1om8")) && { class: S }
      ])), ue(
        m,
        "hidden",
        /*visible*/
        n[10] === !1
      ), ue(
        m,
        "padded",
        /*padding*/
        n[6]
      ), ue(
        m,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), ue(
        m,
        "border_contrast",
        /*border_mode*/
        n[5] === "contrast"
      ), ue(m, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), o & /*height*/
      1 && ne(
        m,
        "height",
        /*get_dimension*/
        n[15](
          /*height*/
          n[0]
        )
      ), o & /*width*/
      2 && ne(m, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : (
        /*get_dimension*/
        n[15](
          /*width*/
          n[1]
        )
      )), o & /*variant*/
      16 && ne(
        m,
        "border-style",
        /*variant*/
        n[4]
      ), o & /*allow_overflow*/
      2048 && ne(
        m,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), o & /*scale*/
      4096 && ne(
        m,
        "flex-grow",
        /*scale*/
        n[12]
      ), o & /*min_width*/
      8192 && ne(m, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`);
    },
    i(n) {
      y || (Mt(M, n), y = !0);
    },
    o(n) {
      xt(M, n), y = !1;
    },
    d(n) {
      n && Xt(m), M && M.d(n);
    }
  };
}
function ri(E) {
  let m, S = (
    /*tag*/
    E[14] && si(E)
  );
  return {
    c() {
      S && S.c();
    },
    m(y, R) {
      S && S.m(y, R), m = !0;
    },
    p(y, [R]) {
      /*tag*/
      y[14] && S.p(y, R);
    },
    i(y) {
      m || (Mt(S, y), m = !0);
    },
    o(y) {
      xt(S, y), m = !1;
    },
    d(y) {
      S && S.d(y);
    }
  };
}
function ni(E, m, S) {
  let { $$slots: y = {}, $$scope: R } = m, { height: M = void 0 } = m, { width: k = void 0 } = m, { elem_id: i = "" } = m, { elem_classes: n = [] } = m, { variant: o = "solid" } = m, { border_mode: c = "base" } = m, { padding: a = !0 } = m, { type: d = "normal" } = m, { test_id: f = void 0 } = m, { explicit_call: g = !1 } = m, { container: l = !0 } = m, { visible: s = !0 } = m, { allow_overflow: r = !0 } = m, { scale: t = null } = m, { min_width: e = 0 } = m, h = d === "fieldset" ? "fieldset" : "div";
  const v = (u) => {
    if (u !== void 0) {
      if (typeof u == "number")
        return u + "px";
      if (typeof u == "string")
        return u;
    }
  };
  return E.$$set = (u) => {
    "height" in u && S(0, M = u.height), "width" in u && S(1, k = u.width), "elem_id" in u && S(2, i = u.elem_id), "elem_classes" in u && S(3, n = u.elem_classes), "variant" in u && S(4, o = u.variant), "border_mode" in u && S(5, c = u.border_mode), "padding" in u && S(6, a = u.padding), "type" in u && S(16, d = u.type), "test_id" in u && S(7, f = u.test_id), "explicit_call" in u && S(8, g = u.explicit_call), "container" in u && S(9, l = u.container), "visible" in u && S(10, s = u.visible), "allow_overflow" in u && S(11, r = u.allow_overflow), "scale" in u && S(12, t = u.scale), "min_width" in u && S(13, e = u.min_width), "$$scope" in u && S(17, R = u.$$scope);
  }, [
    M,
    k,
    i,
    n,
    o,
    c,
    a,
    f,
    g,
    l,
    s,
    r,
    t,
    e,
    h,
    v,
    d,
    R,
    y
  ];
}
class oi extends Kt {
  constructor(m) {
    super(), Qt(this, m, ni, ri, ti, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: ai,
  attr: hi,
  create_slot: li,
  detach: ci,
  element: _i,
  get_all_dirty_from_scope: di,
  get_slot_changes: ui,
  init: fi,
  insert: vi,
  safe_not_equal: gi,
  transition_in: pi,
  transition_out: mi,
  update_slot_base: Si
} = window.__gradio__svelte__internal;
function bi(E) {
  let m, S;
  const y = (
    /*#slots*/
    E[1].default
  ), R = li(
    y,
    E,
    /*$$scope*/
    E[0],
    null
  );
  return {
    c() {
      m = _i("div"), R && R.c(), hi(m, "class", "svelte-1hnfib2");
    },
    m(M, k) {
      vi(M, m, k), R && R.m(m, null), S = !0;
    },
    p(M, [k]) {
      R && R.p && (!S || k & /*$$scope*/
      1) && Si(
        R,
        y,
        M,
        /*$$scope*/
        M[0],
        S ? ui(
          y,
          /*$$scope*/
          M[0],
          k,
          null
        ) : di(
          /*$$scope*/
          M[0]
        ),
        null
      );
    },
    i(M) {
      S || (pi(R, M), S = !0);
    },
    o(M) {
      mi(R, M), S = !1;
    },
    d(M) {
      M && ci(m), R && R.d(M);
    }
  };
}
function Ci(E, m, S) {
  let { $$slots: y = {}, $$scope: R } = m;
  return E.$$set = (M) => {
    "$$scope" in M && S(0, R = M.$$scope);
  }, [R, y];
}
class wi extends ai {
  constructor(m) {
    super(), fi(this, m, Ci, bi, gi, {});
  }
}
const {
  SvelteComponent: yi,
  attr: st,
  check_outros: Ei,
  create_component: ki,
  create_slot: Li,
  destroy_component: Di,
  detach: We,
  element: Ri,
  empty: Ai,
  get_all_dirty_from_scope: Bi,
  get_slot_changes: Ti,
  group_outros: Mi,
  init: xi,
  insert: Ne,
  mount_component: Oi,
  safe_not_equal: Pi,
  set_data: Ii,
  space: Hi,
  text: Fi,
  toggle_class: Ce,
  transition_in: xe,
  transition_out: Ue,
  update_slot_base: Wi
} = window.__gradio__svelte__internal;
function rt(E) {
  let m, S;
  return m = new wi({
    props: {
      $$slots: { default: [Ni] },
      $$scope: { ctx: E }
    }
  }), {
    c() {
      ki(m.$$.fragment);
    },
    m(y, R) {
      Oi(m, y, R), S = !0;
    },
    p(y, R) {
      const M = {};
      R & /*$$scope, info*/
      10 && (M.$$scope = { dirty: R, ctx: y }), m.$set(M);
    },
    i(y) {
      S || (xe(m.$$.fragment, y), S = !0);
    },
    o(y) {
      Ue(m.$$.fragment, y), S = !1;
    },
    d(y) {
      Di(m, y);
    }
  };
}
function Ni(E) {
  let m;
  return {
    c() {
      m = Fi(
        /*info*/
        E[1]
      );
    },
    m(S, y) {
      Ne(S, m, y);
    },
    p(S, y) {
      y & /*info*/
      2 && Ii(
        m,
        /*info*/
        S[1]
      );
    },
    d(S) {
      S && We(m);
    }
  };
}
function Ui(E) {
  let m, S, y, R;
  const M = (
    /*#slots*/
    E[2].default
  ), k = Li(
    M,
    E,
    /*$$scope*/
    E[3],
    null
  );
  let i = (
    /*info*/
    E[1] && rt(E)
  );
  return {
    c() {
      m = Ri("span"), k && k.c(), S = Hi(), i && i.c(), y = Ai(), st(m, "data-testid", "block-info"), st(m, "class", "svelte-22c38v"), Ce(m, "sr-only", !/*show_label*/
      E[0]), Ce(m, "hide", !/*show_label*/
      E[0]), Ce(
        m,
        "has-info",
        /*info*/
        E[1] != null
      );
    },
    m(n, o) {
      Ne(n, m, o), k && k.m(m, null), Ne(n, S, o), i && i.m(n, o), Ne(n, y, o), R = !0;
    },
    p(n, [o]) {
      k && k.p && (!R || o & /*$$scope*/
      8) && Wi(
        k,
        M,
        n,
        /*$$scope*/
        n[3],
        R ? Ti(
          M,
          /*$$scope*/
          n[3],
          o,
          null
        ) : Bi(
          /*$$scope*/
          n[3]
        ),
        null
      ), (!R || o & /*show_label*/
      1) && Ce(m, "sr-only", !/*show_label*/
      n[0]), (!R || o & /*show_label*/
      1) && Ce(m, "hide", !/*show_label*/
      n[0]), (!R || o & /*info*/
      2) && Ce(
        m,
        "has-info",
        /*info*/
        n[1] != null
      ), /*info*/
      n[1] ? i ? (i.p(n, o), o & /*info*/
      2 && xe(i, 1)) : (i = rt(n), i.c(), xe(i, 1), i.m(y.parentNode, y)) : i && (Mi(), Ue(i, 1, 1, () => {
        i = null;
      }), Ei());
    },
    i(n) {
      R || (xe(k, n), xe(i), R = !0);
    },
    o(n) {
      Ue(k, n), Ue(i), R = !1;
    },
    d(n) {
      n && (We(m), We(S), We(y)), k && k.d(n), i && i.d(n);
    }
  };
}
function ji(E, m, S) {
  let { $$slots: y = {}, $$scope: R } = m, { show_label: M = !0 } = m, { info: k = void 0 } = m;
  return E.$$set = (i) => {
    "show_label" in i && S(0, M = i.show_label), "info" in i && S(1, k = i.info), "$$scope" in i && S(3, R = i.$$scope);
  }, [M, k, y, R];
}
class zi extends yi {
  constructor(m) {
    super(), xi(this, m, ji, Ui, Pi, { show_label: 0, info: 1 });
  }
}
const qi = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], nt = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
qi.reduce(
  (E, { color: m, primary: S, secondary: y }) => ({
    ...E,
    [m]: {
      primary: nt[m][S],
      secondary: nt[m][y]
    }
  }),
  {}
);
function ye(E) {
  let m = ["", "k", "M", "G", "T", "P", "E", "Z"], S = 0;
  for (; E > 1e3 && S < m.length - 1; )
    E /= 1e3, S++;
  let y = m[S];
  return (Number.isInteger(E) ? E : E.toFixed(1)) + y;
}
function je() {
}
function Ki(E, m) {
  return E != E ? m == m : E !== m || E && typeof E == "object" || typeof E == "function";
}
const Ot = typeof window < "u";
let ot = Ot ? () => window.performance.now() : () => Date.now(), Pt = Ot ? (E) => requestAnimationFrame(E) : je;
const ke = /* @__PURE__ */ new Set();
function It(E) {
  ke.forEach((m) => {
    m.c(E) || (ke.delete(m), m.f());
  }), ke.size !== 0 && Pt(It);
}
function Vi(E) {
  let m;
  return ke.size === 0 && Pt(It), {
    promise: new Promise((S) => {
      ke.add(m = { c: E, f: S });
    }),
    abort() {
      ke.delete(m);
    }
  };
}
const we = [];
function Gi(E, m = je) {
  let S;
  const y = /* @__PURE__ */ new Set();
  function R(i) {
    if (Ki(E, i) && (E = i, S)) {
      const n = !we.length;
      for (const o of y)
        o[1](), we.push(o, E);
      if (n) {
        for (let o = 0; o < we.length; o += 2)
          we[o][0](we[o + 1]);
        we.length = 0;
      }
    }
  }
  function M(i) {
    R(i(E));
  }
  function k(i, n = je) {
    const o = [i, n];
    return y.add(o), y.size === 1 && (S = m(R, M) || je), i(E), () => {
      y.delete(o), y.size === 0 && S && (S(), S = null);
    };
  }
  return { set: R, update: M, subscribe: k };
}
function at(E) {
  return Object.prototype.toString.call(E) === "[object Date]";
}
function Je(E, m, S, y) {
  if (typeof S == "number" || at(S)) {
    const R = y - S, M = (S - m) / (E.dt || 1 / 60), k = E.opts.stiffness * R, i = E.opts.damping * M, n = (k - i) * E.inv_mass, o = (M + n) * E.dt;
    return Math.abs(o) < E.opts.precision && Math.abs(R) < E.opts.precision ? y : (E.settled = !1, at(S) ? new Date(S.getTime() + o) : S + o);
  } else {
    if (Array.isArray(S))
      return S.map(
        (R, M) => Je(E, m[M], S[M], y[M])
      );
    if (typeof S == "object") {
      const R = {};
      for (const M in S)
        R[M] = Je(E, m[M], S[M], y[M]);
      return R;
    } else
      throw new Error(`Cannot spring ${typeof S} values`);
  }
}
function ht(E, m = {}) {
  const S = Gi(E), { stiffness: y = 0.15, damping: R = 0.8, precision: M = 0.01 } = m;
  let k, i, n, o = E, c = E, a = 1, d = 0, f = !1;
  function g(s, r = {}) {
    c = s;
    const t = n = {};
    return E == null || r.hard || l.stiffness >= 1 && l.damping >= 1 ? (f = !0, k = ot(), o = s, S.set(E = c), Promise.resolve()) : (r.soft && (d = 1 / ((r.soft === !0 ? 0.5 : +r.soft) * 60), a = 0), i || (k = ot(), f = !1, i = Vi((e) => {
      if (f)
        return f = !1, i = null, !1;
      a = Math.min(a + d, 1);
      const h = {
        inv_mass: a,
        opts: l,
        settled: !0,
        dt: (e - k) * 60 / 1e3
      }, v = Je(h, o, E, c);
      return k = e, o = E, S.set(E = v), h.settled && (i = null), !h.settled;
    })), new Promise((e) => {
      i.promise.then(() => {
        t === n && e();
      });
    }));
  }
  const l = {
    set: g,
    update: (s, r) => g(s(c, E), r),
    subscribe: S.subscribe,
    stiffness: y,
    damping: R,
    precision: M
  };
  return l;
}
const {
  SvelteComponent: Xi,
  append: ce,
  attr: Q,
  component_subscribe: lt,
  detach: Ji,
  element: $i,
  init: Yi,
  insert: Zi,
  noop: ct,
  safe_not_equal: Qi,
  set_style: He,
  svg_element: _e,
  toggle_class: _t
} = window.__gradio__svelte__internal, { onMount: es } = window.__gradio__svelte__internal;
function ts(E) {
  let m, S, y, R, M, k, i, n, o, c, a, d;
  return {
    c() {
      m = $i("div"), S = _e("svg"), y = _e("g"), R = _e("path"), M = _e("path"), k = _e("path"), i = _e("path"), n = _e("g"), o = _e("path"), c = _e("path"), a = _e("path"), d = _e("path"), Q(R, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Q(R, "fill", "#FF7C00"), Q(R, "fill-opacity", "0.4"), Q(R, "class", "svelte-43sxxs"), Q(M, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Q(M, "fill", "#FF7C00"), Q(M, "class", "svelte-43sxxs"), Q(k, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Q(k, "fill", "#FF7C00"), Q(k, "fill-opacity", "0.4"), Q(k, "class", "svelte-43sxxs"), Q(i, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Q(i, "fill", "#FF7C00"), Q(i, "class", "svelte-43sxxs"), He(y, "transform", "translate(" + /*$top*/
      E[1][0] + "px, " + /*$top*/
      E[1][1] + "px)"), Q(o, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Q(o, "fill", "#FF7C00"), Q(o, "fill-opacity", "0.4"), Q(o, "class", "svelte-43sxxs"), Q(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Q(c, "fill", "#FF7C00"), Q(c, "class", "svelte-43sxxs"), Q(a, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Q(a, "fill", "#FF7C00"), Q(a, "fill-opacity", "0.4"), Q(a, "class", "svelte-43sxxs"), Q(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Q(d, "fill", "#FF7C00"), Q(d, "class", "svelte-43sxxs"), He(n, "transform", "translate(" + /*$bottom*/
      E[2][0] + "px, " + /*$bottom*/
      E[2][1] + "px)"), Q(S, "viewBox", "-1200 -1200 3000 3000"), Q(S, "fill", "none"), Q(S, "xmlns", "http://www.w3.org/2000/svg"), Q(S, "class", "svelte-43sxxs"), Q(m, "class", "svelte-43sxxs"), _t(
        m,
        "margin",
        /*margin*/
        E[0]
      );
    },
    m(f, g) {
      Zi(f, m, g), ce(m, S), ce(S, y), ce(y, R), ce(y, M), ce(y, k), ce(y, i), ce(S, n), ce(n, o), ce(n, c), ce(n, a), ce(n, d);
    },
    p(f, [g]) {
      g & /*$top*/
      2 && He(y, "transform", "translate(" + /*$top*/
      f[1][0] + "px, " + /*$top*/
      f[1][1] + "px)"), g & /*$bottom*/
      4 && He(n, "transform", "translate(" + /*$bottom*/
      f[2][0] + "px, " + /*$bottom*/
      f[2][1] + "px)"), g & /*margin*/
      1 && _t(
        m,
        "margin",
        /*margin*/
        f[0]
      );
    },
    i: ct,
    o: ct,
    d(f) {
      f && Ji(m);
    }
  };
}
function is(E, m, S) {
  let y, R, { margin: M = !0 } = m;
  const k = ht([0, 0]);
  lt(E, k, (d) => S(1, y = d));
  const i = ht([0, 0]);
  lt(E, i, (d) => S(2, R = d));
  let n;
  async function o() {
    await Promise.all([k.set([125, 140]), i.set([-125, -140])]), await Promise.all([k.set([-125, 140]), i.set([125, -140])]), await Promise.all([k.set([-125, 0]), i.set([125, -0])]), await Promise.all([k.set([125, 0]), i.set([-125, 0])]);
  }
  async function c() {
    await o(), n || c();
  }
  async function a() {
    await Promise.all([k.set([125, 0]), i.set([-125, 0])]), c();
  }
  return es(() => (a(), () => n = !0)), E.$$set = (d) => {
    "margin" in d && S(0, M = d.margin);
  }, [M, y, R, k, i];
}
class ss extends Xi {
  constructor(m) {
    super(), Yi(this, m, is, ts, Qi, { margin: 0 });
  }
}
const {
  SvelteComponent: rs,
  append: be,
  attr: fe,
  binding_callbacks: dt,
  check_outros: Ht,
  create_component: ns,
  create_slot: os,
  destroy_component: as,
  destroy_each: Ft,
  detach: $,
  element: ge,
  empty: Re,
  ensure_array_like: ze,
  get_all_dirty_from_scope: hs,
  get_slot_changes: ls,
  group_outros: Wt,
  init: cs,
  insert: Y,
  mount_component: _s,
  noop: $e,
  safe_not_equal: ds,
  set_data: le,
  set_style: Se,
  space: ve,
  text: te,
  toggle_class: he,
  transition_in: Le,
  transition_out: De,
  update_slot_base: us
} = window.__gradio__svelte__internal, { tick: fs } = window.__gradio__svelte__internal, { onDestroy: vs } = window.__gradio__svelte__internal, gs = (E) => ({}), ut = (E) => ({});
function ft(E, m, S) {
  const y = E.slice();
  return y[38] = m[S], y[40] = S, y;
}
function vt(E, m, S) {
  const y = E.slice();
  return y[38] = m[S], y;
}
function ps(E) {
  let m, S = (
    /*i18n*/
    E[1]("common.error") + ""
  ), y, R, M;
  const k = (
    /*#slots*/
    E[29].error
  ), i = os(
    k,
    E,
    /*$$scope*/
    E[28],
    ut
  );
  return {
    c() {
      m = ge("span"), y = te(S), R = ve(), i && i.c(), fe(m, "class", "error svelte-1yserjw");
    },
    m(n, o) {
      Y(n, m, o), be(m, y), Y(n, R, o), i && i.m(n, o), M = !0;
    },
    p(n, o) {
      (!M || o[0] & /*i18n*/
      2) && S !== (S = /*i18n*/
      n[1]("common.error") + "") && le(y, S), i && i.p && (!M || o[0] & /*$$scope*/
      268435456) && us(
        i,
        k,
        n,
        /*$$scope*/
        n[28],
        M ? ls(
          k,
          /*$$scope*/
          n[28],
          o,
          gs
        ) : hs(
          /*$$scope*/
          n[28]
        ),
        ut
      );
    },
    i(n) {
      M || (Le(i, n), M = !0);
    },
    o(n) {
      De(i, n), M = !1;
    },
    d(n) {
      n && ($(m), $(R)), i && i.d(n);
    }
  };
}
function ms(E) {
  let m, S, y, R, M, k, i, n, o, c = (
    /*variant*/
    E[8] === "default" && /*show_eta_bar*/
    E[18] && /*show_progress*/
    E[6] === "full" && gt(E)
  );
  function a(e, h) {
    if (
      /*progress*/
      e[7]
    )
      return Cs;
    if (
      /*queue_position*/
      e[2] !== null && /*queue_size*/
      e[3] !== void 0 && /*queue_position*/
      e[2] >= 0
    )
      return bs;
    if (
      /*queue_position*/
      e[2] === 0
    )
      return Ss;
  }
  let d = a(E), f = d && d(E), g = (
    /*timer*/
    E[5] && St(E)
  );
  const l = [ks, Es], s = [];
  function r(e, h) {
    return (
      /*last_progress_level*/
      e[15] != null ? 0 : (
        /*show_progress*/
        e[6] === "full" ? 1 : -1
      )
    );
  }
  ~(M = r(E)) && (k = s[M] = l[M](E));
  let t = !/*timer*/
  E[5] && Lt(E);
  return {
    c() {
      c && c.c(), m = ve(), S = ge("div"), f && f.c(), y = ve(), g && g.c(), R = ve(), k && k.c(), i = ve(), t && t.c(), n = Re(), fe(S, "class", "progress-text svelte-1yserjw"), he(
        S,
        "meta-text-center",
        /*variant*/
        E[8] === "center"
      ), he(
        S,
        "meta-text",
        /*variant*/
        E[8] === "default"
      );
    },
    m(e, h) {
      c && c.m(e, h), Y(e, m, h), Y(e, S, h), f && f.m(S, null), be(S, y), g && g.m(S, null), Y(e, R, h), ~M && s[M].m(e, h), Y(e, i, h), t && t.m(e, h), Y(e, n, h), o = !0;
    },
    p(e, h) {
      /*variant*/
      e[8] === "default" && /*show_eta_bar*/
      e[18] && /*show_progress*/
      e[6] === "full" ? c ? c.p(e, h) : (c = gt(e), c.c(), c.m(m.parentNode, m)) : c && (c.d(1), c = null), d === (d = a(e)) && f ? f.p(e, h) : (f && f.d(1), f = d && d(e), f && (f.c(), f.m(S, y))), /*timer*/
      e[5] ? g ? g.p(e, h) : (g = St(e), g.c(), g.m(S, null)) : g && (g.d(1), g = null), (!o || h[0] & /*variant*/
      256) && he(
        S,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), (!o || h[0] & /*variant*/
      256) && he(
        S,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
      let v = M;
      M = r(e), M === v ? ~M && s[M].p(e, h) : (k && (Wt(), De(s[v], 1, 1, () => {
        s[v] = null;
      }), Ht()), ~M ? (k = s[M], k ? k.p(e, h) : (k = s[M] = l[M](e), k.c()), Le(k, 1), k.m(i.parentNode, i)) : k = null), /*timer*/
      e[5] ? t && (t.d(1), t = null) : t ? t.p(e, h) : (t = Lt(e), t.c(), t.m(n.parentNode, n));
    },
    i(e) {
      o || (Le(k), o = !0);
    },
    o(e) {
      De(k), o = !1;
    },
    d(e) {
      e && ($(m), $(S), $(R), $(i), $(n)), c && c.d(e), f && f.d(), g && g.d(), ~M && s[M].d(e), t && t.d(e);
    }
  };
}
function gt(E) {
  let m, S = `translateX(${/*eta_level*/
  (E[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      m = ge("div"), fe(m, "class", "eta-bar svelte-1yserjw"), Se(m, "transform", S);
    },
    m(y, R) {
      Y(y, m, R);
    },
    p(y, R) {
      R[0] & /*eta_level*/
      131072 && S !== (S = `translateX(${/*eta_level*/
      (y[17] || 0) * 100 - 100}%)`) && Se(m, "transform", S);
    },
    d(y) {
      y && $(m);
    }
  };
}
function Ss(E) {
  let m;
  return {
    c() {
      m = te("processing |");
    },
    m(S, y) {
      Y(S, m, y);
    },
    p: $e,
    d(S) {
      S && $(m);
    }
  };
}
function bs(E) {
  let m, S = (
    /*queue_position*/
    E[2] + 1 + ""
  ), y, R, M, k;
  return {
    c() {
      m = te("queue: "), y = te(S), R = te("/"), M = te(
        /*queue_size*/
        E[3]
      ), k = te(" |");
    },
    m(i, n) {
      Y(i, m, n), Y(i, y, n), Y(i, R, n), Y(i, M, n), Y(i, k, n);
    },
    p(i, n) {
      n[0] & /*queue_position*/
      4 && S !== (S = /*queue_position*/
      i[2] + 1 + "") && le(y, S), n[0] & /*queue_size*/
      8 && le(
        M,
        /*queue_size*/
        i[3]
      );
    },
    d(i) {
      i && ($(m), $(y), $(R), $(M), $(k));
    }
  };
}
function Cs(E) {
  let m, S = ze(
    /*progress*/
    E[7]
  ), y = [];
  for (let R = 0; R < S.length; R += 1)
    y[R] = mt(vt(E, S, R));
  return {
    c() {
      for (let R = 0; R < y.length; R += 1)
        y[R].c();
      m = Re();
    },
    m(R, M) {
      for (let k = 0; k < y.length; k += 1)
        y[k] && y[k].m(R, M);
      Y(R, m, M);
    },
    p(R, M) {
      if (M[0] & /*progress*/
      128) {
        S = ze(
          /*progress*/
          R[7]
        );
        let k;
        for (k = 0; k < S.length; k += 1) {
          const i = vt(R, S, k);
          y[k] ? y[k].p(i, M) : (y[k] = mt(i), y[k].c(), y[k].m(m.parentNode, m));
        }
        for (; k < y.length; k += 1)
          y[k].d(1);
        y.length = S.length;
      }
    },
    d(R) {
      R && $(m), Ft(y, R);
    }
  };
}
function pt(E) {
  let m, S = (
    /*p*/
    E[38].unit + ""
  ), y, R, M = " ", k;
  function i(c, a) {
    return (
      /*p*/
      c[38].length != null ? ys : ws
    );
  }
  let n = i(E), o = n(E);
  return {
    c() {
      o.c(), m = ve(), y = te(S), R = te(" | "), k = te(M);
    },
    m(c, a) {
      o.m(c, a), Y(c, m, a), Y(c, y, a), Y(c, R, a), Y(c, k, a);
    },
    p(c, a) {
      n === (n = i(c)) && o ? o.p(c, a) : (o.d(1), o = n(c), o && (o.c(), o.m(m.parentNode, m))), a[0] & /*progress*/
      128 && S !== (S = /*p*/
      c[38].unit + "") && le(y, S);
    },
    d(c) {
      c && ($(m), $(y), $(R), $(k)), o.d(c);
    }
  };
}
function ws(E) {
  let m = ye(
    /*p*/
    E[38].index || 0
  ) + "", S;
  return {
    c() {
      S = te(m);
    },
    m(y, R) {
      Y(y, S, R);
    },
    p(y, R) {
      R[0] & /*progress*/
      128 && m !== (m = ye(
        /*p*/
        y[38].index || 0
      ) + "") && le(S, m);
    },
    d(y) {
      y && $(S);
    }
  };
}
function ys(E) {
  let m = ye(
    /*p*/
    E[38].index || 0
  ) + "", S, y, R = ye(
    /*p*/
    E[38].length
  ) + "", M;
  return {
    c() {
      S = te(m), y = te("/"), M = te(R);
    },
    m(k, i) {
      Y(k, S, i), Y(k, y, i), Y(k, M, i);
    },
    p(k, i) {
      i[0] & /*progress*/
      128 && m !== (m = ye(
        /*p*/
        k[38].index || 0
      ) + "") && le(S, m), i[0] & /*progress*/
      128 && R !== (R = ye(
        /*p*/
        k[38].length
      ) + "") && le(M, R);
    },
    d(k) {
      k && ($(S), $(y), $(M));
    }
  };
}
function mt(E) {
  let m, S = (
    /*p*/
    E[38].index != null && pt(E)
  );
  return {
    c() {
      S && S.c(), m = Re();
    },
    m(y, R) {
      S && S.m(y, R), Y(y, m, R);
    },
    p(y, R) {
      /*p*/
      y[38].index != null ? S ? S.p(y, R) : (S = pt(y), S.c(), S.m(m.parentNode, m)) : S && (S.d(1), S = null);
    },
    d(y) {
      y && $(m), S && S.d(y);
    }
  };
}
function St(E) {
  let m, S = (
    /*eta*/
    E[0] ? `/${/*formatted_eta*/
    E[19]}` : ""
  ), y, R;
  return {
    c() {
      m = te(
        /*formatted_timer*/
        E[20]
      ), y = te(S), R = te("s");
    },
    m(M, k) {
      Y(M, m, k), Y(M, y, k), Y(M, R, k);
    },
    p(M, k) {
      k[0] & /*formatted_timer*/
      1048576 && le(
        m,
        /*formatted_timer*/
        M[20]
      ), k[0] & /*eta, formatted_eta*/
      524289 && S !== (S = /*eta*/
      M[0] ? `/${/*formatted_eta*/
      M[19]}` : "") && le(y, S);
    },
    d(M) {
      M && ($(m), $(y), $(R));
    }
  };
}
function Es(E) {
  let m, S;
  return m = new ss({
    props: { margin: (
      /*variant*/
      E[8] === "default"
    ) }
  }), {
    c() {
      ns(m.$$.fragment);
    },
    m(y, R) {
      _s(m, y, R), S = !0;
    },
    p(y, R) {
      const M = {};
      R[0] & /*variant*/
      256 && (M.margin = /*variant*/
      y[8] === "default"), m.$set(M);
    },
    i(y) {
      S || (Le(m.$$.fragment, y), S = !0);
    },
    o(y) {
      De(m.$$.fragment, y), S = !1;
    },
    d(y) {
      as(m, y);
    }
  };
}
function ks(E) {
  let m, S, y, R, M, k = `${/*last_progress_level*/
  E[15] * 100}%`, i = (
    /*progress*/
    E[7] != null && bt(E)
  );
  return {
    c() {
      m = ge("div"), S = ge("div"), i && i.c(), y = ve(), R = ge("div"), M = ge("div"), fe(S, "class", "progress-level-inner svelte-1yserjw"), fe(M, "class", "progress-bar svelte-1yserjw"), Se(M, "width", k), fe(R, "class", "progress-bar-wrap svelte-1yserjw"), fe(m, "class", "progress-level svelte-1yserjw");
    },
    m(n, o) {
      Y(n, m, o), be(m, S), i && i.m(S, null), be(m, y), be(m, R), be(R, M), E[30](M);
    },
    p(n, o) {
      /*progress*/
      n[7] != null ? i ? i.p(n, o) : (i = bt(n), i.c(), i.m(S, null)) : i && (i.d(1), i = null), o[0] & /*last_progress_level*/
      32768 && k !== (k = `${/*last_progress_level*/
      n[15] * 100}%`) && Se(M, "width", k);
    },
    i: $e,
    o: $e,
    d(n) {
      n && $(m), i && i.d(), E[30](null);
    }
  };
}
function bt(E) {
  let m, S = ze(
    /*progress*/
    E[7]
  ), y = [];
  for (let R = 0; R < S.length; R += 1)
    y[R] = kt(ft(E, S, R));
  return {
    c() {
      for (let R = 0; R < y.length; R += 1)
        y[R].c();
      m = Re();
    },
    m(R, M) {
      for (let k = 0; k < y.length; k += 1)
        y[k] && y[k].m(R, M);
      Y(R, m, M);
    },
    p(R, M) {
      if (M[0] & /*progress_level, progress*/
      16512) {
        S = ze(
          /*progress*/
          R[7]
        );
        let k;
        for (k = 0; k < S.length; k += 1) {
          const i = ft(R, S, k);
          y[k] ? y[k].p(i, M) : (y[k] = kt(i), y[k].c(), y[k].m(m.parentNode, m));
        }
        for (; k < y.length; k += 1)
          y[k].d(1);
        y.length = S.length;
      }
    },
    d(R) {
      R && $(m), Ft(y, R);
    }
  };
}
function Ct(E) {
  let m, S, y, R, M = (
    /*i*/
    E[40] !== 0 && Ls()
  ), k = (
    /*p*/
    E[38].desc != null && wt(E)
  ), i = (
    /*p*/
    E[38].desc != null && /*progress_level*/
    E[14] && /*progress_level*/
    E[14][
      /*i*/
      E[40]
    ] != null && yt()
  ), n = (
    /*progress_level*/
    E[14] != null && Et(E)
  );
  return {
    c() {
      M && M.c(), m = ve(), k && k.c(), S = ve(), i && i.c(), y = ve(), n && n.c(), R = Re();
    },
    m(o, c) {
      M && M.m(o, c), Y(o, m, c), k && k.m(o, c), Y(o, S, c), i && i.m(o, c), Y(o, y, c), n && n.m(o, c), Y(o, R, c);
    },
    p(o, c) {
      /*p*/
      o[38].desc != null ? k ? k.p(o, c) : (k = wt(o), k.c(), k.m(S.parentNode, S)) : k && (k.d(1), k = null), /*p*/
      o[38].desc != null && /*progress_level*/
      o[14] && /*progress_level*/
      o[14][
        /*i*/
        o[40]
      ] != null ? i || (i = yt(), i.c(), i.m(y.parentNode, y)) : i && (i.d(1), i = null), /*progress_level*/
      o[14] != null ? n ? n.p(o, c) : (n = Et(o), n.c(), n.m(R.parentNode, R)) : n && (n.d(1), n = null);
    },
    d(o) {
      o && ($(m), $(S), $(y), $(R)), M && M.d(o), k && k.d(o), i && i.d(o), n && n.d(o);
    }
  };
}
function Ls(E) {
  let m;
  return {
    c() {
      m = te(" /");
    },
    m(S, y) {
      Y(S, m, y);
    },
    d(S) {
      S && $(m);
    }
  };
}
function wt(E) {
  let m = (
    /*p*/
    E[38].desc + ""
  ), S;
  return {
    c() {
      S = te(m);
    },
    m(y, R) {
      Y(y, S, R);
    },
    p(y, R) {
      R[0] & /*progress*/
      128 && m !== (m = /*p*/
      y[38].desc + "") && le(S, m);
    },
    d(y) {
      y && $(S);
    }
  };
}
function yt(E) {
  let m;
  return {
    c() {
      m = te("-");
    },
    m(S, y) {
      Y(S, m, y);
    },
    d(S) {
      S && $(m);
    }
  };
}
function Et(E) {
  let m = (100 * /*progress_level*/
  (E[14][
    /*i*/
    E[40]
  ] || 0)).toFixed(1) + "", S, y;
  return {
    c() {
      S = te(m), y = te("%");
    },
    m(R, M) {
      Y(R, S, M), Y(R, y, M);
    },
    p(R, M) {
      M[0] & /*progress_level*/
      16384 && m !== (m = (100 * /*progress_level*/
      (R[14][
        /*i*/
        R[40]
      ] || 0)).toFixed(1) + "") && le(S, m);
    },
    d(R) {
      R && ($(S), $(y));
    }
  };
}
function kt(E) {
  let m, S = (
    /*p*/
    (E[38].desc != null || /*progress_level*/
    E[14] && /*progress_level*/
    E[14][
      /*i*/
      E[40]
    ] != null) && Ct(E)
  );
  return {
    c() {
      S && S.c(), m = Re();
    },
    m(y, R) {
      S && S.m(y, R), Y(y, m, R);
    },
    p(y, R) {
      /*p*/
      y[38].desc != null || /*progress_level*/
      y[14] && /*progress_level*/
      y[14][
        /*i*/
        y[40]
      ] != null ? S ? S.p(y, R) : (S = Ct(y), S.c(), S.m(m.parentNode, m)) : S && (S.d(1), S = null);
    },
    d(y) {
      y && $(m), S && S.d(y);
    }
  };
}
function Lt(E) {
  let m, S;
  return {
    c() {
      m = ge("p"), S = te(
        /*loading_text*/
        E[9]
      ), fe(m, "class", "loading svelte-1yserjw");
    },
    m(y, R) {
      Y(y, m, R), be(m, S);
    },
    p(y, R) {
      R[0] & /*loading_text*/
      512 && le(
        S,
        /*loading_text*/
        y[9]
      );
    },
    d(y) {
      y && $(m);
    }
  };
}
function Ds(E) {
  let m, S, y, R, M;
  const k = [ms, ps], i = [];
  function n(o, c) {
    return (
      /*status*/
      o[4] === "pending" ? 0 : (
        /*status*/
        o[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(S = n(E)) && (y = i[S] = k[S](E)), {
    c() {
      m = ge("div"), y && y.c(), fe(m, "class", R = "wrap " + /*variant*/
      E[8] + " " + /*show_progress*/
      E[6] + " svelte-1yserjw"), he(m, "hide", !/*status*/
      E[4] || /*status*/
      E[4] === "complete" || /*show_progress*/
      E[6] === "hidden"), he(
        m,
        "translucent",
        /*variant*/
        E[8] === "center" && /*status*/
        (E[4] === "pending" || /*status*/
        E[4] === "error") || /*translucent*/
        E[11] || /*show_progress*/
        E[6] === "minimal"
      ), he(
        m,
        "generating",
        /*status*/
        E[4] === "generating"
      ), he(
        m,
        "border",
        /*border*/
        E[12]
      ), Se(
        m,
        "position",
        /*absolute*/
        E[10] ? "absolute" : "static"
      ), Se(
        m,
        "padding",
        /*absolute*/
        E[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(o, c) {
      Y(o, m, c), ~S && i[S].m(m, null), E[31](m), M = !0;
    },
    p(o, c) {
      let a = S;
      S = n(o), S === a ? ~S && i[S].p(o, c) : (y && (Wt(), De(i[a], 1, 1, () => {
        i[a] = null;
      }), Ht()), ~S ? (y = i[S], y ? y.p(o, c) : (y = i[S] = k[S](o), y.c()), Le(y, 1), y.m(m, null)) : y = null), (!M || c[0] & /*variant, show_progress*/
      320 && R !== (R = "wrap " + /*variant*/
      o[8] + " " + /*show_progress*/
      o[6] + " svelte-1yserjw")) && fe(m, "class", R), (!M || c[0] & /*variant, show_progress, status, show_progress*/
      336) && he(m, "hide", !/*status*/
      o[4] || /*status*/
      o[4] === "complete" || /*show_progress*/
      o[6] === "hidden"), (!M || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && he(
        m,
        "translucent",
        /*variant*/
        o[8] === "center" && /*status*/
        (o[4] === "pending" || /*status*/
        o[4] === "error") || /*translucent*/
        o[11] || /*show_progress*/
        o[6] === "minimal"
      ), (!M || c[0] & /*variant, show_progress, status*/
      336) && he(
        m,
        "generating",
        /*status*/
        o[4] === "generating"
      ), (!M || c[0] & /*variant, show_progress, border*/
      4416) && he(
        m,
        "border",
        /*border*/
        o[12]
      ), c[0] & /*absolute*/
      1024 && Se(
        m,
        "position",
        /*absolute*/
        o[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Se(
        m,
        "padding",
        /*absolute*/
        o[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(o) {
      M || (Le(y), M = !0);
    },
    o(o) {
      De(y), M = !1;
    },
    d(o) {
      o && $(m), ~S && i[S].d(), E[31](null);
    }
  };
}
let Fe = [], Xe = !1;
async function Rs(E, m = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && m !== !0)) {
    if (Fe.push(E), !Xe)
      Xe = !0;
    else
      return;
    await fs(), requestAnimationFrame(() => {
      let S = [0, 0];
      for (let y = 0; y < Fe.length; y++) {
        const M = Fe[y].getBoundingClientRect();
        (y === 0 || M.top + window.scrollY <= S[0]) && (S[0] = M.top + window.scrollY, S[1] = y);
      }
      window.scrollTo({ top: S[0] - 20, behavior: "smooth" }), Xe = !1, Fe = [];
    });
  }
}
function As(E, m, S) {
  let y, { $$slots: R = {}, $$scope: M } = m, { i18n: k } = m, { eta: i = null } = m, { queue_position: n } = m, { queue_size: o } = m, { status: c } = m, { scroll_to_output: a = !1 } = m, { timer: d = !0 } = m, { show_progress: f = "full" } = m, { message: g = null } = m, { progress: l = null } = m, { variant: s = "default" } = m, { loading_text: r = "Loading..." } = m, { absolute: t = !0 } = m, { translucent: e = !1 } = m, { border: h = !1 } = m, { autoscroll: v } = m, u, p = !1, _ = 0, b = 0, A = null, T = null, x = 0, L = null, H, W = null, U = !0;
  const K = () => {
    S(0, i = S(26, A = S(19, D = null))), S(24, _ = performance.now()), S(25, b = 0), p = !0, j();
  };
  function j() {
    requestAnimationFrame(() => {
      S(25, b = (performance.now() - _) / 1e3), p && j();
    });
  }
  function C() {
    S(25, b = 0), S(0, i = S(26, A = S(19, D = null))), p && (p = !1);
  }
  vs(() => {
    p && C();
  });
  let D = null;
  function B(I) {
    dt[I ? "unshift" : "push"](() => {
      W = I, S(16, W), S(7, l), S(14, L), S(15, H);
    });
  }
  function O(I) {
    dt[I ? "unshift" : "push"](() => {
      u = I, S(13, u);
    });
  }
  return E.$$set = (I) => {
    "i18n" in I && S(1, k = I.i18n), "eta" in I && S(0, i = I.eta), "queue_position" in I && S(2, n = I.queue_position), "queue_size" in I && S(3, o = I.queue_size), "status" in I && S(4, c = I.status), "scroll_to_output" in I && S(21, a = I.scroll_to_output), "timer" in I && S(5, d = I.timer), "show_progress" in I && S(6, f = I.show_progress), "message" in I && S(22, g = I.message), "progress" in I && S(7, l = I.progress), "variant" in I && S(8, s = I.variant), "loading_text" in I && S(9, r = I.loading_text), "absolute" in I && S(10, t = I.absolute), "translucent" in I && S(11, e = I.translucent), "border" in I && S(12, h = I.border), "autoscroll" in I && S(23, v = I.autoscroll), "$$scope" in I && S(28, M = I.$$scope);
  }, E.$$.update = () => {
    E.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (i === null && S(0, i = A), i != null && A !== i && (S(27, T = (performance.now() - _) / 1e3 + i), S(19, D = T.toFixed(1)), S(26, A = i))), E.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && S(17, x = T === null || T <= 0 || !b ? null : Math.min(b / T, 1)), E.$$.dirty[0] & /*progress*/
    128 && l != null && S(18, U = !1), E.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (l != null ? S(14, L = l.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : S(14, L = null), L ? (S(15, H = L[L.length - 1]), W && (H === 0 ? S(16, W.style.transition = "0", W) : S(16, W.style.transition = "150ms", W))) : S(15, H = void 0)), E.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? K() : C()), E.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && u && a && (c === "pending" || c === "complete") && Rs(u, v), E.$$.dirty[0] & /*status, message*/
    4194320, E.$$.dirty[0] & /*timer_diff*/
    33554432 && S(20, y = b.toFixed(1));
  }, [
    i,
    k,
    n,
    o,
    c,
    d,
    f,
    l,
    s,
    r,
    t,
    e,
    h,
    u,
    L,
    H,
    W,
    x,
    U,
    D,
    y,
    a,
    g,
    v,
    _,
    b,
    A,
    T,
    M,
    R,
    B,
    O
  ];
}
class Bs extends rs {
  constructor(m) {
    super(), cs(
      this,
      m,
      As,
      Ds,
      ds,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
function Nt(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var Ut = { exports: {} };
(function(E, m) {
  (function(S, y) {
    E.exports = y();
  })(globalThis, () => (() => {
    var S = { 4567: function(k, i, n) {
      var o = this && this.__decorate || function(t, e, h, v) {
        var u, p = arguments.length, _ = p < 3 ? e : v === null ? v = Object.getOwnPropertyDescriptor(e, h) : v;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          _ = Reflect.decorate(t, e, h, v);
        else
          for (var b = t.length - 1; b >= 0; b--)
            (u = t[b]) && (_ = (p < 3 ? u(_) : p > 3 ? u(e, h, _) : u(e, h)) || _);
        return p > 3 && _ && Object.defineProperty(e, h, _), _;
      }, c = this && this.__param || function(t, e) {
        return function(h, v) {
          e(h, v, t);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.AccessibilityManager = void 0;
      const a = n(9042), d = n(9924), f = n(844), g = n(4725), l = n(2585), s = n(3656);
      let r = i.AccessibilityManager = class extends f.Disposable {
        constructor(t, e, h, v) {
          super(), this._terminal = t, this._coreBrowserService = h, this._renderService = v, this._rowColumns = /* @__PURE__ */ new WeakMap(), this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = this._coreBrowserService.mainDocument.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
          for (let u = 0; u < this._terminal.rows; u++)
            this._rowElements[u] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[u]);
          if (this._topBoundaryFocusListener = (u) => this._handleBoundaryFocus(u, 0), this._bottomBoundaryFocusListener = (u) => this._handleBoundaryFocus(u, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = this._coreBrowserService.mainDocument.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this.register(new d.TimeBasedDebouncer(this._renderRows.bind(this))), !this._terminal.element)
            throw new Error("Cannot enable accessibility before Terminal.open");
          this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this.register(this._terminal.onResize((u) => this._handleResize(u.rows))), this.register(this._terminal.onRender((u) => this._refreshRows(u.start, u.end))), this.register(this._terminal.onScroll(() => this._refreshRows())), this.register(this._terminal.onA11yChar((u) => this._handleChar(u))), this.register(this._terminal.onLineFeed(() => this._handleChar(`
`))), this.register(this._terminal.onA11yTab((u) => this._handleTab(u))), this.register(this._terminal.onKey((u) => this._handleKey(u.key))), this.register(this._terminal.onBlur(() => this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this.register((0, s.addDisposableDomListener)(document, "selectionchange", () => this._handleSelectionChange())), this.register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRows(), this.register((0, f.toDisposable)(() => {
            this._accessibilityContainer.remove(), this._rowElements.length = 0;
          }));
        }
        _handleTab(t) {
          for (let e = 0; e < t; e++)
            this._handleChar(" ");
        }
        _handleChar(t) {
          this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== t && (this._charsToAnnounce += t) : this._charsToAnnounce += t, t === `
` && (this._liveRegionLineCount++, this._liveRegionLineCount === 21 && (this._liveRegion.textContent += a.tooMuchOutput)));
        }
        _clearLiveRegion() {
          this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
        }
        _handleKey(t) {
          this._clearLiveRegion(), new RegExp("\\p{Control}", "u").test(t) || this._charsToConsume.push(t);
        }
        _refreshRows(t, e) {
          this._liveRegionDebouncer.refresh(t, e, this._terminal.rows);
        }
        _renderRows(t, e) {
          const h = this._terminal.buffer, v = h.lines.length.toString();
          for (let u = t; u <= e; u++) {
            const p = h.lines.get(h.ydisp + u), _ = [], b = (p == null ? void 0 : p.translateToString(!0, void 0, void 0, _)) || "", A = (h.ydisp + u + 1).toString(), T = this._rowElements[u];
            T && (b.length === 0 ? (T.innerText = " ", this._rowColumns.set(T, [0, 1])) : (T.textContent = b, this._rowColumns.set(T, _)), T.setAttribute("aria-posinset", A), T.setAttribute("aria-setsize", v));
          }
          this._announceCharacters();
        }
        _announceCharacters() {
          this._charsToAnnounce.length !== 0 && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
        }
        _handleBoundaryFocus(t, e) {
          const h = t.target, v = this._rowElements[e === 0 ? 1 : this._rowElements.length - 2];
          if (h.getAttribute("aria-posinset") === (e === 0 ? "1" : `${this._terminal.buffer.lines.length}`) || t.relatedTarget !== v)
            return;
          let u, p;
          if (e === 0 ? (u = h, p = this._rowElements.pop(), this._rowContainer.removeChild(p)) : (u = this._rowElements.shift(), p = h, this._rowContainer.removeChild(u)), u.removeEventListener("focus", this._topBoundaryFocusListener), p.removeEventListener("focus", this._bottomBoundaryFocusListener), e === 0) {
            const _ = this._createAccessibilityTreeNode();
            this._rowElements.unshift(_), this._rowContainer.insertAdjacentElement("afterbegin", _);
          } else {
            const _ = this._createAccessibilityTreeNode();
            this._rowElements.push(_), this._rowContainer.appendChild(_);
          }
          this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(e === 0 ? -1 : 1), this._rowElements[e === 0 ? 1 : this._rowElements.length - 2].focus(), t.preventDefault(), t.stopImmediatePropagation();
        }
        _handleSelectionChange() {
          var b;
          if (this._rowElements.length === 0)
            return;
          const t = document.getSelection();
          if (!t)
            return;
          if (t.isCollapsed)
            return void (this._rowContainer.contains(t.anchorNode) && this._terminal.clearSelection());
          if (!t.anchorNode || !t.focusNode)
            return void console.error("anchorNode and/or focusNode are null");
          let e = { node: t.anchorNode, offset: t.anchorOffset }, h = { node: t.focusNode, offset: t.focusOffset };
          if ((e.node.compareDocumentPosition(h.node) & Node.DOCUMENT_POSITION_PRECEDING || e.node === h.node && e.offset > h.offset) && ([e, h] = [h, e]), e.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (e = { node: this._rowElements[0].childNodes[0], offset: 0 }), !this._rowContainer.contains(e.node))
            return;
          const v = this._rowElements.slice(-1)[0];
          if (h.node.compareDocumentPosition(v) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (h = { node: v, offset: ((b = v.textContent) == null ? void 0 : b.length) ?? 0 }), !this._rowContainer.contains(h.node))
            return;
          const u = ({ node: A, offset: T }) => {
            const x = A instanceof Text ? A.parentNode : A;
            let L = parseInt(x == null ? void 0 : x.getAttribute("aria-posinset"), 10) - 1;
            if (isNaN(L))
              return console.warn("row is invalid. Race condition?"), null;
            const H = this._rowColumns.get(x);
            if (!H)
              return console.warn("columns is null. Race condition?"), null;
            let W = T < H.length ? H[T] : H.slice(-1)[0] + 1;
            return W >= this._terminal.cols && (++L, W = 0), { row: L, column: W };
          }, p = u(e), _ = u(h);
          if (p && _) {
            if (p.row > _.row || p.row === _.row && p.column >= _.column)
              throw new Error("invalid range");
            this._terminal.select(p.column, p.row, (_.row - p.row) * this._terminal.cols - p.column + _.column);
          }
        }
        _handleResize(t) {
          this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
          for (let e = this._rowContainer.children.length; e < this._terminal.rows; e++)
            this._rowElements[e] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e]);
          for (; this._rowElements.length > t; )
            this._rowContainer.removeChild(this._rowElements.pop());
          this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
        }
        _createAccessibilityTreeNode() {
          const t = this._coreBrowserService.mainDocument.createElement("div");
          return t.setAttribute("role", "listitem"), t.tabIndex = -1, this._refreshRowDimensions(t), t;
        }
        _refreshRowsDimensions() {
          if (this._renderService.dimensions.css.cell.height) {
            this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
            for (let t = 0; t < this._terminal.rows; t++)
              this._refreshRowDimensions(this._rowElements[t]);
          }
        }
        _refreshRowDimensions(t) {
          t.style.height = `${this._renderService.dimensions.css.cell.height}px`;
        }
      };
      i.AccessibilityManager = r = o([c(1, l.IInstantiationService), c(2, g.ICoreBrowserService), c(3, g.IRenderService)], r);
    }, 3614: (k, i) => {
      function n(d) {
        return d.replace(/\r?\n/g, "\r");
      }
      function o(d, f) {
        return f ? "\x1B[200~" + d + "\x1B[201~" : d;
      }
      function c(d, f, g, l) {
        d = o(d = n(d), g.decPrivateModes.bracketedPasteMode && l.rawOptions.ignoreBracketedPasteMode !== !0), g.triggerDataEvent(d, !0), f.value = "";
      }
      function a(d, f, g) {
        const l = g.getBoundingClientRect(), s = d.clientX - l.left - 10, r = d.clientY - l.top - 10;
        f.style.width = "20px", f.style.height = "20px", f.style.left = `${s}px`, f.style.top = `${r}px`, f.style.zIndex = "1000", f.focus();
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.rightClickHandler = i.moveTextAreaUnderMouseCursor = i.paste = i.handlePasteEvent = i.copyHandler = i.bracketTextForPaste = i.prepareTextForTerminal = void 0, i.prepareTextForTerminal = n, i.bracketTextForPaste = o, i.copyHandler = function(d, f) {
        d.clipboardData && d.clipboardData.setData("text/plain", f.selectionText), d.preventDefault();
      }, i.handlePasteEvent = function(d, f, g, l) {
        d.stopPropagation(), d.clipboardData && c(d.clipboardData.getData("text/plain"), f, g, l);
      }, i.paste = c, i.moveTextAreaUnderMouseCursor = a, i.rightClickHandler = function(d, f, g, l, s) {
        a(d, f, g), s && l.rightClickSelect(d), f.value = l.selectionText, f.select();
      };
    }, 7239: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ColorContrastCache = void 0;
      const o = n(1505);
      i.ColorContrastCache = class {
        constructor() {
          this._color = new o.TwoKeyMap(), this._css = new o.TwoKeyMap();
        }
        setCss(c, a, d) {
          this._css.set(c, a, d);
        }
        getCss(c, a) {
          return this._css.get(c, a);
        }
        setColor(c, a, d) {
          this._color.set(c, a, d);
        }
        getColor(c, a) {
          return this._color.get(c, a);
        }
        clear() {
          this._color.clear(), this._css.clear();
        }
      };
    }, 3656: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.addDisposableDomListener = void 0, i.addDisposableDomListener = function(n, o, c, a) {
        n.addEventListener(o, c, a);
        let d = !1;
        return { dispose: () => {
          d || (d = !0, n.removeEventListener(o, c, a));
        } };
      };
    }, 3551: function(k, i, n) {
      var o = this && this.__decorate || function(r, t, e, h) {
        var v, u = arguments.length, p = u < 3 ? t : h === null ? h = Object.getOwnPropertyDescriptor(t, e) : h;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          p = Reflect.decorate(r, t, e, h);
        else
          for (var _ = r.length - 1; _ >= 0; _--)
            (v = r[_]) && (p = (u < 3 ? v(p) : u > 3 ? v(t, e, p) : v(t, e)) || p);
        return u > 3 && p && Object.defineProperty(t, e, p), p;
      }, c = this && this.__param || function(r, t) {
        return function(e, h) {
          t(e, h, r);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Linkifier = void 0;
      const a = n(3656), d = n(8460), f = n(844), g = n(2585), l = n(4725);
      let s = i.Linkifier = class extends f.Disposable {
        get currentLink() {
          return this._currentLink;
        }
        constructor(r, t, e, h, v) {
          super(), this._element = r, this._mouseService = t, this._renderService = e, this._bufferService = h, this._linkProviderService = v, this._linkCacheDisposables = [], this._isMouseOut = !0, this._wasResized = !1, this._activeLine = -1, this._onShowLinkUnderline = this.register(new d.EventEmitter()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new d.EventEmitter()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, f.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, f.toDisposable)(() => {
            var u;
            this._lastMouseEvent = void 0, (u = this._activeProviderReplies) == null || u.clear();
          })), this.register(this._bufferService.onResize(() => {
            this._clearCurrentLink(), this._wasResized = !0;
          })), this.register((0, a.addDisposableDomListener)(this._element, "mouseleave", () => {
            this._isMouseOut = !0, this._clearCurrentLink();
          })), this.register((0, a.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, a.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, a.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
        }
        _handleMouseMove(r) {
          this._lastMouseEvent = r;
          const t = this._positionFromMouseEvent(r, this._element, this._mouseService);
          if (!t)
            return;
          this._isMouseOut = !1;
          const e = r.composedPath();
          for (let h = 0; h < e.length; h++) {
            const v = e[h];
            if (v.classList.contains("xterm"))
              break;
            if (v.classList.contains("xterm-hover"))
              return;
          }
          this._lastBufferCell && t.x === this._lastBufferCell.x && t.y === this._lastBufferCell.y || (this._handleHover(t), this._lastBufferCell = t);
        }
        _handleHover(r) {
          if (this._activeLine !== r.y || this._wasResized)
            return this._clearCurrentLink(), this._askForLink(r, !1), void (this._wasResized = !1);
          this._currentLink && this._linkAtPosition(this._currentLink.link, r) || (this._clearCurrentLink(), this._askForLink(r, !0));
        }
        _askForLink(r, t) {
          var h, v;
          this._activeProviderReplies && t || ((h = this._activeProviderReplies) == null || h.forEach((u) => {
            u == null || u.forEach((p) => {
              p.link.dispose && p.link.dispose();
            });
          }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = r.y);
          let e = !1;
          for (const [u, p] of this._linkProviderService.linkProviders.entries())
            t ? (v = this._activeProviderReplies) != null && v.get(u) && (e = this._checkLinkProviderResult(u, r, e)) : p.provideLinks(r.y, (_) => {
              var A, T;
              if (this._isMouseOut)
                return;
              const b = _ == null ? void 0 : _.map((x) => ({ link: x }));
              (A = this._activeProviderReplies) == null || A.set(u, b), e = this._checkLinkProviderResult(u, r, e), ((T = this._activeProviderReplies) == null ? void 0 : T.size) === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(r.y, this._activeProviderReplies);
            });
        }
        _removeIntersectingLinks(r, t) {
          const e = /* @__PURE__ */ new Set();
          for (let h = 0; h < t.size; h++) {
            const v = t.get(h);
            if (v)
              for (let u = 0; u < v.length; u++) {
                const p = v[u], _ = p.link.range.start.y < r ? 0 : p.link.range.start.x, b = p.link.range.end.y > r ? this._bufferService.cols : p.link.range.end.x;
                for (let A = _; A <= b; A++) {
                  if (e.has(A)) {
                    v.splice(u--, 1);
                    break;
                  }
                  e.add(A);
                }
              }
          }
        }
        _checkLinkProviderResult(r, t, e) {
          var u;
          if (!this._activeProviderReplies)
            return e;
          const h = this._activeProviderReplies.get(r);
          let v = !1;
          for (let p = 0; p < r; p++)
            this._activeProviderReplies.has(p) && !this._activeProviderReplies.get(p) || (v = !0);
          if (!v && h) {
            const p = h.find((_) => this._linkAtPosition(_.link, t));
            p && (e = !0, this._handleNewLink(p));
          }
          if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !e)
            for (let p = 0; p < this._activeProviderReplies.size; p++) {
              const _ = (u = this._activeProviderReplies.get(p)) == null ? void 0 : u.find((b) => this._linkAtPosition(b.link, t));
              if (_) {
                e = !0, this._handleNewLink(_);
                break;
              }
            }
          return e;
        }
        _handleMouseDown() {
          this._mouseDownLink = this._currentLink;
        }
        _handleMouseUp(r) {
          if (!this._currentLink)
            return;
          const t = this._positionFromMouseEvent(r, this._element, this._mouseService);
          t && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(r, this._currentLink.link.text);
        }
        _clearCurrentLink(r, t) {
          this._currentLink && this._lastMouseEvent && (!r || !t || this._currentLink.link.range.start.y >= r && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, f.disposeArray)(this._linkCacheDisposables));
        }
        _handleNewLink(r) {
          if (!this._lastMouseEvent)
            return;
          const t = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
          t && this._linkAtPosition(r.link, t) && (this._currentLink = r, this._currentLink.state = { decorations: { underline: r.link.decorations === void 0 || r.link.decorations.underline, pointerCursor: r.link.decorations === void 0 || r.link.decorations.pointerCursor }, isHovered: !0 }, this._linkHover(this._element, r.link, this._lastMouseEvent), r.link.decorations = {}, Object.defineProperties(r.link.decorations, { pointerCursor: { get: () => {
            var e, h;
            return (h = (e = this._currentLink) == null ? void 0 : e.state) == null ? void 0 : h.decorations.pointerCursor;
          }, set: (e) => {
            var h;
            (h = this._currentLink) != null && h.state && this._currentLink.state.decorations.pointerCursor !== e && (this._currentLink.state.decorations.pointerCursor = e, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", e));
          } }, underline: { get: () => {
            var e, h;
            return (h = (e = this._currentLink) == null ? void 0 : e.state) == null ? void 0 : h.decorations.underline;
          }, set: (e) => {
            var h, v, u;
            (h = this._currentLink) != null && h.state && ((u = (v = this._currentLink) == null ? void 0 : v.state) == null ? void 0 : u.decorations.underline) !== e && (this._currentLink.state.decorations.underline = e, this._currentLink.state.isHovered && this._fireUnderlineEvent(r.link, e));
          } } }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e) => {
            if (!this._currentLink)
              return;
            const h = e.start === 0 ? 0 : e.start + 1 + this._bufferService.buffer.ydisp, v = this._bufferService.buffer.ydisp + 1 + e.end;
            if (this._currentLink.link.range.start.y >= h && this._currentLink.link.range.end.y <= v && (this._clearCurrentLink(h, v), this._lastMouseEvent)) {
              const u = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
              u && this._askForLink(u, !1);
            }
          })));
        }
        _linkHover(r, t, e) {
          var h;
          (h = this._currentLink) != null && h.state && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && r.classList.add("xterm-cursor-pointer")), t.hover && t.hover(e, t.text);
        }
        _fireUnderlineEvent(r, t) {
          const e = r.range, h = this._bufferService.buffer.ydisp, v = this._createLinkUnderlineEvent(e.start.x - 1, e.start.y - h - 1, e.end.x, e.end.y - h - 1, void 0);
          (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(v);
        }
        _linkLeave(r, t, e) {
          var h;
          (h = this._currentLink) != null && h.state && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && r.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(e, t.text);
        }
        _linkAtPosition(r, t) {
          const e = r.range.start.y * this._bufferService.cols + r.range.start.x, h = r.range.end.y * this._bufferService.cols + r.range.end.x, v = t.y * this._bufferService.cols + t.x;
          return e <= v && v <= h;
        }
        _positionFromMouseEvent(r, t, e) {
          const h = e.getCoords(r, t, this._bufferService.cols, this._bufferService.rows);
          if (h)
            return { x: h[0], y: h[1] + this._bufferService.buffer.ydisp };
        }
        _createLinkUnderlineEvent(r, t, e, h, v) {
          return { x1: r, y1: t, x2: e, y2: h, cols: this._bufferService.cols, fg: v };
        }
      };
      i.Linkifier = s = o([c(1, l.IMouseService), c(2, l.IRenderService), c(3, g.IBufferService), c(4, l.ILinkProviderService)], s);
    }, 9042: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.tooMuchOutput = i.promptLabel = void 0, i.promptLabel = "Terminal input", i.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
    }, 3730: function(k, i, n) {
      var o = this && this.__decorate || function(l, s, r, t) {
        var e, h = arguments.length, v = h < 3 ? s : t === null ? t = Object.getOwnPropertyDescriptor(s, r) : t;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          v = Reflect.decorate(l, s, r, t);
        else
          for (var u = l.length - 1; u >= 0; u--)
            (e = l[u]) && (v = (h < 3 ? e(v) : h > 3 ? e(s, r, v) : e(s, r)) || v);
        return h > 3 && v && Object.defineProperty(s, r, v), v;
      }, c = this && this.__param || function(l, s) {
        return function(r, t) {
          s(r, t, l);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.OscLinkProvider = void 0;
      const a = n(511), d = n(2585);
      let f = i.OscLinkProvider = class {
        constructor(l, s, r) {
          this._bufferService = l, this._optionsService = s, this._oscLinkService = r;
        }
        provideLinks(l, s) {
          var b;
          const r = this._bufferService.buffer.lines.get(l - 1);
          if (!r)
            return void s(void 0);
          const t = [], e = this._optionsService.rawOptions.linkHandler, h = new a.CellData(), v = r.getTrimmedLength();
          let u = -1, p = -1, _ = !1;
          for (let A = 0; A < v; A++)
            if (p !== -1 || r.hasContent(A)) {
              if (r.loadCell(A, h), h.hasExtendedAttrs() && h.extended.urlId) {
                if (p === -1) {
                  p = A, u = h.extended.urlId;
                  continue;
                }
                _ = h.extended.urlId !== u;
              } else
                p !== -1 && (_ = !0);
              if (_ || p !== -1 && A === v - 1) {
                const T = (b = this._oscLinkService.getLinkData(u)) == null ? void 0 : b.uri;
                if (T) {
                  const x = { start: { x: p + 1, y: l }, end: { x: A + (_ || A !== v - 1 ? 0 : 1), y: l } };
                  let L = !1;
                  if (!(e != null && e.allowNonHttpProtocols))
                    try {
                      const H = new URL(T);
                      ["http:", "https:"].includes(H.protocol) || (L = !0);
                    } catch {
                      L = !0;
                    }
                  L || t.push({ text: T, range: x, activate: (H, W) => e ? e.activate(H, W, x) : g(0, W), hover: (H, W) => {
                    var U;
                    return (U = e == null ? void 0 : e.hover) == null ? void 0 : U.call(e, H, W, x);
                  }, leave: (H, W) => {
                    var U;
                    return (U = e == null ? void 0 : e.leave) == null ? void 0 : U.call(e, H, W, x);
                  } });
                }
                _ = !1, h.hasExtendedAttrs() && h.extended.urlId ? (p = A, u = h.extended.urlId) : (p = -1, u = -1);
              }
            }
          s(t);
        }
      };
      function g(l, s) {
        if (confirm(`Do you want to navigate to ${s}?

WARNING: This link could potentially be dangerous`)) {
          const r = window.open();
          if (r) {
            try {
              r.opener = null;
            } catch {
            }
            r.location.href = s;
          } else
            console.warn("Opening link blocked as opener could not be cleared");
        }
      }
      i.OscLinkProvider = f = o([c(0, d.IBufferService), c(1, d.IOptionsService), c(2, d.IOscLinkService)], f);
    }, 6193: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.RenderDebouncer = void 0, i.RenderDebouncer = class {
        constructor(n, o) {
          this._renderCallback = n, this._coreBrowserService = o, this._refreshCallbacks = [];
        }
        dispose() {
          this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
        }
        addRefreshCallback(n) {
          return this._refreshCallbacks.push(n), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
        }
        refresh(n, o, c) {
          this._rowCount = c, n = n !== void 0 ? n : 0, o = o !== void 0 ? o : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, n) : n, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, o) : o, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
        }
        _innerRefresh() {
          if (this._animationFrame = void 0, this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0)
            return void this._runRefreshCallbacks();
          const n = Math.max(this._rowStart, 0), o = Math.min(this._rowEnd, this._rowCount - 1);
          this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(n, o), this._runRefreshCallbacks();
        }
        _runRefreshCallbacks() {
          for (const n of this._refreshCallbacks)
            n(0);
          this._refreshCallbacks = [];
        }
      };
    }, 3236: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Terminal = void 0;
      const o = n(3614), c = n(3656), a = n(3551), d = n(9042), f = n(3730), g = n(1680), l = n(3107), s = n(5744), r = n(2950), t = n(1296), e = n(428), h = n(4269), v = n(5114), u = n(8934), p = n(3230), _ = n(9312), b = n(4725), A = n(6731), T = n(8055), x = n(8969), L = n(8460), H = n(844), W = n(6114), U = n(8437), K = n(2584), j = n(7399), C = n(5941), D = n(9074), B = n(2585), O = n(5435), I = n(4567), z = n(779);
      class G extends x.CoreTerminal {
        get onFocus() {
          return this._onFocus.event;
        }
        get onBlur() {
          return this._onBlur.event;
        }
        get onA11yChar() {
          return this._onA11yCharEmitter.event;
        }
        get onA11yTab() {
          return this._onA11yTabEmitter.event;
        }
        get onWillOpen() {
          return this._onWillOpen.event;
        }
        constructor(P = {}) {
          super(P), this.browser = W, this._keyDownHandled = !1, this._keyDownSeen = !1, this._keyPressHandled = !1, this._unprocessedDeadKey = !1, this._accessibilityManager = this.register(new H.MutableDisposable()), this._onCursorMove = this.register(new L.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new L.EventEmitter()), this.onKey = this._onKey.event, this._onRender = this.register(new L.EventEmitter()), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new L.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new L.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new L.EventEmitter()), this.onBell = this._onBell.event, this._onFocus = this.register(new L.EventEmitter()), this._onBlur = this.register(new L.EventEmitter()), this._onA11yCharEmitter = this.register(new L.EventEmitter()), this._onA11yTabEmitter = this.register(new L.EventEmitter()), this._onWillOpen = this.register(new L.EventEmitter()), this._setup(), this._decorationService = this._instantiationService.createInstance(D.DecorationService), this._instantiationService.setService(B.IDecorationService, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(z.LinkProviderService), this._instantiationService.setService(b.ILinkProviderService, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(f.OscLinkProvider)), this.register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((w, N) => this.refresh(w, N))), this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this.register(this._inputHandler.onRequestReset(() => this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((w) => this._reportWindowsOptions(w))), this.register(this._inputHandler.onColor((w) => this._handleColorEvent(w))), this.register((0, L.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, L.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, L.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, L.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((w) => this._afterResize(w.cols, w.rows))), this.register((0, H.toDisposable)(() => {
            var w, N;
            this._customKeyEventHandler = void 0, (N = (w = this.element) == null ? void 0 : w.parentNode) == null || N.removeChild(this.element);
          }));
        }
        _handleColorEvent(P) {
          if (this._themeService)
            for (const w of P) {
              let N, F = "";
              switch (w.index) {
                case 256:
                  N = "foreground", F = "10";
                  break;
                case 257:
                  N = "background", F = "11";
                  break;
                case 258:
                  N = "cursor", F = "12";
                  break;
                default:
                  N = "ansi", F = "4;" + w.index;
              }
              switch (w.type) {
                case 0:
                  const V = T.color.toColorRGB(N === "ansi" ? this._themeService.colors.ansi[w.index] : this._themeService.colors[N]);
                  this.coreService.triggerDataEvent(`${K.C0.ESC}]${F};${(0, C.toRgbString)(V)}${K.C1_ESCAPED.ST}`);
                  break;
                case 1:
                  if (N === "ansi")
                    this._themeService.modifyColors((q) => q.ansi[w.index] = T.channels.toColor(...w.color));
                  else {
                    const q = N;
                    this._themeService.modifyColors((Z) => Z[q] = T.channels.toColor(...w.color));
                  }
                  break;
                case 2:
                  this._themeService.restoreColor(w.index);
              }
            }
        }
        _setup() {
          super._setup(), this._customKeyEventHandler = void 0;
        }
        get buffer() {
          return this.buffers.active;
        }
        focus() {
          this.textarea && this.textarea.focus({ preventScroll: !0 });
        }
        _handleScreenReaderModeOptionChange(P) {
          P ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(I.AccessibilityManager, this)) : this._accessibilityManager.clear();
        }
        _handleTextAreaFocus(P) {
          this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(K.C0.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
        }
        blur() {
          var P;
          return (P = this.textarea) == null ? void 0 : P.blur();
        }
        _handleTextAreaBlur() {
          this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(K.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
        }
        _syncTextArea() {
          if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService)
            return;
          const P = this.buffer.ybase + this.buffer.y, w = this.buffer.lines.get(P);
          if (!w)
            return;
          const N = Math.min(this.buffer.x, this.cols - 1), F = this._renderService.dimensions.css.cell.height, V = w.getWidth(N), q = this._renderService.dimensions.css.cell.width * V, Z = this.buffer.y * this._renderService.dimensions.css.cell.height, ie = N * this._renderService.dimensions.css.cell.width;
          this.textarea.style.left = ie + "px", this.textarea.style.top = Z + "px", this.textarea.style.width = q + "px", this.textarea.style.height = F + "px", this.textarea.style.lineHeight = F + "px", this.textarea.style.zIndex = "-5";
        }
        _initGlobal() {
          this._bindKeys(), this.register((0, c.addDisposableDomListener)(this.element, "copy", (w) => {
            this.hasSelection() && (0, o.copyHandler)(w, this._selectionService);
          }));
          const P = (w) => (0, o.handlePasteEvent)(w, this.textarea, this.coreService, this.optionsService);
          this.register((0, c.addDisposableDomListener)(this.textarea, "paste", P)), this.register((0, c.addDisposableDomListener)(this.element, "paste", P)), W.isFirefox ? this.register((0, c.addDisposableDomListener)(this.element, "mousedown", (w) => {
            w.button === 2 && (0, o.rightClickHandler)(w, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
          })) : this.register((0, c.addDisposableDomListener)(this.element, "contextmenu", (w) => {
            (0, o.rightClickHandler)(w, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
          })), W.isLinux && this.register((0, c.addDisposableDomListener)(this.element, "auxclick", (w) => {
            w.button === 1 && (0, o.moveTextAreaUnderMouseCursor)(w, this.textarea, this.screenElement);
          }));
        }
        _bindKeys() {
          this.register((0, c.addDisposableDomListener)(this.textarea, "keyup", (P) => this._keyUp(P), !0)), this.register((0, c.addDisposableDomListener)(this.textarea, "keydown", (P) => this._keyDown(P), !0)), this.register((0, c.addDisposableDomListener)(this.textarea, "keypress", (P) => this._keyPress(P), !0)), this.register((0, c.addDisposableDomListener)(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this.register((0, c.addDisposableDomListener)(this.textarea, "compositionupdate", (P) => this._compositionHelper.compositionupdate(P))), this.register((0, c.addDisposableDomListener)(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this.register((0, c.addDisposableDomListener)(this.textarea, "input", (P) => this._inputEvent(P), !0)), this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
        }
        open(P) {
          var N;
          if (!P)
            throw new Error("Terminal requires a parent element.");
          if (P.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), ((N = this.element) == null ? void 0 : N.ownerDocument.defaultView) && this._coreBrowserService)
            return void (this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView));
          this._document = P.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), P.appendChild(this.element);
          const w = this._document.createDocumentFragment();
          this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), w.appendChild(this._viewportElement), this._viewportScrollArea = this._document.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this.register((0, c.addDisposableDomListener)(this.screenElement, "mousemove", (F) => this.updateCursorStyle(F))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), w.appendChild(this.screenElement), this.textarea = this._document.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", d.promptLabel), W.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this.register(this._instantiationService.createInstance(v.CoreBrowserService, this.textarea, P.ownerDocument.defaultView ?? window, this._document ?? typeof window < "u" ? window.document : null)), this._instantiationService.setService(b.ICoreBrowserService, this._coreBrowserService), this.register((0, c.addDisposableDomListener)(this.textarea, "focus", (F) => this._handleTextAreaFocus(F))), this.register((0, c.addDisposableDomListener)(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(e.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(b.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(A.ThemeService), this._instantiationService.setService(b.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(h.CharacterJoinerService), this._instantiationService.setService(b.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(p.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(b.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((F) => this._onRender.fire(F))), this.onResize((F) => this._renderService.resize(F.cols, F.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(r.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(u.MouseService), this._instantiationService.setService(b.IMouseService, this._mouseService), this.linkifier = this.register(this._instantiationService.createInstance(a.Linkifier, this.screenElement)), this.element.appendChild(w);
          try {
            this._onWillOpen.fire(this.element);
          } catch {
          }
          this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this.viewport = this._instantiationService.createInstance(g.Viewport, this._viewportElement, this._viewportScrollArea), this.viewport.onRequestScrollLines((F) => this.scrollLines(F.amount, F.suppressScrollEvent, 1)), this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(() => {
            this._renderService.handleCursorMove(), this._syncTextArea();
          })), this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(() => this._renderService.handleBlur())), this.register(this.onFocus(() => this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(_.SelectionService, this.element, this.screenElement, this.linkifier)), this._instantiationService.setService(b.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((F) => this.scrollLines(F.amount, F.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((F) => this._renderService.handleSelectionChanged(F.start, F.end, F.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((F) => {
            this.textarea.value = F, this.textarea.focus(), this.textarea.select();
          })), this.register(this._onScroll.event((F) => {
            this.viewport.syncScrollArea(), this._selectionService.refresh();
          })), this.register((0, c.addDisposableDomListener)(this._viewportElement, "scroll", () => this._selectionService.refresh())), this.register(this._instantiationService.createInstance(l.BufferDecorationRenderer, this.screenElement)), this.register((0, c.addDisposableDomListener)(this.element, "mousedown", (F) => this._selectionService.handleMouseDown(F))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(I.AccessibilityManager, this)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (F) => this._handleScreenReaderModeOptionChange(F))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(s.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (F) => {
            !this._overviewRulerRenderer && F && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(s.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
          }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
        }
        _createRenderer() {
          return this._instantiationService.createInstance(t.DomRenderer, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
        }
        bindMouse() {
          const P = this, w = this.element;
          function N(q) {
            const Z = P._mouseService.getMouseReportCoords(q, P.screenElement);
            if (!Z)
              return !1;
            let ie, se;
            switch (q.overrideType || q.type) {
              case "mousemove":
                se = 32, q.buttons === void 0 ? (ie = 3, q.button !== void 0 && (ie = q.button < 3 ? q.button : 3)) : ie = 1 & q.buttons ? 0 : 4 & q.buttons ? 1 : 2 & q.buttons ? 2 : 3;
                break;
              case "mouseup":
                se = 0, ie = q.button < 3 ? q.button : 3;
                break;
              case "mousedown":
                se = 1, ie = q.button < 3 ? q.button : 3;
                break;
              case "wheel":
                if (P._customWheelEventHandler && P._customWheelEventHandler(q) === !1 || P.viewport.getLinesScrolled(q) === 0)
                  return !1;
                se = q.deltaY < 0 ? 0 : 1, ie = 4;
                break;
              default:
                return !1;
            }
            return !(se === void 0 || ie === void 0 || ie > 4) && P.coreMouseService.triggerMouseEvent({ col: Z.col, row: Z.row, x: Z.x, y: Z.y, button: ie, action: se, ctrl: q.ctrlKey, alt: q.altKey, shift: q.shiftKey });
          }
          const F = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, V = { mouseup: (q) => (N(q), q.buttons || (this._document.removeEventListener("mouseup", F.mouseup), F.mousedrag && this._document.removeEventListener("mousemove", F.mousedrag)), this.cancel(q)), wheel: (q) => (N(q), this.cancel(q, !0)), mousedrag: (q) => {
            q.buttons && N(q);
          }, mousemove: (q) => {
            q.buttons || N(q);
          } };
          this.register(this.coreMouseService.onProtocolChange((q) => {
            q ? (this.optionsService.rawOptions.logLevel === "debug" && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(q)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & q ? F.mousemove || (w.addEventListener("mousemove", V.mousemove), F.mousemove = V.mousemove) : (w.removeEventListener("mousemove", F.mousemove), F.mousemove = null), 16 & q ? F.wheel || (w.addEventListener("wheel", V.wheel, { passive: !1 }), F.wheel = V.wheel) : (w.removeEventListener("wheel", F.wheel), F.wheel = null), 2 & q ? F.mouseup || (F.mouseup = V.mouseup) : (this._document.removeEventListener("mouseup", F.mouseup), F.mouseup = null), 4 & q ? F.mousedrag || (F.mousedrag = V.mousedrag) : (this._document.removeEventListener("mousemove", F.mousedrag), F.mousedrag = null);
          })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, c.addDisposableDomListener)(w, "mousedown", (q) => {
            if (q.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(q))
              return N(q), F.mouseup && this._document.addEventListener("mouseup", F.mouseup), F.mousedrag && this._document.addEventListener("mousemove", F.mousedrag), this.cancel(q);
          })), this.register((0, c.addDisposableDomListener)(w, "wheel", (q) => {
            if (!F.wheel) {
              if (this._customWheelEventHandler && this._customWheelEventHandler(q) === !1)
                return !1;
              if (!this.buffer.hasScrollback) {
                const Z = this.viewport.getLinesScrolled(q);
                if (Z === 0)
                  return;
                const ie = K.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (q.deltaY < 0 ? "A" : "B");
                let se = "";
                for (let re = 0; re < Math.abs(Z); re++)
                  se += ie;
                return this.coreService.triggerDataEvent(se, !0), this.cancel(q, !0);
              }
              return this.viewport.handleWheel(q) ? this.cancel(q) : void 0;
            }
          }, { passive: !1 })), this.register((0, c.addDisposableDomListener)(w, "touchstart", (q) => {
            if (!this.coreMouseService.areMouseEventsActive)
              return this.viewport.handleTouchStart(q), this.cancel(q);
          }, { passive: !0 })), this.register((0, c.addDisposableDomListener)(w, "touchmove", (q) => {
            if (!this.coreMouseService.areMouseEventsActive)
              return this.viewport.handleTouchMove(q) ? void 0 : this.cancel(q);
          }, { passive: !1 }));
        }
        refresh(P, w) {
          var N;
          (N = this._renderService) == null || N.refreshRows(P, w);
        }
        updateCursorStyle(P) {
          var w;
          (w = this._selectionService) != null && w.shouldColumnSelect(P) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
        }
        _showCursor() {
          this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y));
        }
        scrollLines(P, w, N = 0) {
          var F;
          N === 1 ? (super.scrollLines(P, w, N), this.refresh(0, this.rows - 1)) : (F = this.viewport) == null || F.scrollLines(P);
        }
        paste(P) {
          (0, o.paste)(P, this.textarea, this.coreService, this.optionsService);
        }
        attachCustomKeyEventHandler(P) {
          this._customKeyEventHandler = P;
        }
        attachCustomWheelEventHandler(P) {
          this._customWheelEventHandler = P;
        }
        registerLinkProvider(P) {
          return this._linkProviderService.registerLinkProvider(P);
        }
        registerCharacterJoiner(P) {
          if (!this._characterJoinerService)
            throw new Error("Terminal must be opened first");
          const w = this._characterJoinerService.register(P);
          return this.refresh(0, this.rows - 1), w;
        }
        deregisterCharacterJoiner(P) {
          if (!this._characterJoinerService)
            throw new Error("Terminal must be opened first");
          this._characterJoinerService.deregister(P) && this.refresh(0, this.rows - 1);
        }
        get markers() {
          return this.buffer.markers;
        }
        registerMarker(P) {
          return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + P);
        }
        registerDecoration(P) {
          return this._decorationService.registerDecoration(P);
        }
        hasSelection() {
          return !!this._selectionService && this._selectionService.hasSelection;
        }
        select(P, w, N) {
          this._selectionService.setSelection(P, w, N);
        }
        getSelection() {
          return this._selectionService ? this._selectionService.selectionText : "";
        }
        getSelectionPosition() {
          if (this._selectionService && this._selectionService.hasSelection)
            return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
        }
        clearSelection() {
          var P;
          (P = this._selectionService) == null || P.clearSelection();
        }
        selectAll() {
          var P;
          (P = this._selectionService) == null || P.selectAll();
        }
        selectLines(P, w) {
          var N;
          (N = this._selectionService) == null || N.selectLines(P, w);
        }
        _keyDown(P) {
          if (this._keyDownHandled = !1, this._keyDownSeen = !0, this._customKeyEventHandler && this._customKeyEventHandler(P) === !1)
            return !1;
          const w = this.browser.isMac && this.options.macOptionIsMeta && P.altKey;
          if (!w && !this._compositionHelper.keydown(P))
            return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
          w || P.key !== "Dead" && P.key !== "AltGraph" || (this._unprocessedDeadKey = !0);
          const N = (0, j.evaluateKeyboardEvent)(P, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
          if (this.updateCursorStyle(P), N.type === 3 || N.type === 2) {
            const F = this.rows - 1;
            return this.scrollLines(N.type === 2 ? -F : F), this.cancel(P, !0);
          }
          return N.type === 1 && this.selectAll(), !!this._isThirdLevelShift(this.browser, P) || (N.cancel && this.cancel(P, !0), !N.key || !!(P.key && !P.ctrlKey && !P.altKey && !P.metaKey && P.key.length === 1 && P.key.charCodeAt(0) >= 65 && P.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = !1, !0) : (N.key !== K.C0.ETX && N.key !== K.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: N.key, domEvent: P }), this._showCursor(), this.coreService.triggerDataEvent(N.key, !0), !this.optionsService.rawOptions.screenReaderMode || P.altKey || P.ctrlKey ? this.cancel(P, !0) : void (this._keyDownHandled = !0))));
        }
        _isThirdLevelShift(P, w) {
          const N = P.isMac && !this.options.macOptionIsMeta && w.altKey && !w.ctrlKey && !w.metaKey || P.isWindows && w.altKey && w.ctrlKey && !w.metaKey || P.isWindows && w.getModifierState("AltGraph");
          return w.type === "keypress" ? N : N && (!w.keyCode || w.keyCode > 47);
        }
        _keyUp(P) {
          this._keyDownSeen = !1, this._customKeyEventHandler && this._customKeyEventHandler(P) === !1 || (function(w) {
            return w.keyCode === 16 || w.keyCode === 17 || w.keyCode === 18;
          }(P) || this.focus(), this.updateCursorStyle(P), this._keyPressHandled = !1);
        }
        _keyPress(P) {
          let w;
          if (this._keyPressHandled = !1, this._keyDownHandled || this._customKeyEventHandler && this._customKeyEventHandler(P) === !1)
            return !1;
          if (this.cancel(P), P.charCode)
            w = P.charCode;
          else if (P.which === null || P.which === void 0)
            w = P.keyCode;
          else {
            if (P.which === 0 || P.charCode === 0)
              return !1;
            w = P.which;
          }
          return !(!w || (P.altKey || P.ctrlKey || P.metaKey) && !this._isThirdLevelShift(this.browser, P) || (w = String.fromCharCode(w), this._onKey.fire({ key: w, domEvent: P }), this._showCursor(), this.coreService.triggerDataEvent(w, !0), this._keyPressHandled = !0, this._unprocessedDeadKey = !1, 0));
        }
        _inputEvent(P) {
          if (P.data && P.inputType === "insertText" && (!P.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
            if (this._keyPressHandled)
              return !1;
            this._unprocessedDeadKey = !1;
            const w = P.data;
            return this.coreService.triggerDataEvent(w, !0), this.cancel(P), !0;
          }
          return !1;
        }
        resize(P, w) {
          P !== this.cols || w !== this.rows ? super.resize(P, w) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
        }
        _afterResize(P, w) {
          var N, F;
          (N = this._charSizeService) == null || N.measure(), (F = this.viewport) == null || F.syncScrollArea(!0);
        }
        clear() {
          var P;
          if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
            this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
            for (let w = 1; w < this.rows; w++)
              this.buffer.lines.push(this.buffer.getBlankLine(U.DEFAULT_ATTR_DATA));
            this._onScroll.fire({ position: this.buffer.ydisp, source: 0 }), (P = this.viewport) == null || P.reset(), this.refresh(0, this.rows - 1);
          }
        }
        reset() {
          var w, N;
          this.options.rows = this.rows, this.options.cols = this.cols;
          const P = this._customKeyEventHandler;
          this._setup(), super.reset(), (w = this._selectionService) == null || w.reset(), this._decorationService.reset(), (N = this.viewport) == null || N.reset(), this._customKeyEventHandler = P, this.refresh(0, this.rows - 1);
        }
        clearTextureAtlas() {
          var P;
          (P = this._renderService) == null || P.clearTextureAtlas();
        }
        _reportFocus() {
          var P;
          (P = this.element) != null && P.classList.contains("focus") ? this.coreService.triggerDataEvent(K.C0.ESC + "[I") : this.coreService.triggerDataEvent(K.C0.ESC + "[O");
        }
        _reportWindowsOptions(P) {
          if (this._renderService)
            switch (P) {
              case O.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                const w = this._renderService.dimensions.css.canvas.width.toFixed(0), N = this._renderService.dimensions.css.canvas.height.toFixed(0);
                this.coreService.triggerDataEvent(`${K.C0.ESC}[4;${N};${w}t`);
                break;
              case O.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                const F = this._renderService.dimensions.css.cell.width.toFixed(0), V = this._renderService.dimensions.css.cell.height.toFixed(0);
                this.coreService.triggerDataEvent(`${K.C0.ESC}[6;${V};${F}t`);
            }
        }
        cancel(P, w) {
          if (this.options.cancelEvents || w)
            return P.preventDefault(), P.stopPropagation(), !1;
        }
      }
      i.Terminal = G;
    }, 9924: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.TimeBasedDebouncer = void 0, i.TimeBasedDebouncer = class {
        constructor(n, o = 1e3) {
          this._renderCallback = n, this._debounceThresholdMS = o, this._lastRefreshMs = 0, this._additionalRefreshRequested = !1;
        }
        dispose() {
          this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
        }
        refresh(n, o, c) {
          this._rowCount = c, n = n !== void 0 ? n : 0, o = o !== void 0 ? o : this._rowCount - 1, this._rowStart = this._rowStart !== void 0 ? Math.min(this._rowStart, n) : n, this._rowEnd = this._rowEnd !== void 0 ? Math.max(this._rowEnd, o) : o;
          const a = Date.now();
          if (a - this._lastRefreshMs >= this._debounceThresholdMS)
            this._lastRefreshMs = a, this._innerRefresh();
          else if (!this._additionalRefreshRequested) {
            const d = a - this._lastRefreshMs, f = this._debounceThresholdMS - d;
            this._additionalRefreshRequested = !0, this._refreshTimeoutID = window.setTimeout(() => {
              this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = !1, this._refreshTimeoutID = void 0;
            }, f);
          }
        }
        _innerRefresh() {
          if (this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0)
            return;
          const n = Math.max(this._rowStart, 0), o = Math.min(this._rowEnd, this._rowCount - 1);
          this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(n, o);
        }
      };
    }, 1680: function(k, i, n) {
      var o = this && this.__decorate || function(r, t, e, h) {
        var v, u = arguments.length, p = u < 3 ? t : h === null ? h = Object.getOwnPropertyDescriptor(t, e) : h;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          p = Reflect.decorate(r, t, e, h);
        else
          for (var _ = r.length - 1; _ >= 0; _--)
            (v = r[_]) && (p = (u < 3 ? v(p) : u > 3 ? v(t, e, p) : v(t, e)) || p);
        return u > 3 && p && Object.defineProperty(t, e, p), p;
      }, c = this && this.__param || function(r, t) {
        return function(e, h) {
          t(e, h, r);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Viewport = void 0;
      const a = n(3656), d = n(4725), f = n(8460), g = n(844), l = n(2585);
      let s = i.Viewport = class extends g.Disposable {
        constructor(r, t, e, h, v, u, p, _) {
          super(), this._viewportElement = r, this._scrollArea = t, this._bufferService = e, this._optionsService = h, this._charSizeService = v, this._renderService = u, this._coreBrowserService = p, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = !1, this._smoothScrollState = { startTime: 0, origin: -1, target: -1 }, this._onRequestScrollLines = this.register(new f.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, a.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((b) => this._activeBuffer = b.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((b) => this._renderDimensions = b)), this._handleThemeChange(_.colors), this.register(_.onChangeColors((b) => this._handleThemeChange(b))), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea())), setTimeout(() => this.syncScrollArea());
        }
        _handleThemeChange(r) {
          this._viewportElement.style.backgroundColor = r.background.css;
        }
        reset() {
          this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._coreBrowserService.window.requestAnimationFrame(() => this.syncScrollArea());
        }
        _refresh(r) {
          if (r)
            return this._innerRefresh(), void (this._refreshAnimationFrame !== null && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
          this._refreshAnimationFrame === null && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
        }
        _innerRefresh() {
          if (this._charSizeService.height > 0) {
            this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderDimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
            const t = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
            this._lastRecordedBufferHeight !== t && (this._lastRecordedBufferHeight = t, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
          }
          const r = this._bufferService.buffer.ydisp * this._currentRowHeight;
          this._viewportElement.scrollTop !== r && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = r), this._refreshAnimationFrame = null;
        }
        syncScrollArea(r = !1) {
          if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
            return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(r);
          this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(r);
        }
        _handleScroll(r) {
          if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent)
            return;
          if (this._ignoreNextScrollEvent)
            return this._ignoreNextScrollEvent = !1, void this._onRequestScrollLines.fire({ amount: 0, suppressScrollEvent: !0 });
          const t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
          this._onRequestScrollLines.fire({ amount: t, suppressScrollEvent: !0 });
        }
        _smoothScroll() {
          if (this._isDisposed || this._smoothScrollState.origin === -1 || this._smoothScrollState.target === -1)
            return;
          const r = this._smoothScrollPercent();
          this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(r * (this._smoothScrollState.target - this._smoothScrollState.origin)), r < 1 ? this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll()) : this._clearSmoothScrollState();
        }
        _smoothScrollPercent() {
          return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
        }
        _clearSmoothScrollState() {
          this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
        }
        _bubbleScroll(r, t) {
          const e = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
          return !(t < 0 && this._viewportElement.scrollTop !== 0 || t > 0 && e < this._lastRecordedBufferHeight) || (r.cancelable && r.preventDefault(), !1);
        }
        handleWheel(r) {
          const t = this._getPixelsScrolled(r);
          return t !== 0 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target === -1 ? this._smoothScrollState.target = this._viewportElement.scrollTop + t : this._smoothScrollState.target += t, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t, this._bubbleScroll(r, t));
        }
        scrollLines(r) {
          if (r !== 0)
            if (this._optionsService.rawOptions.smoothScrollDuration) {
              const t = r * this._currentRowHeight;
              this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target = this._smoothScrollState.origin + t, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState();
            } else
              this._onRequestScrollLines.fire({ amount: r, suppressScrollEvent: !1 });
        }
        _getPixelsScrolled(r) {
          if (r.deltaY === 0 || r.shiftKey)
            return 0;
          let t = this._applyScrollModifier(r.deltaY, r);
          return r.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : r.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t;
        }
        getBufferElements(r, t) {
          var _;
          let e, h = "";
          const v = [], u = t ?? this._bufferService.buffer.lines.length, p = this._bufferService.buffer.lines;
          for (let b = r; b < u; b++) {
            const A = p.get(b);
            if (!A)
              continue;
            const T = (_ = p.get(b + 1)) == null ? void 0 : _.isWrapped;
            if (h += A.translateToString(!T), !T || b === p.length - 1) {
              const x = document.createElement("div");
              x.textContent = h, v.push(x), h.length > 0 && (e = x), h = "";
            }
          }
          return { bufferElements: v, cursorElement: e };
        }
        getLinesScrolled(r) {
          if (r.deltaY === 0 || r.shiftKey)
            return 0;
          let t = this._applyScrollModifier(r.deltaY, r);
          return r.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : r.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t;
        }
        _applyScrollModifier(r, t) {
          const e = this._optionsService.rawOptions.fastScrollModifier;
          return e === "alt" && t.altKey || e === "ctrl" && t.ctrlKey || e === "shift" && t.shiftKey ? r * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : r * this._optionsService.rawOptions.scrollSensitivity;
        }
        handleTouchStart(r) {
          this._lastTouchY = r.touches[0].pageY;
        }
        handleTouchMove(r) {
          const t = this._lastTouchY - r.touches[0].pageY;
          return this._lastTouchY = r.touches[0].pageY, t !== 0 && (this._viewportElement.scrollTop += t, this._bubbleScroll(r, t));
        }
      };
      i.Viewport = s = o([c(2, l.IBufferService), c(3, l.IOptionsService), c(4, d.ICharSizeService), c(5, d.IRenderService), c(6, d.ICoreBrowserService), c(7, d.IThemeService)], s);
    }, 3107: function(k, i, n) {
      var o = this && this.__decorate || function(l, s, r, t) {
        var e, h = arguments.length, v = h < 3 ? s : t === null ? t = Object.getOwnPropertyDescriptor(s, r) : t;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          v = Reflect.decorate(l, s, r, t);
        else
          for (var u = l.length - 1; u >= 0; u--)
            (e = l[u]) && (v = (h < 3 ? e(v) : h > 3 ? e(s, r, v) : e(s, r)) || v);
        return h > 3 && v && Object.defineProperty(s, r, v), v;
      }, c = this && this.__param || function(l, s) {
        return function(r, t) {
          s(r, t, l);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferDecorationRenderer = void 0;
      const a = n(4725), d = n(844), f = n(2585);
      let g = i.BufferDecorationRenderer = class extends d.Disposable {
        constructor(l, s, r, t, e) {
          super(), this._screenElement = l, this._bufferService = s, this._coreBrowserService = r, this._decorationService = t, this._renderService = e, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = !1, this._dimensionsChanged = !1, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(() => {
            this._dimensionsChanged = !0, this._queueRefresh();
          })), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
            this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
          })), this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((h) => this._removeDecoration(h))), this.register((0, d.toDisposable)(() => {
            this._container.remove(), this._decorationElements.clear();
          }));
        }
        _queueRefresh() {
          this._animationFrame === void 0 && (this._animationFrame = this._renderService.addRefreshCallback(() => {
            this._doRefreshDecorations(), this._animationFrame = void 0;
          }));
        }
        _doRefreshDecorations() {
          for (const l of this._decorationService.decorations)
            this._renderDecoration(l);
          this._dimensionsChanged = !1;
        }
        _renderDecoration(l) {
          this._refreshStyle(l), this._dimensionsChanged && this._refreshXPosition(l);
        }
        _createElement(l) {
          var t;
          const s = this._coreBrowserService.mainDocument.createElement("div");
          s.classList.add("xterm-decoration"), s.classList.toggle("xterm-decoration-top-layer", ((t = l == null ? void 0 : l.options) == null ? void 0 : t.layer) === "top"), s.style.width = `${Math.round((l.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, s.style.height = (l.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", s.style.top = (l.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", s.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
          const r = l.options.x ?? 0;
          return r && r > this._bufferService.cols && (s.style.display = "none"), this._refreshXPosition(l, s), s;
        }
        _refreshStyle(l) {
          const s = l.marker.line - this._bufferService.buffers.active.ydisp;
          if (s < 0 || s >= this._bufferService.rows)
            l.element && (l.element.style.display = "none", l.onRenderEmitter.fire(l.element));
          else {
            let r = this._decorationElements.get(l);
            r || (r = this._createElement(l), l.element = r, this._decorationElements.set(l, r), this._container.appendChild(r), l.onDispose(() => {
              this._decorationElements.delete(l), r.remove();
            })), r.style.top = s * this._renderService.dimensions.css.cell.height + "px", r.style.display = this._altBufferIsActive ? "none" : "block", l.onRenderEmitter.fire(r);
          }
        }
        _refreshXPosition(l, s = l.element) {
          if (!s)
            return;
          const r = l.options.x ?? 0;
          (l.options.anchor || "left") === "right" ? s.style.right = r ? r * this._renderService.dimensions.css.cell.width + "px" : "" : s.style.left = r ? r * this._renderService.dimensions.css.cell.width + "px" : "";
        }
        _removeDecoration(l) {
          var s;
          (s = this._decorationElements.get(l)) == null || s.remove(), this._decorationElements.delete(l), l.dispose();
        }
      };
      i.BufferDecorationRenderer = g = o([c(1, f.IBufferService), c(2, a.ICoreBrowserService), c(3, f.IDecorationService), c(4, a.IRenderService)], g);
    }, 5871: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ColorZoneStore = void 0, i.ColorZoneStore = class {
        constructor() {
          this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
        }
        get zones() {
          return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
        }
        clear() {
          this._zones.length = 0, this._zonePoolIndex = 0;
        }
        addDecoration(n) {
          if (n.options.overviewRulerOptions) {
            for (const o of this._zones)
              if (o.color === n.options.overviewRulerOptions.color && o.position === n.options.overviewRulerOptions.position) {
                if (this._lineIntersectsZone(o, n.marker.line))
                  return;
                if (this._lineAdjacentToZone(o, n.marker.line, n.options.overviewRulerOptions.position))
                  return void this._addLineToZone(o, n.marker.line);
              }
            if (this._zonePoolIndex < this._zonePool.length)
              return this._zonePool[this._zonePoolIndex].color = n.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = n.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = n.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = n.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
            this._zones.push({ color: n.options.overviewRulerOptions.color, position: n.options.overviewRulerOptions.position, startBufferLine: n.marker.line, endBufferLine: n.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
          }
        }
        setPadding(n) {
          this._linePadding = n;
        }
        _lineIntersectsZone(n, o) {
          return o >= n.startBufferLine && o <= n.endBufferLine;
        }
        _lineAdjacentToZone(n, o, c) {
          return o >= n.startBufferLine - this._linePadding[c || "full"] && o <= n.endBufferLine + this._linePadding[c || "full"];
        }
        _addLineToZone(n, o) {
          n.startBufferLine = Math.min(n.startBufferLine, o), n.endBufferLine = Math.max(n.endBufferLine, o);
        }
      };
    }, 5744: function(k, i, n) {
      var o = this && this.__decorate || function(e, h, v, u) {
        var p, _ = arguments.length, b = _ < 3 ? h : u === null ? u = Object.getOwnPropertyDescriptor(h, v) : u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          b = Reflect.decorate(e, h, v, u);
        else
          for (var A = e.length - 1; A >= 0; A--)
            (p = e[A]) && (b = (_ < 3 ? p(b) : _ > 3 ? p(h, v, b) : p(h, v)) || b);
        return _ > 3 && b && Object.defineProperty(h, v, b), b;
      }, c = this && this.__param || function(e, h) {
        return function(v, u) {
          h(v, u, e);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.OverviewRulerRenderer = void 0;
      const a = n(5871), d = n(4725), f = n(844), g = n(2585), l = { full: 0, left: 0, center: 0, right: 0 }, s = { full: 0, left: 0, center: 0, right: 0 }, r = { full: 0, left: 0, center: 0, right: 0 };
      let t = i.OverviewRulerRenderer = class extends f.Disposable {
        get _width() {
          return this._optionsService.options.overviewRulerWidth || 0;
        }
        constructor(e, h, v, u, p, _, b) {
          var T;
          super(), this._viewportElement = e, this._screenElement = h, this._bufferService = v, this._decorationService = u, this._renderService = p, this._optionsService = _, this._coreBrowserService = b, this._colorZoneStore = new a.ColorZoneStore(), this._shouldUpdateDimensions = !0, this._shouldUpdateAnchor = !0, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), (T = this._viewportElement.parentElement) == null || T.insertBefore(this._canvas, this._viewportElement);
          const A = this._canvas.getContext("2d");
          if (!A)
            throw new Error("Ctx cannot be null");
          this._ctx = A, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, f.toDisposable)(() => {
            var x;
            (x = this._canvas) == null || x.remove();
          }));
        }
        _registerDecorationListeners() {
          this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, !0))), this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, !0)));
        }
        _registerBufferChangeListeners() {
          this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
            this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
          })), this.register(this._bufferService.onScroll(() => {
            this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
          }));
        }
        _registerDimensionChangeListeners() {
          this.register(this._renderService.onRender(() => {
            this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(!0), this._containerHeight = this._screenElement.clientHeight);
          })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(!0))), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh(!0))), this._queueRefresh(!0);
        }
        _refreshDrawConstants() {
          const e = Math.floor(this._canvas.width / 3), h = Math.ceil(this._canvas.width / 3);
          s.full = this._canvas.width, s.left = e, s.center = h, s.right = e, this._refreshDrawHeightConstants(), r.full = 0, r.left = 0, r.center = s.left, r.right = s.left + s.center;
        }
        _refreshDrawHeightConstants() {
          l.full = Math.round(2 * this._coreBrowserService.dpr);
          const e = this._canvas.height / this._bufferService.buffer.lines.length, h = Math.round(Math.max(Math.min(e, 12), 6) * this._coreBrowserService.dpr);
          l.left = h, l.center = h, l.right = h;
        }
        _refreshColorZonePadding() {
          this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
        }
        _refreshCanvasDimensions() {
          this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
        }
        _refreshDecorations() {
          this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
          for (const h of this._decorationService.decorations)
            this._colorZoneStore.addDecoration(h);
          this._ctx.lineWidth = 1;
          const e = this._colorZoneStore.zones;
          for (const h of e)
            h.position !== "full" && this._renderColorZone(h);
          for (const h of e)
            h.position === "full" && this._renderColorZone(h);
          this._shouldUpdateDimensions = !1, this._shouldUpdateAnchor = !1;
        }
        _renderColorZone(e) {
          this._ctx.fillStyle = e.color, this._ctx.fillRect(r[e.position || "full"], Math.round((this._canvas.height - 1) * (e.startBufferLine / this._bufferService.buffers.active.lines.length) - l[e.position || "full"] / 2), s[e.position || "full"], Math.round((this._canvas.height - 1) * ((e.endBufferLine - e.startBufferLine) / this._bufferService.buffers.active.lines.length) + l[e.position || "full"]));
        }
        _queueRefresh(e, h) {
          this._shouldUpdateDimensions = e || this._shouldUpdateDimensions, this._shouldUpdateAnchor = h || this._shouldUpdateAnchor, this._animationFrame === void 0 && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
            this._refreshDecorations(), this._animationFrame = void 0;
          }));
        }
      };
      i.OverviewRulerRenderer = t = o([c(2, g.IBufferService), c(3, g.IDecorationService), c(4, d.IRenderService), c(5, g.IOptionsService), c(6, d.ICoreBrowserService)], t);
    }, 2950: function(k, i, n) {
      var o = this && this.__decorate || function(l, s, r, t) {
        var e, h = arguments.length, v = h < 3 ? s : t === null ? t = Object.getOwnPropertyDescriptor(s, r) : t;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          v = Reflect.decorate(l, s, r, t);
        else
          for (var u = l.length - 1; u >= 0; u--)
            (e = l[u]) && (v = (h < 3 ? e(v) : h > 3 ? e(s, r, v) : e(s, r)) || v);
        return h > 3 && v && Object.defineProperty(s, r, v), v;
      }, c = this && this.__param || function(l, s) {
        return function(r, t) {
          s(r, t, l);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CompositionHelper = void 0;
      const a = n(4725), d = n(2585), f = n(2584);
      let g = i.CompositionHelper = class {
        get isComposing() {
          return this._isComposing;
        }
        constructor(l, s, r, t, e, h) {
          this._textarea = l, this._compositionView = s, this._bufferService = r, this._optionsService = t, this._coreService = e, this._renderService = h, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
        }
        compositionstart() {
          this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
        }
        compositionupdate(l) {
          this._compositionView.textContent = l.data, this.updateCompositionElements(), setTimeout(() => {
            this._compositionPosition.end = this._textarea.value.length;
          }, 0);
        }
        compositionend() {
          this._finalizeComposition(!0);
        }
        keydown(l) {
          if (this._isComposing || this._isSendingComposition) {
            if (l.keyCode === 229 || l.keyCode === 16 || l.keyCode === 17 || l.keyCode === 18)
              return !1;
            this._finalizeComposition(!1);
          }
          return l.keyCode !== 229 || (this._handleAnyTextareaChanges(), !1);
        }
        _finalizeComposition(l) {
          if (this._compositionView.classList.remove("active"), this._isComposing = !1, l) {
            const s = { start: this._compositionPosition.start, end: this._compositionPosition.end };
            this._isSendingComposition = !0, setTimeout(() => {
              if (this._isSendingComposition) {
                let r;
                this._isSendingComposition = !1, s.start += this._dataAlreadySent.length, r = this._isComposing ? this._textarea.value.substring(s.start, s.end) : this._textarea.value.substring(s.start), r.length > 0 && this._coreService.triggerDataEvent(r, !0);
              }
            }, 0);
          } else {
            this._isSendingComposition = !1;
            const s = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
            this._coreService.triggerDataEvent(s, !0);
          }
        }
        _handleAnyTextareaChanges() {
          const l = this._textarea.value;
          setTimeout(() => {
            if (!this._isComposing) {
              const s = this._textarea.value, r = s.replace(l, "");
              this._dataAlreadySent = r, s.length > l.length ? this._coreService.triggerDataEvent(r, !0) : s.length < l.length ? this._coreService.triggerDataEvent(`${f.C0.DEL}`, !0) : s.length === l.length && s !== l && this._coreService.triggerDataEvent(s, !0);
            }
          }, 0);
        }
        updateCompositionElements(l) {
          if (this._isComposing) {
            if (this._bufferService.buffer.isCursorInViewport) {
              const s = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), r = this._renderService.dimensions.css.cell.height, t = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, e = s * this._renderService.dimensions.css.cell.width;
              this._compositionView.style.left = e + "px", this._compositionView.style.top = t + "px", this._compositionView.style.height = r + "px", this._compositionView.style.lineHeight = r + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
              const h = this._compositionView.getBoundingClientRect();
              this._textarea.style.left = e + "px", this._textarea.style.top = t + "px", this._textarea.style.width = Math.max(h.width, 1) + "px", this._textarea.style.height = Math.max(h.height, 1) + "px", this._textarea.style.lineHeight = h.height + "px";
            }
            l || setTimeout(() => this.updateCompositionElements(!0), 0);
          }
        }
      };
      i.CompositionHelper = g = o([c(2, d.IBufferService), c(3, d.IOptionsService), c(4, d.ICoreService), c(5, a.IRenderService)], g);
    }, 9806: (k, i) => {
      function n(o, c, a) {
        const d = a.getBoundingClientRect(), f = o.getComputedStyle(a), g = parseInt(f.getPropertyValue("padding-left")), l = parseInt(f.getPropertyValue("padding-top"));
        return [c.clientX - d.left - g, c.clientY - d.top - l];
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.getCoords = i.getCoordsRelativeToElement = void 0, i.getCoordsRelativeToElement = n, i.getCoords = function(o, c, a, d, f, g, l, s, r) {
        if (!g)
          return;
        const t = n(o, c, a);
        return t ? (t[0] = Math.ceil((t[0] + (r ? l / 2 : 0)) / l), t[1] = Math.ceil(t[1] / s), t[0] = Math.min(Math.max(t[0], 1), d + (r ? 1 : 0)), t[1] = Math.min(Math.max(t[1], 1), f), t) : void 0;
      };
    }, 9504: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.moveToCellSequence = void 0;
      const o = n(2584);
      function c(s, r, t, e) {
        const h = s - a(s, t), v = r - a(r, t), u = Math.abs(h - v) - function(p, _, b) {
          let A = 0;
          const T = p - a(p, b), x = _ - a(_, b);
          for (let L = 0; L < Math.abs(T - x); L++) {
            const H = d(p, _) === "A" ? -1 : 1, W = b.buffer.lines.get(T + H * L);
            W != null && W.isWrapped && A++;
          }
          return A;
        }(s, r, t);
        return l(u, g(d(s, r), e));
      }
      function a(s, r) {
        let t = 0, e = r.buffer.lines.get(s), h = e == null ? void 0 : e.isWrapped;
        for (; h && s >= 0 && s < r.rows; )
          t++, e = r.buffer.lines.get(--s), h = e == null ? void 0 : e.isWrapped;
        return t;
      }
      function d(s, r) {
        return s > r ? "A" : "B";
      }
      function f(s, r, t, e, h, v) {
        let u = s, p = r, _ = "";
        for (; u !== t || p !== e; )
          u += h ? 1 : -1, h && u > v.cols - 1 ? (_ += v.buffer.translateBufferLineToString(p, !1, s, u), u = 0, s = 0, p++) : !h && u < 0 && (_ += v.buffer.translateBufferLineToString(p, !1, 0, s + 1), u = v.cols - 1, s = u, p--);
        return _ + v.buffer.translateBufferLineToString(p, !1, s, u);
      }
      function g(s, r) {
        const t = r ? "O" : "[";
        return o.C0.ESC + t + s;
      }
      function l(s, r) {
        s = Math.floor(s);
        let t = "";
        for (let e = 0; e < s; e++)
          t += r;
        return t;
      }
      i.moveToCellSequence = function(s, r, t, e) {
        const h = t.buffer.x, v = t.buffer.y;
        if (!t.buffer.hasScrollback)
          return function(_, b, A, T, x, L) {
            return c(b, T, x, L).length === 0 ? "" : l(f(_, b, _, b - a(b, x), !1, x).length, g("D", L));
          }(h, v, 0, r, t, e) + c(v, r, t, e) + function(_, b, A, T, x, L) {
            let H;
            H = c(b, T, x, L).length > 0 ? T - a(T, x) : b;
            const W = T, U = function(K, j, C, D, B, O) {
              let I;
              return I = c(C, D, B, O).length > 0 ? D - a(D, B) : j, K < C && I <= D || K >= C && I < D ? "C" : "D";
            }(_, b, A, T, x, L);
            return l(f(_, H, A, W, U === "C", x).length, g(U, L));
          }(h, v, s, r, t, e);
        let u;
        if (v === r)
          return u = h > s ? "D" : "C", l(Math.abs(h - s), g(u, e));
        u = v > r ? "D" : "C";
        const p = Math.abs(v - r);
        return l(function(_, b) {
          return b.cols - _;
        }(v > r ? s : h, t) + (p - 1) * t.cols + 1 + ((v > r ? h : s) - 1), g(u, e));
      };
    }, 1296: function(k, i, n) {
      var o = this && this.__decorate || function(L, H, W, U) {
        var K, j = arguments.length, C = j < 3 ? H : U === null ? U = Object.getOwnPropertyDescriptor(H, W) : U;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          C = Reflect.decorate(L, H, W, U);
        else
          for (var D = L.length - 1; D >= 0; D--)
            (K = L[D]) && (C = (j < 3 ? K(C) : j > 3 ? K(H, W, C) : K(H, W)) || C);
        return j > 3 && C && Object.defineProperty(H, W, C), C;
      }, c = this && this.__param || function(L, H) {
        return function(W, U) {
          H(W, U, L);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DomRenderer = void 0;
      const a = n(3787), d = n(2550), f = n(2223), g = n(6171), l = n(6052), s = n(4725), r = n(8055), t = n(8460), e = n(844), h = n(2585), v = "xterm-dom-renderer-owner-", u = "xterm-rows", p = "xterm-fg-", _ = "xterm-bg-", b = "xterm-focus", A = "xterm-selection";
      let T = 1, x = i.DomRenderer = class extends e.Disposable {
        constructor(L, H, W, U, K, j, C, D, B, O, I, z, G) {
          super(), this._terminal = L, this._document = H, this._element = W, this._screenElement = U, this._viewportElement = K, this._helperContainer = j, this._linkifier2 = C, this._charSizeService = B, this._optionsService = O, this._bufferService = I, this._coreBrowserService = z, this._themeService = G, this._terminalClass = T++, this._rowElements = [], this._selectionRenderModel = (0, l.createSelectionRenderModel)(), this.onRequestRedraw = this.register(new t.EventEmitter()).event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(u), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(A), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, g.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this.register(this._themeService.onChangeColors((X) => this._injectCss(X))), this._injectCss(this._themeService.colors), this._rowFactory = D.createInstance(a.DomRendererRowFactory, document), this._element.classList.add(v + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((X) => this._handleLinkHover(X))), this.register(this._linkifier2.onHideLinkUnderline((X) => this._handleLinkLeave(X))), this.register((0, e.toDisposable)(() => {
            this._element.classList.remove(v + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
          })), this._widthCache = new d.WidthCache(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
        }
        _updateDimensions() {
          const L = this._coreBrowserService.dpr;
          this.dimensions.device.char.width = this._charSizeService.width * L, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * L), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / L), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / L), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
          for (const W of this._rowElements)
            W.style.width = `${this.dimensions.css.canvas.width}px`, W.style.height = `${this.dimensions.css.cell.height}px`, W.style.lineHeight = `${this.dimensions.css.cell.height}px`, W.style.overflow = "hidden";
          this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
          const H = `${this._terminalSelector} .${u} span { display: inline-block; height: 100%; vertical-align: top;}`;
          this._dimensionsStyleElement.textContent = H, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
        }
        _injectCss(L) {
          this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
          let H = `${this._terminalSelector} .${u} { color: ${L.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
          H += `${this._terminalSelector} .${u} .xterm-dim { color: ${r.color.multiplyOpacity(L.foreground, 0.5).css};}`, H += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
          const W = `blink_underline_${this._terminalClass}`, U = `blink_bar_${this._terminalClass}`, K = `blink_block_${this._terminalClass}`;
          H += `@keyframes ${W} { 50% {  border-bottom-style: hidden; }}`, H += `@keyframes ${U} { 50% {  box-shadow: none; }}`, H += `@keyframes ${K} { 0% {  background-color: ${L.cursor.css};  color: ${L.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${L.cursor.css}; }}`, H += `${this._terminalSelector} .${u}.${b} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${W} 1s step-end infinite;}${this._terminalSelector} .${u}.${b} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${U} 1s step-end infinite;}${this._terminalSelector} .${u}.${b} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${K} 1s step-end infinite;}${this._terminalSelector} .${u} .xterm-cursor.xterm-cursor-block { background-color: ${L.cursor.css}; color: ${L.cursorAccent.css};}${this._terminalSelector} .${u} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${L.cursor.css} !important; color: ${L.cursorAccent.css} !important;}${this._terminalSelector} .${u} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${L.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${u} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${L.cursor.css} inset;}${this._terminalSelector} .${u} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${L.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, H += `${this._terminalSelector} .${A} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${A} div { position: absolute; background-color: ${L.selectionBackgroundOpaque.css};}${this._terminalSelector} .${A} div { position: absolute; background-color: ${L.selectionInactiveBackgroundOpaque.css};}`;
          for (const [j, C] of L.ansi.entries())
            H += `${this._terminalSelector} .${p}${j} { color: ${C.css}; }${this._terminalSelector} .${p}${j}.xterm-dim { color: ${r.color.multiplyOpacity(C, 0.5).css}; }${this._terminalSelector} .${_}${j} { background-color: ${C.css}; }`;
          H += `${this._terminalSelector} .${p}${f.INVERTED_DEFAULT_COLOR} { color: ${r.color.opaque(L.background).css}; }${this._terminalSelector} .${p}${f.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${r.color.multiplyOpacity(r.color.opaque(L.background), 0.5).css}; }${this._terminalSelector} .${_}${f.INVERTED_DEFAULT_COLOR} { background-color: ${L.foreground.css}; }`, this._themeStyleElement.textContent = H;
        }
        _setDefaultSpacing() {
          const L = this.dimensions.css.cell.width - this._widthCache.get("W", !1, !1);
          this._rowContainer.style.letterSpacing = `${L}px`, this._rowFactory.defaultSpacing = L;
        }
        handleDevicePixelRatioChange() {
          this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
        }
        _refreshRowElements(L, H) {
          for (let W = this._rowElements.length; W <= H; W++) {
            const U = this._document.createElement("div");
            this._rowContainer.appendChild(U), this._rowElements.push(U);
          }
          for (; this._rowElements.length > H; )
            this._rowContainer.removeChild(this._rowElements.pop());
        }
        handleResize(L, H) {
          this._refreshRowElements(L, H), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
        }
        handleCharSizeChanged() {
          this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
        }
        handleBlur() {
          this._rowContainer.classList.remove(b), this.renderRows(0, this._bufferService.rows - 1);
        }
        handleFocus() {
          this._rowContainer.classList.add(b), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
        }
        handleSelectionChanged(L, H, W) {
          if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(L, H, W), this.renderRows(0, this._bufferService.rows - 1), !L || !H)
            return;
          this._selectionRenderModel.update(this._terminal, L, H, W);
          const U = this._selectionRenderModel.viewportStartRow, K = this._selectionRenderModel.viewportEndRow, j = this._selectionRenderModel.viewportCappedStartRow, C = this._selectionRenderModel.viewportCappedEndRow;
          if (j >= this._bufferService.rows || C < 0)
            return;
          const D = this._document.createDocumentFragment();
          if (W) {
            const B = L[0] > H[0];
            D.appendChild(this._createSelectionElement(j, B ? H[0] : L[0], B ? L[0] : H[0], C - j + 1));
          } else {
            const B = U === j ? L[0] : 0, O = j === K ? H[0] : this._bufferService.cols;
            D.appendChild(this._createSelectionElement(j, B, O));
            const I = C - j - 1;
            if (D.appendChild(this._createSelectionElement(j + 1, 0, this._bufferService.cols, I)), j !== C) {
              const z = K === C ? H[0] : this._bufferService.cols;
              D.appendChild(this._createSelectionElement(C, 0, z));
            }
          }
          this._selectionContainer.appendChild(D);
        }
        _createSelectionElement(L, H, W, U = 1) {
          const K = this._document.createElement("div"), j = H * this.dimensions.css.cell.width;
          let C = this.dimensions.css.cell.width * (W - H);
          return j + C > this.dimensions.css.canvas.width && (C = this.dimensions.css.canvas.width - j), K.style.height = U * this.dimensions.css.cell.height + "px", K.style.top = L * this.dimensions.css.cell.height + "px", K.style.left = `${j}px`, K.style.width = `${C}px`, K;
        }
        handleCursorMove() {
        }
        _handleOptionsChanged() {
          this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
        }
        clear() {
          for (const L of this._rowElements)
            L.replaceChildren();
        }
        renderRows(L, H) {
          const W = this._bufferService.buffer, U = W.ybase + W.y, K = Math.min(W.x, this._bufferService.cols - 1), j = this._optionsService.rawOptions.cursorBlink, C = this._optionsService.rawOptions.cursorStyle, D = this._optionsService.rawOptions.cursorInactiveStyle;
          for (let B = L; B <= H; B++) {
            const O = B + W.ydisp, I = this._rowElements[B], z = W.lines.get(O);
            if (!I || !z)
              break;
            I.replaceChildren(...this._rowFactory.createRow(z, O, O === U, C, D, K, j, this.dimensions.css.cell.width, this._widthCache, -1, -1));
          }
        }
        get _terminalSelector() {
          return `.${v}${this._terminalClass}`;
        }
        _handleLinkHover(L) {
          this._setCellUnderline(L.x1, L.x2, L.y1, L.y2, L.cols, !0);
        }
        _handleLinkLeave(L) {
          this._setCellUnderline(L.x1, L.x2, L.y1, L.y2, L.cols, !1);
        }
        _setCellUnderline(L, H, W, U, K, j) {
          W < 0 && (L = 0), U < 0 && (H = 0);
          const C = this._bufferService.rows - 1;
          W = Math.max(Math.min(W, C), 0), U = Math.max(Math.min(U, C), 0), K = Math.min(K, this._bufferService.cols);
          const D = this._bufferService.buffer, B = D.ybase + D.y, O = Math.min(D.x, K - 1), I = this._optionsService.rawOptions.cursorBlink, z = this._optionsService.rawOptions.cursorStyle, G = this._optionsService.rawOptions.cursorInactiveStyle;
          for (let X = W; X <= U; ++X) {
            const P = X + D.ydisp, w = this._rowElements[X], N = D.lines.get(P);
            if (!w || !N)
              break;
            w.replaceChildren(...this._rowFactory.createRow(N, P, P === B, z, G, O, I, this.dimensions.css.cell.width, this._widthCache, j ? X === W ? L : 0 : -1, j ? (X === U ? H : K) - 1 : -1));
          }
        }
      };
      i.DomRenderer = x = o([c(7, h.IInstantiationService), c(8, s.ICharSizeService), c(9, h.IOptionsService), c(10, h.IBufferService), c(11, s.ICoreBrowserService), c(12, s.IThemeService)], x);
    }, 3787: function(k, i, n) {
      var o = this && this.__decorate || function(u, p, _, b) {
        var A, T = arguments.length, x = T < 3 ? p : b === null ? b = Object.getOwnPropertyDescriptor(p, _) : b;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          x = Reflect.decorate(u, p, _, b);
        else
          for (var L = u.length - 1; L >= 0; L--)
            (A = u[L]) && (x = (T < 3 ? A(x) : T > 3 ? A(p, _, x) : A(p, _)) || x);
        return T > 3 && x && Object.defineProperty(p, _, x), x;
      }, c = this && this.__param || function(u, p) {
        return function(_, b) {
          p(_, b, u);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DomRendererRowFactory = void 0;
      const a = n(2223), d = n(643), f = n(511), g = n(2585), l = n(8055), s = n(4725), r = n(4269), t = n(6171), e = n(3734);
      let h = i.DomRendererRowFactory = class {
        constructor(u, p, _, b, A, T, x) {
          this._document = u, this._characterJoinerService = p, this._optionsService = _, this._coreBrowserService = b, this._coreService = A, this._decorationService = T, this._themeService = x, this._workCell = new f.CellData(), this._columnSelectMode = !1, this.defaultSpacing = 0;
        }
        handleSelectionChanged(u, p, _) {
          this._selectionStart = u, this._selectionEnd = p, this._columnSelectMode = _;
        }
        createRow(u, p, _, b, A, T, x, L, H, W, U) {
          const K = [], j = this._characterJoinerService.getJoinedCharacters(p), C = this._themeService.colors;
          let D, B = u.getNoBgTrimmedLength();
          _ && B < T + 1 && (B = T + 1);
          let O = 0, I = "", z = 0, G = 0, X = 0, P = !1, w = 0, N = !1, F = 0;
          const V = [], q = W !== -1 && U !== -1;
          for (let Z = 0; Z < B; Z++) {
            u.loadCell(Z, this._workCell);
            let ie = this._workCell.getWidth();
            if (ie === 0)
              continue;
            let se = !1, re = Z, J = this._workCell;
            if (j.length > 0 && Z === j[0][0]) {
              se = !0;
              const ee = j.shift();
              J = new r.JoinedCellData(this._workCell, u.translateToString(!0, ee[0], ee[1]), ee[1] - ee[0]), re = ee[1] - 1, ie = J.getWidth();
            }
            const Ae = this._isCellInSelection(Z, p), qe = _ && Z === T, Ke = q && Z >= W && Z <= U;
            let Ve = !1;
            this._decorationService.forEachDecorationAtCell(Z, p, void 0, (ee) => {
              Ve = !0;
            });
            let Pe = J.getChars() || d.WHITESPACE_CELL_CHAR;
            if (Pe === " " && (J.isUnderline() || J.isOverline()) && (Pe = " "), F = ie * L - H.get(Pe, J.isBold(), J.isItalic()), D) {
              if (O && (Ae && N || !Ae && !N && J.bg === z) && (Ae && N && C.selectionForeground || J.fg === G) && J.extended.ext === X && Ke === P && F === w && !qe && !se && !Ve) {
                J.isInvisible() ? I += d.WHITESPACE_CELL_CHAR : I += Pe, O++;
                continue;
              }
              O && (D.textContent = I), D = this._document.createElement("span"), O = 0, I = "";
            } else
              D = this._document.createElement("span");
            if (z = J.bg, G = J.fg, X = J.extended.ext, P = Ke, w = F, N = Ae, se && T >= Z && T <= re && (T = Z), !this._coreService.isCursorHidden && qe && this._coreService.isCursorInitialized) {
              if (V.push("xterm-cursor"), this._coreBrowserService.isFocused)
                x && V.push("xterm-cursor-blink"), V.push(b === "bar" ? "xterm-cursor-bar" : b === "underline" ? "xterm-cursor-underline" : "xterm-cursor-block");
              else if (A)
                switch (A) {
                  case "outline":
                    V.push("xterm-cursor-outline");
                    break;
                  case "block":
                    V.push("xterm-cursor-block");
                    break;
                  case "bar":
                    V.push("xterm-cursor-bar");
                    break;
                  case "underline":
                    V.push("xterm-cursor-underline");
                }
            }
            if (J.isBold() && V.push("xterm-bold"), J.isItalic() && V.push("xterm-italic"), J.isDim() && V.push("xterm-dim"), I = J.isInvisible() ? d.WHITESPACE_CELL_CHAR : J.getChars() || d.WHITESPACE_CELL_CHAR, J.isUnderline() && (V.push(`xterm-underline-${J.extended.underlineStyle}`), I === " " && (I = " "), !J.isUnderlineColorDefault()))
              if (J.isUnderlineColorRGB())
                D.style.textDecorationColor = `rgb(${e.AttributeData.toColorRGB(J.getUnderlineColor()).join(",")})`;
              else {
                let ee = J.getUnderlineColor();
                this._optionsService.rawOptions.drawBoldTextInBrightColors && J.isBold() && ee < 8 && (ee += 8), D.style.textDecorationColor = C.ansi[ee].css;
              }
            J.isOverline() && (V.push("xterm-overline"), I === " " && (I = " ")), J.isStrikethrough() && V.push("xterm-strikethrough"), Ke && (D.style.textDecoration = "underline");
            let oe = J.getFgColor(), Be = J.getFgColorMode(), de = J.getBgColor(), Te = J.getBgColorMode();
            const Ge = !!J.isInverse();
            if (Ge) {
              const ee = oe;
              oe = de, de = ee;
              const qt = Be;
              Be = Te, Te = qt;
            }
            let pe, Ie, me, Me = !1;
            switch (this._decorationService.forEachDecorationAtCell(Z, p, void 0, (ee) => {
              ee.options.layer !== "top" && Me || (ee.backgroundColorRGB && (Te = 50331648, de = ee.backgroundColorRGB.rgba >> 8 & 16777215, pe = ee.backgroundColorRGB), ee.foregroundColorRGB && (Be = 50331648, oe = ee.foregroundColorRGB.rgba >> 8 & 16777215, Ie = ee.foregroundColorRGB), Me = ee.options.layer === "top");
            }), !Me && Ae && (pe = this._coreBrowserService.isFocused ? C.selectionBackgroundOpaque : C.selectionInactiveBackgroundOpaque, de = pe.rgba >> 8 & 16777215, Te = 50331648, Me = !0, C.selectionForeground && (Be = 50331648, oe = C.selectionForeground.rgba >> 8 & 16777215, Ie = C.selectionForeground)), Me && V.push("xterm-decoration-top"), Te) {
              case 16777216:
              case 33554432:
                me = C.ansi[de], V.push(`xterm-bg-${de}`);
                break;
              case 50331648:
                me = l.channels.toColor(de >> 16, de >> 8 & 255, 255 & de), this._addStyle(D, `background-color:#${v((de >>> 0).toString(16), "0", 6)}`);
                break;
              default:
                Ge ? (me = C.foreground, V.push(`xterm-bg-${a.INVERTED_DEFAULT_COLOR}`)) : me = C.background;
            }
            switch (pe || J.isDim() && (pe = l.color.multiplyOpacity(me, 0.5)), Be) {
              case 16777216:
              case 33554432:
                J.isBold() && oe < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (oe += 8), this._applyMinimumContrast(D, me, C.ansi[oe], J, pe, void 0) || V.push(`xterm-fg-${oe}`);
                break;
              case 50331648:
                const ee = l.channels.toColor(oe >> 16 & 255, oe >> 8 & 255, 255 & oe);
                this._applyMinimumContrast(D, me, ee, J, pe, Ie) || this._addStyle(D, `color:#${v(oe.toString(16), "0", 6)}`);
                break;
              default:
                this._applyMinimumContrast(D, me, C.foreground, J, pe, Ie) || Ge && V.push(`xterm-fg-${a.INVERTED_DEFAULT_COLOR}`);
            }
            V.length && (D.className = V.join(" "), V.length = 0), qe || se || Ve ? D.textContent = I : O++, F !== this.defaultSpacing && (D.style.letterSpacing = `${F}px`), K.push(D), Z = re;
          }
          return D && O && (D.textContent = I), K;
        }
        _applyMinimumContrast(u, p, _, b, A, T) {
          if (this._optionsService.rawOptions.minimumContrastRatio === 1 || (0, t.treatGlyphAsBackgroundColor)(b.getCode()))
            return !1;
          const x = this._getContrastCache(b);
          let L;
          if (A || T || (L = x.getColor(p.rgba, _.rgba)), L === void 0) {
            const H = this._optionsService.rawOptions.minimumContrastRatio / (b.isDim() ? 2 : 1);
            L = l.color.ensureContrastRatio(A || p, T || _, H), x.setColor((A || p).rgba, (T || _).rgba, L ?? null);
          }
          return !!L && (this._addStyle(u, `color:${L.css}`), !0);
        }
        _getContrastCache(u) {
          return u.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
        }
        _addStyle(u, p) {
          u.setAttribute("style", `${u.getAttribute("style") || ""}${p};`);
        }
        _isCellInSelection(u, p) {
          const _ = this._selectionStart, b = this._selectionEnd;
          return !(!_ || !b) && (this._columnSelectMode ? _[0] <= b[0] ? u >= _[0] && p >= _[1] && u < b[0] && p <= b[1] : u < _[0] && p >= _[1] && u >= b[0] && p <= b[1] : p > _[1] && p < b[1] || _[1] === b[1] && p === _[1] && u >= _[0] && u < b[0] || _[1] < b[1] && p === b[1] && u < b[0] || _[1] < b[1] && p === _[1] && u >= _[0]);
        }
      };
      function v(u, p, _) {
        for (; u.length < _; )
          u = p + u;
        return u;
      }
      i.DomRendererRowFactory = h = o([c(1, s.ICharacterJoinerService), c(2, g.IOptionsService), c(3, s.ICoreBrowserService), c(4, g.ICoreService), c(5, g.IDecorationService), c(6, s.IThemeService)], h);
    }, 2550: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.WidthCache = void 0, i.WidthCache = class {
        constructor(n, o) {
          this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._measureElements = [], this._container = n.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
          const c = n.createElement("span");
          c.classList.add("xterm-char-measure-element");
          const a = n.createElement("span");
          a.classList.add("xterm-char-measure-element"), a.style.fontWeight = "bold";
          const d = n.createElement("span");
          d.classList.add("xterm-char-measure-element"), d.style.fontStyle = "italic";
          const f = n.createElement("span");
          f.classList.add("xterm-char-measure-element"), f.style.fontWeight = "bold", f.style.fontStyle = "italic", this._measureElements = [c, a, d, f], this._container.appendChild(c), this._container.appendChild(a), this._container.appendChild(d), this._container.appendChild(f), o.appendChild(this._container), this.clear();
        }
        dispose() {
          this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
        }
        clear() {
          this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
        }
        setFont(n, o, c, a) {
          n === this._font && o === this._fontSize && c === this._weight && a === this._weightBold || (this._font = n, this._fontSize = o, this._weight = c, this._weightBold = a, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${c}`, this._measureElements[1].style.fontWeight = `${a}`, this._measureElements[2].style.fontWeight = `${c}`, this._measureElements[3].style.fontWeight = `${a}`, this.clear());
        }
        get(n, o, c) {
          let a = 0;
          if (!o && !c && n.length === 1 && (a = n.charCodeAt(0)) < 256) {
            if (this._flat[a] !== -9999)
              return this._flat[a];
            const g = this._measure(n, 0);
            return g > 0 && (this._flat[a] = g), g;
          }
          let d = n;
          o && (d += "B"), c && (d += "I");
          let f = this._holey.get(d);
          if (f === void 0) {
            let g = 0;
            o && (g |= 1), c && (g |= 2), f = this._measure(n, g), f > 0 && this._holey.set(d, f);
          }
          return f;
        }
        _measure(n, o) {
          const c = this._measureElements[o];
          return c.textContent = n.repeat(32), c.offsetWidth / 32;
        }
      };
    }, 2223: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.TEXT_BASELINE = i.DIM_OPACITY = i.INVERTED_DEFAULT_COLOR = void 0;
      const o = n(6114);
      i.INVERTED_DEFAULT_COLOR = 257, i.DIM_OPACITY = 0.5, i.TEXT_BASELINE = o.isFirefox || o.isLegacyEdge ? "bottom" : "ideographic";
    }, 6171: (k, i) => {
      function n(c) {
        return 57508 <= c && c <= 57558;
      }
      function o(c) {
        return c >= 128512 && c <= 128591 || c >= 127744 && c <= 128511 || c >= 128640 && c <= 128767 || c >= 9728 && c <= 9983 || c >= 9984 && c <= 10175 || c >= 65024 && c <= 65039 || c >= 129280 && c <= 129535 || c >= 127462 && c <= 127487;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.computeNextVariantOffset = i.createRenderDimensions = i.treatGlyphAsBackgroundColor = i.allowRescaling = i.isEmoji = i.isRestrictedPowerlineGlyph = i.isPowerlineGlyph = i.throwIfFalsy = void 0, i.throwIfFalsy = function(c) {
        if (!c)
          throw new Error("value must not be falsy");
        return c;
      }, i.isPowerlineGlyph = n, i.isRestrictedPowerlineGlyph = function(c) {
        return 57520 <= c && c <= 57527;
      }, i.isEmoji = o, i.allowRescaling = function(c, a, d, f) {
        return a === 1 && d > Math.ceil(1.5 * f) && c !== void 0 && c > 255 && !o(c) && !n(c) && !function(g) {
          return 57344 <= g && g <= 63743;
        }(c);
      }, i.treatGlyphAsBackgroundColor = function(c) {
        return n(c) || function(a) {
          return 9472 <= a && a <= 9631;
        }(c);
      }, i.createRenderDimensions = function() {
        return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
      }, i.computeNextVariantOffset = function(c, a, d = 0) {
        return (c - (2 * Math.round(a) - d)) % (2 * Math.round(a));
      };
    }, 6052: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.createSelectionRenderModel = void 0;
      class n {
        constructor() {
          this.clear();
        }
        clear() {
          this.hasSelection = !1, this.columnSelectMode = !1, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
        }
        update(c, a, d, f = !1) {
          if (this.selectionStart = a, this.selectionEnd = d, !a || !d || a[0] === d[0] && a[1] === d[1])
            return void this.clear();
          const g = c.buffers.active.ydisp, l = a[1] - g, s = d[1] - g, r = Math.max(l, 0), t = Math.min(s, c.rows - 1);
          r >= c.rows || t < 0 ? this.clear() : (this.hasSelection = !0, this.columnSelectMode = f, this.viewportStartRow = l, this.viewportEndRow = s, this.viewportCappedStartRow = r, this.viewportCappedEndRow = t, this.startCol = a[0], this.endCol = d[0]);
        }
        isCellSelected(c, a, d) {
          return !!this.hasSelection && (d -= c.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? a >= this.startCol && d >= this.viewportCappedStartRow && a < this.endCol && d <= this.viewportCappedEndRow : a < this.startCol && d >= this.viewportCappedStartRow && a >= this.endCol && d <= this.viewportCappedEndRow : d > this.viewportStartRow && d < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && d === this.viewportStartRow && a >= this.startCol && a < this.endCol || this.viewportStartRow < this.viewportEndRow && d === this.viewportEndRow && a < this.endCol || this.viewportStartRow < this.viewportEndRow && d === this.viewportStartRow && a >= this.startCol);
        }
      }
      i.createSelectionRenderModel = function() {
        return new n();
      };
    }, 456: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.SelectionModel = void 0, i.SelectionModel = class {
        constructor(n) {
          this._bufferService = n, this.isSelectAllActive = !1, this.selectionStartLength = 0;
        }
        clearSelection() {
          this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0;
        }
        get finalSelectionStart() {
          return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
        }
        get finalSelectionEnd() {
          if (this.isSelectAllActive)
            return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
          if (this.selectionStart) {
            if (!this.selectionEnd || this.areSelectionValuesReversed()) {
              const n = this.selectionStart[0] + this.selectionStartLength;
              return n > this._bufferService.cols ? n % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(n / this._bufferService.cols) - 1] : [n % this._bufferService.cols, this.selectionStart[1] + Math.floor(n / this._bufferService.cols)] : [n, this.selectionStart[1]];
            }
            if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
              const n = this.selectionStart[0] + this.selectionStartLength;
              return n > this._bufferService.cols ? [n % this._bufferService.cols, this.selectionStart[1] + Math.floor(n / this._bufferService.cols)] : [Math.max(n, this.selectionEnd[0]), this.selectionEnd[1]];
            }
            return this.selectionEnd;
          }
        }
        areSelectionValuesReversed() {
          const n = this.selectionStart, o = this.selectionEnd;
          return !(!n || !o) && (n[1] > o[1] || n[1] === o[1] && n[0] > o[0]);
        }
        handleTrim(n) {
          return this.selectionStart && (this.selectionStart[1] -= n), this.selectionEnd && (this.selectionEnd[1] -= n), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1);
        }
      };
    }, 428: function(k, i, n) {
      var o = this && this.__decorate || function(t, e, h, v) {
        var u, p = arguments.length, _ = p < 3 ? e : v === null ? v = Object.getOwnPropertyDescriptor(e, h) : v;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          _ = Reflect.decorate(t, e, h, v);
        else
          for (var b = t.length - 1; b >= 0; b--)
            (u = t[b]) && (_ = (p < 3 ? u(_) : p > 3 ? u(e, h, _) : u(e, h)) || _);
        return p > 3 && _ && Object.defineProperty(e, h, _), _;
      }, c = this && this.__param || function(t, e) {
        return function(h, v) {
          e(h, v, t);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CharSizeService = void 0;
      const a = n(2585), d = n(8460), f = n(844);
      let g = i.CharSizeService = class extends f.Disposable {
        get hasValidSize() {
          return this.width > 0 && this.height > 0;
        }
        constructor(t, e, h) {
          super(), this._optionsService = h, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new d.EventEmitter()), this.onCharSizeChange = this._onCharSizeChange.event;
          try {
            this._measureStrategy = this.register(new r(this._optionsService));
          } catch {
            this._measureStrategy = this.register(new s(t, e, this._optionsService));
          }
          this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
        }
        measure() {
          const t = this._measureStrategy.measure();
          t.width === this.width && t.height === this.height || (this.width = t.width, this.height = t.height, this._onCharSizeChange.fire());
        }
      };
      i.CharSizeService = g = o([c(2, a.IOptionsService)], g);
      class l extends f.Disposable {
        constructor() {
          super(...arguments), this._result = { width: 0, height: 0 };
        }
        _validateAndSet(e, h) {
          e !== void 0 && e > 0 && h !== void 0 && h > 0 && (this._result.width = e, this._result.height = h);
        }
      }
      class s extends l {
        constructor(e, h, v) {
          super(), this._document = e, this._parentElement = h, this._optionsService = v, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
        }
        measure() {
          return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
        }
      }
      class r extends l {
        constructor(e) {
          super(), this._optionsService = e, this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
          const h = this._ctx.measureText("W");
          if (!("width" in h && "fontBoundingBoxAscent" in h && "fontBoundingBoxDescent" in h))
            throw new Error("Required font metrics not supported");
        }
        measure() {
          this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
          const e = this._ctx.measureText("W");
          return this._validateAndSet(e.width, e.fontBoundingBoxAscent + e.fontBoundingBoxDescent), this._result;
        }
      }
    }, 4269: function(k, i, n) {
      var o = this && this.__decorate || function(r, t, e, h) {
        var v, u = arguments.length, p = u < 3 ? t : h === null ? h = Object.getOwnPropertyDescriptor(t, e) : h;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          p = Reflect.decorate(r, t, e, h);
        else
          for (var _ = r.length - 1; _ >= 0; _--)
            (v = r[_]) && (p = (u < 3 ? v(p) : u > 3 ? v(t, e, p) : v(t, e)) || p);
        return u > 3 && p && Object.defineProperty(t, e, p), p;
      }, c = this && this.__param || function(r, t) {
        return function(e, h) {
          t(e, h, r);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CharacterJoinerService = i.JoinedCellData = void 0;
      const a = n(3734), d = n(643), f = n(511), g = n(2585);
      class l extends a.AttributeData {
        constructor(t, e, h) {
          super(), this.content = 0, this.combinedData = "", this.fg = t.fg, this.bg = t.bg, this.combinedData = e, this._width = h;
        }
        isCombined() {
          return 2097152;
        }
        getWidth() {
          return this._width;
        }
        getChars() {
          return this.combinedData;
        }
        getCode() {
          return 2097151;
        }
        setFromCharData(t) {
          throw new Error("not implemented");
        }
        getAsCharData() {
          return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        }
      }
      i.JoinedCellData = l;
      let s = i.CharacterJoinerService = class jt {
        constructor(t) {
          this._bufferService = t, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new f.CellData();
        }
        register(t) {
          const e = { id: this._nextCharacterJoinerId++, handler: t };
          return this._characterJoiners.push(e), e.id;
        }
        deregister(t) {
          for (let e = 0; e < this._characterJoiners.length; e++)
            if (this._characterJoiners[e].id === t)
              return this._characterJoiners.splice(e, 1), !0;
          return !1;
        }
        getJoinedCharacters(t) {
          if (this._characterJoiners.length === 0)
            return [];
          const e = this._bufferService.buffer.lines.get(t);
          if (!e || e.length === 0)
            return [];
          const h = [], v = e.translateToString(!0);
          let u = 0, p = 0, _ = 0, b = e.getFg(0), A = e.getBg(0);
          for (let T = 0; T < e.getTrimmedLength(); T++)
            if (e.loadCell(T, this._workCell), this._workCell.getWidth() !== 0) {
              if (this._workCell.fg !== b || this._workCell.bg !== A) {
                if (T - u > 1) {
                  const x = this._getJoinedRanges(v, _, p, e, u);
                  for (let L = 0; L < x.length; L++)
                    h.push(x[L]);
                }
                u = T, _ = p, b = this._workCell.fg, A = this._workCell.bg;
              }
              p += this._workCell.getChars().length || d.WHITESPACE_CELL_CHAR.length;
            }
          if (this._bufferService.cols - u > 1) {
            const T = this._getJoinedRanges(v, _, p, e, u);
            for (let x = 0; x < T.length; x++)
              h.push(T[x]);
          }
          return h;
        }
        _getJoinedRanges(t, e, h, v, u) {
          const p = t.substring(e, h);
          let _ = [];
          try {
            _ = this._characterJoiners[0].handler(p);
          } catch (b) {
            console.error(b);
          }
          for (let b = 1; b < this._characterJoiners.length; b++)
            try {
              const A = this._characterJoiners[b].handler(p);
              for (let T = 0; T < A.length; T++)
                jt._mergeRanges(_, A[T]);
            } catch (A) {
              console.error(A);
            }
          return this._stringRangesToCellRanges(_, v, u), _;
        }
        _stringRangesToCellRanges(t, e, h) {
          let v = 0, u = !1, p = 0, _ = t[v];
          if (_) {
            for (let b = h; b < this._bufferService.cols; b++) {
              const A = e.getWidth(b), T = e.getString(b).length || d.WHITESPACE_CELL_CHAR.length;
              if (A !== 0) {
                if (!u && _[0] <= p && (_[0] = b, u = !0), _[1] <= p) {
                  if (_[1] = b, _ = t[++v], !_)
                    break;
                  _[0] <= p ? (_[0] = b, u = !0) : u = !1;
                }
                p += T;
              }
            }
            _ && (_[1] = this._bufferService.cols);
          }
        }
        static _mergeRanges(t, e) {
          let h = !1;
          for (let v = 0; v < t.length; v++) {
            const u = t[v];
            if (h) {
              if (e[1] <= u[0])
                return t[v - 1][1] = e[1], t;
              if (e[1] <= u[1])
                return t[v - 1][1] = Math.max(e[1], u[1]), t.splice(v, 1), t;
              t.splice(v, 1), v--;
            } else {
              if (e[1] <= u[0])
                return t.splice(v, 0, e), t;
              if (e[1] <= u[1])
                return u[0] = Math.min(e[0], u[0]), t;
              e[0] < u[1] && (u[0] = Math.min(e[0], u[0]), h = !0);
            }
          }
          return h ? t[t.length - 1][1] = e[1] : t.push(e), t;
        }
      };
      i.CharacterJoinerService = s = o([c(0, g.IBufferService)], s);
    }, 5114: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CoreBrowserService = void 0;
      const o = n(844), c = n(8460), a = n(3656);
      class d extends o.Disposable {
        constructor(l, s, r) {
          super(), this._textarea = l, this._window = s, this.mainDocument = r, this._isFocused = !1, this._cachedIsFocused = void 0, this._screenDprMonitor = new f(this._window), this._onDprChange = this.register(new c.EventEmitter()), this.onDprChange = this._onDprChange.event, this._onWindowChange = this.register(new c.EventEmitter()), this.onWindowChange = this._onWindowChange.event, this.register(this.onWindowChange((t) => this._screenDprMonitor.setWindow(t))), this.register((0, c.forwardEvent)(this._screenDprMonitor.onDprChange, this._onDprChange)), this._textarea.addEventListener("focus", () => this._isFocused = !0), this._textarea.addEventListener("blur", () => this._isFocused = !1);
        }
        get window() {
          return this._window;
        }
        set window(l) {
          this._window !== l && (this._window = l, this._onWindowChange.fire(this._window));
        }
        get dpr() {
          return this.window.devicePixelRatio;
        }
        get isFocused() {
          return this._cachedIsFocused === void 0 && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
        }
      }
      i.CoreBrowserService = d;
      class f extends o.Disposable {
        constructor(l) {
          super(), this._parentWindow = l, this._windowResizeListener = this.register(new o.MutableDisposable()), this._onDprChange = this.register(new c.EventEmitter()), this.onDprChange = this._onDprChange.event, this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this.register((0, o.toDisposable)(() => this.clearListener()));
        }
        setWindow(l) {
          this._parentWindow = l, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
        }
        _setWindowResizeListener() {
          this._windowResizeListener.value = (0, a.addDisposableDomListener)(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
        }
        _setDprAndFireIfDiffers() {
          this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
        }
        _updateDpr() {
          var l;
          this._outerListener && ((l = this._resolutionMediaMatchList) == null || l.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
        }
        clearListener() {
          this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
        }
      }
    }, 779: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.LinkProviderService = void 0;
      const o = n(844);
      class c extends o.Disposable {
        constructor() {
          super(), this.linkProviders = [], this.register((0, o.toDisposable)(() => this.linkProviders.length = 0));
        }
        registerLinkProvider(d) {
          return this.linkProviders.push(d), { dispose: () => {
            const f = this.linkProviders.indexOf(d);
            f !== -1 && this.linkProviders.splice(f, 1);
          } };
        }
      }
      i.LinkProviderService = c;
    }, 8934: function(k, i, n) {
      var o = this && this.__decorate || function(g, l, s, r) {
        var t, e = arguments.length, h = e < 3 ? l : r === null ? r = Object.getOwnPropertyDescriptor(l, s) : r;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          h = Reflect.decorate(g, l, s, r);
        else
          for (var v = g.length - 1; v >= 0; v--)
            (t = g[v]) && (h = (e < 3 ? t(h) : e > 3 ? t(l, s, h) : t(l, s)) || h);
        return e > 3 && h && Object.defineProperty(l, s, h), h;
      }, c = this && this.__param || function(g, l) {
        return function(s, r) {
          l(s, r, g);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.MouseService = void 0;
      const a = n(4725), d = n(9806);
      let f = i.MouseService = class {
        constructor(g, l) {
          this._renderService = g, this._charSizeService = l;
        }
        getCoords(g, l, s, r, t) {
          return (0, d.getCoords)(window, g, l, s, r, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, t);
        }
        getMouseReportCoords(g, l) {
          const s = (0, d.getCoordsRelativeToElement)(window, g, l);
          if (this._charSizeService.hasValidSize)
            return s[0] = Math.min(Math.max(s[0], 0), this._renderService.dimensions.css.canvas.width - 1), s[1] = Math.min(Math.max(s[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(s[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(s[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(s[0]), y: Math.floor(s[1]) };
        }
      };
      i.MouseService = f = o([c(0, a.IRenderService), c(1, a.ICharSizeService)], f);
    }, 3230: function(k, i, n) {
      var o = this && this.__decorate || function(t, e, h, v) {
        var u, p = arguments.length, _ = p < 3 ? e : v === null ? v = Object.getOwnPropertyDescriptor(e, h) : v;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          _ = Reflect.decorate(t, e, h, v);
        else
          for (var b = t.length - 1; b >= 0; b--)
            (u = t[b]) && (_ = (p < 3 ? u(_) : p > 3 ? u(e, h, _) : u(e, h)) || _);
        return p > 3 && _ && Object.defineProperty(e, h, _), _;
      }, c = this && this.__param || function(t, e) {
        return function(h, v) {
          e(h, v, t);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.RenderService = void 0;
      const a = n(6193), d = n(4725), f = n(8460), g = n(844), l = n(7226), s = n(2585);
      let r = i.RenderService = class extends g.Disposable {
        get dimensions() {
          return this._renderer.value.dimensions;
        }
        constructor(t, e, h, v, u, p, _, b) {
          super(), this._rowCount = t, this._charSizeService = v, this._renderer = this.register(new g.MutableDisposable()), this._pausedResizeTask = new l.DebouncedIdleTask(), this._observerDisposable = this.register(new g.MutableDisposable()), this._isPaused = !1, this._needsFullRefresh = !1, this._isNextRenderRedrawOnly = !0, this._needsSelectionRefresh = !1, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = { start: void 0, end: void 0, columnSelectMode: !1 }, this._onDimensionsChange = this.register(new f.EventEmitter()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new f.EventEmitter()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new f.EventEmitter()), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new f.EventEmitter()), this.onRefreshRequest = this._onRefreshRequest.event, this._renderDebouncer = new a.RenderDebouncer((A, T) => this._renderRows(A, T), _), this.register(this._renderDebouncer), this.register(_.onDprChange(() => this.handleDevicePixelRatioChange())), this.register(p.onResize(() => this._fullRefresh())), this.register(p.buffers.onBufferActivate(() => {
            var A;
            return (A = this._renderer.value) == null ? void 0 : A.clear();
          })), this.register(h.onOptionChange(() => this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this.register(u.onDecorationRegistered(() => this._fullRefresh())), this.register(u.onDecorationRemoved(() => this._fullRefresh())), this.register(h.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
            this.clear(), this.handleResize(p.cols, p.rows), this._fullRefresh();
          })), this.register(h.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(p.buffer.y, p.buffer.y, !0))), this.register(b.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(_.window, e), this.register(_.onWindowChange((A) => this._registerIntersectionObserver(A, e)));
        }
        _registerIntersectionObserver(t, e) {
          if ("IntersectionObserver" in t) {
            const h = new t.IntersectionObserver((v) => this._handleIntersectionChange(v[v.length - 1]), { threshold: 0 });
            h.observe(e), this._observerDisposable.value = (0, g.toDisposable)(() => h.disconnect());
          }
        }
        _handleIntersectionChange(t) {
          this._isPaused = t.isIntersecting === void 0 ? t.intersectionRatio === 0 : !t.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1);
        }
        refreshRows(t, e, h = !1) {
          this._isPaused ? this._needsFullRefresh = !0 : (h || (this._isNextRenderRedrawOnly = !1), this._renderDebouncer.refresh(t, e, this._rowCount));
        }
        _renderRows(t, e) {
          this._renderer.value && (t = Math.min(t, this._rowCount - 1), e = Math.min(e, this._rowCount - 1), this._renderer.value.renderRows(t, e), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = !1), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: t, end: e }), this._onRender.fire({ start: t, end: e }), this._isNextRenderRedrawOnly = !0);
        }
        resize(t, e) {
          this._rowCount = e, this._fireOnCanvasResize();
        }
        _handleOptionsChanged() {
          this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
        }
        _fireOnCanvasResize() {
          this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
        }
        hasRenderer() {
          return !!this._renderer.value;
        }
        setRenderer(t) {
          this._renderer.value = t, this._renderer.value && (this._renderer.value.onRequestRedraw((e) => this.refreshRows(e.start, e.end, !0)), this._needsSelectionRefresh = !0, this._fullRefresh());
        }
        addRefreshCallback(t) {
          return this._renderDebouncer.addRefreshCallback(t);
        }
        _fullRefresh() {
          this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1);
        }
        clearTextureAtlas() {
          var t, e;
          this._renderer.value && ((e = (t = this._renderer.value).clearTextureAtlas) == null || e.call(t), this._fullRefresh());
        }
        handleDevicePixelRatioChange() {
          this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
        }
        handleResize(t, e) {
          this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => {
            var h;
            return (h = this._renderer.value) == null ? void 0 : h.handleResize(t, e);
          }) : this._renderer.value.handleResize(t, e), this._fullRefresh());
        }
        handleCharSizeChanged() {
          var t;
          (t = this._renderer.value) == null || t.handleCharSizeChanged();
        }
        handleBlur() {
          var t;
          (t = this._renderer.value) == null || t.handleBlur();
        }
        handleFocus() {
          var t;
          (t = this._renderer.value) == null || t.handleFocus();
        }
        handleSelectionChanged(t, e, h) {
          var v;
          this._selectionState.start = t, this._selectionState.end = e, this._selectionState.columnSelectMode = h, (v = this._renderer.value) == null || v.handleSelectionChanged(t, e, h);
        }
        handleCursorMove() {
          var t;
          (t = this._renderer.value) == null || t.handleCursorMove();
        }
        clear() {
          var t;
          (t = this._renderer.value) == null || t.clear();
        }
      };
      i.RenderService = r = o([c(2, s.IOptionsService), c(3, d.ICharSizeService), c(4, s.IDecorationService), c(5, s.IBufferService), c(6, d.ICoreBrowserService), c(7, d.IThemeService)], r);
    }, 9312: function(k, i, n) {
      var o = this && this.__decorate || function(_, b, A, T) {
        var x, L = arguments.length, H = L < 3 ? b : T === null ? T = Object.getOwnPropertyDescriptor(b, A) : T;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          H = Reflect.decorate(_, b, A, T);
        else
          for (var W = _.length - 1; W >= 0; W--)
            (x = _[W]) && (H = (L < 3 ? x(H) : L > 3 ? x(b, A, H) : x(b, A)) || H);
        return L > 3 && H && Object.defineProperty(b, A, H), H;
      }, c = this && this.__param || function(_, b) {
        return function(A, T) {
          b(A, T, _);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.SelectionService = void 0;
      const a = n(9806), d = n(9504), f = n(456), g = n(4725), l = n(8460), s = n(844), r = n(6114), t = n(4841), e = n(511), h = n(2585), v = " ", u = new RegExp(v, "g");
      let p = i.SelectionService = class extends s.Disposable {
        constructor(_, b, A, T, x, L, H, W, U) {
          super(), this._element = _, this._screenElement = b, this._linkifier = A, this._bufferService = T, this._coreService = x, this._mouseService = L, this._optionsService = H, this._renderService = W, this._coreBrowserService = U, this._dragScrollAmount = 0, this._enabled = !0, this._workCell = new e.CellData(), this._mouseDownTimeStamp = 0, this._oldHasSelection = !1, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new l.EventEmitter()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new l.EventEmitter()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new l.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new l.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (K) => this._handleMouseMove(K), this._mouseUpListener = (K) => this._handleMouseUp(K), this._coreService.onUserInput(() => {
            this.hasSelection && this.clearSelection();
          }), this._trimListener = this._bufferService.buffer.lines.onTrim((K) => this._handleTrim(K)), this.register(this._bufferService.buffers.onBufferActivate((K) => this._handleBufferActivate(K))), this.enable(), this._model = new f.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, s.toDisposable)(() => {
            this._removeMouseDownListeners();
          }));
        }
        reset() {
          this.clearSelection();
        }
        disable() {
          this.clearSelection(), this._enabled = !1;
        }
        enable() {
          this._enabled = !0;
        }
        get selectionStart() {
          return this._model.finalSelectionStart;
        }
        get selectionEnd() {
          return this._model.finalSelectionEnd;
        }
        get hasSelection() {
          const _ = this._model.finalSelectionStart, b = this._model.finalSelectionEnd;
          return !(!_ || !b || _[0] === b[0] && _[1] === b[1]);
        }
        get selectionText() {
          const _ = this._model.finalSelectionStart, b = this._model.finalSelectionEnd;
          if (!_ || !b)
            return "";
          const A = this._bufferService.buffer, T = [];
          if (this._activeSelectionMode === 3) {
            if (_[0] === b[0])
              return "";
            const x = _[0] < b[0] ? _[0] : b[0], L = _[0] < b[0] ? b[0] : _[0];
            for (let H = _[1]; H <= b[1]; H++) {
              const W = A.translateBufferLineToString(H, !0, x, L);
              T.push(W);
            }
          } else {
            const x = _[1] === b[1] ? b[0] : void 0;
            T.push(A.translateBufferLineToString(_[1], !0, _[0], x));
            for (let L = _[1] + 1; L <= b[1] - 1; L++) {
              const H = A.lines.get(L), W = A.translateBufferLineToString(L, !0);
              H != null && H.isWrapped ? T[T.length - 1] += W : T.push(W);
            }
            if (_[1] !== b[1]) {
              const L = A.lines.get(b[1]), H = A.translateBufferLineToString(b[1], !0, 0, b[0]);
              L && L.isWrapped ? T[T.length - 1] += H : T.push(H);
            }
          }
          return T.map((x) => x.replace(u, " ")).join(r.isWindows ? `\r
` : `
`);
        }
        clearSelection() {
          this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
        }
        refresh(_) {
          this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), r.isLinux && _ && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
        }
        _refresh() {
          this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: this._activeSelectionMode === 3 });
        }
        _isClickInSelection(_) {
          const b = this._getMouseBufferCoords(_), A = this._model.finalSelectionStart, T = this._model.finalSelectionEnd;
          return !!(A && T && b) && this._areCoordsInSelection(b, A, T);
        }
        isCellInSelection(_, b) {
          const A = this._model.finalSelectionStart, T = this._model.finalSelectionEnd;
          return !(!A || !T) && this._areCoordsInSelection([_, b], A, T);
        }
        _areCoordsInSelection(_, b, A) {
          return _[1] > b[1] && _[1] < A[1] || b[1] === A[1] && _[1] === b[1] && _[0] >= b[0] && _[0] < A[0] || b[1] < A[1] && _[1] === A[1] && _[0] < A[0] || b[1] < A[1] && _[1] === b[1] && _[0] >= b[0];
        }
        _selectWordAtCursor(_, b) {
          var x, L;
          const A = (L = (x = this._linkifier.currentLink) == null ? void 0 : x.link) == null ? void 0 : L.range;
          if (A)
            return this._model.selectionStart = [A.start.x - 1, A.start.y - 1], this._model.selectionStartLength = (0, t.getRangeLength)(A, this._bufferService.cols), this._model.selectionEnd = void 0, !0;
          const T = this._getMouseBufferCoords(_);
          return !!T && (this._selectWordAt(T, b), this._model.selectionEnd = void 0, !0);
        }
        selectAll() {
          this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
        }
        selectLines(_, b) {
          this._model.clearSelection(), _ = Math.max(_, 0), b = Math.min(b, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, _], this._model.selectionEnd = [this._bufferService.cols, b], this.refresh(), this._onSelectionChange.fire();
        }
        _handleTrim(_) {
          this._model.handleTrim(_) && this.refresh();
        }
        _getMouseBufferCoords(_) {
          const b = this._mouseService.getCoords(_, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
          if (b)
            return b[0]--, b[1]--, b[1] += this._bufferService.buffer.ydisp, b;
        }
        _getMouseEventScrollAmount(_) {
          let b = (0, a.getCoordsRelativeToElement)(this._coreBrowserService.window, _, this._screenElement)[1];
          const A = this._renderService.dimensions.css.canvas.height;
          return b >= 0 && b <= A ? 0 : (b > A && (b -= A), b = Math.min(Math.max(b, -50), 50), b /= 50, b / Math.abs(b) + Math.round(14 * b));
        }
        shouldForceSelection(_) {
          return r.isMac ? _.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : _.shiftKey;
        }
        handleMouseDown(_) {
          if (this._mouseDownTimeStamp = _.timeStamp, (_.button !== 2 || !this.hasSelection) && _.button === 0) {
            if (!this._enabled) {
              if (!this.shouldForceSelection(_))
                return;
              _.stopPropagation();
            }
            _.preventDefault(), this._dragScrollAmount = 0, this._enabled && _.shiftKey ? this._handleIncrementalClick(_) : _.detail === 1 ? this._handleSingleClick(_) : _.detail === 2 ? this._handleDoubleClick(_) : _.detail === 3 && this._handleTripleClick(_), this._addMouseDownListeners(), this.refresh(!0);
          }
        }
        _addMouseDownListeners() {
          this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
        }
        _removeMouseDownListeners() {
          this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
        }
        _handleIncrementalClick(_) {
          this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(_));
        }
        _handleSingleClick(_) {
          if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(_) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(_), !this._model.selectionStart)
            return;
          this._model.selectionEnd = void 0;
          const b = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
          b && b.length !== this._model.selectionStart[0] && b.hasWidth(this._model.selectionStart[0]) === 0 && this._model.selectionStart[0]++;
        }
        _handleDoubleClick(_) {
          this._selectWordAtCursor(_, !0) && (this._activeSelectionMode = 1);
        }
        _handleTripleClick(_) {
          const b = this._getMouseBufferCoords(_);
          b && (this._activeSelectionMode = 2, this._selectLineAt(b[1]));
        }
        shouldColumnSelect(_) {
          return _.altKey && !(r.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
        }
        _handleMouseMove(_) {
          if (_.stopImmediatePropagation(), !this._model.selectionStart)
            return;
          const b = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
          if (this._model.selectionEnd = this._getMouseBufferCoords(_), !this._model.selectionEnd)
            return void this.refresh(!0);
          this._activeSelectionMode === 2 ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : this._activeSelectionMode === 1 && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(_), this._activeSelectionMode !== 3 && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
          const A = this._bufferService.buffer;
          if (this._model.selectionEnd[1] < A.lines.length) {
            const T = A.lines.get(this._model.selectionEnd[1]);
            T && T.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
          }
          b && b[0] === this._model.selectionEnd[0] && b[1] === this._model.selectionEnd[1] || this.refresh(!0);
        }
        _dragScroll() {
          if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
            this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: !1 });
            const _ = this._bufferService.buffer;
            this._dragScrollAmount > 0 ? (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(_.ydisp + this._bufferService.rows, _.lines.length - 1)) : (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = _.ydisp), this.refresh();
          }
        }
        _handleMouseUp(_) {
          const b = _.timeStamp - this._mouseDownTimeStamp;
          if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && b < 500 && _.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
            if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
              const A = this._mouseService.getCoords(_, this._element, this._bufferService.cols, this._bufferService.rows, !1);
              if (A && A[0] !== void 0 && A[1] !== void 0) {
                const T = (0, d.moveToCellSequence)(A[0] - 1, A[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                this._coreService.triggerDataEvent(T, !0);
              }
            }
          } else
            this._fireEventIfSelectionChanged();
        }
        _fireEventIfSelectionChanged() {
          const _ = this._model.finalSelectionStart, b = this._model.finalSelectionEnd, A = !(!_ || !b || _[0] === b[0] && _[1] === b[1]);
          A ? _ && b && (this._oldSelectionStart && this._oldSelectionEnd && _[0] === this._oldSelectionStart[0] && _[1] === this._oldSelectionStart[1] && b[0] === this._oldSelectionEnd[0] && b[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(_, b, A)) : this._oldHasSelection && this._fireOnSelectionChange(_, b, A);
        }
        _fireOnSelectionChange(_, b, A) {
          this._oldSelectionStart = _, this._oldSelectionEnd = b, this._oldHasSelection = A, this._onSelectionChange.fire();
        }
        _handleBufferActivate(_) {
          this.clearSelection(), this._trimListener.dispose(), this._trimListener = _.activeBuffer.lines.onTrim((b) => this._handleTrim(b));
        }
        _convertViewportColToCharacterIndex(_, b) {
          let A = b;
          for (let T = 0; b >= T; T++) {
            const x = _.loadCell(T, this._workCell).getChars().length;
            this._workCell.getWidth() === 0 ? A-- : x > 1 && b !== T && (A += x - 1);
          }
          return A;
        }
        setSelection(_, b, A) {
          this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [_, b], this._model.selectionStartLength = A, this.refresh(), this._fireEventIfSelectionChanged();
        }
        rightClickSelect(_) {
          this._isClickInSelection(_) || (this._selectWordAtCursor(_, !1) && this.refresh(!0), this._fireEventIfSelectionChanged());
        }
        _getWordAt(_, b, A = !0, T = !0) {
          if (_[0] >= this._bufferService.cols)
            return;
          const x = this._bufferService.buffer, L = x.lines.get(_[1]);
          if (!L)
            return;
          const H = x.translateBufferLineToString(_[1], !1);
          let W = this._convertViewportColToCharacterIndex(L, _[0]), U = W;
          const K = _[0] - W;
          let j = 0, C = 0, D = 0, B = 0;
          if (H.charAt(W) === " ") {
            for (; W > 0 && H.charAt(W - 1) === " "; )
              W--;
            for (; U < H.length && H.charAt(U + 1) === " "; )
              U++;
          } else {
            let z = _[0], G = _[0];
            L.getWidth(z) === 0 && (j++, z--), L.getWidth(G) === 2 && (C++, G++);
            const X = L.getString(G).length;
            for (X > 1 && (B += X - 1, U += X - 1); z > 0 && W > 0 && !this._isCharWordSeparator(L.loadCell(z - 1, this._workCell)); ) {
              L.loadCell(z - 1, this._workCell);
              const P = this._workCell.getChars().length;
              this._workCell.getWidth() === 0 ? (j++, z--) : P > 1 && (D += P - 1, W -= P - 1), W--, z--;
            }
            for (; G < L.length && U + 1 < H.length && !this._isCharWordSeparator(L.loadCell(G + 1, this._workCell)); ) {
              L.loadCell(G + 1, this._workCell);
              const P = this._workCell.getChars().length;
              this._workCell.getWidth() === 2 ? (C++, G++) : P > 1 && (B += P - 1, U += P - 1), U++, G++;
            }
          }
          U++;
          let O = W + K - j + D, I = Math.min(this._bufferService.cols, U - W + j + C - D - B);
          if (b || H.slice(W, U).trim() !== "") {
            if (A && O === 0 && L.getCodePoint(0) !== 32) {
              const z = x.lines.get(_[1] - 1);
              if (z && L.isWrapped && z.getCodePoint(this._bufferService.cols - 1) !== 32) {
                const G = this._getWordAt([this._bufferService.cols - 1, _[1] - 1], !1, !0, !1);
                if (G) {
                  const X = this._bufferService.cols - G.start;
                  O -= X, I += X;
                }
              }
            }
            if (T && O + I === this._bufferService.cols && L.getCodePoint(this._bufferService.cols - 1) !== 32) {
              const z = x.lines.get(_[1] + 1);
              if (z != null && z.isWrapped && z.getCodePoint(0) !== 32) {
                const G = this._getWordAt([0, _[1] + 1], !1, !1, !0);
                G && (I += G.length);
              }
            }
            return { start: O, length: I };
          }
        }
        _selectWordAt(_, b) {
          const A = this._getWordAt(_, b);
          if (A) {
            for (; A.start < 0; )
              A.start += this._bufferService.cols, _[1]--;
            this._model.selectionStart = [A.start, _[1]], this._model.selectionStartLength = A.length;
          }
        }
        _selectToWordAt(_) {
          const b = this._getWordAt(_, !0);
          if (b) {
            let A = _[1];
            for (; b.start < 0; )
              b.start += this._bufferService.cols, A--;
            if (!this._model.areSelectionValuesReversed())
              for (; b.start + b.length > this._bufferService.cols; )
                b.length -= this._bufferService.cols, A++;
            this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? b.start : b.start + b.length, A];
          }
        }
        _isCharWordSeparator(_) {
          return _.getWidth() !== 0 && this._optionsService.rawOptions.wordSeparator.indexOf(_.getChars()) >= 0;
        }
        _selectLineAt(_) {
          const b = this._bufferService.buffer.getWrappedRangeForLine(_), A = { start: { x: 0, y: b.first }, end: { x: this._bufferService.cols - 1, y: b.last } };
          this._model.selectionStart = [0, b.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, t.getRangeLength)(A, this._bufferService.cols);
        }
      };
      i.SelectionService = p = o([c(3, h.IBufferService), c(4, h.ICoreService), c(5, g.IMouseService), c(6, h.IOptionsService), c(7, g.IRenderService), c(8, g.ICoreBrowserService)], p);
    }, 4725: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ILinkProviderService = i.IThemeService = i.ICharacterJoinerService = i.ISelectionService = i.IRenderService = i.IMouseService = i.ICoreBrowserService = i.ICharSizeService = void 0;
      const o = n(8343);
      i.ICharSizeService = (0, o.createDecorator)("CharSizeService"), i.ICoreBrowserService = (0, o.createDecorator)("CoreBrowserService"), i.IMouseService = (0, o.createDecorator)("MouseService"), i.IRenderService = (0, o.createDecorator)("RenderService"), i.ISelectionService = (0, o.createDecorator)("SelectionService"), i.ICharacterJoinerService = (0, o.createDecorator)("CharacterJoinerService"), i.IThemeService = (0, o.createDecorator)("ThemeService"), i.ILinkProviderService = (0, o.createDecorator)("LinkProviderService");
    }, 6731: function(k, i, n) {
      var o = this && this.__decorate || function(p, _, b, A) {
        var T, x = arguments.length, L = x < 3 ? _ : A === null ? A = Object.getOwnPropertyDescriptor(_, b) : A;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          L = Reflect.decorate(p, _, b, A);
        else
          for (var H = p.length - 1; H >= 0; H--)
            (T = p[H]) && (L = (x < 3 ? T(L) : x > 3 ? T(_, b, L) : T(_, b)) || L);
        return x > 3 && L && Object.defineProperty(_, b, L), L;
      }, c = this && this.__param || function(p, _) {
        return function(b, A) {
          _(b, A, p);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ThemeService = i.DEFAULT_ANSI_COLORS = void 0;
      const a = n(7239), d = n(8055), f = n(8460), g = n(844), l = n(2585), s = d.css.toColor("#ffffff"), r = d.css.toColor("#000000"), t = d.css.toColor("#ffffff"), e = d.css.toColor("#000000"), h = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
      i.DEFAULT_ANSI_COLORS = Object.freeze((() => {
        const p = [d.css.toColor("#2e3436"), d.css.toColor("#cc0000"), d.css.toColor("#4e9a06"), d.css.toColor("#c4a000"), d.css.toColor("#3465a4"), d.css.toColor("#75507b"), d.css.toColor("#06989a"), d.css.toColor("#d3d7cf"), d.css.toColor("#555753"), d.css.toColor("#ef2929"), d.css.toColor("#8ae234"), d.css.toColor("#fce94f"), d.css.toColor("#729fcf"), d.css.toColor("#ad7fa8"), d.css.toColor("#34e2e2"), d.css.toColor("#eeeeec")], _ = [0, 95, 135, 175, 215, 255];
        for (let b = 0; b < 216; b++) {
          const A = _[b / 36 % 6 | 0], T = _[b / 6 % 6 | 0], x = _[b % 6];
          p.push({ css: d.channels.toCss(A, T, x), rgba: d.channels.toRgba(A, T, x) });
        }
        for (let b = 0; b < 24; b++) {
          const A = 8 + 10 * b;
          p.push({ css: d.channels.toCss(A, A, A), rgba: d.channels.toRgba(A, A, A) });
        }
        return p;
      })());
      let v = i.ThemeService = class extends g.Disposable {
        get colors() {
          return this._colors;
        }
        constructor(p) {
          super(), this._optionsService = p, this._contrastCache = new a.ColorContrastCache(), this._halfContrastCache = new a.ColorContrastCache(), this._onChangeColors = this.register(new f.EventEmitter()), this.onChangeColors = this._onChangeColors.event, this._colors = { foreground: s, background: r, cursor: t, cursorAccent: e, selectionForeground: void 0, selectionBackgroundTransparent: h, selectionBackgroundOpaque: d.color.blend(r, h), selectionInactiveBackgroundTransparent: h, selectionInactiveBackgroundOpaque: d.color.blend(r, h), ansi: i.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
        }
        _setTheme(p = {}) {
          const _ = this._colors;
          if (_.foreground = u(p.foreground, s), _.background = u(p.background, r), _.cursor = u(p.cursor, t), _.cursorAccent = u(p.cursorAccent, e), _.selectionBackgroundTransparent = u(p.selectionBackground, h), _.selectionBackgroundOpaque = d.color.blend(_.background, _.selectionBackgroundTransparent), _.selectionInactiveBackgroundTransparent = u(p.selectionInactiveBackground, _.selectionBackgroundTransparent), _.selectionInactiveBackgroundOpaque = d.color.blend(_.background, _.selectionInactiveBackgroundTransparent), _.selectionForeground = p.selectionForeground ? u(p.selectionForeground, d.NULL_COLOR) : void 0, _.selectionForeground === d.NULL_COLOR && (_.selectionForeground = void 0), d.color.isOpaque(_.selectionBackgroundTransparent) && (_.selectionBackgroundTransparent = d.color.opacity(_.selectionBackgroundTransparent, 0.3)), d.color.isOpaque(_.selectionInactiveBackgroundTransparent) && (_.selectionInactiveBackgroundTransparent = d.color.opacity(_.selectionInactiveBackgroundTransparent, 0.3)), _.ansi = i.DEFAULT_ANSI_COLORS.slice(), _.ansi[0] = u(p.black, i.DEFAULT_ANSI_COLORS[0]), _.ansi[1] = u(p.red, i.DEFAULT_ANSI_COLORS[1]), _.ansi[2] = u(p.green, i.DEFAULT_ANSI_COLORS[2]), _.ansi[3] = u(p.yellow, i.DEFAULT_ANSI_COLORS[3]), _.ansi[4] = u(p.blue, i.DEFAULT_ANSI_COLORS[4]), _.ansi[5] = u(p.magenta, i.DEFAULT_ANSI_COLORS[5]), _.ansi[6] = u(p.cyan, i.DEFAULT_ANSI_COLORS[6]), _.ansi[7] = u(p.white, i.DEFAULT_ANSI_COLORS[7]), _.ansi[8] = u(p.brightBlack, i.DEFAULT_ANSI_COLORS[8]), _.ansi[9] = u(p.brightRed, i.DEFAULT_ANSI_COLORS[9]), _.ansi[10] = u(p.brightGreen, i.DEFAULT_ANSI_COLORS[10]), _.ansi[11] = u(p.brightYellow, i.DEFAULT_ANSI_COLORS[11]), _.ansi[12] = u(p.brightBlue, i.DEFAULT_ANSI_COLORS[12]), _.ansi[13] = u(p.brightMagenta, i.DEFAULT_ANSI_COLORS[13]), _.ansi[14] = u(p.brightCyan, i.DEFAULT_ANSI_COLORS[14]), _.ansi[15] = u(p.brightWhite, i.DEFAULT_ANSI_COLORS[15]), p.extendedAnsi) {
            const b = Math.min(_.ansi.length - 16, p.extendedAnsi.length);
            for (let A = 0; A < b; A++)
              _.ansi[A + 16] = u(p.extendedAnsi[A], i.DEFAULT_ANSI_COLORS[A + 16]);
          }
          this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
        }
        restoreColor(p) {
          this._restoreColor(p), this._onChangeColors.fire(this.colors);
        }
        _restoreColor(p) {
          if (p !== void 0)
            switch (p) {
              case 256:
                this._colors.foreground = this._restoreColors.foreground;
                break;
              case 257:
                this._colors.background = this._restoreColors.background;
                break;
              case 258:
                this._colors.cursor = this._restoreColors.cursor;
                break;
              default:
                this._colors.ansi[p] = this._restoreColors.ansi[p];
            }
          else
            for (let _ = 0; _ < this._restoreColors.ansi.length; ++_)
              this._colors.ansi[_] = this._restoreColors.ansi[_];
        }
        modifyColors(p) {
          p(this._colors), this._onChangeColors.fire(this.colors);
        }
        _updateRestoreColors() {
          this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
        }
      };
      function u(p, _) {
        if (p !== void 0)
          try {
            return d.css.toColor(p);
          } catch {
          }
        return _;
      }
      i.ThemeService = v = o([c(0, l.IOptionsService)], v);
    }, 6349: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CircularList = void 0;
      const o = n(8460), c = n(844);
      class a extends c.Disposable {
        constructor(f) {
          super(), this._maxLength = f, this.onDeleteEmitter = this.register(new o.EventEmitter()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new o.EventEmitter()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new o.EventEmitter()), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
        }
        get maxLength() {
          return this._maxLength;
        }
        set maxLength(f) {
          if (this._maxLength === f)
            return;
          const g = new Array(f);
          for (let l = 0; l < Math.min(f, this.length); l++)
            g[l] = this._array[this._getCyclicIndex(l)];
          this._array = g, this._maxLength = f, this._startIndex = 0;
        }
        get length() {
          return this._length;
        }
        set length(f) {
          if (f > this._length)
            for (let g = this._length; g < f; g++)
              this._array[g] = void 0;
          this._length = f;
        }
        get(f) {
          return this._array[this._getCyclicIndex(f)];
        }
        set(f, g) {
          this._array[this._getCyclicIndex(f)] = g;
        }
        push(f) {
          this._array[this._getCyclicIndex(this._length)] = f, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
        }
        recycle() {
          if (this._length !== this._maxLength)
            throw new Error("Can only recycle when the buffer is full");
          return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
        }
        get isFull() {
          return this._length === this._maxLength;
        }
        pop() {
          return this._array[this._getCyclicIndex(this._length-- - 1)];
        }
        splice(f, g, ...l) {
          if (g) {
            for (let s = f; s < this._length - g; s++)
              this._array[this._getCyclicIndex(s)] = this._array[this._getCyclicIndex(s + g)];
            this._length -= g, this.onDeleteEmitter.fire({ index: f, amount: g });
          }
          for (let s = this._length - 1; s >= f; s--)
            this._array[this._getCyclicIndex(s + l.length)] = this._array[this._getCyclicIndex(s)];
          for (let s = 0; s < l.length; s++)
            this._array[this._getCyclicIndex(f + s)] = l[s];
          if (l.length && this.onInsertEmitter.fire({ index: f, amount: l.length }), this._length + l.length > this._maxLength) {
            const s = this._length + l.length - this._maxLength;
            this._startIndex += s, this._length = this._maxLength, this.onTrimEmitter.fire(s);
          } else
            this._length += l.length;
        }
        trimStart(f) {
          f > this._length && (f = this._length), this._startIndex += f, this._length -= f, this.onTrimEmitter.fire(f);
        }
        shiftElements(f, g, l) {
          if (!(g <= 0)) {
            if (f < 0 || f >= this._length)
              throw new Error("start argument out of range");
            if (f + l < 0)
              throw new Error("Cannot shift elements in list beyond index 0");
            if (l > 0) {
              for (let r = g - 1; r >= 0; r--)
                this.set(f + r + l, this.get(f + r));
              const s = f + g + l - this._length;
              if (s > 0)
                for (this._length += s; this._length > this._maxLength; )
                  this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
            } else
              for (let s = 0; s < g; s++)
                this.set(f + s + l, this.get(f + s));
          }
        }
        _getCyclicIndex(f) {
          return (this._startIndex + f) % this._maxLength;
        }
      }
      i.CircularList = a;
    }, 1439: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.clone = void 0, i.clone = function n(o, c = 5) {
        if (typeof o != "object")
          return o;
        const a = Array.isArray(o) ? [] : {};
        for (const d in o)
          a[d] = c <= 1 ? o[d] : o[d] && n(o[d], c - 1);
        return a;
      };
    }, 8055: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.contrastRatio = i.toPaddedHex = i.rgba = i.rgb = i.css = i.color = i.channels = i.NULL_COLOR = void 0;
      let n = 0, o = 0, c = 0, a = 0;
      var d, f, g, l, s;
      function r(e) {
        const h = e.toString(16);
        return h.length < 2 ? "0" + h : h;
      }
      function t(e, h) {
        return e < h ? (h + 0.05) / (e + 0.05) : (e + 0.05) / (h + 0.05);
      }
      i.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e) {
        e.toCss = function(h, v, u, p) {
          return p !== void 0 ? `#${r(h)}${r(v)}${r(u)}${r(p)}` : `#${r(h)}${r(v)}${r(u)}`;
        }, e.toRgba = function(h, v, u, p = 255) {
          return (h << 24 | v << 16 | u << 8 | p) >>> 0;
        }, e.toColor = function(h, v, u, p) {
          return { css: e.toCss(h, v, u, p), rgba: e.toRgba(h, v, u, p) };
        };
      }(d || (i.channels = d = {})), function(e) {
        function h(v, u) {
          return a = Math.round(255 * u), [n, o, c] = s.toChannels(v.rgba), { css: d.toCss(n, o, c, a), rgba: d.toRgba(n, o, c, a) };
        }
        e.blend = function(v, u) {
          if (a = (255 & u.rgba) / 255, a === 1)
            return { css: u.css, rgba: u.rgba };
          const p = u.rgba >> 24 & 255, _ = u.rgba >> 16 & 255, b = u.rgba >> 8 & 255, A = v.rgba >> 24 & 255, T = v.rgba >> 16 & 255, x = v.rgba >> 8 & 255;
          return n = A + Math.round((p - A) * a), o = T + Math.round((_ - T) * a), c = x + Math.round((b - x) * a), { css: d.toCss(n, o, c), rgba: d.toRgba(n, o, c) };
        }, e.isOpaque = function(v) {
          return (255 & v.rgba) == 255;
        }, e.ensureContrastRatio = function(v, u, p) {
          const _ = s.ensureContrastRatio(v.rgba, u.rgba, p);
          if (_)
            return d.toColor(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255);
        }, e.opaque = function(v) {
          const u = (255 | v.rgba) >>> 0;
          return [n, o, c] = s.toChannels(u), { css: d.toCss(n, o, c), rgba: u };
        }, e.opacity = h, e.multiplyOpacity = function(v, u) {
          return a = 255 & v.rgba, h(v, a * u / 255);
        }, e.toColorRGB = function(v) {
          return [v.rgba >> 24 & 255, v.rgba >> 16 & 255, v.rgba >> 8 & 255];
        };
      }(f || (i.color = f = {})), function(e) {
        let h, v;
        try {
          const u = document.createElement("canvas");
          u.width = 1, u.height = 1;
          const p = u.getContext("2d", { willReadFrequently: !0 });
          p && (h = p, h.globalCompositeOperation = "copy", v = h.createLinearGradient(0, 0, 1, 1));
        } catch {
        }
        e.toColor = function(u) {
          if (u.match(/#[\da-f]{3,8}/i))
            switch (u.length) {
              case 4:
                return n = parseInt(u.slice(1, 2).repeat(2), 16), o = parseInt(u.slice(2, 3).repeat(2), 16), c = parseInt(u.slice(3, 4).repeat(2), 16), d.toColor(n, o, c);
              case 5:
                return n = parseInt(u.slice(1, 2).repeat(2), 16), o = parseInt(u.slice(2, 3).repeat(2), 16), c = parseInt(u.slice(3, 4).repeat(2), 16), a = parseInt(u.slice(4, 5).repeat(2), 16), d.toColor(n, o, c, a);
              case 7:
                return { css: u, rgba: (parseInt(u.slice(1), 16) << 8 | 255) >>> 0 };
              case 9:
                return { css: u, rgba: parseInt(u.slice(1), 16) >>> 0 };
            }
          const p = u.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
          if (p)
            return n = parseInt(p[1]), o = parseInt(p[2]), c = parseInt(p[3]), a = Math.round(255 * (p[5] === void 0 ? 1 : parseFloat(p[5]))), d.toColor(n, o, c, a);
          if (!h || !v)
            throw new Error("css.toColor: Unsupported css format");
          if (h.fillStyle = v, h.fillStyle = u, typeof h.fillStyle != "string")
            throw new Error("css.toColor: Unsupported css format");
          if (h.fillRect(0, 0, 1, 1), [n, o, c, a] = h.getImageData(0, 0, 1, 1).data, a !== 255)
            throw new Error("css.toColor: Unsupported css format");
          return { rgba: d.toRgba(n, o, c, a), css: u };
        };
      }(g || (i.css = g = {})), function(e) {
        function h(v, u, p) {
          const _ = v / 255, b = u / 255, A = p / 255;
          return 0.2126 * (_ <= 0.03928 ? _ / 12.92 : Math.pow((_ + 0.055) / 1.055, 2.4)) + 0.7152 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)) + 0.0722 * (A <= 0.03928 ? A / 12.92 : Math.pow((A + 0.055) / 1.055, 2.4));
        }
        e.relativeLuminance = function(v) {
          return h(v >> 16 & 255, v >> 8 & 255, 255 & v);
        }, e.relativeLuminance2 = h;
      }(l || (i.rgb = l = {})), function(e) {
        function h(u, p, _) {
          const b = u >> 24 & 255, A = u >> 16 & 255, T = u >> 8 & 255;
          let x = p >> 24 & 255, L = p >> 16 & 255, H = p >> 8 & 255, W = t(l.relativeLuminance2(x, L, H), l.relativeLuminance2(b, A, T));
          for (; W < _ && (x > 0 || L > 0 || H > 0); )
            x -= Math.max(0, Math.ceil(0.1 * x)), L -= Math.max(0, Math.ceil(0.1 * L)), H -= Math.max(0, Math.ceil(0.1 * H)), W = t(l.relativeLuminance2(x, L, H), l.relativeLuminance2(b, A, T));
          return (x << 24 | L << 16 | H << 8 | 255) >>> 0;
        }
        function v(u, p, _) {
          const b = u >> 24 & 255, A = u >> 16 & 255, T = u >> 8 & 255;
          let x = p >> 24 & 255, L = p >> 16 & 255, H = p >> 8 & 255, W = t(l.relativeLuminance2(x, L, H), l.relativeLuminance2(b, A, T));
          for (; W < _ && (x < 255 || L < 255 || H < 255); )
            x = Math.min(255, x + Math.ceil(0.1 * (255 - x))), L = Math.min(255, L + Math.ceil(0.1 * (255 - L))), H = Math.min(255, H + Math.ceil(0.1 * (255 - H))), W = t(l.relativeLuminance2(x, L, H), l.relativeLuminance2(b, A, T));
          return (x << 24 | L << 16 | H << 8 | 255) >>> 0;
        }
        e.blend = function(u, p) {
          if (a = (255 & p) / 255, a === 1)
            return p;
          const _ = p >> 24 & 255, b = p >> 16 & 255, A = p >> 8 & 255, T = u >> 24 & 255, x = u >> 16 & 255, L = u >> 8 & 255;
          return n = T + Math.round((_ - T) * a), o = x + Math.round((b - x) * a), c = L + Math.round((A - L) * a), d.toRgba(n, o, c);
        }, e.ensureContrastRatio = function(u, p, _) {
          const b = l.relativeLuminance(u >> 8), A = l.relativeLuminance(p >> 8);
          if (t(b, A) < _) {
            if (A < b) {
              const L = h(u, p, _), H = t(b, l.relativeLuminance(L >> 8));
              if (H < _) {
                const W = v(u, p, _);
                return H > t(b, l.relativeLuminance(W >> 8)) ? L : W;
              }
              return L;
            }
            const T = v(u, p, _), x = t(b, l.relativeLuminance(T >> 8));
            if (x < _) {
              const L = h(u, p, _);
              return x > t(b, l.relativeLuminance(L >> 8)) ? T : L;
            }
            return T;
          }
        }, e.reduceLuminance = h, e.increaseLuminance = v, e.toChannels = function(u) {
          return [u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u];
        };
      }(s || (i.rgba = s = {})), i.toPaddedHex = r, i.contrastRatio = t;
    }, 8969: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CoreTerminal = void 0;
      const o = n(844), c = n(2585), a = n(4348), d = n(7866), f = n(744), g = n(7302), l = n(6975), s = n(8460), r = n(1753), t = n(1480), e = n(7994), h = n(9282), v = n(5435), u = n(5981), p = n(2660);
      let _ = !1;
      class b extends o.Disposable {
        get onScroll() {
          return this._onScrollApi || (this._onScrollApi = this.register(new s.EventEmitter()), this._onScroll.event((T) => {
            var x;
            (x = this._onScrollApi) == null || x.fire(T.position);
          })), this._onScrollApi.event;
        }
        get cols() {
          return this._bufferService.cols;
        }
        get rows() {
          return this._bufferService.rows;
        }
        get buffers() {
          return this._bufferService.buffers;
        }
        get options() {
          return this.optionsService.options;
        }
        set options(T) {
          for (const x in T)
            this.optionsService.options[x] = T[x];
        }
        constructor(T) {
          super(), this._windowsWrappingHeuristics = this.register(new o.MutableDisposable()), this._onBinary = this.register(new s.EventEmitter()), this.onBinary = this._onBinary.event, this._onData = this.register(new s.EventEmitter()), this.onData = this._onData.event, this._onLineFeed = this.register(new s.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new s.EventEmitter()), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new s.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new s.EventEmitter()), this._instantiationService = new a.InstantiationService(), this.optionsService = this.register(new g.OptionsService(T)), this._instantiationService.setService(c.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(f.BufferService)), this._instantiationService.setService(c.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(d.LogService)), this._instantiationService.setService(c.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(l.CoreService)), this._instantiationService.setService(c.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(r.CoreMouseService)), this._instantiationService.setService(c.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(t.UnicodeService)), this._instantiationService.setService(c.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(e.CharsetService), this._instantiationService.setService(c.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(p.OscLinkService), this._instantiationService.setService(c.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, s.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, s.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, s.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, s.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())), this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this.register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this.register(this._bufferService.onScroll((x) => {
            this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
          })), this.register(this._inputHandler.onScroll((x) => {
            this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
          })), this._writeBuffer = this.register(new u.WriteBuffer((x, L) => this._inputHandler.parse(x, L))), this.register((0, s.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed));
        }
        write(T, x) {
          this._writeBuffer.write(T, x);
        }
        writeSync(T, x) {
          this._logService.logLevel <= c.LogLevelEnum.WARN && !_ && (this._logService.warn("writeSync is unreliable and will be removed soon."), _ = !0), this._writeBuffer.writeSync(T, x);
        }
        input(T, x = !0) {
          this.coreService.triggerDataEvent(T, x);
        }
        resize(T, x) {
          isNaN(T) || isNaN(x) || (T = Math.max(T, f.MINIMUM_COLS), x = Math.max(x, f.MINIMUM_ROWS), this._bufferService.resize(T, x));
        }
        scroll(T, x = !1) {
          this._bufferService.scroll(T, x);
        }
        scrollLines(T, x, L) {
          this._bufferService.scrollLines(T, x, L);
        }
        scrollPages(T) {
          this.scrollLines(T * (this.rows - 1));
        }
        scrollToTop() {
          this.scrollLines(-this._bufferService.buffer.ydisp);
        }
        scrollToBottom() {
          this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
        }
        scrollToLine(T) {
          const x = T - this._bufferService.buffer.ydisp;
          x !== 0 && this.scrollLines(x);
        }
        registerEscHandler(T, x) {
          return this._inputHandler.registerEscHandler(T, x);
        }
        registerDcsHandler(T, x) {
          return this._inputHandler.registerDcsHandler(T, x);
        }
        registerCsiHandler(T, x) {
          return this._inputHandler.registerCsiHandler(T, x);
        }
        registerOscHandler(T, x) {
          return this._inputHandler.registerOscHandler(T, x);
        }
        _setup() {
          this._handleWindowsPtyOptionChange();
        }
        reset() {
          this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
        }
        _handleWindowsPtyOptionChange() {
          let T = !1;
          const x = this.optionsService.rawOptions.windowsPty;
          x && x.buildNumber !== void 0 && x.buildNumber !== void 0 ? T = x.backend === "conpty" && x.buildNumber < 21376 : this.optionsService.rawOptions.windowsMode && (T = !0), T ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
        }
        _enableWindowsWrappingHeuristics() {
          if (!this._windowsWrappingHeuristics.value) {
            const T = [];
            T.push(this.onLineFeed(h.updateWindowsModeWrappedState.bind(null, this._bufferService))), T.push(this.registerCsiHandler({ final: "H" }, () => ((0, h.updateWindowsModeWrappedState)(this._bufferService), !1))), this._windowsWrappingHeuristics.value = (0, o.toDisposable)(() => {
              for (const x of T)
                x.dispose();
            });
          }
        }
      }
      i.CoreTerminal = b;
    }, 8460: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.runAndSubscribe = i.forwardEvent = i.EventEmitter = void 0, i.EventEmitter = class {
        constructor() {
          this._listeners = [], this._disposed = !1;
        }
        get event() {
          return this._event || (this._event = (n) => (this._listeners.push(n), { dispose: () => {
            if (!this._disposed) {
              for (let o = 0; o < this._listeners.length; o++)
                if (this._listeners[o] === n)
                  return void this._listeners.splice(o, 1);
            }
          } })), this._event;
        }
        fire(n, o) {
          const c = [];
          for (let a = 0; a < this._listeners.length; a++)
            c.push(this._listeners[a]);
          for (let a = 0; a < c.length; a++)
            c[a].call(void 0, n, o);
        }
        dispose() {
          this.clearListeners(), this._disposed = !0;
        }
        clearListeners() {
          this._listeners && (this._listeners.length = 0);
        }
      }, i.forwardEvent = function(n, o) {
        return n((c) => o.fire(c));
      }, i.runAndSubscribe = function(n, o) {
        return o(void 0), n((c) => o(c));
      };
    }, 5435: function(k, i, n) {
      var o = this && this.__decorate || function(j, C, D, B) {
        var O, I = arguments.length, z = I < 3 ? C : B === null ? B = Object.getOwnPropertyDescriptor(C, D) : B;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          z = Reflect.decorate(j, C, D, B);
        else
          for (var G = j.length - 1; G >= 0; G--)
            (O = j[G]) && (z = (I < 3 ? O(z) : I > 3 ? O(C, D, z) : O(C, D)) || z);
        return I > 3 && z && Object.defineProperty(C, D, z), z;
      }, c = this && this.__param || function(j, C) {
        return function(D, B) {
          C(D, B, j);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.InputHandler = i.WindowsOptionsReportType = void 0;
      const a = n(2584), d = n(7116), f = n(2015), g = n(844), l = n(482), s = n(8437), r = n(8460), t = n(643), e = n(511), h = n(3734), v = n(2585), u = n(1480), p = n(6242), _ = n(6351), b = n(5941), A = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, T = 131072;
      function x(j, C) {
        if (j > 24)
          return C.setWinLines || !1;
        switch (j) {
          case 1:
            return !!C.restoreWin;
          case 2:
            return !!C.minimizeWin;
          case 3:
            return !!C.setWinPosition;
          case 4:
            return !!C.setWinSizePixels;
          case 5:
            return !!C.raiseWin;
          case 6:
            return !!C.lowerWin;
          case 7:
            return !!C.refreshWin;
          case 8:
            return !!C.setWinSizeChars;
          case 9:
            return !!C.maximizeWin;
          case 10:
            return !!C.fullscreenWin;
          case 11:
            return !!C.getWinState;
          case 13:
            return !!C.getWinPosition;
          case 14:
            return !!C.getWinSizePixels;
          case 15:
            return !!C.getScreenSizePixels;
          case 16:
            return !!C.getCellSizePixels;
          case 18:
            return !!C.getWinSizeChars;
          case 19:
            return !!C.getScreenSizeChars;
          case 20:
            return !!C.getIconTitle;
          case 21:
            return !!C.getWinTitle;
          case 22:
            return !!C.pushTitle;
          case 23:
            return !!C.popTitle;
          case 24:
            return !!C.setWinLines;
        }
        return !1;
      }
      var L;
      (function(j) {
        j[j.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", j[j.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
      })(L || (i.WindowsOptionsReportType = L = {}));
      let H = 0;
      class W extends g.Disposable {
        getAttrData() {
          return this._curAttrData;
        }
        constructor(C, D, B, O, I, z, G, X, P = new f.EscapeSequenceParser()) {
          super(), this._bufferService = C, this._charsetService = D, this._coreService = B, this._logService = O, this._optionsService = I, this._oscLinkService = z, this._coreMouseService = G, this._unicodeService = X, this._parser = P, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new l.StringToUtf32(), this._utf8Decoder = new l.Utf8ToUtf32(), this._workCell = new e.CellData(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = s.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = s.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new r.EventEmitter()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new r.EventEmitter()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new r.EventEmitter()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new r.EventEmitter()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new r.EventEmitter()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new r.EventEmitter()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new r.EventEmitter()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new r.EventEmitter()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new r.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new r.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new r.EventEmitter()), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new r.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new r.EventEmitter()), this.onColor = this._onColor.event, this._parseStack = { paused: !1, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this.register(this._parser), this._dirtyRowTracker = new U(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((w) => this._activeBuffer = w.activeBuffer)), this._parser.setCsiHandlerFallback((w, N) => {
            this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(w), params: N.toArray() });
          }), this._parser.setEscHandlerFallback((w) => {
            this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(w) });
          }), this._parser.setExecuteHandlerFallback((w) => {
            this._logService.debug("Unknown EXECUTE code: ", { code: w });
          }), this._parser.setOscHandlerFallback((w, N, F) => {
            this._logService.debug("Unknown OSC code: ", { identifier: w, action: N, data: F });
          }), this._parser.setDcsHandlerFallback((w, N, F) => {
            N === "HOOK" && (F = F.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(w), action: N, payload: F });
          }), this._parser.setPrintHandler((w, N, F) => this.print(w, N, F)), this._parser.registerCsiHandler({ final: "@" }, (w) => this.insertChars(w)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (w) => this.scrollLeft(w)), this._parser.registerCsiHandler({ final: "A" }, (w) => this.cursorUp(w)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (w) => this.scrollRight(w)), this._parser.registerCsiHandler({ final: "B" }, (w) => this.cursorDown(w)), this._parser.registerCsiHandler({ final: "C" }, (w) => this.cursorForward(w)), this._parser.registerCsiHandler({ final: "D" }, (w) => this.cursorBackward(w)), this._parser.registerCsiHandler({ final: "E" }, (w) => this.cursorNextLine(w)), this._parser.registerCsiHandler({ final: "F" }, (w) => this.cursorPrecedingLine(w)), this._parser.registerCsiHandler({ final: "G" }, (w) => this.cursorCharAbsolute(w)), this._parser.registerCsiHandler({ final: "H" }, (w) => this.cursorPosition(w)), this._parser.registerCsiHandler({ final: "I" }, (w) => this.cursorForwardTab(w)), this._parser.registerCsiHandler({ final: "J" }, (w) => this.eraseInDisplay(w, !1)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (w) => this.eraseInDisplay(w, !0)), this._parser.registerCsiHandler({ final: "K" }, (w) => this.eraseInLine(w, !1)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (w) => this.eraseInLine(w, !0)), this._parser.registerCsiHandler({ final: "L" }, (w) => this.insertLines(w)), this._parser.registerCsiHandler({ final: "M" }, (w) => this.deleteLines(w)), this._parser.registerCsiHandler({ final: "P" }, (w) => this.deleteChars(w)), this._parser.registerCsiHandler({ final: "S" }, (w) => this.scrollUp(w)), this._parser.registerCsiHandler({ final: "T" }, (w) => this.scrollDown(w)), this._parser.registerCsiHandler({ final: "X" }, (w) => this.eraseChars(w)), this._parser.registerCsiHandler({ final: "Z" }, (w) => this.cursorBackwardTab(w)), this._parser.registerCsiHandler({ final: "`" }, (w) => this.charPosAbsolute(w)), this._parser.registerCsiHandler({ final: "a" }, (w) => this.hPositionRelative(w)), this._parser.registerCsiHandler({ final: "b" }, (w) => this.repeatPrecedingCharacter(w)), this._parser.registerCsiHandler({ final: "c" }, (w) => this.sendDeviceAttributesPrimary(w)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (w) => this.sendDeviceAttributesSecondary(w)), this._parser.registerCsiHandler({ final: "d" }, (w) => this.linePosAbsolute(w)), this._parser.registerCsiHandler({ final: "e" }, (w) => this.vPositionRelative(w)), this._parser.registerCsiHandler({ final: "f" }, (w) => this.hVPosition(w)), this._parser.registerCsiHandler({ final: "g" }, (w) => this.tabClear(w)), this._parser.registerCsiHandler({ final: "h" }, (w) => this.setMode(w)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (w) => this.setModePrivate(w)), this._parser.registerCsiHandler({ final: "l" }, (w) => this.resetMode(w)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (w) => this.resetModePrivate(w)), this._parser.registerCsiHandler({ final: "m" }, (w) => this.charAttributes(w)), this._parser.registerCsiHandler({ final: "n" }, (w) => this.deviceStatus(w)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (w) => this.deviceStatusPrivate(w)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (w) => this.softReset(w)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (w) => this.setCursorStyle(w)), this._parser.registerCsiHandler({ final: "r" }, (w) => this.setScrollRegion(w)), this._parser.registerCsiHandler({ final: "s" }, (w) => this.saveCursor(w)), this._parser.registerCsiHandler({ final: "t" }, (w) => this.windowOptions(w)), this._parser.registerCsiHandler({ final: "u" }, (w) => this.restoreCursor(w)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (w) => this.insertColumns(w)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (w) => this.deleteColumns(w)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (w) => this.selectProtected(w)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (w) => this.requestMode(w, !0)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (w) => this.requestMode(w, !1)), this._parser.setExecuteHandler(a.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(a.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(a.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(a.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(a.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(a.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(a.C0.HT, () => this.tab()), this._parser.setExecuteHandler(a.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(a.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(a.C1.IND, () => this.index()), this._parser.setExecuteHandler(a.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(a.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new p.OscHandler((w) => (this.setTitle(w), this.setIconName(w), !0))), this._parser.registerOscHandler(1, new p.OscHandler((w) => this.setIconName(w))), this._parser.registerOscHandler(2, new p.OscHandler((w) => this.setTitle(w))), this._parser.registerOscHandler(4, new p.OscHandler((w) => this.setOrReportIndexedColor(w))), this._parser.registerOscHandler(8, new p.OscHandler((w) => this.setHyperlink(w))), this._parser.registerOscHandler(10, new p.OscHandler((w) => this.setOrReportFgColor(w))), this._parser.registerOscHandler(11, new p.OscHandler((w) => this.setOrReportBgColor(w))), this._parser.registerOscHandler(12, new p.OscHandler((w) => this.setOrReportCursorColor(w))), this._parser.registerOscHandler(104, new p.OscHandler((w) => this.restoreIndexedColor(w))), this._parser.registerOscHandler(110, new p.OscHandler((w) => this.restoreFgColor(w))), this._parser.registerOscHandler(111, new p.OscHandler((w) => this.restoreBgColor(w))), this._parser.registerOscHandler(112, new p.OscHandler((w) => this.restoreCursorColor(w))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
          for (const w in d.CHARSETS)
            this._parser.registerEscHandler({ intermediates: "(", final: w }, () => this.selectCharset("(" + w)), this._parser.registerEscHandler({ intermediates: ")", final: w }, () => this.selectCharset(")" + w)), this._parser.registerEscHandler({ intermediates: "*", final: w }, () => this.selectCharset("*" + w)), this._parser.registerEscHandler({ intermediates: "+", final: w }, () => this.selectCharset("+" + w)), this._parser.registerEscHandler({ intermediates: "-", final: w }, () => this.selectCharset("-" + w)), this._parser.registerEscHandler({ intermediates: ".", final: w }, () => this.selectCharset("." + w)), this._parser.registerEscHandler({ intermediates: "/", final: w }, () => this.selectCharset("/" + w));
          this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((w) => (this._logService.error("Parsing error: ", w), w)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new _.DcsHandler((w, N) => this.requestStatusString(w, N)));
        }
        _preserveStack(C, D, B, O) {
          this._parseStack.paused = !0, this._parseStack.cursorStartX = C, this._parseStack.cursorStartY = D, this._parseStack.decodedLength = B, this._parseStack.position = O;
        }
        _logSlowResolvingAsync(C) {
          this._logService.logLevel <= v.LogLevelEnum.WARN && Promise.race([C, new Promise((D, B) => setTimeout(() => B("#SLOW_TIMEOUT"), 5e3))]).catch((D) => {
            if (D !== "#SLOW_TIMEOUT")
              throw D;
            console.warn("async parser handler taking longer than 5000 ms");
          });
        }
        _getCurrentLinkId() {
          return this._curAttrData.extended.urlId;
        }
        parse(C, D) {
          let B, O = this._activeBuffer.x, I = this._activeBuffer.y, z = 0;
          const G = this._parseStack.paused;
          if (G) {
            if (B = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, D))
              return this._logSlowResolvingAsync(B), B;
            O = this._parseStack.cursorStartX, I = this._parseStack.cursorStartY, this._parseStack.paused = !1, C.length > T && (z = this._parseStack.position + T);
          }
          if (this._logService.logLevel <= v.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + (typeof C == "string" ? ` "${C}"` : ` "${Array.prototype.map.call(C, (w) => String.fromCharCode(w)).join("")}"`), typeof C == "string" ? C.split("").map((w) => w.charCodeAt(0)) : C), this._parseBuffer.length < C.length && this._parseBuffer.length < T && (this._parseBuffer = new Uint32Array(Math.min(C.length, T))), G || this._dirtyRowTracker.clearRange(), C.length > T)
            for (let w = z; w < C.length; w += T) {
              const N = w + T < C.length ? w + T : C.length, F = typeof C == "string" ? this._stringDecoder.decode(C.substring(w, N), this._parseBuffer) : this._utf8Decoder.decode(C.subarray(w, N), this._parseBuffer);
              if (B = this._parser.parse(this._parseBuffer, F))
                return this._preserveStack(O, I, F, w), this._logSlowResolvingAsync(B), B;
            }
          else if (!G) {
            const w = typeof C == "string" ? this._stringDecoder.decode(C, this._parseBuffer) : this._utf8Decoder.decode(C, this._parseBuffer);
            if (B = this._parser.parse(this._parseBuffer, w))
              return this._preserveStack(O, I, w, 0), this._logSlowResolvingAsync(B), B;
          }
          this._activeBuffer.x === O && this._activeBuffer.y === I || this._onCursorMove.fire();
          const X = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), P = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
          P < this._bufferService.rows && this._onRequestRefreshRows.fire(Math.min(P, this._bufferService.rows - 1), Math.min(X, this._bufferService.rows - 1));
        }
        print(C, D, B) {
          let O, I;
          const z = this._charsetService.charset, G = this._optionsService.rawOptions.screenReaderMode, X = this._bufferService.cols, P = this._coreService.decPrivateModes.wraparound, w = this._coreService.modes.insertMode, N = this._curAttrData;
          let F = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && B - D > 0 && F.getWidth(this._activeBuffer.x - 1) === 2 && F.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, N);
          let V = this._parser.precedingJoinState;
          for (let q = D; q < B; ++q) {
            if (O = C[q], O < 127 && z) {
              const re = z[String.fromCharCode(O)];
              re && (O = re.charCodeAt(0));
            }
            const Z = this._unicodeService.charProperties(O, V);
            I = u.UnicodeService.extractWidth(Z);
            const ie = u.UnicodeService.extractShouldJoin(Z), se = ie ? u.UnicodeService.extractWidth(V) : 0;
            if (V = Z, G && this._onA11yChar.fire((0, l.stringFromCodePoint)(O)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + I - se > X) {
              if (P) {
                const re = F;
                let J = this._activeBuffer.x - se;
                for (this._activeBuffer.x = se, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !0), F = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), se > 0 && F instanceof s.BufferLine && F.copyCellsFrom(re, J, 0, se, !1); J < X; )
                  re.setCellFromCodepoint(J++, 0, 1, N);
              } else if (this._activeBuffer.x = X - 1, I === 2)
                continue;
            }
            if (ie && this._activeBuffer.x) {
              const re = F.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
              F.addCodepointToCell(this._activeBuffer.x - re, O, I);
              for (let J = I - se; --J >= 0; )
                F.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, N);
            } else if (w && (F.insertCells(this._activeBuffer.x, I - se, this._activeBuffer.getNullCell(N)), F.getWidth(X - 1) === 2 && F.setCellFromCodepoint(X - 1, t.NULL_CELL_CODE, t.NULL_CELL_WIDTH, N)), F.setCellFromCodepoint(this._activeBuffer.x++, O, I, N), I > 0)
              for (; --I; )
                F.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, N);
          }
          this._parser.precedingJoinState = V, this._activeBuffer.x < X && B - D > 0 && F.getWidth(this._activeBuffer.x) === 0 && !F.hasContent(this._activeBuffer.x) && F.setCellFromCodepoint(this._activeBuffer.x, 0, 1, N), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        registerCsiHandler(C, D) {
          return C.final !== "t" || C.prefix || C.intermediates ? this._parser.registerCsiHandler(C, D) : this._parser.registerCsiHandler(C, (B) => !x(B.params[0], this._optionsService.rawOptions.windowOptions) || D(B));
        }
        registerDcsHandler(C, D) {
          return this._parser.registerDcsHandler(C, new _.DcsHandler(D));
        }
        registerEscHandler(C, D) {
          return this._parser.registerEscHandler(C, D);
        }
        registerOscHandler(C, D) {
          return this._parser.registerOscHandler(C, new p.OscHandler(D));
        }
        bell() {
          return this._onRequestBell.fire(), !0;
        }
        lineFeed() {
          return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), !0;
        }
        carriageReturn() {
          return this._activeBuffer.x = 0, !0;
        }
        backspace() {
          var C;
          if (!this._coreService.decPrivateModes.reverseWraparound)
            return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0;
          if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
            this._activeBuffer.x--;
          else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && ((C = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)) != null && C.isWrapped)) {
            this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
            const D = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            D.hasWidth(this._activeBuffer.x) && !D.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
          }
          return this._restrictCursor(), !0;
        }
        tab() {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return !0;
          const C = this._activeBuffer.x;
          return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - C), !0;
        }
        shiftOut() {
          return this._charsetService.setgLevel(1), !0;
        }
        shiftIn() {
          return this._charsetService.setgLevel(0), !0;
        }
        _restrictCursor(C = this._bufferService.cols - 1) {
          this._activeBuffer.x = Math.min(C, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        _setCursor(C, D) {
          this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = C, this._activeBuffer.y = this._activeBuffer.scrollTop + D) : (this._activeBuffer.x = C, this._activeBuffer.y = D), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        _moveCursor(C, D) {
          this._restrictCursor(), this._setCursor(this._activeBuffer.x + C, this._activeBuffer.y + D);
        }
        cursorUp(C) {
          const D = this._activeBuffer.y - this._activeBuffer.scrollTop;
          return D >= 0 ? this._moveCursor(0, -Math.min(D, C.params[0] || 1)) : this._moveCursor(0, -(C.params[0] || 1)), !0;
        }
        cursorDown(C) {
          const D = this._activeBuffer.scrollBottom - this._activeBuffer.y;
          return D >= 0 ? this._moveCursor(0, Math.min(D, C.params[0] || 1)) : this._moveCursor(0, C.params[0] || 1), !0;
        }
        cursorForward(C) {
          return this._moveCursor(C.params[0] || 1, 0), !0;
        }
        cursorBackward(C) {
          return this._moveCursor(-(C.params[0] || 1), 0), !0;
        }
        cursorNextLine(C) {
          return this.cursorDown(C), this._activeBuffer.x = 0, !0;
        }
        cursorPrecedingLine(C) {
          return this.cursorUp(C), this._activeBuffer.x = 0, !0;
        }
        cursorCharAbsolute(C) {
          return this._setCursor((C.params[0] || 1) - 1, this._activeBuffer.y), !0;
        }
        cursorPosition(C) {
          return this._setCursor(C.length >= 2 ? (C.params[1] || 1) - 1 : 0, (C.params[0] || 1) - 1), !0;
        }
        charPosAbsolute(C) {
          return this._setCursor((C.params[0] || 1) - 1, this._activeBuffer.y), !0;
        }
        hPositionRelative(C) {
          return this._moveCursor(C.params[0] || 1, 0), !0;
        }
        linePosAbsolute(C) {
          return this._setCursor(this._activeBuffer.x, (C.params[0] || 1) - 1), !0;
        }
        vPositionRelative(C) {
          return this._moveCursor(0, C.params[0] || 1), !0;
        }
        hVPosition(C) {
          return this.cursorPosition(C), !0;
        }
        tabClear(C) {
          const D = C.params[0];
          return D === 0 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : D === 3 && (this._activeBuffer.tabs = {}), !0;
        }
        cursorForwardTab(C) {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return !0;
          let D = C.params[0] || 1;
          for (; D--; )
            this._activeBuffer.x = this._activeBuffer.nextStop();
          return !0;
        }
        cursorBackwardTab(C) {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return !0;
          let D = C.params[0] || 1;
          for (; D--; )
            this._activeBuffer.x = this._activeBuffer.prevStop();
          return !0;
        }
        selectProtected(C) {
          const D = C.params[0];
          return D === 1 && (this._curAttrData.bg |= 536870912), D !== 2 && D !== 0 || (this._curAttrData.bg &= -536870913), !0;
        }
        _eraseInBufferLine(C, D, B, O = !1, I = !1) {
          const z = this._activeBuffer.lines.get(this._activeBuffer.ybase + C);
          z.replaceCells(D, B, this._activeBuffer.getNullCell(this._eraseAttrData()), I), O && (z.isWrapped = !1);
        }
        _resetBufferLine(C, D = !1) {
          const B = this._activeBuffer.lines.get(this._activeBuffer.ybase + C);
          B && (B.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), D), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + C), B.isWrapped = !1);
        }
        eraseInDisplay(C, D = !1) {
          let B;
          switch (this._restrictCursor(this._bufferService.cols), C.params[0]) {
            case 0:
              for (B = this._activeBuffer.y, this._dirtyRowTracker.markDirty(B), this._eraseInBufferLine(B++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, D); B < this._bufferService.rows; B++)
                this._resetBufferLine(B, D);
              this._dirtyRowTracker.markDirty(B);
              break;
            case 1:
              for (B = this._activeBuffer.y, this._dirtyRowTracker.markDirty(B), this._eraseInBufferLine(B, 0, this._activeBuffer.x + 1, !0, D), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(B + 1).isWrapped = !1); B--; )
                this._resetBufferLine(B, D);
              this._dirtyRowTracker.markDirty(0);
              break;
            case 2:
              for (B = this._bufferService.rows, this._dirtyRowTracker.markDirty(B - 1); B--; )
                this._resetBufferLine(B, D);
              this._dirtyRowTracker.markDirty(0);
              break;
            case 3:
              const O = this._activeBuffer.lines.length - this._bufferService.rows;
              O > 0 && (this._activeBuffer.lines.trimStart(O), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - O, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - O, 0), this._onScroll.fire(0));
          }
          return !0;
        }
        eraseInLine(C, D = !1) {
          switch (this._restrictCursor(this._bufferService.cols), C.params[0]) {
            case 0:
              this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, D);
              break;
            case 1:
              this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1, D);
              break;
            case 2:
              this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0, D);
          }
          return this._dirtyRowTracker.markDirty(this._activeBuffer.y), !0;
        }
        insertLines(C) {
          this._restrictCursor();
          let D = C.params[0] || 1;
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const B = this._activeBuffer.ybase + this._activeBuffer.y, O = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, I = this._bufferService.rows - 1 + this._activeBuffer.ybase - O + 1;
          for (; D--; )
            this._activeBuffer.lines.splice(I - 1, 1), this._activeBuffer.lines.splice(B, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
        }
        deleteLines(C) {
          this._restrictCursor();
          let D = C.params[0] || 1;
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const B = this._activeBuffer.ybase + this._activeBuffer.y;
          let O;
          for (O = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, O = this._bufferService.rows - 1 + this._activeBuffer.ybase - O; D--; )
            this._activeBuffer.lines.splice(B, 1), this._activeBuffer.lines.splice(O, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
        }
        insertChars(C) {
          this._restrictCursor();
          const D = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return D && (D.insertCells(this._activeBuffer.x, C.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
        }
        deleteChars(C) {
          this._restrictCursor();
          const D = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return D && (D.deleteCells(this._activeBuffer.x, C.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
        }
        scrollUp(C) {
          let D = C.params[0] || 1;
          for (; D--; )
            this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        scrollDown(C) {
          let D = C.params[0] || 1;
          for (; D--; )
            this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(s.DEFAULT_ATTR_DATA));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        scrollLeft(C) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const D = C.params[0] || 1;
          for (let B = this._activeBuffer.scrollTop; B <= this._activeBuffer.scrollBottom; ++B) {
            const O = this._activeBuffer.lines.get(this._activeBuffer.ybase + B);
            O.deleteCells(0, D, this._activeBuffer.getNullCell(this._eraseAttrData())), O.isWrapped = !1;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        scrollRight(C) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const D = C.params[0] || 1;
          for (let B = this._activeBuffer.scrollTop; B <= this._activeBuffer.scrollBottom; ++B) {
            const O = this._activeBuffer.lines.get(this._activeBuffer.ybase + B);
            O.insertCells(0, D, this._activeBuffer.getNullCell(this._eraseAttrData())), O.isWrapped = !1;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        insertColumns(C) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const D = C.params[0] || 1;
          for (let B = this._activeBuffer.scrollTop; B <= this._activeBuffer.scrollBottom; ++B) {
            const O = this._activeBuffer.lines.get(this._activeBuffer.ybase + B);
            O.insertCells(this._activeBuffer.x, D, this._activeBuffer.getNullCell(this._eraseAttrData())), O.isWrapped = !1;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        deleteColumns(C) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return !0;
          const D = C.params[0] || 1;
          for (let B = this._activeBuffer.scrollTop; B <= this._activeBuffer.scrollBottom; ++B) {
            const O = this._activeBuffer.lines.get(this._activeBuffer.ybase + B);
            O.deleteCells(this._activeBuffer.x, D, this._activeBuffer.getNullCell(this._eraseAttrData())), O.isWrapped = !1;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
        }
        eraseChars(C) {
          this._restrictCursor();
          const D = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return D && (D.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (C.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
        }
        repeatPrecedingCharacter(C) {
          const D = this._parser.precedingJoinState;
          if (!D)
            return !0;
          const B = C.params[0] || 1, O = u.UnicodeService.extractWidth(D), I = this._activeBuffer.x - O, z = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(I), G = new Uint32Array(z.length * B);
          let X = 0;
          for (let w = 0; w < z.length; ) {
            const N = z.codePointAt(w) || 0;
            G[X++] = N, w += N > 65535 ? 2 : 1;
          }
          let P = X;
          for (let w = 1; w < B; ++w)
            G.copyWithin(P, 0, X), P += X;
          return this.print(G, 0, P), !0;
        }
        sendDeviceAttributesPrimary(C) {
          return C.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(a.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(a.C0.ESC + "[?6c")), !0;
        }
        sendDeviceAttributesSecondary(C) {
          return C.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(a.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(a.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(C.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(a.C0.ESC + "[>83;40003;0c")), !0;
        }
        _is(C) {
          return (this._optionsService.rawOptions.termName + "").indexOf(C) === 0;
        }
        setMode(C) {
          for (let D = 0; D < C.length; D++)
            switch (C.params[D]) {
              case 4:
                this._coreService.modes.insertMode = !0;
                break;
              case 20:
                this._optionsService.options.convertEol = !0;
            }
          return !0;
        }
        setModePrivate(C) {
          for (let D = 0; D < C.length; D++)
            switch (C.params[D]) {
              case 1:
                this._coreService.decPrivateModes.applicationCursorKeys = !0;
                break;
              case 2:
                this._charsetService.setgCharset(0, d.DEFAULT_CHARSET), this._charsetService.setgCharset(1, d.DEFAULT_CHARSET), this._charsetService.setgCharset(2, d.DEFAULT_CHARSET), this._charsetService.setgCharset(3, d.DEFAULT_CHARSET);
                break;
              case 3:
                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                break;
              case 6:
                this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                break;
              case 7:
                this._coreService.decPrivateModes.wraparound = !0;
                break;
              case 12:
                this._optionsService.options.cursorBlink = !0;
                break;
              case 45:
                this._coreService.decPrivateModes.reverseWraparound = !0;
                break;
              case 66:
                this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
                break;
              case 9:
                this._coreMouseService.activeProtocol = "X10";
                break;
              case 1e3:
                this._coreMouseService.activeProtocol = "VT200";
                break;
              case 1002:
                this._coreMouseService.activeProtocol = "DRAG";
                break;
              case 1003:
                this._coreMouseService.activeProtocol = "ANY";
                break;
              case 1004:
                this._coreService.decPrivateModes.sendFocus = !0, this._onRequestSendFocus.fire();
                break;
              case 1005:
                this._logService.debug("DECSET 1005 not supported (see #2507)");
                break;
              case 1006:
                this._coreMouseService.activeEncoding = "SGR";
                break;
              case 1015:
                this._logService.debug("DECSET 1015 not supported (see #2507)");
                break;
              case 1016:
                this._coreMouseService.activeEncoding = "SGR_PIXELS";
                break;
              case 25:
                this._coreService.isCursorHidden = !1;
                break;
              case 1048:
                this.saveCursor();
                break;
              case 1049:
                this.saveCursor();
              case 47:
              case 1047:
                this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                break;
              case 2004:
                this._coreService.decPrivateModes.bracketedPasteMode = !0;
            }
          return !0;
        }
        resetMode(C) {
          for (let D = 0; D < C.length; D++)
            switch (C.params[D]) {
              case 4:
                this._coreService.modes.insertMode = !1;
                break;
              case 20:
                this._optionsService.options.convertEol = !1;
            }
          return !0;
        }
        resetModePrivate(C) {
          for (let D = 0; D < C.length; D++)
            switch (C.params[D]) {
              case 1:
                this._coreService.decPrivateModes.applicationCursorKeys = !1;
                break;
              case 3:
                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                break;
              case 6:
                this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                break;
              case 7:
                this._coreService.decPrivateModes.wraparound = !1;
                break;
              case 12:
                this._optionsService.options.cursorBlink = !1;
                break;
              case 45:
                this._coreService.decPrivateModes.reverseWraparound = !1;
                break;
              case 66:
                this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
                break;
              case 9:
              case 1e3:
              case 1002:
              case 1003:
                this._coreMouseService.activeProtocol = "NONE";
                break;
              case 1004:
                this._coreService.decPrivateModes.sendFocus = !1;
                break;
              case 1005:
                this._logService.debug("DECRST 1005 not supported (see #2507)");
                break;
              case 1006:
              case 1016:
                this._coreMouseService.activeEncoding = "DEFAULT";
                break;
              case 1015:
                this._logService.debug("DECRST 1015 not supported (see #2507)");
                break;
              case 25:
                this._coreService.isCursorHidden = !0;
                break;
              case 1048:
                this.restoreCursor();
                break;
              case 1049:
              case 47:
              case 1047:
                this._bufferService.buffers.activateNormalBuffer(), C.params[D] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                break;
              case 2004:
                this._coreService.decPrivateModes.bracketedPasteMode = !1;
            }
          return !0;
        }
        requestMode(C, D) {
          const B = this._coreService.decPrivateModes, { activeProtocol: O, activeEncoding: I } = this._coreMouseService, z = this._coreService, { buffers: G, cols: X } = this._bufferService, { active: P, alt: w } = G, N = this._optionsService.rawOptions, F = (ie) => ie ? 1 : 2, V = C.params[0];
          return q = V, Z = D ? V === 2 ? 4 : V === 4 ? F(z.modes.insertMode) : V === 12 ? 3 : V === 20 ? F(N.convertEol) : 0 : V === 1 ? F(B.applicationCursorKeys) : V === 3 ? N.windowOptions.setWinLines ? X === 80 ? 2 : X === 132 ? 1 : 0 : 0 : V === 6 ? F(B.origin) : V === 7 ? F(B.wraparound) : V === 8 ? 3 : V === 9 ? F(O === "X10") : V === 12 ? F(N.cursorBlink) : V === 25 ? F(!z.isCursorHidden) : V === 45 ? F(B.reverseWraparound) : V === 66 ? F(B.applicationKeypad) : V === 67 ? 4 : V === 1e3 ? F(O === "VT200") : V === 1002 ? F(O === "DRAG") : V === 1003 ? F(O === "ANY") : V === 1004 ? F(B.sendFocus) : V === 1005 ? 4 : V === 1006 ? F(I === "SGR") : V === 1015 ? 4 : V === 1016 ? F(I === "SGR_PIXELS") : V === 1048 ? 1 : V === 47 || V === 1047 || V === 1049 ? F(P === w) : V === 2004 ? F(B.bracketedPasteMode) : 0, z.triggerDataEvent(`${a.C0.ESC}[${D ? "" : "?"}${q};${Z}$y`), !0;
          var q, Z;
        }
        _updateAttrColor(C, D, B, O, I) {
          return D === 2 ? (C |= 50331648, C &= -16777216, C |= h.AttributeData.fromColorRGB([B, O, I])) : D === 5 && (C &= -50331904, C |= 33554432 | 255 & B), C;
        }
        _extractColor(C, D, B) {
          const O = [0, 0, -1, 0, 0, 0];
          let I = 0, z = 0;
          do {
            if (O[z + I] = C.params[D + z], C.hasSubParams(D + z)) {
              const G = C.getSubParams(D + z);
              let X = 0;
              do
                O[1] === 5 && (I = 1), O[z + X + 1 + I] = G[X];
              while (++X < G.length && X + z + 1 + I < O.length);
              break;
            }
            if (O[1] === 5 && z + I >= 2 || O[1] === 2 && z + I >= 5)
              break;
            O[1] && (I = 1);
          } while (++z + D < C.length && z + I < O.length);
          for (let G = 2; G < O.length; ++G)
            O[G] === -1 && (O[G] = 0);
          switch (O[0]) {
            case 38:
              B.fg = this._updateAttrColor(B.fg, O[1], O[3], O[4], O[5]);
              break;
            case 48:
              B.bg = this._updateAttrColor(B.bg, O[1], O[3], O[4], O[5]);
              break;
            case 58:
              B.extended = B.extended.clone(), B.extended.underlineColor = this._updateAttrColor(B.extended.underlineColor, O[1], O[3], O[4], O[5]);
          }
          return z;
        }
        _processUnderline(C, D) {
          D.extended = D.extended.clone(), (!~C || C > 5) && (C = 1), D.extended.underlineStyle = C, D.fg |= 268435456, C === 0 && (D.fg &= -268435457), D.updateExtended();
        }
        _processSGR0(C) {
          C.fg = s.DEFAULT_ATTR_DATA.fg, C.bg = s.DEFAULT_ATTR_DATA.bg, C.extended = C.extended.clone(), C.extended.underlineStyle = 0, C.extended.underlineColor &= -67108864, C.updateExtended();
        }
        charAttributes(C) {
          if (C.length === 1 && C.params[0] === 0)
            return this._processSGR0(this._curAttrData), !0;
          const D = C.length;
          let B;
          const O = this._curAttrData;
          for (let I = 0; I < D; I++)
            B = C.params[I], B >= 30 && B <= 37 ? (O.fg &= -50331904, O.fg |= 16777216 | B - 30) : B >= 40 && B <= 47 ? (O.bg &= -50331904, O.bg |= 16777216 | B - 40) : B >= 90 && B <= 97 ? (O.fg &= -50331904, O.fg |= 16777224 | B - 90) : B >= 100 && B <= 107 ? (O.bg &= -50331904, O.bg |= 16777224 | B - 100) : B === 0 ? this._processSGR0(O) : B === 1 ? O.fg |= 134217728 : B === 3 ? O.bg |= 67108864 : B === 4 ? (O.fg |= 268435456, this._processUnderline(C.hasSubParams(I) ? C.getSubParams(I)[0] : 1, O)) : B === 5 ? O.fg |= 536870912 : B === 7 ? O.fg |= 67108864 : B === 8 ? O.fg |= 1073741824 : B === 9 ? O.fg |= 2147483648 : B === 2 ? O.bg |= 134217728 : B === 21 ? this._processUnderline(2, O) : B === 22 ? (O.fg &= -134217729, O.bg &= -134217729) : B === 23 ? O.bg &= -67108865 : B === 24 ? (O.fg &= -268435457, this._processUnderline(0, O)) : B === 25 ? O.fg &= -536870913 : B === 27 ? O.fg &= -67108865 : B === 28 ? O.fg &= -1073741825 : B === 29 ? O.fg &= 2147483647 : B === 39 ? (O.fg &= -67108864, O.fg |= 16777215 & s.DEFAULT_ATTR_DATA.fg) : B === 49 ? (O.bg &= -67108864, O.bg |= 16777215 & s.DEFAULT_ATTR_DATA.bg) : B === 38 || B === 48 || B === 58 ? I += this._extractColor(C, I, O) : B === 53 ? O.bg |= 1073741824 : B === 55 ? O.bg &= -1073741825 : B === 59 ? (O.extended = O.extended.clone(), O.extended.underlineColor = -1, O.updateExtended()) : B === 100 ? (O.fg &= -67108864, O.fg |= 16777215 & s.DEFAULT_ATTR_DATA.fg, O.bg &= -67108864, O.bg |= 16777215 & s.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", B);
          return !0;
        }
        deviceStatus(C) {
          switch (C.params[0]) {
            case 5:
              this._coreService.triggerDataEvent(`${a.C0.ESC}[0n`);
              break;
            case 6:
              const D = this._activeBuffer.y + 1, B = this._activeBuffer.x + 1;
              this._coreService.triggerDataEvent(`${a.C0.ESC}[${D};${B}R`);
          }
          return !0;
        }
        deviceStatusPrivate(C) {
          if (C.params[0] === 6) {
            const D = this._activeBuffer.y + 1, B = this._activeBuffer.x + 1;
            this._coreService.triggerDataEvent(`${a.C0.ESC}[?${D};${B}R`);
          }
          return !0;
        }
        softReset(C) {
          return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = s.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0;
        }
        setCursorStyle(C) {
          const D = C.params[0] || 1;
          switch (D) {
            case 1:
            case 2:
              this._optionsService.options.cursorStyle = "block";
              break;
            case 3:
            case 4:
              this._optionsService.options.cursorStyle = "underline";
              break;
            case 5:
            case 6:
              this._optionsService.options.cursorStyle = "bar";
          }
          const B = D % 2 == 1;
          return this._optionsService.options.cursorBlink = B, !0;
        }
        setScrollRegion(C) {
          const D = C.params[0] || 1;
          let B;
          return (C.length < 2 || (B = C.params[1]) > this._bufferService.rows || B === 0) && (B = this._bufferService.rows), B > D && (this._activeBuffer.scrollTop = D - 1, this._activeBuffer.scrollBottom = B - 1, this._setCursor(0, 0)), !0;
        }
        windowOptions(C) {
          if (!x(C.params[0], this._optionsService.rawOptions.windowOptions))
            return !0;
          const D = C.length > 1 ? C.params[1] : 0;
          switch (C.params[0]) {
            case 14:
              D !== 2 && this._onRequestWindowsOptionsReport.fire(L.GET_WIN_SIZE_PIXELS);
              break;
            case 16:
              this._onRequestWindowsOptionsReport.fire(L.GET_CELL_SIZE_PIXELS);
              break;
            case 18:
              this._bufferService && this._coreService.triggerDataEvent(`${a.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
              break;
            case 22:
              D !== 0 && D !== 2 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), D !== 0 && D !== 1 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
              break;
            case 23:
              D !== 0 && D !== 2 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), D !== 0 && D !== 1 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
          }
          return !0;
        }
        saveCursor(C) {
          return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, !0;
        }
        restoreCursor(C) {
          return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), !0;
        }
        setTitle(C) {
          return this._windowTitle = C, this._onTitleChange.fire(C), !0;
        }
        setIconName(C) {
          return this._iconName = C, !0;
        }
        setOrReportIndexedColor(C) {
          const D = [], B = C.split(";");
          for (; B.length > 1; ) {
            const O = B.shift(), I = B.shift();
            if (/^\d+$/.exec(O)) {
              const z = parseInt(O);
              if (K(z))
                if (I === "?")
                  D.push({ type: 0, index: z });
                else {
                  const G = (0, b.parseColor)(I);
                  G && D.push({ type: 1, index: z, color: G });
                }
            }
          }
          return D.length && this._onColor.fire(D), !0;
        }
        setHyperlink(C) {
          const D = C.split(";");
          return !(D.length < 2) && (D[1] ? this._createHyperlink(D[0], D[1]) : !D[0] && this._finishHyperlink());
        }
        _createHyperlink(C, D) {
          this._getCurrentLinkId() && this._finishHyperlink();
          const B = C.split(":");
          let O;
          const I = B.findIndex((z) => z.startsWith("id="));
          return I !== -1 && (O = B[I].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: O, uri: D }), this._curAttrData.updateExtended(), !0;
        }
        _finishHyperlink() {
          return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), !0;
        }
        _setOrReportSpecialColor(C, D) {
          const B = C.split(";");
          for (let O = 0; O < B.length && !(D >= this._specialColors.length); ++O, ++D)
            if (B[O] === "?")
              this._onColor.fire([{ type: 0, index: this._specialColors[D] }]);
            else {
              const I = (0, b.parseColor)(B[O]);
              I && this._onColor.fire([{ type: 1, index: this._specialColors[D], color: I }]);
            }
          return !0;
        }
        setOrReportFgColor(C) {
          return this._setOrReportSpecialColor(C, 0);
        }
        setOrReportBgColor(C) {
          return this._setOrReportSpecialColor(C, 1);
        }
        setOrReportCursorColor(C) {
          return this._setOrReportSpecialColor(C, 2);
        }
        restoreIndexedColor(C) {
          if (!C)
            return this._onColor.fire([{ type: 2 }]), !0;
          const D = [], B = C.split(";");
          for (let O = 0; O < B.length; ++O)
            if (/^\d+$/.exec(B[O])) {
              const I = parseInt(B[O]);
              K(I) && D.push({ type: 2, index: I });
            }
          return D.length && this._onColor.fire(D), !0;
        }
        restoreFgColor(C) {
          return this._onColor.fire([{ type: 2, index: 256 }]), !0;
        }
        restoreBgColor(C) {
          return this._onColor.fire([{ type: 2, index: 257 }]), !0;
        }
        restoreCursorColor(C) {
          return this._onColor.fire([{ type: 2, index: 258 }]), !0;
        }
        nextLine() {
          return this._activeBuffer.x = 0, this.index(), !0;
        }
        keypadApplicationMode() {
          return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0;
        }
        keypadNumericMode() {
          return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0;
        }
        selectDefaultCharset() {
          return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, d.DEFAULT_CHARSET), !0;
        }
        selectCharset(C) {
          return C.length !== 2 ? (this.selectDefaultCharset(), !0) : (C[0] === "/" || this._charsetService.setgCharset(A[C[0]], d.CHARSETS[C[1]] || d.DEFAULT_CHARSET), !0);
        }
        index() {
          return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), !0;
        }
        tabSet() {
          return this._activeBuffer.tabs[this._activeBuffer.x] = !0, !0;
        }
        reverseIndex() {
          if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
            const C = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
            this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, C, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
          } else
            this._activeBuffer.y--, this._restrictCursor();
          return !0;
        }
        fullReset() {
          return this._parser.reset(), this._onRequestReset.fire(), !0;
        }
        reset() {
          this._curAttrData = s.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = s.DEFAULT_ATTR_DATA.clone();
        }
        _eraseAttrData() {
          return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
        }
        setgLevel(C) {
          return this._charsetService.setgLevel(C), !0;
        }
        screenAlignmentPattern() {
          const C = new e.CellData();
          C.content = 4194373, C.fg = this._curAttrData.fg, C.bg = this._curAttrData.bg, this._setCursor(0, 0);
          for (let D = 0; D < this._bufferService.rows; ++D) {
            const B = this._activeBuffer.ybase + this._activeBuffer.y + D, O = this._activeBuffer.lines.get(B);
            O && (O.fill(C), O.isWrapped = !1);
          }
          return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), !0;
        }
        requestStatusString(C, D) {
          const B = this._bufferService.buffer, O = this._optionsService.rawOptions;
          return ((I) => (this._coreService.triggerDataEvent(`${a.C0.ESC}${I}${a.C0.ESC}\\`), !0))(C === '"q' ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : C === '"p' ? 'P1$r61;1"p' : C === "r" ? `P1$r${B.scrollTop + 1};${B.scrollBottom + 1}r` : C === "m" ? "P1$r0m" : C === " q" ? `P1$r${{ block: 2, underline: 4, bar: 6 }[O.cursorStyle] - (O.cursorBlink ? 1 : 0)} q` : "P0$r");
        }
        markRangeDirty(C, D) {
          this._dirtyRowTracker.markRangeDirty(C, D);
        }
      }
      i.InputHandler = W;
      let U = class {
        constructor(j) {
          this._bufferService = j, this.clearRange();
        }
        clearRange() {
          this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
        }
        markDirty(j) {
          j < this.start ? this.start = j : j > this.end && (this.end = j);
        }
        markRangeDirty(j, C) {
          j > C && (H = j, j = C, C = H), j < this.start && (this.start = j), C > this.end && (this.end = C);
        }
        markAllDirty() {
          this.markRangeDirty(0, this._bufferService.rows - 1);
        }
      };
      function K(j) {
        return 0 <= j && j < 256;
      }
      U = o([c(0, v.IBufferService)], U);
    }, 844: (k, i) => {
      function n(o) {
        for (const c of o)
          c.dispose();
        o.length = 0;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.getDisposeArrayDisposable = i.disposeArray = i.toDisposable = i.MutableDisposable = i.Disposable = void 0, i.Disposable = class {
        constructor() {
          this._disposables = [], this._isDisposed = !1;
        }
        dispose() {
          this._isDisposed = !0;
          for (const o of this._disposables)
            o.dispose();
          this._disposables.length = 0;
        }
        register(o) {
          return this._disposables.push(o), o;
        }
        unregister(o) {
          const c = this._disposables.indexOf(o);
          c !== -1 && this._disposables.splice(c, 1);
        }
      }, i.MutableDisposable = class {
        constructor() {
          this._isDisposed = !1;
        }
        get value() {
          return this._isDisposed ? void 0 : this._value;
        }
        set value(o) {
          var c;
          this._isDisposed || o === this._value || ((c = this._value) == null || c.dispose(), this._value = o);
        }
        clear() {
          this.value = void 0;
        }
        dispose() {
          var o;
          this._isDisposed = !0, (o = this._value) == null || o.dispose(), this._value = void 0;
        }
      }, i.toDisposable = function(o) {
        return { dispose: o };
      }, i.disposeArray = n, i.getDisposeArrayDisposable = function(o) {
        return { dispose: () => n(o) };
      };
    }, 1505: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.FourKeyMap = i.TwoKeyMap = void 0;
      class n {
        constructor() {
          this._data = {};
        }
        set(c, a, d) {
          this._data[c] || (this._data[c] = {}), this._data[c][a] = d;
        }
        get(c, a) {
          return this._data[c] ? this._data[c][a] : void 0;
        }
        clear() {
          this._data = {};
        }
      }
      i.TwoKeyMap = n, i.FourKeyMap = class {
        constructor() {
          this._data = new n();
        }
        set(o, c, a, d, f) {
          this._data.get(o, c) || this._data.set(o, c, new n()), this._data.get(o, c).set(a, d, f);
        }
        get(o, c, a, d) {
          var f;
          return (f = this._data.get(o, c)) == null ? void 0 : f.get(a, d);
        }
        clear() {
          this._data.clear();
        }
      };
    }, 6114: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.isChromeOS = i.isLinux = i.isWindows = i.isIphone = i.isIpad = i.isMac = i.getSafariVersion = i.isSafari = i.isLegacyEdge = i.isFirefox = i.isNode = void 0, i.isNode = typeof process < "u" && "title" in process;
      const n = i.isNode ? "node" : navigator.userAgent, o = i.isNode ? "node" : navigator.platform;
      i.isFirefox = n.includes("Firefox"), i.isLegacyEdge = n.includes("Edge"), i.isSafari = /^((?!chrome|android).)*safari/i.test(n), i.getSafariVersion = function() {
        if (!i.isSafari)
          return 0;
        const c = n.match(/Version\/(\d+)/);
        return c === null || c.length < 2 ? 0 : parseInt(c[1]);
      }, i.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(o), i.isIpad = o === "iPad", i.isIphone = o === "iPhone", i.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(o), i.isLinux = o.indexOf("Linux") >= 0, i.isChromeOS = /\bCrOS\b/.test(n);
    }, 6106: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.SortedList = void 0;
      let n = 0;
      i.SortedList = class {
        constructor(o) {
          this._getKey = o, this._array = [];
        }
        clear() {
          this._array.length = 0;
        }
        insert(o) {
          this._array.length !== 0 ? (n = this._search(this._getKey(o)), this._array.splice(n, 0, o)) : this._array.push(o);
        }
        delete(o) {
          if (this._array.length === 0)
            return !1;
          const c = this._getKey(o);
          if (c === void 0 || (n = this._search(c), n === -1) || this._getKey(this._array[n]) !== c)
            return !1;
          do
            if (this._array[n] === o)
              return this._array.splice(n, 1), !0;
          while (++n < this._array.length && this._getKey(this._array[n]) === c);
          return !1;
        }
        *getKeyIterator(o) {
          if (this._array.length !== 0 && (n = this._search(o), !(n < 0 || n >= this._array.length) && this._getKey(this._array[n]) === o))
            do
              yield this._array[n];
            while (++n < this._array.length && this._getKey(this._array[n]) === o);
        }
        forEachByKey(o, c) {
          if (this._array.length !== 0 && (n = this._search(o), !(n < 0 || n >= this._array.length) && this._getKey(this._array[n]) === o))
            do
              c(this._array[n]);
            while (++n < this._array.length && this._getKey(this._array[n]) === o);
        }
        values() {
          return [...this._array].values();
        }
        _search(o) {
          let c = 0, a = this._array.length - 1;
          for (; a >= c; ) {
            let d = c + a >> 1;
            const f = this._getKey(this._array[d]);
            if (f > o)
              a = d - 1;
            else {
              if (!(f < o)) {
                for (; d > 0 && this._getKey(this._array[d - 1]) === o; )
                  d--;
                return d;
              }
              c = d + 1;
            }
          }
          return c;
        }
      };
    }, 7226: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DebouncedIdleTask = i.IdleTaskQueue = i.PriorityTaskQueue = void 0;
      const o = n(6114);
      class c {
        constructor() {
          this._tasks = [], this._i = 0;
        }
        enqueue(f) {
          this._tasks.push(f), this._start();
        }
        flush() {
          for (; this._i < this._tasks.length; )
            this._tasks[this._i]() || this._i++;
          this.clear();
        }
        clear() {
          this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
        }
        _start() {
          this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
        }
        _process(f) {
          this._idleCallback = void 0;
          let g = 0, l = 0, s = f.timeRemaining(), r = 0;
          for (; this._i < this._tasks.length; ) {
            if (g = Date.now(), this._tasks[this._i]() || this._i++, g = Math.max(1, Date.now() - g), l = Math.max(g, l), r = f.timeRemaining(), 1.5 * l > r)
              return s - g < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s - g))}ms`), void this._start();
            s = r;
          }
          this.clear();
        }
      }
      class a extends c {
        _requestCallback(f) {
          return setTimeout(() => f(this._createDeadline(16)));
        }
        _cancelCallback(f) {
          clearTimeout(f);
        }
        _createDeadline(f) {
          const g = Date.now() + f;
          return { timeRemaining: () => Math.max(0, g - Date.now()) };
        }
      }
      i.PriorityTaskQueue = a, i.IdleTaskQueue = !o.isNode && "requestIdleCallback" in window ? class extends c {
        _requestCallback(d) {
          return requestIdleCallback(d);
        }
        _cancelCallback(d) {
          cancelIdleCallback(d);
        }
      } : a, i.DebouncedIdleTask = class {
        constructor() {
          this._queue = new i.IdleTaskQueue();
        }
        set(d) {
          this._queue.clear(), this._queue.enqueue(d);
        }
        flush() {
          this._queue.flush();
        }
      };
    }, 9282: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.updateWindowsModeWrappedState = void 0;
      const o = n(643);
      i.updateWindowsModeWrappedState = function(c) {
        const a = c.buffer.lines.get(c.buffer.ybase + c.buffer.y - 1), d = a == null ? void 0 : a.get(c.cols - 1), f = c.buffer.lines.get(c.buffer.ybase + c.buffer.y);
        f && d && (f.isWrapped = d[o.CHAR_DATA_CODE_INDEX] !== o.NULL_CELL_CODE && d[o.CHAR_DATA_CODE_INDEX] !== o.WHITESPACE_CELL_CODE);
      };
    }, 3734: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ExtendedAttrs = i.AttributeData = void 0;
      class n {
        constructor() {
          this.fg = 0, this.bg = 0, this.extended = new o();
        }
        static toColorRGB(a) {
          return [a >>> 16 & 255, a >>> 8 & 255, 255 & a];
        }
        static fromColorRGB(a) {
          return (255 & a[0]) << 16 | (255 & a[1]) << 8 | 255 & a[2];
        }
        clone() {
          const a = new n();
          return a.fg = this.fg, a.bg = this.bg, a.extended = this.extended.clone(), a;
        }
        isInverse() {
          return 67108864 & this.fg;
        }
        isBold() {
          return 134217728 & this.fg;
        }
        isUnderline() {
          return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : 268435456 & this.fg;
        }
        isBlink() {
          return 536870912 & this.fg;
        }
        isInvisible() {
          return 1073741824 & this.fg;
        }
        isItalic() {
          return 67108864 & this.bg;
        }
        isDim() {
          return 134217728 & this.bg;
        }
        isStrikethrough() {
          return 2147483648 & this.fg;
        }
        isProtected() {
          return 536870912 & this.bg;
        }
        isOverline() {
          return 1073741824 & this.bg;
        }
        getFgColorMode() {
          return 50331648 & this.fg;
        }
        getBgColorMode() {
          return 50331648 & this.bg;
        }
        isFgRGB() {
          return (50331648 & this.fg) == 50331648;
        }
        isBgRGB() {
          return (50331648 & this.bg) == 50331648;
        }
        isFgPalette() {
          return (50331648 & this.fg) == 16777216 || (50331648 & this.fg) == 33554432;
        }
        isBgPalette() {
          return (50331648 & this.bg) == 16777216 || (50331648 & this.bg) == 33554432;
        }
        isFgDefault() {
          return (50331648 & this.fg) == 0;
        }
        isBgDefault() {
          return (50331648 & this.bg) == 0;
        }
        isAttributeDefault() {
          return this.fg === 0 && this.bg === 0;
        }
        getFgColor() {
          switch (50331648 & this.fg) {
            case 16777216:
            case 33554432:
              return 255 & this.fg;
            case 50331648:
              return 16777215 & this.fg;
            default:
              return -1;
          }
        }
        getBgColor() {
          switch (50331648 & this.bg) {
            case 16777216:
            case 33554432:
              return 255 & this.bg;
            case 50331648:
              return 16777215 & this.bg;
            default:
              return -1;
          }
        }
        hasExtendedAttrs() {
          return 268435456 & this.bg;
        }
        updateExtended() {
          this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
        }
        getUnderlineColor() {
          if (268435456 & this.bg && ~this.extended.underlineColor)
            switch (50331648 & this.extended.underlineColor) {
              case 16777216:
              case 33554432:
                return 255 & this.extended.underlineColor;
              case 50331648:
                return 16777215 & this.extended.underlineColor;
              default:
                return this.getFgColor();
            }
          return this.getFgColor();
        }
        getUnderlineColorMode() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
        }
        isUnderlineColorRGB() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 50331648 : this.isFgRGB();
        }
        isUnderlineColorPalette() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 16777216 || (50331648 & this.extended.underlineColor) == 33554432 : this.isFgPalette();
        }
        isUnderlineColorDefault() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 0 : this.isFgDefault();
        }
        getUnderlineStyle() {
          return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
        }
        getUnderlineVariantOffset() {
          return this.extended.underlineVariantOffset;
        }
      }
      i.AttributeData = n;
      class o {
        get ext() {
          return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
        }
        set ext(a) {
          this._ext = a;
        }
        get underlineStyle() {
          return this._urlId ? 5 : (469762048 & this._ext) >> 26;
        }
        set underlineStyle(a) {
          this._ext &= -469762049, this._ext |= a << 26 & 469762048;
        }
        get underlineColor() {
          return 67108863 & this._ext;
        }
        set underlineColor(a) {
          this._ext &= -67108864, this._ext |= 67108863 & a;
        }
        get urlId() {
          return this._urlId;
        }
        set urlId(a) {
          this._urlId = a;
        }
        get underlineVariantOffset() {
          const a = (3758096384 & this._ext) >> 29;
          return a < 0 ? 4294967288 ^ a : a;
        }
        set underlineVariantOffset(a) {
          this._ext &= 536870911, this._ext |= a << 29 & 3758096384;
        }
        constructor(a = 0, d = 0) {
          this._ext = 0, this._urlId = 0, this._ext = a, this._urlId = d;
        }
        clone() {
          return new o(this._ext, this._urlId);
        }
        isEmpty() {
          return this.underlineStyle === 0 && this._urlId === 0;
        }
      }
      i.ExtendedAttrs = o;
    }, 9092: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Buffer = i.MAX_BUFFER_SIZE = void 0;
      const o = n(6349), c = n(7226), a = n(3734), d = n(8437), f = n(4634), g = n(511), l = n(643), s = n(4863), r = n(7116);
      i.MAX_BUFFER_SIZE = 4294967295, i.Buffer = class {
        constructor(t, e, h) {
          this._hasScrollback = t, this._optionsService = e, this._bufferService = h, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = d.DEFAULT_ATTR_DATA.clone(), this.savedCharset = r.DEFAULT_CHARSET, this.markers = [], this._nullCell = g.CellData.fromCharData([0, l.NULL_CELL_CHAR, l.NULL_CELL_WIDTH, l.NULL_CELL_CODE]), this._whitespaceCell = g.CellData.fromCharData([0, l.WHITESPACE_CELL_CHAR, l.WHITESPACE_CELL_WIDTH, l.WHITESPACE_CELL_CODE]), this._isClearing = !1, this._memoryCleanupQueue = new c.IdleTaskQueue(), this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new o.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
        }
        getNullCell(t) {
          return t ? (this._nullCell.fg = t.fg, this._nullCell.bg = t.bg, this._nullCell.extended = t.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new a.ExtendedAttrs()), this._nullCell;
        }
        getWhitespaceCell(t) {
          return t ? (this._whitespaceCell.fg = t.fg, this._whitespaceCell.bg = t.bg, this._whitespaceCell.extended = t.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new a.ExtendedAttrs()), this._whitespaceCell;
        }
        getBlankLine(t, e) {
          return new d.BufferLine(this._bufferService.cols, this.getNullCell(t), e);
        }
        get hasScrollback() {
          return this._hasScrollback && this.lines.maxLength > this._rows;
        }
        get isCursorInViewport() {
          const t = this.ybase + this.y - this.ydisp;
          return t >= 0 && t < this._rows;
        }
        _getCorrectBufferLength(t) {
          if (!this._hasScrollback)
            return t;
          const e = t + this._optionsService.rawOptions.scrollback;
          return e > i.MAX_BUFFER_SIZE ? i.MAX_BUFFER_SIZE : e;
        }
        fillViewportRows(t) {
          if (this.lines.length === 0) {
            t === void 0 && (t = d.DEFAULT_ATTR_DATA);
            let e = this._rows;
            for (; e--; )
              this.lines.push(this.getBlankLine(t));
          }
        }
        clear() {
          this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new o.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
        }
        resize(t, e) {
          const h = this.getNullCell(d.DEFAULT_ATTR_DATA);
          let v = 0;
          const u = this._getCorrectBufferLength(e);
          if (u > this.lines.maxLength && (this.lines.maxLength = u), this.lines.length > 0) {
            if (this._cols < t)
              for (let _ = 0; _ < this.lines.length; _++)
                v += +this.lines.get(_).resize(t, h);
            let p = 0;
            if (this._rows < e)
              for (let _ = this._rows; _ < e; _++)
                this.lines.length < e + this.ybase && (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== void 0 || this._optionsService.rawOptions.windowsPty.buildNumber !== void 0 ? this.lines.push(new d.BufferLine(t, h)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + p + 1 ? (this.ybase--, p++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new d.BufferLine(t, h)));
            else
              for (let _ = this._rows; _ > e; _--)
                this.lines.length > e + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
            if (u < this.lines.maxLength) {
              const _ = this.lines.length - u;
              _ > 0 && (this.lines.trimStart(_), this.ybase = Math.max(this.ybase - _, 0), this.ydisp = Math.max(this.ydisp - _, 0), this.savedY = Math.max(this.savedY - _, 0)), this.lines.maxLength = u;
            }
            this.x = Math.min(this.x, t - 1), this.y = Math.min(this.y, e - 1), p && (this.y += p), this.savedX = Math.min(this.savedX, t - 1), this.scrollTop = 0;
          }
          if (this.scrollBottom = e - 1, this._isReflowEnabled && (this._reflow(t, e), this._cols > t))
            for (let p = 0; p < this.lines.length; p++)
              v += +this.lines.get(p).resize(t, h);
          this._cols = t, this._rows = e, this._memoryCleanupQueue.clear(), v > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
        }
        _batchedMemoryCleanup() {
          let t = !0;
          this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, t = !1);
          let e = 0;
          for (; this._memoryCleanupPosition < this.lines.length; )
            if (e += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), e > 100)
              return !0;
          return t;
        }
        get _isReflowEnabled() {
          const t = this._optionsService.rawOptions.windowsPty;
          return t && t.buildNumber ? this._hasScrollback && t.backend === "conpty" && t.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
        }
        _reflow(t, e) {
          this._cols !== t && (t > this._cols ? this._reflowLarger(t, e) : this._reflowSmaller(t, e));
        }
        _reflowLarger(t, e) {
          const h = (0, f.reflowLargerGetLinesToRemove)(this.lines, this._cols, t, this.ybase + this.y, this.getNullCell(d.DEFAULT_ATTR_DATA));
          if (h.length > 0) {
            const v = (0, f.reflowLargerCreateNewLayout)(this.lines, h);
            (0, f.reflowLargerApplyNewLayout)(this.lines, v.layout), this._reflowLargerAdjustViewport(t, e, v.countRemoved);
          }
        }
        _reflowLargerAdjustViewport(t, e, h) {
          const v = this.getNullCell(d.DEFAULT_ATTR_DATA);
          let u = h;
          for (; u-- > 0; )
            this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < e && this.lines.push(new d.BufferLine(t, v))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
          this.savedY = Math.max(this.savedY - h, 0);
        }
        _reflowSmaller(t, e) {
          const h = this.getNullCell(d.DEFAULT_ATTR_DATA), v = [];
          let u = 0;
          for (let p = this.lines.length - 1; p >= 0; p--) {
            let _ = this.lines.get(p);
            if (!_ || !_.isWrapped && _.getTrimmedLength() <= t)
              continue;
            const b = [_];
            for (; _.isWrapped && p > 0; )
              _ = this.lines.get(--p), b.unshift(_);
            const A = this.ybase + this.y;
            if (A >= p && A < p + b.length)
              continue;
            const T = b[b.length - 1].getTrimmedLength(), x = (0, f.reflowSmallerGetNewLineLengths)(b, this._cols, t), L = x.length - b.length;
            let H;
            H = this.ybase === 0 && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + L) : Math.max(0, this.lines.length - this.lines.maxLength + L);
            const W = [];
            for (let B = 0; B < L; B++) {
              const O = this.getBlankLine(d.DEFAULT_ATTR_DATA, !0);
              W.push(O);
            }
            W.length > 0 && (v.push({ start: p + b.length + u, newLines: W }), u += W.length), b.push(...W);
            let U = x.length - 1, K = x[U];
            K === 0 && (U--, K = x[U]);
            let j = b.length - L - 1, C = T;
            for (; j >= 0; ) {
              const B = Math.min(C, K);
              if (b[U] === void 0)
                break;
              if (b[U].copyCellsFrom(b[j], C - B, K - B, B, !0), K -= B, K === 0 && (U--, K = x[U]), C -= B, C === 0) {
                j--;
                const O = Math.max(j, 0);
                C = (0, f.getWrappedLineTrimmedLength)(b, O, this._cols);
              }
            }
            for (let B = 0; B < b.length; B++)
              x[B] < t && b[B].setCell(x[B], h);
            let D = L - H;
            for (; D-- > 0; )
              this.ybase === 0 ? this.y < e - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + u) - e && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
            this.savedY = Math.min(this.savedY + L, this.ybase + e - 1);
          }
          if (v.length > 0) {
            const p = [], _ = [];
            for (let U = 0; U < this.lines.length; U++)
              _.push(this.lines.get(U));
            const b = this.lines.length;
            let A = b - 1, T = 0, x = v[T];
            this.lines.length = Math.min(this.lines.maxLength, this.lines.length + u);
            let L = 0;
            for (let U = Math.min(this.lines.maxLength - 1, b + u - 1); U >= 0; U--)
              if (x && x.start > A + L) {
                for (let K = x.newLines.length - 1; K >= 0; K--)
                  this.lines.set(U--, x.newLines[K]);
                U++, p.push({ index: A + 1, amount: x.newLines.length }), L += x.newLines.length, x = v[++T];
              } else
                this.lines.set(U, _[A--]);
            let H = 0;
            for (let U = p.length - 1; U >= 0; U--)
              p[U].index += H, this.lines.onInsertEmitter.fire(p[U]), H += p[U].amount;
            const W = Math.max(0, b + u - this.lines.maxLength);
            W > 0 && this.lines.onTrimEmitter.fire(W);
          }
        }
        translateBufferLineToString(t, e, h = 0, v) {
          const u = this.lines.get(t);
          return u ? u.translateToString(e, h, v) : "";
        }
        getWrappedRangeForLine(t) {
          let e = t, h = t;
          for (; e > 0 && this.lines.get(e).isWrapped; )
            e--;
          for (; h + 1 < this.lines.length && this.lines.get(h + 1).isWrapped; )
            h++;
          return { first: e, last: h };
        }
        setupTabStops(t) {
          for (t != null ? this.tabs[t] || (t = this.prevStop(t)) : (this.tabs = {}, t = 0); t < this._cols; t += this._optionsService.rawOptions.tabStopWidth)
            this.tabs[t] = !0;
        }
        prevStop(t) {
          for (t == null && (t = this.x); !this.tabs[--t] && t > 0; )
            ;
          return t >= this._cols ? this._cols - 1 : t < 0 ? 0 : t;
        }
        nextStop(t) {
          for (t == null && (t = this.x); !this.tabs[++t] && t < this._cols; )
            ;
          return t >= this._cols ? this._cols - 1 : t < 0 ? 0 : t;
        }
        clearMarkers(t) {
          this._isClearing = !0;
          for (let e = 0; e < this.markers.length; e++)
            this.markers[e].line === t && (this.markers[e].dispose(), this.markers.splice(e--, 1));
          this._isClearing = !1;
        }
        clearAllMarkers() {
          this._isClearing = !0;
          for (let t = 0; t < this.markers.length; t++)
            this.markers[t].dispose(), this.markers.splice(t--, 1);
          this._isClearing = !1;
        }
        addMarker(t) {
          const e = new s.Marker(t);
          return this.markers.push(e), e.register(this.lines.onTrim((h) => {
            e.line -= h, e.line < 0 && e.dispose();
          })), e.register(this.lines.onInsert((h) => {
            e.line >= h.index && (e.line += h.amount);
          })), e.register(this.lines.onDelete((h) => {
            e.line >= h.index && e.line < h.index + h.amount && e.dispose(), e.line > h.index && (e.line -= h.amount);
          })), e.register(e.onDispose(() => this._removeMarker(e))), e;
        }
        _removeMarker(t) {
          this._isClearing || this.markers.splice(this.markers.indexOf(t), 1);
        }
      };
    }, 8437: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferLine = i.DEFAULT_ATTR_DATA = void 0;
      const o = n(3734), c = n(511), a = n(643), d = n(482);
      i.DEFAULT_ATTR_DATA = Object.freeze(new o.AttributeData());
      let f = 0;
      class g {
        constructor(s, r, t = !1) {
          this.isWrapped = t, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * s);
          const e = r || c.CellData.fromCharData([0, a.NULL_CELL_CHAR, a.NULL_CELL_WIDTH, a.NULL_CELL_CODE]);
          for (let h = 0; h < s; ++h)
            this.setCell(h, e);
          this.length = s;
        }
        get(s) {
          const r = this._data[3 * s + 0], t = 2097151 & r;
          return [this._data[3 * s + 1], 2097152 & r ? this._combined[s] : t ? (0, d.stringFromCodePoint)(t) : "", r >> 22, 2097152 & r ? this._combined[s].charCodeAt(this._combined[s].length - 1) : t];
        }
        set(s, r) {
          this._data[3 * s + 1] = r[a.CHAR_DATA_ATTR_INDEX], r[a.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[s] = r[1], this._data[3 * s + 0] = 2097152 | s | r[a.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * s + 0] = r[a.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | r[a.CHAR_DATA_WIDTH_INDEX] << 22;
        }
        getWidth(s) {
          return this._data[3 * s + 0] >> 22;
        }
        hasWidth(s) {
          return 12582912 & this._data[3 * s + 0];
        }
        getFg(s) {
          return this._data[3 * s + 1];
        }
        getBg(s) {
          return this._data[3 * s + 2];
        }
        hasContent(s) {
          return 4194303 & this._data[3 * s + 0];
        }
        getCodePoint(s) {
          const r = this._data[3 * s + 0];
          return 2097152 & r ? this._combined[s].charCodeAt(this._combined[s].length - 1) : 2097151 & r;
        }
        isCombined(s) {
          return 2097152 & this._data[3 * s + 0];
        }
        getString(s) {
          const r = this._data[3 * s + 0];
          return 2097152 & r ? this._combined[s] : 2097151 & r ? (0, d.stringFromCodePoint)(2097151 & r) : "";
        }
        isProtected(s) {
          return 536870912 & this._data[3 * s + 2];
        }
        loadCell(s, r) {
          return f = 3 * s, r.content = this._data[f + 0], r.fg = this._data[f + 1], r.bg = this._data[f + 2], 2097152 & r.content && (r.combinedData = this._combined[s]), 268435456 & r.bg && (r.extended = this._extendedAttrs[s]), r;
        }
        setCell(s, r) {
          2097152 & r.content && (this._combined[s] = r.combinedData), 268435456 & r.bg && (this._extendedAttrs[s] = r.extended), this._data[3 * s + 0] = r.content, this._data[3 * s + 1] = r.fg, this._data[3 * s + 2] = r.bg;
        }
        setCellFromCodepoint(s, r, t, e) {
          268435456 & e.bg && (this._extendedAttrs[s] = e.extended), this._data[3 * s + 0] = r | t << 22, this._data[3 * s + 1] = e.fg, this._data[3 * s + 2] = e.bg;
        }
        addCodepointToCell(s, r, t) {
          let e = this._data[3 * s + 0];
          2097152 & e ? this._combined[s] += (0, d.stringFromCodePoint)(r) : 2097151 & e ? (this._combined[s] = (0, d.stringFromCodePoint)(2097151 & e) + (0, d.stringFromCodePoint)(r), e &= -2097152, e |= 2097152) : e = r | 4194304, t && (e &= -12582913, e |= t << 22), this._data[3 * s + 0] = e;
        }
        insertCells(s, r, t) {
          if ((s %= this.length) && this.getWidth(s - 1) === 2 && this.setCellFromCodepoint(s - 1, 0, 1, t), r < this.length - s) {
            const e = new c.CellData();
            for (let h = this.length - s - r - 1; h >= 0; --h)
              this.setCell(s + r + h, this.loadCell(s + h, e));
            for (let h = 0; h < r; ++h)
              this.setCell(s + h, t);
          } else
            for (let e = s; e < this.length; ++e)
              this.setCell(e, t);
          this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, t);
        }
        deleteCells(s, r, t) {
          if (s %= this.length, r < this.length - s) {
            const e = new c.CellData();
            for (let h = 0; h < this.length - s - r; ++h)
              this.setCell(s + h, this.loadCell(s + r + h, e));
            for (let h = this.length - r; h < this.length; ++h)
              this.setCell(h, t);
          } else
            for (let e = s; e < this.length; ++e)
              this.setCell(e, t);
          s && this.getWidth(s - 1) === 2 && this.setCellFromCodepoint(s - 1, 0, 1, t), this.getWidth(s) !== 0 || this.hasContent(s) || this.setCellFromCodepoint(s, 0, 1, t);
        }
        replaceCells(s, r, t, e = !1) {
          if (e)
            for (s && this.getWidth(s - 1) === 2 && !this.isProtected(s - 1) && this.setCellFromCodepoint(s - 1, 0, 1, t), r < this.length && this.getWidth(r - 1) === 2 && !this.isProtected(r) && this.setCellFromCodepoint(r, 0, 1, t); s < r && s < this.length; )
              this.isProtected(s) || this.setCell(s, t), s++;
          else
            for (s && this.getWidth(s - 1) === 2 && this.setCellFromCodepoint(s - 1, 0, 1, t), r < this.length && this.getWidth(r - 1) === 2 && this.setCellFromCodepoint(r, 0, 1, t); s < r && s < this.length; )
              this.setCell(s++, t);
        }
        resize(s, r) {
          if (s === this.length)
            return 4 * this._data.length * 2 < this._data.buffer.byteLength;
          const t = 3 * s;
          if (s > this.length) {
            if (this._data.buffer.byteLength >= 4 * t)
              this._data = new Uint32Array(this._data.buffer, 0, t);
            else {
              const e = new Uint32Array(t);
              e.set(this._data), this._data = e;
            }
            for (let e = this.length; e < s; ++e)
              this.setCell(e, r);
          } else {
            this._data = this._data.subarray(0, t);
            const e = Object.keys(this._combined);
            for (let v = 0; v < e.length; v++) {
              const u = parseInt(e[v], 10);
              u >= s && delete this._combined[u];
            }
            const h = Object.keys(this._extendedAttrs);
            for (let v = 0; v < h.length; v++) {
              const u = parseInt(h[v], 10);
              u >= s && delete this._extendedAttrs[u];
            }
          }
          return this.length = s, 4 * t * 2 < this._data.buffer.byteLength;
        }
        cleanupMemory() {
          if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
            const s = new Uint32Array(this._data.length);
            return s.set(this._data), this._data = s, 1;
          }
          return 0;
        }
        fill(s, r = !1) {
          if (r)
            for (let t = 0; t < this.length; ++t)
              this.isProtected(t) || this.setCell(t, s);
          else {
            this._combined = {}, this._extendedAttrs = {};
            for (let t = 0; t < this.length; ++t)
              this.setCell(t, s);
          }
        }
        copyFrom(s) {
          this.length !== s.length ? this._data = new Uint32Array(s._data) : this._data.set(s._data), this.length = s.length, this._combined = {};
          for (const r in s._combined)
            this._combined[r] = s._combined[r];
          this._extendedAttrs = {};
          for (const r in s._extendedAttrs)
            this._extendedAttrs[r] = s._extendedAttrs[r];
          this.isWrapped = s.isWrapped;
        }
        clone() {
          const s = new g(0);
          s._data = new Uint32Array(this._data), s.length = this.length;
          for (const r in this._combined)
            s._combined[r] = this._combined[r];
          for (const r in this._extendedAttrs)
            s._extendedAttrs[r] = this._extendedAttrs[r];
          return s.isWrapped = this.isWrapped, s;
        }
        getTrimmedLength() {
          for (let s = this.length - 1; s >= 0; --s)
            if (4194303 & this._data[3 * s + 0])
              return s + (this._data[3 * s + 0] >> 22);
          return 0;
        }
        getNoBgTrimmedLength() {
          for (let s = this.length - 1; s >= 0; --s)
            if (4194303 & this._data[3 * s + 0] || 50331648 & this._data[3 * s + 2])
              return s + (this._data[3 * s + 0] >> 22);
          return 0;
        }
        copyCellsFrom(s, r, t, e, h) {
          const v = s._data;
          if (h)
            for (let p = e - 1; p >= 0; p--) {
              for (let _ = 0; _ < 3; _++)
                this._data[3 * (t + p) + _] = v[3 * (r + p) + _];
              268435456 & v[3 * (r + p) + 2] && (this._extendedAttrs[t + p] = s._extendedAttrs[r + p]);
            }
          else
            for (let p = 0; p < e; p++) {
              for (let _ = 0; _ < 3; _++)
                this._data[3 * (t + p) + _] = v[3 * (r + p) + _];
              268435456 & v[3 * (r + p) + 2] && (this._extendedAttrs[t + p] = s._extendedAttrs[r + p]);
            }
          const u = Object.keys(s._combined);
          for (let p = 0; p < u.length; p++) {
            const _ = parseInt(u[p], 10);
            _ >= r && (this._combined[_ - r + t] = s._combined[_]);
          }
        }
        translateToString(s, r, t, e) {
          r = r ?? 0, t = t ?? this.length, s && (t = Math.min(t, this.getTrimmedLength())), e && (e.length = 0);
          let h = "";
          for (; r < t; ) {
            const v = this._data[3 * r + 0], u = 2097151 & v, p = 2097152 & v ? this._combined[r] : u ? (0, d.stringFromCodePoint)(u) : a.WHITESPACE_CELL_CHAR;
            if (h += p, e)
              for (let _ = 0; _ < p.length; ++_)
                e.push(r);
            r += v >> 22 || 1;
          }
          return e && e.push(r), h;
        }
      }
      i.BufferLine = g;
    }, 4841: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.getRangeLength = void 0, i.getRangeLength = function(n, o) {
        if (n.start.y > n.end.y)
          throw new Error(`Buffer range end (${n.end.x}, ${n.end.y}) cannot be before start (${n.start.x}, ${n.start.y})`);
        return o * (n.end.y - n.start.y) + (n.end.x - n.start.x + 1);
      };
    }, 4634: (k, i) => {
      function n(o, c, a) {
        if (c === o.length - 1)
          return o[c].getTrimmedLength();
        const d = !o[c].hasContent(a - 1) && o[c].getWidth(a - 1) === 1, f = o[c + 1].getWidth(0) === 2;
        return d && f ? a - 1 : a;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.getWrappedLineTrimmedLength = i.reflowSmallerGetNewLineLengths = i.reflowLargerApplyNewLayout = i.reflowLargerCreateNewLayout = i.reflowLargerGetLinesToRemove = void 0, i.reflowLargerGetLinesToRemove = function(o, c, a, d, f) {
        const g = [];
        for (let l = 0; l < o.length - 1; l++) {
          let s = l, r = o.get(++s);
          if (!r.isWrapped)
            continue;
          const t = [o.get(l)];
          for (; s < o.length && r.isWrapped; )
            t.push(r), r = o.get(++s);
          if (d >= l && d < s) {
            l += t.length - 1;
            continue;
          }
          let e = 0, h = n(t, e, c), v = 1, u = 0;
          for (; v < t.length; ) {
            const _ = n(t, v, c), b = _ - u, A = a - h, T = Math.min(b, A);
            t[e].copyCellsFrom(t[v], u, h, T, !1), h += T, h === a && (e++, h = 0), u += T, u === _ && (v++, u = 0), h === 0 && e !== 0 && t[e - 1].getWidth(a - 1) === 2 && (t[e].copyCellsFrom(t[e - 1], a - 1, h++, 1, !1), t[e - 1].setCell(a - 1, f));
          }
          t[e].replaceCells(h, a, f);
          let p = 0;
          for (let _ = t.length - 1; _ > 0 && (_ > e || t[_].getTrimmedLength() === 0); _--)
            p++;
          p > 0 && (g.push(l + t.length - p), g.push(p)), l += t.length - 1;
        }
        return g;
      }, i.reflowLargerCreateNewLayout = function(o, c) {
        const a = [];
        let d = 0, f = c[d], g = 0;
        for (let l = 0; l < o.length; l++)
          if (f === l) {
            const s = c[++d];
            o.onDeleteEmitter.fire({ index: l - g, amount: s }), l += s - 1, g += s, f = c[++d];
          } else
            a.push(l);
        return { layout: a, countRemoved: g };
      }, i.reflowLargerApplyNewLayout = function(o, c) {
        const a = [];
        for (let d = 0; d < c.length; d++)
          a.push(o.get(c[d]));
        for (let d = 0; d < a.length; d++)
          o.set(d, a[d]);
        o.length = c.length;
      }, i.reflowSmallerGetNewLineLengths = function(o, c, a) {
        const d = [], f = o.map((r, t) => n(o, t, c)).reduce((r, t) => r + t);
        let g = 0, l = 0, s = 0;
        for (; s < f; ) {
          if (f - s < a) {
            d.push(f - s);
            break;
          }
          g += a;
          const r = n(o, l, c);
          g > r && (g -= r, l++);
          const t = o[l].getWidth(g - 1) === 2;
          t && g--;
          const e = t ? a - 1 : a;
          d.push(e), s += e;
        }
        return d;
      }, i.getWrappedLineTrimmedLength = n;
    }, 5295: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferSet = void 0;
      const o = n(8460), c = n(844), a = n(9092);
      class d extends c.Disposable {
        constructor(g, l) {
          super(), this._optionsService = g, this._bufferService = l, this._onBufferActivate = this.register(new o.EventEmitter()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
        }
        reset() {
          this._normal = new a.Buffer(!0, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new a.Buffer(!1, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
        }
        get alt() {
          return this._alt;
        }
        get active() {
          return this._activeBuffer;
        }
        get normal() {
          return this._normal;
        }
        activateNormalBuffer() {
          this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
        }
        activateAltBuffer(g) {
          this._activeBuffer !== this._alt && (this._alt.fillViewportRows(g), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
        }
        resize(g, l) {
          this._normal.resize(g, l), this._alt.resize(g, l), this.setupTabStops(g);
        }
        setupTabStops(g) {
          this._normal.setupTabStops(g), this._alt.setupTabStops(g);
        }
      }
      i.BufferSet = d;
    }, 511: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CellData = void 0;
      const o = n(482), c = n(643), a = n(3734);
      class d extends a.AttributeData {
        constructor() {
          super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new a.ExtendedAttrs(), this.combinedData = "";
        }
        static fromCharData(g) {
          const l = new d();
          return l.setFromCharData(g), l;
        }
        isCombined() {
          return 2097152 & this.content;
        }
        getWidth() {
          return this.content >> 22;
        }
        getChars() {
          return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, o.stringFromCodePoint)(2097151 & this.content) : "";
        }
        getCode() {
          return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
        }
        setFromCharData(g) {
          this.fg = g[c.CHAR_DATA_ATTR_INDEX], this.bg = 0;
          let l = !1;
          if (g[c.CHAR_DATA_CHAR_INDEX].length > 2)
            l = !0;
          else if (g[c.CHAR_DATA_CHAR_INDEX].length === 2) {
            const s = g[c.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
            if (55296 <= s && s <= 56319) {
              const r = g[c.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
              56320 <= r && r <= 57343 ? this.content = 1024 * (s - 55296) + r - 56320 + 65536 | g[c.CHAR_DATA_WIDTH_INDEX] << 22 : l = !0;
            } else
              l = !0;
          } else
            this.content = g[c.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | g[c.CHAR_DATA_WIDTH_INDEX] << 22;
          l && (this.combinedData = g[c.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | g[c.CHAR_DATA_WIDTH_INDEX] << 22);
        }
        getAsCharData() {
          return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        }
      }
      i.CellData = d;
    }, 643: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.WHITESPACE_CELL_CODE = i.WHITESPACE_CELL_WIDTH = i.WHITESPACE_CELL_CHAR = i.NULL_CELL_CODE = i.NULL_CELL_WIDTH = i.NULL_CELL_CHAR = i.CHAR_DATA_CODE_INDEX = i.CHAR_DATA_WIDTH_INDEX = i.CHAR_DATA_CHAR_INDEX = i.CHAR_DATA_ATTR_INDEX = i.DEFAULT_EXT = i.DEFAULT_ATTR = i.DEFAULT_COLOR = void 0, i.DEFAULT_COLOR = 0, i.DEFAULT_ATTR = 256 | i.DEFAULT_COLOR << 9, i.DEFAULT_EXT = 0, i.CHAR_DATA_ATTR_INDEX = 0, i.CHAR_DATA_CHAR_INDEX = 1, i.CHAR_DATA_WIDTH_INDEX = 2, i.CHAR_DATA_CODE_INDEX = 3, i.NULL_CELL_CHAR = "", i.NULL_CELL_WIDTH = 1, i.NULL_CELL_CODE = 0, i.WHITESPACE_CELL_CHAR = " ", i.WHITESPACE_CELL_WIDTH = 1, i.WHITESPACE_CELL_CODE = 32;
    }, 4863: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Marker = void 0;
      const o = n(8460), c = n(844);
      class a {
        get id() {
          return this._id;
        }
        constructor(f) {
          this.line = f, this.isDisposed = !1, this._disposables = [], this._id = a._nextId++, this._onDispose = this.register(new o.EventEmitter()), this.onDispose = this._onDispose.event;
        }
        dispose() {
          this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), (0, c.disposeArray)(this._disposables), this._disposables.length = 0);
        }
        register(f) {
          return this._disposables.push(f), f;
        }
      }
      i.Marker = a, a._nextId = 1;
    }, 7116: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DEFAULT_CHARSET = i.CHARSETS = void 0, i.CHARSETS = {}, i.DEFAULT_CHARSET = i.CHARSETS.B, i.CHARSETS[0] = { "`": "◆", a: "▒", b: "␉", c: "␌", d: "␍", e: "␊", f: "°", g: "±", h: "␤", i: "␋", j: "┘", k: "┐", l: "┌", m: "└", n: "┼", o: "⎺", p: "⎻", q: "─", r: "⎼", s: "⎽", t: "├", u: "┤", v: "┴", w: "┬", x: "│", y: "≤", z: "≥", "{": "π", "|": "≠", "}": "£", "~": "·" }, i.CHARSETS.A = { "#": "£" }, i.CHARSETS.B = void 0, i.CHARSETS[4] = { "#": "£", "@": "¾", "[": "ij", "\\": "½", "]": "|", "{": "¨", "|": "f", "}": "¼", "~": "´" }, i.CHARSETS.C = i.CHARSETS[5] = { "[": "Ä", "\\": "Ö", "]": "Å", "^": "Ü", "`": "é", "{": "ä", "|": "ö", "}": "å", "~": "ü" }, i.CHARSETS.R = { "#": "£", "@": "à", "[": "°", "\\": "ç", "]": "§", "{": "é", "|": "ù", "}": "è", "~": "¨" }, i.CHARSETS.Q = { "@": "à", "[": "â", "\\": "ç", "]": "ê", "^": "î", "`": "ô", "{": "é", "|": "ù", "}": "è", "~": "û" }, i.CHARSETS.K = { "@": "§", "[": "Ä", "\\": "Ö", "]": "Ü", "{": "ä", "|": "ö", "}": "ü", "~": "ß" }, i.CHARSETS.Y = { "#": "£", "@": "§", "[": "°", "\\": "ç", "]": "é", "`": "ù", "{": "à", "|": "ò", "}": "è", "~": "ì" }, i.CHARSETS.E = i.CHARSETS[6] = { "@": "Ä", "[": "Æ", "\\": "Ø", "]": "Å", "^": "Ü", "`": "ä", "{": "æ", "|": "ø", "}": "å", "~": "ü" }, i.CHARSETS.Z = { "#": "£", "@": "§", "[": "¡", "\\": "Ñ", "]": "¿", "{": "°", "|": "ñ", "}": "ç" }, i.CHARSETS.H = i.CHARSETS[7] = { "@": "É", "[": "Ä", "\\": "Ö", "]": "Å", "^": "Ü", "`": "é", "{": "ä", "|": "ö", "}": "å", "~": "ü" }, i.CHARSETS["="] = { "#": "ù", "@": "à", "[": "é", "\\": "ç", "]": "ê", "^": "î", _: "è", "`": "ô", "{": "ä", "|": "ö", "}": "ü", "~": "û" };
    }, 2584: (k, i) => {
      var n, o, c;
      Object.defineProperty(i, "__esModule", { value: !0 }), i.C1_ESCAPED = i.C1 = i.C0 = void 0, function(a) {
        a.NUL = "\0", a.SOH = "", a.STX = "", a.ETX = "", a.EOT = "", a.ENQ = "", a.ACK = "", a.BEL = "\x07", a.BS = "\b", a.HT = "	", a.LF = `
`, a.VT = "\v", a.FF = "\f", a.CR = "\r", a.SO = "", a.SI = "", a.DLE = "", a.DC1 = "", a.DC2 = "", a.DC3 = "", a.DC4 = "", a.NAK = "", a.SYN = "", a.ETB = "", a.CAN = "", a.EM = "", a.SUB = "", a.ESC = "\x1B", a.FS = "", a.GS = "", a.RS = "", a.US = "", a.SP = " ", a.DEL = "";
      }(n || (i.C0 = n = {})), function(a) {
        a.PAD = "", a.HOP = "", a.BPH = "", a.NBH = "", a.IND = "", a.NEL = "", a.SSA = "", a.ESA = "", a.HTS = "", a.HTJ = "", a.VTS = "", a.PLD = "", a.PLU = "", a.RI = "", a.SS2 = "", a.SS3 = "", a.DCS = "", a.PU1 = "", a.PU2 = "", a.STS = "", a.CCH = "", a.MW = "", a.SPA = "", a.EPA = "", a.SOS = "", a.SGCI = "", a.SCI = "", a.CSI = "", a.ST = "", a.OSC = "", a.PM = "", a.APC = "";
      }(o || (i.C1 = o = {})), function(a) {
        a.ST = `${n.ESC}\\`;
      }(c || (i.C1_ESCAPED = c = {}));
    }, 7399: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.evaluateKeyboardEvent = void 0;
      const o = n(2584), c = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
      i.evaluateKeyboardEvent = function(a, d, f, g) {
        const l = { type: 0, cancel: !1, key: void 0 }, s = (a.shiftKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.metaKey ? 8 : 0);
        switch (a.keyCode) {
          case 0:
            a.key === "UIKeyInputUpArrow" ? l.key = d ? o.C0.ESC + "OA" : o.C0.ESC + "[A" : a.key === "UIKeyInputLeftArrow" ? l.key = d ? o.C0.ESC + "OD" : o.C0.ESC + "[D" : a.key === "UIKeyInputRightArrow" ? l.key = d ? o.C0.ESC + "OC" : o.C0.ESC + "[C" : a.key === "UIKeyInputDownArrow" && (l.key = d ? o.C0.ESC + "OB" : o.C0.ESC + "[B");
            break;
          case 8:
            l.key = a.ctrlKey ? "\b" : o.C0.DEL, a.altKey && (l.key = o.C0.ESC + l.key);
            break;
          case 9:
            if (a.shiftKey) {
              l.key = o.C0.ESC + "[Z";
              break;
            }
            l.key = o.C0.HT, l.cancel = !0;
            break;
          case 13:
            l.key = a.altKey ? o.C0.ESC + o.C0.CR : o.C0.CR, l.cancel = !0;
            break;
          case 27:
            l.key = o.C0.ESC, a.altKey && (l.key = o.C0.ESC + o.C0.ESC), l.cancel = !0;
            break;
          case 37:
            if (a.metaKey)
              break;
            s ? (l.key = o.C0.ESC + "[1;" + (s + 1) + "D", l.key === o.C0.ESC + "[1;3D" && (l.key = o.C0.ESC + (f ? "b" : "[1;5D"))) : l.key = d ? o.C0.ESC + "OD" : o.C0.ESC + "[D";
            break;
          case 39:
            if (a.metaKey)
              break;
            s ? (l.key = o.C0.ESC + "[1;" + (s + 1) + "C", l.key === o.C0.ESC + "[1;3C" && (l.key = o.C0.ESC + (f ? "f" : "[1;5C"))) : l.key = d ? o.C0.ESC + "OC" : o.C0.ESC + "[C";
            break;
          case 38:
            if (a.metaKey)
              break;
            s ? (l.key = o.C0.ESC + "[1;" + (s + 1) + "A", f || l.key !== o.C0.ESC + "[1;3A" || (l.key = o.C0.ESC + "[1;5A")) : l.key = d ? o.C0.ESC + "OA" : o.C0.ESC + "[A";
            break;
          case 40:
            if (a.metaKey)
              break;
            s ? (l.key = o.C0.ESC + "[1;" + (s + 1) + "B", f || l.key !== o.C0.ESC + "[1;3B" || (l.key = o.C0.ESC + "[1;5B")) : l.key = d ? o.C0.ESC + "OB" : o.C0.ESC + "[B";
            break;
          case 45:
            a.shiftKey || a.ctrlKey || (l.key = o.C0.ESC + "[2~");
            break;
          case 46:
            l.key = s ? o.C0.ESC + "[3;" + (s + 1) + "~" : o.C0.ESC + "[3~";
            break;
          case 36:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "H" : d ? o.C0.ESC + "OH" : o.C0.ESC + "[H";
            break;
          case 35:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "F" : d ? o.C0.ESC + "OF" : o.C0.ESC + "[F";
            break;
          case 33:
            a.shiftKey ? l.type = 2 : a.ctrlKey ? l.key = o.C0.ESC + "[5;" + (s + 1) + "~" : l.key = o.C0.ESC + "[5~";
            break;
          case 34:
            a.shiftKey ? l.type = 3 : a.ctrlKey ? l.key = o.C0.ESC + "[6;" + (s + 1) + "~" : l.key = o.C0.ESC + "[6~";
            break;
          case 112:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "P" : o.C0.ESC + "OP";
            break;
          case 113:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "Q" : o.C0.ESC + "OQ";
            break;
          case 114:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "R" : o.C0.ESC + "OR";
            break;
          case 115:
            l.key = s ? o.C0.ESC + "[1;" + (s + 1) + "S" : o.C0.ESC + "OS";
            break;
          case 116:
            l.key = s ? o.C0.ESC + "[15;" + (s + 1) + "~" : o.C0.ESC + "[15~";
            break;
          case 117:
            l.key = s ? o.C0.ESC + "[17;" + (s + 1) + "~" : o.C0.ESC + "[17~";
            break;
          case 118:
            l.key = s ? o.C0.ESC + "[18;" + (s + 1) + "~" : o.C0.ESC + "[18~";
            break;
          case 119:
            l.key = s ? o.C0.ESC + "[19;" + (s + 1) + "~" : o.C0.ESC + "[19~";
            break;
          case 120:
            l.key = s ? o.C0.ESC + "[20;" + (s + 1) + "~" : o.C0.ESC + "[20~";
            break;
          case 121:
            l.key = s ? o.C0.ESC + "[21;" + (s + 1) + "~" : o.C0.ESC + "[21~";
            break;
          case 122:
            l.key = s ? o.C0.ESC + "[23;" + (s + 1) + "~" : o.C0.ESC + "[23~";
            break;
          case 123:
            l.key = s ? o.C0.ESC + "[24;" + (s + 1) + "~" : o.C0.ESC + "[24~";
            break;
          default:
            if (!a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
              if (f && !g || !a.altKey || a.metaKey)
                !f || a.altKey || a.ctrlKey || a.shiftKey || !a.metaKey ? a.key && !a.ctrlKey && !a.altKey && !a.metaKey && a.keyCode >= 48 && a.key.length === 1 ? l.key = a.key : a.key && a.ctrlKey && (a.key === "_" && (l.key = o.C0.US), a.key === "@" && (l.key = o.C0.NUL)) : a.keyCode === 65 && (l.type = 1);
              else {
                const r = c[a.keyCode], t = r == null ? void 0 : r[a.shiftKey ? 1 : 0];
                if (t)
                  l.key = o.C0.ESC + t;
                else if (a.keyCode >= 65 && a.keyCode <= 90) {
                  const e = a.ctrlKey ? a.keyCode - 64 : a.keyCode + 32;
                  let h = String.fromCharCode(e);
                  a.shiftKey && (h = h.toUpperCase()), l.key = o.C0.ESC + h;
                } else if (a.keyCode === 32)
                  l.key = o.C0.ESC + (a.ctrlKey ? o.C0.NUL : " ");
                else if (a.key === "Dead" && a.code.startsWith("Key")) {
                  let e = a.code.slice(3, 4);
                  a.shiftKey || (e = e.toLowerCase()), l.key = o.C0.ESC + e, l.cancel = !0;
                }
              }
            else
              a.keyCode >= 65 && a.keyCode <= 90 ? l.key = String.fromCharCode(a.keyCode - 64) : a.keyCode === 32 ? l.key = o.C0.NUL : a.keyCode >= 51 && a.keyCode <= 55 ? l.key = String.fromCharCode(a.keyCode - 51 + 27) : a.keyCode === 56 ? l.key = o.C0.DEL : a.keyCode === 219 ? l.key = o.C0.ESC : a.keyCode === 220 ? l.key = o.C0.FS : a.keyCode === 221 && (l.key = o.C0.GS);
        }
        return l;
      };
    }, 482: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Utf8ToUtf32 = i.StringToUtf32 = i.utf32ToString = i.stringFromCodePoint = void 0, i.stringFromCodePoint = function(n) {
        return n > 65535 ? (n -= 65536, String.fromCharCode(55296 + (n >> 10)) + String.fromCharCode(n % 1024 + 56320)) : String.fromCharCode(n);
      }, i.utf32ToString = function(n, o = 0, c = n.length) {
        let a = "";
        for (let d = o; d < c; ++d) {
          let f = n[d];
          f > 65535 ? (f -= 65536, a += String.fromCharCode(55296 + (f >> 10)) + String.fromCharCode(f % 1024 + 56320)) : a += String.fromCharCode(f);
        }
        return a;
      }, i.StringToUtf32 = class {
        constructor() {
          this._interim = 0;
        }
        clear() {
          this._interim = 0;
        }
        decode(n, o) {
          const c = n.length;
          if (!c)
            return 0;
          let a = 0, d = 0;
          if (this._interim) {
            const f = n.charCodeAt(d++);
            56320 <= f && f <= 57343 ? o[a++] = 1024 * (this._interim - 55296) + f - 56320 + 65536 : (o[a++] = this._interim, o[a++] = f), this._interim = 0;
          }
          for (let f = d; f < c; ++f) {
            const g = n.charCodeAt(f);
            if (55296 <= g && g <= 56319) {
              if (++f >= c)
                return this._interim = g, a;
              const l = n.charCodeAt(f);
              56320 <= l && l <= 57343 ? o[a++] = 1024 * (g - 55296) + l - 56320 + 65536 : (o[a++] = g, o[a++] = l);
            } else
              g !== 65279 && (o[a++] = g);
          }
          return a;
        }
      }, i.Utf8ToUtf32 = class {
        constructor() {
          this.interim = new Uint8Array(3);
        }
        clear() {
          this.interim.fill(0);
        }
        decode(n, o) {
          const c = n.length;
          if (!c)
            return 0;
          let a, d, f, g, l = 0, s = 0, r = 0;
          if (this.interim[0]) {
            let h = !1, v = this.interim[0];
            v &= (224 & v) == 192 ? 31 : (240 & v) == 224 ? 15 : 7;
            let u, p = 0;
            for (; (u = 63 & this.interim[++p]) && p < 4; )
              v <<= 6, v |= u;
            const _ = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4, b = _ - p;
            for (; r < b; ) {
              if (r >= c)
                return 0;
              if (u = n[r++], (192 & u) != 128) {
                r--, h = !0;
                break;
              }
              this.interim[p++] = u, v <<= 6, v |= 63 & u;
            }
            h || (_ === 2 ? v < 128 ? r-- : o[l++] = v : _ === 3 ? v < 2048 || v >= 55296 && v <= 57343 || v === 65279 || (o[l++] = v) : v < 65536 || v > 1114111 || (o[l++] = v)), this.interim.fill(0);
          }
          const t = c - 4;
          let e = r;
          for (; e < c; ) {
            for (; !(!(e < t) || 128 & (a = n[e]) || 128 & (d = n[e + 1]) || 128 & (f = n[e + 2]) || 128 & (g = n[e + 3])); )
              o[l++] = a, o[l++] = d, o[l++] = f, o[l++] = g, e += 4;
            if (a = n[e++], a < 128)
              o[l++] = a;
            else if ((224 & a) == 192) {
              if (e >= c)
                return this.interim[0] = a, l;
              if (d = n[e++], (192 & d) != 128) {
                e--;
                continue;
              }
              if (s = (31 & a) << 6 | 63 & d, s < 128) {
                e--;
                continue;
              }
              o[l++] = s;
            } else if ((240 & a) == 224) {
              if (e >= c)
                return this.interim[0] = a, l;
              if (d = n[e++], (192 & d) != 128) {
                e--;
                continue;
              }
              if (e >= c)
                return this.interim[0] = a, this.interim[1] = d, l;
              if (f = n[e++], (192 & f) != 128) {
                e--;
                continue;
              }
              if (s = (15 & a) << 12 | (63 & d) << 6 | 63 & f, s < 2048 || s >= 55296 && s <= 57343 || s === 65279)
                continue;
              o[l++] = s;
            } else if ((248 & a) == 240) {
              if (e >= c)
                return this.interim[0] = a, l;
              if (d = n[e++], (192 & d) != 128) {
                e--;
                continue;
              }
              if (e >= c)
                return this.interim[0] = a, this.interim[1] = d, l;
              if (f = n[e++], (192 & f) != 128) {
                e--;
                continue;
              }
              if (e >= c)
                return this.interim[0] = a, this.interim[1] = d, this.interim[2] = f, l;
              if (g = n[e++], (192 & g) != 128) {
                e--;
                continue;
              }
              if (s = (7 & a) << 18 | (63 & d) << 12 | (63 & f) << 6 | 63 & g, s < 65536 || s > 1114111)
                continue;
              o[l++] = s;
            }
          }
          return l;
        }
      };
    }, 225: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.UnicodeV6 = void 0;
      const o = n(1480), c = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], a = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
      let d;
      i.UnicodeV6 = class {
        constructor() {
          if (this.version = "6", !d) {
            d = new Uint8Array(65536), d.fill(1), d[0] = 0, d.fill(0, 1, 32), d.fill(0, 127, 160), d.fill(2, 4352, 4448), d[9001] = 2, d[9002] = 2, d.fill(2, 11904, 42192), d[12351] = 1, d.fill(2, 44032, 55204), d.fill(2, 63744, 64256), d.fill(2, 65040, 65050), d.fill(2, 65072, 65136), d.fill(2, 65280, 65377), d.fill(2, 65504, 65511);
            for (let f = 0; f < c.length; ++f)
              d.fill(0, c[f][0], c[f][1] + 1);
          }
        }
        wcwidth(f) {
          return f < 32 ? 0 : f < 127 ? 1 : f < 65536 ? d[f] : function(g, l) {
            let s, r = 0, t = l.length - 1;
            if (g < l[0][0] || g > l[t][1])
              return !1;
            for (; t >= r; )
              if (s = r + t >> 1, g > l[s][1])
                r = s + 1;
              else {
                if (!(g < l[s][0]))
                  return !0;
                t = s - 1;
              }
            return !1;
          }(f, a) ? 0 : f >= 131072 && f <= 196605 || f >= 196608 && f <= 262141 ? 2 : 1;
        }
        charProperties(f, g) {
          let l = this.wcwidth(f), s = l === 0 && g !== 0;
          if (s) {
            const r = o.UnicodeService.extractWidth(g);
            r === 0 ? s = !1 : r > l && (l = r);
          }
          return o.UnicodeService.createPropertyValue(0, l, s);
        }
      };
    }, 5981: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.WriteBuffer = void 0;
      const o = n(8460), c = n(844);
      class a extends c.Disposable {
        constructor(f) {
          super(), this._action = f, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = !1, this._syncCalls = 0, this._didUserInput = !1, this._onWriteParsed = this.register(new o.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event;
        }
        handleUserInput() {
          this._didUserInput = !0;
        }
        writeSync(f, g) {
          if (g !== void 0 && this._syncCalls > g)
            return void (this._syncCalls = 0);
          if (this._pendingData += f.length, this._writeBuffer.push(f), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting)
            return;
          let l;
          for (this._isSyncWriting = !0; l = this._writeBuffer.shift(); ) {
            this._action(l);
            const s = this._callbacks.shift();
            s && s();
          }
          this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = !1, this._syncCalls = 0;
        }
        write(f, g) {
          if (this._pendingData > 5e7)
            throw new Error("write data discarded, use flow control to avoid losing data");
          if (!this._writeBuffer.length) {
            if (this._bufferOffset = 0, this._didUserInput)
              return this._didUserInput = !1, this._pendingData += f.length, this._writeBuffer.push(f), this._callbacks.push(g), void this._innerWrite();
            setTimeout(() => this._innerWrite());
          }
          this._pendingData += f.length, this._writeBuffer.push(f), this._callbacks.push(g);
        }
        _innerWrite(f = 0, g = !0) {
          const l = f || Date.now();
          for (; this._writeBuffer.length > this._bufferOffset; ) {
            const s = this._writeBuffer[this._bufferOffset], r = this._action(s, g);
            if (r) {
              const e = (h) => Date.now() - l >= 12 ? setTimeout(() => this._innerWrite(0, h)) : this._innerWrite(l, h);
              return void r.catch((h) => (queueMicrotask(() => {
                throw h;
              }), Promise.resolve(!1))).then(e);
            }
            const t = this._callbacks[this._bufferOffset];
            if (t && t(), this._bufferOffset++, this._pendingData -= s.length, Date.now() - l >= 12)
              break;
          }
          this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
        }
      }
      i.WriteBuffer = a;
    }, 5941: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.toRgbString = i.parseColor = void 0;
      const n = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, o = /^[\da-f]+$/;
      function c(a, d) {
        const f = a.toString(16), g = f.length < 2 ? "0" + f : f;
        switch (d) {
          case 4:
            return f[0];
          case 8:
            return g;
          case 12:
            return (g + g).slice(0, 3);
          default:
            return g + g;
        }
      }
      i.parseColor = function(a) {
        if (!a)
          return;
        let d = a.toLowerCase();
        if (d.indexOf("rgb:") === 0) {
          d = d.slice(4);
          const f = n.exec(d);
          if (f) {
            const g = f[1] ? 15 : f[4] ? 255 : f[7] ? 4095 : 65535;
            return [Math.round(parseInt(f[1] || f[4] || f[7] || f[10], 16) / g * 255), Math.round(parseInt(f[2] || f[5] || f[8] || f[11], 16) / g * 255), Math.round(parseInt(f[3] || f[6] || f[9] || f[12], 16) / g * 255)];
          }
        } else if (d.indexOf("#") === 0 && (d = d.slice(1), o.exec(d) && [3, 6, 9, 12].includes(d.length))) {
          const f = d.length / 3, g = [0, 0, 0];
          for (let l = 0; l < 3; ++l) {
            const s = parseInt(d.slice(f * l, f * l + f), 16);
            g[l] = f === 1 ? s << 4 : f === 2 ? s : f === 3 ? s >> 4 : s >> 8;
          }
          return g;
        }
      }, i.toRgbString = function(a, d = 16) {
        const [f, g, l] = a;
        return `rgb:${c(f, d)}/${c(g, d)}/${c(l, d)}`;
      };
    }, 5770: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.PAYLOAD_LIMIT = void 0, i.PAYLOAD_LIMIT = 1e7;
    }, 6351: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DcsHandler = i.DcsParser = void 0;
      const o = n(482), c = n(8742), a = n(5770), d = [];
      i.DcsParser = class {
        constructor() {
          this._handlers = /* @__PURE__ */ Object.create(null), this._active = d, this._ident = 0, this._handlerFb = () => {
          }, this._stack = { paused: !1, loopPosition: 0, fallThrough: !1 };
        }
        dispose() {
          this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
          }, this._active = d;
        }
        registerHandler(g, l) {
          this._handlers[g] === void 0 && (this._handlers[g] = []);
          const s = this._handlers[g];
          return s.push(l), { dispose: () => {
            const r = s.indexOf(l);
            r !== -1 && s.splice(r, 1);
          } };
        }
        clearHandler(g) {
          this._handlers[g] && delete this._handlers[g];
        }
        setHandlerFallback(g) {
          this._handlerFb = g;
        }
        reset() {
          if (this._active.length)
            for (let g = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; g >= 0; --g)
              this._active[g].unhook(!1);
          this._stack.paused = !1, this._active = d, this._ident = 0;
        }
        hook(g, l) {
          if (this.reset(), this._ident = g, this._active = this._handlers[g] || d, this._active.length)
            for (let s = this._active.length - 1; s >= 0; s--)
              this._active[s].hook(l);
          else
            this._handlerFb(this._ident, "HOOK", l);
        }
        put(g, l, s) {
          if (this._active.length)
            for (let r = this._active.length - 1; r >= 0; r--)
              this._active[r].put(g, l, s);
          else
            this._handlerFb(this._ident, "PUT", (0, o.utf32ToString)(g, l, s));
        }
        unhook(g, l = !0) {
          if (this._active.length) {
            let s = !1, r = this._active.length - 1, t = !1;
            if (this._stack.paused && (r = this._stack.loopPosition - 1, s = l, t = this._stack.fallThrough, this._stack.paused = !1), !t && s === !1) {
              for (; r >= 0 && (s = this._active[r].unhook(g), s !== !0); r--)
                if (s instanceof Promise)
                  return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !1, s;
              r--;
            }
            for (; r >= 0; r--)
              if (s = this._active[r].unhook(!1), s instanceof Promise)
                return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !0, s;
          } else
            this._handlerFb(this._ident, "UNHOOK", g);
          this._active = d, this._ident = 0;
        }
      };
      const f = new c.Params();
      f.addParam(0), i.DcsHandler = class {
        constructor(g) {
          this._handler = g, this._data = "", this._params = f, this._hitLimit = !1;
        }
        hook(g) {
          this._params = g.length > 1 || g.params[0] ? g.clone() : f, this._data = "", this._hitLimit = !1;
        }
        put(g, l, s) {
          this._hitLimit || (this._data += (0, o.utf32ToString)(g, l, s), this._data.length > a.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
        }
        unhook(g) {
          let l = !1;
          if (this._hitLimit)
            l = !1;
          else if (g && (l = this._handler(this._data, this._params), l instanceof Promise))
            return l.then((s) => (this._params = f, this._data = "", this._hitLimit = !1, s));
          return this._params = f, this._data = "", this._hitLimit = !1, l;
        }
      };
    }, 2015: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.EscapeSequenceParser = i.VT500_TRANSITION_TABLE = i.TransitionTable = void 0;
      const o = n(844), c = n(8742), a = n(6242), d = n(6351);
      class f {
        constructor(r) {
          this.table = new Uint8Array(r);
        }
        setDefault(r, t) {
          this.table.fill(r << 4 | t);
        }
        add(r, t, e, h) {
          this.table[t << 8 | r] = e << 4 | h;
        }
        addMany(r, t, e, h) {
          for (let v = 0; v < r.length; v++)
            this.table[t << 8 | r[v]] = e << 4 | h;
        }
      }
      i.TransitionTable = f;
      const g = 160;
      i.VT500_TRANSITION_TABLE = function() {
        const s = new f(4095), r = Array.apply(null, Array(256)).map((p, _) => _), t = (p, _) => r.slice(p, _), e = t(32, 127), h = t(0, 24);
        h.push(25), h.push.apply(h, t(28, 32));
        const v = t(0, 14);
        let u;
        for (u in s.setDefault(1, 0), s.addMany(e, 0, 2, 0), v)
          s.addMany([24, 26, 153, 154], u, 3, 0), s.addMany(t(128, 144), u, 3, 0), s.addMany(t(144, 152), u, 3, 0), s.add(156, u, 0, 0), s.add(27, u, 11, 1), s.add(157, u, 4, 8), s.addMany([152, 158, 159], u, 0, 7), s.add(155, u, 11, 3), s.add(144, u, 11, 9);
        return s.addMany(h, 0, 3, 0), s.addMany(h, 1, 3, 1), s.add(127, 1, 0, 1), s.addMany(h, 8, 0, 8), s.addMany(h, 3, 3, 3), s.add(127, 3, 0, 3), s.addMany(h, 4, 3, 4), s.add(127, 4, 0, 4), s.addMany(h, 6, 3, 6), s.addMany(h, 5, 3, 5), s.add(127, 5, 0, 5), s.addMany(h, 2, 3, 2), s.add(127, 2, 0, 2), s.add(93, 1, 4, 8), s.addMany(e, 8, 5, 8), s.add(127, 8, 5, 8), s.addMany([156, 27, 24, 26, 7], 8, 6, 0), s.addMany(t(28, 32), 8, 0, 8), s.addMany([88, 94, 95], 1, 0, 7), s.addMany(e, 7, 0, 7), s.addMany(h, 7, 0, 7), s.add(156, 7, 0, 0), s.add(127, 7, 0, 7), s.add(91, 1, 11, 3), s.addMany(t(64, 127), 3, 7, 0), s.addMany(t(48, 60), 3, 8, 4), s.addMany([60, 61, 62, 63], 3, 9, 4), s.addMany(t(48, 60), 4, 8, 4), s.addMany(t(64, 127), 4, 7, 0), s.addMany([60, 61, 62, 63], 4, 0, 6), s.addMany(t(32, 64), 6, 0, 6), s.add(127, 6, 0, 6), s.addMany(t(64, 127), 6, 0, 0), s.addMany(t(32, 48), 3, 9, 5), s.addMany(t(32, 48), 5, 9, 5), s.addMany(t(48, 64), 5, 0, 6), s.addMany(t(64, 127), 5, 7, 0), s.addMany(t(32, 48), 4, 9, 5), s.addMany(t(32, 48), 1, 9, 2), s.addMany(t(32, 48), 2, 9, 2), s.addMany(t(48, 127), 2, 10, 0), s.addMany(t(48, 80), 1, 10, 0), s.addMany(t(81, 88), 1, 10, 0), s.addMany([89, 90, 92], 1, 10, 0), s.addMany(t(96, 127), 1, 10, 0), s.add(80, 1, 11, 9), s.addMany(h, 9, 0, 9), s.add(127, 9, 0, 9), s.addMany(t(28, 32), 9, 0, 9), s.addMany(t(32, 48), 9, 9, 12), s.addMany(t(48, 60), 9, 8, 10), s.addMany([60, 61, 62, 63], 9, 9, 10), s.addMany(h, 11, 0, 11), s.addMany(t(32, 128), 11, 0, 11), s.addMany(t(28, 32), 11, 0, 11), s.addMany(h, 10, 0, 10), s.add(127, 10, 0, 10), s.addMany(t(28, 32), 10, 0, 10), s.addMany(t(48, 60), 10, 8, 10), s.addMany([60, 61, 62, 63], 10, 0, 11), s.addMany(t(32, 48), 10, 9, 12), s.addMany(h, 12, 0, 12), s.add(127, 12, 0, 12), s.addMany(t(28, 32), 12, 0, 12), s.addMany(t(32, 48), 12, 9, 12), s.addMany(t(48, 64), 12, 0, 11), s.addMany(t(64, 127), 12, 12, 13), s.addMany(t(64, 127), 10, 12, 13), s.addMany(t(64, 127), 9, 12, 13), s.addMany(h, 13, 13, 13), s.addMany(e, 13, 13, 13), s.add(127, 13, 0, 13), s.addMany([27, 156, 24, 26], 13, 14, 0), s.add(g, 0, 2, 0), s.add(g, 8, 5, 8), s.add(g, 6, 0, 6), s.add(g, 11, 0, 11), s.add(g, 13, 13, 13), s;
      }();
      class l extends o.Disposable {
        constructor(r = i.VT500_TRANSITION_TABLE) {
          super(), this._transitions = r, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new c.Params(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (t, e, h) => {
          }, this._executeHandlerFb = (t) => {
          }, this._csiHandlerFb = (t, e) => {
          }, this._escHandlerFb = (t) => {
          }, this._errorHandlerFb = (t) => t, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this.register((0, o.toDisposable)(() => {
            this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
          })), this._oscParser = this.register(new a.OscParser()), this._dcsParser = this.register(new d.DcsParser()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => !0);
        }
        _identifier(r, t = [64, 126]) {
          let e = 0;
          if (r.prefix) {
            if (r.prefix.length > 1)
              throw new Error("only one byte as prefix supported");
            if (e = r.prefix.charCodeAt(0), e && 60 > e || e > 63)
              throw new Error("prefix must be in range 0x3c .. 0x3f");
          }
          if (r.intermediates) {
            if (r.intermediates.length > 2)
              throw new Error("only two bytes as intermediates are supported");
            for (let v = 0; v < r.intermediates.length; ++v) {
              const u = r.intermediates.charCodeAt(v);
              if (32 > u || u > 47)
                throw new Error("intermediate must be in range 0x20 .. 0x2f");
              e <<= 8, e |= u;
            }
          }
          if (r.final.length !== 1)
            throw new Error("final must be a single byte");
          const h = r.final.charCodeAt(0);
          if (t[0] > h || h > t[1])
            throw new Error(`final must be in range ${t[0]} .. ${t[1]}`);
          return e <<= 8, e |= h, e;
        }
        identToString(r) {
          const t = [];
          for (; r; )
            t.push(String.fromCharCode(255 & r)), r >>= 8;
          return t.reverse().join("");
        }
        setPrintHandler(r) {
          this._printHandler = r;
        }
        clearPrintHandler() {
          this._printHandler = this._printHandlerFb;
        }
        registerEscHandler(r, t) {
          const e = this._identifier(r, [48, 126]);
          this._escHandlers[e] === void 0 && (this._escHandlers[e] = []);
          const h = this._escHandlers[e];
          return h.push(t), { dispose: () => {
            const v = h.indexOf(t);
            v !== -1 && h.splice(v, 1);
          } };
        }
        clearEscHandler(r) {
          this._escHandlers[this._identifier(r, [48, 126])] && delete this._escHandlers[this._identifier(r, [48, 126])];
        }
        setEscHandlerFallback(r) {
          this._escHandlerFb = r;
        }
        setExecuteHandler(r, t) {
          this._executeHandlers[r.charCodeAt(0)] = t;
        }
        clearExecuteHandler(r) {
          this._executeHandlers[r.charCodeAt(0)] && delete this._executeHandlers[r.charCodeAt(0)];
        }
        setExecuteHandlerFallback(r) {
          this._executeHandlerFb = r;
        }
        registerCsiHandler(r, t) {
          const e = this._identifier(r);
          this._csiHandlers[e] === void 0 && (this._csiHandlers[e] = []);
          const h = this._csiHandlers[e];
          return h.push(t), { dispose: () => {
            const v = h.indexOf(t);
            v !== -1 && h.splice(v, 1);
          } };
        }
        clearCsiHandler(r) {
          this._csiHandlers[this._identifier(r)] && delete this._csiHandlers[this._identifier(r)];
        }
        setCsiHandlerFallback(r) {
          this._csiHandlerFb = r;
        }
        registerDcsHandler(r, t) {
          return this._dcsParser.registerHandler(this._identifier(r), t);
        }
        clearDcsHandler(r) {
          this._dcsParser.clearHandler(this._identifier(r));
        }
        setDcsHandlerFallback(r) {
          this._dcsParser.setHandlerFallback(r);
        }
        registerOscHandler(r, t) {
          return this._oscParser.registerHandler(r, t);
        }
        clearOscHandler(r) {
          this._oscParser.clearHandler(r);
        }
        setOscHandlerFallback(r) {
          this._oscParser.setHandlerFallback(r);
        }
        setErrorHandler(r) {
          this._errorHandler = r;
        }
        clearErrorHandler() {
          this._errorHandler = this._errorHandlerFb;
        }
        reset() {
          this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._parseStack.state !== 0 && (this._parseStack.state = 2, this._parseStack.handlers = []);
        }
        _preserveStack(r, t, e, h, v) {
          this._parseStack.state = r, this._parseStack.handlers = t, this._parseStack.handlerPos = e, this._parseStack.transition = h, this._parseStack.chunkPos = v;
        }
        parse(r, t, e) {
          let h, v = 0, u = 0, p = 0;
          if (this._parseStack.state)
            if (this._parseStack.state === 2)
              this._parseStack.state = 0, p = this._parseStack.chunkPos + 1;
            else {
              if (e === void 0 || this._parseStack.state === 1)
                throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
              const _ = this._parseStack.handlers;
              let b = this._parseStack.handlerPos - 1;
              switch (this._parseStack.state) {
                case 3:
                  if (e === !1 && b > -1) {
                    for (; b >= 0 && (h = _[b](this._params), h !== !0); b--)
                      if (h instanceof Promise)
                        return this._parseStack.handlerPos = b, h;
                  }
                  this._parseStack.handlers = [];
                  break;
                case 4:
                  if (e === !1 && b > -1) {
                    for (; b >= 0 && (h = _[b](), h !== !0); b--)
                      if (h instanceof Promise)
                        return this._parseStack.handlerPos = b, h;
                  }
                  this._parseStack.handlers = [];
                  break;
                case 6:
                  if (v = r[this._parseStack.chunkPos], h = this._dcsParser.unhook(v !== 24 && v !== 26, e), h)
                    return h;
                  v === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                  break;
                case 5:
                  if (v = r[this._parseStack.chunkPos], h = this._oscParser.end(v !== 24 && v !== 26, e), h)
                    return h;
                  v === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
              }
              this._parseStack.state = 0, p = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
            }
          for (let _ = p; _ < t; ++_) {
            switch (v = r[_], u = this._transitions.table[this.currentState << 8 | (v < 160 ? v : g)], u >> 4) {
              case 2:
                for (let L = _ + 1; ; ++L) {
                  if (L >= t || (v = r[L]) < 32 || v > 126 && v < g) {
                    this._printHandler(r, _, L), _ = L - 1;
                    break;
                  }
                  if (++L >= t || (v = r[L]) < 32 || v > 126 && v < g) {
                    this._printHandler(r, _, L), _ = L - 1;
                    break;
                  }
                  if (++L >= t || (v = r[L]) < 32 || v > 126 && v < g) {
                    this._printHandler(r, _, L), _ = L - 1;
                    break;
                  }
                  if (++L >= t || (v = r[L]) < 32 || v > 126 && v < g) {
                    this._printHandler(r, _, L), _ = L - 1;
                    break;
                  }
                }
                break;
              case 3:
                this._executeHandlers[v] ? this._executeHandlers[v]() : this._executeHandlerFb(v), this.precedingJoinState = 0;
                break;
              case 0:
                break;
              case 1:
                if (this._errorHandler({ position: _, code: v, currentState: this.currentState, collect: this._collect, params: this._params, abort: !1 }).abort)
                  return;
                break;
              case 7:
                const b = this._csiHandlers[this._collect << 8 | v];
                let A = b ? b.length - 1 : -1;
                for (; A >= 0 && (h = b[A](this._params), h !== !0); A--)
                  if (h instanceof Promise)
                    return this._preserveStack(3, b, A, u, _), h;
                A < 0 && this._csiHandlerFb(this._collect << 8 | v, this._params), this.precedingJoinState = 0;
                break;
              case 8:
                do
                  switch (v) {
                    case 59:
                      this._params.addParam(0);
                      break;
                    case 58:
                      this._params.addSubParam(-1);
                      break;
                    default:
                      this._params.addDigit(v - 48);
                  }
                while (++_ < t && (v = r[_]) > 47 && v < 60);
                _--;
                break;
              case 9:
                this._collect <<= 8, this._collect |= v;
                break;
              case 10:
                const T = this._escHandlers[this._collect << 8 | v];
                let x = T ? T.length - 1 : -1;
                for (; x >= 0 && (h = T[x](), h !== !0); x--)
                  if (h instanceof Promise)
                    return this._preserveStack(4, T, x, u, _), h;
                x < 0 && this._escHandlerFb(this._collect << 8 | v), this.precedingJoinState = 0;
                break;
              case 11:
                this._params.reset(), this._params.addParam(0), this._collect = 0;
                break;
              case 12:
                this._dcsParser.hook(this._collect << 8 | v, this._params);
                break;
              case 13:
                for (let L = _ + 1; ; ++L)
                  if (L >= t || (v = r[L]) === 24 || v === 26 || v === 27 || v > 127 && v < g) {
                    this._dcsParser.put(r, _, L), _ = L - 1;
                    break;
                  }
                break;
              case 14:
                if (h = this._dcsParser.unhook(v !== 24 && v !== 26), h)
                  return this._preserveStack(6, [], 0, u, _), h;
                v === 27 && (u |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                break;
              case 4:
                this._oscParser.start();
                break;
              case 5:
                for (let L = _ + 1; ; L++)
                  if (L >= t || (v = r[L]) < 32 || v > 127 && v < g) {
                    this._oscParser.put(r, _, L), _ = L - 1;
                    break;
                  }
                break;
              case 6:
                if (h = this._oscParser.end(v !== 24 && v !== 26), h)
                  return this._preserveStack(5, [], 0, u, _), h;
                v === 27 && (u |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
            }
            this.currentState = 15 & u;
          }
        }
      }
      i.EscapeSequenceParser = l;
    }, 6242: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.OscHandler = i.OscParser = void 0;
      const o = n(5770), c = n(482), a = [];
      i.OscParser = class {
        constructor() {
          this._state = 0, this._active = a, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
          }, this._stack = { paused: !1, loopPosition: 0, fallThrough: !1 };
        }
        registerHandler(d, f) {
          this._handlers[d] === void 0 && (this._handlers[d] = []);
          const g = this._handlers[d];
          return g.push(f), { dispose: () => {
            const l = g.indexOf(f);
            l !== -1 && g.splice(l, 1);
          } };
        }
        clearHandler(d) {
          this._handlers[d] && delete this._handlers[d];
        }
        setHandlerFallback(d) {
          this._handlerFb = d;
        }
        dispose() {
          this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
          }, this._active = a;
        }
        reset() {
          if (this._state === 2)
            for (let d = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; d >= 0; --d)
              this._active[d].end(!1);
          this._stack.paused = !1, this._active = a, this._id = -1, this._state = 0;
        }
        _start() {
          if (this._active = this._handlers[this._id] || a, this._active.length)
            for (let d = this._active.length - 1; d >= 0; d--)
              this._active[d].start();
          else
            this._handlerFb(this._id, "START");
        }
        _put(d, f, g) {
          if (this._active.length)
            for (let l = this._active.length - 1; l >= 0; l--)
              this._active[l].put(d, f, g);
          else
            this._handlerFb(this._id, "PUT", (0, c.utf32ToString)(d, f, g));
        }
        start() {
          this.reset(), this._state = 1;
        }
        put(d, f, g) {
          if (this._state !== 3) {
            if (this._state === 1)
              for (; f < g; ) {
                const l = d[f++];
                if (l === 59) {
                  this._state = 2, this._start();
                  break;
                }
                if (l < 48 || 57 < l)
                  return void (this._state = 3);
                this._id === -1 && (this._id = 0), this._id = 10 * this._id + l - 48;
              }
            this._state === 2 && g - f > 0 && this._put(d, f, g);
          }
        }
        end(d, f = !0) {
          if (this._state !== 0) {
            if (this._state !== 3)
              if (this._state === 1 && this._start(), this._active.length) {
                let g = !1, l = this._active.length - 1, s = !1;
                if (this._stack.paused && (l = this._stack.loopPosition - 1, g = f, s = this._stack.fallThrough, this._stack.paused = !1), !s && g === !1) {
                  for (; l >= 0 && (g = this._active[l].end(d), g !== !0); l--)
                    if (g instanceof Promise)
                      return this._stack.paused = !0, this._stack.loopPosition = l, this._stack.fallThrough = !1, g;
                  l--;
                }
                for (; l >= 0; l--)
                  if (g = this._active[l].end(!1), g instanceof Promise)
                    return this._stack.paused = !0, this._stack.loopPosition = l, this._stack.fallThrough = !0, g;
              } else
                this._handlerFb(this._id, "END", d);
            this._active = a, this._id = -1, this._state = 0;
          }
        }
      }, i.OscHandler = class {
        constructor(d) {
          this._handler = d, this._data = "", this._hitLimit = !1;
        }
        start() {
          this._data = "", this._hitLimit = !1;
        }
        put(d, f, g) {
          this._hitLimit || (this._data += (0, c.utf32ToString)(d, f, g), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
        }
        end(d) {
          let f = !1;
          if (this._hitLimit)
            f = !1;
          else if (d && (f = this._handler(this._data), f instanceof Promise))
            return f.then((g) => (this._data = "", this._hitLimit = !1, g));
          return this._data = "", this._hitLimit = !1, f;
        }
      };
    }, 8742: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.Params = void 0;
      const n = 2147483647;
      class o {
        static fromArray(a) {
          const d = new o();
          if (!a.length)
            return d;
          for (let f = Array.isArray(a[0]) ? 1 : 0; f < a.length; ++f) {
            const g = a[f];
            if (Array.isArray(g))
              for (let l = 0; l < g.length; ++l)
                d.addSubParam(g[l]);
            else
              d.addParam(g);
          }
          return d;
        }
        constructor(a = 32, d = 32) {
          if (this.maxLength = a, this.maxSubParamsLength = d, d > 256)
            throw new Error("maxSubParamsLength must not be greater than 256");
          this.params = new Int32Array(a), this.length = 0, this._subParams = new Int32Array(d), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(a), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
        }
        clone() {
          const a = new o(this.maxLength, this.maxSubParamsLength);
          return a.params.set(this.params), a.length = this.length, a._subParams.set(this._subParams), a._subParamsLength = this._subParamsLength, a._subParamsIdx.set(this._subParamsIdx), a._rejectDigits = this._rejectDigits, a._rejectSubDigits = this._rejectSubDigits, a._digitIsSub = this._digitIsSub, a;
        }
        toArray() {
          const a = [];
          for (let d = 0; d < this.length; ++d) {
            a.push(this.params[d]);
            const f = this._subParamsIdx[d] >> 8, g = 255 & this._subParamsIdx[d];
            g - f > 0 && a.push(Array.prototype.slice.call(this._subParams, f, g));
          }
          return a;
        }
        reset() {
          this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
        }
        addParam(a) {
          if (this._digitIsSub = !1, this.length >= this.maxLength)
            this._rejectDigits = !0;
          else {
            if (a < -1)
              throw new Error("values lesser than -1 are not allowed");
            this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = a > n ? n : a;
          }
        }
        addSubParam(a) {
          if (this._digitIsSub = !0, this.length)
            if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
              this._rejectSubDigits = !0;
            else {
              if (a < -1)
                throw new Error("values lesser than -1 are not allowed");
              this._subParams[this._subParamsLength++] = a > n ? n : a, this._subParamsIdx[this.length - 1]++;
            }
        }
        hasSubParams(a) {
          return (255 & this._subParamsIdx[a]) - (this._subParamsIdx[a] >> 8) > 0;
        }
        getSubParams(a) {
          const d = this._subParamsIdx[a] >> 8, f = 255 & this._subParamsIdx[a];
          return f - d > 0 ? this._subParams.subarray(d, f) : null;
        }
        getSubParamsAll() {
          const a = {};
          for (let d = 0; d < this.length; ++d) {
            const f = this._subParamsIdx[d] >> 8, g = 255 & this._subParamsIdx[d];
            g - f > 0 && (a[d] = this._subParams.slice(f, g));
          }
          return a;
        }
        addDigit(a) {
          let d;
          if (this._rejectDigits || !(d = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
            return;
          const f = this._digitIsSub ? this._subParams : this.params, g = f[d - 1];
          f[d - 1] = ~g ? Math.min(10 * g + a, n) : a;
        }
      }
      i.Params = o;
    }, 5741: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.AddonManager = void 0, i.AddonManager = class {
        constructor() {
          this._addons = [];
        }
        dispose() {
          for (let n = this._addons.length - 1; n >= 0; n--)
            this._addons[n].instance.dispose();
        }
        loadAddon(n, o) {
          const c = { instance: o, dispose: o.dispose, isDisposed: !1 };
          this._addons.push(c), o.dispose = () => this._wrappedAddonDispose(c), o.activate(n);
        }
        _wrappedAddonDispose(n) {
          if (n.isDisposed)
            return;
          let o = -1;
          for (let c = 0; c < this._addons.length; c++)
            if (this._addons[c] === n) {
              o = c;
              break;
            }
          if (o === -1)
            throw new Error("Could not dispose an addon that has not been loaded");
          n.isDisposed = !0, n.dispose.apply(n.instance), this._addons.splice(o, 1);
        }
      };
    }, 8771: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferApiView = void 0;
      const o = n(3785), c = n(511);
      i.BufferApiView = class {
        constructor(a, d) {
          this._buffer = a, this.type = d;
        }
        init(a) {
          return this._buffer = a, this;
        }
        get cursorY() {
          return this._buffer.y;
        }
        get cursorX() {
          return this._buffer.x;
        }
        get viewportY() {
          return this._buffer.ydisp;
        }
        get baseY() {
          return this._buffer.ybase;
        }
        get length() {
          return this._buffer.lines.length;
        }
        getLine(a) {
          const d = this._buffer.lines.get(a);
          if (d)
            return new o.BufferLineApiView(d);
        }
        getNullCell() {
          return new c.CellData();
        }
      };
    }, 3785: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferLineApiView = void 0;
      const o = n(511);
      i.BufferLineApiView = class {
        constructor(c) {
          this._line = c;
        }
        get isWrapped() {
          return this._line.isWrapped;
        }
        get length() {
          return this._line.length;
        }
        getCell(c, a) {
          if (!(c < 0 || c >= this._line.length))
            return a ? (this._line.loadCell(c, a), a) : this._line.loadCell(c, new o.CellData());
        }
        translateToString(c, a, d) {
          return this._line.translateToString(c, a, d);
        }
      };
    }, 8285: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferNamespaceApi = void 0;
      const o = n(8771), c = n(8460), a = n(844);
      class d extends a.Disposable {
        constructor(g) {
          super(), this._core = g, this._onBufferChange = this.register(new c.EventEmitter()), this.onBufferChange = this._onBufferChange.event, this._normal = new o.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new o.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
        }
        get active() {
          if (this._core.buffers.active === this._core.buffers.normal)
            return this.normal;
          if (this._core.buffers.active === this._core.buffers.alt)
            return this.alternate;
          throw new Error("Active buffer is neither normal nor alternate");
        }
        get normal() {
          return this._normal.init(this._core.buffers.normal);
        }
        get alternate() {
          return this._alternate.init(this._core.buffers.alt);
        }
      }
      i.BufferNamespaceApi = d;
    }, 7975: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.ParserApi = void 0, i.ParserApi = class {
        constructor(n) {
          this._core = n;
        }
        registerCsiHandler(n, o) {
          return this._core.registerCsiHandler(n, (c) => o(c.toArray()));
        }
        addCsiHandler(n, o) {
          return this.registerCsiHandler(n, o);
        }
        registerDcsHandler(n, o) {
          return this._core.registerDcsHandler(n, (c, a) => o(c, a.toArray()));
        }
        addDcsHandler(n, o) {
          return this.registerDcsHandler(n, o);
        }
        registerEscHandler(n, o) {
          return this._core.registerEscHandler(n, o);
        }
        addEscHandler(n, o) {
          return this.registerEscHandler(n, o);
        }
        registerOscHandler(n, o) {
          return this._core.registerOscHandler(n, o);
        }
        addOscHandler(n, o) {
          return this.registerOscHandler(n, o);
        }
      };
    }, 7090: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.UnicodeApi = void 0, i.UnicodeApi = class {
        constructor(n) {
          this._core = n;
        }
        register(n) {
          this._core.unicodeService.register(n);
        }
        get versions() {
          return this._core.unicodeService.versions;
        }
        get activeVersion() {
          return this._core.unicodeService.activeVersion;
        }
        set activeVersion(n) {
          this._core.unicodeService.activeVersion = n;
        }
      };
    }, 744: function(k, i, n) {
      var o = this && this.__decorate || function(s, r, t, e) {
        var h, v = arguments.length, u = v < 3 ? r : e === null ? e = Object.getOwnPropertyDescriptor(r, t) : e;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          u = Reflect.decorate(s, r, t, e);
        else
          for (var p = s.length - 1; p >= 0; p--)
            (h = s[p]) && (u = (v < 3 ? h(u) : v > 3 ? h(r, t, u) : h(r, t)) || u);
        return v > 3 && u && Object.defineProperty(r, t, u), u;
      }, c = this && this.__param || function(s, r) {
        return function(t, e) {
          r(t, e, s);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferService = i.MINIMUM_ROWS = i.MINIMUM_COLS = void 0;
      const a = n(8460), d = n(844), f = n(5295), g = n(2585);
      i.MINIMUM_COLS = 2, i.MINIMUM_ROWS = 1;
      let l = i.BufferService = class extends d.Disposable {
        get buffer() {
          return this.buffers.active;
        }
        constructor(s) {
          super(), this.isUserScrolling = !1, this._onResize = this.register(new a.EventEmitter()), this.onResize = this._onResize.event, this._onScroll = this.register(new a.EventEmitter()), this.onScroll = this._onScroll.event, this.cols = Math.max(s.rawOptions.cols || 0, i.MINIMUM_COLS), this.rows = Math.max(s.rawOptions.rows || 0, i.MINIMUM_ROWS), this.buffers = this.register(new f.BufferSet(s, this));
        }
        resize(s, r) {
          this.cols = s, this.rows = r, this.buffers.resize(s, r), this._onResize.fire({ cols: s, rows: r });
        }
        reset() {
          this.buffers.reset(), this.isUserScrolling = !1;
        }
        scroll(s, r = !1) {
          const t = this.buffer;
          let e;
          e = this._cachedBlankLine, e && e.length === this.cols && e.getFg(0) === s.fg && e.getBg(0) === s.bg || (e = t.getBlankLine(s, r), this._cachedBlankLine = e), e.isWrapped = r;
          const h = t.ybase + t.scrollTop, v = t.ybase + t.scrollBottom;
          if (t.scrollTop === 0) {
            const u = t.lines.isFull;
            v === t.lines.length - 1 ? u ? t.lines.recycle().copyFrom(e) : t.lines.push(e.clone()) : t.lines.splice(v + 1, 0, e.clone()), u ? this.isUserScrolling && (t.ydisp = Math.max(t.ydisp - 1, 0)) : (t.ybase++, this.isUserScrolling || t.ydisp++);
          } else {
            const u = v - h + 1;
            t.lines.shiftElements(h + 1, u - 1, -1), t.lines.set(v, e.clone());
          }
          this.isUserScrolling || (t.ydisp = t.ybase), this._onScroll.fire(t.ydisp);
        }
        scrollLines(s, r, t) {
          const e = this.buffer;
          if (s < 0) {
            if (e.ydisp === 0)
              return;
            this.isUserScrolling = !0;
          } else
            s + e.ydisp >= e.ybase && (this.isUserScrolling = !1);
          const h = e.ydisp;
          e.ydisp = Math.max(Math.min(e.ydisp + s, e.ybase), 0), h !== e.ydisp && (r || this._onScroll.fire(e.ydisp));
        }
      };
      i.BufferService = l = o([c(0, g.IOptionsService)], l);
    }, 7994: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CharsetService = void 0, i.CharsetService = class {
        constructor() {
          this.glevel = 0, this._charsets = [];
        }
        reset() {
          this.charset = void 0, this._charsets = [], this.glevel = 0;
        }
        setgLevel(n) {
          this.glevel = n, this.charset = this._charsets[n];
        }
        setgCharset(n, o) {
          this._charsets[n] = o, this.glevel === n && (this.charset = o);
        }
      };
    }, 1753: function(k, i, n) {
      var o = this && this.__decorate || function(e, h, v, u) {
        var p, _ = arguments.length, b = _ < 3 ? h : u === null ? u = Object.getOwnPropertyDescriptor(h, v) : u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          b = Reflect.decorate(e, h, v, u);
        else
          for (var A = e.length - 1; A >= 0; A--)
            (p = e[A]) && (b = (_ < 3 ? p(b) : _ > 3 ? p(h, v, b) : p(h, v)) || b);
        return _ > 3 && b && Object.defineProperty(h, v, b), b;
      }, c = this && this.__param || function(e, h) {
        return function(v, u) {
          h(v, u, e);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CoreMouseService = void 0;
      const a = n(2585), d = n(8460), f = n(844), g = { NONE: { events: 0, restrict: () => !1 }, X10: { events: 1, restrict: (e) => e.button !== 4 && e.action === 1 && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0) }, VT200: { events: 19, restrict: (e) => e.action !== 32 }, DRAG: { events: 23, restrict: (e) => e.action !== 32 || e.button !== 3 }, ANY: { events: 31, restrict: (e) => !0 } };
      function l(e, h) {
        let v = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
        return e.button === 4 ? (v |= 64, v |= e.action) : (v |= 3 & e.button, 4 & e.button && (v |= 64), 8 & e.button && (v |= 128), e.action === 32 ? v |= 32 : e.action !== 0 || h || (v |= 3)), v;
      }
      const s = String.fromCharCode, r = { DEFAULT: (e) => {
        const h = [l(e, !1) + 32, e.col + 32, e.row + 32];
        return h[0] > 255 || h[1] > 255 || h[2] > 255 ? "" : `\x1B[M${s(h[0])}${s(h[1])}${s(h[2])}`;
      }, SGR: (e) => {
        const h = e.action === 0 && e.button !== 4 ? "m" : "M";
        return `\x1B[<${l(e, !0)};${e.col};${e.row}${h}`;
      }, SGR_PIXELS: (e) => {
        const h = e.action === 0 && e.button !== 4 ? "m" : "M";
        return `\x1B[<${l(e, !0)};${e.x};${e.y}${h}`;
      } };
      let t = i.CoreMouseService = class extends f.Disposable {
        constructor(e, h) {
          super(), this._bufferService = e, this._coreService = h, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new d.EventEmitter()), this.onProtocolChange = this._onProtocolChange.event;
          for (const v of Object.keys(g))
            this.addProtocol(v, g[v]);
          for (const v of Object.keys(r))
            this.addEncoding(v, r[v]);
          this.reset();
        }
        addProtocol(e, h) {
          this._protocols[e] = h;
        }
        addEncoding(e, h) {
          this._encodings[e] = h;
        }
        get activeProtocol() {
          return this._activeProtocol;
        }
        get areMouseEventsActive() {
          return this._protocols[this._activeProtocol].events !== 0;
        }
        set activeProtocol(e) {
          if (!this._protocols[e])
            throw new Error(`unknown protocol "${e}"`);
          this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
        }
        get activeEncoding() {
          return this._activeEncoding;
        }
        set activeEncoding(e) {
          if (!this._encodings[e])
            throw new Error(`unknown encoding "${e}"`);
          this._activeEncoding = e;
        }
        reset() {
          this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
        }
        triggerMouseEvent(e) {
          if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows || e.button === 4 && e.action === 32 || e.button === 3 && e.action !== 32 || e.button !== 4 && (e.action === 2 || e.action === 3) || (e.col++, e.row++, e.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e, this._activeEncoding === "SGR_PIXELS")) || !this._protocols[this._activeProtocol].restrict(e))
            return !1;
          const h = this._encodings[this._activeEncoding](e);
          return h && (this._activeEncoding === "DEFAULT" ? this._coreService.triggerBinaryEvent(h) : this._coreService.triggerDataEvent(h, !0)), this._lastEvent = e, !0;
        }
        explainEvents(e) {
          return { down: !!(1 & e), up: !!(2 & e), drag: !!(4 & e), move: !!(8 & e), wheel: !!(16 & e) };
        }
        _equalEvents(e, h, v) {
          if (v) {
            if (e.x !== h.x || e.y !== h.y)
              return !1;
          } else if (e.col !== h.col || e.row !== h.row)
            return !1;
          return e.button === h.button && e.action === h.action && e.ctrl === h.ctrl && e.alt === h.alt && e.shift === h.shift;
        }
      };
      i.CoreMouseService = t = o([c(0, a.IBufferService), c(1, a.ICoreService)], t);
    }, 6975: function(k, i, n) {
      var o = this && this.__decorate || function(t, e, h, v) {
        var u, p = arguments.length, _ = p < 3 ? e : v === null ? v = Object.getOwnPropertyDescriptor(e, h) : v;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          _ = Reflect.decorate(t, e, h, v);
        else
          for (var b = t.length - 1; b >= 0; b--)
            (u = t[b]) && (_ = (p < 3 ? u(_) : p > 3 ? u(e, h, _) : u(e, h)) || _);
        return p > 3 && _ && Object.defineProperty(e, h, _), _;
      }, c = this && this.__param || function(t, e) {
        return function(h, v) {
          e(h, v, t);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.CoreService = void 0;
      const a = n(1439), d = n(8460), f = n(844), g = n(2585), l = Object.freeze({ insertMode: !1 }), s = Object.freeze({ applicationCursorKeys: !1, applicationKeypad: !1, bracketedPasteMode: !1, origin: !1, reverseWraparound: !1, sendFocus: !1, wraparound: !0 });
      let r = i.CoreService = class extends f.Disposable {
        constructor(t, e, h) {
          super(), this._bufferService = t, this._logService = e, this._optionsService = h, this.isCursorInitialized = !1, this.isCursorHidden = !1, this._onData = this.register(new d.EventEmitter()), this.onData = this._onData.event, this._onUserInput = this.register(new d.EventEmitter()), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new d.EventEmitter()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new d.EventEmitter()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, a.clone)(l), this.decPrivateModes = (0, a.clone)(s);
        }
        reset() {
          this.modes = (0, a.clone)(l), this.decPrivateModes = (0, a.clone)(s);
        }
        triggerDataEvent(t, e = !1) {
          if (this._optionsService.rawOptions.disableStdin)
            return;
          const h = this._bufferService.buffer;
          e && this._optionsService.rawOptions.scrollOnUserInput && h.ybase !== h.ydisp && this._onRequestScrollToBottom.fire(), e && this._onUserInput.fire(), this._logService.debug(`sending data "${t}"`, () => t.split("").map((v) => v.charCodeAt(0))), this._onData.fire(t);
        }
        triggerBinaryEvent(t) {
          this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${t}"`, () => t.split("").map((e) => e.charCodeAt(0))), this._onBinary.fire(t));
        }
      };
      i.CoreService = r = o([c(0, g.IBufferService), c(1, g.ILogService), c(2, g.IOptionsService)], r);
    }, 9074: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.DecorationService = void 0;
      const o = n(8055), c = n(8460), a = n(844), d = n(6106);
      let f = 0, g = 0;
      class l extends a.Disposable {
        get decorations() {
          return this._decorations.values();
        }
        constructor() {
          super(), this._decorations = new d.SortedList((t) => t == null ? void 0 : t.marker.line), this._onDecorationRegistered = this.register(new c.EventEmitter()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new c.EventEmitter()), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, a.toDisposable)(() => this.reset()));
        }
        registerDecoration(t) {
          if (t.marker.isDisposed)
            return;
          const e = new s(t);
          if (e) {
            const h = e.marker.onDispose(() => e.dispose());
            e.onDispose(() => {
              e && (this._decorations.delete(e) && this._onDecorationRemoved.fire(e), h.dispose());
            }), this._decorations.insert(e), this._onDecorationRegistered.fire(e);
          }
          return e;
        }
        reset() {
          for (const t of this._decorations.values())
            t.dispose();
          this._decorations.clear();
        }
        *getDecorationsAtCell(t, e, h) {
          let v = 0, u = 0;
          for (const p of this._decorations.getKeyIterator(e))
            v = p.options.x ?? 0, u = v + (p.options.width ?? 1), t >= v && t < u && (!h || (p.options.layer ?? "bottom") === h) && (yield p);
        }
        forEachDecorationAtCell(t, e, h, v) {
          this._decorations.forEachByKey(e, (u) => {
            f = u.options.x ?? 0, g = f + (u.options.width ?? 1), t >= f && t < g && (!h || (u.options.layer ?? "bottom") === h) && v(u);
          });
        }
      }
      i.DecorationService = l;
      class s extends a.Disposable {
        get isDisposed() {
          return this._isDisposed;
        }
        get backgroundColorRGB() {
          return this._cachedBg === null && (this.options.backgroundColor ? this._cachedBg = o.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
        }
        get foregroundColorRGB() {
          return this._cachedFg === null && (this.options.foregroundColor ? this._cachedFg = o.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
        }
        constructor(t) {
          super(), this.options = t, this.onRenderEmitter = this.register(new c.EventEmitter()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new c.EventEmitter()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = t.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
        }
        dispose() {
          this._onDispose.fire(), super.dispose();
        }
      }
    }, 4348: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.InstantiationService = i.ServiceCollection = void 0;
      const o = n(2585), c = n(8343);
      class a {
        constructor(...f) {
          this._entries = /* @__PURE__ */ new Map();
          for (const [g, l] of f)
            this.set(g, l);
        }
        set(f, g) {
          const l = this._entries.get(f);
          return this._entries.set(f, g), l;
        }
        forEach(f) {
          for (const [g, l] of this._entries.entries())
            f(g, l);
        }
        has(f) {
          return this._entries.has(f);
        }
        get(f) {
          return this._entries.get(f);
        }
      }
      i.ServiceCollection = a, i.InstantiationService = class {
        constructor() {
          this._services = new a(), this._services.set(o.IInstantiationService, this);
        }
        setService(d, f) {
          this._services.set(d, f);
        }
        getService(d) {
          return this._services.get(d);
        }
        createInstance(d, ...f) {
          const g = (0, c.getServiceDependencies)(d).sort((r, t) => r.index - t.index), l = [];
          for (const r of g) {
            const t = this._services.get(r.id);
            if (!t)
              throw new Error(`[createInstance] ${d.name} depends on UNKNOWN service ${r.id}.`);
            l.push(t);
          }
          const s = g.length > 0 ? g[0].index : f.length;
          if (f.length !== s)
            throw new Error(`[createInstance] First service dependency of ${d.name} at position ${s + 1} conflicts with ${f.length} static arguments`);
          return new d(...f, ...l);
        }
      };
    }, 7866: function(k, i, n) {
      var o = this && this.__decorate || function(s, r, t, e) {
        var h, v = arguments.length, u = v < 3 ? r : e === null ? e = Object.getOwnPropertyDescriptor(r, t) : e;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          u = Reflect.decorate(s, r, t, e);
        else
          for (var p = s.length - 1; p >= 0; p--)
            (h = s[p]) && (u = (v < 3 ? h(u) : v > 3 ? h(r, t, u) : h(r, t)) || u);
        return v > 3 && u && Object.defineProperty(r, t, u), u;
      }, c = this && this.__param || function(s, r) {
        return function(t, e) {
          r(t, e, s);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.traceCall = i.setTraceLogger = i.LogService = void 0;
      const a = n(844), d = n(2585), f = { trace: d.LogLevelEnum.TRACE, debug: d.LogLevelEnum.DEBUG, info: d.LogLevelEnum.INFO, warn: d.LogLevelEnum.WARN, error: d.LogLevelEnum.ERROR, off: d.LogLevelEnum.OFF };
      let g, l = i.LogService = class extends a.Disposable {
        get logLevel() {
          return this._logLevel;
        }
        constructor(s) {
          super(), this._optionsService = s, this._logLevel = d.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), g = this;
        }
        _updateLogLevel() {
          this._logLevel = f[this._optionsService.rawOptions.logLevel];
        }
        _evalLazyOptionalParams(s) {
          for (let r = 0; r < s.length; r++)
            typeof s[r] == "function" && (s[r] = s[r]());
        }
        _log(s, r, t) {
          this._evalLazyOptionalParams(t), s.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + r, ...t);
        }
        trace(s, ...r) {
          var t;
          this._logLevel <= d.LogLevelEnum.TRACE && this._log(((t = this._optionsService.options.logger) == null ? void 0 : t.trace.bind(this._optionsService.options.logger)) ?? console.log, s, r);
        }
        debug(s, ...r) {
          var t;
          this._logLevel <= d.LogLevelEnum.DEBUG && this._log(((t = this._optionsService.options.logger) == null ? void 0 : t.debug.bind(this._optionsService.options.logger)) ?? console.log, s, r);
        }
        info(s, ...r) {
          var t;
          this._logLevel <= d.LogLevelEnum.INFO && this._log(((t = this._optionsService.options.logger) == null ? void 0 : t.info.bind(this._optionsService.options.logger)) ?? console.info, s, r);
        }
        warn(s, ...r) {
          var t;
          this._logLevel <= d.LogLevelEnum.WARN && this._log(((t = this._optionsService.options.logger) == null ? void 0 : t.warn.bind(this._optionsService.options.logger)) ?? console.warn, s, r);
        }
        error(s, ...r) {
          var t;
          this._logLevel <= d.LogLevelEnum.ERROR && this._log(((t = this._optionsService.options.logger) == null ? void 0 : t.error.bind(this._optionsService.options.logger)) ?? console.error, s, r);
        }
      };
      i.LogService = l = o([c(0, d.IOptionsService)], l), i.setTraceLogger = function(s) {
        g = s;
      }, i.traceCall = function(s, r, t) {
        if (typeof t.value != "function")
          throw new Error("not supported");
        const e = t.value;
        t.value = function(...h) {
          if (g.logLevel !== d.LogLevelEnum.TRACE)
            return e.apply(this, h);
          g.trace(`GlyphRenderer#${e.name}(${h.map((u) => JSON.stringify(u)).join(", ")})`);
          const v = e.apply(this, h);
          return g.trace(`GlyphRenderer#${e.name} return`, v), v;
        };
      };
    }, 7302: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.OptionsService = i.DEFAULT_OPTIONS = void 0;
      const o = n(8460), c = n(844), a = n(6114);
      i.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: !1, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: !0, drawBoldTextInBrightColors: !0, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: !1, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnUserInput: !0, scrollSensitivity: 1, screenReaderMode: !1, smoothScrollDuration: 0, macOptionIsMeta: !1, macOptionClickForcesSelection: !1, minimumContrastRatio: 1, disableStdin: !1, allowProposedApi: !1, allowTransparency: !1, tabStopWidth: 8, theme: {}, rescaleOverlappingGlyphs: !1, rightClickSelectsWord: a.isMac, windowOptions: {}, windowsMode: !1, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: !0, convertEol: !1, termName: "xterm", cancelEvents: !1, overviewRulerWidth: 0 };
      const d = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
      class f extends c.Disposable {
        constructor(l) {
          super(), this._onOptionChange = this.register(new o.EventEmitter()), this.onOptionChange = this._onOptionChange.event;
          const s = { ...i.DEFAULT_OPTIONS };
          for (const r in l)
            if (r in s)
              try {
                const t = l[r];
                s[r] = this._sanitizeAndValidateOption(r, t);
              } catch (t) {
                console.error(t);
              }
          this.rawOptions = s, this.options = { ...s }, this._setupOptions(), this.register((0, c.toDisposable)(() => {
            this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
          }));
        }
        onSpecificOptionChange(l, s) {
          return this.onOptionChange((r) => {
            r === l && s(this.rawOptions[l]);
          });
        }
        onMultipleOptionChange(l, s) {
          return this.onOptionChange((r) => {
            l.indexOf(r) !== -1 && s();
          });
        }
        _setupOptions() {
          const l = (r) => {
            if (!(r in i.DEFAULT_OPTIONS))
              throw new Error(`No option with key "${r}"`);
            return this.rawOptions[r];
          }, s = (r, t) => {
            if (!(r in i.DEFAULT_OPTIONS))
              throw new Error(`No option with key "${r}"`);
            t = this._sanitizeAndValidateOption(r, t), this.rawOptions[r] !== t && (this.rawOptions[r] = t, this._onOptionChange.fire(r));
          };
          for (const r in this.rawOptions) {
            const t = { get: l.bind(this, r), set: s.bind(this, r) };
            Object.defineProperty(this.options, r, t);
          }
        }
        _sanitizeAndValidateOption(l, s) {
          switch (l) {
            case "cursorStyle":
              if (s || (s = i.DEFAULT_OPTIONS[l]), !/* @__PURE__ */ function(r) {
                return r === "block" || r === "underline" || r === "bar";
              }(s))
                throw new Error(`"${s}" is not a valid value for ${l}`);
              break;
            case "wordSeparator":
              s || (s = i.DEFAULT_OPTIONS[l]);
              break;
            case "fontWeight":
            case "fontWeightBold":
              if (typeof s == "number" && 1 <= s && s <= 1e3)
                break;
              s = d.includes(s) ? s : i.DEFAULT_OPTIONS[l];
              break;
            case "cursorWidth":
              s = Math.floor(s);
            case "lineHeight":
            case "tabStopWidth":
              if (s < 1)
                throw new Error(`${l} cannot be less than 1, value: ${s}`);
              break;
            case "minimumContrastRatio":
              s = Math.max(1, Math.min(21, Math.round(10 * s) / 10));
              break;
            case "scrollback":
              if ((s = Math.min(s, 4294967295)) < 0)
                throw new Error(`${l} cannot be less than 0, value: ${s}`);
              break;
            case "fastScrollSensitivity":
            case "scrollSensitivity":
              if (s <= 0)
                throw new Error(`${l} cannot be less than or equal to 0, value: ${s}`);
              break;
            case "rows":
            case "cols":
              if (!s && s !== 0)
                throw new Error(`${l} must be numeric, value: ${s}`);
              break;
            case "windowsPty":
              s = s ?? {};
          }
          return s;
        }
      }
      i.OptionsService = f;
    }, 2660: function(k, i, n) {
      var o = this && this.__decorate || function(f, g, l, s) {
        var r, t = arguments.length, e = t < 3 ? g : s === null ? s = Object.getOwnPropertyDescriptor(g, l) : s;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          e = Reflect.decorate(f, g, l, s);
        else
          for (var h = f.length - 1; h >= 0; h--)
            (r = f[h]) && (e = (t < 3 ? r(e) : t > 3 ? r(g, l, e) : r(g, l)) || e);
        return t > 3 && e && Object.defineProperty(g, l, e), e;
      }, c = this && this.__param || function(f, g) {
        return function(l, s) {
          g(l, s, f);
        };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.OscLinkService = void 0;
      const a = n(2585);
      let d = i.OscLinkService = class {
        constructor(f) {
          this._bufferService = f, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
        }
        registerLink(f) {
          const g = this._bufferService.buffer;
          if (f.id === void 0) {
            const h = g.addMarker(g.ybase + g.y), v = { data: f, id: this._nextId++, lines: [h] };
            return h.onDispose(() => this._removeMarkerFromLink(v, h)), this._dataByLinkId.set(v.id, v), v.id;
          }
          const l = f, s = this._getEntryIdKey(l), r = this._entriesWithId.get(s);
          if (r)
            return this.addLineToLink(r.id, g.ybase + g.y), r.id;
          const t = g.addMarker(g.ybase + g.y), e = { id: this._nextId++, key: this._getEntryIdKey(l), data: l, lines: [t] };
          return t.onDispose(() => this._removeMarkerFromLink(e, t)), this._entriesWithId.set(e.key, e), this._dataByLinkId.set(e.id, e), e.id;
        }
        addLineToLink(f, g) {
          const l = this._dataByLinkId.get(f);
          if (l && l.lines.every((s) => s.line !== g)) {
            const s = this._bufferService.buffer.addMarker(g);
            l.lines.push(s), s.onDispose(() => this._removeMarkerFromLink(l, s));
          }
        }
        getLinkData(f) {
          var g;
          return (g = this._dataByLinkId.get(f)) == null ? void 0 : g.data;
        }
        _getEntryIdKey(f) {
          return `${f.id};;${f.uri}`;
        }
        _removeMarkerFromLink(f, g) {
          const l = f.lines.indexOf(g);
          l !== -1 && (f.lines.splice(l, 1), f.lines.length === 0 && (f.data.id !== void 0 && this._entriesWithId.delete(f.key), this._dataByLinkId.delete(f.id)));
        }
      };
      i.OscLinkService = d = o([c(0, a.IBufferService)], d);
    }, 8343: (k, i) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.createDecorator = i.getServiceDependencies = i.serviceRegistry = void 0;
      const n = "di$target", o = "di$dependencies";
      i.serviceRegistry = /* @__PURE__ */ new Map(), i.getServiceDependencies = function(c) {
        return c[o] || [];
      }, i.createDecorator = function(c) {
        if (i.serviceRegistry.has(c))
          return i.serviceRegistry.get(c);
        const a = function(d, f, g) {
          if (arguments.length !== 3)
            throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
          (function(l, s, r) {
            s[n] === s ? s[o].push({ id: l, index: r }) : (s[o] = [{ id: l, index: r }], s[n] = s);
          })(a, d, g);
        };
        return a.toString = () => c, i.serviceRegistry.set(c, a), a;
      };
    }, 2585: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.IDecorationService = i.IUnicodeService = i.IOscLinkService = i.IOptionsService = i.ILogService = i.LogLevelEnum = i.IInstantiationService = i.ICharsetService = i.ICoreService = i.ICoreMouseService = i.IBufferService = void 0;
      const o = n(8343);
      var c;
      i.IBufferService = (0, o.createDecorator)("BufferService"), i.ICoreMouseService = (0, o.createDecorator)("CoreMouseService"), i.ICoreService = (0, o.createDecorator)("CoreService"), i.ICharsetService = (0, o.createDecorator)("CharsetService"), i.IInstantiationService = (0, o.createDecorator)("InstantiationService"), function(a) {
        a[a.TRACE = 0] = "TRACE", a[a.DEBUG = 1] = "DEBUG", a[a.INFO = 2] = "INFO", a[a.WARN = 3] = "WARN", a[a.ERROR = 4] = "ERROR", a[a.OFF = 5] = "OFF";
      }(c || (i.LogLevelEnum = c = {})), i.ILogService = (0, o.createDecorator)("LogService"), i.IOptionsService = (0, o.createDecorator)("OptionsService"), i.IOscLinkService = (0, o.createDecorator)("OscLinkService"), i.IUnicodeService = (0, o.createDecorator)("UnicodeService"), i.IDecorationService = (0, o.createDecorator)("DecorationService");
    }, 1480: (k, i, n) => {
      Object.defineProperty(i, "__esModule", { value: !0 }), i.UnicodeService = void 0;
      const o = n(8460), c = n(225);
      class a {
        static extractShouldJoin(f) {
          return (1 & f) != 0;
        }
        static extractWidth(f) {
          return f >> 1 & 3;
        }
        static extractCharKind(f) {
          return f >> 3;
        }
        static createPropertyValue(f, g, l = !1) {
          return (16777215 & f) << 3 | (3 & g) << 1 | (l ? 1 : 0);
        }
        constructor() {
          this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new o.EventEmitter(), this.onChange = this._onChange.event;
          const f = new c.UnicodeV6();
          this.register(f), this._active = f.version, this._activeProvider = f;
        }
        dispose() {
          this._onChange.dispose();
        }
        get versions() {
          return Object.keys(this._providers);
        }
        get activeVersion() {
          return this._active;
        }
        set activeVersion(f) {
          if (!this._providers[f])
            throw new Error(`unknown Unicode version "${f}"`);
          this._active = f, this._activeProvider = this._providers[f], this._onChange.fire(f);
        }
        register(f) {
          this._providers[f.version] = f;
        }
        wcwidth(f) {
          return this._activeProvider.wcwidth(f);
        }
        getStringCellWidth(f) {
          let g = 0, l = 0;
          const s = f.length;
          for (let r = 0; r < s; ++r) {
            let t = f.charCodeAt(r);
            if (55296 <= t && t <= 56319) {
              if (++r >= s)
                return g + this.wcwidth(t);
              const v = f.charCodeAt(r);
              56320 <= v && v <= 57343 ? t = 1024 * (t - 55296) + v - 56320 + 65536 : g += this.wcwidth(v);
            }
            const e = this.charProperties(t, l);
            let h = a.extractWidth(e);
            a.extractShouldJoin(e) && (h -= a.extractWidth(l)), g += h, l = e;
          }
          return g;
        }
        charProperties(f, g) {
          return this._activeProvider.charProperties(f, g);
        }
      }
      i.UnicodeService = a;
    } }, y = {};
    function R(k) {
      var i = y[k];
      if (i !== void 0)
        return i.exports;
      var n = y[k] = { exports: {} };
      return S[k].call(n.exports, n, n.exports, R), n.exports;
    }
    var M = {};
    return (() => {
      var k = M;
      Object.defineProperty(k, "__esModule", { value: !0 }), k.Terminal = void 0;
      const i = R(9042), n = R(3236), o = R(844), c = R(5741), a = R(8285), d = R(7975), f = R(7090), g = ["cols", "rows"];
      class l extends o.Disposable {
        constructor(r) {
          super(), this._core = this.register(new n.Terminal(r)), this._addonManager = this.register(new c.AddonManager()), this._publicOptions = { ...this._core.options };
          const t = (h) => this._core.options[h], e = (h, v) => {
            this._checkReadonlyOptions(h), this._core.options[h] = v;
          };
          for (const h in this._core.options) {
            const v = { get: t.bind(this, h), set: e.bind(this, h) };
            Object.defineProperty(this._publicOptions, h, v);
          }
        }
        _checkReadonlyOptions(r) {
          if (g.includes(r))
            throw new Error(`Option "${r}" can only be set in the constructor`);
        }
        _checkProposedApi() {
          if (!this._core.optionsService.rawOptions.allowProposedApi)
            throw new Error("You must set the allowProposedApi option to true to use proposed API");
        }
        get onBell() {
          return this._core.onBell;
        }
        get onBinary() {
          return this._core.onBinary;
        }
        get onCursorMove() {
          return this._core.onCursorMove;
        }
        get onData() {
          return this._core.onData;
        }
        get onKey() {
          return this._core.onKey;
        }
        get onLineFeed() {
          return this._core.onLineFeed;
        }
        get onRender() {
          return this._core.onRender;
        }
        get onResize() {
          return this._core.onResize;
        }
        get onScroll() {
          return this._core.onScroll;
        }
        get onSelectionChange() {
          return this._core.onSelectionChange;
        }
        get onTitleChange() {
          return this._core.onTitleChange;
        }
        get onWriteParsed() {
          return this._core.onWriteParsed;
        }
        get element() {
          return this._core.element;
        }
        get parser() {
          return this._parser || (this._parser = new d.ParserApi(this._core)), this._parser;
        }
        get unicode() {
          return this._checkProposedApi(), new f.UnicodeApi(this._core);
        }
        get textarea() {
          return this._core.textarea;
        }
        get rows() {
          return this._core.rows;
        }
        get cols() {
          return this._core.cols;
        }
        get buffer() {
          return this._buffer || (this._buffer = this.register(new a.BufferNamespaceApi(this._core))), this._buffer;
        }
        get markers() {
          return this._checkProposedApi(), this._core.markers;
        }
        get modes() {
          const r = this._core.coreService.decPrivateModes;
          let t = "none";
          switch (this._core.coreMouseService.activeProtocol) {
            case "X10":
              t = "x10";
              break;
            case "VT200":
              t = "vt200";
              break;
            case "DRAG":
              t = "drag";
              break;
            case "ANY":
              t = "any";
          }
          return { applicationCursorKeysMode: r.applicationCursorKeys, applicationKeypadMode: r.applicationKeypad, bracketedPasteMode: r.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t, originMode: r.origin, reverseWraparoundMode: r.reverseWraparound, sendFocusMode: r.sendFocus, wraparoundMode: r.wraparound };
        }
        get options() {
          return this._publicOptions;
        }
        set options(r) {
          for (const t in r)
            this._publicOptions[t] = r[t];
        }
        blur() {
          this._core.blur();
        }
        focus() {
          this._core.focus();
        }
        input(r, t = !0) {
          this._core.input(r, t);
        }
        resize(r, t) {
          this._verifyIntegers(r, t), this._core.resize(r, t);
        }
        open(r) {
          this._core.open(r);
        }
        attachCustomKeyEventHandler(r) {
          this._core.attachCustomKeyEventHandler(r);
        }
        attachCustomWheelEventHandler(r) {
          this._core.attachCustomWheelEventHandler(r);
        }
        registerLinkProvider(r) {
          return this._core.registerLinkProvider(r);
        }
        registerCharacterJoiner(r) {
          return this._checkProposedApi(), this._core.registerCharacterJoiner(r);
        }
        deregisterCharacterJoiner(r) {
          this._checkProposedApi(), this._core.deregisterCharacterJoiner(r);
        }
        registerMarker(r = 0) {
          return this._verifyIntegers(r), this._core.registerMarker(r);
        }
        registerDecoration(r) {
          return this._checkProposedApi(), this._verifyPositiveIntegers(r.x ?? 0, r.width ?? 0, r.height ?? 0), this._core.registerDecoration(r);
        }
        hasSelection() {
          return this._core.hasSelection();
        }
        select(r, t, e) {
          this._verifyIntegers(r, t, e), this._core.select(r, t, e);
        }
        getSelection() {
          return this._core.getSelection();
        }
        getSelectionPosition() {
          return this._core.getSelectionPosition();
        }
        clearSelection() {
          this._core.clearSelection();
        }
        selectAll() {
          this._core.selectAll();
        }
        selectLines(r, t) {
          this._verifyIntegers(r, t), this._core.selectLines(r, t);
        }
        dispose() {
          super.dispose();
        }
        scrollLines(r) {
          this._verifyIntegers(r), this._core.scrollLines(r);
        }
        scrollPages(r) {
          this._verifyIntegers(r), this._core.scrollPages(r);
        }
        scrollToTop() {
          this._core.scrollToTop();
        }
        scrollToBottom() {
          this._core.scrollToBottom();
        }
        scrollToLine(r) {
          this._verifyIntegers(r), this._core.scrollToLine(r);
        }
        clear() {
          this._core.clear();
        }
        write(r, t) {
          this._core.write(r, t);
        }
        writeln(r, t) {
          this._core.write(r), this._core.write(`\r
`, t);
        }
        paste(r) {
          this._core.paste(r);
        }
        refresh(r, t) {
          this._verifyIntegers(r, t), this._core.refresh(r, t);
        }
        reset() {
          this._core.reset();
        }
        clearTextureAtlas() {
          this._core.clearTextureAtlas();
        }
        loadAddon(r) {
          this._addonManager.loadAddon(this, r);
        }
        static get strings() {
          return i;
        }
        _verifyIntegers(...r) {
          for (const t of r)
            if (t === 1 / 0 || isNaN(t) || t % 1 != 0)
              throw new Error("This API only accepts integers");
        }
        _verifyPositiveIntegers(...r) {
          for (const t of r)
            if (t && (t === 1 / 0 || isNaN(t) || t % 1 != 0 || t < 0))
              throw new Error("This API only accepts positive integers");
        }
      }
      k.Terminal = l;
    })(), M;
  })());
})(Ut);
var Ts = Ut.exports;
const Ms = /* @__PURE__ */ Nt(Ts);
var zt = { exports: {} };
(function(E, m) {
  (function(S, y) {
    E.exports = y();
  })(self, () => (() => {
    var S = {};
    return (() => {
      var y = S;
      Object.defineProperty(y, "__esModule", { value: !0 }), y.FitAddon = void 0, y.FitAddon = class {
        activate(R) {
          this._terminal = R;
        }
        dispose() {
        }
        fit() {
          const R = this.proposeDimensions();
          if (!R || !this._terminal || isNaN(R.cols) || isNaN(R.rows))
            return;
          const M = this._terminal._core;
          this._terminal.rows === R.rows && this._terminal.cols === R.cols || (M._renderService.clear(), this._terminal.resize(R.cols, R.rows));
        }
        proposeDimensions() {
          if (!this._terminal || !this._terminal.element || !this._terminal.element.parentElement)
            return;
          const R = this._terminal._core, M = R._renderService.dimensions;
          if (M.css.cell.width === 0 || M.css.cell.height === 0)
            return;
          const k = this._terminal.options.scrollback === 0 ? 0 : R.viewport.scrollBarWidth, i = window.getComputedStyle(this._terminal.element.parentElement), n = parseInt(i.getPropertyValue("height")), o = Math.max(0, parseInt(i.getPropertyValue("width"))), c = window.getComputedStyle(this._terminal.element), a = n - (parseInt(c.getPropertyValue("padding-top")) + parseInt(c.getPropertyValue("padding-bottom"))), d = o - (parseInt(c.getPropertyValue("padding-right")) + parseInt(c.getPropertyValue("padding-left"))) - k;
          return { cols: Math.max(2, Math.floor(d / M.css.cell.width)), rows: Math.max(1, Math.floor(a / M.css.cell.height)) };
        }
      };
    })(), S;
  })());
})(zt);
var xs = zt.exports;
const Os = /* @__PURE__ */ Nt(xs);
const {
  SvelteComponent: Ps,
  append: Dt,
  assign: Is,
  attr: Rt,
  binding_callbacks: Hs,
  check_outros: Fs,
  create_component: Qe,
  destroy_component: et,
  detach: Ye,
  element: At,
  flush: ae,
  get_spread_object: Ws,
  get_spread_update: Ns,
  group_outros: Us,
  init: js,
  insert: Ze,
  mount_component: tt,
  safe_not_equal: zs,
  set_data: qs,
  space: Bt,
  text: Ks,
  transition_in: Ee,
  transition_out: Oe
} = window.__gradio__svelte__internal, { onMount: Vs } = window.__gradio__svelte__internal;
function Tt(E) {
  let m, S;
  const y = [
    { autoscroll: (
      /*gradio*/
      E[0].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      E[0].i18n
    ) },
    /*loading_status*/
    E[9]
  ];
  let R = {};
  for (let M = 0; M < y.length; M += 1)
    R = Is(R, y[M]);
  return m = new Bs({ props: R }), {
    c() {
      Qe(m.$$.fragment);
    },
    m(M, k) {
      tt(m, M, k), S = !0;
    },
    p(M, k) {
      const i = k & /*gradio, loading_status*/
      513 ? Ns(y, [
        k & /*gradio*/
        1 && { autoscroll: (
          /*gradio*/
          M[0].autoscroll
        ) },
        k & /*gradio*/
        1 && { i18n: (
          /*gradio*/
          M[0].i18n
        ) },
        k & /*loading_status*/
        512 && Ws(
          /*loading_status*/
          M[9]
        )
      ]) : {};
      m.$set(i);
    },
    i(M) {
      S || (Ee(m.$$.fragment, M), S = !0);
    },
    o(M) {
      Oe(m.$$.fragment, M), S = !1;
    },
    d(M) {
      et(m, M);
    }
  };
}
function Gs(E) {
  let m;
  return {
    c() {
      m = Ks(
        /*label*/
        E[1]
      );
    },
    m(S, y) {
      Ze(S, m, y);
    },
    p(S, y) {
      y & /*label*/
      2 && qs(
        m,
        /*label*/
        S[1]
      );
    },
    d(S) {
      S && Ye(m);
    }
  };
}
function Xs(E) {
  let m, S, y, R, M, k, i = (
    /*loading_status*/
    E[9] && Tt(E)
  );
  return y = new zi({
    props: {
      show_label: (
        /*show_label*/
        E[6]
      ),
      info: void 0,
      $$slots: { default: [Gs] },
      $$scope: { ctx: E }
    }
  }), {
    c() {
      i && i.c(), m = Bt(), S = At("div"), Qe(y.$$.fragment), R = Bt(), M = At("div"), Rt(M, "class", "svelte-1jxdgz3"), Rt(S, "class", "svelte-1jxdgz3");
    },
    m(n, o) {
      i && i.m(n, o), Ze(n, m, o), Ze(n, S, o), tt(y, S, null), Dt(S, R), Dt(S, M), E[14](M), k = !0;
    },
    p(n, o) {
      /*loading_status*/
      n[9] ? i ? (i.p(n, o), o & /*loading_status*/
      512 && Ee(i, 1)) : (i = Tt(n), i.c(), Ee(i, 1), i.m(m.parentNode, m)) : i && (Us(), Oe(i, 1, 1, () => {
        i = null;
      }), Fs());
      const c = {};
      o & /*show_label*/
      64 && (c.show_label = /*show_label*/
      n[6]), o & /*$$scope, label*/
      65538 && (c.$$scope = { dirty: o, ctx: n }), y.$set(c);
    },
    i(n) {
      k || (Ee(i), Ee(y.$$.fragment, n), k = !0);
    },
    o(n) {
      Oe(i), Oe(y.$$.fragment, n), k = !1;
    },
    d(n) {
      n && (Ye(m), Ye(S)), i && i.d(n), et(y), E[14](null);
    }
  };
}
function Js(E) {
  let m, S;
  return m = new oi({
    props: {
      visible: (
        /*visible*/
        E[5]
      ),
      elem_id: (
        /*elem_id*/
        E[3]
      ),
      scale: (
        /*scale*/
        E[7]
      ),
      min_width: (
        /*min_width*/
        E[8]
      ),
      elem_classes: [
        .../*elem_classes*/
        E[4],
        /*dark*/
        E[2] ? "dark" : ""
      ],
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [Xs] },
      $$scope: { ctx: E }
    }
  }), {
    c() {
      Qe(m.$$.fragment);
    },
    m(y, R) {
      tt(m, y, R), S = !0;
    },
    p(y, [R]) {
      const M = {};
      R & /*visible*/
      32 && (M.visible = /*visible*/
      y[5]), R & /*elem_id*/
      8 && (M.elem_id = /*elem_id*/
      y[3]), R & /*scale*/
      128 && (M.scale = /*scale*/
      y[7]), R & /*min_width*/
      256 && (M.min_width = /*min_width*/
      y[8]), R & /*elem_classes, dark*/
      20 && (M.elem_classes = [
        .../*elem_classes*/
        y[4],
        /*dark*/
        y[2] ? "dark" : ""
      ]), R & /*$$scope, termNode, show_label, label, gradio, loading_status*/
      67139 && (M.$$scope = { dirty: R, ctx: y }), m.$set(M);
    },
    i(y) {
      S || (Ee(m.$$.fragment, y), S = !0);
    },
    o(y) {
      Oe(m.$$.fragment, y), S = !1;
    },
    d(y) {
      et(m, y);
    }
  };
}
function $s(E, m, S) {
  let y, { gradio: R } = m, { log_file: M = "" } = m, { label: k = `log of ${M}` } = m, { dark: i = !1 } = m, { elem_id: n = "" } = m, { elem_classes: o = ["terminal-block"] } = m, { visible: c = !0 } = m, { value: a = "" } = m, { show_label: d } = m, { scale: f = null } = m, { min_width: g = void 0 } = m, { loading_status: l = void 0 } = m, s, r;
  Vs(() => {
    S(13, s = new Ms.Terminal({
      // allowTransparency: true,
      theme: y
    })), s.open(r);
    const e = new Os.FitAddon();
    s.loadAddon(e), setTimeout(
      () => {
        e.fit();
      },
      300
    );
  });
  function t(e) {
    Hs[e ? "unshift" : "push"](() => {
      r = e, S(10, r);
    });
  }
  return E.$$set = (e) => {
    "gradio" in e && S(0, R = e.gradio), "log_file" in e && S(11, M = e.log_file), "label" in e && S(1, k = e.label), "dark" in e && S(2, i = e.dark), "elem_id" in e && S(3, n = e.elem_id), "elem_classes" in e && S(4, o = e.elem_classes), "visible" in e && S(5, c = e.visible), "value" in e && S(12, a = e.value), "show_label" in e && S(6, d = e.show_label), "scale" in e && S(7, f = e.scale), "min_width" in e && S(8, g = e.min_width), "loading_status" in e && S(9, l = e.loading_status);
  }, E.$$.update = () => {
    E.$$.dirty & /*dark*/
    4 && (y = i ? {
      foreground: "white",
      background: "#1F2937"
    } : {
      foreground: "#1F2937",
      background: "white",
      selectionBackground: "#e5e7eb"
    }), E.$$.dirty & /*term, value*/
    12288 && s && a && a.trim() !== "" && s.write(a.replace(/\n/g, `
\r`));
  }, [
    R,
    k,
    i,
    n,
    o,
    c,
    d,
    f,
    g,
    l,
    r,
    M,
    a,
    s,
    t
  ];
}
class Ys extends Ps {
  constructor(m) {
    super(), js(this, m, $s, Js, zs, {
      gradio: 0,
      log_file: 11,
      label: 1,
      dark: 2,
      elem_id: 3,
      elem_classes: 4,
      visible: 5,
      value: 12,
      show_label: 6,
      scale: 7,
      min_width: 8,
      loading_status: 9
    });
  }
  get gradio() {
    return this.$$.ctx[0];
  }
  set gradio(m) {
    this.$$set({ gradio: m }), ae();
  }
  get log_file() {
    return this.$$.ctx[11];
  }
  set log_file(m) {
    this.$$set({ log_file: m }), ae();
  }
  get label() {
    return this.$$.ctx[1];
  }
  set label(m) {
    this.$$set({ label: m }), ae();
  }
  get dark() {
    return this.$$.ctx[2];
  }
  set dark(m) {
    this.$$set({ dark: m }), ae();
  }
  get elem_id() {
    return this.$$.ctx[3];
  }
  set elem_id(m) {
    this.$$set({ elem_id: m }), ae();
  }
  get elem_classes() {
    return this.$$.ctx[4];
  }
  set elem_classes(m) {
    this.$$set({ elem_classes: m }), ae();
  }
  get visible() {
    return this.$$.ctx[5];
  }
  set visible(m) {
    this.$$set({ visible: m }), ae();
  }
  get value() {
    return this.$$.ctx[12];
  }
  set value(m) {
    this.$$set({ value: m }), ae();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(m) {
    this.$$set({ show_label: m }), ae();
  }
  get scale() {
    return this.$$.ctx[7];
  }
  set scale(m) {
    this.$$set({ scale: m }), ae();
  }
  get min_width() {
    return this.$$.ctx[8];
  }
  set min_width(m) {
    this.$$set({ min_width: m }), ae();
  }
  get loading_status() {
    return this.$$.ctx[9];
  }
  set loading_status(m) {
    this.$$set({ loading_status: m }), ae();
  }
}
export {
  Ys as default
};
