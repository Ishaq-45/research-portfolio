export const netrakshak = {
  title:
    'NetRakshak: A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection',

  venue:
    'International Journal of Engineering Research & Technology (IJERT)',

  volume: 'Vol. 15, Issue 04',

  date: 'April 2026',

  abstract:
    `NetRakshak is a user-centric threat intelligence framework that unifies URL, phone number, and email verification into an explainable, tiered risk-scoring system. The system aggregates WHOIS, Google Safe Browsing, VirusTotal, heuristic phishing detection, and brand-impersonation signals and produces actionable recommendations for end users. Evaluation on a 150-sample dataset demonstrates competitive accuracy with emphasis on interpretability and localized guidance.`,

  researchGap: [
    'Existing fraud and phishing detection workflows can be fragmented across multiple tools and threat intelligence sources.',
    'Security decisions can be difficult for end users to interpret when systems provide limited explanation for their risk assessments.',
    'Detection systems may identify threats without providing clear, actionable guidance after a potentially malicious interaction.',
  ],

  objectives: [
    'Unify multiple threat intelligence signals into a single verification workflow.',
    'Develop a tiered risk-scoring mechanism with interpretable risk factors.',
    'Support analysis of URLs, phone numbers, and email addresses.',
    'Provide actionable and localized guidance for end users.',
    'Evaluate the framework using a labeled dataset and comparative baselines.',
  ],

  contributions: [
    'Unified verification workflow for URLs, phone numbers, and email addresses.',
    'Explainable tiered risk scoring with heuristic signals and override rules.',
    'Integration of multiple threat intelligence sources including WHOIS, Google Safe Browsing, and VirusTotal.',
    'Brand-impersonation and phishing heuristic analysis.',
    'Actionable user guidance designed to support post-incident response.',
  ],

  architecture: [
    'Input Processing & Type Detection',
    'Threat Intelligence Aggregation',
    'WHOIS / Domain Analysis',
    'Heuristic Phishing Detection',
    'Brand Impersonation Detection',
    'Tiered Risk Scoring',
    'Explainability & Recommendations',
  ],

  riskScoring: {
    tiers: [
      {
        name: 'Tier 1',
        multiplier: '1.0×',
        description: 'Lower-severity risk indicators.',
      },
      {
        name: 'Tier 2',
        multiplier: '2.5×',
        description: 'Moderate-risk indicators requiring additional attention.',
      },
      {
        name: 'Tier 3',
        multiplier: '5.0×',
        description: 'High-severity indicators with stronger influence on the final score.',
      },
    ],

    categories: [
      'Safe: 0–30',
      'Suspicious: 31–60',
      'High Risk: 61–85',
      'Critical: 86–100',
    ],

    explainability:
      'The scoring layer combines weighted threat indicators with override rules and exposes contributing risk factors so that the resulting classification can be interpreted by the user.',
  },

  evaluation: {
    dataset:
      '150 labeled samples: 80 PhishTank samples, 20 OpenPhish samples, and 50 legitimate domains.',

    metrics: {
      accuracy: '91.3%',
      precision: '93.1%',
      recall: '92.7%',
      f1: '92.9%',
      falsePositiveRate: '8.0%',
      scoringLatency: '<100 ms',
      endToEnd: '~1.8 s with WHOIS',
      whoisCacheHit: '<50 ms',
    },

    correctlyClassified: '137 / 150',

    errors:
      '4 false positives and 9 false negatives.',

    baselines: [
      'Google Safe Browsing: 74.0% accuracy',
      'VirusTotal: 82.0% accuracy',
      'ML-only baseline: 97.4% accuracy',
      'NetRakshak: 91.3% accuracy',
    ],
  },

  limitations: [
    'The current detection engine relies substantially on heuristic analysis rather than a trained classification model.',
    'The evaluation dataset is limited in scale and may not represent the full diversity of real-world cyber fraud.',
    'Performance can depend on the coverage and availability of external threat intelligence services and brand information.',
    'The reported false-positive rate indicates that some legitimate inputs may still require additional verification.',
  ],

  futureWork: [
    'Develop and evaluate a trained machine-learning classification model.',
    'Expand coverage of Indian financial and consumer-facing brands.',
    'Investigate certificate-authority-aware scoring and whitelist mechanisms.',
    'Evaluate the framework on larger datasets and live threat intelligence feeds.',
    'Study additional methods for improving explainability and user-facing security guidance.',
  ],

  metrics: {
    accuracy: '91.3% (150 samples)',
    precision: '93.1%',
    recall: '92.7%',
    f1: '92.9%',
    scoringLatency: '<100 ms',
    endToEnd: '~1.8 s (with WHOIS)',
    falsePositiveRate: '8.0%',
    whoisCacheHit: '<50 ms',
  },
}