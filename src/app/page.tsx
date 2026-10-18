'use client'

export default function CVPage() {
  return (
    <>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333' }}>
        <header style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="/profile.jpg"
            alt="Aditya Nugraha"
            style={{
              width: 120,
              height: 120,
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              border: '2px solid #ffe9b3',
              background: '#f8fafc',
              display: 'block'
            }}
          />
    
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Aditya Nugraha</h1>
          <p style={{ fontWeight: 600, color: '#1e90ff', marginBottom: '8px' }}>
            Solution Lead | Engineering Manager | Fullstack Engineer
          </p>
          <span style={{
            display: 'inline-block',
            background: '#ffe9b3',
            color: '#b26a00',
            fontWeight: 500,
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            marginBottom: '8px'
          }}>
            Remote Experience
          </span>
          <p style={{ marginTop: '10px' }}><span className="print-hide">📍 </span>Jakarta, Indonesia | <span className="print-hide">📧 </span>adityapfm99@gmail.com | <span className="print-hide">📱 </span>+62 812-7899-9065</p>
          <p><span className="print-hide">🌐 </span><a href="https://github.com/Adityapfm99" style={{ color: '#1e90ff' }}>GitHub</a> | <a href="https://www.linkedin.com/in/aditya-nugraha-b5621b23/" style={{ color: '#1e90ff' }}>LinkedIn</a></p>
          <a
            href="/CV-Aditya-2026.pdf"
            download
            title="Save as PDF"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: '#1e90ff',
              color: '#fff',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              marginTop: '16px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0f7ae5' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1e90ff' }}
          >
            <img src="/pdf-svgrepo.svg" alt="PDF icon for CV download" style={{ width: 16, height: 16 }} />
            Download CV as PDF
          </a>
        </header>

        {/* Tech Stack Visual Row */}
        <section style={{ marginBottom: '20px', display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
          <img src="/node-js-svgrepo-com.svg" alt="Node.js" style={{ width: 32, height: 32 }} />
          <img src="/python-svgrepo-com.svg" alt="Python" style={{ width: 32, height: 32 }} />
          <img src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" style={{ width: 32, height: 32 }}/>
          <img src="/docker-svgrepo-com.svg" alt="Docker" style={{ width: 32, height: 32 }} />
          <img src="/react-svgrepo-com.svg" alt="React" style={{ width: 32, height: 32 }} />
          <img src="/mongo-svgrepo-com.svg" alt="MongoDB" style={{ width: 32, height: 32 }} />
          <img src="/grafana-svgrepo-com.svg" alt="Grafana" style={{ width: 32, height: 32 }} />
          <img src="/typescript-svgrepo-com.svg" alt="TypeScript" style={{ width: 32, height: 32 }} />
          <img src="/redis-logo-svgrepo-com.svg" alt="Redis" style={{ width: 32, height: 32 }} />
          <img src="/next-js-svgrepo-com.svg" alt="Next.js" style={{ width: 32, height: 32 }} />
          <img src="/gitlab-svgrepo-com.svg" alt="GitLab" style={{ width: 32, height: 32 }} />
          <img src="/heroku-logo-svgrepo-com.svg" alt="Heroku" style={{ width: 32, height: 32 }} />

        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Professional Summary</h2>
          <p style={{ marginTop: '10px' }}>
            Solution Lead, Engineering Manager and Fullstack Engineer with 10+ years of experience designing and delivering scalable backend systems and leading cross-functional engineering teams. Currently leading delivery of an AI-native financial statement solution at InterOpera, from requirements to release. Specialized in Node.js (TypeScript), Python, FastAPI, Odoo, and complex system integrations, with a proven track record of driving technical excellence, improving system performance, and mentoring developers in agile, fast-paced environments.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Skills</h2>
          <ul>
            <li><strong>Languages/Frameworks:</strong> Node.js (TypeScript), Python, FastAPI, Odoo, Next.js, React</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Supabase</li>
            <li><strong>AI & ML:</strong> OpenAI API, Gemini, Local LLM (Qwen), n8n, LangChain, Hugging Face</li>
            <li><strong>Tools:</strong> Postman, Insomnia, Grafana, Prometheus, Docker</li>
            <li><strong>Analytics Tools:</strong> Looker Studio, Google Analytics 4 (GA4), Google Tag Manager</li>
            <li><strong>Version Control:</strong> GitHub, GitLab</li>
            <li><strong>Testing & Performance:</strong> Playwright (E2E), JMeter, K6</li>
            <li><strong>Solution Design & Delivery:</strong> Requirements Analysis, Product Flows, Gap Analysis, Human-in-the-loop Review Workflows</li>
            <li><strong>Project Management:</strong> Jira, Trello, Basecamp, ClickUp</li>
            <li><strong>Deployment:</strong> Heroku, AWS</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Professional Experience</h2>

          <div style={{ marginTop: '20px' }}>
            <h3>
              <strong>InterOpera – Solution Lead & Fullstack Engineer</strong>
              <span style={{
                marginLeft: '10px',
                background: '#ffe9b3',
                color: '#b26a00',
                fontWeight: 500,
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '12px'
              }}>
                Remote
              </span>
            </h3>
            <p><a href="https://www.interopera.ai" style={{ color: '#1e90ff' }}>https://www.interopera.ai</a></p>
            <p>Dec 2025 – Present | Singapore / Remote</p>
            <ul>
              <li>Lead delivery of the financial statement solution on Nexus, an AI-native platform for fund administration and corporate finance teams: requirements → product flows → backend contracts → release.</li>
              <li>Own the statement experience end-to-end: presentation, cell-level drill-down and audit-trail navigation.</li>
              <li>Shape human-in-the-loop review workflows (preparer/approver requests, transaction tagging, review and approval handoff).</li>
              <li>Coordinate backend engineers, QA and the product lead; run gap analyses between partner process designs and the built product.</li>
              <li>Hands-on with Next.js/React/TypeScript and Python/FastAPI; multi-language UI and end-to-end testing (Playwright).</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3><strong>PT SiCepat Ekspress Indonesia – Technical Lead</strong></h3>
            <p><a href="https://www.sicepat.com" style={{ color: '#1e90ff' }}>https://www.sicepat.com</a></p>
            <p>Jul 2018 – Oct 2026 (Freelance since Dec 2025) | Jakarta</p>
            <ul>
              <li>Led development and customization of Odoo modules: Purchase, Invoice, Accounting, HR.</li>
              <li>Designed and developed internal Billing & Proof of Delivery (POD) System, integrated with third-party services.</li>
              <li>Built a scalable billing system using Node.js (TypeScript), Redis, Bull Queue.</li>
              <li>Integrated SAP journal systems; optimized slow queries for better performance.</li>
              <li>Held strategic meetings with the Board of Directors; conducted regular 1-on-1s with team members.</li>
              <li>Mentored junior developers and ensured code quality via regular reviews.</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>
              <strong>GlobalDeal – Freelance Senior Backend Developer</strong>
              <span style={{
                marginLeft: '10px',
                background: '#ffe9b3',
                color: '#b26a00',
                fontWeight: 500,
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '12px'
              }}>
                Remote
              </span>
            </h3>
            <p><a href="https://www.globaldeal.io" style={{ color: '#1e90ff' }}>https://www.globaldeal.io</a></p>
            <p>Jan 2025 – Jul 2025 | Remote (Japan)</p>
            <ul>
              <li>Developed and maintained backend systems for international expansion automation platforms.</li>
              <li>Led backend API development using Python and Node.js (TypeScript) for scalable, high-performance systems.</li>
              <li>Collaborated with frontend teams using React and TypeScript, ensuring seamless fullstack integration.</li>
              <li>Deployed and scaled services using Vercel.</li>
              <li>Communicated effectively with international teams including engineers, product managers, and marketers.</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <strong>Notable Projects:</strong>
              <ul>
                <li>
                  <strong>GlobalDeal Automation / Finder:</strong> Contributed to an <strong>LLM-powered platform</strong> automating global market expansion using AI Agents. Engineered a centralized data system for market insights, collaborating with a multinational team.
                </li>
                <li>
                  <strong>TOKIUM Automation:</strong> Developed high-volume invoice processing pipelines by integrating <strong>LLM technologies</strong> with custom scraping implementations. Worked with a team of six Python engineers for a <strong>Series E startup</strong>, optimizing backend performance.
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>
              <strong>Appservation Co. Ltd – Engineering Manager</strong>
              <span style={{
                marginLeft: '10px',
                background: '#ffe9b3',
                color: '#b26a00',
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '12px'
              }}>
                Remote
              </span>
            </h3>
            <p><a href="https://web.hungryhub.com" style={{ color: '#1e90ff' }}>https://web.hungryhub.com</a></p>
            <p>Oct 2023 – Jun 2024 | Thailand / Remote</p>
            <ul>
              <li>Led a team of engineers to build and maintain a scalable restaurant reservation platform.</li>
              <li>Improved backend performance by 35% through system refactoring and optimization.</li>
              <li>Oversaw sprint planning, code reviews, and standardized DevOps practices.</li>
              <li>Conducted regular 1-on-1 sessions with team members to support their development.</li>
            </ul>
          </div>
        
          <div style={{ marginTop: '20px' }}>
            <h3><strong>Infoconnect Sdn Bhd – Senior Software Developer</strong></h3>
            <p><a href="https://www.infoconnect.com.my" style={{ color: '#1e90ff' }}>https://www.infoconnect.com.my</a></p>
            
            <p>Dec 2014 – Jun 2018 | Kuala Lumpur</p>
            <ul>
              <li>Integrated Docuflo with K2 using Web Services and Docuflo SDK.</li>
              <li>Developed custom reports with Jasper Reports for government clients.</li>
              <li>Deployed solutions across Southeast Asia (Indonesia, Thailand, Malaysia).</li>
              <li>Led client presentations and product adoption negotiations.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Certifications</h2>
          <ul>
            <li>AWS Practical Data Science – February 2021</li>
            <li>AWS SageMaker – February 2021</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Languages</h2>
          <ul>
            <li>Indonesian: Native</li>
            <li>Malay: Conversational Proficiency</li>
            <li>English: Professional Proficiency</li>
          </ul>
        </section>

        {/* Testimonials Section */}
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Testimonials</h2>
          <blockquote style={{ borderLeft: '4px solid #1e90ff', margin: '10px 0', paddingLeft: '12px', color: '#555', fontStyle: 'italic' }}>
            "Aditya's fullstack expertise in React and Python, combined with remote collaboration skills, made a significant impact on our international projects."
            <br />
            <span style={{ fontWeight: 500, color: '#1e90ff' }}>– Karen Onuma, Product Manager, GlobalDeal</span>
          </blockquote>
        </section>

        {/* Contact Form Link */}
        <section className="print-hide" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Contact</h2>
          <p>
            Interested in working together? <a href="mailto:adityapfm99@gmail.com" style={{ color: '#1e90ff', fontWeight: 500 }}>Email me</a> or <a href="https://www.linkedin.com/in/aditya-nugraha-b5621b23/" style={{ color: '#1e90ff', fontWeight: 500 }}>connect on LinkedIn</a>.
          </p>
         
        </section>
      </main>
    </>
  );
}
