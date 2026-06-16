export const personalInfo = {
  name: "Ali Uzair",
  title: "Cybersecurity Engineer",
  subtitle: "Detection Engineering | AI Security | Cloud Security",
  description:
    "Building intelligent security systems, threat detection pipelines, cloud-native security solutions, and next-generation cybersecurity products.",
  email: "aliuzair869@gmail.com",
  github: "https://github.com/aliuzair1",
  linkedin: "https://www.linkedin.com/in/ali-uzair-8a584b28a",
  location: "Pakistan",
  availability: "Open to internships & security research collaborations",
};

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Security Labs", value: 3, suffix: "" },
  { label: "GitHub Repos", value: 10, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
];

export const projects = [
  {
    id: 1,
    name: "Secure Healthcare Patient Portal",
    category: "Web Security & SIEM Integration",
    shortDesc:
      "HIPAA-inspired healthcare platform featuring a custom WAF, SIEM integration, RBAC, and real-time threat monitoring.",
    fullDesc:
      "A security-first healthcare web application designed to protect sensitive patient data through layered defense mechanisms. Features a custom Web Application Firewall, Wazuh SIEM integration, role-based access control, encrypted communications, and centralized security monitoring for threat detection and compliance-focused operations.",
    tech: [
      "React",
      "Python",
      "Flask",
      "Supabase",
      "Wazuh",
      "PostgreSQL"
    ],
    github: "https://github.com/aliuzair1/secure-healthcare-patient-portal",
    demo: null,
    features: [
      "Custom Web Application Firewall",
      "Wazuh SIEM integration",
      "SQL Injection & XSS protection",
      "Role-Based Access Control (RBAC)",
      "JWT authentication",
      "Real-time threat monitoring"
    ],
    icon: "🏥",
    color: "#1976D2",
  },
  {
    id: 2,
    name: "Cloud Vulnerability Scanner",
    category: "Security Automation Tool",
    shortDesc:
      "Automated AWS infrastructure scanner identifying misconfigurations, IAM policy violations, and security gaps with severity-rated reports.",
    fullDesc:
      "An automated security assessment tool for cloud infrastructure that continuously scans AWS environments for security misconfigurations, access control violations, and compliance gaps. The scanner analyzes S3 bucket policies, IAM permissions, security groups, and network configurations to generate prioritized vulnerability reports with actionable remediation guidance.",
    tech: ["Python", "AWS SDK (boto3)", "AWS S3", "IAM Analysis", "Security Automation"],
    github: "https://github.com/aliuzair1/Cloud-Vulnerability-Scanner",
    demo: null,
    features: [
      "Multi-service AWS security scanning",
      "IAM policy & permission analysis",
      "S3 bucket misconfiguration detection",
      "CVSS-based severity scoring",
      "Detailed remediation guidance",
      "Exportable security reports",
    ],
    icon: "🛡",
    color: "#FF1744",
  },
  {
    id: 3,
    name: "Enterprise Threat Detection Lab",
    category: "Detection Engineering",
    shortDesc:
      "SIEM-based threat detection environment with custom Splunk detection rules mapped to MITRE ATT&CK for real-world attack simulation.",
    fullDesc:
      "A comprehensive threat detection laboratory simulating enterprise SOC operations. Features custom Splunk detection rules covering 15+ MITRE ATT&CK techniques, automated threat hunting playbooks, and real-world attack simulation using industry-standard frameworks. Includes correlation rules for detecting lateral movement, privilege escalation, and data exfiltration patterns.",
    tech: ["Splunk", "Python", "MITRE ATT&CK", "Sigma Rules", "KQL", "SIEM"],
    github: "https://github.com/aliuzair1",
    demo: null,
    features: [
      "15+ MITRE ATT&CK technique coverage",
      "Custom Splunk detection rules (SPL)",
      "Automated threat hunting playbooks",
      "Attack simulation & red team scenarios",
      "Alert correlation & triage workflows",
      "Detection coverage heatmaps",
    ],
    icon: "🎯",
    color: "#FF003C",
  },
  {
    id: 4,
    name: "AI-Integrated Intrusion Detection System",
    category: "AI Security",
    shortDesc:
      "Hybrid AI-powered IDS leveraging machine learning and anomaly detection to identify malicious network activity.",
    fullDesc:
      "An AI-driven Intrusion Detection System combining supervised machine learning with anomaly detection to detect both known cyber threats and previously unseen attack patterns. Built with a deployment-ready pipeline, real-time inference dashboard, and advanced data balancing techniques for improved detection accuracy.",
    tech: [
      "Python",
      "CatBoost",
      "Scikit-learn",
      "Streamlit",
      "Machine Learning"
    ],
    github: "https://github.com/aliuzair1/AI-Integrated-Intrusion-Detection-System",
    demo: null,
    features: [
      "AI-based threat detection",
      "Anomaly detection engine",
      "Zero-day attack identification",
      "Real-time security monitoring",
      "Hybrid ML architecture",
      "Detection analytics dashboard"
    ],
    icon: "🤖",
    color: "#FF1744",
  }
];

export const skills = [
  {
    category: "Offensive Security",
    icon: "⚔",
    items: [
      { name: "Penetration Testing", level: 80, project: "Web Security Internship" },
      { name: "Burp Suite", level: 85, project: "Web Security Internship" },
      { name: "OWASP ZAP", level: 80, project: "Web Security Internship" },
      { name: "OWASP Top 10", level: 90, project: "Web Security Internship" },
      { name: "Vulnerability Assessment", level: 85, project: "Web Security Internship" },
    ],
  },
  {
    category: "Detection Engineering",
    icon: "🔍",
    items: [
      { name: "Splunk / SIEM", level: 75, project: "Enterprise Threat Detection Lab" },
      { name: "MITRE ATT&CK", level: 80, project: "Threat Detection Lab" },
      { name: "Sigma Rules", level: 70, project: "Detection Rule Development" },
      { name: "Threat Hunting", level: 75, project: "SOC Operations Lab" },
      { name: "Log Analysis", level: 80, project: "Security Monitoring" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁",
    items: [
      { name: "AWS S3", level: 85, project: "Cloud File Storage Platform" },
      { name: "Cloud Security", level: 80, project: "Cloud Vulnerability Scanner" },
      { name: "IAM & Access Control", level: 80, project: "Cloud Vulnerability Scanner" },
      { name: "Infrastructure Security", level: 75, project: "Cloud Security Assessments" },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    items: [
      { name: "Python", level: 85, project: "Multiple projects for AI and Backend" },
      { name: "JavaScript", level: 80, project: "Frontend Application" },
      { name: "Node.js", level: 75, project: "Secure Cloud File Storage" },
      { name: "SQL / PostgreSQL", level: 75, project: "Secure Cloud Storage DB" },
      { name: "Bash / Linux CLI", level: 80, project: "General Use" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    items: [
      { name: "ML for Security", level: 70, project: "AI-Based Intrsuion Detection System" },
      { name: "Anomaly Detection", level: 70, project: "AI-Based Intrsuion Detection System" },
      { name: "Preprocessing", level: 65, project: "AI-Based Intrsuion Detection System" },
      { name: "AI Security", level: 85, project: "AI-Based Intrusion Detection System" }
    ],
  },
  {
    category: "Security Operations",
    icon: "🛡",
    items: [
      { name: "Secure Code Review", level: 80, project: "Security Internship" },
      { name: "JWT Authentication", level: 90, project: "Cloud File Storage" },
      { name: "Session Management", level: 85, project: "Web Security Projects" },
      { name: "REST API Security", level: 85, project: "Backend Development" },
      { name: "Access Control Design", level: 80, project: "RBAC Implementation" },
    ],
  },
];

export const experience = [
  {
    role: "Web Security Intern",
    company: "Pinease Technologies",
    period: "2024",
    type: "Professional Experience",
    achievements: [
      "Conducted comprehensive web application penetration testing aligned with OWASP Top 10, identifying critical vulnerabilities across multiple client applications",
      "Leveraged Burp Suite and OWASP ZAP for in-depth vulnerability assessments — uncovering injection flaws, authentication weaknesses, and security misconfigurations",
      "Performed both automated and manual testing to identify complex security issues that automated tools alone miss",
      "Applied ethical hacking methodologies to simulate real-world attack scenarios, providing detailed remediation guidance to development teams",
      "Collaborated with cross-functional teams to implement security improvements and promote secure coding practices organization-wide",
    ],
    tech: ["Burp Suite", "OWASP ZAP", "Python", "Penetration Testing", "OWASP Top 10"],
  },
];

export const certifications = [
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    year: "2024",
    icon: "🏆",
  },
];


export const attackTechniques = [
  { id: "T1190", name: "Exploit Public App", tactic: "Initial Access", covered: true },
  { id: "T1078", name: "Valid Accounts", tactic: "Persistence", covered: true },
  { id: "T1055", name: "Process Injection", tactic: "Defense Evasion", covered: false },
  { id: "T1021", name: "Remote Services", tactic: "Lateral Movement", covered: true },
  { id: "T1083", name: "File Discovery", tactic: "Discovery", covered: true },
  { id: "T1486", name: "Data Encryption", tactic: "Impact", covered: false },
  { id: "T1059", name: "Command Line", tactic: "Execution", covered: true },
  { id: "T1110", name: "Brute Force", tactic: "Credential Access", covered: true },
  { id: "T1071", name: "App Layer Protocol", tactic: "C2", covered: false },
  { id: "T1041", name: "Exfil Over C2", tactic: "Exfiltration", covered: true },
  { id: "T1566", name: "Phishing", tactic: "Initial Access", covered: false },
  { id: "T1053", name: "Scheduled Task", tactic: "Persistence", covered: true },
];
