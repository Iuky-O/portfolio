export const PROJECTS = [
  {
    id: 'coposcopia',
    name: 'API Coposcopia',
    tagline: 'Visão computacional para classificação de imagens de Coposcopia',
    taglineEn: 'Computer vision for colposcopy image classification',
    description:
      'Sistema full stack que integra modelo de Deep Learning treinado em Python com uma API Flask e uma aplicação web para a classificação de imagens coposcópicas, auxiliando médicos no diagnóstico precoce do câncer de colo de útero.',
    descriptionEn:
      'Full stack system integrating a Python-trained Deep Learning model with a Flask API and a web application for colposcopy image classification, supporting early cervical cancer diagnosis.',
    problem:
      'Classificar automaticamente imagens de colposcopia nas classes CIN I, CIN II e CIN III, auxiliando médicos no diagnóstico precoce do câncer de colo de útero e reduzindo a subjetividade da análise visual.',
    problemEn:
      'Automatically classify colposcopy images into CIN I, CIN II and CIN III categories, supporting early cervical cancer diagnosis and reducing subjectivity in visual analysis.',
    solution:
      'Modelo de Deep Learning treinado em Python, exposto via API Flask, integrado a uma aplicação web que recebe as imagens do exame e retorna a classificação ao médico.',
    solutionEn:
      'Deep Learning model trained in Python, served via Flask API, integrated with a web application that receives exam images and returns the classification to the physician.',
    challenge:
      'Treinar um modelo de visão computacional com alta acurácia em um dataset médico de imagens coposcópicas e integrá-lo em uma API Flask com desempenho aceitável durante o processamento.',
    challengeEn:
      'Training a computer vision model with high accuracy on a medical colposcopy image dataset and integrating it into a Flask API with acceptable processing performance.',
    participation:
      'Desenvolvimento completo do modelo de Deep Learning em Python, criação da API Flask para servir o modelo e integração com a aplicação web de visualização e classificação.',
    participationEn:
      'Complete development of the Deep Learning model in Python, creation of the Flask API to serve the model, and integration with the web application for visualization and classification.',
    techs: ['Python', 'Flask', 'Deep Learning', 'Computer Vision', 'REST API'],
    github: 'https://github.com/Iuky-O/API_COPOSCOPIA',
    status: 'academic',
    isPrivate: false,
    featured: true,
  },
  {
    id: 'musel',
    name: 'Musel Monitoring System',
    tagline: 'Monitoramento de obras de arte com IoT, visão computacional e dashboard em tempo real',
    taglineEn: 'Artwork monitoring with IoT, computer vision and real-time dashboard',
    description:
      'Sistema completo para monitoramento de obras de arte em museus. Usa ESP32-CAM para captura de imagens e sensores HC-SR04 para rastrear visitantes. O backend em FastAPI com WebSockets processa e distribui os dados em tempo real; o frontend exibe dashboards com métricas de visitação.',
    descriptionEn:
      'Complete system for artwork monitoring in museums. Uses ESP32-CAM for image capture and HC-SR04 sensors to track visitors. The FastAPI backend with WebSockets processes and distributes data in real time; the frontend displays dashboards with visitation metrics.',
    problem:
      'Museus precisam monitorar a interação dos visitantes com as obras — quantas pessoas viram cada obra, qual o dia de maior movimento e qual a distância média de observação — sem interferir na experiência cultural.',
    problemEn:
      'Museums need to monitor visitor interaction with artworks — how many people viewed each piece, which day had the most visitors, and the average viewing distance — without disrupting the cultural experience.',
    solution:
      'Hardware ESP32 com sensores e câmera envia dados via WebSocket para um backend FastAPI em Python. Os dados são armazenados no MongoDB e Firebase Storage, e o frontend exibe dashboards com as métricas em tempo real.',
    solutionEn:
      'ESP32 hardware with sensors and camera sends data via WebSocket to a Python FastAPI backend. Data is stored in MongoDB and Firebase Storage, and the frontend displays real-time metric dashboards.',
    challenge:
      'Integrar hardware embarcado (ESP32) com backend Python via WebSockets garantindo baixa latência, e manter consistência nos dados de múltiplos sensores operando simultaneamente.',
    challengeEn:
      'Integrating embedded hardware (ESP32) with Python backend via WebSockets while ensuring low latency, and maintaining data consistency from multiple sensors operating simultaneously.',
    participation:
      'Desenvolvimento do sistema embarcado com ESP32, backend FastAPI com recebimento dos dados dos sensores via WebSockets, e implementação das dashboards com métricas (obra mais vista, total de visitantes, distância).',
    participationEn:
      'Development of the embedded system with ESP32, FastAPI backend receiving sensor data via WebSockets, and implementation of dashboards with metrics (most viewed artwork, total visitors, distance).',
    techs: ['Python', 'FastAPI', 'WebSockets', 'OpenCV', 'MongoDB', 'Firebase', 'ESP32', 'JavaScript'],
    github: 'https://github.com/Iuky-O/musel-monitoring-system',
    status: 'academic',
    isPrivate: false,
    featured: true,
  },
  {
    id: 'fruteira',
    name: 'API Fruteira',
    tagline: 'SaaS multi-tenant com estoque, financeiro, RBAC e exportação de relatórios',
    taglineEn: 'Multi-tenant SaaS with inventory, finance, RBAC and report export',
    description:
      'Backend SaaS multi-tenant com Django REST Framework para gestão operacional de fruteiras e PMEs. Oferece controle de estoque com histórico, registro de vendas, módulo financeiro, dashboard com KPIs, autenticação JWT + API Keys e RBAC com roles por organização.',
    descriptionEn:
      'Multi-tenant SaaS backend with Django REST Framework for operational management of small food retailers and SMEs. Provides inventory control with history, sales recording, financial module, KPI dashboard, JWT + API Key authentication, and organization-level RBAC.',
    problem:
      'PMEs do setor alimentar operam sem ferramentas de gestão — sem controle de estoque, sem histórico de vendas e sem visibilidade sobre a saúde financeira do negócio, dependendo de planilhas ou processos manuais.',
    problemEn:
      'Food retail SMEs operate without management tools — no inventory control, no sales history, and no visibility into financial health, relying on spreadsheets or manual processes.',
    solution:
      'API REST multi-tenant com isolamento de dados por organização, módulos de inventário, vendas e financeiro, RBAC com owner/manager/staff, subscription middleware por plano, exportação em Excel e PDF, e documentação OpenAPI.',
    solutionEn:
      'Multi-tenant REST API with organization-level data isolation, inventory, sales and financial modules, owner/manager/staff RBAC, plan-based subscription middleware, Excel and PDF export, and OpenAPI documentation.',
    challenge:
      'Projetar a arquitetura multi-tenant com isolamento completo entre organizações e implementar o middleware de subscription que bloqueia acesso a funcionalidades conforme o plano contratado, sem impactar a performance.',
    challengeEn:
      'Designing the multi-tenant architecture with complete data isolation between organizations and implementing the subscription middleware that restricts access based on the contracted plan without impacting performance.',
    participation:
      'Desenvolvimento completo da API — arquitetura multi-tenant, módulos de gestão, autenticação JWT + API Keys, RBAC, middleware de planos, exportação de relatórios e documentação OpenAPI.',
    participationEn:
      'Complete API development — multi-tenant architecture, management modules, JWT + API Key authentication, RBAC, plan middleware, report export and OpenAPI documentation.',
    techs: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker', 'Multi-tenant', 'OpenAPI'],
    github: null,
    status: 'in_progress',
    isPrivate: true,
    featured: true,
  },
  {
    id: 'babosa',
    name: 'API Babosa',
    tagline: 'Detecção de saúde de aloe vera via visão computacional e ESP32-CAM',
    taglineEn: 'Aloe vera health detection via computer vision and ESP32-CAM',
    description:
      'Sistema com modelo de IA treinado para classificar folhas de babosa em três estados: saudável, com ferrugem ou podre. Integrado a uma API Flask que recebe imagens da câmera ESP32 e retorna a classificação em tempo real com exibição no frontend.',
    descriptionEn:
      'System with an AI model trained to classify aloe vera leaves into three states: healthy, with rust, or rotten. Integrated with a Flask API that receives images from the ESP32 camera and returns real-time classification displayed on the frontend.',
    problem:
      'Produtores de aloe vera precisam identificar rapidamente o estado de saúde das plantas, processo que normalmente exige inspeção manual especializada e não permite escala.',
    problemEn:
      'Aloe vera producers need to quickly identify the health status of plants, a process that normally requires specialized manual inspection and does not scale.',
    solution:
      'Modelo de visão computacional treinado com imagens reais de aloe vera, servido via API Flask, com integração à câmera ESP32 para captura e análise automática, e frontend para visualização dos resultados.',
    solutionEn:
      'Computer vision model trained with real aloe vera images, served via Flask API, integrated with ESP32 camera for automatic capture and analysis, and frontend for results display.',
    challenge:
      'Coletar e rotular volume suficiente de imagens para treinar o modelo com precisão nos três estados, garantindo que o modelo não confundisse ferrugem com podridão em condições de iluminação variadas.',
    challengeEn:
      'Collecting and labeling enough images to train the model accurately across three states, ensuring it did not confuse rust with rot under varying lighting conditions.',
    participation:
      'Treinamento do modelo de IA em Python, desenvolvimento do backend Flask para receber dados da câmera ESP32 e implementação do frontend para visualização dos resultados de classificação.',
    participationEn:
      'Training the AI model in Python, developing the Flask backend to receive ESP32 camera data, and implementing the frontend for displaying classification results.',
    techs: ['Python', 'Flask', 'Machine Learning', 'Computer Vision', 'ESP32', 'REST API'],
    github: 'https://github.com/Iuky-O/API_BABOSA',
    status: 'academic',
    isPrivate: false,
    featured: false,
  },
  {
    id: 'brotar',
    name: 'BrotarPlus',
    tagline: 'App mobile para feirantes com gestão completa de produtos e banco em nuvem',
    taglineEn: 'Mobile app for market vendors with full product management and cloud database',
    description:
      'Plataforma mobile para feirantes que digitaliza a gestão e divulgação de produtos. Permite cadastrar, editar e excluir produtos com sincronização em tempo real via Supabase, com autenticação por usuário e isolamento de dados por feirante.',
    descriptionEn:
      'Mobile platform for market vendors that digitizes product management and promotion. Allows registering, editing and deleting products with real-time synchronization via Supabase, with per-user authentication and data isolation.',
    problem:
      'Feirantes não dispõem de ferramentas acessíveis para digitalizar seus negócios — sem controle de produtos, sem divulgação digital e sem histórico de alterações.',
    problemEn:
      'Market vendors lack accessible tools to digitize their businesses — no product control, no digital promotion, and no change history.',
    solution:
      'App React Native com Supabase como backend serverless, oferecendo CRUD completo de produtos, autenticação de usuários, sincronização em tempo real e isolamento de dados por feirante.',
    solutionEn:
      'React Native app with Supabase as serverless backend, offering full product CRUD, user authentication, real-time sync and per-vendor data isolation.',
    challenge:
      'Modelar as tabelas no Supabase com isolamento de dados entre feirantes e garantir que operações de CRUD refletissem imediatamente na interface sem recarregamento manual.',
    challengeEn:
      'Modeling Supabase tables with vendor data isolation and ensuring CRUD operations reflected immediately in the interface without manual refresh.',
    participation:
      'Implementação do fluxo completo de autenticação (cadastro e login), CRUD de produtos (cadastro, listagem, edição, exclusão) e toda a integração com o banco de dados Supabase.',
    participationEn:
      'Implementation of the complete authentication flow (registration and login), product CRUD (create, list, edit, delete), and all database integration with Supabase.',
    techs: ['React Native', 'Supabase', 'JavaScript', 'PostgreSQL', 'Mobile'],
    github: null,
    status: 'completed',
    isPrivate: true,
    featured: false,
  },
  {
    id: 'jcon',
    name: 'JCon Project',
    tagline: 'App mobile para prestadores de serviços com gamificação, ranking e chat integrado',
    taglineEn: 'Mobile app for service providers with gamification, ranking and integrated chat',
    description:
      'Aplicação mobile multiplataforma desenvolvida com React Native e Firebase para aproximar prestadores de serviços e contratantes. Utiliza Design Thinking como metodologia, gamificação com sistema de ranking, chat em tempo real e busca personalizada por tipo de usuário.',
    descriptionEn:
      'Cross-platform mobile application built with React Native and Firebase to connect service providers and contractors. Uses Design Thinking methodology, gamification with a ranking system, real-time chat, and user-type-based search.',
    problem:
      'Prestadores de serviços e contratantes não dispõem de uma plataforma mobile dedicada que facilite a conexão entre eles, com mecanismos de avaliação, gamificação e comunicação direta.',
    problemEn:
      'Service providers and contractors lack a dedicated mobile platform to facilitate connections, with built-in rating mechanisms, gamification, and direct communication.',
    solution:
      'App React Native com Firebase para autenticação e persistência em nuvem, sistema de ranking gamificado com paginação, chat em tempo real entre contratante e prestador, e busca componentizada que se adapta ao perfil do usuário.',
    solutionEn:
      'React Native app with Firebase for authentication and cloud persistence, gamified ranking system with pagination, real-time chat between contractor and provider, and componentized search that adapts to the user profile.',
    challenge:
      'Implementar uma busca componentizada que se comportasse de forma diferente conforme o perfil do usuário — contratantes buscam prestadores, prestadores buscam vagas — mantendo reaproveitamento de componentes e consistência visual.',
    challengeEn:
      'Implementing a componentized search that behaved differently based on user profile — contractors search for providers, providers search for job openings — while reusing components and maintaining visual consistency.',
    participation:
      'Desenvolvimento das telas de login, perfil e home, sistema de ranking com paginação, e telas de chat e busca com componentização para diferenciar o comportamento por tipo de usuário (contratante/prestador).',
    participationEn:
      'Development of login, profile and home screens, ranking system with pagination, and chat and search screens with componentization to differentiate behavior by user type (contractor/provider).',
    techs: ['React Native', 'Firebase', 'JavaScript', 'Mobile', 'Design Thinking'],
    github: 'https://github.com/Iuky-O/JCon_Project',
    status: 'academic',
    isPrivate: false,
    featured: false,
  },
  {
    id: 'noticias',
    name: 'API Notícias',
    tagline: 'API REST com Django, Docker e testes unitários de sucesso e erro',
    taglineEn: 'REST API with Django, Docker and unit tests for success and error cases',
    description:
      'API REST para gerenciamento e distribuição de notícias, desenvolvida com Django REST Framework. Containerizada com Docker e Docker Compose e coberta com testes unitários para cenários de sucesso e erro.',
    descriptionEn:
      'REST API for news management and distribution, built with Django REST Framework. Containerized with Docker and Docker Compose and covered with unit tests for success and error scenarios.',
    problem:
      'Criar uma API REST completa, com containerização e cobertura de testes, demonstrando domínio em desenvolvimento de APIs Python/Django em um ambiente próximo ao profissional.',
    problemEn:
      'Build a complete REST API with containerization and test coverage, demonstrating mastery of Python/Django API development in a near-professional environment.',
    solution:
      'API com endpoints para acesso a notícias, armazenamento em dicionário Python para facilitar testes, containerizada com Docker Compose e coberta com testes de sucesso e erro.',
    solutionEn:
      'API with news access endpoints, in-memory Python dictionary storage to simplify testing, containerized with Docker Compose, and covered with success and error tests.',
    challenge:
      'Estruturar os testes para cobrir tanto cenários de sucesso quanto de falha, e configurar o Docker Compose para isolar o ambiente sem dependências de banco de dados externo.',
    challengeEn:
      'Structuring tests to cover both success and failure scenarios, and configuring Docker Compose to isolate the environment without external database dependencies.',
    participation:
      'Desenvolvimento completo da API — modelagem, endpoints, testes unitários e configuração do ambiente Docker.',
    participationEn:
      'Complete API development — modeling, endpoints, unit tests and Docker environment configuration.',
    techs: ['Python', 'Django', 'DRF', 'Docker', 'Docker Compose', 'Unit Tests'],
    github: null,
    status: 'academic',
    isPrivate: true,
    featured: false,
  },
  {
    id: 'contracheque',
    name: 'BD-Contracheque',
    tagline: 'Folha de pagamento com Triggers, Procedures e Cursores em SQL Server',
    taglineEn: 'Payroll system with Triggers, Stored Procedures and Cursors in SQL Server',
    description:
      'Projeto de banco de dados que simula uma folha de pagamento completa usando SQL Server. Implementa geração de contracheque individual ou para todos os funcionários, com lógica de negócio encapsulada em estruturas SQL.',
    descriptionEn:
      'Database project that simulates a complete payroll system using SQL Server. Implements paycheck generation for individual employees or the entire company, with business logic encapsulated in SQL structures.',
    problem:
      'Automatizar o cálculo e emissão de contracheques de forma que o sistema suporte consultas individuais e em lote, com toda a lógica de negócio encapsulada no banco de dados.',
    problemEn:
      'Automate paycheck calculation and generation so the system supports both individual and batch queries, with all business logic encapsulated in the database.',
    solution:
      'Stored Procedures parametrizadas com lógica If/Else, Cursores para iteração sobre funcionários, Triggers para automação de cálculos e consultas dinâmicas de folha de pagamento.',
    solutionEn:
      'Parameterized Stored Procedures with If/Else logic, Cursors for employee iteration, Triggers for calculation automation, and dynamic payroll queries.',
    challenge:
      'Implementar Cursores para iterar sobre múltiplos funcionários de forma eficiente, mantendo a lógica condicional organizada dentro das Procedures sem duplicação.',
    challengeEn:
      'Implementing Cursors to iterate over multiple employees efficiently, keeping conditional logic organized within Procedures without duplication.',
    participation:
      'Desenvolvimento completo da query e estruturas SQL, incluindo Triggers, Stored Procedures, Cursores e lógica de programação condicional.',
    participationEn:
      'Complete development of queries and SQL structures, including Triggers, Stored Procedures, Cursors and conditional programming logic.',
    techs: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Triggers', 'Cursors'],
    github: 'https://github.com/Iuky-O/BD-Contracheque',
    status: 'academic',
    isPrivate: false,
    featured: false,
  },
  {
    id: 'simposio',
    name: 'Project Simpósio',
    tagline: 'Plataforma web para evento acadêmico com React, Firebase e rotas protegidas',
    taglineEn: 'Web platform for academic event with React, Firebase and protected routes',
    description:
      'Site para gerenciar e divulgar um simpósio acadêmico fictício de Engenharia de Software. Frontend React com hooks, Context API e React Router; backend serverless via Firebase com autenticação, banco de dados em nuvem e rotas protegidas.',
    descriptionEn:
      'Website to manage and promote a fictional Software Engineering academic symposium. React frontend with hooks, Context API and React Router; serverless backend via Firebase with authentication, cloud database and protected routes.',
    problem:
      'Eventos acadêmicos precisam de uma plataforma digital para divulgação, inscrição de participantes e controle de acesso, com áreas restritas para organizadores.',
    problemEn:
      'Academic events need a digital platform for promotion, participant registration and access control, with restricted areas for organizers.',
    solution:
      'Aplicação React com React Router para navegação, Context API para estado global de autenticação, Firebase Auth para login e Firestore para armazenamento de usuários e dados do evento.',
    solutionEn:
      'React application with React Router for navigation, Context API for global authentication state, Firebase Auth for login and Firestore for storing users and event data.',
    challenge:
      'Integrar Firebase Auth com React Router para criar rotas protegidas que redirecionassem usuários não autenticados, mantendo o estado de sessão consistente entre navegações.',
    challengeEn:
      'Integrating Firebase Auth with React Router to create protected routes that redirected unauthenticated users, maintaining consistent session state across navigation.',
    participation:
      'Desenvolvimento do frontend com React, implementação da autenticação Firebase, criação das rotas protegidas com Context API e configuração do banco de dados Firestore.',
    participationEn:
      'Frontend development with React, Firebase authentication implementation, protected routes with Context API, and Firestore database setup.',
    techs: ['React', 'Firebase', 'React Router', 'Context API', 'React Bootstrap', 'MUI'],
    github: 'https://github.com/Iuky-O/Project-Simposio',
    status: 'academic',
    isPrivate: false,
    featured: false,
  },
]
