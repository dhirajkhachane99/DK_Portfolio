import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION, PROJECTS } from '../data/portfolioData';

/**
 * Generates a Digitalized, ATS-compliant PDF with pure vector text, bold keywords,
 * and live clickable hyperlinks for recruiters (Email, Phone, LinkedIn, GitHub, Projects, Certifications).
 * Every word remains 100% machine-readable and parser-friendly.
 */
export function generateAtsPdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2; // 515.28 pt
  let y = 40;

  const checkPage = (heightNeeded: number) => {
    if (y + heightNeeded > 800) {
      doc.addPage();
      y = 40;
    }
  };

  /**
   * Helper to draw text with an interactive hyperlink annotation
   */
  const drawLinkText = (
    text: string,
    x: number,
    currentY: number,
    url: string,
    options?: {
      fontSize?: number;
      isBold?: boolean;
      color?: [number, number, number];
      underline?: boolean;
    }
  ) => {
    const fontSize = options?.fontSize ?? 8.5;
    const isBold = options?.isBold ?? false;
    const color = options?.color ?? [2, 132, 199]; // blue-600
    const underline = options?.underline ?? true;

    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(text, x, currentY);

    const textWidth = doc.getTextWidth(text);
    // Add clickable PDF link annotation (x, y, width, height)
    doc.link(x, currentY - fontSize * 0.85, textWidth, fontSize * 1.15, { url });

    if (underline) {
      doc.setDrawColor(color[0], color[1], color[2]);
      doc.setLineWidth(0.45);
      doc.line(x, currentY + 1.2, x + textWidth, currentY + 1.2);
    }

    return textWidth;
  };

  const drawSectionHeader = (title: string) => {
    checkPage(24);
    y += 9;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title.toUpperCase(), margin, y);
    y += 3;
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
  };

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(15, 23, 42);
  doc.text(PERSONAL_INFO.name, pageWidth / 2, y, { align: 'center' });
  y += 15;

  // Digitalized Contact Info Line 1: Phone | Email | GitHub
  const phoneText = PERSONAL_INFO.phone;
  const emailText = PERSONAL_INFO.email;
  const githubText = PERSONAL_INFO.socials.githubHandle;
  const sep = '   |   ';

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);

  const phoneW = doc.getTextWidth(phoneText);
  const sepW = doc.getTextWidth(sep);
  const emailW = doc.getTextWidth(emailText);
  const githubW = doc.getTextWidth(githubText);

  const totalLine1W = phoneW + sepW + emailW + sepW + githubW;
  let curX = (pageWidth - totalLine1W) / 2;

  // Phone link
  drawLinkText(phoneText, curX, y, `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`, {
    fontSize: 8.5,
    color: [30, 41, 59],
    underline: false,
  });
  curX += phoneW;

  // Sep
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  doc.text(sep, curX, y);
  curX += sepW;

  // Email link
  drawLinkText(emailText, curX, y, `mailto:${PERSONAL_INFO.email}`, {
    fontSize: 8.5,
    color: [2, 132, 199],
    underline: true,
  });
  curX += emailW;

  // Sep
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  doc.text(sep, curX, y);
  curX += sepW;

  // GitHub link
  drawLinkText(githubText, curX, y, PERSONAL_INFO.socials.github, {
    fontSize: 8.5,
    color: [2, 132, 199],
    underline: true,
  });

  y += 12;

  // Digitalized Contact Info Line 2: LinkedIn
  const linkedinText = PERSONAL_INFO.socials.linkedinHandle;
  const linkedinW = doc.getTextWidth(linkedinText);
  const linkedinX = (pageWidth - linkedinW) / 2;
  drawLinkText(linkedinText, linkedinX, y, PERSONAL_INFO.socials.linkedin, {
    fontSize: 8.5,
    isBold: true,
    color: [2, 132, 199],
    underline: true,
  });
  y += 6;

  // Header bottom border
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.setLineWidth(0.75);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  // SECTION 1: PROFESSIONAL SUMMARY
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);

  const summaryText =
    'Entry-level Data Analyst candidate with a Bachelor of Engineering in Information Technology and hands-on practice in SQL-based business analysis, Google Sheets visualization, Python, and introductory machine learning. Experienced through learning projects in analyzing customer orders, revenue, product performance, and trends. Seeking a fresher Data Analyst / Junior Data Analyst opportunity.';

  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 10.5 + 2;

  // SECTION 2: TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Data Analysis: ', desc: 'Data cleaning fundamentals, exploratory analysis (EDA), KPI analysis, trend analysis, business insights' },
    { label: 'SQL: ', desc: 'SELECT, filtering, JOINs, GROUP BY, HAVING, aggregate functions, subqueries, COUNT DISTINCT, date functions' },
    { label: 'Tools: ', desc: 'Google Sheets, Microsoft Excel, Power BI, Git/GitHub, VS Code' },
    { label: 'Python / ML: ', desc: 'Python, scikit-learn basics, Decision Tree Classifier, TF-IDF, cosine similarity' },
    { label: 'Programming: ', desc: 'Python, SQL, HTML, CSS' },
  ];

  skills.forEach((s) => {
    checkPage(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const labelWidth = doc.getTextWidth(s.label);
    doc.text(s.label, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(s.desc, contentWidth - labelWidth);
    doc.text(descLines, margin + labelWidth, y);
    y += descLines.length * 10.5 + 1;
  });

  // SECTION 3: PROJECTS (WITH DIGITAL REPO HYPERLINKS)
  drawSectionHeader('Projects');

  // Project 1: Online Food Delivery Analysis
  checkPage(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  const p1Title = 'Online Food Delivery Analysis';
  doc.text(p1Title, margin, y);
  const p1TitleW = doc.getTextWidth(p1Title);

  // Digitalized Link to GitHub
  drawLinkText(' [GitHub Repo ↗]', margin + p1TitleW + 2, y, PROJECTS[0].githubUrl, {
    fontSize: 8,
    isBold: true,
    color: [2, 132, 199],
    underline: true,
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('SQL, Google Sheets', pageWidth - margin, y, { align: 'right' });
  y += 11;

  const proj1Bullets = [
    'Analyzed food delivery orders to explore city-wise order volumes, revenue by food item, restaurant performance, customer spending, and monthly trends.',
    'Practiced JOINs, subqueries, GROUP BY, HAVING, SUM, COUNT DISTINCT, and date functions to answer business questions.',
    'Created Google Sheets charts for revenue by city, customer distribution, popular food items, and monthly order trends.',
    'Project findings included Jaipur as a leading city by orders and revenue, with demand differences across food items and locations.',
  ];

  proj1Bullets.forEach((bullet) => {
    checkPage(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text('•', margin + 4, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    const lines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(lines, margin + 14, y);
    y += lines.length * 10 + 1.5;
  });

  y += 3;

  // Project 2: Product Recommendation System
  checkPage(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  const p2Title = 'Product Recommendation System';
  doc.text(p2Title, margin, y);
  const p2TitleW = doc.getTextWidth(p2Title);

  // Digitalized Link to GitHub
  drawLinkText(' [GitHub Repo ↗]', margin + p2TitleW + 2, y, PROJECTS[1].githubUrl, {
    fontSize: 8,
    isBold: true,
    color: [2, 132, 199],
    underline: true,
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Python, TF-IDF, Cosine Similarity', pageWidth - margin, y, { align: 'right' });
  y += 11;

  const proj2Bullets = [
    'Used the MovieLens 100K dataset to explore user ratings and item popularity.',
    'Implemented collaborative filtering using cosine similarity and content-based recommendations using TF-IDF.',
    'Built an automated workflow to recommend items from user input and export recommendation results to CSV.',
  ];

  proj2Bullets.forEach((bullet) => {
    checkPage(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text('•', margin + 4, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    const lines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(lines, margin + 14, y);
    y += lines.length * 10 + 1.5;
  });

  // SECTION 4: EDUCATION
  drawSectionHeader('Education');

  // Edu 1
  checkPage(24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Anuradha Engineering College', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('2022 - 2025', pageWidth - margin, y, { align: 'right' });
  y += 10;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Bachelor of Engineering in Information Technology', margin, y);
  doc.text('Chikhli, Buldhana, Maharashtra', pageWidth - margin, y, { align: 'right' });
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('CGPA – 7.5', margin, y);
  y += 12;

  // Edu 2
  checkPage(24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Government Polytechnic, Murtizapur', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('2019 - 2022', pageWidth - margin, y, { align: 'right' });
  y += 10;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Diploma in Information Technology', margin, y);
  doc.text('Murtizapur, Akola, Maharashtra', pageWidth - margin, y, { align: 'right' });
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Percentage – 72.56%  |  SSC – 75.20%', margin, y);
  y += 12;

  // SECTION 5: CERTIFICATIONS & LEARNING (WITH DIGITAL VERIFICATION HYPERLINKS)
  drawSectionHeader('Certifications & Verified Credentials');

  CERTIFICATIONS.forEach((cert) => {
    checkPage(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text('•', margin + 4, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    const titleText = `${cert.title} `;
    doc.text(titleText, margin + 14, y);
    const titleW = doc.getTextWidth(titleText);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const metaText = `— ${cert.issuer} (${cert.issueDate}) `;
    doc.text(metaText, margin + 14 + titleW, y);
    const metaW = doc.getTextWidth(metaText);

    // Live Clickable Link to View Certificate / Verify Credential
    drawLinkText('[Verify Credential ↗]', margin + 14 + titleW + metaW, y, cert.credentialUrl, {
      fontSize: 8,
      isBold: true,
      color: [2, 132, 199],
      underline: true,
    });

    y += 11.5;
  });

  // Save the digitalized PDF
  doc.save('Dhiraj_Khachane_ATS_Resume.pdf');
}

/**
 * Generates an ATS-compliant digital Word document (.doc) with bold keywords,
 * standard typography, and live clickable hyperlinks (<a href> tags).
 */
export function downloadAtsWordDoc(): void {
  const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Dhiraj Khachane - Digital ATS Resume</title>
      <style>
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.35; color: #111; margin: 1in; }
        h1 { font-size: 18pt; text-align: center; margin-bottom: 3pt; font-weight: bold; }
        .contact { text-align: center; font-size: 9.5pt; color: #444; margin-bottom: 12pt; border-bottom: 1pt solid #ccc; padding-bottom: 6pt; }
        h2 { font-size: 11pt; text-transform: uppercase; border-bottom: 1.5pt solid #111; padding-bottom: 2pt; margin-top: 10pt; margin-bottom: 4pt; font-weight: bold; }
        p { margin: 2pt 0; }
        ul { margin: 2pt 0; padding-left: 18pt; }
        li { margin-bottom: 2.5pt; }
        strong { font-weight: bold; }
        a { color: #0284c7; text-decoration: underline; }
        .row { display: flex; justify-content: space-between; }
        .tag { font-size: 8.5pt; color: #0284c7; font-weight: bold; text-decoration: underline; margin-left: 4pt; }
      </style>
    </head>
    <body>
      <h1>${PERSONAL_INFO.name}</h1>
      <div class="contact">
        <a href="tel:${PERSONAL_INFO.phone}">${PERSONAL_INFO.phone}</a> &nbsp;|&nbsp; 
        <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a> &nbsp;|&nbsp; 
        <a href="${PERSONAL_INFO.socials.github}">${PERSONAL_INFO.socials.githubHandle}</a><br/>
        <a href="${PERSONAL_INFO.socials.linkedin}">${PERSONAL_INFO.socials.linkedinHandle}</a>
      </div>

      <h2>PROFESSIONAL SUMMARY</h2>
      <p>
        <strong>Entry-level Data Analyst</strong> candidate with a <strong>Bachelor of Engineering in Information Technology</strong> and hands-on practice in <strong>SQL-based business analysis</strong>, <strong>Google Sheets visualization</strong>, <strong>Python</strong>, and introductory <strong>machine learning</strong>. Experienced through learning projects in <strong>analyzing customer orders, revenue, product performance, and trends</strong>. Seeking a fresher <strong>Data Analyst / Junior Data Analyst</strong> opportunity.
      </p>

      <h2>TECHNICAL SKILLS</h2>
      <p><strong>Data Analysis:</strong> <strong>Data cleaning fundamentals</strong>, <strong>exploratory analysis (EDA)</strong>, <strong>KPI analysis</strong>, <strong>trend analysis</strong>, <strong>business insights</strong></p>
      <p><strong>SQL:</strong> <strong>SELECT</strong>, <strong>filtering</strong>, <strong>JOINs</strong>, <strong>GROUP BY</strong>, <strong>HAVING</strong>, <strong>aggregate functions</strong>, <strong>subqueries</strong>, <strong>COUNT DISTINCT</strong>, <strong>date functions</strong></p>
      <p><strong>Tools:</strong> <strong>Google Sheets</strong>, <strong>Microsoft Excel</strong>, <strong>Power BI</strong>, <strong>Git/GitHub</strong>, <strong>VS Code</strong></p>
      <p><strong>Python / ML:</strong> <strong>Python</strong>, <strong>scikit-learn basics</strong>, <strong>Decision Tree Classifier</strong>, <strong>TF-IDF</strong>, <strong>cosine similarity</strong></p>
      <p><strong>Programming:</strong> <strong>Python</strong>, <strong>SQL</strong>, <strong>HTML</strong>, <strong>CSS</strong></p>

      <h2>PROJECTS</h2>
      <p>
        <strong>Online Food Delivery Analysis | SQL, Google Sheets</strong> 
        <a href="${PROJECTS[0].githubUrl}" class="tag">[GitHub Repo ↗]</a>
      </p>
      <ul>
        <li>Analyzed food delivery orders to explore <strong>city-wise order volumes</strong>, <strong>revenue by food item</strong>, <strong>restaurant performance</strong>, <strong>customer spending</strong>, and <strong>monthly trends</strong>.</li>
        <li>Practiced <strong>JOINs</strong>, <strong>subqueries</strong>, <strong>GROUP BY</strong>, <strong>HAVING</strong>, <strong>SUM</strong>, <strong>COUNT DISTINCT</strong>, and <strong>date functions</strong> to answer business questions.</li>
        <li>Created <strong>Google Sheets charts</strong> for <strong>revenue by city</strong>, customer distribution, popular food items, and monthly order trends.</li>
        <li>Project findings included <strong>Jaipur as a leading city by orders and revenue</strong>, with demand differences across food items and locations.</li>
      </ul>

      <p>
        <strong>Product Recommendation System | Python, TF-IDF, Cosine Similarity</strong> 
        <a href="${PROJECTS[1].githubUrl}" class="tag">[GitHub Repo ↗]</a>
      </p>
      <ul>
        <li>Used the <strong>MovieLens 100K dataset</strong> to explore <strong>user ratings</strong> and item popularity.</li>
        <li>Implemented <strong>collaborative filtering</strong> using <strong>cosine similarity</strong> and <strong>content-based recommendations</strong> using <strong>TF-IDF</strong>.</li>
        <li>Built an automated workflow to recommend items from user input and <strong>export recommendation results to CSV</strong>.</li>
      </ul>

      <h2>EDUCATION</h2>
      <p>
        <strong>Anuradha Engineering College</strong> (2022 - 2025)<br/>
        <strong>Bachelor of Engineering in Information Technology</strong> - Chikhli, Buldhana, Maharashtra<br/>
        <strong>CGPA – 7.5</strong>
      </p>
      
      <p>
        <strong>Government Polytechnic, Murtizapur</strong> (2019 - 2022)<br/>
        <strong>Diploma in Information Technology</strong> - Murtizapur, Akola, Maharashtra<br/>
        Percentage: <strong>72.56%</strong> | SSC: <strong>75.20%</strong>
      </p>

      <h2>CERTIFICATIONS & VERIFIED CREDENTIALS</h2>
      <ul>
        ${CERTIFICATIONS.map(
          (c) =>
            `<li><strong>${c.title}</strong> — ${c.issuer} (${c.issueDate}) <a href="${c.credentialUrl}" class="tag">[Verify Credential ↗]</a></li>`
        ).join('\n        ')}
      </ul>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', content], {
    type: 'application/msword',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Dhiraj_Khachane_ATS_Resume.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
