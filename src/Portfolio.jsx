import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const data = {
  name: "Mrigank Abhishek",
  title: "Computer Science Student & ML Enthusiast",
  contact: {
    email: "mrigankabhishek95@gmail.com",
    phone: "+91-9540083465",
    linkedin: "https://linkedin.com/in/mrigankabhishek",
    github: "https://github.com/MrigankAbhishek",
  },
  education: [
    {
      school: "Kalinga Institute of Industrial Technology",
      degree: "B.E. in Computer Science & Engineering",
      period: "July 2023 – Present",
      location: "Bhubaneswar, Odisha",
      score: "CGPA: 8.47 / 10",
    },
    {
      school: "Kendriya Vidyalaya No.1 AFS Hindon",
      degree: "12th Standard – CBSE",
      period: "Apr 2021 – Mar 2022",
      location: "Ghaziabad, Uttar Pradesh",
      score: "91%",
    },
    {
      school: "Kendriya Vidyalaya No.1 AFS Hindon",
      degree: "10th Standard – CBSE",
      period: "Apr 2019 – Mar 2020",
      location: "Ghaziabad, Uttar Pradesh",
      score: "94.6%",
    },
  ],
  projects: [
    {
      name: "AutoBid – Automobile Bidding Platform",
      period: "Dec 2025 – Mar 2026",
      tech: ["TensorFlow", "Pandas", "NumPy", "SupaBase", "React"],
      points: [
        "Full-stack car auction platform with AI-based vehicle detection, damage analysis, and price prediction.",
        "CNN classifier using EfficientNetB0 for car model detection — 77% accuracy, 0.78 precision.",
        "Damage detection system (dents, scratches, none) on 1,775 images — 75.7% accuracy, 97.2% top-2.",
        "Random Forest price prediction model with R² = 0.80 on test data.",
        "Custom VIN decoder for manufacturer validation and model-year extraction.",
        "Responsive React + Tailwind UI with real-time price estimation and damage-based adjustments.",
      ],
    },
    {
      name: "Credit Card Fraud Detection",
      period: "May 2025 – Jun 2025",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      points: [
        "Supervised ML model to detect fraudulent transactions on a Kaggle dataset.",
        "EDA to understand feature distributions and class imbalance.",
        "Trained Decision Tree and Random Forest with cross-validation.",
        "Achieved 96% recall for the fraud class while minimising false positives.",
      ],
    },
    {
      name: "CoinMatrix – Cryptocurrency Tracker & Converter",
      period: "May 2025 – Jun 2025",
      tech: ["Chart.js", "CoinGecko API", "Spring Boot"],
      points: [
        "Dynamic crypto tracking platform similar to CoinGecko.",
        "Live prices, market cap, and 7-day sparkline charts via CoinGecko API.",
        "Real-time converter across multiple currencies.",
        "Secure auth and user management with Spring Boot, Spring Security, and Postgres.",
      ],
    },
  ],
  skills: {
    Languages: ["Java", "Python", "JavaScript", "HTML / CSS", "SQL"],
    "Frameworks & Tools": ["React", "Node.js", "Spring Boot", "Git", "GitHub", "VS Code"],
    "ML / AI": ["Machine Learning", "Deep Learning", "Computer Vision", "CNNs", "TensorFlow"],
    "Data Science": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
  coursework: ["Machine Learning", "Data Structures & Algorithms", "Object-Oriented Programming", "Database Management"],
};


const styles = {
  page: {
    fontFamily: "'Georgia', serif",
    backgroundColor: "#f9f7f4",
    color: "#1a1a1a",
    minHeight: "100vh",
    padding: "0",
    margin: "0",
  },
  container: { maxWidth: "860px", margin: "0 auto", padding: "40px 24px" },

  nav: {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "48px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "16px",
  },
  navBtn: (active) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    color: active ? "#c0392b" : "#555",
    fontWeight: active ? "bold" : "normal",
    borderBottom: active ? "2px solid #c0392b" : "2px solid transparent",
    paddingBottom: "4px",
    transition: "color 0.2s",
  }),

  hero: { textAlign: "center", marginBottom: "48px" },
  heroName: { fontSize: "42px", fontWeight: "bold", margin: "0 0 8px", letterSpacing: "-1px" },
  heroTitle: { fontSize: "18px", color: "#666", margin: "0 0 20px" },
  contactRow: { display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" },
  contactLink: { color: "#c0392b", textDecoration: "none", fontSize: "14px" },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    borderLeft: "4px solid #c0392b",
    paddingLeft: "12px",
    marginBottom: "24px",
  },

  card: {
    backgroundColor: "#fff",
    border: "1px solid #e5e0da",
    borderRadius: "8px",
    padding: "20px 24px",
    marginBottom: "16px",
  },
  cardTitle: { fontSize: "17px", fontWeight: "bold", margin: "0 0 4px" },
  cardSub: { fontSize: "14px", color: "#666", margin: "0 0 2px" },
  cardScore: { fontSize: "14px", color: "#c0392b", fontWeight: "bold" },

  techList: { display: "flex", flexWrap: "wrap", gap: "8px", margin: "12px 0" },
  techBadge: {
    backgroundColor: "#f0ece6",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "2px 10px",
    fontSize: "12px",
  },
  bulletList: { paddingLeft: "20px", margin: "0" },
  bullet: { fontSize: "14px", color: "#444", marginBottom: "4px", lineHeight: "1.6" },

  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  },
  skillCategory: { marginBottom: "0" },
  skillLabel: { fontSize: "14px", fontWeight: "bold", marginBottom: "8px", color: "#333" },
  skillItems: { display: "flex", flexWrap: "wrap", gap: "6px" },
  skillChip: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "3px 10px",
    fontSize: "13px",
  },

  courseList: { display: "flex", flexWrap: "wrap", gap: "10px" },
  courseChip: {
    backgroundColor: "#fff",
    border: "1px solid #c0392b",
    borderRadius: "4px",
    padding: "6px 14px",
    fontSize: "14px",
    color: "#c0392b",
  },

  footer: { textAlign: "center", marginTop: "48px", fontSize: "13px", color: "#aaa" },
};


function Hero() {
  const { name, title, contact } = data;
  return (
    <div style={styles.hero}>
      <h1 style={styles.heroName}>{name}</h1>
      <p style={styles.heroTitle}>{title}</p>
      <div style={styles.contactRow}>
        <a href={`mailto:${contact.email}`} style={styles.contactLink}>✉ {contact.email}</a>
        <span style={{ color: "#aaa" }}>|</span>
        <span style={{ fontSize: "14px" }}>📞 {contact.phone}</span>
        <span style={{ color: "#aaa" }}>|</span>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" style={styles.contactLink}>LinkedIn</a>
        <span style={{ color: "#aaa" }}>|</span>
        <a href={contact.github} target="_blank" rel="noreferrer" style={styles.contactLink}>GitHub</a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>Education</h2>
      {data.education.map((edu) => (
        <div key={edu.school + edu.degree} style={styles.card}>
          <p style={styles.cardTitle}>{edu.school}</p>
          <p style={styles.cardSub}>{edu.degree} · {edu.location}</p>
          <p style={styles.cardSub}>{edu.period}</p>
          <p style={styles.cardScore}>{edu.score}</p>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>Projects</h2>
      {data.projects.map((proj) => (
        <div key={proj.name} style={styles.card}>
          <p style={styles.cardTitle}>{proj.name}</p>
          <p style={styles.cardSub}>{proj.period}</p>
          <div style={styles.techList}>
            {proj.tech.map((t) => <span key={t} style={styles.techBadge}>{t}</span>)}
          </div>
          <ul style={styles.bulletList}>
            {proj.points.map((pt, i) => <li key={i} style={styles.bullet}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>Skills</h2>
      <div style={styles.skillGrid}>
        {Object.entries(data.skills).map(([category, items]) => (
          <div key={category} style={styles.skillCategory}>
            <p style={styles.skillLabel}>{category}</p>
            <div style={styles.skillItems}>
              {items.map((item) => <span key={item} style={styles.skillChip}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: "32px" }}>Coursework</h2>
      <div style={styles.courseList}>
        {data.coursework.map((c) => <span key={c} style={styles.courseChip}>{c}</span>)}
      </div>
    </div>
  );
}
const tabs = ["About", "Education", "Projects", "Skills"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <Hero />

        <nav style={styles.nav}>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={styles.navBtn(activeTab === tab)}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {activeTab === "About" && (
          <div>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <div style={styles.card}>
              <p style={{ fontSize: "15px", lineHeight: "1.8", margin: 0, color: "#444" }}>
                I'm a Computer Science student at KIIT (CGPA 8.47) passionate about Machine Learning,
                Deep Learning, and full-stack development. I enjoy building end-to-end projects that
                combine AI models with real-world web applications — from car auction platforms with
                computer-vision pipelines to fraud detection systems and crypto trackers.
                I'm always looking for opportunities to apply what I learn to meaningful problems.
              </p>
            </div>

            <h2 style={{ ...styles.sectionTitle, marginTop: "32px" }}>Quick Highlights</h2>
            <div style={styles.card}>
              <ul style={styles.bulletList}>
                <li style={styles.bullet}>🎓 B.E. CSE student at KIIT — CGPA 8.47</li>
                <li style={styles.bullet}>🤖 Built CNN-based car model classifier with 77% accuracy</li>
                <li style={styles.bullet}>💳 Achieved 96% fraud recall with Random Forest classifier</li>
                <li style={styles.bullet}>💹 Developed full crypto tracker with live CoinGecko integration</li>
                <li style={styles.bullet}>🛠 Comfortable with Python, Java, React, and ML/DL stacks</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "Education" && <Education />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Skills" && <Skills />}

        <footer style={styles.footer}>
          <p>© 2026 Mrigank Abhishek · Built with React</p>
        </footer>

      </div>
    </div>
  );
}
