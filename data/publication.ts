export const PUBLICATION = {
  title:
    'NetRakshak: A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection',

  venue:
    'International Journal of Engineering Research & Technology (IJERT)',

  volume: 'Vol. 15, Issue 04',

  date: 'April 2026',

  publishedOnline: '16 April 2026',

  paperId: 'IJERTV15IS040914',

  doi: '10.5281/zenodo.19603809',

  // Official publication author order.
  authors:
    'Kommareddy Prathyusha Reddy, Jitendra Dhaduvai, Shaik Mohammed Ishaq, Rajamaina Abhinav, Kotala Sudhamshu Bushan',

  // Preferred portfolio display order:
  // Professor first, followed immediately by Ishaq.
  portfolioAuthors:
    'Kommareddy Prathyusha Reddy, Shaik Mohammed Ishaq, Jitendra Dhaduvai, Rajamaina Abhinav, Kotala Sudhamshu Bushan',

  abstract:
    `NetRakshak aggregates multiple threat intelligence signals to provide explainable, tiered risk scores and actionable user guidance. Evaluation was performed on 150 labeled samples. The work emphasizes interpretability and user-focused recommendations over raw accuracy.`,

  contributions: [
    'Unified verification for URLs, phone numbers, and emails',
    'Explainable tiered risk scoring and override rules engine',
    'Localized, actionable user guidance for post-incident steps',
  ],

  methodologySummary:
    `Input processing and type detection → threat intelligence aggregation (WHOIS, Google Safe Browsing, VirusTotal) → heuristic phishing and brand-impersonation detection → tiered risk scoring → explainability and recommendations.`,

  evaluationSummary:
    `Evaluation on 150 labeled samples: 91.3% accuracy, 93.1% precision, 92.7% recall, 92.9% F1 score. Comparison to external services and a ML-only baseline is included in the paper.`,

  url:
    'https://www.ijert.org/netrakshak-a-user-centric-threat-intelligence-framework-for-real-time-cyber-fraud-detection-ijertv15is040914',

  pdfUrl:
    'https://www.ijert.org/research/netrakshak-a-user-centric-threat-intelligence-framework-for-real-time-cyber-fraud-detection-IJERTV15IS040914.pdf',
}