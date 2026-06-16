/* @ds-bundle: {"format":3,"namespace":"VireDesignSystem_068680","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ProgressRing","sourcePath":"components/data-display/ProgressRing.jsx"},{"name":"StatTile","sourcePath":"components/data-display/StatTile.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"app/extras.jsx":"062ca16e8f1a","app/history.jsx":"5be3f1e24d89","app/i18n.jsx":"8a728eee63b8","app/liike.jsx":"b7ee749419ae","app/onboarding.jsx":"6303ee3a7e67","app/profiili.jsx":"39fec291e8ff","app/ravinto.jsx":"9129241007dd","app/settings.jsx":"9054a0f32a44","app/shell.jsx":"25e6a0de456c","app/store.jsx":"e3cd1233f149","app/today.jsx":"7fd2af5cd01f","components/data-display/Avatar.jsx":"45c638631b6a","components/data-display/Badge.jsx":"ba66048983d4","components/data-display/Card.jsx":"27fbcbd15322","components/data-display/ProgressRing.jsx":"c76ba3c7153b","components/data-display/StatTile.jsx":"8cb73e9b51f6","components/forms/Button.jsx":"7e0fdff0c34b","components/forms/Checkbox.jsx":"a4f5ba11986e","components/forms/IconButton.jsx":"b4baaca12a9f","components/forms/Input.jsx":"8a5d3e58dae1","components/forms/SegmentedControl.jsx":"278f65f2e07f","components/forms/Switch.jsx":"b7b4c19eed04","ui_kits/mobile/LiikeModule.jsx":"02d798be60e0","ui_kits/mobile/NutritionScreen.jsx":"6ba80dcce3dc","ui_kits/mobile/ProfileScreen.jsx":"171df5c70fbe","ui_kits/mobile/RavintoModule.jsx":"0c22d89c2093","ui_kits/mobile/TodayScreen.jsx":"9824e4a1f2e6","ui_kits/mobile/kit-lib.jsx":"9017c1708a8d","ui_kits/web/OverviewView.jsx":"ee2dd27bb407","ui_kits/web/kit-lib.jsx":"84f49f224d52","ui_kits/web/views.jsx":"56363e24a330"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VireDesignSystem_068680 = window.VireDesignSystem_068680 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// app/extras.jsx
try { (() => {
/* Vire-app — lisämoduulit: lisenssin vahvistus, viestit, tietojen vienti. */

/* ============================ Lisenssin vahvistus ============================ */
function LicenseView({
  store,
  t,
  lang,
  onDone
}) {
  const {
    Card,
    Button,
    Input
  } = window.VS;
  const {
    L
  } = window;
  const [step, setStep] = React.useState("email");
  const [email, setEmail] = React.useState(store.state.licenseEmail || store.state.profile.email || "");
  const [code, setCode] = React.useState("");
  const [gen, setGen] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [resent, setResent] = React.useState(false);
  const makeCode = () => String(Math.floor(100000 + Math.random() * 900000));
  const send = () => {
    const c = makeCode();
    setGen(c);
    setStep("code");
    setErr(false);
    setCode("");
  };
  const resend = () => {
    const c = makeCode();
    setGen(c);
    setResent(true);
    setErr(false);
    setTimeout(() => setResent(false), 2200);
  };
  const verify = () => {
    if (code.trim() === gen) onDone(email.trim());else setErr(true);
  };
  const emailValid = /\S+@\S+\.\S+/.test(email);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "28px 18px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      padding: "32px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 18,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: step === "email" ? "shield-check" : "mail-check",
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, t("lic_title")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, t("lic_sub")))), step === "email" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t("lic_email_lbl"),
    type: "email",
    placeholder: t("lic_email_ph"),
    value: email,
    onChange: e => setEmail(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    disabled: !emailValid,
    onClick: send,
    iconRight: /*#__PURE__*/React.createElement(L, {
      name: "arrow-right",
      size: 18
    })
  }, t("lic_send_code"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      textAlign: "center",
      lineHeight: 1.5
    }
  }, t("lic_code_sent"), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "10px 13px",
      borderRadius: 12,
      background: "var(--brand-50)",
      color: "var(--brand-700)",
      fontSize: 13,
      fontWeight: 600,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "info",
    size: 16
  }), " ", t("lic_demo"), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "0.12em"
    }
  }, gen)), /*#__PURE__*/React.createElement("input", {
    inputMode: "numeric",
    maxLength: 6,
    value: code,
    autoFocus: true,
    onChange: e => {
      setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
      setErr(false);
    },
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      width: "100%",
      boxSizing: "border-box",
      textAlign: "center",
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "0.42em",
      padding: "14px 0 14px 0.42em",
      borderRadius: 14,
      fontFamily: "var(--font-mono, monospace)",
      border: "1.5px solid " + (err ? "var(--coral-500)" : "var(--border-default)"),
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }), err ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--coral-700)",
      fontWeight: 700,
      textAlign: "center"
    }
  }, t("lic_bad")) : null, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    disabled: code.length < 6,
    onClick: verify,
    iconRight: /*#__PURE__*/React.createElement(L, {
      name: "check",
      size: 18
    })
  }, t("lic_verify")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep("email"),
    style: linkBtn
  }, t("lic_change")), /*#__PURE__*/React.createElement("button", {
    onClick: resend,
    style: linkBtn
  }, resent ? t("lic_resent") : t("lic_resend"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 16
    }
  }, "Vire \xB7 ", t("version"), " ", window.APP_VERSION)));
}

/* ================================== Viestit ================================== */
function MessagesView({
  store,
  t,
  lang,
  onBack,
  onMenu
}) {
  const {
    Card,
    Button,
    Avatar
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const [text, setText] = React.useState("");
  const msgs = store.state.messages || [];
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (endRef.current) endRef.current.parentNode.scrollTop = endRef.current.offsetTop;
  }, [msgs.length]);
  const send = () => {
    const v = text.trim();
    if (!v) return;
    store.sendMessage(v);
    setText("");
  };
  const fmtTime = ts => new Date(ts).toLocaleTimeString(window.localeFor(lang), {
    hour: "2-digit",
    minute: "2-digit"
  });
  const bubbles = [{
    id: "w",
    from: "coach",
    text: t("msg_welcome"),
    t: null
  }].concat(msgs.map(m => ({
    ...m,
    text: m.text === "__auto__" ? t("msg_auto") : m.text
  })));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("msg_title"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "12px 14px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Vire",
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: 13,
      height: 13,
      borderRadius: 999,
      background: "var(--green-500)",
      border: "2px solid var(--surface-card)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("msg_coach")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, t("msg_online")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingBottom: 6
    }
  }, bubbles.map((m, i) => {
    const me = m.from === "me";
    return /*#__PURE__*/React.createElement("div", {
      key: m.id || i,
      style: {
        display: "flex",
        justifyContent: me ? "flex-end" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "82%",
        display: "flex",
        flexDirection: "column",
        alignItems: me ? "flex-end" : "flex-start",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "11px 14px",
        borderRadius: 18,
        fontSize: 14.5,
        lineHeight: 1.45,
        borderBottomRightRadius: me ? 5 : 18,
        borderBottomLeftRadius: me ? 18 : 5,
        background: me ? "var(--brand-500)" : "var(--surface-card)",
        color: me ? "#fff" : "var(--text-primary)",
        border: me ? "none" : "1px solid var(--border-subtle)",
        boxShadow: me ? "0 4px 12px rgba(142,114,118,0.28)" : "var(--shadow-xs)"
      }
    }, m.text), m.t ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "var(--text-muted)",
        padding: "0 6px"
      }
    }, fmtTime(m.t)) : null));
  }), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-end",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    rows: 1,
    placeholder: t("msg_ph"),
    onKeyDown: e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    style: {
      flex: 1,
      boxSizing: "border-box",
      resize: "none",
      borderRadius: 22,
      border: "1px solid var(--border-default)",
      padding: "12px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--surface-card)",
      lineHeight: 1.4,
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: !text.trim(),
    "aria-label": t("msg_send"),
    style: {
      width: 46,
      height: 46,
      borderRadius: 999,
      border: "none",
      flexShrink: 0,
      cursor: text.trim() ? "pointer" : "default",
      background: text.trim() ? "var(--brand-500)" : "var(--ink-200)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      boxShadow: text.trim() ? "var(--shadow-brand)" : "none",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "arrow-up",
    size: 21,
    color: "#fff",
    strokeWidth: 2.4
  })))));
}

/* =============================== Tietojen vienti ============================== */
function buildCSV(store, lang) {
  const t = window.makeT(lang);
  const moodLabel = v => {
    const m = (window.MOODS || []).find(x => x.value === v);
    return m ? t(m.key) : "";
  };
  const head = ["Päivä", "Tyyppi", "Kuvaus", "Energia (kcal)", "Kesto (min)", "Askeleet", "Fiilis"];
  const esc = v => {
    const s = String(v == null ? "" : v);
    return /[",;\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const rows = [head];
  const keys = Object.keys(store.state.days).sort();
  keys.forEach(k => {
    const d = store.state.days[k];
    (d.meals || []).forEach(m => rows.push([k, "Ateria", m.text || "", m.kcal || "", "", "", ""]));
    (d.workouts || []).forEach(w => rows.push([k, "Harjoitus", w.name || "", w.kcal || "", w.mins || "", "", ""]));
    if (d.steps || d.mood) rows.push([k, "Päivä", "", "", "", d.steps || "", moodLabel(d.mood)]);
  });
  return "\uFEFF" + rows.map(r => r.map(esc).join(";")).join("\r\n");
}
function downloadBlob(content, filename, type) {
  const blob = new Blob([content], {
    type
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 800);
}
function buildSummaryHTML(store, lang) {
  const t = window.makeT(lang);
  const p = store.state.profile;
  const keys = Object.keys(store.state.days).sort();
  let totalKcalIn = 0,
    totalMin = 0,
    totalSteps = 0,
    meals = 0,
    workouts = 0;
  const rowsHtml = keys.map(k => {
    const d = store.state.days[k];
    const kc = (d.meals || []).reduce((a, m) => a + (Number(m.kcal) || 0), 0);
    const mn = (d.workouts || []).reduce((a, w) => a + (Number(w.mins) || 0), 0);
    totalKcalIn += kc;
    totalMin += mn;
    totalSteps += d.steps || 0;
    meals += (d.meals || []).length;
    workouts += (d.workouts || []).length;
    const mealList = (d.meals || []).map(m => m.text).filter(Boolean).join(", ");
    return `<tr><td>${k}</td><td>${(d.meals || []).length}</td><td style="color:#5E657E">${mealList || "—"}</td><td>${kc || "—"}</td><td>${(d.workouts || []).length}</td><td>${mn || "—"}</td><td>${d.steps || "—"}</td></tr>`;
  }).join("");
  const teal = "#75595D";
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>Vire — ${t("export_title")}</title>
  <style>
    *{box-sizing:border-box} body{font-family:-apple-system,'Plus Jakarta Sans',Segoe UI,Roboto,sans-serif;color:#272B3D;margin:0;padding:40px;background:#fff}
    h1{font-size:26px;margin:0 0 4px} .sub{color:#5E657E;margin:0 0 24px;font-size:14px}
    .brand{display:flex;align-items:center;gap:10px;margin-bottom:26px}
    .dot{width:30px;height:30px;border-radius:9px;background:${teal};display:grid;place-items:center;color:#fff;font-weight:800}
    .cards{display:flex;gap:12px;margin:0 0 26px;flex-wrap:wrap}
    .c{flex:1;min-width:120px;border:1px solid #E2E5EE;border-radius:14px;padding:14px 16px}
    .c .n{font-size:24px;font-weight:800} .c .l{font-size:12px;color:#5E657E;font-weight:600}
    table{width:100%;border-collapse:collapse;font-size:13px} th,td{text-align:left;padding:9px 10px;border-bottom:1px solid #EDEFF4}
    th{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#818AA1}
    tfoot td{font-weight:800;border-top:2px solid #C8CCD9}
    @media print{body{padding:18px}}
    .vtoolbar{position:fixed;top:0;left:0;right:0;display:flex;gap:10px;justify-content:flex-end;align-items:center;padding:12px 16px;background:rgba(248,249,252,0.92);backdrop-filter:blur(10px);border-bottom:1px solid #E7E0E1;z-index:10}
    .vtoolbar button{font-family:inherit;font-size:14px;font-weight:700;padding:9px 16px;border-radius:12px;border:1px solid #D0C8CA;background:#fff;color:#3B3439;cursor:pointer}
    .vtoolbar button.prim{background:#BCA5A8;border-color:#BCA5A8;color:#3D2F31}
    body{padding-top:72px}
    @media print{.no-print{display:none!important}body{padding-top:18px}}
  </style></head><body>
  <div class="vtoolbar no-print">
    <button onclick="window.close()">${t("export_close")}</button>
    <button class="prim" onclick="window.print()">${t("export_print")}</button>
  </div>
  <div class="brand"><div class="dot">V</div><div><div style="font-weight:800;font-size:18px">Vire</div></div></div>
  <h1>${t("export_title")}</h1>
  <p class="sub">${p.name ? p.name + " · " : ""}${window.longDateL(lang)}</p>
  <div class="cards">
    <div class="c"><div class="n">${meals}</div><div class="l">${t("st_meals")}</div></div>
    <div class="c"><div class="n">${workouts}</div><div class="l">${t("st_workouts")}</div></div>
    <div class="c"><div class="n">${totalMin}</div><div class="l">${t("activemin_label")}</div></div>
    <div class="c"><div class="n">${window.numFmt(lang, totalSteps)}</div><div class="l">${t("goal_steps")}</div></div>
  </div>
  <table><thead><tr><th>${t("nav_diary").split(" ")[0]}</th><th>${t("st_meals")}</th><th>${t("foodhist_recent")}</th><th>kcal</th><th>${t("workouts_label")}</th><th>min</th><th>${t("goal_steps")}</th></tr></thead>
  <tbody>${rowsHtml || `<tr><td colspan="7" style="text-align:center;color:#818AA1;padding:24px">${t("export_empty")}</td></tr>`}</tbody></table>
  <p style="margin-top:26px;color:#818AA1;font-size:11px">${t("export_note")}</p>
  </body></html>`;
}
function ExportView({
  store,
  t,
  lang,
  onBack,
  onMenu
}) {
  const {
    Card,
    Button
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const [done, setDone] = React.useState("");
  const hasData = Object.keys(store.state.days).length > 0;
  const exportCSV = () => {
    downloadBlob(buildCSV(store, lang), `vire-tiedot-${window.dateKey()}.csv`, "text/csv;charset=utf-8");
    setDone("csv");
    setTimeout(() => setDone(""), 2200);
  };
  const exportPDF = () => {
    const html = buildSummaryHTML(store, lang);
    const w = window.open("", "_blank");
    if (w) {
      w.document.write(html);
      w.document.close();
    } else {
      downloadBlob(html, `vire-koonti-${window.dateKey()}.html`, "text/html");
    }
    setDone("pdf");
    setTimeout(() => setDone(""), 2200);
  };
  const row = (icon, tint, label, sub, onClick, key) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: !hasData,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px",
      border: "none",
      textAlign: "left",
      background: "var(--surface-card)",
      borderRadius: 16,
      cursor: hasData ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-sm)",
      opacity: hasData ? 1 : 0.55,
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: tint + "22",
      color: tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      lineHeight: 1.4
    }
  }, sub)), done === key ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      color: "var(--green-700)",
      fontWeight: 700,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "check-circle-2",
    size: 17
  }), " ", t("export_done")) : /*#__PURE__*/React.createElement(L, {
    name: "download",
    size: 20,
    color: "var(--ink-400)"
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("export_title"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      margin: "-2px 4px 0",
      lineHeight: 1.45
    }
  }, t("export_sub")), !hasData ? /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, t("export_empty")) : null, row("file-spreadsheet", "#75595D", t("export_csv"), t("export_csv_s"), exportCSV, "csv"), row("file-text", "#C47E52", t("export_pdf"), t("export_pdf_s"), exportPDF, "pdf"), /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "shield",
    size: 20,
    color: "var(--brand-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("export_note")))));
}
const linkBtn = {
  border: "none",
  background: "transparent",
  color: "var(--brand-600)",
  fontWeight: 700,
  fontSize: 13.5,
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
  padding: 0
};
Object.assign(window, {
  LicenseView,
  MessagesView,
  ExportView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/extras.jsx", error: String((e && e.message) || e) }); }

// app/history.jsx
try { (() => {
/* Vire-app — historia: Treenihistoria & Ravintohistoria (vko / 6kk / vuosi)
   + fiilishistoria. Palkkikuvaajat ilman ulkoista kirjastoa. */

function BarChart({
  data,
  color,
  soft,
  height = 200,
  unit,
  lang
}) {
  const max = Math.max(1, ...data.map(d => d.value)) * 1.15;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: data.length > 8 ? 4 : 10,
      height,
      paddingTop: 8
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      height: "100%",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: `${d.value}`,
    style: {
      width: data.length > 8 ? "78%" : "62%",
      maxWidth: 40,
      height: `${d.value / max * 100}%`,
      minHeight: d.value > 0 ? 8 : 3,
      borderRadius: 7,
      background: d.value > 0 ? d.highlight ? color : soft : "var(--ink-100)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: data.length > 8 ? 9.5 : 11.5,
      fontWeight: d.highlight ? 700 : 600,
      color: d.highlight ? "var(--text-primary)" : "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, d.label))));
}
function aggregate(store, range, metricFn, lang) {
  const today = new Date();
  if (range === "week") {
    return window.weekDays(today).map((d, i) => ({
      label: window.DOW_SHORT[lang][i],
      value: metricFn(store.day(window.dateKey(d))),
      highlight: window.dateKey(d) === window.dateKey()
    }));
  }
  const months = range === "6mo" ? 6 : 12;
  const buckets = [];
  for (let k = months - 1; k >= 0; k--) {
    const d = new Date(today.getFullYear(), today.getMonth() - k, 1);
    const lbl = months === 12 ? window.MONTHS_SHORT[lang][d.getMonth()].charAt(0).toUpperCase() : window.MONTHS_SHORT[lang][d.getMonth()];
    buckets.push({
      y: d.getFullYear(),
      m: d.getMonth(),
      label: lbl,
      value: 0,
      highlight: k === 0
    });
  }
  Object.entries(store.state.days).forEach(([key, day]) => {
    const dt = window.parseKey(key);
    const b = buckets.find(x => x.y === dt.getFullYear() && x.m === dt.getMonth());
    if (b) b.value += metricFn(day);
  });
  return buckets;
}
function HistoryView({
  store,
  t,
  lang,
  kind,
  onBack,
  onMenu
}) {
  const {
    Card,
    SegmentedControl,
    Badge
  } = window.VS;
  const {
    PageHeader,
    SectionLabel
  } = window;
  const [range, setRange] = React.useState("week");
  const isTrain = kind === "train";
  const metricFn = isTrain ? d => d.workouts.reduce((a, w) => a + (Number(w.mins) || 0), 0) : d => d.meals.reduce((a, m) => a + (Number(m.kcal) || 0), 0);
  const countFn = isTrain ? d => d.workouts.length : d => d.meals.length;
  const data = aggregate(store, range, metricFn, lang);
  const total = data.reduce((a, d) => a + d.value, 0);
  const nonZero = data.filter(d => d.value > 0).length;
  const avg = nonZero ? Math.round(total / nonZero) : 0;
  const totalCount = Object.values(store.state.days).reduce((a, d) => a + countFn(d), 0);
  const color = isTrain ? "var(--sage-500)" : "var(--apricot-500)";
  const soft = isTrain ? "var(--sage-300)" : "var(--apricot-300)";
  const unit = isTrain ? t("u_min") : "kcal";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: isTrain ? t("trainhist_t") : t("foodhist_t"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    block: true,
    options: [{
      value: "week",
      label: t("range_week")
    }, {
      value: "6mo",
      label: t("range_6mo")
    }, {
      value: "year",
      label: t("range_year")
    }],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, isTrain ? t("activemin_label") : t("energy_label"), " (", t("total_label"), ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, window.numFmt(lang, total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, unit)), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, isTrain ? t("workouts_label") : t("st_meals")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, totalCount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, t("total_label")))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, isTrain ? t("activemin_label") : t("energy_label")), total > 0 ? /*#__PURE__*/React.createElement(Badge, {
    tone: isTrain ? "movement" : "nutrition",
    dot: true
  }, t("avg_label"), " ", window.numFmt(lang, avg), " ", unit) : null), total === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 0",
      textAlign: "center",
      color: "var(--text-muted)",
      fontSize: 14
    }
  }, t("no_history")) : /*#__PURE__*/React.createElement(BarChart, {
    data: data,
    color: color,
    soft: soft,
    unit: unit,
    lang: lang,
    height: 210
  })), !isTrain ? /*#__PURE__*/React.createElement(EatenList, {
    store: store,
    t: t,
    lang: lang
  }) : null, /*#__PURE__*/React.createElement(MoodHistory, {
    store: store,
    t: t,
    lang: lang
  })));
}
function EatenList({
  store,
  t,
  lang
}) {
  const {
    Card
  } = window.VS;
  const {
    L,
    SectionLabel
  } = window;
  const ATERIAT = window.ATERIAT || [];
  const slotInfo = id => ATERIAT.find(a => a.id === id);
  // kerää päivät joilla aterioita, uusin ensin
  const entries = Object.keys(store.state.days).sort().reverse().map(k => ({
    k,
    meals: store.state.days[k].meals || []
  })).filter(d => d.meals.length > 0).slice(0, 8);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("foodhist_recent")), entries.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, t("foodhist_none")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, entries.map(d => {
    const dt = window.parseKey(d.k);
    const isToday = d.k === window.dateKey();
    const dayKcal = d.meals.reduce((a, m) => a + (Number(m.kcal) || 0), 0);
    const label = isToday ? t("nav_today") : `${window.DOW_SHORT[lang][(dt.getDay() + 6) % 7]} ${window.shortDate(dt, lang)}`;
    return /*#__PURE__*/React.createElement(Card, {
      key: d.k,
      padding: "sm",
      style: {
        padding: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        padding: "0 2px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: isToday ? "var(--brand-700)" : "var(--text-primary)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: "var(--text-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, dayKcal ? `${window.numFmt(lang, dayKcal)} kcal` : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, d.meals.map((m, i) => {
      const si = slotInfo(m.slot);
      return /*#__PURE__*/React.createElement("div", {
        key: m.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          padding: "8px 2px",
          borderTop: i > 0 ? "1px solid var(--border-subtle)" : "none"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 30,
          height: 30,
          borderRadius: 9,
          background: "var(--apricot-100)",
          color: "var(--apricot-700)",
          display: "grid",
          placeItems: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(L, {
        name: si ? si.icon : "utensils",
        size: 16
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 1.3
        }
      }, m.text), si ? /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: "var(--text-muted)",
          fontWeight: 600
        }
      }, t(si.key)) : null), m.kcal ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "var(--text-secondary)",
          fontVariantNumeric: "tabular-nums"
        }
      }, m.kcal, " kcal") : null);
    })));
  })));
}
function MoodHistory({
  store,
  t,
  lang
}) {
  const {
    Card
  } = window.VS;
  const {
    L,
    SectionLabel
  } = window;
  const MOODS = window.MOODS;
  // viimeiset 14 päivää
  const today = new Date();
  const days = Array.from({
    length: 14
  }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (13 - i));
    return d;
  });
  const any = days.some(d => store.day(window.dateKey(d)).mood);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("mood_hist_t")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, !any ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      textAlign: "center",
      padding: "12px 0"
    }
  }, t("no_history")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      justifyContent: "space-between"
    }
  }, days.map((d, i) => {
    const mood = store.day(window.dateKey(d)).mood;
    const m = MOODS.find(x => x.value === mood);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1",
        maxWidth: 26,
        borderRadius: 8,
        display: "grid",
        placeItems: "center",
        background: m ? "color-mix(in srgb, " + m.color + " 18%, transparent)" : "var(--surface-sunken)"
      }
    }, m ? /*#__PURE__*/React.createElement(L, {
      name: m.icon,
      size: 14,
      color: m.color
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 99,
        background: "var(--ink-300)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8.5,
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, d.getDate()));
  }))));
}
Object.assign(window, {
  HistoryView,
  BarChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/history.jsx", error: String((e && e.message) || e) }); }

// app/i18n.jsx
try { (() => {
/* Vire-app — kielipaketit (FI / EN / SV) + t()-apuri.
   Avaimet ryhmittäin; jokaisen avaimen kolme kieltä vierekkäin. */

const STR = {
  /* yleiset */
  back: {
    fi: "Takaisin",
    en: "Back",
    sv: "Tillbaka"
  },
  cancel: {
    fi: "Peruuta",
    en: "Cancel",
    sv: "Avbryt"
  },
  save: {
    fi: "Tallenna",
    en: "Save",
    sv: "Spara"
  },
  add: {
    fi: "Lisää",
    en: "Add",
    sv: "Lägg till"
  },
  continue: {
    fi: "Jatka",
    en: "Continue",
    sv: "Fortsätt"
  },
  optional: {
    fi: "vapaaehtoinen",
    en: "optional",
    sv: "valfritt"
  },
  done: {
    fi: "Valmis",
    en: "Done",
    sv: "Klar"
  },
  /* brändi / splash */
  tagline: {
    fi: "Hyvässä vireessä, joka päivä",
    en: "In good shape, every day",
    sv: "I god form, varje dag"
  },
  /* navigaatio */
  nav_today: {
    fi: "Tänään",
    en: "Today",
    sv: "Idag"
  },
  nav_move: {
    fi: "Liike",
    en: "Move",
    sv: "Rörelse"
  },
  nav_food: {
    fi: "Ravinto",
    en: "Nutrition",
    sv: "Näring"
  },
  nav_profile: {
    fi: "Profiili",
    en: "Profile",
    sv: "Profil"
  },
  nav_home: {
    fi: "Koti",
    en: "Home",
    sv: "Hem"
  },
  nav_workouts: {
    fi: "Harjoitteet",
    en: "Workouts",
    sv: "Pass"
  },
  nav_week: {
    fi: "Viikko-ohjelma",
    en: "Week plan",
    sv: "Veckoprogram"
  },
  nav_overview: {
    fi: "Yleisnäkymä",
    en: "Overview",
    sv: "Översikt"
  },
  nav_diary: {
    fi: "Ruokapäiväkirja",
    en: "Food diary",
    sv: "Matdagbok"
  },
  /* käyttöönotto */
  ob_welcome_t: {
    fi: "Tervetuloa Vireeseen",
    en: "Welcome to Vire",
    sv: "Välkommen till Vire"
  },
  ob_welcome_b: {
    fi: "Lempeä kumppani ravinnolle ja liikkeelle. Aloitetaan rauhassa — sinun tahtiisi.",
    en: "A gentle companion for nutrition and movement. Let's start calmly — at your own pace.",
    sv: "En mjuk följeslagare för kost och rörelse. Vi börjar lugnt — i din egen takt."
  },
  ob_start: {
    fi: "Aloitetaan",
    en: "Get started",
    sv: "Kom igång"
  },
  ob_step: {
    fi: "Vaihe",
    en: "Step",
    sv: "Steg"
  },
  ob_name_t: {
    fi: "Mikä on nimesi?",
    en: "What's your name?",
    sv: "Vad heter du?"
  },
  ob_name_s: {
    fi: "Tervehdimme sinua tällä etusivulla.",
    en: "We'll greet you on the home screen.",
    sv: "Vi hälsar dig på startsidan."
  },
  ob_firstname: {
    fi: "Etunimi",
    en: "First name",
    sv: "Förnamn"
  },
  ob_name_ph: {
    fi: "Esim. Aino",
    en: "E.g. Aino",
    sv: "T.ex. Aino"
  },
  ob_goals_t: {
    fi: "Päivätavoitteesi",
    en: "Your daily goals",
    sv: "Dina dagsmål"
  },
  ob_goals_s: {
    fi: "Voit muuttaa näitä myöhemmin profiilista.",
    en: "You can change these later in your profile.",
    sv: "Du kan ändra dessa senare i profilen."
  },
  ob_start_use: {
    fi: "Aloita käyttö",
    en: "Start using",
    sv: "Börja använda"
  },
  /* tavoitteet / yksiköt */
  goal_steps: {
    fi: "Askeleet",
    en: "Steps",
    sv: "Steg"
  },
  goal_energy: {
    fi: "Energia",
    en: "Energy",
    sv: "Energi"
  },
  goal_active: {
    fi: "Liikeminuutit",
    en: "Active minutes",
    sv: "Aktiva minuter"
  },
  goal_water: {
    fi: "Vesi",
    en: "Water",
    sv: "Vatten"
  },
  u_steps: {
    fi: "askelta",
    en: "steps",
    sv: "steg"
  },
  u_kcal: {
    fi: "kcal",
    en: "kcal",
    sv: "kcal"
  },
  u_min: {
    fi: "min",
    en: "min",
    sv: "min"
  },
  u_glasses: {
    fi: "lasia",
    en: "glasses",
    sv: "glas"
  },
  /* etusivu */
  greet_morning: {
    fi: "Hyvää huomenta",
    en: "Good morning",
    sv: "God morgon"
  },
  greet_day: {
    fi: "Hei",
    en: "Hi",
    sv: "Hej"
  },
  greet_evening: {
    fi: "Hyvää iltaa",
    en: "Good evening",
    sv: "God kväll"
  },
  day_goals: {
    fi: "Päivän tavoitteet",
    en: "Today's goals",
    sv: "Dagens mål"
  },
  start_logging: {
    fi: "Aloita kirjaaminen",
    en: "Start logging",
    sv: "Börja logga"
  },
  in_good_vire: {
    fi: "Hyvässä vireessä",
    en: "In good shape",
    sv: "I god form"
  },
  /* motivoivat tekstit mittarin alla — vaihtuvat päivän mittaan */
  motiv_dawn: {
    fi: "Uusi aamu, uusi mahdollisuus.",
    en: "A new morning, a fresh chance.",
    sv: "En ny morgon, en ny chans."
  },
  motiv_morning: {
    fi: "Pieni alku riittää tänään.",
    en: "A small start is enough today.",
    sv: "En liten start räcker idag."
  },
  motiv_midday: {
    fi: "Hyvä rytmi — jatka samaan malliin.",
    en: "Nice rhythm — keep it going.",
    sv: "Fin rytm — fortsätt så."
  },
  motiv_afternoon: {
    fi: "Vielä ehtii liikahtaa hetken.",
    en: "There's still time to move a little.",
    sv: "Det finns tid att röra på dig lite."
  },
  motiv_evening: {
    fi: "Päivä on ollut sinun. Hengähdä.",
    en: "The day's been yours. Breathe.",
    sv: "Dagen har varit din. Andas."
  },
  motiv_night: {
    fi: "Lepo on osa edistymistä.",
    en: "Rest is part of progress.",
    sv: "Vila är en del av framsteget."
  },
  motiv_almost: {
    fi: "Olet aivan lähellä tavoitetta!",
    en: "You're so close to your goal!",
    sv: "Du är så nära ditt mål!"
  },
  motiv_done: {
    fi: "Päivän tavoite täynnä — upeaa työtä!",
    en: "Goal complete — wonderful work!",
    sv: "Målet klart — fantastiskt jobbat!"
  },
  motiv_kind1: {
    fi: "Ole lempeä itsellesi tänään.",
    en: "Be gentle with yourself today.",
    sv: "Var snäll mot dig själv idag."
  },
  motiv_kind2: {
    fi: "Jokainen askel on askel eteenpäin.",
    en: "Every step is a step forward.",
    sv: "Varje steg är ett steg framåt."
  },
  /* Oivallukset */
  insights_t: {
    fi: "Oivallukset",
    en: "Insights",
    sv: "Insikter"
  },
  ins_more: {
    fi: "Kirjaa muutama päivä, niin avaamme oivalluksia edistymisestäsi.",
    en: "Log a few days and we'll unlock insights about your progress.",
    sv: "Logga några dagar så låser vi upp insikter om dina framsteg."
  },
  ins_streak: {
    fi: "{n} päivän putki",
    en: "{n}-day streak",
    sv: "{n} dagars svit"
  },
  ins_streak_s: {
    fi: "Olet kirjannut yhtäjaksoisesti. Hieno tapa!",
    en: "You've logged without a break. Great habit!",
    sv: "Du har loggat utan avbrott. Fin vana!"
  },
  ins_steptrend_up: {
    fi: "Askeleet nousussa",
    en: "Steps trending up",
    sv: "Stegen ökar"
  },
  ins_steptrend_up_s: {
    fi: "{n} % enemmän kuin edellisinä päivinä.",
    en: "{n}% more than the previous days.",
    sv: "{n}% mer än föregående dagar."
  },
  ins_steptrend_dn: {
    fi: "Askeleet laskussa",
    en: "Steps trending down",
    sv: "Stegen minskar"
  },
  ins_steptrend_dn_s: {
    fi: "Pieni kävely tänään kääntäisi suunnan.",
    en: "A short walk today would turn it around.",
    sv: "En kort promenad idag vänder det."
  },
  ins_bestday: {
    fi: "Aktiivisin päiväsi: {d}",
    en: "Your most active day: {d}",
    sv: "Din mest aktiva dag: {d}"
  },
  ins_bestday_s: {
    fi: "Silloin liikut eniten. Hyvä tietää suunnitellessa.",
    en: "That's when you move most. Handy for planning.",
    sv: "Då rör du dig mest. Bra att veta vid planering."
  },
  ins_water: {
    fi: "Vesi hyvällä mallilla",
    en: "Hydration on track",
    sv: "Vätskan på rätt nivå"
  },
  ins_water_s: {
    fi: "Tavoite täynnä {n}/7 päivänä tällä viikolla.",
    en: "Goal met on {n}/7 days this week.",
    sv: "Mål nått {n}/7 dagar i veckan."
  },
  ins_mood: {
    fi: "Fiilis ja liike kulkevat yhdessä",
    en: "Mood and movement go together",
    sv: "Känsla och rörelse hör ihop"
  },
  ins_mood_s: {
    fi: "Hyvät fiilikset osuvat aktiivisille päiville.",
    en: "Better moods land on your active days.",
    sv: "Bättre känslor infaller på aktiva dagar."
  },
  ins_energy: {
    fi: "Keskimäärin {n} kcal / päivä",
    en: "Avg {n} kcal / day",
    sv: "I snitt {n} kcal / dag"
  },
  ins_energy_s: {
    fi: "Viime päivien energiansaannin keskiarvo.",
    en: "Average energy intake over recent days.",
    sv: "Genomsnittligt energiintag de senaste dagarna."
  },
  add_steps_t: {
    fi: "Askeleet",
    en: "Steps",
    sv: "Steg"
  },
  add_manually: {
    fi: "Lisää käsin tai aseta koko luku",
    en: "Add manually or set the total",
    sv: "Lägg till manuellt eller ange totalen"
  },
  set_value: {
    fi: "Aseta luku…",
    en: "Set value…",
    sv: "Ange värde…"
  },
  set_btn: {
    fi: "Aseta",
    en: "Set",
    sv: "Ange"
  },
  steps_note: {
    fi: "Lopullisessa sovelluksessa askeleet luetaan puhelimen liikeanturista (Apple Health / Google Fit). Pilotissa kirjaat ne itse.",
    en: "In the final app, steps are read from your phone's motion sensor (Apple Health / Google Fit). In the pilot you log them yourself.",
    sv: "I den färdiga appen läses steg från telefonens rörelsesensor (Apple Health / Google Fit). I piloten loggar du dem själv."
  },
  fresh_start: {
    fi: "Tämä on tuore alku. Kirjaa ensimmäinen ateria tai askeleet — rakennat tavan pala kerrallaan.",
    en: "This is a fresh start. Log your first meal or steps — you build the habit piece by piece.",
    sv: "Detta är en ny början. Logga din första måltid eller dina steg — du bygger vanan bit för bit."
  },
  todays_meals: {
    fi: "Päivän ateriat",
    en: "Today's meals",
    sv: "Dagens måltider"
  },
  todays_workouts: {
    fi: "Päivän harjoitukset",
    en: "Today's workouts",
    sv: "Dagens pass"
  },
  no_meals_today: {
    fi: "Et ole vielä kirjannut aterioita",
    en: "You haven't logged any meals yet",
    sv: "Du har inte loggat några måltider än"
  },
  no_workouts_today: {
    fi: "Et ole vielä kirjannut harjoituksia",
    en: "You haven't logged any workouts yet",
    sv: "Du har inte loggat några pass än"
  },
  view_all: {
    fi: "Näytä kaikki",
    en: "View all",
    sv: "Visa alla"
  },
  /* fiilis */
  mood_title: {
    fi: "Päivän yleisfiilis",
    en: "Today's overall mood",
    sv: "Dagens allmänna känsla"
  },
  mood_sub: {
    fi: "Miltä tänään tuntuu?",
    en: "How do you feel today?",
    sv: "Hur känns det idag?"
  },
  mood_pick: {
    fi: "Valitse fiilis",
    en: "Pick a mood",
    sv: "Välj känsla"
  },
  mood_great: {
    fi: "Loistava",
    en: "Great",
    sv: "Toppen"
  },
  mood_good: {
    fi: "Hyvä",
    en: "Good",
    sv: "Bra"
  },
  mood_even: {
    fi: "Tasainen",
    en: "Even",
    sv: "Jämn"
  },
  mood_tired: {
    fi: "Väsynyt",
    en: "Tired",
    sv: "Trött"
  },
  mood_stressed: {
    fi: "Stressaantunut",
    en: "Stressed",
    sv: "Stressad"
  },
  mood_history: {
    fi: "Viime päivät",
    en: "Recent days",
    sv: "Senaste dagarna"
  },
  /* liike */
  move_title: {
    fi: "Harjoitteet",
    en: "Workouts",
    sv: "Pass"
  },
  log_btn: {
    fi: "Kirjaa",
    en: "Log",
    sv: "Logga"
  },
  no_entries: {
    fi: "Ei merkintöjä",
    en: "No entries",
    sv: "Inga poster"
  },
  log_workout_body: {
    fi: "Kirjaa tämän päivän liike — kävely, treeni, mitä vain.",
    en: "Log today's movement — a walk, a workout, anything.",
    sv: "Logga dagens rörelse — en promenad, ett pass, vad som helst."
  },
  log_workout: {
    fi: "Kirjaa harjoitus",
    en: "Log workout",
    sv: "Logga pass"
  },
  new_workout: {
    fi: "Uusi harjoitus",
    en: "New workout",
    sv: "Nytt pass"
  },
  what_did_you_do: {
    fi: "Mitä teit?",
    en: "What did you do?",
    sv: "Vad gjorde du?"
  },
  workout_ph: {
    fi: "Esim. Aamukävely, kuntosali…",
    en: "E.g. Morning walk, gym…",
    sv: "T.ex. Morgonpromenad, gym…"
  },
  dur_min: {
    fi: "Kesto (min)",
    en: "Duration (min)",
    sv: "Längd (min)"
  },
  energy_kcal: {
    fi: "Energia (kcal)",
    en: "Energy (kcal)",
    sv: "Energi (kcal)"
  },
  workouts_today_n: {
    fi: "harjoitusta tänään",
    en: "workouts today",
    sv: "pass idag"
  },
  logged_badge: {
    fi: "Kirjattu",
    en: "Logged",
    sv: "Loggat"
  },
  planned_workouts: {
    fi: "Suunnitellut harjoitteet",
    en: "Planned workouts",
    sv: "Planerade pass"
  },
  sample_note: {
    fi: "Esimerkki — personoitu treeniohjelma ja ohjevideot tulevat tähän, kun ne on lisätty.",
    en: "Sample — your personalised programme and instructional videos appear here once added.",
    sv: "Exempel — ditt personliga program och instruktionsvideor visas här när de lagts till."
  },
  watch_technique: {
    fi: "Katso tekniikka",
    en: "Watch technique",
    sv: "Se teknik"
  },
  my_workouts: {
    fi: "Omat kirjaukset",
    en: "My entries",
    sv: "Mina poster"
  },
  week_plan_t: {
    fi: "Viikko-ohjelma",
    en: "Week plan",
    sv: "Veckoprogram"
  },
  week_w: {
    fi: "Viikko",
    en: "Week",
    sv: "Vecka"
  },
  active_days: {
    fi: "aktiivista pv",
    en: "active days",
    sv: "aktiva dgr"
  },
  min_total: {
    fi: "min yhteensä",
    en: "min total",
    sv: "min totalt"
  },
  workouts_count: {
    fi: "harjoitusta",
    en: "workouts",
    sv: "pass"
  },
  week_note: {
    fi: "Personoitu viikko-ohjelma näkyy tässä, kun se on laadittu. Nyt näet omat kirjauksesi.",
    en: "Your personalised week plan appears here once created. For now you see your own entries.",
    sv: "Ditt personliga veckoprogram visas här när det skapats. Nu ser du dina egna poster."
  },
  /* ravinto */
  food_title: {
    fi: "Ravinto",
    en: "Nutrition",
    sv: "Näring"
  },
  remaining: {
    fi: "Jäljellä tänään",
    en: "Remaining today",
    sv: "Kvar idag"
  },
  good_balance: {
    fi: "Hyvä tasapaino",
    en: "Good balance",
    sv: "Bra balans"
  },
  no_logs_yet: {
    fi: "Ei vielä kirjauksia",
    en: "No logs yet",
    sv: "Inga loggar än"
  },
  not_logged: {
    fi: "Ei kirjattu",
    en: "Not logged",
    sv: "Inte loggat"
  },
  entries_n: {
    fi: "merkintää",
    en: "entries",
    sv: "poster"
  },
  open_diary: {
    fi: "Avaa ruokapäiväkirja",
    en: "Open food diary",
    sv: "Öppna matdagbok"
  },
  write_self: {
    fi: "Kirjoita itse",
    en: "Write your own",
    sv: "Skriv själv"
  },
  meal_ph: {
    fi: "Mitä söit? Esim. kaurapuuro, marjat ja kahvi…",
    en: "What did you eat? E.g. oatmeal, berries and coffee…",
    sv: "Vad åt du? T.ex. havregröt, bär och kaffe…"
  },
  choose_menu: {
    fi: "Valitse valikosta",
    en: "Choose from menu",
    sv: "Välj från menyn"
  },
  no_meals_slot: {
    fi: "Et ole vielä kirjannut aterioita",
    en: "You haven't logged any meals yet",
    sv: "Du har inte loggat några måltider än"
  },
  logged_label: {
    fi: "kirjattu",
    en: "logged",
    sv: "loggat"
  },
  menu_note: {
    fi: "Oma ravinto-ohjelma korvaa tämän valikon, kun se on laadittu.",
    en: "Your nutrition plan replaces this menu once created.",
    sv: "Ditt näringsprogram ersätter denna meny när det skapats."
  },
  meal_breakfast: {
    fi: "Aamiainen",
    en: "Breakfast",
    sv: "Frukost"
  },
  meal_lunch: {
    fi: "Lounas",
    en: "Lunch",
    sv: "Lunch"
  },
  meal_snack: {
    fi: "Välipala",
    en: "Snack",
    sv: "Mellanmål"
  },
  meal_dinner: {
    fi: "Päivällinen",
    en: "Dinner",
    sv: "Middag"
  },
  /* profiili */
  profile_t: {
    fi: "Profiili",
    en: "Profile",
    sv: "Profil"
  },
  pilot_user: {
    fi: "Pilottikäyttäjä",
    en: "Pilot user",
    sv: "Pilotanvändare"
  },
  member_days: {
    fi: "Mukana {n} päivää",
    en: "Member for {n} days",
    sv: "Medlem i {n} dagar"
  },
  st_meals: {
    fi: "ateriaa",
    en: "meals",
    sv: "måltider"
  },
  st_workouts: {
    fi: "liikettä",
    en: "workouts",
    sv: "pass"
  },
  st_active: {
    fi: "aktiivista pv",
    en: "active days",
    sv: "aktiva dgr"
  },
  goals_section: {
    fi: "Tavoitteet",
    en: "Goals",
    sv: "Mål"
  },
  goal_steps_l: {
    fi: "Askeltavoite",
    en: "Step goal",
    sv: "Stegmål"
  },
  goal_energy_l: {
    fi: "Energiatavoite",
    en: "Energy goal",
    sv: "Energimål"
  },
  menu_section: {
    fi: "Valikko",
    en: "Menu",
    sv: "Meny"
  },
  m_myinfo: {
    fi: "Omat tiedot",
    en: "My details",
    sv: "Mina uppgifter"
  },
  m_trainhist: {
    fi: "Treenihistoria",
    en: "Training history",
    sv: "Träningshistorik"
  },
  m_foodhist: {
    fi: "Ravintohistoria",
    en: "Nutrition history",
    sv: "Näringshistorik"
  },
  m_notif: {
    fi: "Ilmoitukset",
    en: "Notifications",
    sv: "Aviseringar"
  },
  m_settings: {
    fi: "Asetukset",
    en: "Settings",
    sv: "Inställningar"
  },
  m_logout: {
    fi: "Kirjaudu ulos",
    en: "Log out",
    sv: "Logga ut"
  },
  change_photo: {
    fi: "Vaihda kuva",
    en: "Change photo",
    sv: "Byt bild"
  },
  version: {
    fi: "Versio",
    en: "Version",
    sv: "Version"
  },
  data_note: {
    fi: "tiedot tallennetaan vain tähän laitteeseen",
    en: "data is stored only on this device",
    sv: "data sparas endast på denna enhet"
  },
  logout_confirm: {
    fi: "Haluatko kirjautua ulos? Tämä nollaa profiilin ja kaikki kirjaukset tästä laitteesta.",
    en: "Log out? This resets your profile and all entries on this device.",
    sv: "Logga ut? Detta nollställer profilen och alla poster på denna enhet."
  },
  logout_yes: {
    fi: "Kyllä, kirjaudu ulos",
    en: "Yes, log out",
    sv: "Ja, logga ut"
  },
  /* omat tiedot */
  myinfo_t: {
    fi: "Omat tiedot",
    en: "My details",
    sv: "Mina uppgifter"
  },
  field_name: {
    fi: "Nimi",
    en: "Name",
    sv: "Namn"
  },
  field_email: {
    fi: "Sähköposti",
    en: "Email",
    sv: "E-post"
  },
  field_age: {
    fi: "Ikä",
    en: "Age",
    sv: "Ålder"
  },
  field_height: {
    fi: "Pituus (cm)",
    en: "Height (cm)",
    sv: "Längd (cm)"
  },
  field_weight: {
    fi: "Paino (kg)",
    en: "Weight (kg)",
    sv: "Vikt (kg)"
  },
  myinfo_note: {
    fi: "Tietoja käytetään tavoitteiden tarkentamiseen. Ne tallennetaan vain tähän laitteeseen.",
    en: "Used to refine your goals. Stored only on this device.",
    sv: "Används för att förfina dina mål. Sparas endast på denna enhet."
  },
  saved_ok: {
    fi: "Tallennettu",
    en: "Saved",
    sv: "Sparat"
  },
  /* historia */
  range_week: {
    fi: "Viikko",
    en: "Week",
    sv: "Vecka"
  },
  range_6mo: {
    fi: "6 kk",
    en: "6 mo",
    sv: "6 mån"
  },
  range_year: {
    fi: "Vuosi",
    en: "Year",
    sv: "År"
  },
  trainhist_t: {
    fi: "Treenihistoria",
    en: "Training history",
    sv: "Träningshistorik"
  },
  foodhist_t: {
    fi: "Ravintohistoria",
    en: "Nutrition history",
    sv: "Näringshistorik"
  },
  workouts_label: {
    fi: "Harjoitukset",
    en: "Workouts",
    sv: "Pass"
  },
  activemin_label: {
    fi: "Liikeminuutit",
    en: "Active minutes",
    sv: "Aktiva minuter"
  },
  energy_label: {
    fi: "Energia",
    en: "Energy",
    sv: "Energi"
  },
  avg_label: {
    fi: "keskiarvo",
    en: "average",
    sv: "snitt"
  },
  total_label: {
    fi: "yhteensä",
    en: "total",
    sv: "totalt"
  },
  no_history: {
    fi: "Ei vielä historiaa tällä jaksolla.",
    en: "No history for this period yet.",
    sv: "Ingen historik för denna period än."
  },
  mood_hist_t: {
    fi: "Fiilishistoria",
    en: "Mood history",
    sv: "Känslohistorik"
  },
  /* ilmoitukset */
  notif_t: {
    fi: "Ilmoitukset",
    en: "Notifications",
    sv: "Aviseringar"
  },
  notif_sub: {
    fi: "Valitse mitä ilmoituksia Vire saa lähettää.",
    en: "Choose which notifications Vire may send.",
    sv: "Välj vilka aviseringar Vire får skicka."
  },
  notif_workout: {
    fi: "Liikuntamuistutukset",
    en: "Workout reminders",
    sv: "Träningspåminnelser"
  },
  notif_workout_s: {
    fi: "Muistuta liikkumaan päivittäin",
    en: "Remind me to move daily",
    sv: "Påminn mig att röra på mig dagligen"
  },
  notif_meal: {
    fi: "Ateriamuistutukset",
    en: "Meal reminders",
    sv: "Måltidspåminnelser"
  },
  notif_meal_s: {
    fi: "Muistuta kirjaamaan ateriat",
    en: "Remind me to log meals",
    sv: "Påminn mig att logga måltider"
  },
  notif_weekly: {
    fi: "Viikkokooste",
    en: "Weekly summary",
    sv: "Veckosammanfattning"
  },
  notif_weekly_s: {
    fi: "Yhteenveto sunnuntaisin",
    en: "Summary on Sundays",
    sv: "Sammanfattning på söndagar"
  },
  notif_mood: {
    fi: "Fiiliskysely",
    en: "Mood check-in",
    sv: "Känslokoll"
  },
  notif_mood_s: {
    fi: "Kysy päivän fiilistä iltaisin",
    en: "Ask about your mood in the evening",
    sv: "Fråga om din känsla på kvällen"
  },
  /* asetukset */
  settings_t: {
    fi: "Asetukset",
    en: "Settings",
    sv: "Inställningar"
  },
  appearance: {
    fi: "Ulkoasu",
    en: "Appearance",
    sv: "Utseende"
  },
  dark_mode: {
    fi: "Tumma tila",
    en: "Dark mode",
    sv: "Mörkt läge"
  },
  dark_mode_s: {
    fi: "Vaihda sovellus tummaksi",
    en: "Switch the app to dark",
    sv: "Byt appen till mörkt"
  },
  hide_rings: {
    fi: "Piilota tavoiterenkaat",
    en: "Hide goal rings",
    sv: "Dölj målringar"
  },
  hide_rings_s: {
    fi: "Piilota ympyräkuvaajat yleisnäkymästä",
    en: "Hide the ring charts from the overview",
    sv: "Dölj ringdiagrammen från översikten"
  },
  language: {
    fi: "Kieli",
    en: "Language",
    sv: "Språk"
  },
  lang_fi: {
    fi: "Suomi",
    en: "Finnish",
    sv: "Finska"
  },
  lang_en: {
    fi: "Englanti",
    en: "English",
    sv: "Engelska"
  },
  lang_sv: {
    fi: "Ruotsi",
    en: "Swedish",
    sv: "Svenska"
  },
  data_section: {
    fi: "Tiedot",
    en: "Data",
    sv: "Data"
  },
  cloud_section: {
    fi: "Pilvisynkronointi",
    en: "Cloud sync",
    sv: "Molnsynk"
  },
  sync_url: {
    fi: "Ohjelmien lähde-URL",
    en: "Programme source URL",
    sv: "Programkälla-URL"
  },
  sync_url_ph: {
    fi: "https://… (julkaistu Google Sheet CSV)",
    en: "https://… (published Google Sheet CSV)",
    sv: "https://… (publicerat Google Sheet CSV)"
  },
  sync_note: {
    fi: "Treeni- ja ravinto-ohjelmat haetaan tästä osoitteesta sovelluksen käynnistyessä. Käytä julkaistua Google Sheet -taulukkoa (CSV) tai repon CSV/JSON-tiedostoa.",
    en: "Training and nutrition programmes are fetched from this URL on startup. Use a published Google Sheet (CSV) or a CSV/JSON file in the repo.",
    sv: "Tränings- och näringsprogram hämtas från denna URL vid start. Använd ett publicerat Google Sheet (CSV) eller en CSV/JSON-fil i repot."
  },
  sync_now: {
    fi: "Synkronoi nyt",
    en: "Sync now",
    sv: "Synka nu"
  },
  sync_ok: {
    fi: "Synkronoitu",
    en: "Synced",
    sv: "Synkat"
  },
  sync_fail: {
    fi: "Synkronointi epäonnistui — tarkista osoite",
    en: "Sync failed — check the URL",
    sv: "Synk misslyckades — kontrollera URL:en"
  },
  sync_none: {
    fi: "Ei lähdettä asetettu",
    en: "No source set",
    sv: "Ingen källa angiven"
  },
  start_over: {
    fi: "Aloita alusta",
    en: "Start over",
    sv: "Börja om"
  },
  start_over_s: {
    fi: "Nollaa profiili ja kaikki kirjaukset",
    en: "Reset profile and all entries",
    sv: "Nollställ profil och alla poster"
  },
  reset_btn: {
    fi: "Nollaa",
    en: "Reset",
    sv: "Nollställ"
  },
  reset_confirm: {
    fi: "Haluatko varmasti aloittaa alusta? Kaikki tietosi poistetaan tästä laitteesta — tätä ei voi perua.",
    en: "Are you sure you want to start over? All your data on this device will be deleted — this can't be undone.",
    sv: "Vill du verkligen börja om? All din data på denna enhet raderas — detta kan inte ångras."
  },
  reset_yes: {
    fi: "Kyllä, nollaa kaikki",
    en: "Yes, reset everything",
    sv: "Ja, nollställ allt"
  },
  /* etusivu — mittari & agenda */
  of_goals: {
    fi: "tavoitteista",
    en: "of goals",
    sv: "av målen"
  },
  next_session: {
    fi: "Seuraava treeni",
    en: "Next session",
    sv: "Nästa pass"
  },
  next_today: {
    fi: "tänään",
    en: "today",
    sv: "idag"
  },
  next_tomorrow: {
    fi: "huomenna",
    en: "tomorrow",
    sv: "imorgon"
  },
  next_in_days: {
    fi: "{n} pv kuluttua",
    en: "in {n} days",
    sv: "om {n} dgr"
  },
  /* valikko (hampurilainen) */
  menu_title: {
    fi: "Valikko",
    en: "Menu",
    sv: "Meny"
  },
  m_messages: {
    fi: "Viestit",
    en: "Messages",
    sv: "Meddelanden"
  },
  m_export: {
    fi: "Vie tiedot",
    en: "Export data",
    sv: "Exportera data"
  },
  m_home: {
    fi: "Etusivu",
    en: "Home",
    sv: "Hem"
  },
  /* viestit */
  msg_title: {
    fi: "Viestit",
    en: "Messages",
    sv: "Meddelanden"
  },
  msg_coach: {
    fi: "Vire-valmentaja",
    en: "Vire coach",
    sv: "Vire-coach"
  },
  msg_online: {
    fi: "Vastaa yleensä tunnin sisällä",
    en: "Usually replies within an hour",
    sv: "Svarar oftast inom en timme"
  },
  msg_ph: {
    fi: "Kirjoita viesti…",
    en: "Write a message…",
    sv: "Skriv ett meddelande…"
  },
  msg_welcome: {
    fi: "Hei! Olen tukenasi matkalla. Kerro miltä viikko on tuntunut tai kysy mitä vain ohjelmastasi.",
    en: "Hi! I'm here to support you. Tell me how your week has felt or ask anything about your programme.",
    sv: "Hej! Jag finns här för dig. Berätta hur veckan känts eller fråga vad som helst om ditt program."
  },
  msg_auto: {
    fi: "Kiitos viestistä — valmentaja vastaa pian. (Pilotissa viestit tallennetaan vain tähän laitteeseen.)",
    en: "Thanks for your message — your coach will reply soon. (In the pilot, messages are stored only on this device.)",
    sv: "Tack för ditt meddelande — din coach svarar snart. (I piloten sparas meddelanden endast på denna enhet.)"
  },
  msg_send: {
    fi: "Lähetä",
    en: "Send",
    sv: "Skicka"
  },
  msg_today: {
    fi: "Tänään",
    en: "Today",
    sv: "Idag"
  },
  /* vie tiedot */
  export_title: {
    fi: "Vie tiedot",
    en: "Export data",
    sv: "Exportera data"
  },
  export_sub: {
    fi: "Lataa kirjauksesi taulukkona tai tallenna koonti PDF:nä.",
    en: "Download your entries as a spreadsheet or save a summary as PDF.",
    sv: "Ladda ner dina poster som kalkylark eller spara en sammanfattning som PDF."
  },
  export_csv: {
    fi: "Lataa Excel (CSV)",
    en: "Download Excel (CSV)",
    sv: "Ladda ner Excel (CSV)"
  },
  export_csv_s: {
    fi: "Kaikki ateriat, harjoitukset, askeleet ja fiilis",
    en: "All meals, workouts, steps and mood",
    sv: "Alla måltider, pass, steg och känsla"
  },
  export_pdf: {
    fi: "Tallenna PDF-koonti",
    en: "Save PDF summary",
    sv: "Spara PDF-sammanfattning"
  },
  export_pdf_s: {
    fi: "Tulostettava yhteenveto valitulta jaksolta",
    en: "Printable summary for the period",
    sv: "Utskrivbar sammanfattning för perioden"
  },
  export_note: {
    fi: "Tiedot muodostetaan laitteellasi. Mitään ei lähetetä palvelimelle.",
    en: "Files are generated on your device. Nothing is sent to a server.",
    sv: "Filer skapas på din enhet. Inget skickas till en server."
  },
  export_empty: {
    fi: "Ei vielä kirjauksia vietäväksi.",
    en: "No entries to export yet.",
    sv: "Inga poster att exportera än."
  },
  export_close: {
    fi: "Sulje",
    en: "Close",
    sv: "Stäng"
  },
  export_print: {
    fi: "Tulosta / Tallenna PDF",
    en: "Print / Save PDF",
    sv: "Skriv ut / Spara PDF"
  },
  export_done: {
    fi: "Ladattu",
    en: "Downloaded",
    sv: "Nedladdad"
  },
  /* lisenssin vahvistus */
  lic_title: {
    fi: "Vahvista lisenssi",
    en: "Confirm your licence",
    sv: "Bekräfta din licens"
  },
  lic_sub: {
    fi: "Vire on käytössä organisaatiosi lisenssillä. Vahvista sähköpostiisi lähetetty 6-numeroinen koodi.",
    en: "Vire is licensed through your organisation. Confirm the 6-digit code sent to your email.",
    sv: "Vire licensieras via din organisation. Bekräfta den 6-siffriga koden som skickats till din e-post."
  },
  lic_email_lbl: {
    fi: "Sähköposti",
    en: "Email",
    sv: "E-post"
  },
  lic_email_ph: {
    fi: "aino@organisaatio.fi",
    en: "aino@organisation.com",
    sv: "aino@organisation.se"
  },
  lic_send_code: {
    fi: "Lähetä koodi",
    en: "Send code",
    sv: "Skicka kod"
  },
  lic_code_sent: {
    fi: "Lähetimme koodin osoitteeseen",
    en: "We sent a code to",
    sv: "Vi skickade en kod till"
  },
  lic_code_lbl: {
    fi: "6-numeroinen koodi",
    en: "6-digit code",
    sv: "6-siffrig kod"
  },
  lic_verify: {
    fi: "Vahvista ja jatka",
    en: "Verify and continue",
    sv: "Bekräfta och fortsätt"
  },
  lic_resend: {
    fi: "Lähetä uudelleen",
    en: "Resend",
    sv: "Skicka igen"
  },
  lic_change: {
    fi: "Vaihda sähköposti",
    en: "Change email",
    sv: "Byt e-post"
  },
  lic_bad: {
    fi: "Virheellinen koodi — tarkista ja yritä uudelleen.",
    en: "Invalid code — check and try again.",
    sv: "Ogiltig kod — kontrollera och försök igen."
  },
  lic_demo: {
    fi: "Pilottidemo: vahvistuskoodi on",
    en: "Pilot demo: your code is",
    sv: "Pilotdemo: din kod är"
  },
  lic_resent: {
    fi: "Uusi koodi lähetetty",
    en: "New code sent",
    sv: "Ny kod skickad"
  },
  /* synkronointi — lisäykset */
  sync_demo_btn: {
    fi: "Lataa esimerkkiohjelma",
    en: "Load sample programme",
    sv: "Ladda exempelprogram"
  },
  sync_loaded: {
    fi: "Ohjelma ladattu",
    en: "Programme loaded",
    sv: "Program laddat"
  },
  synced_at: {
    fi: "Synkronoitu",
    en: "Synced",
    sv: "Synkat"
  },
  sync_help: {
    fi: "Eikö synkronointi toimi? Tarkista että osoite on julkinen ja sallii haun (CORS). Voit myös ladata esimerkkiohjelman alta.",
    en: "Sync not working? Make sure the URL is public and allows fetching (CORS). You can also load a sample programme below.",
    sv: "Fungerar inte synken? Kontrollera att URL:en är offentlig och tillåter hämtning (CORS). Du kan även ladda ett exempelprogram nedan."
  },
  program_active: {
    fi: "Ohjelma aktiivinen",
    en: "Programme active",
    sv: "Program aktivt"
  },
  /* ravintohistoria — listattu */
  foodhist_recent: {
    fi: "Viimeksi syöty",
    en: "Recently eaten",
    sv: "Senast ätet"
  },
  foodhist_none: {
    fi: "Ei vielä ateriakirjauksia.",
    en: "No meal entries yet.",
    sv: "Inga måltidsposter än."
  }
};
function makeT(lang) {
  const L = lang === "en" || lang === "sv" ? lang : "fi";
  return function t(key, vars) {
    const entry = STR[key];
    let s = entry ? entry[L] || entry.fi : key;
    if (vars) for (const k in vars) s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
    return s;
  };
}

/* viikonpäivät + kuukaudet kielikohtaisesti */
const DOW_SHORT = {
  fi: ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  sv: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"]
};
const DOW_LONG = {
  fi: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  sv: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
};
const MONTHS = {
  fi: ["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kesäkuuta", "heinäkuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  sv: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
};
const MONTHS_SHORT = {
  fi: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  sv: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
};
function longDateL(lang, d = new Date()) {
  const L = DOW_LONG[lang] ? lang : "fi";
  const dow = DOW_LONG[L][d.getDay()];
  const cap = dow.charAt(0).toUpperCase() + dow.slice(1);
  if (L === "en") return `${cap}, ${MONTHS[L][d.getMonth()]} ${d.getDate()}`;
  if (L === "sv") return `${cap} ${d.getDate()} ${MONTHS[L][d.getMonth()]}`;
  return `${cap} ${d.getDate()}. ${MONTHS[L][d.getMonth()]}`;
}
function localeFor(lang) {
  return lang === "en" ? "en-GB" : lang === "sv" ? "sv-SE" : "fi-FI";
}
function numFmt(lang, n) {
  return Number(n).toLocaleString(localeFor(lang));
}
Object.assign(window, {
  STR,
  makeT,
  DOW_SHORT,
  DOW_LONG,
  MONTHS,
  MONTHS_SHORT,
  longDateL,
  localeFor,
  numFmt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/i18n.jsx", error: String((e && e.message) || e) }); }

// app/liike.jsx
try { (() => {
/* Vire-app — Liike-moduuli. Alanavigaatio: Koti / Harjoitteet / Viikko-ohjelma. */

/* Esimerkkiharjoitteet (ei dataa — paikkamerkki personoidulle ohjelmalle). */
const SAMPLE_EXERCISES = [{
  name: {
    fi: "Kyykky",
    en: "Squat",
    sv: "Knäböj"
  },
  sets: "4 × 10",
  tone: "duotone",
  dur: "0:46"
}, {
  name: {
    fi: "Punnerrus",
    en: "Push-up",
    sv: "Armhävning"
  },
  sets: "3 × 12",
  tone: "sage",
  dur: "0:38"
}, {
  name: {
    fi: "Lankku",
    en: "Plank",
    sv: "Planka"
  },
  sets: "3 × 45 s",
  tone: "warm",
  dur: "0:33"
}];
function VideoField({
  tone = "duotone",
  duration = "0:45",
  caption
}) {
  const {
    L
  } = window;
  const grads = {
    natural: "linear-gradient(135deg, #6E8C7C 0%, #9FB6A8 100%)",
    duotone: "linear-gradient(140deg, #3C4A93 0%, #6B7FD7 100%)",
    warm: "linear-gradient(135deg, #B5704A 0%, #E8A87C 100%)",
    sage: "linear-gradient(135deg, #4E7C66 0%, #88B89C 100%)"
  };
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setPlaying(true),
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 9",
      borderRadius: 14,
      overflow: "hidden",
      background: grads[tone],
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.32,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
      backgroundSize: "4px 4px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.92)",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: playing ? "loader" : "play",
    size: 23,
    color: "var(--brand-600)",
    strokeWidth: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "video",
    size: 15,
    color: "#fff"
  }), " ", caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#fff",
      background: "rgba(0,0,0,0.4)",
      padding: "3px 8px",
      borderRadius: 999,
      fontVariantNumeric: "tabular-nums"
    }
  }, duration)));
}
function LiikeModule({
  store,
  onHome,
  t,
  lang,
  onMenu
}) {
  const {
    AppFrame,
    BottomNav
  } = window;
  const [sub, setSub] = React.useState("harjoitteet");
  const [refDate, setRefDate] = React.useState(new Date());
  const items = [{
    id: "koti",
    label: t("nav_home"),
    icon: "house",
    onClick: onHome
  }, {
    id: "harjoitteet",
    label: t("nav_workouts"),
    icon: "dumbbell",
    active: sub === "harjoitteet",
    onClick: () => setSub("harjoitteet")
  }, {
    id: "viikko",
    label: t("nav_week"),
    icon: "calendar-days",
    active: sub === "viikko",
    onClick: () => setSub("viikko")
  }];
  const screen = sub === "viikko" ? /*#__PURE__*/React.createElement(ViikkoOhjelma, {
    store: store,
    refDate: refDate,
    setRefDate: setRefDate,
    t: t,
    lang: lang,
    onMenu: onMenu,
    onOpenDay: d => {
      setRefDate(d);
      setSub("harjoitteet");
    }
  }) : /*#__PURE__*/React.createElement(Harjoitteet, {
    store: store,
    refDate: refDate,
    t: t,
    lang: lang,
    onMenu: onMenu
  });
  return /*#__PURE__*/React.createElement(AppFrame, {
    bottom: /*#__PURE__*/React.createElement(BottomNav, {
      items: items
    })
  }, screen);
}
function Harjoitteet({
  store,
  refDate,
  t,
  lang,
  onMenu
}) {
  const {
    Card,
    Button,
    Badge,
    Input
  } = window.VS;
  const {
    L,
    PageHeader,
    EmptyState,
    SectionLabel
  } = window;
  const key = window.dateKey(refDate);
  const day = store.day(key);
  const isToday = key === window.dateKey();
  const [form, setForm] = React.useState(null);
  const save = () => {
    if (!form.name.trim()) return;
    store.addWorkout(key, {
      name: form.name.trim(),
      mins: Math.round(Number(form.mins) || 0),
      kcal: Math.round(Number(form.kcal) || 0)
    });
    setForm(null);
  };
  const totalMin = day.workouts.reduce((a, w) => a + (Number(w.mins) || 0), 0);
  const dateLabel = isToday ? t("nav_today") : `${window.DOW_SHORT[lang][(refDate.getDay() + 6) % 7]} ${window.shortDate(refDate, lang)}`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("move_title"),
    onMenu: onMenu,
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "soft",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(L, {
        name: "plus",
        size: 16
      }),
      onClick: () => setForm({
        name: "",
        mins: "",
        kcal: ""
      })
    }, t("log_btn"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      margin: "-4px 4px 0"
    }
  }, dateLabel, " \xB7 ", t("week_w"), " ", window.isoWeek(refDate)), day.workouts.length > 0 ? /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: chip("var(--sage-100)", "var(--sage-700)", 46)
  }, /*#__PURE__*/React.createElement(L, {
    name: "activity",
    size: 23
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, totalMin, " ", t("u_min")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, day.workouts.length, " ", t("workouts_today_n"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "movement",
    dot: true
  }, t("logged_badge"))) : null, form ? /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("new_workout")), /*#__PURE__*/React.createElement(Input, {
    label: t("what_did_you_do"),
    placeholder: t("workout_ph"),
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t("dur_min"),
    type: "number",
    placeholder: "30",
    value: form.mins,
    onChange: e => setForm({
      ...form,
      mins: e.target.value
    }),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("energy_kcal"),
    type: "number",
    placeholder: "\u2014",
    value: form.kcal,
    onChange: e => setForm({
      ...form,
      kcal: e.target.value
    }),
    style: {
      flex: 1
    },
    optional: t("optional")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setForm(null)
  }, t("cancel")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: save,
    disabled: !form.name.trim()
  }, t("save")))) : null, day.workouts.length === 0 && !form ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "dumbbell",
    title: t("no_entries"),
    body: t("log_workout_body"),
    action: /*#__PURE__*/React.createElement(Button, {
      iconLeft: /*#__PURE__*/React.createElement(L, {
        name: "plus",
        size: 17
      }),
      onClick: () => setForm({
        name: "",
        mins: "",
        kcal: ""
      })
    }, t("log_workout"))
  }) : null, day.workouts.length > 0 ? /*#__PURE__*/React.createElement(SectionLabel, null, t("my_workouts")) : null, day.workouts.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.id,
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: chip("var(--sage-100)", "var(--sage-700)", 40)
  }, /*#__PURE__*/React.createElement(L, {
    name: "activity",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, w.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, w.mins, " ", t("u_min"), w.kcal ? ` · ${w.kcal} kcal` : "")), /*#__PURE__*/React.createElement("button", {
    onClick: () => store.removeWorkout(key, w.id),
    style: iconBtn
  }, /*#__PURE__*/React.createElement(L, {
    name: "trash-2",
    size: 18
  })))), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginTop: 8
    }
  }, t("planned_workouts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, SAMPLE_EXERCISES.map((ex, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: "sm",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(VideoField, {
    tone: ex.tone,
    duration: ex.dur,
    caption: t("watch_technique")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 4px 2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      fontSize: 13,
      fontWeight: 800,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, ex.name[lang] || ex.name.fi), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, ex.sets))))), /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "info",
    size: 20,
    color: "var(--brand-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("sample_note"))))));
}
function ViikkoOhjelma({
  store,
  refDate,
  setRefDate,
  onOpenDay,
  t,
  lang,
  onMenu
}) {
  const {
    Card
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const days = window.weekDays(refDate);
  const wk = window.isoWeek(refDate);
  const todayKey = window.dateKey();
  const program = store.state.programs && Array.isArray(store.state.programs.workouts) ? store.state.programs.workouts : null;
  const planFor = d => {
    const dow = (d.getDay() + 6) % 7;
    const src = program && program.length && program[0] && program[0].dow !== undefined ? program : window.DEFAULT_PLAN;
    const e = src.find(x => x.dow === dow);
    if (!e) return null;
    const nm = typeof e.name === "object" ? e.name[lang] || e.name.fi : e.name;
    return {
      name: nm,
      mins: e.mins,
      rest: !e.icon || e.mins === 0
    };
  };
  const shift = n => {
    const d = new Date(refDate);
    d.setDate(d.getDate() + n * 7);
    setRefDate(d);
  };
  const monthRange = `${days[0].getDate()}.–${days[6].getDate()}.${days[6].getMonth() + 1}. ${days[6].getFullYear()}`;
  const totalMin = days.reduce((a, d) => a + store.day(window.dateKey(d)).workouts.reduce((x, w) => x + (Number(w.mins) || 0), 0), 0);
  const activeDays = days.filter(d => store.day(window.dateKey(d)).workouts.length > 0).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("week_plan_t"),
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => shift(-1),
    style: navBtn
  }, /*#__PURE__*/React.createElement(L, {
    name: "chevron-left",
    size: 20,
    color: "var(--ink-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800
    }
  }, t("week_w"), " ", wk), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, monthRange)), /*#__PURE__*/React.createElement("button", {
    onClick: () => shift(1),
    style: navBtn
  }, /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 20,
    color: "var(--ink-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, activeDays), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, t("active_days"))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, totalMin), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, t("min_total")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, days.map((d, i) => {
    const dk = window.dateKey(d);
    const dd = store.day(dk);
    const isToday = dk === todayKey;
    const has = dd.workouts.length > 0;
    const mins = dd.workouts.reduce((a, w) => a + (Number(w.mins) || 0), 0);
    const pl = planFor(d);
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      flat: true,
      interactive: true,
      onClick: () => onOpenDay(d),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 14px",
        border: isToday ? "1.5px solid var(--brand-300)" : "1px solid var(--border-subtle)",
        background: isToday ? "var(--brand-50)" : "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        flexShrink: 0,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: isToday ? "var(--brand-700)" : "var(--text-secondary)"
      }
    }, window.DOW_SHORT[lang][i]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, window.shortDate(d, lang))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: chip(has ? "var(--sage-100)" : pl && !pl.rest ? "var(--brand-50)" : "var(--ink-100)", has ? "var(--sage-700)" : pl && !pl.rest ? "var(--brand-600)" : "var(--ink-400)", 38)
    }, /*#__PURE__*/React.createElement(L, {
      name: has ? "activity" : pl && !pl.rest ? "calendar-check" : "circle-dashed",
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, has ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "var(--text-primary)"
      }
    }, dd.workouts.length, " ", t("workouts_count")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, mins, " ", t("u_min"), pl && !pl.rest ? " \u00b7 " + pl.name : "")) : pl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14.5,
        color: pl.rest ? "var(--text-muted)" : "var(--text-primary)"
      }
    }, pl.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, pl.rest ? t("no_entries") : t("next_session") + " \u00b7 " + pl.mins + " " + t("u_min"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "var(--text-muted)"
      }
    }, t("no_entries"))), /*#__PURE__*/React.createElement(L, {
      name: "chevron-right",
      size: 19,
      color: "var(--ink-300)"
    }));
  })), /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "calendar-check",
    size: 20,
    color: "var(--brand-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("week_note")))));
}
const chip = (bg, fg, s) => ({
  width: s,
  height: s,
  borderRadius: s >= 44 ? 14 : 11,
  background: bg,
  color: fg,
  display: "grid",
  placeItems: "center",
  flexShrink: 0
});
const iconBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--ink-400)",
  padding: 6
};
const navBtn = {
  border: "none",
  background: "var(--surface-sunken)",
  width: 36,
  height: 36,
  borderRadius: 11,
  display: "grid",
  placeItems: "center",
  cursor: "pointer"
};
Object.assign(window, {
  LiikeModule,
  VideoField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/liike.jsx", error: String((e && e.message) || e) }); }

// app/onboarding.jsx
try { (() => {
/* Vire-app — käyttöönotto (nollasta). Nimi + tavoitteet. Monikielinen. */

function Onboarding({
  onDone,
  t,
  lang,
  onLang
}) {
  const {
    Card,
    Button,
    Input
  } = window.VS;
  const {
    L
  } = window;
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [goals, setGoals] = React.useState({
    steps: 8000,
    energy: 2000,
    activeMin: 30,
    water: 8
  });
  const setGoal = (k, v) => setGoals(g => ({
    ...g,
    [k]: v
  }));
  const langOpts = [{
    value: "fi",
    label: "Suomi"
  }, {
    value: "en",
    label: "English"
  }, {
    value: "sv",
    label: "Svenska"
  }];
  const steps = [/*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(window.VireMark, {
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      marginBottom: 10
    }
  }, t("ob_welcome_t")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      maxWidth: 320
    }
  }, t("ob_welcome_b"))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: () => setStep(1),
    iconRight: /*#__PURE__*/React.createElement(L, {
      name: "arrow-right",
      size: 18
    })
  }, t("ob_start")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, langOpts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    onClick: () => onLang(o.value),
    style: {
      border: "1px solid " + (lang === o.value ? "var(--brand-400)" : "var(--border-default)"),
      background: lang === o.value ? "var(--brand-50)" : "transparent",
      color: lang === o.value ? "var(--brand-700)" : "var(--text-muted)",
      borderRadius: 999,
      padding: "5px 13px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, o.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: stepLabel
  }, t("ob_step"), " 1 / 2"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, t("ob_name_t")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, t("ob_name_s"))), /*#__PURE__*/React.createElement(Input, {
    label: t("ob_firstname"),
    placeholder: t("ob_name_ph"),
    value: name,
    onChange: e => setName(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(0)
  }, t("back")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => setStep(2),
    disabled: !name.trim()
  }, t("continue")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: stepLabel
  }, t("ob_step"), " 2 / 2"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, t("ob_goals_t")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, t("ob_goals_s"))), /*#__PURE__*/React.createElement(GoalRow, {
    icon: "footprints",
    tint: "var(--sage-500)",
    label: t("goal_steps"),
    unit: t("u_steps"),
    value: goals.steps,
    step: 500,
    min: 1000,
    lang: lang,
    onChange: v => setGoal("steps", v)
  }), /*#__PURE__*/React.createElement(GoalRow, {
    icon: "flame",
    tint: "var(--apricot-500)",
    label: t("goal_energy"),
    unit: t("u_kcal"),
    value: goals.energy,
    step: 50,
    min: 800,
    lang: lang,
    onChange: v => setGoal("energy", v)
  }), /*#__PURE__*/React.createElement(GoalRow, {
    icon: "activity",
    tint: "var(--brand-500)",
    label: t("goal_active"),
    unit: t("u_min"),
    value: goals.activeMin,
    step: 5,
    min: 5,
    lang: lang,
    onChange: v => setGoal("activeMin", v)
  }), /*#__PURE__*/React.createElement(GoalRow, {
    icon: "droplet",
    tint: "var(--brand-400)",
    label: t("goal_water"),
    unit: t("u_glasses"),
    value: goals.water,
    step: 1,
    min: 1,
    lang: lang,
    onChange: v => setGoal("water", v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, t("back")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: () => onDone({
      name: name.trim()
    }, goals)
  }, t("ob_start_use"))))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "28px 18px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      padding: "32px 26px"
    }
  }, steps[step]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 7,
      marginTop: 18
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === step ? 22 : 7,
      height: 7,
      borderRadius: 999,
      background: i === step ? "var(--brand-500)" : "var(--ink-200)",
      transition: "all .24s"
    }
  })))));
}
const stepLabel = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: ".07em",
  textTransform: "uppercase",
  color: "var(--brand-600)",
  marginBottom: 12
};
function GoalRow({
  icon,
  tint,
  label,
  unit,
  value,
  step,
  min,
  onChange,
  lang
}) {
  const {
    L
  } = window;
  const btn = (dir, fn) => /*#__PURE__*/React.createElement("button", {
    onClick: fn,
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      border: "1px solid var(--border-default)",
      background: "var(--surface-card)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-600)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: dir,
    size: 18,
    strokeWidth: 2.3
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "var(--ink-50)",
      color: tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, window.numFmt(lang, value), " ", unit)), btn("minus", () => onChange(Math.max(min, value - step))), btn("plus", () => onChange(value + step)));
}
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/onboarding.jsx", error: String((e && e.message) || e) }); }

// app/profiili.jsx
try { (() => {
/* Vire-app — Profiili-moduuli: pääsivu + alasivut (omat tiedot, historiat,
   ilmoitukset, asetukset) + kirjaudu ulos. */

function ProfileModule({
  store,
  t,
  lang,
  page,
  setPage,
  onMenu
}) {
  const [localPage, setLocalPage] = React.useState("main");
  const pg = page !== undefined ? page : localPage;
  const nav = setPage || setLocalPage;
  const back = () => nav("main");
  if (pg === "myinfo") return /*#__PURE__*/React.createElement(window.MyInfoView, {
    store: store,
    t: t,
    lang: lang,
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "messages") return /*#__PURE__*/React.createElement(window.MessagesView, {
    store: store,
    t: t,
    lang: lang,
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "export") return /*#__PURE__*/React.createElement(window.ExportView, {
    store: store,
    t: t,
    lang: lang,
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "trainhist") return /*#__PURE__*/React.createElement(window.HistoryView, {
    store: store,
    t: t,
    lang: lang,
    kind: "train",
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "foodhist") return /*#__PURE__*/React.createElement(window.HistoryView, {
    store: store,
    t: t,
    lang: lang,
    kind: "food",
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "notif") return /*#__PURE__*/React.createElement(window.NotificationsView, {
    store: store,
    t: t,
    onBack: back,
    onMenu: onMenu
  });
  if (pg === "settings") return /*#__PURE__*/React.createElement(window.SettingsView, {
    store: store,
    t: t,
    lang: lang,
    onBack: back,
    onMenu: onMenu
  });
  return /*#__PURE__*/React.createElement(ProfileMain, {
    store: store,
    t: t,
    lang: lang,
    onNav: nav,
    onMenu: onMenu
  });
}
function ProfileMain({
  store,
  t,
  lang,
  onNav,
  onMenu
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button
  } = window.VS;
  const {
    L,
    PageHeader,
    SectionLabel
  } = window;
  const p = store.state.profile;
  const g = store.state.goals;
  const [confirmLogout, setConfirmLogout] = React.useState(false);
  const days = Object.values(store.state.days);
  const totalMeals = days.reduce((a, d) => a + d.meals.length, 0);
  const totalWorkouts = days.reduce((a, d) => a + d.workouts.length, 0);
  const activeDays = days.filter(d => d.meals.length || d.workouts.length || d.steps || d.water || d.mood).length;
  const sinceDate = p.since ? window.parseKey(p.since) : new Date();
  const daysSince = Math.max(1, Math.round((Date.now() - sinceDate) / 86400000) + 1);
  const menu = [{
    id: "myinfo",
    icon: "user-round",
    label: t("m_myinfo")
  }, {
    id: "messages",
    icon: "message-circle",
    label: t("m_messages")
  }, {
    id: "trainhist",
    icon: "trending-up",
    label: t("m_trainhist")
  }, {
    id: "foodhist",
    icon: "utensils",
    label: t("m_foodhist")
  }, {
    id: "export",
    icon: "download",
    label: t("m_export")
  }, {
    id: "notif",
    icon: "bell",
    label: t("m_notif")
  }, {
    id: "settings",
    icon: "settings",
    label: t("m_settings")
  }];
  const avatar = p.photo ? /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: p.name,
    style: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand-300)"
    }
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: p.name || "?",
    size: "xl",
    ring: true
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("profile_t"),
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, avatar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 800
    }
  }, p.name || "—"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, t("member_days", {
    n: daysSince
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, t("pilot_user")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, [{
    v: totalMeals,
    l: t("st_meals")
  }, {
    v: totalWorkouts,
    l: t("st_workouts")
  }, {
    v: activeDays,
    l: t("st_active")
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.l,
    padding: "md",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("goals_section")), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, [{
    k: "steps",
    icon: "footprints",
    tint: "var(--sage-500)",
    label: t("goal_steps_l"),
    unit: t("u_steps"),
    step: 500,
    min: 1000
  }, {
    k: "energy",
    icon: "flame",
    tint: "var(--apricot-500)",
    label: t("goal_energy_l"),
    unit: t("u_kcal"),
    step: 50,
    min: 800
  }, {
    k: "activeMin",
    icon: "activity",
    tint: "var(--brand-500)",
    label: t("goal_active"),
    unit: t("u_min"),
    step: 5,
    min: 5
  }, {
    k: "water",
    icon: "droplet",
    tint: "var(--brand-400)",
    label: t("goal_water"),
    unit: t("u_glasses"),
    step: 1,
    min: 1
  }].map((row, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: row.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "13px 16px",
      borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--ink-50)",
      color: row.tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: row.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, row.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, window.numFmt(lang, g[row.k]), " ", row.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => store.updateGoals({
      [row.k]: Math.max(row.min, g[row.k] - row.step)
    }),
    style: stepBtn
  }, /*#__PURE__*/React.createElement(L, {
    name: "minus",
    size: 16,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => store.updateGoals({
      [row.k]: g[row.k] + row.step
    }),
    style: stepBtn
  }, /*#__PURE__*/React.createElement(L, {
    name: "plus",
    size: 16,
    strokeWidth: 2.4
  }))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("menu_section")), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, menu.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => onNav(m.id),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 16px",
      border: "none",
      borderBottom: i < menu.length - 1 ? "1px solid var(--border-subtle)" : "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: m.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, m.label), /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 19,
    color: "var(--ink-300)"
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, !confirmLogout ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmLogout(true),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 13,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      textAlign: "left",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--status-error-bg)",
      color: "var(--coral-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "log-out",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 700,
      color: "var(--coral-700)"
    }
  }, t("m_logout"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("logout_confirm")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setConfirmLogout(false)
  }, t("cancel")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "danger",
    style: {
      background: "var(--coral-500)",
      color: "#fff"
    },
    onClick: () => store.resetAll()
  }, t("logout_yes"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 12,
      color: "var(--text-muted)",
      padding: "4px 0 8px",
      lineHeight: 1.6
    }
  }, "Vire \xB7 ", t("version"), " ", store.version, /*#__PURE__*/React.createElement("br", null), t("data_note"))));
}
const stepBtn = {
  width: 34,
  height: 34,
  borderRadius: 10,
  border: "1px solid var(--border-default)",
  background: "var(--surface-card)",
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  color: "var(--ink-600)"
};
Object.assign(window, {
  ProfileModule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/profiili.jsx", error: String((e && e.message) || e) }); }

// app/ravinto.jsx
try { (() => {
/* Vire-app — Ravinto-moduuli. Alanavigaatio: Koti / Yleisnäkymä / Ruokapäiväkirja. */

const ATERIAT = [{
  id: "aamiainen",
  key: "meal_breakfast",
  icon: "sunrise"
}, {
  id: "lounas",
  key: "meal_lunch",
  icon: "sun"
}, {
  id: "valipala",
  key: "meal_snack",
  icon: "apple"
}, {
  id: "paivallinen",
  key: "meal_dinner",
  icon: "moon"
}];
const PIKAVALINNAT = [{
  name: {
    fi: "Kaurapuuro",
    en: "Oatmeal",
    sv: "Havregröt"
  },
  kcal: 210
}, {
  name: {
    fi: "Ruisleipä & juusto",
    en: "Rye bread & cheese",
    sv: "Rågbröd & ost"
  },
  kcal: 180
}, {
  name: {
    fi: "Kananmuna",
    en: "Egg",
    sv: "Ägg"
  },
  kcal: 78
}, {
  name: {
    fi: "Banaani",
    en: "Banana",
    sv: "Banan"
  },
  kcal: 105
}, {
  name: {
    fi: "Kanasalaatti",
    en: "Chicken salad",
    sv: "Kycklingsallad"
  },
  kcal: 340
}, {
  name: {
    fi: "Lohi & peruna",
    en: "Salmon & potato",
    sv: "Lax & potatis"
  },
  kcal: 520
}, {
  name: {
    fi: "Jogurtti & marjat",
    en: "Yogurt & berries",
    sv: "Yoghurt & bär"
  },
  kcal: 160
}, {
  name: {
    fi: "Kahvi & maito",
    en: "Coffee & milk",
    sv: "Kaffe & mjölk"
  },
  kcal: 40
}];
function RavintoModule({
  store,
  onHome,
  t,
  lang,
  onMenu
}) {
  const {
    AppFrame,
    BottomNav
  } = window;
  const [sub, setSub] = React.useState("yleis");
  const [jumpSlot, setJumpSlot] = React.useState(null);
  const items = [{
    id: "koti",
    label: t("nav_home"),
    icon: "house",
    onClick: onHome
  }, {
    id: "yleis",
    label: t("nav_overview"),
    icon: "pie-chart",
    active: sub === "yleis",
    onClick: () => setSub("yleis")
  }, {
    id: "kirja",
    label: t("nav_diary"),
    icon: "notebook-pen",
    active: sub === "kirja",
    onClick: () => setSub("kirja")
  }];
  const openMeal = slot => {
    setJumpSlot(slot);
    setSub("kirja");
  };
  const screen = sub === "kirja" ? /*#__PURE__*/React.createElement(Ruokapaivakirja, {
    store: store,
    t: t,
    lang: lang,
    onMenu: onMenu,
    initialSlot: jumpSlot
  }) : /*#__PURE__*/React.createElement(RavintoYleis, {
    store: store,
    t: t,
    lang: lang,
    onMenu: onMenu,
    onLog: () => setSub("kirja"),
    onOpenMeal: openMeal
  });
  return /*#__PURE__*/React.createElement(AppFrame, {
    bottom: /*#__PURE__*/React.createElement(BottomNav, {
      items: items
    })
  }, screen);
}
function RavintoYleis({
  store,
  onLog,
  onOpenMeal,
  t,
  lang,
  onMenu
}) {
  const {
    Card,
    ProgressRing,
    Button,
    Badge
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const key = window.dateKey();
  const day = store.day(key);
  const g = store.state.goals;
  const totals = window.dayTotals(day);
  const remaining = Math.max(0, g.energy - totals.energy);
  const byMeal = ATERIAT.map(a => {
    const ms = day.meals.filter(m => m.slot === a.id);
    return {
      ...a,
      kcal: ms.reduce((x, m) => x + (Number(m.kcal) || 0), 0),
      count: ms.length
    };
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("food_title"),
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      margin: "-4px 4px 0"
    }
  }, window.longDateL(lang)), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 8
    }
  }, t("todays_meals")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, byMeal.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => onOpenMeal(m.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "11px 10px",
      width: "100%",
      textAlign: "left",
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      background: "var(--surface-card)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: chip(m.count ? "var(--apricot-100)" : "var(--ink-100)", m.count ? "var(--apricot-700)" : "var(--ink-400)")
  }, /*#__PURE__*/React.createElement(L, {
    name: m.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5
    }
  }, t(m.key)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, m.count ? `${m.count} ${t("entries_n")}` : t("not_logged"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: m.count ? "var(--text-secondary)" : "var(--ink-300)",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal ? `${m.kcal} kcal` : "—"), /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-300)"
  }))))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "soft",
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "notebook-pen",
      size: 18
    }),
    onClick: onLog
  }, t("open_diary")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: totals.energy,
    max: g.energy,
    accent: "nutrition",
    valueText: window.numFmt(lang, totals.energy),
    label: `/ ${window.numFmt(lang, g.energy)} kcal`,
    size: 120,
    thickness: 11
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, t("remaining")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, window.numFmt(lang, remaining), " kcal"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: totals.energy === 0 ? "neutral" : "success",
    dot: true
  }, totals.energy === 0 ? t("no_logs_yet") : t("good_balance")))))), /*#__PURE__*/React.createElement(WaterCard, {
    store: store,
    dayKey: key,
    t: t
  })));
}
function WaterCard({
  store,
  dayKey,
  t
}) {
  const {
    Card
  } = window.VS;
  const {
    L
  } = window;
  const day = store.day(dayKey);
  const goal = store.state.goals.water;
  const water = day.water || 0;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "droplet",
    size: 20,
    color: "var(--brand-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("goal_water")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, water, " / ", goal, " ", t("u_glasses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      flexWrap: "wrap"
    }
  }, Array.from({
    length: goal
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => store.setWater(dayKey, water === i + 1 ? i : i + 1),
    style: {
      flex: "1 1 0",
      minWidth: 28,
      height: 38,
      borderRadius: 10,
      cursor: "pointer",
      background: i < water ? "var(--brand-100)" : "var(--surface-sunken)",
      border: i < water ? "1.5px solid var(--brand-300)" : "1.5px solid transparent",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "droplet",
    size: 16,
    color: i < water ? "var(--brand-500)" : "var(--ink-300)"
  })))));
}
function Ruokapaivakirja({
  store,
  t,
  lang,
  onMenu,
  initialSlot
}) {
  const {
    Card,
    Button,
    Input,
    Badge
  } = window.VS;
  const {
    L,
    PageHeader,
    Dropdown,
    SectionLabel
  } = window;
  const key = window.dateKey();
  const day = store.day(key);
  const [slot, setSlot] = React.useState(initialSlot || "aamiainen");
  React.useEffect(() => {
    if (initialSlot) setSlot(initialSlot);
  }, [initialSlot]);
  const [text, setText] = React.useState("");
  const [kcal, setKcal] = React.useState("");
  const addFree = () => {
    if (!text.trim()) return;
    store.addMeal(key, {
      slot,
      text: text.trim(),
      kcal: Math.round(Number(kcal) || 0)
    });
    setText("");
    setKcal("");
  };
  const addQuick = idx => {
    const q = PIKAVALINNAT[idx];
    store.addMeal(key, {
      slot,
      text: q.name[lang] || q.name.fi,
      kcal: q.kcal
    });
  };
  const slotMeals = day.meals.filter(m => m.slot === slot);
  const menuOpts = PIKAVALINNAT.map((q, i) => ({
    value: String(i),
    label: `${q.name[lang] || q.name.fi} · ${q.kcal} kcal`,
    icon: /*#__PURE__*/React.createElement(L, {
      name: "utensils",
      size: 16
    })
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("nav_diary"),
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      margin: "-4px 4px 0"
    }
  }, window.longDateL(lang)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ATERIAT.map(a => {
    const on = slot === a.id;
    const logged = day.meals.some(m => m.slot === a.id);
    return /*#__PURE__*/React.createElement("button", {
      key: a.id,
      onClick: () => setSlot(a.id),
      style: {
        position: "relative",
        flex: 1,
        border: on ? "1.5px solid var(--brand-400)" : "1px solid var(--border-default)",
        background: on ? "var(--brand-50)" : logged ? "var(--sage-100)" : "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        padding: "10px 4px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        color: on ? "var(--brand-700)" : logged ? "var(--sage-700)" : "var(--ink-500)",
        fontFamily: "var(--font-sans)"
      }
    }, logged ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 5,
        right: 5,
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "var(--sage-500)",
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "check",
      size: 10,
      color: "#fff",
      strokeWidth: 3.5
    })) : null, /*#__PURE__*/React.createElement(L, {
      name: a.icon,
      size: 19
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: on || logged ? 700 : 600
      }
    }, t(a.key)));
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("write_self"), " \u2014 ", t(ATERIAT.find(a => a.id === slot).key).toLowerCase()), /*#__PURE__*/React.createElement("textarea", {
    placeholder: t("meal_ph"),
    value: text,
    onChange: e => setText(e.target.value),
    rows: 2,
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "none",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-default)",
      padding: "11px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--surface-card)",
      lineHeight: 1.45
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    placeholder: "kcal",
    value: kcal,
    onChange: e => setKcal(e.target.value),
    optional: t("optional")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: addFree,
    disabled: !text.trim(),
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "plus",
      size: 17
    })
  }, t("add")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      margin: "4px 0 8px"
    }
  }, t("choose_menu")), /*#__PURE__*/React.createElement(Dropdown, {
    value: "",
    options: menuOpts,
    placeholder: t("choose_menu"),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "list",
      size: 18
    }),
    onChange: v => addQuick(Number(v))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      marginTop: 8,
      lineHeight: 1.45
    }
  }, t("menu_note")))), /*#__PURE__*/React.createElement(SectionLabel, null, t(ATERIAT.find(a => a.id === slot).key), " \u2014 ", t("logged_label")), slotMeals.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: chip("var(--ink-100)", "var(--ink-400)")
  }, /*#__PURE__*/React.createElement(L, {
    name: "utensils",
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, t("no_meals_slot"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, slotMeals.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: 1.35
    }
  }, m.text), m.kcal ? /*#__PURE__*/React.createElement(Badge, {
    tone: "nutrition"
  }, m.kcal, " kcal") : null, /*#__PURE__*/React.createElement("button", {
    onClick: () => store.removeMeal(key, m.id),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--ink-400)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "trash-2",
    size: 17
  })))))));
}
const chip = (bg, fg) => ({
  width: 36,
  height: 36,
  borderRadius: 11,
  background: bg,
  color: fg,
  display: "grid",
  placeItems: "center",
  flexShrink: 0
});
Object.assign(window, {
  RavintoModule,
  ATERIAT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/ravinto.jsx", error: String((e && e.message) || e) }); }

// app/settings.jsx
try { (() => {
/* Vire-app — alasivut: Omat tiedot, Ilmoitukset, Asetukset. */

/* ---------- Omat tiedot ---------- */
function MyInfoView({
  store,
  t,
  lang,
  onBack,
  onMenu
}) {
  const {
    Card,
    Input,
    Button,
    Avatar
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const p = store.state.profile;
  const [f, setF] = React.useState({
    name: p.name,
    email: p.email,
    age: p.age,
    height: p.height,
    weight: p.weight
  });
  const [saved, setSaved] = React.useState(false);
  const set = (k, v) => {
    setF(x => ({
      ...x,
      [k]: v
    }));
    setSaved(false);
  };
  const save = () => {
    store.updateProfile(f);
    setSaved(true);
  };
  const pickPhoto = e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => store.updateProfile({
      photo: reader.result
    });
    reader.readAsDataURL(file);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("myinfo_t"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, p.photo ? /*#__PURE__*/React.createElement("img", {
    src: p.photo,
    alt: p.name,
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand-300)"
    }
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: p.name || "?",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 8
    }
  }, p.name || "—"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "8px 14px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-soft)",
      color: "var(--text-brand)",
      fontWeight: 700,
      fontSize: 13.5,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "camera",
    size: 16
  }), " ", t("change_photo"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: pickPhoto,
    style: {
      display: "none"
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t("field_name"),
    value: f.name,
    onChange: e => set("name", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("field_email"),
    type: "email",
    placeholder: "aino@esimerkki.fi",
    value: f.email,
    onChange: e => set("email", e.target.value),
    optional: t("optional")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t("field_age"),
    type: "number",
    value: f.age,
    onChange: e => set("age", e.target.value),
    style: {
      flex: 1
    },
    optional: t("optional")
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("field_height"),
    type: "number",
    value: f.height,
    onChange: e => set("height", e.target.value),
    style: {
      flex: 1
    },
    optional: t("optional")
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("field_weight"),
    type: "number",
    value: f.weight,
    onChange: e => set("weight", e.target.value),
    style: {
      flex: 1
    },
    optional: t("optional")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, t("myinfo_note")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: save,
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: saved ? "check" : "save",
      size: 17
    })
  }, saved ? t("saved_ok") : t("save")))));
}

/* ---------- Ilmoitukset ---------- */
function NotificationsView({
  store,
  t,
  onBack,
  onMenu
}) {
  const {
    Card,
    Switch
  } = window.VS;
  const {
    L,
    PageHeader
  } = window;
  const n = store.state.settings.notif;
  const rows = [{
    k: "workout",
    icon: "footprints",
    tint: "var(--sage-500)",
    label: t("notif_workout"),
    sub: t("notif_workout_s")
  }, {
    k: "meal",
    icon: "utensils",
    tint: "var(--apricot-500)",
    label: t("notif_meal"),
    sub: t("notif_meal_s")
  }, {
    k: "weekly",
    icon: "calendar-check",
    tint: "var(--brand-500)",
    label: t("notif_weekly"),
    sub: t("notif_weekly_s")
  }, {
    k: "mood",
    icon: "heart",
    tint: "var(--lilac-500)",
    label: t("notif_mood"),
    sub: t("notif_mood_s")
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("notif_t"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      margin: "-2px 4px 0",
      lineHeight: 1.45
    }
  }, t("notif_sub")), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 16px",
      borderBottom: i < rows.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--ink-50)",
      color: r.tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: r.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, r.sub)), /*#__PURE__*/React.createElement(Switch, {
    checked: !!n[r.k],
    onChange: () => store.updateNotif({
      [r.k]: !n[r.k]
    })
  }))))));
}

/* ---------- Asetukset ---------- */
function SettingsView({
  store,
  t,
  lang,
  onBack,
  onMenu
}) {
  const {
    Card,
    Switch,
    Button,
    Input
  } = window.VS;
  const {
    L,
    PageHeader,
    SectionLabel,
    Dropdown
  } = window;
  const s = store.state.settings;
  const [syncUrl, setSyncUrl] = React.useState(s.syncUrl || "");
  const [syncState, setSyncState] = React.useState(null); // null | 'loading' | 'ok' | 'fail' | 'none'
  const [confirmReset, setConfirmReset] = React.useState(false);
  const doSync = async () => {
    store.updateSettings({
      syncUrl
    });
    if (!syncUrl) {
      setSyncState("none");
      return;
    }
    setSyncState("loading");
    const res = await window.fetchPrograms(syncUrl);
    if (res.ok) {
      store.setPrograms(res.programs);
      setSyncState("ok");
    } else setSyncState("fail");
  };
  const loadDemo = () => {
    store.setPrograms({
      workouts: window.DEFAULT_PLAN,
      nutrition: null
    });
    setSyncState("demo");
  };
  const programs = store.state.programs || {};
  const syncedTime = programs.syncedAt ? new Date(programs.syncedAt).toLocaleString(window.localeFor(lang), {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }) : null;
  const langOpts = [{
    value: "fi",
    label: t("lang_fi"),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "languages",
      size: 16
    })
  }, {
    value: "en",
    label: t("lang_en"),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "languages",
      size: 16
    })
  }, {
    value: "sv",
    label: t("lang_sv"),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "languages",
      size: 16
    })
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: t("settings_t"),
    onBack: onBack,
    onMenu: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("appearance")), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(ToggleRow, {
    icon: "moon",
    tint: "var(--lilac-500)",
    label: t("dark_mode"),
    sub: t("dark_mode_s"),
    checked: s.theme === "dark",
    onChange: () => store.updateSettings({
      theme: s.theme === "dark" ? "light" : "dark"
    })
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    icon: "circle-dashed",
    tint: "var(--brand-500)",
    label: t("hide_rings"),
    sub: t("hide_rings_s"),
    last: true,
    checked: s.hideRings,
    onChange: () => store.updateSettings({
      hideRings: !s.hideRings
    })
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("language")), /*#__PURE__*/React.createElement(Dropdown, {
    value: s.lang,
    options: langOpts,
    onChange: v => store.updateSettings({
      lang: v
    }),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "languages",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("cloud_section")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, syncedTime ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "10px 12px",
      borderRadius: 12,
      background: "var(--status-success-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: "var(--green-500)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "check",
    size: 18,
    strokeWidth: 2.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--green-700)"
    }
  }, t("program_active")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, t("synced_at"), " ", syncedTime)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      store.clearPrograms();
      setSyncState(null);
    },
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--ink-400)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "x",
    size: 18
  }))) : null, /*#__PURE__*/React.createElement(Input, {
    label: t("sync_url"),
    placeholder: t("sync_url_ph"),
    value: syncUrl,
    onChange: e => setSyncUrl(e.target.value),
    optional: t("optional")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: doSync,
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "refresh-cw",
      size: 16
    })
  }, t("sync_now")), syncState === "loading" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "\u2026") : null, syncState === "ok" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--green-700)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "check-circle-2",
    size: 16
  }), " ", t("sync_ok")) : null, syncState === "fail" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--coral-700)",
      fontWeight: 700
    }
  }, t("sync_fail")) : null, syncState === "none" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, t("sync_none")) : null, syncState === "demo" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--green-700)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "check-circle-2",
    size: 16
  }), " ", t("sync_loaded")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, t("sync_help")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "soft",
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "download",
      size: 17
    }),
    onClick: loadDemo
  }, t("sync_demo_btn")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("data_section")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, !confirmReset ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "var(--status-error-bg)",
      color: "var(--coral-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "rotate-ccw",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700
    }
  }, t("start_over")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, t("start_over_s"))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setConfirmReset(true)
  }, t("reset_btn"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("reset_confirm")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setConfirmReset(false)
  }, t("cancel")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "danger",
    style: {
      background: "var(--coral-500)",
      color: "#fff"
    },
    onClick: () => store.resetAll()
  }, t("reset_yes"))))))));
}
function ToggleRow({
  icon,
  tint,
  label,
  sub,
  checked,
  onChange,
  last
}) {
  const {
    Switch
  } = window.VS;
  const {
    L
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 16px",
      borderBottom: last ? "none" : "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--ink-50)",
      color: tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, sub)), /*#__PURE__*/React.createElement(Switch, {
    checked: checked,
    onChange: onChange
  }));
}
Object.assign(window, {
  MyInfoView,
  NotificationsView,
  SettingsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/settings.jsx", error: String((e && e.message) || e) }); }

// app/shell.jsx
try { (() => {
/* Vire-app — kehyksetön kuori: ikoni, runko, navigaatiot, hero, dropdown, valikko. */

function L({
  name,
  size = 22,
  color,
  strokeWidth
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    ref.current.appendChild(i);
    const attrs = {
      width: size,
      height: size
    };
    if (strokeWidth) attrs["stroke-width"] = strokeWidth;
    window.lucide.createIcons({
      attrs,
      root: ref.current
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      color
    }
  });
}

/* Vire-logomerkki inline-SVG:nä (toimii myös niputetussa tiedostossa). */
function VireMark({
  size = 26,
  color = "var(--brand-500)",
  dot = "var(--apricot-500)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    role: "img",
    "aria-label": "Vire"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.5 17 L22.5 32.5 Q24 34.6 25.5 32.4 L35 16",
    stroke: color,
    strokeWidth: "6.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "35.5",
    cy: "12.5",
    r: "3.6",
    fill: dot
  }));
}

/* Sisältöalue. Reilusti tilaa alalaitaan (liukuva alapalkki + hengitystila).
   immersive = oma tausta (etusivun hero), muutoin vaalea surface-page. */
function AppFrame({
  children,
  bottom,
  immersive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 520,
      margin: "0 auto",
      minHeight: "100dvh",
      background: immersive ? "var(--home-base, #4A383B)" : "var(--surface-page)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 0 0 1px var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: 132,
      position: "relative"
    }
  }, children), bottom);
}

/* ---------- Liukulasinen alapalkki (liquid glass) ---------- */
function BottomNav({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "max(16px, env(safe-area-inset-bottom))",
      width: "min(92%, 440px)",
      zIndex: 30,
      borderRadius: 26,
      padding: 6,
      background: "var(--nav-bg, rgba(255,255,255,0.4))",
      backdropFilter: "blur(30px) saturate(1.9)",
      WebkitBackdropFilter: "blur(30px) saturate(1.9)",
      border: "1px solid rgba(255,255,255,0.4)",
      boxShadow: "0 14px 40px rgba(8,28,25,0.24), inset 0 1px 0 rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, items.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: tab.onClick,
    style: {
      flex: 1,
      border: "none",
      cursor: "pointer",
      borderRadius: 20,
      background: tab.active ? "var(--btn-primary-bg)" : "transparent",
      boxShadow: tab.active ? "0 6px 16px rgba(142,114,118,0.42)" : "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      padding: "9px 0 7px",
      color: tab.active ? "var(--btn-primary-ink)" : "var(--nav-ink, var(--ink-500))",
      fontFamily: "var(--font-sans)",
      transition: "background .24s var(--ease-out), color .24s"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: tab.icon,
    size: 22,
    strokeWidth: tab.active ? 2.4 : 1.95
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: tab.active ? 700 : 600,
      letterSpacing: ".01em"
    }
  }, tab.label)))));
}

/* ---------- Hampurilaispainike (kolme viivaa, oikea ylälaita) ---------- */
function HamburgerButton({
  onClick,
  light
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": "Valikko",
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      flexShrink: 0,
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      border: light ? "1px solid rgba(255,255,255,0.28)" : "1px solid var(--border-subtle)",
      background: light ? "rgba(255,255,255,0.16)" : "var(--surface-card)",
      backdropFilter: light ? "blur(12px)" : "none",
      WebkitBackdropFilter: light ? "blur(12px)" : "none",
      boxShadow: light ? "none" : "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "menu",
    size: 22,
    color: light ? "#fff" : "var(--ink-700)",
    strokeWidth: 2.2
  }));
}

/* ---------- Etusivun hero: taustakuva blurautuu alas ja tasoittuu teal-väriin ---------- */
function HeroBg() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        el.style.transform = `translate3d(0, ${(y * 0.28).toFixed(1)}px, 0)`;
        el.style.opacity = String(Math.max(0, 1 - y / 520));
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 540,
      background: "var(--home-base, #4A383B)",
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transform: "translate3d(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vire-hero-bg",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vire-hero-bg",
    style: {
      position: "absolute",
      inset: 0,
      filter: "blur(18px)",
      transform: "scale(1.06)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 32%, #000 64%)",
      maskImage: "linear-gradient(to bottom, transparent 32%, #000 64%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 760,
      background: "linear-gradient(to bottom, rgba(24,14,16,0.46) 0px, rgba(24,14,16,0.06) 140px, rgba(74,56,59,0) 270px, var(--home-base, #4A383B) 460px, var(--home-base, #4A383B) 760px)"
    }
  })));
}

/* Puolikaari-mittari (tavoite-edistyminen). value 0..1 */
function GaugeSemi({
  value,
  size = 200,
  stroke = 16,
  track = "rgba(255,255,255,0.22)",
  fill = "#fff",
  children
}) {
  const v = Math.max(0, Math.min(1, value || 0));
  const r = (size - stroke) / 2;
  const cx = size / 2,
    cy = size / 2;
  const len = Math.PI * r;
  const d = `M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size / 2 + stroke / 2 + 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size / 2 + stroke,
    style: {
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: track,
    strokeWidth: stroke,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: fill,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: len,
    strokeDashoffset: len * (1 - v),
    style: {
      transition: "stroke-dashoffset 1s var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, children));
}

/* Tavallinen sivuotsikko (alasivut). onMenu lisää hampurilaisen oikeaan laitaan. */
function PageHeader({
  title,
  onBack,
  right,
  onMenu
}) {
  const menuEl = onMenu ? /*#__PURE__*/React.createElement(HamburgerButton, {
    onClick: onMenu
  }) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "calc(env(safe-area-inset-top) + 18px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 18px 14px"
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "var(--surface-card)",
      width: 38,
      height: 38,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      boxShadow: "var(--shadow-sm)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "chevron-left",
    size: 22,
    color: "var(--ink-700)"
  })) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      flex: 1,
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, title), right || null, menuEl));
}

/* ---------- Liukuva valikkolaatikko (hampurilaisesta) ---------- */
function MenuDrawer({
  open,
  onClose,
  items,
  footer,
  header
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 80,
      pointerEvents: open ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-overlay)",
      opacity: open ? 1 : 0,
      transition: "opacity .3s var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "min(82%, 360px)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-xl)",
      transform: open ? "translateX(0)" : "translateX(102%)",
      transition: "transform .34s var(--ease-out)",
      display: "flex",
      flexDirection: "column",
      paddingTop: "calc(env(safe-area-inset-top) + 14px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4px 16px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, header), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sulje",
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      border: "none",
      background: "var(--surface-sunken)",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "x",
    size: 20,
    color: "var(--ink-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 12px 12px"
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: "d" + i,
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "8px 12px"
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: it.onClick,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "13px 12px",
      border: "none",
      background: it.active ? "var(--brand-50)" : "transparent",
      cursor: "pointer",
      borderRadius: 14,
      fontFamily: "var(--font-sans)",
      textAlign: "left",
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: it.active ? "var(--brand-100)" : "var(--ink-50)",
      color: it.danger ? "var(--coral-700)" : it.active ? "var(--brand-700)" : "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: it.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: it.active ? 700 : 600,
      color: it.danger ? "var(--coral-700)" : "var(--text-primary)"
    }
  }, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "#fff",
      background: "var(--brand-500)",
      borderRadius: 999,
      padding: "2px 8px"
    }
  }, it.badge) : null, it.active ? /*#__PURE__*/React.createElement(L, {
    name: "check",
    size: 17,
    color: "var(--brand-600)"
  }) : null))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 18px calc(env(safe-area-inset-bottom) + 16px)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer) : null));
}
function EmptyState({
  icon,
  title,
  body,
  action
}) {
  const {
    Card
  } = window.VS;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: 14,
      padding: "40px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 18,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 27
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800
    }
  }, title), body ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, body) : null, action);
}

/* Kevyt dropdown-valikko (oma, ei natiivi). options = [{value,label,icon?}] */
function Dropdown({
  value,
  options,
  onChange,
  placeholder,
  icon
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const sel = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    style: {
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-default)",
      background: "var(--surface-card)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      textAlign: "left",
      color: sel ? "var(--text-primary)" : "var(--text-muted)",
      fontSize: 15
    }
  }, icon || sel && sel.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-500)",
      display: "inline-flex"
    }
  }, sel && sel.icon ? sel.icon : icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: sel ? 600 : 500
    }
  }, sel ? sel.label : placeholder || ""), /*#__PURE__*/React.createElement(L, {
    name: open ? "chevron-up" : "chevron-down",
    size: 19,
    color: "var(--ink-400)"
  })), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      zIndex: 40,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      padding: 6
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    onClick: () => {
      onChange(o.value);
      setOpen(false);
    },
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 12px",
      border: "none",
      background: o.value === value ? "var(--brand-50)" : "transparent",
      cursor: "pointer",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: o.value === value ? 700 : 600,
      color: o.value === value ? "var(--brand-700)" : "var(--text-primary)",
      textAlign: "left"
    }
  }, o.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: o.value === value ? "var(--brand-600)" : "var(--ink-500)"
    }
  }, o.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, o.label), o.value === value ? /*#__PURE__*/React.createElement(L, {
    name: "check",
    size: 17,
    color: "var(--brand-600)"
  }) : null))) : null);
}

/* Section-otsikko listoille */
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 4px 10px",
      ...style
    }
  }, children);
}
Object.assign(window, {
  L,
  VireMark,
  AppFrame,
  BottomNav,
  HamburgerButton,
  HeroBg,
  GaugeSemi,
  MenuDrawer,
  PageHeader,
  EmptyState,
  Dropdown,
  SectionLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/shell.jsx", error: String((e && e.message) || e) }); }

// app/store.jsx
try { (() => {
/* Vire-app — tilamalli + localStorage + päivä/viikko-apurit.
   Kaikki alkaa nollasta. v0.1.1: asetukset, kieli, teema, fiilis, pilvisynkkaus. */

const STORE_KEY = "vire.app.v1";
const APP_VERSION = "0.2.1";

/* ---------- päivä & viikko ---------- */
function dateKey(d = new Date()) {
  const y = d.getFullYear(),
    m = String(d.getMonth() + 1).padStart(2, "0"),
    day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function parseKey(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function isoWeek(d = new Date()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = (t.getUTCDay() + 6) % 7;
  t.setUTCDate(t.getUTCDate() - dayNum + 3);
  const firstThu = new Date(Date.UTC(t.getUTCFullYear(), 0, 4));
  const firstDayNum = (firstThu.getUTCDay() + 6) % 7;
  firstThu.setUTCDate(firstThu.getUTCDate() - firstDayNum + 3);
  return 1 + Math.round((t - firstThu) / (7 * 24 * 3600 * 1000));
}
function weekDays(ref = new Date()) {
  const dow = (ref.getDay() + 6) % 7;
  const monday = new Date(ref);
  monday.setDate(ref.getDate() - dow);
  return Array.from({
    length: 7
  }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}
function shortDate(d, lang) {
  if (lang === "en") return `${d.getMonth() + 1}/${d.getDate()}`;
  return `${d.getDate()}.${d.getMonth() + 1}.`;
}

/* ---------- oletustila (tyhjä) ---------- */
function freshState() {
  return {
    onboarded: false,
    licensed: false,
    licenseEmail: "",
    version: APP_VERSION,
    profile: {
      name: "",
      since: dateKey(),
      photo: "",
      email: "",
      age: "",
      height: "",
      weight: ""
    },
    goals: {
      steps: 8000,
      energy: 2000,
      activeMin: 30,
      water: 8
    },
    settings: {
      lang: "fi",
      theme: "light",
      hideRings: false,
      notif: {
        workout: true,
        meal: true,
        weekly: true,
        mood: false
      },
      syncUrl: ""
    },
    programs: {
      workouts: null,
      nutrition: null,
      syncedAt: null
    },
    messages: [],
    days: {} // 'YYYY-MM-DD' -> { steps, water, meals:[], workouts:[], mood }
  };
}
function freshDay() {
  return {
    steps: 0,
    water: 0,
    meals: [],
    workouts: [],
    mood: null
  };
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return freshState();
    const saved = JSON.parse(raw);
    const base = freshState();
    return {
      ...base,
      ...saved,
      profile: {
        ...base.profile,
        ...(saved.profile || {})
      },
      goals: {
        ...base.goals,
        ...(saved.goals || {})
      },
      messages: saved.messages || base.messages,
      settings: {
        ...base.settings,
        ...(saved.settings || {}),
        notif: {
          ...base.settings.notif,
          ...((saved.settings || {}).notif || {})
        }
      },
      programs: {
        ...base.programs,
        ...(saved.programs || {})
      },
      version: APP_VERSION
    };
  } catch (e) {
    return freshState();
  }
}
function saveState(s) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(s));
  } catch (e) {}
}

/* ---------- React-hook ---------- */
function useVireStore() {
  const [state, setState] = React.useState(loadState);
  React.useEffect(() => {
    saveState(state);
  }, [state]);

  /* teema + kieli dokumenttiin */
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.settings.theme === "dark" ? "dark" : "light");
    document.documentElement.setAttribute("lang", state.settings.lang);
  }, [state.settings.theme, state.settings.lang]);
  const patchDayFn = (s, key, fn) => {
    const cur = s.days[key] || freshDay();
    return {
      ...s,
      days: {
        ...s.days,
        [key]: fn(cur)
      }
    };
  };
  const api = React.useMemo(() => ({
    state,
    version: APP_VERSION,
    completeOnboarding(profile, goals) {
      setState(s => ({
        ...s,
        onboarded: true,
        profile: {
          ...s.profile,
          ...profile,
          since: dateKey()
        },
        goals: {
          ...s.goals,
          ...goals
        }
      }));
    },
    setLicensed(email) {
      setState(s => ({
        ...s,
        licensed: true,
        licenseEmail: email || s.licenseEmail,
        profile: {
          ...s.profile,
          email: email || s.profile.email
        }
      }));
    },
    clearPrograms() {
      setState(s => ({
        ...s,
        programs: {
          workouts: null,
          nutrition: null,
          syncedAt: null
        }
      }));
    },
    sendMessage(text) {
      const now = Date.now();
      setState(s => ({
        ...s,
        messages: [...(s.messages || []), {
          id: now,
          from: "me",
          text,
          t: now
        }, {
          id: now + 1,
          from: "coach",
          text: "__auto__",
          t: now + 1
        }]
      }));
    },
    updateProfile(patch) {
      setState(s => ({
        ...s,
        profile: {
          ...s.profile,
          ...patch
        }
      }));
    },
    updateGoals(patch) {
      setState(s => ({
        ...s,
        goals: {
          ...s.goals,
          ...patch
        }
      }));
    },
    updateSettings(patch) {
      setState(s => ({
        ...s,
        settings: {
          ...s.settings,
          ...patch
        }
      }));
    },
    updateNotif(patch) {
      setState(s => ({
        ...s,
        settings: {
          ...s.settings,
          notif: {
            ...s.settings.notif,
            ...patch
          }
        }
      }));
    },
    setPrograms(programs) {
      setState(s => ({
        ...s,
        programs: {
          ...programs,
          syncedAt: Date.now()
        }
      }));
    },
    day(key = dateKey()) {
      return state.days[key] || freshDay();
    },
    addSteps(key, n) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        steps: Math.max(0, c.steps + n)
      })));
    },
    setSteps(key, n) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        steps: Math.max(0, n)
      })));
    },
    setWater(key, n) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        water: Math.max(0, n)
      })));
    },
    setMood(key, mood) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        mood
      })));
    },
    addMeal(key, meal) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        meals: [...c.meals, {
          id: Date.now() + Math.random(),
          ...meal
        }]
      })));
    },
    removeMeal(key, id) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        meals: c.meals.filter(m => m.id !== id)
      })));
    },
    addWorkout(key, w) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        workouts: [...c.workouts, {
          id: Date.now() + Math.random(),
          ...w
        }]
      })));
    },
    removeWorkout(key, id) {
      setState(s => patchDayFn(s, key, c => ({
        ...c,
        workouts: c.workouts.filter(w => w.id !== id)
      })));
    },
    resetAll() {
      const fresh = freshState();
      saveState(fresh);
      setState(fresh);
    }
  }), [state]);
  return api;
}

/* ---------- Oletus-viikko-ohjelma (paikkamerkki personoidulle ohjelmalle) ----------
   dow: 0 = maanantai … 6 = sunnuntai. Yksi lepopäivä. */
const DEFAULT_PLAN = [{
  dow: 0,
  icon: "dumbbell",
  mins: 40,
  name: {
    fi: "Voima — alavartalo",
    en: "Strength — lower body",
    sv: "Styrka — underkropp"
  },
  focus: {
    fi: "Kyykky, askelkyykky, lankku",
    en: "Squat, lunge, plank",
    sv: "Knäböj, utfall, planka"
  }
}, {
  dow: 1,
  icon: "footprints",
  mins: 30,
  name: {
    fi: "Palauttava kävely",
    en: "Recovery walk",
    sv: "Återhämtningspromenad"
  },
  focus: {
    fi: "Reipas kävely ulkona",
    en: "Brisk walk outdoors",
    sv: "Rask promenad ute"
  }
}, {
  dow: 2,
  icon: "dumbbell",
  mins: 40,
  name: {
    fi: "Voima — ylävartalo",
    en: "Strength — upper body",
    sv: "Styrka — överkropp"
  },
  focus: {
    fi: "Punnerrus, soutu, olkapäät",
    en: "Push-up, row, shoulders",
    sv: "Armhävning, rodd, axlar"
  }
}, {
  dow: 3,
  icon: "heart",
  mins: 25,
  name: {
    fi: "Liikkuvuus & venyttely",
    en: "Mobility & stretch",
    sv: "Rörlighet & stretch"
  },
  focus: {
    fi: "Lonkat, selkä, hartiat",
    en: "Hips, back, shoulders",
    sv: "Höfter, rygg, axlar"
  }
}, {
  dow: 4,
  icon: "activity",
  mins: 35,
  name: {
    fi: "Intervallit",
    en: "Intervals",
    sv: "Intervaller"
  },
  focus: {
    fi: "6 × 1 min reipasta + palautus",
    en: "6 × 1 min hard + rest",
    sv: "6 × 1 min hårt + vila"
  }
}, {
  dow: 5,
  icon: "footprints",
  mins: 50,
  name: {
    fi: "Pitkä lenkki",
    en: "Long walk/run",
    sv: "Lång tur"
  },
  focus: {
    fi: "Rauhallinen pidempi lenkki",
    en: "Easy longer session",
    sv: "Lugn längre tur"
  }
}, {
  dow: 6,
  icon: null,
  mins: 0,
  name: {
    fi: "Lepopäivä",
    en: "Rest day",
    sv: "Vilodag"
  },
  focus: {
    fi: "Palaudu — kevyt liikkuvuus sallittu",
    en: "Recover — light mobility ok",
    sv: "Återhämta — lätt rörlighet ok"
  }
}];

/* Seuraava suunniteltu sessio etusivun agendaa varten.
   Käyttää synkronoitua ohjelmaa jos saatavilla, muuten oletusohjelmaa. */
function nextSession(store, lang = "fi") {
  const today = new Date();
  const todayDow = (today.getDay() + 6) % 7;
  // jos tämän päivän sessio on jo treeni-päivä eikä lepo, näytä se; muuten seuraava treenipäivä
  for (let i = 0; i < 7; i++) {
    const dow = (todayDow + i) % 7;
    const p = DEFAULT_PLAN.find(x => x.dow === dow);
    if (!p) continue;
    const isRest = !p.icon || p.mins === 0;
    if (i === 0 && isRest) {
      // tänään lepo: tarjoa se sellaisenaan
      return {
        ...p,
        when: 0,
        isRest,
        name: p.name[lang] || p.name.fi,
        focus: p.focus[lang] || p.focus.fi
      };
    }
    if (isRest) continue;
    return {
      ...p,
      when: i,
      isRest: false,
      name: p.name[lang] || p.name.fi,
      focus: p.focus[lang] || p.focus.fi
    };
  }
  const p = DEFAULT_PLAN[0];
  return {
    ...p,
    when: 0,
    isRest: false,
    name: p.name[lang] || p.name.fi,
    focus: p.focus[lang] || p.focus.fi
  };
}

/* päivän johdetut summat */
function dayTotals(day) {
  const energy = day.meals.reduce((a, m) => a + (Number(m.kcal) || 0), 0);
  const activeMin = day.workouts.reduce((a, w) => a + (Number(w.mins) || 0), 0);
  return {
    energy,
    activeMin,
    steps: day.steps || 0,
    water: day.water || 0
  };
}

/* ---------- pilvisynkronointi (CSV tai JSON URL) ----------
   Yrittää hakea ohjelmat annetusta osoitteesta. Palauttaa { ok, programs?, error? }.
   Tukee: JSON ({workouts, nutrition}) tai yksinkertainen CSV (otsikkorivi + rivit). */
async function fetchPrograms(url) {
  if (!url) return {
    ok: false,
    error: "no-url"
  };
  try {
    const res = await fetch(url, {
      cache: "no-store"
    });
    if (!res.ok) return {
      ok: false,
      error: "http-" + res.status
    };
    const text = await res.text();
    let programs;
    if (text.trim().startsWith("{") || text.trim().startsWith("[")) {
      const data = JSON.parse(text);
      programs = {
        workouts: data.workouts || data,
        nutrition: data.nutrition || null
      };
    } else {
      // CSV → riveiksi
      const rows = text.trim().split(/\r?\n/).map(r => r.split(","));
      const head = rows.shift() || [];
      const items = rows.map(r => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] || "").trim()])));
      programs = {
        workouts: items,
        nutrition: null
      };
    }
    return {
      ok: true,
      programs
    };
  } catch (e) {
    return {
      ok: false,
      error: String(e && e.message || e)
    };
  }
}
Object.assign(window, {
  useVireStore,
  dayTotals,
  dateKey,
  parseKey,
  isoWeek,
  weekDays,
  shortDate,
  freshDay,
  fetchPrograms,
  APP_VERSION,
  DEFAULT_PLAN,
  nextSession
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/store.jsx", error: String((e && e.message) || e) }); }

// app/today.jsx
try { (() => {
/* Vire-app — Tänään (etusivu). Immersiivinen hero (taustakuva → teal),
   puolikaari-mittari, seuraavan treenin agenda, fiilis, ateriat & harjoitukset. */

const MOODS = [{
  value: "great",
  icon: "laugh",
  color: "var(--sage-500)",
  key: "mood_great"
}, {
  value: "good",
  icon: "smile",
  color: "var(--brand-500)",
  key: "mood_good"
}, {
  value: "even",
  icon: "meh",
  color: "var(--lilac-500)",
  key: "mood_even"
}, {
  value: "tired",
  icon: "frown",
  color: "var(--apricot-500)",
  key: "mood_tired"
}, {
  value: "stressed",
  icon: "annoyed",
  color: "var(--coral-500)",
  key: "mood_stressed"
}];

/* Mittarin alla näkyvä motivoiva teksti — vaihtuu päivän mittaan (kellonaika + edistyminen). */
function motivMessage(t, pct, now) {
  now = now || new Date();
  if (pct >= 100) return t("motiv_done");
  if (pct >= 78) return t("motiv_almost");
  const h = now.getHours();
  const pool = h < 6 ? ["motiv_night", "motiv_kind1"] : h < 10 ? ["motiv_dawn", "motiv_morning", "motiv_kind2"] : h < 14 ? ["motiv_midday", "motiv_kind2"] : h < 18 ? ["motiv_afternoon", "motiv_kind1"] : h < 22 ? ["motiv_evening", "motiv_kind1"] : ["motiv_night", "motiv_kind1"];
  const seed = now.getFullYear() * 366 + (now.getMonth() * 31 + now.getDate()) + h;
  return t(pool[seed % pool.length]);
}

/* Johdetut oivallukset käyttäjän omasta datasta. Palauttaa priorisoidun listan. */
function computeInsights(store, t, lang) {
  const out = [];
  const days = store.state.days || {};
  const keys = Object.keys(days);
  const hasDay = d => d && (d.meals.length || d.workouts.length || d.steps || d.water || d.mood);
  const loggedCount = keys.filter(k => hasDay(days[k])).length;
  if (loggedCount < 2) return {
    ready: false,
    items: []
  };

  // 1) putki (yhtäjaksoiset päivät tähän asti)
  let streak = 0;
  for (let i = 0; i < 120; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    if (hasDay(days[window.dateKey(d)])) streak++;else break;
  }
  if (streak >= 2) out.push({
    icon: "flame",
    tint: "var(--apricot-500)",
    title: t("ins_streak", {
      n: streak
    }),
    body: t("ins_streak_s")
  });

  // 2) askeltrendi (3 tuoreinta vs 3 edellistä)
  const last6 = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    last6.push((days[window.dateKey(d)] || {}).steps || 0);
  }
  const recent = last6.slice(3).reduce((a, b) => a + b, 0);
  const prev = last6.slice(0, 3).reduce((a, b) => a + b, 0);
  if (prev > 0 && recent > 0) {
    const ch = Math.round((recent - prev) / prev * 100);
    if (ch >= 8) out.push({
      icon: "trending-up",
      tint: "var(--sage-500)",
      title: t("ins_steptrend_up"),
      body: t("ins_steptrend_up_s", {
        n: ch
      })
    });else if (ch <= -8) out.push({
      icon: "trending-down",
      tint: "var(--brand-500)",
      title: t("ins_steptrend_dn"),
      body: t("ins_steptrend_dn_s")
    });
  }

  // 3) aktiivisin viikonpäivä (askeleet + liikeminuutit)
  const byDow = [0, 0, 0, 0, 0, 0, 0];
  keys.forEach(k => {
    const d = days[k];
    const dow = (window.parseKey(k).getDay() + 6) % 7;
    byDow[dow] += (d.steps || 0) + d.workouts.reduce((a, w) => a + (Number(w.mins) || 0) * 60, 0);
  });
  const maxDow = byDow.indexOf(Math.max(...byDow));
  if (byDow[maxDow] > 0) {
    const name = window.DOW_LONG[lang][(maxDow + 1) % 7];
    out.push({
      icon: "calendar-heart",
      tint: "var(--lilac-500)",
      title: t("ins_bestday", {
        d: name.charAt(0).toUpperCase() + name.slice(1)
      }),
      body: t("ins_bestday_s")
    });
  }

  // 4) vesi tällä viikolla
  const goal = store.state.goals.water || 8;
  const wd = window.weekDays(new Date()).filter(d => ((days[window.dateKey(d)] || {}).water || 0) >= goal).length;
  if (wd >= 1) out.push({
    icon: "droplet",
    tint: "var(--brand-400)",
    title: t("ins_water"),
    body: t("ins_water_s", {
      n: wd
    })
  });

  // 5) keskimääräinen energia (tuoreet kirjatut päivät)
  const en = keys.map(k => days[k].meals.reduce((a, m) => a + (Number(m.kcal) || 0), 0)).filter(x => x > 0);
  if (en.length >= 2) {
    const avg = Math.round(en.reduce((a, b) => a + b, 0) / en.length);
    out.push({
      icon: "flame",
      tint: "var(--apricot-500)",
      title: t("ins_energy", {
        n: window.numFmt(lang, avg)
      }),
      body: t("ins_energy_s")
    });
  }
  return {
    ready: out.length > 0,
    items: out.slice(0, 3)
  };
}
function InsightsCard({
  store,
  t,
  lang
}) {
  const {
    Card
  } = window.VS;
  const {
    L,
    SectionLabel
  } = window;
  const res = computeInsights(store, t, lang);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, t("insights_t")), !res.ready ? /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "sparkles",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("ins_more"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, res.items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "13px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--ink-50)",
      color: it.tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: it.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      lineHeight: 1.4
    }
  }, it.body))))));
}
function TodayScreen({
  store,
  onGo,
  onMenu,
  t,
  lang
}) {
  const {
    Card,
    ProgressRing,
    Badge
  } = window.VS;
  const {
    L,
    HeroBg,
    GaugeSemi,
    HamburgerButton,
    SectionLabel
  } = window;
  const key = window.dateKey();
  const day = store.day(key);
  const totals = window.dayTotals(day);
  const g = store.state.goals;
  const p = store.state.profile;
  const name = p.name || "";
  const hideRings = store.state.settings.hideRings;
  const h = new Date().getHours();
  const greeting = h < 10 ? t("greet_morning") : h < 17 ? t("greet_day") : t("greet_evening");
  const [stepInput, setStepInput] = React.useState("");
  const ratios = [Math.min(1, g.steps ? totals.steps / g.steps : 0), Math.min(1, g.energy ? totals.energy / g.energy : 0), Math.min(1, g.activeMin ? totals.activeMin / g.activeMin : 0)];
  const overall = ratios.reduce((a, b) => a + b, 0) / ratios.length;
  const pct = Math.round(overall * 100);
  const rings = [{
    v: totals.steps,
    max: g.steps,
    accent: "movement",
    icon: "footprints",
    label: t("goal_steps"),
    val: window.numFmt(lang, totals.steps)
  }, {
    v: totals.energy,
    max: g.energy,
    accent: "nutrition",
    icon: "flame",
    label: t("goal_energy"),
    val: window.numFmt(lang, totals.energy)
  }, {
    v: totals.activeMin,
    max: g.activeMin,
    accent: "brand",
    icon: "activity",
    label: t("nav_move"),
    val: String(totals.activeMin)
  }];
  const allZero = totals.steps === 0 && totals.energy === 0 && totals.activeMin === 0 && totals.water === 0;
  const avatarSrc = p.photo;
  const sess = window.nextSession(store, lang);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBg, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "calc(env(safe-area-inset-top) + 18px) 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(window.VireMark, {
    size: 26,
    color: "#fff",
    dot: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "Vire")), /*#__PURE__*/React.createElement(HamburgerButton, {
    light: true,
    onClick: onMenu
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "rgba(255,255,255,0.78)",
      fontWeight: 600,
      marginBottom: 4
    }
  }, window.longDateL(lang)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#fff",
      textWrap: "balance"
    }
  }, greeting, name ? ", " + name : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "min(22vh, 168px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onGo("liike"),
    style: {
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: 20,
      padding: "15px 16px",
      fontFamily: "var(--font-sans)",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(16px) saturate(1.4)",
      WebkitBackdropFilter: "blur(16px) saturate(1.4)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 15,
      background: "rgba(255,255,255,0.18)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: sess.isRest ? "moon" : sess.icon || "dumbbell",
    size: 23
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.72)",
      marginBottom: 3
    }
  }, t("next_session"), " \xB7 ", sess.when === 0 ? t("next_today") : sess.when === 1 ? t("next_tomorrow") : t("next_in_days", {
    n: sess.when
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      fontWeight: 800,
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, sess.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.8)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, sess.isRest ? sess.focus : `${sess.focus} · ${sess.mins} ${t("u_min")}`)), /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 22,
    color: "rgba(255,255,255,0.85)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "22px 22px 8px"
    }
  }, /*#__PURE__*/React.createElement(GaugeSemi, {
    value: overall,
    size: 232,
    stroke: 17
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 46,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums"
    }
  }, pct, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.8)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, t("of_goals"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      maxWidth: 280,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.92)",
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1.4,
      textWrap: "balance"
    }
  }, motivMessage(t, pct))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "20px 20px 0",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, !hideRings ? /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, t("day_goals")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, t("in_good_vire"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, rings.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: r.v,
    max: r.max,
    accent: r.accent,
    size: 94,
    thickness: 9,
    valueText: /*#__PURE__*/React.createElement(L, {
      name: r.icon,
      size: 24
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      fontVariantNumeric: "tabular-nums"
    }
  }, r.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, r.label)))))) : null, /*#__PURE__*/React.createElement(InsightsCard, {
    store: store,
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(MoodField, {
    store: store,
    dayKey: key,
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: "var(--sage-100)",
      color: "var(--sage-700)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "footprints",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("goal_steps")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, t("add_manually"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      fontVariantNumeric: "tabular-nums"
    }
  }, window.numFmt(lang, totals.steps))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10
    }
  }, [500, 1000, 2000].map(n => /*#__PURE__*/React.createElement(window.VS.Button, {
    key: n,
    variant: "soft",
    size: "sm",
    style: {
      flex: 1
    },
    onClick: () => store.addSteps(key, n)
  }, "+", window.numFmt(lang, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    placeholder: t("set_value"),
    value: stepInput,
    onChange: e => setStepInput(e.target.value),
    style: inputStyle
  }), /*#__PURE__*/React.createElement(window.VS.Button, {
    variant: "secondary",
    size: "sm",
    disabled: stepInput === "",
    onClick: () => {
      store.setSteps(key, Math.round(Number(stepInput) || 0));
      setStepInput("");
    }
  }, t("set_btn"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)",
      marginTop: 10,
      lineHeight: 1.45
    }
  }, t("steps_note"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 4px 10px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.62)"
    }
  }, t("todays_meals")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onGo("ravinto"),
    style: linkBtnLight
  }, t("view_all"))), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      padding: 8
    }
  }, day.meals.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    t: t,
    icon: "utensils",
    label: t("no_meals_today"),
    onAdd: () => onGo("ravinto")
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, day.meals.slice(0, 4).map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 8px",
      borderBottom: i < Math.min(day.meals.length, 4) - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: miniChip("var(--apricot-100)", "var(--apricot-700)")
  }, /*#__PURE__*/React.createElement(L, {
    name: "utensils",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 14.5,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, m.text), m.kcal ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-secondary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal, " kcal") : null))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 4px 10px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.62)"
    }
  }, t("todays_workouts")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onGo("liike"),
    style: linkBtnLight
  }, t("view_all"))), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      padding: 8
    }
  }, day.workouts.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    t: t,
    icon: "dumbbell",
    label: t("no_workouts_today"),
    onAdd: () => onGo("liike")
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, day.workouts.slice(0, 4).map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: w.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 8px",
      borderBottom: i < Math.min(day.workouts.length, 4) - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: miniChip("var(--sage-100)", "var(--sage-700)")
  }, /*#__PURE__*/React.createElement(L, {
    name: "activity",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, w.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-secondary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, w.mins, " ", t("u_min"))))))), allZero ? /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: "var(--surface-card)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      boxShadow: "var(--shadow-sm)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "sparkles",
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.45
    }
  }, t("fresh_start"))) : null));
}
function Empty({
  icon,
  label,
  onAdd,
  t
}) {
  const {
    L
  } = window;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 10px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: miniChip("var(--ink-100)", "var(--ink-400)")
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: "var(--text-muted)",
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement(L, {
    name: "plus-circle",
    size: 22,
    color: "var(--brand-500)"
  }));
}
function MoodField({
  store,
  dayKey,
  t,
  lang
}) {
  const {
    Card
  } = window.VS;
  const {
    L,
    Dropdown
  } = window;
  const day = store.day(dayKey);
  const opts = MOODS.map(m => ({
    value: m.value,
    label: t(m.key),
    icon: /*#__PURE__*/React.createElement(L, {
      name: m.icon,
      size: 18
    })
  }));
  const recent = window.weekDays(window.parseKey(dayKey)).map(d => {
    const dd = store.day(window.dateKey(d));
    return {
      d,
      mood: dd.mood
    };
  });
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: "var(--lilac-100)",
      color: "var(--lilac-500)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "heart",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, t("mood_title")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, t("mood_sub")))), /*#__PURE__*/React.createElement(Dropdown, {
    value: day.mood,
    options: opts,
    placeholder: t("mood_pick"),
    icon: /*#__PURE__*/React.createElement(L, {
      name: "smile",
      size: 18
    }),
    onChange: v => store.setMood(dayKey, v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, t("mood_history")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, recent.map((r, i) => {
    const m = MOODS.find(x => x.value === r.mood);
    const isToday = window.dateKey(r.d) === dayKey;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "1",
        maxWidth: 38,
        borderRadius: 11,
        display: "grid",
        placeItems: "center",
        background: m ? "color-mix(in srgb, " + m.color + " 16%, transparent)" : "var(--surface-sunken)",
        border: isToday ? "1.5px solid var(--brand-300)" : "1.5px solid transparent"
      }
    }, m ? /*#__PURE__*/React.createElement(L, {
      name: m.icon,
      size: 18,
      color: m.color
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 99,
        background: "var(--ink-300)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, window.DOW_SHORT[lang][i]));
  }))));
}
const inputStyle = {
  flex: 1,
  height: 40,
  borderRadius: "var(--radius-md)",
  border: "1px solid var(--border-default)",
  padding: "0 14px",
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  color: "var(--text-primary)",
  background: "var(--surface-card)"
};
const linkBtnLight = {
  border: "none",
  background: "rgba(255,255,255,0.16)",
  color: "#fff",
  fontWeight: 700,
  fontSize: 12.5,
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
  padding: "5px 12px",
  borderRadius: 999
};
const miniChip = (bg, fg) => ({
  width: 34,
  height: 34,
  borderRadius: 10,
  background: bg,
  color: fg,
  display: "grid",
  placeItems: "center",
  flexShrink: 0
});
Object.assign(window, {
  TodayScreen,
  MOODS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/today.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-avatar-css")) {
  const el = document.createElement("style");
  el.id = "vire-avatar-css";
  el.textContent = `
.vire-avatar {
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex-shrink: 0;
  font-family: var(--font-sans); font-weight: var(--weight-semibold);
  background: var(--brand-100); color: var(--brand-700); user-select: none;
}
.vire-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vire-avatar--xs { width: 28px; height: 28px; font-size: 11px; }
.vire-avatar--sm { width: 36px; height: 36px; font-size: 13px; }
.vire-avatar--md { width: 44px; height: 44px; font-size: 15px; }
.vire-avatar--lg { width: 56px; height: 56px; font-size: 19px; }
.vire-avatar--xl { width: 80px; height: 80px; font-size: 28px; }
.vire-avatar--ring { box-shadow: 0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand-300); }
.vire-avatar__status {
  position: absolute; right: 0; bottom: 0; width: 28%; height: 28%; min-width: 8px; min-height: 8px;
  border-radius: 50%; border: 2px solid var(--surface-card); background: var(--status-success);
}
`;
  document.head.appendChild(el);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0]).join("").toUpperCase();
}

/** Circular user avatar — image, or auto initials fallback. */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  status = false,
  className = "",
  ...rest
}) {
  const cls = ["vire-avatar", `vire-avatar--${size}`, ring ? "vire-avatar--ring" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)), status ? /*#__PURE__*/React.createElement("span", {
    className: "vire-avatar__status"
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-badge-css")) {
  const el = document.createElement("style");
  el.id = "vire-badge-css";
  el.textContent = `
.vire-badge {
  display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans);
  font-weight: var(--weight-semibold); line-height: 1; white-space: nowrap;
  border-radius: var(--radius-pill); border: 1px solid transparent;
}
.vire-badge--sm { font-size: var(--text-2xs); padding: 4px 9px; }
.vire-badge--md { font-size: var(--text-xs); padding: 6px 11px; }
.vire-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.vire-badge svg { width: 1em; height: 1em; stroke-width: 2; }

.vire-badge--neutral  { background: var(--ink-100);        color: var(--ink-700); }
.vire-badge--brand    { background: var(--brand-50);       color: var(--brand-700); }
.vire-badge--success  { background: var(--status-success-bg); color: var(--green-700); }
.vire-badge--warning  { background: var(--status-warning-bg); color: var(--amber-700); }
.vire-badge--error    { background: var(--status-error-bg);   color: var(--coral-700); }
.vire-badge--movement { background: var(--sage-100);       color: var(--sage-700); }
.vire-badge--nutrition{ background: var(--apricot-100);    color: var(--apricot-700); }

.vire-badge--solid.vire-badge--brand    { background: var(--brand-500);   color: #fff; }
.vire-badge--solid.vire-badge--success  { background: var(--green-500);   color: #fff; }
.vire-badge--solid.vire-badge--movement { background: var(--sage-500);    color: #fff; }
.vire-badge--solid.vire-badge--nutrition{ background: var(--apricot-500); color: #fff; }
.vire-badge--outline { background: transparent; border-color: currentColor; }
`;
  document.head.appendChild(el);
}

/** Small status / category pill. Calm soft tones by default. */
function Badge({
  tone = "neutral",
  size = "md",
  variant = "soft",
  dot = false,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  const cls = ["vire-badge", `vire-badge--${tone}`, `vire-badge--${size}`, variant === "solid" ? "vire-badge--solid" : "", variant === "outline" ? "vire-badge--outline" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "vire-badge__dot"
  }) : null, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-card-css")) {
  const el = document.createElement("style");
  el.id = "vire-card-css";
  el.textContent = `
.vire-card {
  background: var(--surface-card); border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);
  font-family: var(--font-sans); color: var(--text-primary);
  transition: box-shadow var(--duration-base) var(--ease-gentle),
              transform var(--duration-base) var(--ease-gentle),
              border-color var(--duration-base) var(--ease-gentle);
}
.vire-card--pad-sm { padding: var(--space-4); }
.vire-card--pad-md { padding: var(--space-6); }
.vire-card--pad-lg { padding: var(--space-8); }
.vire-card--flat { box-shadow: none; }
.vire-card--bare { border: none; box-shadow: none; }
.vire-card--soft { background: var(--surface-brand-soft); border-color: transparent; box-shadow: none; }
.vire-card--interactive { cursor: pointer; }
.vire-card--interactive:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--border-subtle); }
.vire-card--interactive:active { transform: translateY(0) scale(0.995); box-shadow: var(--shadow-sm); }
`;
  document.head.appendChild(el);
}

/** Vire's base surface — white, soft 20px radius, hairline + whisper shadow. */
function Card({
  padding = "md",
  flat = false,
  bare = false,
  soft = false,
  interactive = false,
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const cls = ["vire-card", `vire-card--pad-${padding}`, flat ? "vire-card--flat" : "", bare ? "vire-card--bare" : "", soft ? "vire-card--soft" : "", interactive ? "vire-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-ring-css")) {
  const el = document.createElement("style");
  el.id = "vire-ring-css";
  el.textContent = `
.vire-ring { position: relative; display: inline-flex; }
.vire-ring svg { display: block; transform: rotate(-90deg); }
.vire-ring__track { stroke: var(--ink-100); }
.vire-ring__fill { stroke-linecap: round; transition: stroke-dashoffset var(--duration-slow) var(--ease-out); }
.vire-ring__center {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center;
  font-family: var(--font-sans); gap: 1px;
}
.vire-ring__value { font-weight: var(--weight-extra); color: var(--text-primary); line-height: 1; font-variant-numeric: tabular-nums; }
.vire-ring__label { font-size: var(--text-2xs); font-weight: var(--weight-semibold); color: var(--text-muted); letter-spacing: .02em; }
`;
  document.head.appendChild(el);
}
const ACCENTS = {
  brand: "var(--brand-500)",
  movement: "var(--sage-500)",
  nutrition: "var(--apricot-500)",
  rest: "var(--lilac-500)",
  success: "var(--green-500)"
};

/** Circular progress ring — the signature Vire goal indicator. Animates its fill once on mount. */
function ProgressRing({
  value = 0,
  max = 100,
  size = 120,
  thickness = 10,
  accent = "brand",
  label,
  valueText,
  showValue = true,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const stroke = ACCENTS[accent] || accent;
  const valueSize = Math.round(size * 0.23);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["vire-ring", className].filter(Boolean).join(" "),
    style: {
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    className: "vire-ring__track",
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    className: "vire-ring__fill",
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    stroke: stroke,
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct)
  })), showValue ? /*#__PURE__*/React.createElement("div", {
    className: "vire-ring__center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vire-ring__value",
    style: {
      fontSize: valueSize
    }
  }, valueText != null ? valueText : `${Math.round(pct * 100)}%`), label ? /*#__PURE__*/React.createElement("span", {
    className: "vire-ring__label"
  }, label) : null) : null);
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-stat-css")) {
  const el = document.createElement("style");
  el.id = "vire-stat-css";
  el.textContent = `
.vire-stat {
  display: flex; flex-direction: column; gap: var(--space-3);
  background: var(--surface-card); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  padding: var(--space-5); font-family: var(--font-sans); min-width: 0;
}
.vire-stat__top { display: flex; align-items: center; gap: var(--space-3); }
.vire-stat__icon {
  width: 38px; height: 38px; border-radius: var(--radius-md); flex-shrink: 0;
  display: grid; place-items: center;
}
.vire-stat__icon svg { width: 20px; height: 20px; stroke-width: 1.9; }
.vire-stat__icon--brand    { background: var(--brand-50);    color: var(--brand-600); }
.vire-stat__icon--movement { background: var(--sage-100);    color: var(--sage-700); }
.vire-stat__icon--nutrition{ background: var(--apricot-100); color: var(--apricot-700); }
.vire-stat__icon--rest     { background: var(--lilac-100);   color: var(--lilac-500); }
.vire-stat__label { font-size: var(--text-sm); font-weight: var(--weight-semibold); color: var(--text-secondary); }
.vire-stat__value { font-size: var(--text-2xl); font-weight: var(--weight-extra); color: var(--text-primary); line-height: 1; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
.vire-stat__unit { font-size: var(--text-md); font-weight: var(--weight-semibold); color: var(--text-muted); margin-left: 4px; }
.vire-stat__foot { display: flex; align-items: center; gap: 6px; font-size: var(--text-sm); }
.vire-stat__delta { display: inline-flex; align-items: center; gap: 3px; font-weight: var(--weight-semibold); }
.vire-stat__delta svg { width: 15px; height: 15px; stroke-width: 2.2; }
.vire-stat__delta--up   { color: var(--green-700); }
.vire-stat__delta--down { color: var(--coral-700); }
.vire-stat__delta--flat { color: var(--text-muted); }
.vire-stat__sub { color: var(--text-muted); }
`;
  document.head.appendChild(el);
}
const Arrow = dir => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, dir === "up" ? /*#__PURE__*/React.createElement("path", {
  d: "m6 15 6-6 6 6"
}) : dir === "down" ? /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}) : /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}));

/** Compact metric tile — icon, big tabular value, optional trend delta. */
function StatTile({
  icon = null,
  accent = "brand",
  label,
  value,
  unit,
  delta,
  deltaDir = "flat",
  sub,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["vire-stat", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "vire-stat__top"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: `vire-stat__icon vire-stat__icon--${accent}`
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    className: "vire-stat__label"
  }, label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "vire-stat__value"
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    className: "vire-stat__unit"
  }, unit) : null), delta || sub ? /*#__PURE__*/React.createElement("div", {
    className: "vire-stat__foot"
  }, delta ? /*#__PURE__*/React.createElement("span", {
    className: `vire-stat__delta vire-stat__delta--${deltaDir}`
  }, Arrow(deltaDir), delta) : null, sub ? /*#__PURE__*/React.createElement("span", {
    className: "vire-stat__sub"
  }, sub) : null) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Self-contained: relies only on DS custom properties. */
if (typeof document !== "undefined" && !document.getElementById("vire-button-css")) {
  const el = document.createElement("style");
  el.id = "vire-button-css";
  el.textContent = `
.vire-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  font-family: var(--font-sans); font-weight: var(--weight-semibold);
  border-radius: var(--radius-pill); border: 1.5px solid transparent;
  cursor: pointer; white-space: nowrap; text-decoration: none;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.vire-btn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
.vire-btn:disabled { cursor: not-allowed; opacity: 0.45; box-shadow: none !important; }
.vire-btn--sm { font-size: var(--text-sm); padding: 0 var(--space-4); height: 36px; }
.vire-btn--md { font-size: var(--text-base); padding: 0 var(--space-6); height: 46px; }
.vire-btn--lg { font-size: var(--text-md); padding: 0 var(--space-8); height: 54px; }
.vire-btn--block { width: 100%; }
.vire-btn__icon { display: inline-flex; }
.vire-btn__icon svg { display: block; width: 1.15em; height: 1.15em; stroke-width: 2; }

.vire-btn--primary { background: var(--btn-primary-bg, var(--action-brand)); color: var(--btn-primary-ink, var(--text-inverse)); box-shadow: var(--btn-primary-shadow, var(--shadow-brand)); }
.vire-btn--primary:hover:not(:disabled) { background: var(--btn-primary-bg-hover, var(--action-brand-hover)); }
.vire-btn--primary:active:not(:disabled) { background: var(--btn-primary-bg-active, var(--action-brand-active)); transform: scale(0.97); }

.vire-btn--secondary { background: var(--surface-card); color: var(--text-primary); border-color: var(--border-default); }
.vire-btn--secondary:hover:not(:disabled) { background: var(--surface-sunken); border-color: var(--border-strong); }
.vire-btn--secondary:active:not(:disabled) { transform: scale(0.97); background: var(--ink-100); }

.vire-btn--ghost { background: transparent; color: var(--text-brand); }
.vire-btn--ghost:hover:not(:disabled) { background: var(--surface-brand-soft); }
.vire-btn--ghost:active:not(:disabled) { transform: scale(0.97); background: var(--brand-100); }

.vire-btn--soft { background: var(--surface-brand-soft); color: var(--text-brand); }
.vire-btn--soft:hover:not(:disabled) { background: var(--brand-100); }
.vire-btn--soft:active:not(:disabled) { transform: scale(0.97); background: var(--brand-200); }

.vire-btn--danger { background: var(--coral-500); color: var(--text-inverse); }
.vire-btn--danger:hover:not(:disabled) { background: var(--coral-700); }
.vire-btn--danger:active:not(:disabled) { transform: scale(0.97); background: var(--coral-700); }
`;
  document.head.appendChild(el);
}

/**
 * Vire primary call-to-action button. Pill-shaped, gentle press feedback.
 */
const Button = ({
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  className = "",
  children,
  ...rest
}) => {
  const cls = ["vire-btn", `vire-btn--${variant}`, `vire-btn--${size}`, block ? "vire-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "vire-btn__icon"
  }, iconLeft) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "vire-btn__icon"
  }, iconRight) : null);
};
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-checkbox-css")) {
  const el = document.createElement("style");
  el.id = "vire-checkbox-css";
  el.textContent = `
.vire-check { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); user-select: none; }
.vire-check--disabled { cursor: not-allowed; opacity: 0.5; }
.vire-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.vire-check__box {
  width: 24px; height: 24px; border-radius: var(--radius-xs); flex-shrink: 0;
  border: 1.5px solid var(--border-strong); background: var(--surface-card);
  display: grid; place-items: center;
  transition: background var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard);
}
.vire-check__box svg { width: 15px; height: 15px; color: #fff; stroke-width: 3; opacity: 0; transform: scale(0.6);
  transition: opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out); }
.vire-check:hover input:not(:disabled) + .vire-check__box { border-color: var(--brand-400); }
.vire-check input:checked + .vire-check__box { background: var(--action-brand); border-color: var(--action-brand); }
.vire-check input:checked + .vire-check__box svg { opacity: 1; transform: scale(1); }
.vire-check input:focus-visible + .vire-check__box { box-shadow: var(--ring-focus); }
.vire-check__label { font-size: var(--text-base); color: var(--text-primary); }
`;
  document.head.appendChild(el);
}
const Tick = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/** Square checkbox with an animated tick. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  className = "",
  ...rest
}) {
  const cls = ["vire-check", disabled ? "vire-check--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "vire-check__box"
  }, Tick), label ? /*#__PURE__*/React.createElement("span", {
    className: "vire-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-iconbtn-css")) {
  const el = document.createElement("style");
  el.id = "vire-iconbtn-css";
  el.textContent = `
.vire-iconbtn {
  display: inline-grid; place-items: center; cursor: pointer;
  border-radius: var(--radius-pill); border: 1.5px solid transparent;
  background: transparent; color: var(--ink-700); padding: 0;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.vire-iconbtn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
.vire-iconbtn:disabled { cursor: not-allowed; opacity: 0.4; }
.vire-iconbtn:active:not(:disabled) { transform: scale(0.92); }
.vire-iconbtn svg { display: block; stroke-width: 1.85; }
.vire-iconbtn--sm { width: 34px; height: 34px; } .vire-iconbtn--sm svg { width: 18px; height: 18px; }
.vire-iconbtn--md { width: 42px; height: 42px; } .vire-iconbtn--md svg { width: 21px; height: 21px; }
.vire-iconbtn--lg { width: 50px; height: 50px; } .vire-iconbtn--lg svg { width: 24px; height: 24px; }

.vire-iconbtn--plain:hover:not(:disabled) { background: var(--surface-sunken); color: var(--ink-900); }
.vire-iconbtn--soft { background: var(--surface-brand-soft); color: var(--text-brand); }
.vire-iconbtn--soft:hover:not(:disabled) { background: var(--brand-100); }
.vire-iconbtn--solid { background: var(--action-brand); color: var(--text-inverse); box-shadow: var(--shadow-brand); }
.vire-iconbtn--solid:hover:not(:disabled) { background: var(--action-brand-hover); }
.vire-iconbtn--outline { border-color: var(--border-default); color: var(--ink-700); }
.vire-iconbtn--outline:hover:not(:disabled) { background: var(--surface-sunken); border-color: var(--border-strong); }
`;
  document.head.appendChild(el);
}

/** Square-tap, circular icon-only button. Always pass an aria-label. */
function IconButton({
  variant = "plain",
  size = "md",
  icon,
  className = "",
  type = "button",
  ...rest
}) {
  const cls = ["vire-iconbtn", `vire-iconbtn--${variant}`, `vire-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-input-css")) {
  const el = document.createElement("style");
  el.id = "vire-input-css";
  el.textContent = `
.vire-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.vire-field__label { font-size: var(--label-size); font-weight: var(--weight-semibold); color: var(--text-primary); }
.vire-field__opt { color: var(--text-muted); font-weight: var(--weight-regular); }
.vire-input-wrap { position: relative; display: flex; align-items: center; }
.vire-input-wrap__icon { position: absolute; left: var(--space-4); display: inline-flex; color: var(--ink-400); pointer-events: none; }
.vire-input-wrap__icon svg { width: 19px; height: 19px; stroke-width: 1.85; }
.vire-input {
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text-primary); background: var(--surface-card);
  border: 1.5px solid var(--border-default); border-radius: var(--radius-md);
  height: 48px; padding: 0 var(--space-4); box-sizing: border-box;
  transition: border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.vire-input--has-icon { padding-left: 44px; }
.vire-input::placeholder { color: var(--text-disabled); }
.vire-input:hover:not(:disabled) { border-color: var(--border-strong); }
.vire-input:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--ring-focus); }
.vire-input:disabled { background: var(--surface-sunken); color: var(--text-disabled); cursor: not-allowed; }
.vire-field--error .vire-input { border-color: var(--status-error); }
.vire-field--error .vire-input:focus { box-shadow: 0 0 0 3px var(--status-error-bg); }
.vire-field__hint { font-size: var(--text-sm); color: var(--text-muted); }
.vire-field__hint--error { color: var(--coral-700); }
`;
  document.head.appendChild(el);
}

/** Labelled text field with optional leading icon, hint and error state. */
function Input({
  label,
  hint,
  error,
  optional = false,
  iconLeft = null,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || (label ? `vire-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const cls = ["vire-field", error ? "vire-field--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "vire-field__label",
    htmlFor: fieldId
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    className: "vire-field__opt"
  }, " \xB7 ", typeof optional === "string" ? optional : "valinnainen") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "vire-input-wrap"
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "vire-input-wrap__icon"
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: `vire-input ${iconLeft ? "vire-input--has-icon" : ""}`,
    "aria-invalid": error ? true : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "vire-field__hint vire-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "vire-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
if (typeof document !== "undefined" && !document.getElementById("vire-segmented-css")) {
  const el = document.createElement("style");
  el.id = "vire-segmented-css";
  el.textContent = `
.vire-segmented {
  display: inline-flex; padding: 4px; gap: 2px; background: var(--surface-sunken);
  border-radius: var(--radius-pill); font-family: var(--font-sans);
}
.vire-segmented--block { display: flex; width: 100%; }
.vire-segmented__opt {
  flex: 1; appearance: none; border: none; cursor: pointer; white-space: nowrap;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-semibold);
  color: var(--text-secondary); background: transparent; border-radius: var(--radius-pill);
  padding: 8px 18px; transition: color var(--duration-fast) var(--ease-standard),
              background var(--duration-base) var(--ease-gentle), box-shadow var(--duration-base) var(--ease-gentle);
}
.vire-segmented__opt:hover:not(.is-active) { color: var(--text-primary); }
.vire-segmented__opt.is-active { background: var(--surface-card); color: var(--text-primary); box-shadow: var(--shadow-sm); }
.vire-segmented__opt:focus-visible { outline: none; box-shadow: var(--ring-focus); }
`;
  document.head.appendChild(el);
}

/** Pill segmented control — switch between a few related views (e.g. Päivä / Viikko / Kuukausi). */
function SegmentedControl({
  options = [],
  value,
  onChange,
  block = false,
  className = ""
}) {
  const cls = ["vire-segmented", block ? "vire-segmented--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, options.map(opt => {
    const val = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: `vire-segmented__opt ${active ? "is-active" : ""}`,
      onClick: () => onChange && onChange(val)
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("vire-switch-css")) {
  const el = document.createElement("style");
  el.id = "vire-switch-css";
  el.textContent = `
.vire-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); user-select: none; }
.vire-switch--disabled { cursor: not-allowed; opacity: 0.5; }
.vire-switch__track {
  position: relative; width: 48px; height: 28px; border-radius: var(--radius-pill);
  background: var(--ink-300); flex-shrink: 0;
  transition: background var(--duration-base) var(--ease-gentle);
}
.vire-switch__thumb {
  position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%;
  background: #fff; box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease-gentle);
}
.vire-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.vire-switch input:checked + .vire-switch__track { background: var(--action-brand); }
.vire-switch input:checked + .vire-switch__track .vire-switch__thumb { transform: translateX(20px); }
.vire-switch input:focus-visible + .vire-switch__track { box-shadow: var(--ring-focus); }
.vire-switch__label { font-size: var(--text-base); color: var(--text-primary); }
`;
  document.head.appendChild(el);
}

/** On/off toggle. Gentle settle on flip, no bounce. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  className = "",
  ...rest
}) {
  const cls = ["vire-switch", disabled ? "vire-switch--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: id,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "vire-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vire-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "vire-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/LiikeModule.jsx
try { (() => {
/* Liike — treenimoduuli. Oma alapalkki: Koti / Harjoitteet / Viikko-ohjelma. */

/* Viikko 24 · 8.–14.6.2026. exercises = sen päivän harjoitteet. */
const LIIKE_WEEK = [{
  dow: "Ma",
  date: "8.6.",
  name: "Alakroppa & core",
  type: "Voima",
  icon: "dumbbell",
  mins: 42,
  status: "done",
  exercises: [{
    name: "Kyykky",
    sets: "4 × 10",
    rest: "90 s",
    dur: "0:46",
    tone: "duotone"
  }, {
    name: "Maastaveto",
    sets: "3 × 8",
    rest: "120 s",
    dur: "0:52",
    tone: "sage"
  }, {
    name: "Askelkyykky",
    sets: "3 × 12",
    rest: "75 s",
    dur: "0:38",
    tone: "warm"
  }, {
    name: "Lankku",
    sets: "3 × 45 s",
    rest: "45 s",
    dur: "0:33",
    tone: "natural"
  }]
}, {
  dow: "Ti",
  date: "9.6.",
  rest: true
}, {
  dow: "Ke",
  date: "10.6.",
  name: "Ylävartalo",
  type: "Voima",
  icon: "dumbbell",
  mins: 38,
  today: true,
  exercises: [{
    name: "Penkkipunnerrus",
    sets: "4 × 10",
    rest: "90 s",
    dur: "0:48",
    tone: "duotone"
  }, {
    name: "Kulmasoutu",
    sets: "3 × 12",
    rest: "75 s",
    dur: "0:52",
    tone: "sage"
  }, {
    name: "Pystypunnerrus",
    sets: "3 × 10",
    rest: "75 s",
    dur: "0:41",
    tone: "warm"
  }, {
    name: "Hauiskääntö",
    sets: "3 × 15",
    rest: "60 s",
    dur: "0:39",
    tone: "natural"
  }]
}, {
  dow: "To",
  date: "11.6.",
  rest: true
}, {
  dow: "Pe",
  date: "12.6.",
  name: "Koko keho",
  type: "Kierto",
  icon: "activity",
  mins: 45,
  exercises: [{
    name: "Kettlebell-heilautus",
    sets: "4 × 15",
    rest: "60 s",
    dur: "0:44",
    tone: "warm"
  }, {
    name: "Punnerrus",
    sets: "3 × 12",
    rest: "60 s",
    dur: "0:36",
    tone: "duotone"
  }, {
    name: "Leuanveto",
    sets: "3 × 8",
    rest: "90 s",
    dur: "0:40",
    tone: "sage"
  }]
}, {
  dow: "La",
  date: "13.6.",
  name: "Juoksulenkki",
  type: "Kesto",
  icon: "footprints",
  mins: 35,
  exercises: [{
    name: "Lämmittely",
    sets: "8 min",
    rest: "—",
    dur: "0:50",
    tone: "natural"
  }, {
    name: "Intervallit",
    sets: "6 × 1 min",
    rest: "1 min",
    dur: "0:42",
    tone: "sage"
  }, {
    name: "Loppuverryttely",
    sets: "6 min",
    rest: "—",
    dur: "0:31",
    tone: "duotone"
  }]
}, {
  dow: "Su",
  date: "14.6.",
  rest: true
}];
const TODAY_INDEX = 2;

/* ----- 16:9 videoupotuskenttä (paikkamerkki oikealle videolle) ----- */
function VideoField({
  tone = "duotone",
  duration = "0:45",
  caption = "Katso tekniikka"
}) {
  const {
    L
  } = window;
  const grads = {
    natural: "linear-gradient(135deg, #6E8C7C 0%, #9FB6A8 100%)",
    duotone: "linear-gradient(140deg, #3C4A93 0%, #6B7FD7 100%)",
    warm: "linear-gradient(135deg, #B5704A 0%, #E8A87C 100%)",
    sage: "linear-gradient(135deg, #4E7C66 0%, #88B89C 100%)"
  };
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setPlaying(true),
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 9",
      borderRadius: 14,
      overflow: "hidden",
      background: grads[tone],
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.32,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
      backgroundSize: "4px 4px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.28), rgba(0,0,0,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.92)",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      transform: playing ? "scale(0.9)" : "scale(1)",
      transition: "transform .24s"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: playing ? "loader" : "play",
    size: 24,
    color: "var(--brand-600)",
    strokeWidth: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "video",
    size: 15,
    color: "#fff"
  }), " ", caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#fff",
      background: "rgba(0,0,0,0.4)",
      padding: "3px 8px",
      borderRadius: 999,
      fontVariantNumeric: "tabular-nums"
    }
  }, duration)));
}

/* ----- Harjoitteet: päivän treeni tai "ei treenejä" ----- */
function HarjoitteetScreen({
  day
}) {
  const {
    Card,
    Badge,
    Button
  } = window.VS;
  const {
    L
  } = window;
  if (day.rest) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 20px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        fontWeight: 600,
        marginBottom: 2
      }
    }, ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"].indexOf(day.dow) > -1 ? day.dow : "", " ", day.date, " \xB7 Viikko 24"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 28,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: 20
      }
    }, "Harjoitteet"), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 14,
        minHeight: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: 20,
        background: "var(--lilac-100)",
        color: "var(--lilac-500)",
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "moon",
      size: 30
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800
      }
    }, "Ei treenej\xE4"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: "var(--text-secondary)",
        lineHeight: 1.5,
        maxWidth: 250
      }
    }, "T\xE4n\xE4\xE4n on lepop\xE4iv\xE4. Palautuminen on osa harjoittelua \u2014 anna kehon lev\xE4t\xE4."), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, "Lepop\xE4iv\xE4")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      marginBottom: 2
    }
  }, day.dow, " ", day.date, " \xB7 Viikko 24", day.today ? " · Tänään" : ""), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 16
    }
  }, "Harjoitteet"), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: "var(--sage-100)",
      color: "var(--sage-700)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: day.icon,
    size: 23
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800
    }
  }, day.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Personoitu ohjelma"))), day.status === "done" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Tehty") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "movement"
  }, day.type), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(L, {
      name: "clock",
      size: 13
    })
  }, day.mins, " min"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: /*#__PURE__*/React.createElement(L, {
      name: "list",
      size: 13
    })
  }, day.exercises.length, " liikett\xE4")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "play",
      size: 18
    })
  }, "Aloita harjoitus")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Liikkeet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, day.exercises.map((ex, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: "sm",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(VideoField, {
    tone: ex.tone,
    duration: ex.dur
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 4px 2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      display: "grid",
      placeItems: "center",
      fontSize: 13,
      fontWeight: 800,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, ex.sets, " \xB7 palautus ", ex.rest)), /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 20,
    color: "var(--ink-300)"
  }))))));
}

/* ----- Viikko-ohjelma: personoitu viikko, viikkonumero + päivämäärät ----- */
function ViikkoOhjelmaScreen({
  onOpenDay
}) {
  const {
    Card,
    Badge
  } = window.VS;
  const {
    L
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 16
    }
  }, "Viikko-ohjelma"), /*#__PURE__*/React.createElement(Card, {
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 14px",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "var(--surface-sunken)",
      width: 36,
      height: 36,
      borderRadius: 11,
      display: "grid",
      placeItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "chevron-left",
    size: 20,
    color: "var(--ink-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800
    }
  }, "Viikko 24"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "8.\u201314. kes\xE4kuuta 2026")), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "var(--surface-sunken)",
      width: 36,
      height: 36,
      borderRadius: 11,
      display: "grid",
      placeItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 20,
    color: "var(--ink-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, "4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "treeni\xE4")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, "3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "lepop\xE4iv\xE4\xE4")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, "160"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, LIIKE_WEEK.map((d, i) => {
    const rest = d.rest;
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      flat: true,
      interactive: !rest,
      onClick: () => !rest && onOpenDay(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 14px",
        border: d.today ? "1.5px solid var(--brand-300)" : "1px solid var(--border-subtle)",
        background: d.today ? "var(--brand-50)" : "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        flexShrink: 0,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: d.today ? "var(--brand-700)" : "var(--text-secondary)"
      }
    }, d.dow), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, d.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 11,
        flexShrink: 0,
        display: "grid",
        placeItems: "center",
        background: rest ? "var(--ink-100)" : "var(--sage-100)",
        color: rest ? "var(--ink-400)" : "var(--sage-700)"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: rest ? "moon" : d.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: rest ? "var(--text-muted)" : "var(--text-primary)"
      }
    }, rest ? "Lepopäivä" : d.name), !rest ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, d.type, " \xB7 ", d.mins, " min") : null), d.status === "done" ? /*#__PURE__*/React.createElement(L, {
      name: "check-circle-2",
      size: 20,
      color: "var(--green-500)"
    }) : rest ? null : /*#__PURE__*/React.createElement(L, {
      name: "chevron-right",
      size: 19,
      color: "var(--ink-300)"
    }));
  })));
}

/* ----- Liike-osion alapalkki: Koti / Harjoitteet / Viikko-ohjelma ----- */
function LiikeBottomBar({
  sub,
  onSub,
  onHome
}) {
  const {
    L
  } = window;
  const items = [{
    id: "koti",
    label: "Koti",
    icon: "house",
    action: onHome
  }, {
    id: "harjoitteet",
    label: "Harjoitteet",
    icon: "dumbbell",
    action: () => onSub("harjoitteet")
  }, {
    id: "viikko",
    label: "Viikko-ohjelma",
    icon: "calendar-days",
    action: () => onSub("viikko")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderTop: "1px solid var(--border-subtle)",
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, items.map(t => {
    const on = sub === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: t.action,
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "10px 0 2px",
        color: on ? "var(--brand-500)" : "var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: t.icon,
      size: 23,
      strokeWidth: on ? 2.3 : 1.9
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 600,
        letterSpacing: ".01em"
      }
    }, t.label));
  })));
}

/* ----- Liike-moduuli: oma alanavigaatio ----- */
function LiikeModule({
  onHome
}) {
  const {
    PhoneShell
  } = window;
  const [sub, setSub] = React.useState("harjoitteet");
  const [dayIndex, setDayIndex] = React.useState(TODAY_INDEX);
  const screen = sub === "viikko" ? /*#__PURE__*/React.createElement(ViikkoOhjelmaScreen, {
    onOpenDay: i => {
      setDayIndex(i);
      setSub("harjoitteet");
    }
  }) : /*#__PURE__*/React.createElement(HarjoitteetScreen, {
    day: LIIKE_WEEK[dayIndex]
  });
  return /*#__PURE__*/React.createElement(PhoneShell, {
    bottomBar: /*#__PURE__*/React.createElement(LiikeBottomBar, {
      sub: sub,
      onSub: setSub,
      onHome: onHome
    })
  }, screen);
}
Object.assign(window, {
  LiikeModule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/LiikeModule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/NutritionScreen.jsx
try { (() => {
/* Ravinto — nutrition screen. */

function MacroBar({
  label,
  value,
  max,
  color
}) {
  const pct = Math.round(value / max * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, " g")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: "var(--ink-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: 999,
      background: color
    }
  })));
}
function NutritionScreen({
  onAdd
}) {
  const {
    Card,
    ProgressRing,
    Button
  } = window.VS;
  const {
    L,
    SectionHead
  } = window;
  const [water, setWater] = React.useState(5);
  const meals = [{
    name: "Aamiainen",
    items: "Kaurapuuro · marjat · kahvi",
    kcal: "420",
    icon: "sunrise"
  }, {
    name: "Lounas",
    items: "Paistettu lohi · peruna · salaatti",
    kcal: "640",
    icon: "sun"
  }, {
    name: "Välipala",
    items: "Omena · cashewpähkinät",
    kcal: "180",
    icon: "apple"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 16
    }
  }, "Ravinto"), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 1240,
    max: 2100,
    accent: "nutrition",
    valueText: "1 240",
    label: "/ 2 100 kcal",
    size: 104,
    thickness: 10
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "J\xE4ljell\xE4 t\xE4n\xE4\xE4n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, "860 kcal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-secondary)"
    }
  }, "Hyv\xE4 tasapaino \u2014 jatka samaan malliin."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MacroBar, {
    label: "Proteiini",
    value: 68,
    max: 110,
    color: "var(--sage-500)"
  }), /*#__PURE__*/React.createElement(MacroBar, {
    label: "Hiilihydraatit",
    value: 142,
    max: 230,
    color: "var(--apricot-500)"
  }), /*#__PURE__*/React.createElement(MacroBar, {
    label: "Rasva",
    value: 48,
    max: 70,
    color: "var(--lilac-500)"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "droplet",
    size: 20,
    color: "var(--brand-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Vesi"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, water, " / 8 lasia")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setWater(w => Math.min(8, w + 1)),
    style: {
      border: "none",
      background: "var(--brand-50)",
      color: "var(--brand-600)",
      width: 34,
      height: 34,
      borderRadius: 10,
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "plus",
    size: 18,
    strokeWidth: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setWater(i + 1),
    style: {
      flex: 1,
      height: 38,
      borderRadius: 10,
      cursor: "pointer",
      background: i < water ? "var(--brand-100)" : "var(--surface-sunken)",
      border: i < water ? "1.5px solid var(--brand-300)" : "1.5px solid transparent",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "droplet",
    size: 16,
    color: i < water ? "var(--brand-500)" : "var(--ink-300)"
  }))))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Ateriat"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 16
    }
  }, meals.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "13px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: "var(--apricot-100)",
      color: "var(--apricot-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: m.icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, m.items)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-secondary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal, " kcal")))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "soft",
    iconLeft: /*#__PURE__*/React.createElement(L, {
      name: "plus",
      size: 18
    }),
    onClick: onAdd
  }, "Lis\xE4\xE4 ateria"));
}
window.NutritionScreen = NutritionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/NutritionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ProfileScreen.jsx
try { (() => {
/* Profiili — profile & settings screen. */

function SettingRow({
  icon,
  tint,
  label,
  sub,
  right,
  last
}) {
  const {
    L
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      borderBottom: last ? "none" : "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: icon,
    size: 19,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, label), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, sub) : null), right);
}
function ProfileScreen() {
  const {
    Card,
    Avatar,
    Switch,
    Badge
  } = window.VS;
  const {
    L
  } = window;
  const [reminders, setReminders] = React.useState(true);
  const [weekly, setWeekly] = React.useState(true);
  const chev = /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 20,
    color: "var(--ink-300)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 18
    }
  }, "Profiili"), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Aino Virtanen",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800
    }
  }, "Aino Virtanen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "Mukana 84 p\xE4iv\xE4\xE4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "solid"
  }, "Premium"), /*#__PURE__*/React.createElement(Badge, {
    tone: "movement",
    dot: true
  }, "Putki 12 pv")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12,
      marginBottom: 22
    }
  }, [{
    v: "248",
    l: "ateriaa"
  }, {
    v: "62",
    l: "liikettä"
  }, {
    v: "12",
    l: "pv putki"
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.l,
    padding: "md",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 4px 10px"
    }
  }, "Tavoitteet"), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      marginBottom: 20,
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    icon: "footprints",
    tint: "var(--sage-500)",
    label: "Askeltavoite",
    sub: "10 000 / p\xE4iv\xE4",
    right: chev
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "flame",
    tint: "var(--apricot-500)",
    label: "Energiatavoite",
    sub: "2 100 kcal / p\xE4iv\xE4",
    right: chev
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "target",
    tint: "var(--brand-500)",
    label: "Viikkotavoite",
    sub: "5 aktiivista p\xE4iv\xE4\xE4",
    right: chev,
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 4px 10px"
    }
  }, "Asetukset"), /*#__PURE__*/React.createElement(Card, {
    bare: true,
    style: {
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    icon: "bell",
    tint: "var(--lilac-500)",
    label: "Liikuntamuistutukset",
    right: /*#__PURE__*/React.createElement(Switch, {
      checked: reminders,
      onChange: () => setReminders(!reminders)
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "calendar-check",
    tint: "var(--brand-400)",
    label: "Viikkokooste",
    sub: "Sunnuntaisin",
    right: /*#__PURE__*/React.createElement(Switch, {
      checked: weekly,
      onChange: () => setWeekly(!weekly)
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "lock",
    tint: "var(--ink-500)",
    label: "Yksityisyys",
    right: chev
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "circle-help",
    tint: "var(--ink-400)",
    label: "Tuki & ohjeet",
    right: chev,
    last: true
  })));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/RavintoModule.jsx
try { (() => {
/* Ravinto — moduuli. Oma alapalkki: Koti / Yleisnäkymä / Ruokapäiväkirja. */

/* Suunniteltu ravinto-ohjelma — valmiit vaihtoehdot per ateria. */
const RAVINTO_OHJELMA = {
  Aamiainen: [{
    name: "Kaurapuuro & marjat",
    kcal: 210
  }, {
    name: "Raejuusto & hedelmä",
    kcal: 180
  }, {
    name: "Munakas & ruisleipä",
    kcal: 320
  }],
  Lounas: [{
    name: "Lohi, peruna & salaatti",
    kcal: 520
  }, {
    name: "Kanawokki & riisi",
    kcal: 480
  }, {
    name: "Linssikeitto & leipä",
    kcal: 410
  }],
  Välipala: [{
    name: "Omena & cashewpähkinät",
    kcal: 180
  }, {
    name: "Proteiinirahka",
    kcal: 200
  }, {
    name: "Jogurtti & granola",
    kcal: 230
  }],
  Päivällinen: [{
    name: "Broileri, bataatti & parsakaali",
    kcal: 560
  }, {
    name: "Härkis-bolognese & täysjyväpasta",
    kcal: 520
  }, {
    name: "Uunilohi & paahdetut kasvikset",
    kcal: 480
  }]
};
const ATERIAT = ["Aamiainen", "Lounas", "Välipala", "Päivällinen"];
const ATERIA_IKONIT = {
  Aamiainen: "sunrise",
  Lounas: "sun",
  Välipala: "apple",
  Päivällinen: "moon"
};
const KCAL_TAVOITE = 2100;

/* ----- Ruokapäiväkirja: kirjoita itse tai valitse ohjelmasta ----- */
function RuokapaivakirjaScreen() {
  const {
    Card,
    Button
  } = window.VS;
  const {
    L
  } = window;
  const [log, setLog] = React.useState({
    Aamiainen: [{
      name: "Kaurapuuro & marjat",
      kcal: 210
    }, {
      name: "Kahvi & maito",
      kcal: 40
    }],
    Lounas: [{
      name: "Lohi, peruna & salaatti",
      kcal: 520
    }],
    Välipala: [],
    Päivällinen: []
  });
  const [drafts, setDrafts] = React.useState({
    Aamiainen: "",
    Lounas: "",
    Välipala: "",
    Päivällinen: ""
  });
  const [openSuggest, setOpenSuggest] = React.useState("Välipala");
  const addItem = (meal, item) => setLog(p => ({
    ...p,
    [meal]: [...p[meal], item]
  }));
  const removeItem = (meal, idx) => setLog(p => ({
    ...p,
    [meal]: p[meal].filter((_, i) => i !== idx)
  }));
  const addDraft = meal => {
    const t = drafts[meal].trim();
    if (!t) return;
    addItem(meal, {
      name: t,
      kcal: null
    });
    setDrafts(p => ({
      ...p,
      [meal]: ""
    }));
  };
  const mealTotal = meal => log[meal].reduce((a, it) => a + (it.kcal || 0), 0);
  const total = ATERIAT.reduce((s, m) => s + mealTotal(m), 0);
  const pct = Math.min(100, Math.round(total / KCAL_TAVOITE * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      marginBottom: 2
    }
  }, "Keskiviikko 10.6."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 16
    }
  }, "Ruokap\xE4iv\xE4kirja"), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "P\xE4iv\xE4n energia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-primary)",
      fontWeight: 800
    }
  }, total.toLocaleString("fi-FI")), " / ", KCAL_TAVOITE.toLocaleString("fi-FI"), " kcal")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      borderRadius: 999,
      background: "var(--ink-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: 999,
      background: "var(--apricot-500)",
      transition: "width .3s var(--ease-out)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ATERIAT.map(meal => {
    const items = log[meal];
    const showSug = openSuggest === meal;
    return /*#__PURE__*/React.createElement(Card, {
      key: meal,
      padding: "md"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 11,
        background: "var(--apricot-100)",
        color: "var(--apricot-700)",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: ATERIA_IKONIT[meal],
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 16
      }
    }, meal)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: items.length ? "var(--text-secondary)" : "var(--text-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, mealTotal(meal), " kcal")), items.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 12
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: i < items.length - 1 ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "check",
      size: 16,
      color: "var(--green-500)",
      strokeWidth: 2.6
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5,
        fontWeight: 500
      }
    }, it.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      }
    }, it.kcal != null ? `${it.kcal} kcal` : "—"), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeItem(meal, i),
      "aria-label": "Poista",
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--ink-300)",
        display: "grid",
        placeItems: "center",
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "x",
      size: 16
    }))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)",
        padding: "2px 0 12px"
      }
    }, "Ei viel\xE4 kirjauksia."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "vire-input",
      value: drafts[meal],
      placeholder: "Kirjoita mit\xE4 s\xF6it\u2026",
      onChange: e => setDrafts(p => ({
        ...p,
        [meal]: e.target.value
      })),
      onKeyDown: e => {
        if (e.key === "Enter") addDraft(meal);
      },
      style: {
        flex: 1,
        height: 44
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => addDraft(meal),
      "aria-label": "Lis\xE4\xE4",
      style: {
        width: 44,
        height: 44,
        flexShrink: 0,
        border: "none",
        borderRadius: "var(--radius-md)",
        background: "var(--brand-500)",
        color: "#fff",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        boxShadow: "var(--shadow-brand)"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "plus",
      size: 20,
      strokeWidth: 2.4
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenSuggest(showSug ? null : meal),
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6,
        color: "var(--brand-600)",
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        fontWeight: 700,
        padding: "2px 0"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: "sparkles",
      size: 15
    }), "Ehdota ohjelmasta", /*#__PURE__*/React.createElement(L, {
      name: showSug ? "chevron-up" : "chevron-down",
      size: 16
    })), showSug ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginTop: 8
      }
    }, RAVINTO_OHJELMA[meal].map((s, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => addItem(meal, s),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        background: "var(--surface-sunken)",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-primary)"
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      }
    }, s.kcal, " kcal"), /*#__PURE__*/React.createElement(L, {
      name: "plus-circle",
      size: 20,
      color: "var(--brand-500)"
    })))) : null);
  })));
}

/* ----- Ravinnon alapalkki: Koti / Yleisnäkymä / Ruokapäiväkirja ----- */
function RavintoBottomBar({
  sub,
  onSub,
  onHome
}) {
  const {
    L
  } = window;
  const items = [{
    id: "koti",
    label: "Koti",
    icon: "house",
    action: onHome
  }, {
    id: "yleis",
    label: "Yleisnäkymä",
    icon: "gauge",
    action: () => onSub("yleis")
  }, {
    id: "kirja",
    label: "Ruokapäiväkirja",
    icon: "notebook-pen",
    action: () => onSub("kirja")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderTop: "1px solid var(--border-subtle)",
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, items.map(t => {
    const on = sub === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: t.action,
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "10px 0 2px",
        color: on ? "var(--brand-500)" : "var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: t.icon,
      size: 23,
      strokeWidth: on ? 2.3 : 1.9
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 600,
        letterSpacing: ".01em"
      }
    }, t.label));
  })));
}

/* ----- Ravinto-moduuli: oma alanavigaatio ----- */
function RavintoModule({
  onHome
}) {
  const {
    PhoneShell
  } = window;
  const [sub, setSub] = React.useState("yleis");
  const screen = sub === "kirja" ? /*#__PURE__*/React.createElement(RuokapaivakirjaScreen, null) : /*#__PURE__*/React.createElement(window.NutritionScreen, {
    onAdd: () => setSub("kirja")
  });
  return /*#__PURE__*/React.createElement(PhoneShell, {
    bottomBar: /*#__PURE__*/React.createElement(RavintoBottomBar, {
      sub: sub,
      onSub: setSub,
      onHome: onHome
    })
  }, screen);
}
Object.assign(window, {
  RavintoModule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/RavintoModule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/TodayScreen.jsx
try { (() => {
/* Tänään — the Vire home screen. */

function RingTrio() {
  const {
    ProgressRing
  } = window.VS;
  const rings = [{
    v: 8240,
    max: 10000,
    accent: "movement",
    icon: "footprints",
    label: "Askeleet",
    val: "8 240"
  }, {
    v: 1680,
    max: 2100,
    accent: "nutrition",
    icon: "flame",
    label: "Energia",
    val: "1 680"
  }, {
    v: 42,
    max: 60,
    accent: "brand",
    icon: "activity",
    label: "Liikeminuutit",
    val: "42"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px 4px 0"
    }
  }, rings.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: r.v,
    max: r.max,
    accent: r.accent,
    size: 92,
    thickness: 9,
    valueText: /*#__PURE__*/React.createElement(window.L, {
      name: r.icon,
      size: 24
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      fontVariantNumeric: "tabular-nums"
    }
  }, r.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, r.label)))));
}
function TodayScreen({
  onTab
}) {
  const {
    Card,
    Badge,
    Avatar,
    StatTile
  } = window.VS;
  const {
    L,
    Photo,
    SectionHead
  } = window;
  const meals = [{
    name: "Aamiainen",
    desc: "Kaurapuuro, marjat, kahvi",
    kcal: "420",
    icon: "sunrise",
    done: true
  }, {
    name: "Lounas",
    desc: "Lohi, peruna, salaatti",
    kcal: "640",
    icon: "sun",
    done: true
  }, {
    name: "Välipala",
    desc: "Omena, pähkinät",
    kcal: "180",
    icon: "apple",
    done: true
  }, {
    name: "Päivällinen",
    desc: "Lisää kun olet valmis",
    kcal: null,
    icon: "moon",
    done: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      marginBottom: 2
    }
  }, "Tiistai 10. kes\xE4kuuta"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, "Hyv\xE4\xE4 huomenta, Aino")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Aino Virtanen",
    size: "lg",
    ring: true
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "P\xE4iv\xE4n tavoitteet"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Hyv\xE4ss\xE4 vireess\xE4")), /*#__PURE__*/React.createElement(RingTrio, null)), /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "md",
    interactive: true,
    style: {
      marginBottom: 22,
      display: "flex",
      alignItems: "center",
      gap: 14
    },
    onClick: () => onTab("movement")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: "var(--sage-100)",
      color: "var(--sage-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "footprints",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Pieni k\xE4vely pirist\xE4\xE4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-secondary)"
    }
  }, "L\xE4hdetk\xF6 ulos? 18 min riitt\xE4\xE4 tavoitteeseen.")), /*#__PURE__*/React.createElement(L, {
    name: "chevron-right",
    size: 20,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement(SectionHead, {
    title: "P\xE4iv\xE4n ateriat",
    action: "Kaikki",
    onAction: () => onTab("nutrition")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 8
    }
  }, meals.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "sm",
    flat: true,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 14px",
      opacity: m.done ? 1 : 0.72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: m.done ? "var(--apricot-100)" : "var(--ink-100)",
      color: m.done ? "var(--apricot-700)" : "var(--ink-400)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: m.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, m.desc)), m.kcal ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-secondary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal, " kcal") : /*#__PURE__*/React.createElement(L, {
    name: "plus-circle",
    size: 24,
    color: "var(--brand-500)"
  })))));
}
window.TodayScreen = TodayScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/kit-lib.jsx
try { (() => {
/* Shared helpers for the Vire mobile UI kit. Loaded before the screens. */

const VS = window.VireDesignSystem_068680;

/* Lucide icon as a React node. */
function L({
  name,
  size = 22,
  color,
  strokeWidth
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    ref.current.appendChild(i);
    const attrs = {
      width: size,
      height: size
    };
    if (strokeWidth) attrs["stroke-width"] = strokeWidth;
    window.lucide.createIcons({
      attrs,
      root: ref.current
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      color
    }
  });
}

/* iOS status bar */
function StatusBar({
  dark = false
}) {
  const c = dark ? "#fff" : "var(--ink-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px 0 32px",
      color: c,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      fontVariantNumeric: "tabular-nums"
    }
  }, "9.41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(L, {
    name: "signal",
    size: 17,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(L, {
    name: "wifi",
    size: 17,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(L, {
    name: "battery-full",
    size: 20,
    strokeWidth: 2.2
  })));
}

/* iOS bottom tab bar — translucent blur */
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: "today",
    label: "Tänään",
    icon: "house"
  }, {
    id: "movement",
    label: "Liike",
    icon: "footprints"
  }, {
    id: "nutrition",
    label: "Ravinto",
    icon: "utensils"
  }, {
    id: "profile",
    label: "Profiili",
    icon: "user-round"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderTop: "1px solid var(--border-subtle)",
      paddingBottom: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "10px 0 2px",
        color: on ? "var(--brand-500)" : "var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement(L, {
      name: t.icon,
      size: 23,
      strokeWidth: on ? 2.3 : 1.9
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 600,
        letterSpacing: ".01em"
      }
    }, t.label));
  })));
}

/* iPhone bezel wrapper. Children render inside the 390×844 screen. */
function PhoneShell({
  children,
  tab,
  onTab,
  statusDark = false,
  fab,
  overlay,
  bottomBar
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "#000",
      borderRadius: 54,
      padding: 11,
      boxShadow: "0 40px 90px rgba(39,43,61,0.30), 0 0 0 2px rgba(39,43,61,0.04)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 44,
      overflow: "hidden",
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 11,
      left: "50%",
      transform: "translateX(-50%)",
      width: 118,
      height: 34,
      background: "#000",
      borderRadius: 20,
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement(StatusBar, {
    dark: statusDark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden",
      position: "relative"
    },
    className: "vire-scroll"
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96
    }
  })), fab, bottomBar || /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: onTab
  }), overlay));
}

/* Photographic placeholder block (no real photos supplied). */
function Photo({
  tone = "natural",
  height = 150,
  radius = "var(--radius-lg)",
  children,
  style
}) {
  const grads = {
    natural: "linear-gradient(135deg, #8FA697 0%, #B9C7BC 45%, #E4DECF 100%)",
    duotone: "linear-gradient(140deg, #3C4A93 0%, #6B7FD7 55%, #A9B5E8 100%)",
    warm: "linear-gradient(135deg, #C47E52 0%, #E8A87C 55%, #F4CFA9 100%)",
    sage: "linear-gradient(135deg, #4E7C66 0%, #6FA98C 55%, #A7CBB4 100%)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: grads[tone],
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
      backgroundSize: "4px 4px"
    }
  }), children);
}

/* Section heading row */
function SectionHead({
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, title), action ? /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--brand-600)",
      fontWeight: 600,
      fontSize: 14,
      fontFamily: "var(--font-sans)",
      cursor: "pointer"
    }
  }, action) : null);
}
Object.assign(window, {
  VS,
  L,
  StatusBar,
  TabBar,
  PhoneShell,
  Photo,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/kit-lib.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/OverviewView.jsx
try { (() => {
/* Yleiskatsaus — web dashboard overview. */

function OverviewView() {
  const {
    Card,
    StatTile,
    ProgressRing,
    Badge,
    Button
  } = window.WVS;
  const {
    WL,
    BarChart
  } = window;
  const week = [{
    label: "Ma",
    value: 7200
  }, {
    label: "Ti",
    value: 9100
  }, {
    label: "Ke",
    value: 6400
  }, {
    label: "To",
    value: 10200
  }, {
    label: "Pe",
    value: 8050
  }, {
    label: "La",
    value: 5200
  }, {
    label: "Su",
    value: 8240,
    highlight: true
  }];
  const meals = [{
    name: "Aamiainen",
    items: "Kaurapuuro · marjat · kahvi",
    kcal: "420",
    t: "7.30",
    icon: "sunrise"
  }, {
    name: "Lounas",
    items: "Paistettu lohi · peruna · salaatti",
    kcal: "640",
    t: "12.15",
    icon: "sun"
  }, {
    name: "Välipala",
    items: "Omena · cashewpähkinät",
    kcal: "180",
    t: "15.00",
    icon: "apple"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    accent: "movement",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "footprints"
    }),
    label: "Askeleet",
    value: "8 240",
    delta: "+12 %",
    deltaDir: "up",
    sub: "vs. eilen"
  }), /*#__PURE__*/React.createElement(StatTile, {
    accent: "nutrition",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "flame"
    }),
    label: "Energia",
    value: "1 680",
    unit: "kcal",
    sub: "tavoite 2 100"
  }), /*#__PURE__*/React.createElement(StatTile, {
    accent: "brand",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "activity"
    }),
    label: "Liikeminuutit",
    value: "42",
    unit: "min",
    delta: "+8 min",
    deltaDir: "up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    accent: "rest",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "moon"
    }),
    label: "Uni",
    value: "7,4",
    unit: "h",
    delta: "\u22126 %",
    deltaDir: "down",
    sub: "vs. ka."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "Askeleet t\xE4ll\xE4 viikolla"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, "54 630")), /*#__PURE__*/React.createElement(Badge, {
    tone: "movement",
    dot: true
  }, "+24 min vs. viime viikko")), /*#__PURE__*/React.createElement(BarChart, {
    data: week,
    max: 11000,
    color: "var(--sage-500)",
    soft: "var(--sage-300)",
    height: 210
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 18
    }
  }, "P\xE4iv\xE4n tavoitteet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 82,
    accent: "movement",
    valueText: "82%",
    label: "askeleista",
    size: 150,
    thickness: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [{
    icon: "flame",
    tint: "var(--apricot-500)",
    label: "Energia",
    val: "1 680 / 2 100 kcal",
    pct: 80
  }, {
    icon: "activity",
    tint: "var(--brand-500)",
    label: "Liike",
    val: "42 / 60 min",
    pct: 70
  }].map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: "var(--ink-50)",
      color: g.tint,
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: g.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, g.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, g.val)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: "var(--ink-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${g.pct}%`,
      height: "100%",
      borderRadius: 999,
      background: g.tint
    }
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "T\xE4m\xE4n p\xE4iv\xE4n ateriat"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(WL, {
      name: "plus",
      size: 16
    })
  }, "Lis\xE4\xE4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, meals.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "13px 0",
      borderBottom: i < meals.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: "var(--apricot-100)",
      color: "var(--apricot-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: m.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, m.items)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal, " kcal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, m.t)))))), /*#__PURE__*/React.createElement(Card, {
    soft: true,
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: "#fff",
      color: "var(--sage-700)",
      display: "grid",
      placeItems: "center",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: "sparkles",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      marginBottom: 4
    }
  }, "Putkesi jatkuu, 12 p\xE4iv\xE4\xE4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, "Olet liikkunut joka p\xE4iv\xE4 l\xE4hes kaksi viikkoa. Pieni k\xE4vely t\xE4n\xE4\xE4n pit\xE4\xE4 putken elossa.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(WL, {
      name: "footprints",
      size: 18
    }),
    style: {
      alignSelf: "flex-start"
    }
  }, "Aloita k\xE4vely"))));
}
window.OverviewView = OverviewView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/OverviewView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/kit-lib.jsx
try { (() => {
/* Shared helpers for the Vire web dashboard UI kit. */

const WVS = window.VireDesignSystem_068680;
function WL({
  name,
  size = 20,
  color,
  strokeWidth
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    ref.current.appendChild(i);
    const attrs = {
      width: size,
      height: size
    };
    if (strokeWidth) attrs["stroke-width"] = strokeWidth;
    window.lucide.createIcons({
      attrs,
      root: ref.current
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      color
    }
  });
}
function Sidebar({
  active,
  onNav
}) {
  const {
    Avatar
  } = window.WVS;
  const groups = [{
    label: null,
    items: [{
      id: "overview",
      label: "Yleiskatsaus",
      icon: "layout-dashboard"
    }, {
      id: "movement",
      label: "Liike",
      icon: "footprints"
    }, {
      id: "nutrition",
      label: "Ravinto",
      icon: "utensils"
    }, {
      id: "progress",
      label: "Edistyminen",
      icon: "trending-up"
    }]
  }, {
    label: "Asetukset",
    items: [{
      id: "goals",
      label: "Tavoitteet",
      icon: "target"
    }, {
      id: "settings",
      label: "Asetukset",
      icon: "settings"
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 252,
      flexShrink: 0,
      background: "var(--surface-card)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 16px",
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 8px 26px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vire-logomark.svg",
    width: "34",
    height: "34",
    alt: "Vire"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--ink-900)"
    }
  }, "Vire")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      flex: 1
    }
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, g.label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      padding: "4px 12px 6px"
    }
  }, g.label) : null, g.items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNav(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        fontWeight: on ? 700 : 600,
        background: on ? "var(--brand-50)" : "transparent",
        color: on ? "var(--brand-700)" : "var(--ink-600)",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(WL, {
      name: it.icon,
      size: 20,
      strokeWidth: on ? 2.2 : 1.85
    }), it.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "12px 10px 0",
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Aino Virtanen",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Aino Virtanen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Premium")), /*#__PURE__*/React.createElement(WL, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-400)"
  })));
}
function Topbar({
  title,
  subtitle,
  range,
  onRange
}) {
  const {
    SegmentedControl,
    IconButton
  } = window.WVS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "26px 32px 18px",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, range ? /*#__PURE__*/React.createElement(SegmentedControl, {
    options: [{
      value: "viikko",
      label: "Viikko"
    }, {
      value: "kuukausi",
      label: "Kuukausi"
    }, {
      value: "vuosi",
      label: "Vuosi"
    }],
    value: range,
    onChange: onRange
  }) : null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    "aria-label": "Ilmoitukset",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "bell",
      size: 20
    })
  })));
}

/* Simple area/bar chart on a canvas-free SVG. data = array of {label, value}. */
function BarChart({
  data,
  max,
  color = "var(--brand-500)",
  soft = "var(--brand-100)",
  height = 200
}) {
  const top = max || Math.max(...data.map(d => d.value)) * 1.15;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height,
      paddingTop: 8
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: String(d.value),
    style: {
      width: "62%",
      maxWidth: 44,
      height: `${d.value / top * 100}%`,
      minHeight: 8,
      borderRadius: 10,
      background: d.highlight ? color : soft
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: d.highlight ? 700 : 600,
      color: d.highlight ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, d.label))));
}
Object.assign(window, {
  WVS,
  WL,
  Sidebar,
  Topbar,
  BarChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/kit-lib.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/views.jsx
try { (() => {
/* Web dashboard — Liike & Ravinto detail views, plus a graceful placeholder. */

function MovementView() {
  const {
    Card,
    StatTile,
    Badge,
    ProgressRing
  } = window.WVS;
  const {
    WL,
    BarChart
  } = window;
  const month = ["Vk 19", "Vk 20", "Vk 21", "Vk 22"].map((label, i) => ({
    label,
    value: [42, 51, 38, 56][i],
    highlight: i === 3
  }));
  const log = [{
    name: "Aamukävely",
    time: "Tänään · 7.10",
    dur: "32 min",
    kcal: "168",
    icon: "footprints"
  }, {
    name: "Pyöräily töihin",
    time: "Tänään · 8.20",
    dur: "18 min",
    kcal: "142",
    icon: "bike"
  }, {
    name: "Kuntosali",
    time: "Eilen · 17.30",
    dur: "48 min",
    kcal: "320",
    icon: "dumbbell"
  }, {
    name: "Iltakävely",
    time: "Eilen · 20.05",
    dur: "26 min",
    kcal: "134",
    icon: "footprints"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    accent: "movement",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "footprints"
    }),
    label: "Askeleet (vk)",
    value: "54 630",
    delta: "+9 %",
    deltaDir: "up",
    sub: "vs. viime vk"
  }), /*#__PURE__*/React.createElement(StatTile, {
    accent: "brand",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "activity"
    }),
    label: "Aktiiviset minuutit",
    value: "228",
    unit: "min",
    delta: "+24 min",
    deltaDir: "up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    accent: "rest",
    icon: /*#__PURE__*/React.createElement(WL, {
      name: "flame"
    }),
    label: "Liike-energia",
    value: "2 040",
    unit: "kcal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Aktiiviset p\xE4iv\xE4t / viikko"), /*#__PURE__*/React.createElement(Badge, {
    tone: "movement",
    dot: true
  }, "Paras kuukausi")), /*#__PURE__*/React.createElement(BarChart, {
    data: month,
    max: 60,
    color: "var(--sage-500)",
    soft: "var(--sage-300)",
    height: 220
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 5,
    max: 7,
    accent: "movement",
    valueText: "5/7",
    label: "aktiivista",
    size: 150,
    thickness: 13
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Hyv\xE4\xE4 ty\xF6t\xE4 t\xE4ll\xE4 viikolla"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Kaksi p\xE4iv\xE4\xE4 tavoitteeseen.")))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 12
    }
  }, "Liikemerkinn\xE4t"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, log.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "13px 0",
      borderBottom: i < log.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: "var(--sage-100)",
      color: "var(--sage-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: a.icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, a.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, a.dur), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      textAlign: "right",
      fontSize: 14,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, a.kcal, " kcal"))))));
}
function NutritionView() {
  const {
    Card,
    ProgressRing,
    Badge,
    Button
  } = window.WVS;
  const {
    WL,
    BarChart
  } = window;
  const week = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"].map((label, i) => ({
    label,
    value: [1980, 2050, 1840, 2110, 1690, 2240, 1240][i],
    highlight: i === 6
  }));
  const macros = [{
    label: "Proteiini",
    value: 68,
    max: 110,
    color: "var(--sage-500)"
  }, {
    label: "Hiilihydraatit",
    value: 142,
    max: 230,
    color: "var(--apricot-500)"
  }, {
    label: "Rasva",
    value: 48,
    max: 70,
    color: "var(--lilac-500)"
  }];
  const meals = [{
    name: "Aamiainen",
    items: "Kaurapuuro · marjat · kahvi",
    kcal: "420",
    icon: "sunrise"
  }, {
    name: "Lounas",
    items: "Paistettu lohi · peruna · salaatti",
    kcal: "640",
    icon: "sun"
  }, {
    name: "Välipala",
    items: "Omena · cashewpähkinät",
    kcal: "180",
    icon: "apple"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.55fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 1240,
    max: 2100,
    accent: "nutrition",
    valueText: "1 240",
    label: "/ 2 100 kcal",
    size: 168,
    thickness: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 22
    }
  }, "860 kcal j\xE4ljell\xE4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Hyv\xE4 tasapaino t\xE4n\xE4\xE4n."))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 18
    }
  }, "Makrojakauma"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginBottom: 8
    }
  }, macros.map(m => {
    const pct = Math.round(m.value / m.max * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: m.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, m.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      }
    }, m.value, " / ", m.max, " g")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 9,
        borderRadius: 999,
        background: "var(--ink-100)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        borderRadius: 999,
        background: m.color
      }
    })));
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "Energia / p\xE4iv\xE4"), /*#__PURE__*/React.createElement(Badge, {
    tone: "nutrition",
    dot: true
  }, "ka. 1 879 kcal")), /*#__PURE__*/React.createElement(BarChart, {
    data: week,
    max: 2500,
    color: "var(--apricot-500)",
    soft: "var(--apricot-300)",
    height: 200
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "T\xE4m\xE4n p\xE4iv\xE4n ateriat"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(WL, {
      name: "plus",
      size: 16
    })
  }, "Lis\xE4\xE4 ateria")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, meals.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "13px 0",
      borderBottom: i < meals.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: "var(--apricot-100)",
      color: "var(--apricot-700)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: m.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, m.items)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, m.kcal, " kcal"))))));
}
function PlaceholderView({
  title
}) {
  const {
    Card
  } = window.WVS;
  const {
    WL
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 40px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      minHeight: 320,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 18,
      background: "var(--brand-50)",
      color: "var(--brand-500)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(WL, {
    name: "hammer",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      maxWidth: 360
    }
  }, "T\xE4m\xE4 n\xE4kym\xE4 on osa Vire-tuotetta, mutta sit\xE4 ei ole viel\xE4 mallinnettu t\xE4h\xE4n UI-kittiin.")));
}
Object.assign(window, {
  MovementView,
  NutritionView,
  PlaceholderView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/views.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Switch = __ds_scope.Switch;

})();
