// ============================================================
// KAHWIN - Wedding Planner App v3
// Features: Auth, Joint Account, Timeline Edit, Hero BG,
//           Inspirasi, Dark Mode, Guest Family Count
// ============================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore, doc, getDoc, setDoc, collection,
  addDoc, deleteDoc, updateDoc, onSnapshot, getDocs
} from "firebase/firestore";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile,
  GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail
} from "firebase/auth";
import {
  getStorage, ref as sref, uploadBytes, getDownloadURL
} from "firebase/storage";

// ─── FIREBASE CONFIG ──────────────────────────────────────
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// ─── HELPERS ─────────────────────────────────────────────
const fmtRM = (v, c="MYR") => {
  const sym = {MYR:"RM",SGD:"S$",USD:"$",GBP:"£"};
  return `${sym[c]||c} ${(parseFloat(v)||0).toLocaleString("ms-MY",{minimumFractionDigits:2,maximumFractionDigits:2})}`;
};
const fmtDate = s => s ? new Date(s).toLocaleDateString("ms-MY",{day:"numeric",month:"long",year:"numeric"}) : "";
const daysUntil = s => {
  if (!s) return null;
  const t=new Date(s),n=new Date();
  t.setHours(0,0,0,0);n.setHours(0,0,0,0);
  return Math.ceil((t-n)/864e5);
};
const CAT_ICONS = {"Dewan":"🏛️","Katering":"🍽️","Pakaian":"👗","Gambar/Video":"📷","Hantaran":"🎁","Hiasan":"🌸","Kad Jemputan":"💌","Pelamin":"👑","Transport":"🚗","Lain-lain":"💼"};
const ERR = {"auth/user-not-found":"Email tidak dijumpai.","auth/wrong-password":"Kata laluan salah.","auth/email-already-in-use":"Email sudah didaftarkan.","auth/weak-password":"Kata laluan min 6 aksara.","auth/invalid-email":"Format email tidak sah.","auth/invalid-credential":"Email atau kata laluan salah.","auth/popup-closed-by-user":"Log masuk Google dibatalkan."};

// ─── THEME ───────────────────────────────────────────────
const LIGHT = {
  bg:"#FFF8F5", card:"#FFFFFF", border:"#F0E0E4",
  dark:"#2D2D2D", mid:"#6B6B6B", light:"#BDBDBD",
  rose:"#E8748A", rosePale:"#FDE8EC", roseLight:"#F2A0AE", roseBtn:"#F4B8C2",
  navBg:"#FFFFFF", headerBg:"#FFFFFF", inputBg:"#fffafc",
  sectionBg:"#F5EEF0", modalBg:"#FFFFFF",
};
const DARK = {
  bg:"#1A1A1A", card:"#2A2A2A", border:"#3D3030",
  dark:"#F0F0F0", mid:"#A0A0A0", light:"#666666",
  rose:"#F0889E", rosePale:"#3D2028", roseLight:"#8A3040", roseBtn:"#5A2030",
  navBg:"#222222", headerBg:"#222222", inputBg:"#333333",
  sectionBg:"#333333", modalBg:"#2A2A2A",
};

function makeStyles(t) {
  return `
  :root {
    --bg:${t.bg};--card:${t.card};--border:${t.border};
    --dark:${t.dark};--mid:${t.mid};--light:${t.light};
    --rose:${t.rose};--rose-pale:${t.rosePale};--rose-light:${t.roseLight};--rose-btn:${t.roseBtn};
    --nav-bg:${t.navBg};--header-bg:${t.headerBg};--input-bg:${t.inputBg};
    --section-bg:${t.sectionBg};--modal-bg:${t.modalBg};
    --shadow:0 4px 20px rgba(0,0,0,0.15);--shadow-sm:0 2px 8px rgba(0,0,0,0.10);
    --radius:20px;--radius-sm:12px;
    font-family:'DM Sans',sans-serif;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--bg);min-height:100vh;transition:background 0.3s;}
  #root{max-width:480px;margin:0 auto;min-height:100vh;background:var(--bg);}

  /* AUTH */
  .auth-wrap{min-height:100vh;display:flex;flex-direction:column;background:linear-gradient(160deg,${t.bg} 0%,${t.rosePale} 60%,${t.bg} 100%);}
  .auth-hero{padding:60px 32px 28px;text-align:center;}
  .auth-logo{font-size:52px;display:block;margin-bottom:12px;}
  .auth-title{font-family:'Playfair Display',serif;font-size:32px;color:var(--dark);line-height:1.1;}
  .auth-sub{font-size:14px;color:var(--mid);margin-top:8px;}
  .auth-card{flex:1;background:var(--modal-bg);border-radius:28px 28px 0 0;padding:28px 24px 40px;box-shadow:0 -4px 30px rgba(0,0,0,0.15);}
  .auth-tabs{display:flex;background:var(--section-bg);border-radius:12px;padding:4px;margin-bottom:22px;}
  .auth-tab{flex:1;padding:10px;text-align:center;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;border:none;background:transparent;color:var(--mid);font-family:'DM Sans',sans-serif;transition:all 0.2s;}
  .auth-tab.active{background:var(--card);color:var(--rose);box-shadow:0 2px 8px rgba(0,0,0,0.1);}

  .field-label{font-size:12px;font-weight:600;color:var(--mid);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;}
  .field-input{width:100%;padding:13px 16px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:'DM Sans',sans-serif;color:var(--dark);background:var(--input-bg);outline:none;transition:border 0.2s;margin-bottom:14px;}
  .field-input:focus{border-color:var(--rose);}
  .field-input option{background:var(--card);color:var(--dark);}
  textarea.field-input{resize:none;}
  .btn-primary{width:100%;padding:14px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:15px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity 0.2s,transform 0.1s;margin-bottom:12px;}
  .btn-primary:hover{opacity:0.9;}
  .btn-primary:active{transform:scale(0.98);}
  .btn-primary:disabled{opacity:0.5;cursor:not-allowed;}
  .btn-google{width:100%;padding:13px;background:var(--card);color:var(--dark);border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:10px;transition:background 0.2s;}
  .btn-google:hover{opacity:0.9;}
  .divider{display:flex;align-items:center;gap:12px;margin:14px 0;}
  .divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--border);}
  .divider span{font-size:12px;color:var(--light);}
  .forgot-link{text-align:center;font-size:13px;color:var(--rose);cursor:pointer;margin-top:6px;}
  .err-msg{background:${t===DARK?"#3D1A20":"#FFF0F2"};border:1px solid ${t===DARK?"#6D2030":"#FFD0D8"};color:${t===DARK?"#FF8A9A":"#C0304A"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}
  .success-msg{background:${t===DARK?"#1A3020":"#E8F5E9"};border:1px solid ${t===DARK?"#2A6040":"#A5D6A7"};color:${t===DARK?"#6FCF97":"#2E7D32"};border-radius:10px;padding:10px 14px;font-size:13px;margin-bottom:14px;}

  /* SETUP */
  .setup-wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;background:var(--bg);}
  .setup-card{background:var(--card);border-radius:var(--radius);padding:28px 24px;width:100%;max-width:380px;box-shadow:var(--shadow);}

  /* APP */
  .app-wrap{display:flex;flex-direction:column;min-height:100vh;}
  .bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:var(--nav-bg);border-top:1px solid var(--border);display:flex;justify-content:space-around;padding:10px 0 20px;z-index:100;}
  .nav-btn{display:flex;flex-direction:column;align-items:center;gap:4px;background:none;border:none;cursor:pointer;color:var(--light);transition:color 0.2s;}
  .nav-btn.active{color:var(--rose);}
  .nav-btn .nav-icon{font-size:22px;}
  .nav-btn .nav-label{font-size:10px;font-weight:500;font-family:'DM Sans',sans-serif;}
  .nav-home-btn{width:54px;height:54px;border-radius:50%;background:var(--dark);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;margin-top:-18px;box-shadow:0 4px 16px rgba(0,0,0,0.3);transition:transform 0.15s;}
  .nav-home-btn:active{transform:scale(0.95);}
  .page-content{flex:1;padding-bottom:90px;overflow-y:auto;}

  .app-header{background:var(--header-bg);padding:16px 20px 12px;display:flex;align-items:center;gap:14px;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50;}
  .header-logo{font-size:30px;}
  .header-info h1{font-size:20px;font-weight:700;color:var(--dark);font-family:'Playfair Display',serif;}
  .header-info p{font-size:12px;color:var(--mid);}
  .header-right{margin-left:auto;display:flex;align-items:center;gap:10px;}
  .avatar-sm{width:34px;height:34px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--rose);cursor:pointer;border:2px solid var(--rose-light);}
  .dark-toggle{background:none;border:none;cursor:pointer;font-size:20px;padding:4px;}

  /* HERO */
  .hero-card{margin:16px;border-radius:var(--radius);overflow:hidden;position:relative;min-height:195px;}
  .hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.65) 100%);}
  .hero-content{position:relative;z-index:2;padding:20px;text-align:center;}
  .hero-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 12px;font-size:11px;color:white;font-weight:500;margin-bottom:14px;}
  .hero-names{font-family:'Playfair Display',serif;color:white;}
  .hero-names h2{font-size:26px;font-weight:600;}
  .hero-names .amp{font-size:15px;opacity:0.8;margin:2px 0;}
  .hero-names h3{font-size:26px;font-weight:600;}
  .hero-date-row{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:14px;}
  .hero-date{color:rgba(255,255,255,0.9);font-size:13px;font-weight:500;}
  .hero-days{background:rgba(255,255,255,0.2);border-radius:20px;padding:4px 12px;color:white;font-size:12px;font-weight:600;}
  .hero-edit-btn{position:absolute;top:12px;right:12px;z-index:3;background:rgba(255,255,255,0.2);border:none;border-radius:10px;padding:6px 10px;color:white;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;backdrop-filter:blur(4px);}

  /* STATS */
  .section-grid{padding:0 16px;display:flex;flex-direction:column;gap:14px;}
  .stat-card{background:var(--card);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .stat-card:hover{transform:translateY(-1px);}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .mini-stat{background:var(--card);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .mini-stat:hover{transform:translateY(-1px);}
  .progress-bar-wrap{background:var(--section-bg);border-radius:4px;height:6px;margin-top:12px;overflow:hidden;}
  .progress-bar-fill{height:100%;background:var(--rose);border-radius:4px;transition:width 0.4s;}

  /* FEATURE GRID */
  .feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0 16px 16px;}
  .feature-btn{background:var(--rose-btn);border-radius:var(--radius-sm);padding:20px 10px 14px;display:flex;flex-direction:column;align-items:center;gap:10px;cursor:pointer;border:none;transition:transform 0.15s,opacity 0.15s;font-family:'DM Sans',sans-serif;}
  .feature-btn:hover{opacity:0.85;transform:translateY(-2px);}
  .feature-icon{font-size:26px;}
  .feature-label{font-size:12px;font-weight:500;color:var(--dark);text-align:center;}
  .section-title{font-size:13px;font-weight:700;color:var(--mid);text-transform:uppercase;letter-spacing:0.8px;margin:16px 16px 10px;}

  /* LISTS */
  .list-section{padding:0 16px;}
  .list-item{background:var(--card);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-sm);}
  .list-item-icon{width:42px;height:42px;background:var(--rose-pale);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
  .list-item-info{flex:1;}
  .list-item-name{font-size:14px;font-weight:600;color:var(--dark);}
  .list-item-sub{font-size:11px;color:var(--mid);margin-top:2px;}
  .badge{font-size:10px;padding:2px 8px;border-radius:10px;font-weight:600;margin-top:3px;display:inline-block;}
  .badge-paid{background:var(--rose-pale);color:var(--rose);}
  .badge-unpaid{background:var(--section-bg);color:var(--mid);}
  .delete-btn{background:none;border:none;cursor:pointer;font-size:17px;color:var(--light);padding:4px;transition:color 0.2s;}
  .delete-btn:hover{color:#E05050;}
  .edit-btn{background:none;border:none;cursor:pointer;font-size:16px;color:var(--light);padding:4px;transition:color 0.2s;}
  .edit-btn:hover{color:var(--rose);}
  .add-btn{margin:0 16px 12px;width:calc(100% - 32px);padding:13px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;transition:opacity 0.2s;}
  .add-btn:hover{opacity:0.9;}

  /* MODAL */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:200;display:flex;align-items:flex-end;justify-content:center;}
  .modal{background:var(--modal-bg);border-radius:24px 24px 0 0;padding:24px;width:100%;max-width:480px;max-height:88vh;overflow-y:auto;animation:slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);}
  @keyframes slideUp{from{transform:translateY(100%);opacity:0;}to{transform:translateY(0);opacity:1;}}
  .modal-handle{width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px;}
  .modal-title{font-family:'Playfair Display',serif;font-size:20px;color:var(--dark);margin-bottom:18px;}
  .modal-footer{display:flex;gap:10px;margin-top:18px;}
  .btn-cancel{flex:1;padding:13px;background:var(--section-bg);color:var(--mid);border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .btn-save{flex:2;padding:13px;background:var(--rose);color:white;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .radio-group{display:flex;gap:10px;margin-bottom:14px;}
  .radio-option{flex:1;padding:10px 6px;border:1.5px solid var(--border);border-radius:var(--radius-sm);text-align:center;cursor:pointer;font-size:12px;font-weight:500;color:var(--mid);transition:all 0.2s;}
  .radio-option.active{border-color:var(--rose);background:var(--rose-pale);color:var(--rose);}

  /* SETTINGS */
  .settings-section{background:var(--card);border-radius:var(--radius);margin:0 16px 14px;overflow:hidden;box-shadow:var(--shadow-sm);}
  .settings-row{display:flex;align-items:center;padding:15px 18px;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;}
  .settings-row:last-child{border-bottom:none;}
  .settings-row:hover{background:var(--section-bg);}
  .settings-row.no-tap{cursor:default;}
  .settings-row.no-tap:hover{background:transparent;}
  .settings-row.disabled{opacity:0.45;cursor:default;}
  .settings-row.disabled:hover{background:transparent;}
  .settings-row-icon{font-size:20px;margin-right:14px;width:26px;text-align:center;}
  .settings-row-info{flex:1;}
  .settings-row-title{font-size:14px;font-weight:600;color:var(--dark);}
  .settings-row-sub{font-size:12px;color:var(--mid);margin-top:2px;}
  .team-avatar{width:36px;height:36px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--rose);margin-right:12px;flex-shrink:0;}
  .team-badge{font-size:10px;padding:2px 7px;border-radius:8px;font-weight:600;background:var(--rose-pale);color:var(--rose);margin-left:6px;}
  .currency-select{padding:6px 12px;border:1.5px solid var(--rose-light);border-radius:20px;background:var(--rose-pale);color:var(--rose);font-weight:600;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;outline:none;}
  .logout-btn{margin:4px 16px 8px;width:calc(100% - 32px);padding:14px;background:transparent;border:1.5px solid var(--border);border-radius:var(--radius-sm);color:#E05050;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
  .logout-btn:hover{background:var(--rose-pale);}

  /* INVITE BANNER */
  .invite-banner{margin:16px;background:linear-gradient(135deg,#FF8C42 0%,#FF6B6B 100%);border-radius:var(--radius);padding:16px 18px;display:flex;align-items:center;gap:12px;}
  .invite-banner-btn{margin-left:auto;background:white;border:none;border-radius:10px;padding:7px 14px;font-size:13px;font-weight:600;color:#FF6B6B;cursor:pointer;flex-shrink:0;font-family:'DM Sans',sans-serif;}

  /* EXPENSE */
  .expense-summary{margin:16px;background:linear-gradient(135deg,var(--rose) 0%,#D4607A 100%);border-radius:var(--radius);padding:20px;}

  /* CHECKLIST */
  .checklist-item{background:var(--card);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-sm);}
  .check-circle{width:24px;height:24px;border-radius:50%;border:2px solid var(--rose-light);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s;}
  .check-circle.done{background:var(--rose);border-color:var(--rose);}
  .check-text{flex:1;font-size:14px;font-weight:500;color:var(--dark);}
  .check-text.done{text-decoration:line-through;color:var(--light);}

  /* GUESTS */
  .guest-avatar{width:42px;height:42px;border-radius:50%;background:var(--rose-pale);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--rose);flex-shrink:0;}

  /* SAVINGS */
  .savings-hero{margin:16px;background:linear-gradient(135deg,#5B4FCF 0%,#3D35A6 100%);border-radius:var(--radius);padding:22px;color:white;}

  /* TIMELINE */
  .timeline-item{background:var(--card);border-radius:14px;padding:12px 16px;box-shadow:var(--shadow-sm);flex:1;}

  /* INSPIRASI */
  .inspi-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px;}
  .inspi-card{background:var(--card);border-radius:var(--radius-sm);overflow:hidden;box-shadow:var(--shadow-sm);cursor:pointer;transition:transform 0.15s;}
  .inspi-card:hover{transform:translateY(-2px);}
  .inspi-img{width:100%;height:140px;object-fit:cover;display:block;background:var(--section-bg);}
  .inspi-img-placeholder{width:100%;height:140px;background:var(--section-bg);display:flex;align-items:center;justify-content:center;font-size:32px;}
  .inspi-note{padding:10px 12px;}
  .inspi-note-text{font-size:12px;color:var(--mid);line-height:1.5;}

  /* COLOR PICKER */
  .color-swatches{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;}
  .color-swatch{width:36px;height:36px;border-radius:50%;cursor:pointer;border:3px solid transparent;transition:transform 0.15s;}
  .color-swatch.active{border-color:var(--rose);transform:scale(1.15);}

  /* EMPTY */
  .empty-state{text-align:center;padding:48px 24px;}
  .empty-icon{font-size:46px;margin-bottom:12px;}
  .empty-title{font-size:15px;font-weight:600;color:var(--mid);}
  .empty-sub{font-size:13px;color:var(--light);margin-top:4px;}

  .loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:14px;}
  .spinner{width:38px;height:38px;border:3px solid var(--rose-pale);border-top-color:var(--rose);border-radius:50%;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
  .info-text{font-size:13px;color:var(--light);text-align:center;padding:12px 20px 24px;}

  /* IMAGE UPLOAD */
  .img-upload-label{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border:2px dashed var(--border);border-radius:var(--radius-sm);cursor:pointer;color:var(--mid);font-size:14px;margin-bottom:14px;transition:border-color 0.2s;}
  .img-upload-label:hover{border-color:var(--rose);color:var(--rose);}
  `;
}

let styleEl = null;
function applyTheme(dark) {
  if (!styleEl) { styleEl = document.createElement("style"); document.head.appendChild(styleEl); }
  styleEl.textContent = makeStyles(dark ? DARK : LIGHT);
  document.body.style.background = dark ? DARK.bg : LIGHT.bg;
}

// ─── HERO BG COLORS ──────────────────────────────────────
const BG_COLORS = ["#1a1a1a","#2D3A4A","#3D2A3A","#2A3D2A","#3A2A1A","#1A2A3D","#4A2A2D","#2A1A3D"];

// ─── AUTH ─────────────────────────────────────────────────
function AuthScreen({ onAuth, dark }) {
  const [tab,setTab]=useState("login");
  const [name,setName]=useState(""), [email,setEmail]=useState(""), [pass,setPass]=useState("");
  const [loading,setLoading]=useState(false), [err,setErr]=useState(""), [reset,setReset]=useState(false);
  const go = async fn => { setErr(""); setLoading(true); try { const c=await fn(); onAuth(c.user); } catch(e){ setErr(ERR[e.code]||e.message); } setLoading(false); };
  return (
    <div className="auth-wrap">
      <div className="auth-hero">
        <span className="auth-logo">💍</span>
        <h1 className="auth-title">Kahwin<br/>Planner</h1>
        <p className="auth-sub">Rancang majlis impian bersama</p>
      </div>
      <div className="auth-card">
        <div className="auth-tabs">
          <button className={`auth-tab ${tab==="login"?"active":""}`} onClick={()=>{setTab("login");setErr("");setReset(false);}}>Log Masuk</button>
          <button className={`auth-tab ${tab==="register"?"active":""}`} onClick={()=>{setTab("register");setErr("");setReset(false);}}>Daftar</button>
        </div>
        {err&&<div className="err-msg">{err}</div>}
        {reset&&<div className="success-msg">✓ Email reset dihantar!</div>}
        {tab==="register"&&<><div className="field-label">Nama Penuh</div><input className="field-input" placeholder="Nama kamu" value={name} onChange={e=>setName(e.target.value)}/></>}
        <div className="field-label">Email</div>
        <input className="field-input" type="email" placeholder="email@contoh.com" value={email} onChange={e=>setEmail(e.target.value)}/>
        <div className="field-label">Kata Laluan</div>
        <input className="field-input" type="password" placeholder="••••••••" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go(()=>signInWithEmailAndPassword(auth,email,pass))}/>
        <button className="btn-primary" disabled={loading||!email||!pass||(tab==="register"&&!name)}
          onClick={()=>tab==="login"?go(()=>signInWithEmailAndPassword(auth,email,pass)):go(async()=>{const c=await createUserWithEmailAndPassword(auth,email,pass);await updateProfile(c.user,{displayName:name});return c;})}>
          {loading?"Memuatkan...":tab==="login"?"Log Masuk":"Daftar Sekarang"}
        </button>
        {tab==="login"&&<div className="forgot-link" onClick={async()=>{if(!email){setErr("Masukkan email dulu.");return;}setLoading(true);try{await sendPasswordResetEmail(auth,email);setReset(true);setErr("");}catch(e){setErr(ERR[e.code]||e.message);}setLoading(false);}}>Lupa kata laluan?</div>}
        <div className="divider"><span>atau</span></div>
        <button className="btn-google" disabled={loading} onClick={()=>go(()=>signInWithPopup(auth,googleProvider))}>
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Teruskan dengan Google
        </button>
      </div>
    </div>
  );
}

// ─── SETUP ───────────────────────────────────────────────
function SetupScreen({ user, onDone }) {
  const [groom,setGroom]=useState(user.displayName||""), [bride,setBride]=useState(""), [date,setDate]=useState(""), [saving,setSaving]=useState(false);
  async function save() {
    if(!groom||!bride||!date)return; setSaving(true);
    const data={groom,bride,date,ownerId:user.uid,ownerEmail:user.email,ownerName:user.displayName||user.email,team:[{uid:user.uid,email:user.email,name:user.displayName||user.email,role:"owner",joinedAt:new Date().toISOString()}],currency:"MYR",heroBg:"#1a1a1a",createdAt:new Date().toISOString()};
    await setDoc(doc(db,"weddings",user.uid),data);
    await setDoc(doc(db,"users",user.uid),{weddingId:user.uid,email:user.email,name:user.displayName||user.email},{merge:true});
    onDone({...data,id:user.uid}); setSaving(false);
  }
  return (
    <div className="setup-wrap">
      <div style={{fontSize:52,marginBottom:14}}>💍</div>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,color:"var(--dark)",textAlign:"center",marginBottom:8}}>Selamat Datang!</h1>
      <p style={{fontSize:14,color:"var(--mid)",marginBottom:28,textAlign:"center"}}>Isi maklumat majlis kamu</p>
      <div className="setup-card">
        <div className="field-label">Nama Pengantin Lelaki</div>
        <input className="field-input" placeholder="Nama pengantin lelaki" value={groom} onChange={e=>setGroom(e.target.value)}/>
        <div className="field-label">Nama Pengantin Perempuan</div>
        <input className="field-input" placeholder="Nama pengantin perempuan" value={bride} onChange={e=>setBride(e.target.value)}/>
        <div className="field-label">Tarikh Majlis</div>
        <input className="field-input" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
        <button className="btn-primary" onClick={save} disabled={!groom||!bride||!date||saving}>{saving?"Menyimpan...":"Mulakan Perancangan →"}</button>
      </div>
    </div>
  );
}

// ─── INVITE MODAL ────────────────────────────────────────
function InviteModal({ wedding, user, onClose }) {
  const [email,setEmail]=useState(""), [loading,setLoading]=useState(false), [err,setErr]=useState(""), [ok,setOk]=useState(false);
  async function send() {
    if(!email)return; setLoading(true); setErr("");
    try {
      await setDoc(doc(db,"invites",email.replace(/\./g,"_")),{weddingId:wedding.id,fromUid:user.uid,fromEmail:user.email,fromName:user.displayName||user.email,toEmail:email,weddingGroom:wedding.groom,weddingBride:wedding.bride,createdAt:new Date().toISOString(),status:"pending"});
      await updateDoc(doc(db,"weddings",wedding.id),{pendingPartner:email});
      setOk(true);
    } catch(e){ setErr("Gagal hantar. Cuba lagi."); }
    setLoading(false);
  }
  return (
    <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal">
        <div className="modal-handle"/>
        <div className="modal-title">Jemput Pasangan 💑</div>
        {ok?(<><div className="success-msg">✓ Jemputan disimpan untuk <b>{email}</b>!<br/>Pasangan perlu daftar/login dengan email tersebut.</div><button className="btn-primary" onClick={onClose}>Tutup</button></>):(<>
          <p style={{fontSize:14,color:"var(--mid)",marginBottom:16,lineHeight:1.6}}>Masukkan email pasangan. Mereka perlu daftar akaun dengan email tersebut untuk join.</p>
          {err&&<div className="err-msg">{err}</div>}
          <div className="field-label">Email Pasangan</div>
          <input className="field-input" type="email" placeholder="email@pasangan.com" value={email} onChange={e=>setEmail(e.target.value)}/>
          <div className="modal-footer"><button className="btn-cancel" onClick={onClose}>Batal</button><button className="btn-save" onClick={send} disabled={!email||loading}>{loading?"...":"Hantar"}</button></div>
        </>)}
      </div>
    </div>
  );
}

// ─── HERO BG MODAL ───────────────────────────────────────
function HeroBgModal({ wedding, onClose, onSave }) {
  const [mode, setMode] = useState(wedding.heroBgType||"color");
  const [color, setColor] = useState(wedding.heroBg||"#1a1a1a");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef();

  async function uploadImg(file) {
    setUploading(true);
    try {
      const r = sref(storage, `weddings/${wedding.id}/hero_bg`);
      await uploadBytes(r, file);
      const url = await getDownloadURL(r);
      await onSave({ heroBgType:"image", heroBgUrl:url, heroBg:color });
      onClose();
    } catch(e){ alert("Gagal upload. Pastikan Firebase Storage diaktifkan."); }
    setUploading(false);
  }

  async function saveColor() {
    await onSave({ heroBgType:"color", heroBg:color });
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal">
        <div className="modal-handle"/>
        <div className="modal-title">Tukar Latar Hero 🎨</div>
        <div className="radio-group">
          <div className={`radio-option ${mode==="color"?"active":""}`} onClick={()=>setMode("color")}>🎨 Warna</div>
          <div className={`radio-option ${mode==="image"?"active":""}`} onClick={()=>setMode("image")}>🖼️ Gambar</div>
        </div>
        {mode==="color"&&(<>
          <div className="field-label">Pilih Warna</div>
          <div className="color-swatches">
            {BG_COLORS.map(c=><div key={c} className={`color-swatch ${color===c?"active":""}`} style={{background:c}} onClick={()=>setColor(c)}/>)}
          </div>
          <div className="field-label">Atau warna custom</div>
          <input type="color" value={color} onChange={e=>setColor(e.target.value)} style={{width:"100%",height:44,border:"none",borderRadius:12,cursor:"pointer",background:"none",marginBottom:14}}/>
          <button className="btn-primary" onClick={saveColor}>Simpan</button>
        </>)}
        {mode==="image"&&(<>
          <p style={{fontSize:13,color:"var(--mid)",marginBottom:14,lineHeight:1.6}}>Upload gambar untuk dijadikan latar belakang kad nama pengantin.</p>
          <label className="img-upload-label">
            <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={e=>e.target.files[0]&&uploadImg(e.target.files[0])}/>
            {uploading?"Uploading...":"📁 Pilih Gambar"}
          </label>
          {wedding.heroBgUrl&&<img src={wedding.heroBgUrl} style={{width:"100%",borderRadius:12,marginBottom:14}} alt="preview"/>}
        </>)}
      </div>
    </div>
  );
}

// ─── DASHBOARD ───────────────────────────────────────────
function Dashboard({ wedding, onNav, expenses, checklist, guests, onUpdateWedding }) {
  const [showBg, setShowBg] = useState(false);
  const days = daysUntil(wedding.date);
  const c = wedding.currency||"MYR";
  const total=expenses.reduce((s,e)=>s+parseFloat(e.amount||0),0);
  const paid=expenses.filter(e=>e.status==="paid").reduce((s,e)=>s+parseFloat(e.amount||0),0);
  const pct=total>0?(paid/total)*100:0;
  const totalGuests=guests.reduce((s,g)=>s+(g.type==="family"?(1+(parseInt(g.familyCount)||0)):1),0);
  const hadirGuests=guests.filter(g=>g.rsvp==="hadir").reduce((s,g)=>s+(g.type==="family"?(1+(parseInt(g.familyCount)||0)):1),0);
  const tasksDone=checklist.filter(c=>c.done).length;
  const joined=(wedding.team||[]).length>1;

  const heroBgStyle = wedding.heroBgType==="image" && wedding.heroBgUrl
    ? {backgroundImage:`url(${wedding.heroBgUrl})`,backgroundSize:"cover",backgroundPosition:"center"}
    : {background:wedding.heroBg||"#1a1a1a"};

  async function saveBg(data) {
    await updateDoc(doc(db,"weddings",wedding.id),data);
    onUpdateWedding({...wedding,...data});
  }

  return (
    <div>
      {!joined&&(
        <div className="invite-banner">
          <span style={{fontSize:28}}>💑</span>
          <div><div style={{color:"white",fontSize:14,fontWeight:700}}>Jemput Pasangan</div><div style={{color:"rgba(255,255,255,0.85)",fontSize:12}}>Plan bersama-sama!</div></div>
          <button className="invite-banner-btn" onClick={()=>onNav("settings")}>Jemput</button>
        </div>
      )}

      <div className="hero-card" style={heroBgStyle}>
        <div className="hero-overlay"/>
        <button className="hero-edit-btn" onClick={()=>setShowBg(true)}>✏️ Tukar Latar</button>
        <div className="hero-content">
          <div className="hero-tag">💒 Wedding</div>
          <div className="hero-names"><h2>{wedding.groom}</h2><div className="amp">&amp;</div><h3>{wedding.bride}</h3></div>
          <div className="hero-date-row">
            <span className="hero-date">{fmtDate(wedding.date)}</span>
            {days!==null&&<span className="hero-days">{days>0?`${days} hari lagi`:days===0?"Hari ini! 🎉":"Sudah berlalu"}</span>}
          </div>
        </div>
      </div>

      <div className="section-grid">
        <div className="stat-card" onClick={()=>onNav("expenses")}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><span style={{fontSize:14,fontWeight:600,color:"var(--dark)"}}>Perbelanjaan & Bajet</span><span style={{color:"var(--light)"}}>›</span></div>
          <span style={{fontSize:26,fontWeight:700,color:"var(--dark)"}}>{fmtRM(paid,c)}</span><span style={{fontSize:15,color:"var(--mid)"}}> / {fmtRM(total,c)}</span>
          <div className="progress-bar-wrap"><div className="progress-bar-fill" style={{width:`${Math.min(pct,100)}%`}}/></div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
            <div><div style={{color:"var(--rose)",fontSize:13,fontWeight:600}}>{fmtRM(paid,c)}</div><div style={{fontSize:11,color:"var(--mid)"}}>Sudah Bayar</div></div>
            <div style={{textAlign:"right"}}><div style={{fontSize:13,fontWeight:600,color:"var(--dark)"}}>{fmtRM(total-paid,c)}</div><div style={{fontSize:11,color:"var(--mid)"}}>Belum Bayar</div></div>
          </div>
        </div>
        <div className="two-col">
          <div className="mini-stat" onClick={()=>onNav("checklist")}>
            <div style={{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"}}>Checklist <span>›</span></div>
            <div style={{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"}}>{tasksDone}</div>
            <div style={{fontSize:12,color:"var(--mid)"}}>/ {checklist.length} tugasan</div>
          </div>
          <div className="mini-stat" onClick={()=>onNav("guests")}>
            <div style={{fontSize:13,fontWeight:600,color:"var(--dark)",display:"flex",justifyContent:"space-between"}}>Tetamu <span>›</span></div>
            <div style={{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"6px 0 2px"}}>{hadirGuests}</div>
            <div style={{fontSize:12,color:"var(--mid)"}}>/ {totalGuests} jemputan</div>
          </div>
        </div>
      </div>

      <div className="section-title">Alat Perancangan</div>
      <div className="feature-grid">
        {[["💰","Perbelanjaan","expenses"],["✅","Checklist","checklist"],["👥","Tetamu","guests"],["🏦","Simpanan","savings"],["📅","Timeline","timeline"],["📝","Nota","notes"],["🖼️","Inspirasi","inspirasi"]].map(([icon,label,nav])=>(
          <button key={nav} className="feature-btn" onClick={()=>onNav(nav)}><span className="feature-icon">{icon}</span><span className="feature-label">{label}</span></button>
        ))}
      </div>

      {showBg&&<HeroBgModal wedding={wedding} onClose={()=>setShowBg(false)} onSave={saveBg}/>}
    </div>
  );
}

// ─── EXPENSES ────────────────────────────────────────────
function ExpensesPage({ expenses, onAdd, onDelete, onToggle, currency }) {
  const [show,setShow]=useState(false);
  const [name,setName]=useState(""), [amt,setAmt]=useState(""), [cat,setCat]=useState("Lain-lain"), [status,setStatus]=useState("unpaid"), [saving,setSaving]=useState(false);
  const total=expenses.reduce((s,e)=>s+parseFloat(e.amount||0),0), paid=expenses.filter(e=>e.status==="paid").reduce((s,e)=>s+parseFloat(e.amount||0),0);
  async function add(){if(!name||!amt)return;setSaving(true);await onAdd({name,amount:parseFloat(amt),category:cat,status,createdAt:new Date().toISOString()});setName("");setAmt("");setCat("Lain-lain");setStatus("unpaid");setSaving(false);setShow(false);}
  return (
    <div>
      <div className="expense-summary">
        <div style={{fontSize:12,color:"rgba(255,255,255,0.8)",fontWeight:500}}>Jumlah Perbelanjaan</div>
        <div style={{fontSize:32,fontWeight:700,color:"white",margin:"4px 0 14px"}}>{fmtRM(total,currency)}</div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div><div style={{fontSize:15,fontWeight:600,color:"white"}}>{fmtRM(paid,currency)}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.75)"}}>Sudah Bayar</div></div>
          <div><div style={{fontSize:15,fontWeight:600,color:"white"}}>{fmtRM(total-paid,currency)}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.75)"}}>Belum Bayar</div></div>
        </div>
      </div>
      <button className="add-btn" onClick={()=>setShow(true)}>＋ Tambah Perbelanjaan</button>
      <div className="list-section">
        {expenses.length===0&&<div className="empty-state"><div className="empty-icon">💸</div><div className="empty-title">Tiada perbelanjaan lagi</div></div>}
        {expenses.map(e=>(
          <div key={e.id} className="list-item">
            <div className="list-item-icon">{CAT_ICONS[e.category]||"💼"}</div>
            <div className="list-item-info" onClick={()=>onToggle(e.id,e.status)} style={{cursor:"pointer"}}>
              <div className="list-item-name">{e.name}</div>
              <div className="list-item-sub">{e.category}{e.addedBy?` · ${e.addedBy}`:""}</div>
            </div>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:e.status==="paid"?"var(--rose)":"var(--mid)",textAlign:"right"}}>{fmtRM(e.amount,currency)}</div>
              <div className={`badge ${e.status==="paid"?"badge-paid":"badge-unpaid"}`}>{e.status==="paid"?"✓ Bayar":"Belum"}</div>
            </div>
            <button className="delete-btn" onClick={()=>onDelete(e.id)}>🗑</button>
          </div>
        ))}
      </div>
      {show&&(
        <div className="modal-overlay" onClick={ev=>ev.target===ev.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Tambah Perbelanjaan</div>
            <div className="field-label">Nama</div><input className="field-input" placeholder="cth: Sewa Dewan" value={name} onChange={e=>setName(e.target.value)}/>
            <div className="field-label">Jumlah ({currency})</div><input className="field-input" type="number" placeholder="0.00" value={amt} onChange={e=>setAmt(e.target.value)}/>
            <div className="field-label">Kategori</div>
            <select className="field-input" value={cat} onChange={e=>setCat(e.target.value)}>{Object.keys(CAT_ICONS).map(k=><option key={k}>{k}</option>)}</select>
            <div className="field-label">Status</div>
            <div className="radio-group">{[["paid","✓ Sudah Bayar"],["unpaid","⏳ Belum Bayar"]].map(([v,l])=><div key={v} className={`radio-option ${status===v?"active":""}`} onClick={()=>setStatus(v)}>{l}</div>)}</div>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={add} disabled={!name||!amt||saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CHECKLIST ───────────────────────────────────────────
function ChecklistPage({ checklist, onAdd, onToggle, onDelete }) {
  const [show,setShow]=useState(false), [task,setTask]=useState(""), [saving,setSaving]=useState(false);
  const done=checklist.filter(c=>c.done).length;
  async function add(){if(!task)return;setSaving(true);await onAdd({task,done:false,createdAt:new Date().toISOString()});setTask("");setSaving(false);setShow(false);}
  return (
    <div>
      <div style={{margin:16,background:"var(--card)",borderRadius:20,padding:20,boxShadow:"var(--shadow-sm)"}}>
        <div style={{fontSize:13,color:"var(--mid)",fontWeight:600}}>Kemajuan Tugasan</div>
        <div style={{fontSize:28,fontWeight:700,color:"var(--dark)",margin:"4px 0 10px"}}>{done} / {checklist.length}</div>
        <div className="progress-bar-wrap"><div className="progress-bar-fill" style={{width:checklist.length>0?`${(done/checklist.length)*100}%`:"0%"}}/></div>
      </div>
      <button className="add-btn" onClick={()=>setShow(true)}>＋ Tambah Tugasan</button>
      <div className="list-section">
        {checklist.length===0&&<div className="empty-state"><div className="empty-icon">✅</div><div className="empty-title">Tiada tugasan lagi</div></div>}
        {checklist.map(item=>(
          <div key={item.id} className="checklist-item">
            <div className={`check-circle ${item.done?"done":""}`} onClick={()=>onToggle(item.id,item.done)}>{item.done&&<span style={{color:"white",fontSize:13}}>✓</span>}</div>
            <span className={`check-text ${item.done?"done":""}`}>{item.task}</span>
            {item.addedBy&&<span style={{fontSize:11,color:"var(--light)",flexShrink:0}}>{item.addedBy}</span>}
            <button className="delete-btn" onClick={()=>onDelete(item.id)}>🗑</button>
          </div>
        ))}
      </div>
      {show&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Tambah Tugasan</div>
            <div className="field-label">Nama Tugasan</div><input className="field-input" placeholder="cth: Tempah pelamin" value={task} onChange={e=>setTask(e.target.value)}/>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={add} disabled={!task||saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GUESTS (with family count) ──────────────────────────
function GuestsPage({ guests, onAdd, onDelete, onRSVP }) {
  const [show,setShow]=useState(false);
  const [name,setName]=useState(""), [phone,setPhone]=useState(""), [rsvp,setRsvp]=useState("belum"), [type,setType]=useState("personal"), [familyCount,setFamilyCount]=useState(""), [saving,setSaving]=useState(false);

  const totalPax = guests.reduce((s,g)=>s+(g.type==="family"?(1+(parseInt(g.familyCount)||0)):1),0);
  const hadirPax = guests.filter(g=>g.rsvp==="hadir").reduce((s,g)=>s+(g.type==="family"?(1+(parseInt(g.familyCount)||0)):1),0);
  const tidak = guests.filter(g=>g.rsvp==="tidak").length;

  async function add(){
    if(!name)return; setSaving(true);
    await onAdd({name,phone,rsvp,type,familyCount:type==="family"?parseInt(familyCount)||0:0,createdAt:new Date().toISOString()});
    setName("");setPhone("");setRsvp("belum");setType("personal");setFamilyCount("");setSaving(false);setShow(false);
  }

  return (
    <div>
      <div style={{margin:16,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
        {[{l:"Jemputan",v:guests.length,c:"var(--dark)"},{l:"Hadir (pax)",v:hadirPax,c:"#4CAF50"},{l:"Tidak Hadir",v:tidak,c:"#E05050"}].map(s=>(
          <div key={s.l} style={{background:"var(--card)",borderRadius:16,padding:"14px 10px",textAlign:"center",boxShadow:"var(--shadow-sm)"}}>
            <div style={{fontSize:22,fontWeight:700,color:s.c}}>{s.v}</div><div style={{fontSize:11,color:"var(--mid)",marginTop:2}}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{margin:"0 16px 12px",background:"var(--rose-pale)",borderRadius:12,padding:"10px 14px",fontSize:13,color:"var(--rose)",fontWeight:600}}>
        Jumlah keseluruhan: {totalPax} pax
      </div>
      <button className="add-btn" onClick={()=>setShow(true)}>＋ Tambah Tetamu</button>
      <div className="list-section">
        {guests.length===0&&<div className="empty-state"><div className="empty-icon">👥</div><div className="empty-title">Tiada tetamu lagi</div></div>}
        {guests.map(g=>{
          const pax=g.type==="family"?(1+(parseInt(g.familyCount)||0)):1;
          return (
            <div key={g.id} className="list-item">
              <div className="guest-avatar">{g.name[0]?.toUpperCase()}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600,color:"var(--dark)"}}>{g.name}</div>
                <div style={{fontSize:11,color:"var(--mid)",marginTop:2}}>
                  {g.type==="family"?`👨‍👩‍👧‍👦 Berkeluarga · ${pax} pax`:"👤 Personal"}
                  {g.phone?` · ${g.phone}`:""}
                </div>
              </div>
              <select style={{fontSize:12,padding:"4px 8px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--input-bg)",color:"var(--dark)",cursor:"pointer",fontFamily:"DM Sans,sans-serif"}} value={g.rsvp} onChange={e=>onRSVP(g.id,e.target.value)}>
                <option value="belum">⏳ Belum</option><option value="hadir">✅ Hadir</option><option value="tidak">❌ Tidak</option>
              </select>
              <button className="delete-btn" onClick={()=>onDelete(g.id)}>🗑</button>
            </div>
          );
        })}
      </div>
      {show&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Tambah Tetamu</div>
            <div className="field-label">Nama</div><input className="field-input" placeholder="Nama tetamu" value={name} onChange={e=>setName(e.target.value)}/>
            <div className="field-label">No. Telefon (Pilihan)</div><input className="field-input" placeholder="012-3456789" value={phone} onChange={e=>setPhone(e.target.value)}/>
            <div className="field-label">Jenis Jemputan</div>
            <div className="radio-group">
              <div className={`radio-option ${type==="personal"?"active":""}`} onClick={()=>setType("personal")}>👤 Personal</div>
              <div className={`radio-option ${type==="family"?"active":""}`} onClick={()=>setType("family")}>👨‍👩‍👧‍👦 Berkeluarga</div>
            </div>
            {type==="family"&&(<>
              <div className="field-label">Bilangan Ahli Lain (selain ketua)</div>
              <input className="field-input" type="number" placeholder="cth: 3 (jadi jumlah = 4 pax)" value={familyCount} onChange={e=>setFamilyCount(e.target.value)}/>
              {familyCount&&<div style={{fontSize:12,color:"var(--rose)",marginBottom:14,marginTop:-8}}>Jumlah pax: {1+parseInt(familyCount||0)} orang</div>}
            </>)}
            <div className="field-label">RSVP</div>
            <div className="radio-group">{[["belum","⏳ Belum"],["hadir","✅ Hadir"],["tidak","❌ Tidak"]].map(([v,l])=><div key={v} className={`radio-option ${rsvp===v?"active":""}`} onClick={()=>setRsvp(v)}>{l}</div>)}</div>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={add} disabled={!name||saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SAVINGS ─────────────────────────────────────────────
function SavingsPage({ savings, onAdd, onDelete, wedding }) {
  const [show,setShow]=useState(false), [desc,setDesc]=useState(""), [amt,setAmt]=useState(""), [saving,setSaving]=useState(false);
  const c=wedding.currency||"MYR", total=savings.reduce((s,e)=>s+parseFloat(e.amount||0),0), tgt=parseFloat(wedding.savingsTarget)||0, pct=tgt>0?Math.min((total/tgt)*100,100):0;
  async function add(){if(!desc||!amt)return;setSaving(true);await onAdd({desc,amount:parseFloat(amt),date:new Date().toISOString()});setDesc("");setAmt("");setSaving(false);setShow(false);}
  return (
    <div>
      <div className="savings-hero">
        <div style={{fontSize:12,opacity:0.8}}>Jumlah Simpanan</div>
        <div style={{fontSize:34,fontWeight:700,margin:"4px 0 4px"}}>{fmtRM(total,c)}</div>
        <div style={{fontSize:13,opacity:0.8}}>Sasaran: {fmtRM(tgt,c)}</div>
        <div style={{background:"rgba(255,255,255,0.2)",borderRadius:4,height:8,marginTop:12,overflow:"hidden"}}><div style={{height:"100%",background:"white",borderRadius:4,width:`${pct}%`,transition:"width 0.5s"}}/></div>
        <div style={{fontSize:13,marginTop:6,opacity:0.9}}>{pct.toFixed(0)}% tercapai</div>
      </div>
      <div style={{padding:"0 16px 12px"}}>
        <div className="field-label" style={{marginBottom:6}}>Sasaran ({c})</div>
        <input className="field-input" type="number" placeholder="cth: 50000" defaultValue={wedding.savingsTarget} onBlur={e=>updateDoc(doc(db,"weddings",wedding.id),{savingsTarget:parseFloat(e.target.value)||0})}/>
      </div>
      <button className="add-btn" onClick={()=>setShow(true)}>＋ Tambah Simpanan</button>
      <div className="list-section">
        {savings.length===0&&<div className="empty-state"><div className="empty-icon">🏦</div><div className="empty-title">Tiada rekod simpanan</div></div>}
        {savings.map(s=>(
          <div key={s.id} className="list-item">
            <div className="list-item-icon">💰</div>
            <div className="list-item-info"><div className="list-item-name">{s.desc}</div><div className="list-item-sub">{fmtDate(s.date)}</div></div>
            <div style={{fontSize:13,fontWeight:700,color:"var(--rose)"}}>{fmtRM(s.amount,c)}</div>
            <button className="delete-btn" onClick={()=>onDelete(s.id)}>🗑</button>
          </div>
        ))}
      </div>
      {show&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Tambah Simpanan</div>
            <div className="field-label">Keterangan</div><input className="field-input" placeholder="cth: Gaji Januari" value={desc} onChange={e=>setDesc(e.target.value)}/>
            <div className="field-label">Jumlah ({c})</div><input className="field-input" type="number" placeholder="0.00" value={amt} onChange={e=>setAmt(e.target.value)}/>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={add} disabled={!desc||!amt||saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TIMELINE (editable) ─────────────────────────────────
function TimelinePage({ timeline, onAdd, onDelete, onEdit, wedding }) {
  const [show,setShow]=useState(false), [editItem,setEditItem]=useState(null);
  const [label,setLabel]=useState(""), [icon,setIcon]=useState("📌"), [dateVal,setDateVal]=useState(""), [saving,setSaving]=useState(false);

  function openAdd(){ setEditItem(null); setLabel(""); setIcon("📌"); setDateVal(""); setShow(true); }
  function openEdit(item){ setEditItem(item); setLabel(item.label); setIcon(item.icon||"📌"); setDateVal(item.date||""); setShow(true); }

  async function save(){
    if(!label||!dateVal)return; setSaving(true);
    if(editItem){ await onEdit(editItem.id,{label,icon,date:dateVal}); }
    else { await onAdd({label,icon,date:dateVal,createdAt:new Date().toISOString()}); }
    setSaving(false); setShow(false);
  }

  const today = new Date();
  const sorted = [...timeline].sort((a,b)=>new Date(a.date)-new Date(b.date));

  const ICONS = ["📌","🏛️","👗","👑","💌","📷","📬","✂️","📋","💍","💒","🎉","🎂","🛍️","✈️","🏨","💐","🎵"];

  return (
    <div>
      <button className="add-btn" onClick={openAdd}>＋ Tambah Timeline</button>
      <div style={{padding:"0 16px"}}>
        {sorted.length===0&&<div className="empty-state"><div className="empty-icon">📅</div><div className="empty-title">Tiada timeline lagi</div><div className="empty-sub">Tambah milestone perkahwinan kamu</div></div>}
        <div style={{position:"relative",paddingLeft:28}}>
          {sorted.length>0&&<div style={{position:"absolute",left:10,top:0,bottom:0,width:2,background:"var(--border)",borderRadius:2}}/>}
          {sorted.map((m,i)=>{
            const past=new Date(m.date)<today;
            return (
              <div key={m.id} style={{display:"flex",gap:14,marginBottom:20,position:"relative"}}>
                <div style={{position:"absolute",left:-22,top:14,width:16,height:16,borderRadius:"50%",background:past?"var(--rose)":"var(--card)",border:"2px solid var(--rose)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {past&&<span style={{color:"white",fontSize:8,fontWeight:700}}>✓</span>}
                </div>
                <div className="timeline-item" style={{opacity:past?0.75:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:22}}>{m.icon||"📌"}</span>
                    <div style={{display:"flex",gap:6}}>
                      <button className="edit-btn" onClick={()=>openEdit(m)}>✏️</button>
                      <button className="delete-btn" onClick={()=>onDelete(m.id)}>🗑</button>
                    </div>
                  </div>
                  <div style={{fontSize:14,fontWeight:600,color:"var(--dark)",marginTop:8}}>{m.label}</div>
                  <div style={{fontSize:12,color:past?"var(--rose)":"var(--mid)",marginTop:4,fontWeight:past?600:400}}>{fmtDate(m.date)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {show&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/>
            <div className="modal-title">{editItem?"Edit":"Tambah"} Timeline</div>
            <div className="field-label">Nama Milestone</div>
            <input className="field-input" placeholder="cth: Tempah dewan" value={label} onChange={e=>setLabel(e.target.value)}/>
            <div className="field-label">Tarikh</div>
            <input className="field-input" type="date" value={dateVal} onChange={e=>setDateVal(e.target.value)}/>
            <div className="field-label">Ikon</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}}>
              {ICONS.map(ic=><button key={ic} onClick={()=>setIcon(ic)} style={{fontSize:22,background:icon===ic?"var(--rose-pale)":"var(--section-bg)",border:icon===ic?"2px solid var(--rose)":"2px solid transparent",borderRadius:10,width:40,height:40,cursor:"pointer"}}>{ic}</button>)}
            </div>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={save} disabled={!label||!dateVal||saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── INSPIRASI ───────────────────────────────────────────
function InspirasiPage({ inspirasi, onAdd, onDelete, onEdit, weddingId }) {
  const [show,setShow]=useState(false), [editItem,setEditItem]=useState(null);
  const [nota,setNota]=useState(""), [imgFile,setImgFile]=useState(null), [preview,setPreview]=useState(""), [saving,setSaving]=useState(false);
  const fileRef=useRef();

  function openAdd(){ setEditItem(null); setNota(""); setImgFile(null); setPreview(""); setShow(true); }
  function openEdit(item){ setEditItem(item); setNota(item.nota||""); setImgFile(null); setPreview(item.imgUrl||""); setShow(true); }

  function onFileChange(e){
    const f=e.target.files[0]; if(!f)return;
    setImgFile(f); setPreview(URL.createObjectURL(f));
  }

  async function save(){
    setSaving(true);
    let imgUrl = editItem?.imgUrl||"";
    if(imgFile){
      const r=sref(storage,`weddings/${weddingId}/inspirasi/${Date.now()}`);
      await uploadBytes(r,imgFile);
      imgUrl=await getDownloadURL(r);
    }
    if(editItem){ await onEdit(editItem.id,{nota,imgUrl}); }
    else { await onAdd({nota,imgUrl,createdAt:new Date().toISOString()}); }
    setSaving(false); setShow(false);
  }

  const [viewItem, setViewItem] = useState(null);

  return (
    <div>
      <button className="add-btn" onClick={openAdd}>＋ Tambah Inspirasi</button>
      {inspirasi.length===0&&<div className="empty-state"><div className="empty-icon">🖼️</div><div className="empty-title">Tiada inspirasi lagi</div><div className="empty-sub">Simpan idea & inspirasi wedding kamu</div></div>}
      <div className="inspi-grid">
        {inspirasi.map(item=>(
          <div key={item.id} className="inspi-card" onClick={()=>setViewItem(item)}>
            {item.imgUrl?<img src={item.imgUrl} className="inspi-img" alt="inspirasi"/>:<div className="inspi-img-placeholder">🖼️</div>}
            {item.nota&&<div className="inspi-note"><div className="inspi-note-text">{item.nota}</div></div>}
          </div>
        ))}
      </div>

      {/* View modal */}
      {viewItem&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setViewItem(null)}>
          <div className="modal" style={{maxHeight:"90vh"}}>
            <div className="modal-handle"/>
            {viewItem.imgUrl&&<img src={viewItem.imgUrl} style={{width:"100%",borderRadius:14,marginBottom:14}} alt="inspirasi"/>}
            {viewItem.nota&&<p style={{fontSize:14,color:"var(--dark)",lineHeight:1.6,marginBottom:16}}>{viewItem.nota}</p>}
            <div style={{display:"flex",gap:10}}>
              <button className="btn-cancel" style={{flex:1}} onClick={()=>setViewItem(null)}>Tutup</button>
              <button className="btn-save" style={{flex:1}} onClick={()=>{setViewItem(null);openEdit(viewItem);}}>✏️ Edit</button>
              <button style={{flex:1,padding:13,background:"#FFE8EC",color:"#E05050",border:"none",borderRadius:"var(--radius-sm)",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"DM Sans,sans-serif"}} onClick={()=>{onDelete(viewItem.id);setViewItem(null);}}>🗑 Padam</button>
            </div>
          </div>
        </div>
      )}

      {show&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShow(false)}>
          <div className="modal">
            <div className="modal-handle"/>
            <div className="modal-title">{editItem?"Edit":"Tambah"} Inspirasi 🖼️</div>
            <label className="img-upload-label">
              <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={onFileChange}/>
              {preview?<img src={preview} style={{width:"100%",borderRadius:10}} alt="preview"/>:"📁 Pilih Gambar"}
            </label>
            <div className="field-label">Nota / Keterangan</div>
            <textarea className="field-input" rows={3} placeholder="Tulis nota untuk inspirasi ini..." value={nota} onChange={e=>setNota(e.target.value)}/>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setShow(false)}>Batal</button><button className="btn-save" onClick={save} disabled={saving}>{saving?"Uploading...":"Simpan"}</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── NOTES ───────────────────────────────────────────────
function NotesPage({ notes, onSave }) {
  const [text,setText]=useState(notes||""), [saved,setSaved]=useState(true);
  useEffect(()=>setText(notes||""),[notes]);
  function change(v){setText(v);setSaved(false);clearTimeout(window._nt);window._nt=setTimeout(async()=>{await onSave(v);setSaved(true);},1200);}
  return (
    <div style={{padding:"0 16px"}}>
      <div style={{display:"flex",justifyContent:"space-between",margin:"4px 0 12px"}}>
        <span style={{fontSize:13,color:"var(--mid)"}}>Auto-save aktif</span>
        <span style={{fontSize:12,color:saved?"#4CAF50":"var(--rose)",fontWeight:600}}>{saved?"✓ Tersimpan":"Menyimpan..."}</span>
      </div>
      <textarea value={text} onChange={e=>change(e.target.value)} placeholder="Tulis nota perkahwinan kamu di sini..."
        style={{width:"100%",minHeight:"60vh",padding:16,border:"1.5px solid var(--border)",borderRadius:16,fontSize:15,fontFamily:"DM Sans,sans-serif",color:"var(--dark)",background:"var(--card)",outline:"none",resize:"none",lineHeight:1.7}}/>
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────
function SettingsPage({ wedding, user, onBack, onUpdate, onSignOut, dark, setDark }) {
  const [showInvite,setShowInvite]=useState(false), [editMode,setEditMode]=useState(false);
  const [groom,setGroom]=useState(wedding.groom), [bride,setBride]=useState(wedding.bride), [date,setDate]=useState(wedding.date);
  const [saving,setSaving]=useState(false), [logs,setLogs]=useState(null);
  const isOwner=wedding.ownerId===user.uid;

  async function saveEvent(){setSaving(true);await updateDoc(doc(db,"weddings",wedding.id),{groom,bride,date});onUpdate({...wedding,groom,bride,date});setSaving(false);setEditMode(false);}
  async function loadLogs(){const snap=await getDocs(collection(db,"weddings",wedding.id,"activityLog"));setLogs(snap.docs.map(d=>d.data()).sort((a,b)=>new Date(b.time)-new Date(a.time)));}

  return (
    <div style={{paddingBottom:30}}>
      <div style={{padding:"20px 20px 8px",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)"}}>‹</button>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:"var(--dark)"}}>Profil & Tetapan</h2>
      </div>

      <div className="settings-section">
        <div className="settings-row" onClick={()=>setEditMode(true)}>
          <span className="settings-row-icon">💒</span>
          <div className="settings-row-info"><div className="settings-row-title">Events</div><div className="settings-row-sub">{wedding.groom} & {wedding.bride}</div></div>
          <span style={{color:"var(--light)",fontSize:18}}>›</span>
        </div>
        <div className={`settings-row ${!isOwner?"disabled":""}`} onClick={()=>isOwner&&setShowInvite(true)}>
          <span className="settings-row-icon">💑</span>
          <div className="settings-row-info"><div className="settings-row-title">Jemput Pasangan</div><div className="settings-row-sub">{isOwner?"Jemput pasangan untuk edit bersama":"Hanya pemilik boleh menjemput"}</div></div>
          <span style={{color:"var(--light)",fontSize:18}}>›</span>
        </div>
      </div>

      <div className="settings-section">
        <div style={{padding:"14px 18px 6px"}}><div style={{fontSize:12,fontWeight:700,color:"var(--mid)",textTransform:"uppercase",letterSpacing:"0.8px"}}>Team</div></div>
        {(wedding.team||[]).map((m,i)=>(
          <div key={i} className="settings-row no-tap">
            <div className="team-avatar">{(m.name||m.email)[0].toUpperCase()}</div>
            <div className="settings-row-info">
              <div className="settings-row-title" style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4}}>{m.email} {m.uid===user.uid&&<span style={{fontSize:11,color:"var(--mid)"}}>(kamu)</span>}<span className="team-badge">{m.role==="owner"?"Owner":"Partner"}</span></div>
              <div className="settings-row-sub">{m.role==="owner"?"Pemilik akaun":`Joined ${fmtDate(m.joinedAt)}`}</div>
            </div>
          </div>
        ))}
        {wedding.pendingPartner&&!(wedding.team||[]).find(t=>t.email===wedding.pendingPartner)&&(
          <div className="settings-row no-tap" style={{opacity:0.55}}>
            <div className="team-avatar" style={{background:"#FFF3E0",color:"#E65100"}}>⏳</div>
            <div className="settings-row-info"><div className="settings-row-title">{wedding.pendingPartner}</div><div className="settings-row-sub">Jemputan belum diterima</div></div>
          </div>
        )}
      </div>

      <div className="settings-section">
        <div className="settings-row no-tap">
          <span className="settings-row-icon">💱</span>
          <div className="settings-row-info"><div className="settings-row-title">Mata Wang</div></div>
          <select className="currency-select" value={wedding.currency||"MYR"} onChange={async e=>{await updateDoc(doc(db,"weddings",wedding.id),{currency:e.target.value});onUpdate({...wedding,currency:e.target.value});}}>
            {["MYR","SGD","USD","GBP"].map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="settings-row no-tap" style={{cursor:"default"}}>
          <span className="settings-row-icon">{dark?"🌙":"☀️"}</span>
          <div className="settings-row-info"><div className="settings-row-title">Dark Mode</div><div className="settings-row-sub">{dark?"Gelap aktif":"Cerah aktif"}</div></div>
          <div onClick={()=>setDark(d=>!d)} style={{width:46,height:26,background:dark?"var(--rose)":"var(--border)",borderRadius:13,position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0}}>
            <div style={{position:"absolute",top:3,left:dark?22:3,width:20,height:20,background:"white",borderRadius:"50%",transition:"left 0.3s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}/>
          </div>
        </div>
        <div className="settings-row" onClick={loadLogs}>
          <span className="settings-row-icon">📋</span>
          <div className="settings-row-info"><div className="settings-row-title">Activity Log</div><div className="settings-row-sub">Semua perubahan oleh kamu & pasangan</div></div>
          <span style={{color:"var(--light)",fontSize:18}}>›</span>
        </div>
        <div className="settings-row no-tap">
          <span className="settings-row-icon">👤</span>
          <div className="settings-row-info"><div className="settings-row-title">Akaun</div><div className="settings-row-sub">{user.email}</div></div>
        </div>
      </div>

      <button className="logout-btn" onClick={onSignOut}>Log Keluar</button>
      <div className="info-text">Ada masalah? support@kahwin-app.my</div>

      {showInvite&&<InviteModal wedding={wedding} user={user} onClose={()=>setShowInvite(false)}/>}

      {editMode&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setEditMode(false)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Edit Maklumat Majlis</div>
            <div className="field-label">Pengantin Lelaki</div><input className="field-input" value={groom} onChange={e=>setGroom(e.target.value)}/>
            <div className="field-label">Pengantin Perempuan</div><input className="field-input" value={bride} onChange={e=>setBride(e.target.value)}/>
            <div className="field-label">Tarikh Majlis</div><input className="field-input" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
            <div className="modal-footer"><button className="btn-cancel" onClick={()=>setEditMode(false)}>Batal</button><button className="btn-save" onClick={saveEvent} disabled={saving}>{saving?"...":"Simpan"}</button></div>
          </div>
        </div>
      )}

      {logs!==null&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setLogs(null)}>
          <div className="modal">
            <div className="modal-handle"/><div className="modal-title">Activity Log</div>
            {logs.length===0?<div className="empty-state"><div className="empty-icon">📋</div><div className="empty-title">Tiada aktiviti</div></div>
              :logs.slice(0,40).map((l,i)=>(
                <div key={i} style={{padding:"10px 0",borderBottom:"1px solid var(--border)"}}>
                  <div style={{fontSize:13,fontWeight:600,color:"var(--dark)"}}>{l.action}</div>
                  <div style={{fontSize:11,color:"var(--mid)",marginTop:3}}>{l.byName} · {fmtDate(l.time)}</div>
                </div>
              ))
            }
            <button className="btn-primary" style={{marginTop:16}} onClick={()=>setLogs(null)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────
export default function KahwinApp() {
  const [dark, setDark] = useState(() => localStorage.getItem("kahwin_dark")==="1");
  const [state,setState]=useState("loading");
  const [user,setUser]=useState(null), [wedding,setWedding]=useState(null), [invite,setInvite]=useState(null);
  const [page,setPage]=useState("home");
  const [expenses,setExpenses]=useState([]), [checklist,setChecklist]=useState([]), [guests,setGuests]=useState([]);
  const [savings,setSavings]=useState([]), [notes,setNotes]=useState(""), [timeline,setTimeline]=useState([]), [inspirasi,setInspirasi]=useState([]);

  useEffect(()=>{ applyTheme(dark); localStorage.setItem("kahwin_dark",dark?"1":"0"); },[dark]);

  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,async u=>{
      if(!u){setState("unauth");return;}
      setUser(u);
      const ud=await getDoc(doc(db,"users",u.uid));
      if(ud.exists()&&ud.data().weddingId){
        const ws=await getDoc(doc(db,"weddings",ud.data().weddingId));
        if(ws.exists()){setWedding({id:ud.data().weddingId,...ws.data()});setState("app");return;}
      }
      const inv=await getDoc(doc(db,"invites",u.email.replace(/\./g,"_")));
      if(inv.exists()&&inv.data().status==="pending")setInvite(inv.data());
      setState("setup");
    });
    return unsub;
  },[]);

  useEffect(()=>{
    if(!wedding)return;
    const base=`weddings/${wedding.id}`;
    const uns=[
      onSnapshot(doc(db,"weddings",wedding.id),s=>{ if(s.exists())setWedding(w=>({...w,...s.data()})); }),
      onSnapshot(collection(db,base,"expenses"),s=>setExpenses(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(collection(db,base,"checklist"),s=>setChecklist(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(collection(db,base,"guests"),s=>setGuests(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(collection(db,base,"savings"),s=>setSavings(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(collection(db,base,"timeline"),s=>setTimeline(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(collection(db,base,"inspirasi"),s=>setInspirasi(s.docs.map(d=>({id:d.id,...d.data()})))),
    ];
    getDoc(doc(db,base,"notes","main")).then(s=>s.exists()&&setNotes(s.data().text||"")).catch(()=>{});
    return ()=>uns.forEach(u=>u());
  },[wedding?.id]);

  async function acceptInvite(){
    const ws=await getDoc(doc(db,"weddings",invite.weddingId));
    if(!ws.exists())return;
    const member={uid:user.uid,email:user.email,name:user.displayName||user.email,role:"partner",joinedAt:new Date().toISOString()};
    await updateDoc(doc(db,"weddings",invite.weddingId),{team:[...(ws.data().team||[]),member]});
    await setDoc(doc(db,"users",user.uid),{weddingId:invite.weddingId,email:user.email,name:user.displayName||user.email},{merge:true});
    await updateDoc(doc(db,"invites",user.email.replace(/\./g,"_")),{status:"accepted"});
    await addDoc(collection(db,"weddings",invite.weddingId,"activityLog"),{action:`${user.displayName||user.email} joined as partner`,byName:user.displayName||user.email,time:new Date().toISOString()});
    setWedding({id:invite.weddingId,...ws.data(),team:[...(ws.data().team||[]),member]});
    setInvite(null);setState("app");
  }

  const log=useCallback(async action=>{
    if(!wedding?.id)return;
    await addDoc(collection(db,"weddings",wedding.id,"activityLog"),{action,byName:user.displayName||user.email,byUid:user.uid,time:new Date().toISOString()});
  },[wedding?.id,user]);

  const addTo=useCallback(async(sub,data)=>{
    const ref=await addDoc(collection(db,"weddings",wedding.id,sub),{...data,addedBy:user.displayName||user.email,addedByUid:user.uid});
    log(`Tambah ${sub}: ${data.name||data.task||data.desc||data.label||""}`);
    return ref;
  },[wedding?.id,user,log]);

  const del=useCallback(async(sub,id)=>{await deleteDoc(doc(db,"weddings",wedding.id,sub,id));log(`Padam item dalam ${sub}`);});
  const upd=useCallback(async(sub,id,data)=>{await updateDoc(doc(db,"weddings",wedding.id,sub,id),data);});

  const TITLES={expenses:"Perbelanjaan & Bajet",checklist:"Checklist Tugasan",guests:"Senarai Tetamu",savings:"Tabung Kahwin",timeline:"Timeline",notes:"Nota",inspirasi:"Inspirasi"};

  if(state==="loading")return <div className="loading-wrap"><div className="spinner"/><p style={{color:"var(--mid)",fontFamily:"DM Sans,sans-serif",fontSize:14}}>Memuatkan...</p></div>;
  if(state==="unauth")return <AuthScreen onAuth={u=>{setUser(u);setState("loading");}} dark={dark}/>;

  if(state==="setup"&&invite)return(
    <div className="setup-wrap">
      <div style={{fontSize:52,marginBottom:14}}>💑</div>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:26,color:"var(--dark)",textAlign:"center",marginBottom:8}}>Jemputan Diterima!</h1>
      <p style={{fontSize:14,color:"var(--mid)",marginBottom:26,textAlign:"center"}}>Kamu dijemput untuk join wedding planning</p>
      <div className="setup-card">
        <div style={{background:"var(--rose-pale)",borderRadius:14,padding:16,marginBottom:20,textAlign:"center"}}>
          <div style={{fontSize:18,fontWeight:700,color:"var(--dark)",fontFamily:"Playfair Display,serif"}}>{invite.weddingGroom} & {invite.weddingBride}</div>
          <div style={{fontSize:13,color:"var(--mid)",marginTop:6}}>Dijemput oleh {invite.fromName}</div>
        </div>
        <button className="btn-primary" onClick={acceptInvite}>Terima Jemputan 💍</button>
        <button style={{width:"100%",padding:12,background:"transparent",border:"none",color:"var(--mid)",fontSize:14,cursor:"pointer",marginTop:6,fontFamily:"DM Sans,sans-serif"}} onClick={()=>setInvite(null)}>Buat wedding sendiri</button>
      </div>
    </div>
  );

  if(state==="setup")return <SetupScreen user={user} onDone={w=>{setWedding(w);setState("app");}}/>;
  if(!wedding)return <div className="loading-wrap"><div className="spinner"/></div>;

  if(page==="settings")return(
    <SettingsPage wedding={wedding} user={user} onBack={()=>setPage("home")} onUpdate={setWedding} dark={dark} setDark={v=>{setDark(v);applyTheme(v);}}
      onSignOut={async()=>{await signOut(auth);setWedding(null);setUser(null);setState("unauth");setPage("home");}}/>
  );

  return(
    <div className="app-wrap">
      <div className="app-header">
        {page!=="home"?<button onClick={()=>setPage("home")} style={{background:"none",border:"none",cursor:"pointer",fontSize:24,color:"var(--mid)",padding:"0 4px 0 0"}}>‹</button>:<span className="header-logo">💍</span>}
        <div className="header-info">
          <h1 style={{color:"var(--dark)"}}>{page==="home"?"Kahwin":TITLES[page]}</h1>
          {page==="home"&&<p>{wedding.groom} &amp; {wedding.bride}</p>}
        </div>
        <div className="header-right">
          {(wedding.team||[]).length>1&&<span title="Joint aktif" style={{fontSize:18}}>💑</span>}
          <button className="dark-toggle" onClick={()=>{const nd=!dark;setDark(nd);applyTheme(nd);}}>{dark?"☀️":"🌙"}</button>
          <div className="avatar-sm" onClick={()=>setPage("settings")}>{(user.displayName||user.email)[0].toUpperCase()}</div>
        </div>
      </div>

      <div className="page-content">
        {page==="home"&&<Dashboard wedding={wedding} onNav={setPage} expenses={expenses} checklist={checklist} guests={guests} onUpdateWedding={setWedding}/>}
        {page==="expenses"&&<ExpensesPage expenses={expenses} onAdd={d=>addTo("expenses",d)} onDelete={id=>del("expenses",id)} onToggle={(id,s)=>upd("expenses",id,{status:s==="paid"?"unpaid":"paid"})} currency={wedding.currency||"MYR"}/>}
        {page==="checklist"&&<ChecklistPage checklist={checklist} onAdd={d=>addTo("checklist",d)} onToggle={(id,done)=>upd("checklist",id,{done:!done})} onDelete={id=>del("checklist",id)}/>}
        {page==="guests"&&<GuestsPage guests={guests} onAdd={d=>addTo("guests",d)} onDelete={id=>del("guests",id)} onRSVP={(id,r)=>upd("guests",id,{rsvp:r})}/>}
        {page==="savings"&&<SavingsPage savings={savings} onAdd={d=>addTo("savings",d)} onDelete={id=>del("savings",id)} wedding={wedding}/>}
        {page==="timeline"&&<TimelinePage timeline={timeline} onAdd={d=>addTo("timeline",d)} onDelete={id=>del("timeline",id)} onEdit={(id,d)=>upd("timeline",id,d)} wedding={wedding}/>}
        {page==="notes"&&<NotesPage notes={notes} onSave={async t=>{await setDoc(doc(db,"weddings",wedding.id,"notes","main"),{text:t});setNotes(t);}}/>}
        {page==="inspirasi"&&<InspirasiPage inspirasi={inspirasi} onAdd={d=>addTo("inspirasi",d)} onDelete={id=>del("inspirasi",id)} onEdit={(id,d)=>upd("inspirasi",id,d)} weddingId={wedding.id}/>}
      </div>

      <div className="bottom-nav">
        <button className={`nav-btn ${page==="checklist"?"active":""}`} onClick={()=>setPage("checklist")}><span className="nav-icon">✅</span><span className="nav-label">Checklist</span></button>
        <button className={`nav-btn ${page==="expenses"?"active":""}`} onClick={()=>setPage("expenses")}><span className="nav-icon">💸</span><span className="nav-label">Belanja</span></button>
        <button className="nav-home-btn" onClick={()=>setPage("home")}>🏠</button>
        <button className={`nav-btn ${page==="guests"?"active":""}`} onClick={()=>setPage("guests")}><span className="nav-icon">👥</span><span className="nav-label">Tetamu</span></button>
        <button className={`nav-btn ${page==="settings"?"active":""}`} onClick={()=>setPage("settings")}><span className="nav-icon">⚙️</span><span className="nav-label">Tetapan</span></button>
      </div>
    </div>
  );
}

applyTheme(localStorage.getItem("kahwin_dark")==="1");

