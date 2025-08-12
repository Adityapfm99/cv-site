'use client'
import Head from 'next/head';

export default function CVPage() {
  return (
    <>
      <Head>
        <title>Aditya Nugraha | Senior Software Engineer & Engineering Manager</title>
        <meta name="description" content="CV & portfolio of Aditya Nugraha, Senior Backend Engineer and Engineering Manager. Open to remote and international opportunities." />
        <meta property="og:title" content="Aditya Nugraha | Senior Software Engineer & Engineering Manager" />
        <meta property="og:description" content="CV & portfolio of Aditya Nugraha, Senior Software Engineer and Engineering Manager. Open to remote and international opportunities." />
        <meta property="og:image" content="/image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333' }}>
        <header style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="/image.png"
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
            Senior Software Engineer | Engineering Manager | Open to Remote & International Roles
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
          <p style={{ marginTop: '10px' }}>📍 Jakarta, Indonesia | 📧 adityapfm99@gmail.com | 📱 +62 812-7899-9065</p>
          <p>🌐 <a href="https://github.com/Adityapfm99" style={{ color: '#1e90ff' }}>GitHub</a> | <a href="https://www.linkedin.com/in/aditya-nugraha-b5621b23/" style={{ color: '#1e90ff' }}>LinkedIn</a></p>
          <a
            href="/CV-Aditya-2025.pdf"
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
          <img src="/node-js-svgrepo-com.svg" alt="NodeJS" style={{ width: 32, height: 32 }} />
          <img src="/python-svgrepo-com.svg" alt="Python" style={{ width: 32, height: 32 }} />
          <img src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" style={{ width: 32, height: 32 }}/>
          <img src="/docker-svgrepo-com.svg" alt="Docker" style={{ width: 32, height: 32 }} />
          <img src="/react-svgrepo-com.svg" alt="React" style={{ width: 32, height: 32 }} />
          <img src="/mongo-svgrepo-com.svg" alt="MongoDB" style={{ width: 32, height: 32 }} />
          <img src="/grafana-svgrepo-com.svg" alt="Grafana" style={{ width: 32, height: 32 }} />
          <img src="/typescript-svgrepo-com.svg" alt="Typescript" style={{ width: 32, height: 32 }} />
          <img src="/redis-logo-svgrepo-com.svg" alt="Redis" style={{ width: 32, height: 32 }} />
          <img src="/next-js-svgrepo-com.svg" alt="NextJs" style={{ width: 32, height: 32 }} />
          <img src="/gitlab-svgrepo-com.svg" alt="Gitlab" style={{ width: 32, height: 32 }} />
          <img src="/heroku-logo-svgrepo-com.svg" alt="Heroku" style={{ width: 32, height: 32 }} />

        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Professional Summary</h2>
          <p style={{ marginTop: '10px' }}>
            Engineering Manager and Senior Backend Developer with 10+ years of experience designing and delivering scalable backend systems and leading cross-functional engineering teams. Specialized in NodeJS (TypeScript), Python, Odoo, and complex system integrations. Proven track record in driving technical excellence, improving system performance, and mentoring developers to achieve high-impact results in agile, fast-paced environments.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Skills</h2>
          <ul>
            <li><strong>Languages/Frameworks:</strong> NodeJS (TypeScript), Python, Odoo, Next.js</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Supabase</li>
            <li><strong>AI & ML:</strong> OpenAI API (ChatGPT), Gemini, n8n, LangChain, Hugging Face</li>
            <li><strong>Tools:</strong> Postman, Insomnia, Grafana, Prometheus, Slack, Docker</li>
            <li><strong>Analytics Tools:</strong> Looker Studio, Google Analytics 4 (GA4), Google Tag Manager</li>
            <li><strong>Version Control:</strong> GitHub, GitLab</li>
            <li><strong>Testing & Performance:</strong> JMeter, K6</li>
            <li><strong>Project Management:</strong> Jira, Trello, Basecamp, ClickUp</li>
            <li><strong>Deployment:</strong> Heroku, AWS</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Professional Experience</h2>

          <div style={{ marginTop: '20px' }}>
            <h3><strong>PT SiCepat Ekspress Indonesia – Technical Lead</strong></h3>
            <p><a href="https://www.sicepat.com" style={{ color: '#1e90ff' }}>https://www.sicepat.com</a></p>
            <p>Jul 2018 – Present | Jakarta</p>
            <ul>
              <li>Led development and customization of Odoo modules: Purchase, Invoice, Accounting, HR.</li>
              <li>Designed and developed internal Billing & POD System, integrated with third-party services.</li>
              <li>Built a scalable billing system using NodeJS (TypeScript), Redis, Bull Queue.</li>
              <li>Integrated SAP journal systems; optimized slow queries for better performance.</li>
              <li>Held strategic meetings with BOD; conducted regular 1-on-1s with team members.</li>
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
              <li>Led backend API development using Python and NodeJS (TypeScript) for scalable, high-performance systems.</li>
              <li>Collaborated with frontend teams using React and TypeScript, ensuring seamless full-stack integration.</li>
              <li>Deployed and scaled services using Vercel.</li>
              <li>Communicated effectively with international teams including engineers, product managers, and marketers.</li>
              <div style={{ marginTop: '20px' }}>
              <strong>Notable Projects:</strong>
              <ul>
                <li>
                  <strong>GlobalDeal Automation / Finder:</strong> Contributed to an <strong>LLM-powered platform</strong> automating global market expansion using AI Agents. Engineered a centralized data system for market insights, collaborating with a multinational team led by a German PM.
                </li>
                <li>
                  <strong>TOKIUM Automation:</strong> Developed high-volume invoice processing pipelines by integrating <strong>LLM technologies</strong> with custom scraping implementations. Worked with a team of six Python engineers for a <strong>Series E startup</strong>, optimizing backend performance.
                </li>
              </ul>
            </div>
            </ul>
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
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Contact</h2>
          <p>
            Interested in working together? <a href="mailto:adityapfm99@gmail.com" style={{ color: '#1e90ff', fontWeight: 500 }}>Email me</a> or <a href="https://www.linkedin.com/in/aditya-nugraha-b5621b23/" style={{ color: '#1e90ff', fontWeight: 500 }}>connect on LinkedIn</a>.
          </p>
         
        </section>
      </main>
    </>
  );
}
