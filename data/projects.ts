export const PROJECTS = [
  {
    id: 'netrakshak',

    title: 'NetRakshak',

    type: 'Featured Research',

    subtitle:
      'A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection',

    description:
      'Existing fraud and phishing detection approaches can be reactive, fragmented, or difficult for end users to interpret. NetRakshak brings together input detection, threat intelligence, heuristic analysis, and explainable risk scoring in a unified research framework.',

    technologies: [
      'React.js',
      'FastAPI',
      'Python 3.11',
      'MongoDB',
      'WHOIS',
      'Google Safe Browsing',
      'VirusTotal',
    ],

    focus: [
      'URL, phone-number and email analysis',
      'WHOIS/domain analysis',
      'Phishing heuristics',
      'Brand impersonation detection',
      'Multi-factor risk scoring',
      'Explainable risk factors',
      'Actionable recommendations',
    ],

    approach:
      'Input Detection → Threat Intelligence → WHOIS → Heuristic Analysis → Brand Impersonation → Risk Scoring → Explainability',

    result:
      'Evaluation on 150 labeled samples: 91.3% accuracy, 93.1% precision, 92.7% recall, and 92.9% F1 score.',

    github: null,

    demo: null,
  },

  {
    id: 'ai-doc-search',

    title: 'AI Document Search',

    type: 'Applied AI Project',

    subtitle:
      'AI-powered Retrieval-Augmented Generation system for semantic document interaction.',

    description:
      'A document question-answering application that allows users to interact with PDF documents through natural-language queries. It combines document processing, semantic retrieval, vector search, and LLM generation to produce context-aware responses.',

    technologies: [
      'React',
      'FastAPI',
      'LangChain',
      'OpenAI',
      'Pinecone / FAISS',
      'Docker',
      'Vercel',
    ],

    focus: [
      'Document processing',
      'Semantic retrieval and vector search',
      'Retrieval-augmented generation (RAG)',
      'LLM integration and contextual response generation',
      'API-based architecture',
    ],

    approach:
      'Document Processing → Embedding Generation → Vector Search → Context Retrieval → LLM Generation → Context-Aware Response',

    result: null,

    github: null,

    demo: null,
  },

  {
    id: 'pneumonia-cnn',

    title: 'Pneumonia Detection using CNN',

    type: 'Applied ML Project',

    subtitle:
      'Deep-learning system for pneumonia classification from chest X-ray images.',

    description:
      'A convolutional neural network application for detecting pneumonia from chest X-ray images using TensorFlow and Keras. The work covers image processing, CNN-based feature learning, model training, and evaluation workflows.',

    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
    ],

    focus: [
      'Image preprocessing',
      'CNN-based feature learning',
      'Model training',
      'Validation',
      'Confusion-matrix analysis',
      'Accuracy/loss evaluation',
    ],

    approach:
      'Image Preprocessing → CNN Feature Learning → Model Training → Validation → Performance Evaluation',

    result: null,

    github: null,

    demo: null,
  },
]