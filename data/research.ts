export const netrakshak = {
  title: "NetRakshak: A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection",
  venue: "International Journal of Engineering Research & Technology (IJERT)",
  volume: "Vol. 15, Issue 04",
  date: "April 2026",
  abstract: `NetRakshak is a user-centric threat intelligence framework that unifies URL, phone number, and email verification into an explainable, tiered risk-scoring system. The system aggregates WHOIS, Google Safe Browsing, VirusTotal, heuristic phishing detection, and brand-impersonation signals and produces actionable recommendations for end users. Evaluation on a 150-sample dataset demonstrates competitive accuracy with emphasis on interpretability and localized guidance.`,
  metrics: {
    accuracy: '91.3% (150 samples)',
    precision: '93.1%',
    recall: '92.7%',
    f1: '92.9%',
    scoringLatency: '<100 ms',
    endToEnd: '~1.8 s (with WHOIS)',
    falsePositiveRate: '8.0%',
    whoisCacheHit: '<50 ms'
  }
}
