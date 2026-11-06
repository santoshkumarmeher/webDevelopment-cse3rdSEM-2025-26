<div align="center">
  <svg width="1200" height="300" viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="300" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0F172A"/>
        <stop offset="0.3" stop-color="#111827"/>
        <stop offset="0.7" stop-color="#312E81"/>
        <stop offset="1" stop-color="#0F172A"/>
      </linearGradient>
      <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#22D3EE"/>
        <stop offset="0.5" stop-color="#8B5CF6"/>
        <stop offset="1" stop-color="#F472B6"/>
      </linearGradient>
      <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 88) rotate(90) scale(220 220)">
        <stop stop-color="#22D3EE" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="1200" height="300" rx="28" fill="url(#bg)"/>
    <rect x="18" y="18" width="1164" height="264" rx="20" stroke="rgba(255,255,255,0.16)"/>

    <circle cx="270" cy="100" r="190" fill="url(#glow)"/>
    <circle cx="930" cy="70" r="120" fill="#8B5CF6" fill-opacity="0.15"/>
    <circle cx="1040" cy="220" r="150" fill="#22D3EE" fill-opacity="0.12"/>

    <g opacity="0.7">
      <path d="M72 215C170 140 240 180 306 120C359 76 450 70 520 118C589 165 646 171 716 128C802 74 876 86 968 135" stroke="url(#shine)" stroke-width="5" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" values="0 1200; 700 500; 0 1200" dur="6s" repeatCount="indefinite"/>
      </path>
      <path d="M90 253C182 188 240 214 310 170C355 141 430 135 496 176C553 212 646 222 706 182C772 140 861 138 956 184" stroke="#67E8F9" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round">
        <animate attributeName="stroke-dashoffset" values="0; -300" dur="4s" repeatCount="indefinite"/>
      </path>
    </g>

    <g>
      <rect x="70" y="54" width="140" height="40" rx="20" fill="#0F172A" fill-opacity="0.5" stroke="#67E8F9" stroke-opacity="0.7"/>
      <text x="100" y="81" fill="#E2E8F0" font-size="18" font-weight="700" font-family="Segoe UI, Arial, sans-serif">HTML • CSS</text>
    </g>

    <g>
      <text x="68" y="150" fill="#F8FAFC" font-size="56" font-weight="800" font-family="Segoe UI, Arial, sans-serif">Web Development</text>
      <text x="68" y="200" fill="#A5F3FC" font-size="30" font-weight="700" font-family="Segoe UI, Arial, sans-serif">Class Journey</text>
    </g>

    <g>
      <rect x="760" y="112" width="220" height="62" rx="18" fill="#0F172A" fill-opacity="0.55" stroke="#8B5CF6" stroke-opacity="0.8"/>
      <text x="792" y="153" fill="#E9D5FF" font-size="24" font-weight="700" font-family="Segoe UI, Arial, sans-serif">JS • React • Git</text>
    </g>

    <g>
      <circle cx="915" cy="210" r="8" fill="#F472B6">
        <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="955" cy="210" r="8" fill="#22D3EE">
        <animate attributeName="r" values="6;10;6" dur="2.2s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="995" cy="210" r="8" fill="#A78BFA">
        <animate attributeName="r" values="6;10;6" dur="2.2s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
    </g>

    <g transform="translate(900 35)">
      <circle cx="0" cy="0" r="8" fill="#F8FAFC" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0 0; 24 -10; 0 0" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="42" cy="28" r="6" fill="#F8FAFC" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0 0; -18 12; 0 0" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="76" cy="6" r="5" fill="#F8FAFC" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0 0; 14 12; 0 0" dur="5.5s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
</div>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</p>

# 🚀 Welcome to the Web Development Class Repo

This repository is a hands-on learning archive for front-end web development, starting with HTML, CSS, JavaScript, and progressing into React-based projects and mini applications.

## ✨ What’s inside

- Day-by-day exercises covering layout, styling, logic, interactivity, and animation
- HTML/CSS challenge pages and experiments
- JavaScript practice with conditions, loops, and functions
- Small UI projects and interactive demos
- React projects and portfolio work
- Git practice and workflow examples

## 🧭 Learning roadmap

| Stage | Focus | Highlights |
|---|---|---|
| Days 1–5 | HTML + CSS fundamentals | Layout, styling, responsiveness, navigation |
| Days 6–9 | JavaScript essentials | Variables, operators, loops, functions |
| Days 10–13 | DOM + UI interactions | Events, animations, loading states, buttons |
| Days 14–15 | Git + version control | Ignore files, merge, rebase, workflow practice |
| Day 16+ | React | Component-based UI and app structure |
| Day 17 | Portfolio | Personal project showcase |

## 📁 Repo structure

```text
Web Development Class/
├── day1/ ... day17/
├── html_css_notes/
├── GIT_CMD/
├── my_app/
├── day16_react/
├── README.md
└── .gitignore
```

## 🔥 Featured projects

- `day11/` — click events, calculator logic, keyboard handling
- `day12/` — animations and interactive UI effects
- `day13/` — feature work with Git-based practice flow
- `day14/` — `.gitignore`, merge, and rebase exercises
- `day16_react/` — React introduction and project setup
- `day17/portfolio/` — portfolio site built with React
- `my_app/` — another mini React app workspace

## 🛠️ Tech stack

- HTML5
- CSS3
- JavaScript
- React
- Git / GitHub workflows

## 🚀 Getting started

Open any folder in the browser or run a local dev server for the React apps:

```bash
git clone <repo-url>
cd "Web Development Class"

# Open HTML files directly in the browser
# or for React apps:
cd day16_react
npm install
npm start
```

## 💡 Notes

This repo is designed as a learning journal and project playground. The goal is to build confidence from the basics of web pages to more advanced front-end concepts.

> A project is never finished — it is improved, refined, and expanded with each new idea.

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=7DD3FC&center=true&vCenter=true&width=700&lines=Keep+building.+Keep+learning.+Keep+shipping!" alt="typing banner" />
</p>

<p align="center">
  <sub>Built with curiosity, coffee, and a lot of iteration.</sub>
</p>
