# AI Radar Daily Feed - 2026-10-24

Public-safe daily paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 102.
- Recommended tonight: 5; an optional weekly reading menu.
- Sources checked: HF October 23 snapshot: 49 API records, reconciled with 49 HTML headings. DAIR October 12–18: all 10 listed papers; October 19–25 issue not yet listed. Henry curriculum checked; ReAct retained as an older prerequisite; latest repository commit February 23, 2026. Repository arXiv scan completed all nine configured queries (six results/query), yielding 42 unique entries. OpenReview homepage accessible, but v1/v2 notes APIs returned HTTP 403; bounded indexed searches yielded no resolved current-week primary paper candidate. Semantic Scholar not needed for citation expansion.
- No independent cross-source overlap among the 102 candidates. Source-bounded discovery, not an exhaustive literature review. Paper claims have not been independently reproduced.

## Recommended Tonight

- [Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought](https://arxiv.org/abs/2610.30755)
  - Tags: memory, retrieval, reliable-ai-systems.
  - What the paper claims: Tests raw-history retrieval plus reranking against richer memory systems on conversational tasks.
  - Why builders should inspect it: A concrete baseline before adding another memory abstraction to an agent.
  - First reading action: Sections 3–5: Raw-RAG setup, matched baselines, efficiency, evidence coverage and raw dependency paths.
  - Code / evidence: Discovery-linked repository HTTP 200: https://github.com/Litmeb/RAW-RAG; implementation and results not reproduced.

- [Recurrent Harness for Agentic Continual Learning](https://arxiv.org/abs/2610.12668)
  - Tags: continual-learning, experience-grounded-learning, agents.
  - What the paper claims: Revises previously retrieved reflections using subsequent trajectories under an online streaming protocol.
  - Why builders should inspect it: Tests whether later experience can correct earlier operational knowledge.
  - First reading action: Sections 3.1–3.3, 4.1–4.2 and 5: backward revision, streaming constraints, source grounding and distribution shifts.
  - Code / evidence: No executable release verified in retrieved primary/discovery material; availability unknown.

- [EvalResearchBench: Can AI Agents Build Their Own Feedback for Recursive Self-Improvement?](https://arxiv.org/abs/2610.04184)
  - Tags: agent-evaluation, recursive-self-improvement, reliable-ai-systems.
  - What the paper claims: Benchmarks agents that construct compact evaluators, then compares them against development and sealed reference targets.
  - Why builders should inspect it: Asks whether an agent’s self-built feedback remains trustworthy outside the targets used to develop it.
  - First reading action: Sections 3.1–3.3 and 4.2–4.3: frozen submission, independent assessment, sealed-target ordering and sampling baseline.
  - Code / evidence: Discovery-linked repository HTTP 200: https://github.com/Mercury7353/self-evaluation-bench; implementation and results not reproduced.

- [Self-Distilling Future Video Representations for World Action Models](https://arxiv.org/abs/2610.30320)
  - Tags: world-models, representation-learning, embodied-learning.
  - What the paper claims: Self-distills future video representations for one-step world-action prediction, with historical observations as context.
  - Why builders should inspect it: A different route toward experience-grounded learning: inspect whether predictive representations transfer to actions.
  - First reading action: Sections 3.2 and 4.2–4.4, plus Appendix C: future-target construction, zero-shot environments, human-video transfer and ablations.
  - Code / evidence: Discovery-linked repository HTTP 200: https://github.com/suhyeok-jang/FRED; implementation and results not reproduced.

- [Scaling Discovery Requires Forgetting](https://arxiv.org/abs/2610.20563)
  - Tags: agents, search, memory, experience-grounded-learning.
  - What the paper claims: Periodically resets agent search state while retaining the strongest candidate to reduce search anchoring.
  - Why builders should inspect it: Pairs useful experience retention with a sharp question: which history makes further discovery worse?
  - First reading action: Primary PDF: reset protocol, retained-best-candidate rule, four-task equal-budget comparisons and restart ablations; HTML rendering returned 404.
  - Code / evidence: No executable release verified in retrieved primary/discovery material; availability unknown.

## Full Candidate List

Discovery-source labels preserve provenance; short excerpts describe the primary abstract, not reproduced results.

### World models, multimodal and embodied systems (23)

- [WeVisOne-VL: Unified Visual Perception from Objects to Pixels](https://arxiv.org/abs/2610.31329) — Primary abstract excerpt: “Existing vision-language models (VLMs) remain unreliable for fine-grained visual perception. In this report, we present WeVisOne-VL (WeChat Vision…”
  - Surfaced by: HF Oct 23.

- [Editing Images into Reusable Layers via Compositional Edit-Prior Distillation](https://arxiv.org/abs/2610.24738) — Primary abstract excerpt: “High-quality image editing requires precise modification of target regions while preserving the content of unrelated regions. Existing editing…”
  - Surfaced by: HF Oct 23.

- [Making MLLM Latents Matter: Factor-Aware Predictive Learning for Cinematic Video Generation](https://arxiv.org/abs/2610.30926) — Primary abstract excerpt: “Cinematic video generation requires both temporal inference from limited inputs (i.e., sparse rather than frame-by-frame guidance) and factor-aware…”
  - Surfaced by: HF Oct 23.

- [Self-Distilling Future Video Representations for World Action Models](https://arxiv.org/abs/2610.30320) — Primary abstract excerpt: “World Action Models (WAMs) have emerged as a promising approach to learning generalist robot policies using rich spatiotemporal…”
  - Surfaced by: HF Oct 23.

- [LaLa-World: Scaling Latent World Models with Natural Language Actions](https://arxiv.org/abs/2610.27851) — Primary abstract excerpt: “This paper shows that JEPA-style latent world models (LWMs) can learn across diverse domains and data sources by…”
  - Surfaced by: HF Oct 23.

- [Code2Video-Compass: A Comprehensive Benchmark for General-Purpose Code-Based Video Generation across T2V, I2V, and V2V](https://arxiv.org/abs/2610.28416) — Primary abstract excerpt: “Code-based video generation offers fine-grained control, targeted editing, and component reuse compared with direct video generation. This approach…”
  - Surfaced by: HF Oct 23.

- [RLSplat: Resource-Linear Budget Control for Feed-forward 3D Gaussian Splatting](https://arxiv.org/abs/2610.27712) — Primary abstract excerpt: “Feed-forward 3D Gaussian Splatting (FF3DGS) reconstructs 3D scenes from images in a single forward pass, making it well-suited…”
  - Surfaced by: HF Oct 23.

- [RTAformer: Relation-Transition-Aware Transformer for Video Scene Graph Generation](https://arxiv.org/abs/2610.20091) — Primary abstract excerpt: “Video scene graph generation (VidSGG) aims to capture objects and their evolving relationships in videos. This requires accounting…”
  - Surfaced by: HF Oct 23.

- [Verus-Insight: Towards Explainable Artifact Detection in AI-Generated Videos](https://arxiv.org/abs/2610.30866) — Primary abstract excerpt: “Recent advances in video generation have made synthetic videos increasingly realistic, placing greater demands on reliable AI-generated video…”
  - Surfaced by: HF Oct 23.

- [F2G-Pose: Geometry-Aware Foundation Feature Lifting for Direct RGB-D Category-Level Object Pose Estimation](https://arxiv.org/abs/2610.31623) — Primary abstract excerpt: “This paper studies category-level RGB-D object pose estimation, which recovers an object's 3D rotation and translation without instance-specific…”
  - Surfaced by: HF Oct 23.

- [HyperDrone: Simulation-to-Reality Transfer at Millions of Frames per Second](https://arxiv.org/abs/2610.28950) — Primary abstract excerpt: “We present HyperDrone, an extremely fast quadrotor simulator focused on high-performance batch rendering that is more than 20x…”
  - Surfaced by: HF Oct 23.

- [TILDE: Teacher-in-the-Loop Distillation from Embodied Foundation Models](https://arxiv.org/abs/2610.25376) — Primary abstract excerpt: “Large-scale action pretraining equips Embodied Foundation Models (EFMs) with strong manipulation capabilities, with particular strengths in generalization and…”
  - Surfaced by: HF Oct 23.

- [MambaAct: Efficient Mamba Action Experts for Flow-Matching Vision-Language-Action Models](https://arxiv.org/abs/2610.22951) — Primary abstract excerpt: “Vision-language-action (VLA) models have shown strong promise for generalist robotic manipulation, but their inference cost remains a major…”
  - Surfaced by: HF Oct 23.

- [SEAM: Spectral Embedding Alignment and Merging for Low-Resource TTS](https://arxiv.org/abs/2610.26252) — Primary abstract excerpt: “Expanding the vocabulary of conditional text-to-speech (TTS) models typically requires extensive fine-tuning with paired audio, creating a major…”
  - Surfaced by: HF Oct 23.

- [Skeleton-Grounded Latent Action Model for Robot World Models](https://arxiv.org/abs/2610.31474) — Primary abstract excerpt: “Robot world models simulate how environments evolve in response to robot actions. Latent action models enable learning dynamics…”
  - Surfaced by: HF Oct 23.

- [DuoCook: An Overcooked-Inspired Benchmark for Visual Planning and Coordination](https://arxiv.org/abs/2610.31511) — Primary abstract excerpt: “Coordinating two players in a cooking task requires a vision-language agent to track changing scene states, sequence recipe…”
  - Surfaced by: arXiv query: LLM agents.

- [Would an LLM Match into a Residency? Uncertainty, Reasoning and Image Use of Open Language Models on the Spanish MIR Examination](https://arxiv.org/abs/2610.31586) — Primary abstract excerpt: “Accuracy on medical examinations is common evidence offered for the clinical use of language models, yet a health…”
  - Surfaced by: arXiv query: Reasoning and planning.

- [Sensorimotor Alignment: A Platonic Proxy for Embodied Policy Success](https://arxiv.org/abs/2610.31670) — Primary abstract excerpt: “Robotic foundation models are typically evaluated through costly closed-loop rollouts, which motivates cheap offline proxies for model capability.…”
  - Surfaced by: arXiv query: Post-training and alignment.

- [Reading, Writing, Sharing, and Interacting with the World through Video](https://arxiv.org/abs/2610.31668) — Primary abstract excerpt: “Video foundation models have advanced rapidly in understanding and generating visual sequences, while video world models seek to…”
  - Surfaced by: arXiv query: Multimodal and video/audio models.

- [UniVOE: A Removal-Driven Framework for Interaction-Aware Universal Video Object Editing](https://arxiv.org/abs/2610.31641) — Primary abstract excerpt: “Video object removal and injection are reciprocal editing operations between object-present and object-absent video states, yet they differ…”
  - Surfaced by: arXiv query: Multimodal and video/audio models.

- [WorldForge V2: Eliciting Camera-Trajectory Alignment in Video Diffusion Models](https://arxiv.org/abs/2610.31640) — Primary abstract excerpt: “Video diffusion models have learned rich 3D/4D priors, making them promising for scene generation and video re-rendering. However,…”
  - Surfaced by: arXiv query: Multimodal and video/audio models.

- [HiP3R: Hierarchical Pose Graphs for Long-Horizon 3D Reconstruction](https://arxiv.org/abs/2610.31635) — Primary abstract excerpt: “Feed-forward models accurately estimate camera motion and 3D geometry from short video windows. However, computational and memory costs…”
  - Surfaced by: arXiv query: Multimodal and video/audio models.

- [CellTrack-Bench: Microscopic Cell Tracking Benchmark for Vision-Language Models](https://arxiv.org/abs/2610.31566) — Primary abstract excerpt: “Large language models have shown outstanding performance on text-first tasks such as coding, math, and writing. Recent efforts…”
  - Surfaced by: arXiv query: Multimodal and video/audio models.

### Agents, research, tools and evaluation (27)

- [Deep Search in Real-World Web Environments](https://arxiv.org/abs/2610.30181) — Primary abstract excerpt: “Despite substantial progress in Deep Search agents, their ability to conduct end-to-end research in real-world open Web environments…”
  - Surfaced by: HF Oct 23.

- [IQuest-Q1: Advancing Foundation Capabilities for Agentic CLI Systems](https://arxiv.org/abs/2610.30949) — Primary abstract excerpt: “We present IQuest-Q1, a sparse Mixture-of-Experts (MoE) agentic foundation model with 320B total parameters (15B activated). IQuest-Q1 is…”
  - Surfaced by: HF Oct 23.

- [FilmFlow: Agentic System for 3D Virtual Film Cinematography](https://arxiv.org/abs/2610.30753) — Primary abstract excerpt: “Complex camera motion is central to visual storytelling, yet translating cinematographic intent into controllable, executable camera trajectories remains…”
  - Surfaced by: HF Oct 23.

- [Beyond Watching and Searching: Benchmarking Agents for Video-centered Deep Research Reports](https://arxiv.org/abs/2610.31158) — Primary abstract excerpt: “Deep research agents synthesize open-web evidence into long reports, but current benchmarks do not evaluate research centered on…”
  - Surfaced by: HF Oct 23.

- [Agent Mosaic: Recognizing Confidentiality Leaks in Agentic LLM Systems](https://arxiv.org/abs/2610.30418) — Primary abstract excerpt: “Modern LLM agents can retrieve information from accessible documents, and then disclose a sensitive conclusion assembled from them.…”
  - Surfaced by: HF Oct 23.

- [Heartbeat Thinking: Speculative Reasoning and Tool Execution While Listening in Realtime Voice Agents](https://arxiv.org/abs/2610.26233) — Primary abstract excerpt: “Tool-using voice agents often leave users waiting after speech ends, even when actionable information arrives earlier in the…”
  - Surfaced by: HF Oct 23.

- [AgentVQA: A Unified Benchmark for Agentic Visual Understanding](https://arxiv.org/abs/2610.31494) — Primary abstract excerpt: “Vision-language models (VLMs) can perform a broad range of tasks across diverse settings, yet their performance in agentic…”
  - Surfaced by: HF Oct 23.

- [BrickWright: Agentic Creation of Physically Feasible Brick Builds](https://arxiv.org/abs/2610.31651) — Primary abstract excerpt: “Frontier coding agents are becoming increasingly adept at 3D modeling. Yet, they still face challenges when building objects…”
  - Surfaced by: HF Oct 23.

- [RIDAR: Safeguarding Research Integrity in Autonomous Research Agents via Automated Detection and Runtime Intervention](https://arxiv.org/abs/2610.31372) — Primary abstract excerpt: “Autonomous research agents are increasingly used to automate large portions of scientific research, yet they are prone to…”
  - Surfaced by: HF Oct 23.

- [Who Takes the Lead? Model Ability and Task-Conditioned Collaboration with Humans](https://arxiv.org/abs/2610.27148) — Primary abstract excerpt: “As language-model agents grow more capable, they can carry more of a task without asking anyone for help.…”
  - Surfaced by: HF Oct 23.

- [TARSphere: A Robot-Oriented Full-Stack Framework for Long-Horizon Embodied Agents in Evolving Physical and Social Environments](https://arxiv.org/abs/2610.30043) — Primary abstract excerpt: “Robots must act under physical and social constraints while adapting to changes in their environment and human needs.…”
  - Surfaced by: HF Oct 23.

- [EvalResearchBench: Can AI Agents Build Their Own Feedback for Recursive Self-Improvement?](https://arxiv.org/abs/2610.04184) — Primary abstract excerpt: “Recursive self-improvement (RSI) relies on evaluation feedback to assess progress and guide further research, yet repeatedly running complex…”
  - Surfaced by: HF Oct 23.

- [Bridging Exploration and Persona: Information-Directed Dueling for Test-Time Agent Personalization](https://arxiv.org/abs/2610.24385) — Primary abstract excerpt: “Effective test-time personalization requires LLM agents to adapt to query-dependent user preferences from lightweight interaction. We study persona…”
  - Surfaced by: HF Oct 23.

- [IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems](https://arxiv.org/abs/2610.24383) — Primary abstract excerpt: “Improving every agent in an LLM-based multi-agent system can be prohibitively costly, making it important to identify which…”
  - Surfaced by: HF Oct 23.

- [SplatLab: Autonomous Scientific Discovery for 3DGS Research](https://arxiv.org/abs/2610.30468) — Primary abstract excerpt: “Reproducing a published 3DGS paper takes weeks of expert engineering before any extension can be proposed. Prior autonomous-research…”
  - Surfaced by: HF Oct 23.

- [Discovering state-of-the-art quantum circuits with large language models](https://arxiv.org/abs/2610.22367) — Primary abstract excerpt: “Significant efforts are currently being directed toward the implementation of large-scale quantum information processors, but realizing useful quantum…”
  - Surfaced by: DAIR Oct 12–18.

- [Hybrid Reasoning Agents](https://arxiv.org/abs/2610.18861) — Primary abstract excerpt: “How can we build an agent that thinks beyond human language, yet still acts through it in the…”
  - Surfaced by: DAIR Oct 12–18.

- [The Agentic Scientist: Orchestrating Coding Agents for Automated Scientific (Co-)Discovery](https://arxiv.org/abs/2610.18933) — Primary abstract excerpt: “Modern coding agents are fundamentally reshaping the role of human input for computational research: they write code, launch…”
  - Surfaced by: DAIR Oct 12–18.

- [AutoEnvScaling: Automating the Data Flywheel with Terminal Agents](https://arxiv.org/abs/2610.14163) — Primary abstract excerpt: “Terminal agents solve tasks in software engineering and scientific research by executing commands in a terminal. Training them…”
  - Surfaced by: DAIR Oct 12–18.

- [EpiSEM-Bench: Evaluating Safety and Evidence Recovery in LLM Agents under Missing Evidence](https://arxiv.org/abs/2610.31650) — Primary abstract excerpt: “Tool-using language model agents rely on environmental facts to decide whether an action is permitted. When a tool…”
  - Surfaced by: arXiv query: LLM agents.

- [Training Small Language Models for Transferable Tool Selection](https://arxiv.org/abs/2610.31483) — Primary abstract excerpt: “As LLM agents operate over corpora of more than ten thousand tools, selecting the right tool for a…”
  - Surfaced by: arXiv query: LLM agents.

- [Simulated Control Evals](https://arxiv.org/abs/2610.31593) — Primary abstract excerpt: “Control evaluations measure whether safeguards can prevent an AI model from causing undesired outcomes even when it is…”
  - Surfaced by: arXiv query: Reasoning and planning.

- [CAMGen: A Core Change-Aware Multi-View Framework for Commit Message Generation](https://arxiv.org/abs/2610.31552) — Primary abstract excerpt: “Commit messages help developers understand code changes and support software maintenance. Recent approaches use repository context to improve…”
  - Surfaced by: arXiv query: Coding agents and software engineering.

- [Adaptive Skill Granularity for Coding Agents: Runtime Routing and Macro-to-Micro Recovery](https://arxiv.org/abs/2610.31461) — Primary abstract excerpt: “Reusable skills allow large language model agents to package task-specific procedures, tool affordances, and execution guidance into modular…”
  - Surfaced by: arXiv query: Coding agents and software engineering.

- [Procrustes-Bering-Sheaft: Automated Model Discovery and Virtual Crash Tests for Microservices](https://arxiv.org/abs/2610.31444) — Primary abstract excerpt: “Procrustes-Bering-Sheaft automates lightweight model discovery and virtual crash tests for microservices. Each test estimates operation availability by Monte…”
  - Surfaced by: arXiv query: Coding agents and software engineering.

- [ConQEC: Concolic Testing for Quantum Error-Correcting Code Implementations](https://arxiv.org/abs/2610.31443) — Primary abstract excerpt: “Quantum error-correcting code (QECC) implementations are hybrid software-control systems: measured syndromes drive decoder dispatch, recovery actions, and logical…”
  - Surfaced by: arXiv query: Coding agents and software engineering.

- [AfterDeleteBench: Auditing Post-Deletion Information Persistence in LLM Agents](https://arxiv.org/abs/2610.31366) — Primary abstract excerpt: “Many LLM agents maintain external persistent memory and derive additional state from past interactions, such as summaries. Deleting…”
  - Surfaced by: arXiv query: RAG and memory.

### Reasoning, training and other research (32)

- [Toward Recursive Self-Improvement in Physical AI](https://arxiv.org/abs/2610.29677) — Primary abstract excerpt: “Recursive self-improvement (RSI) describes a system that improves not only its behavior but also the process by which…”
  - Surfaced by: HF Oct 23.

- [What Generation Knows: Unlocking Fine-Grained Understanding in Unified Multimodal Models](https://arxiv.org/abs/2610.23987) — Primary abstract excerpt: “Fine-grained visual understanding requires distinguishing subtle differences in local attributes and spatial relations, yet remains challenging for existing…”
  - Surfaced by: HF Oct 23.

- [Policy-Mask: Budget-Aware Adaptation of Diffusion Features to Discriminative Tasks](https://arxiv.org/abs/2610.28889) — Primary abstract excerpt: “Selecting intermediate features from a frozen diffusion model for discriminative tasks is non-trivial because the useful signal is…”
  - Surfaced by: HF Oct 23.

- [RouteWeaver: Weaving Mode Selection and Execution into Unified LLM Routing](https://arxiv.org/abs/2610.19705) — Primary abstract excerpt: “LLM routing dynamically selects and coordinates heterogeneous language models across diverse tasks. However, existing approaches are largely built…”
  - Surfaced by: HF Oct 23.

- [AnyGameRenderer: Entity-Consistent Generative Rendering Across Games and an Entity-Level Benchmark](https://arxiv.org/abs/2610.31466) — Primary abstract excerpt: “AI coding agents can now build small playable games in minutes, but the results usually look like programmer…”
  - Surfaced by: HF Oct 23.

- [Different Tasks, Different Timesteps: Temporal Task-Aware Quantization for Diffusion Language Models](https://arxiv.org/abs/2610.31198) — Primary abstract excerpt: “Diffusion Language Models (DLMs) introduce unique quantization challenges due to their iterative denoising process. In this work, we…”
  - Surfaced by: HF Oct 23.

- [MolLean: A Process-Verifiable Language for Chemical Reasoning](https://arxiv.org/abs/2610.20459) — Primary abstract excerpt: “Chemical chain-of-thought can contain hallucinated structural and property claims. We thereby introduce MolLean, a process-verifiable language that grounds…”
  - Surfaced by: HF Oct 23.

- [Inherited, Not Invented: Tracing the Provenance of Wait in Reasoning Models](https://arxiv.org/abs/2610.30882) — Primary abstract excerpt: “Reinforcement learning (RL) is credited with teaching reasoning models to write {wait} before reconsidering a step, yet large…”
  - Surfaced by: HF Oct 23.

- [SCOPE: Compiling Natural-Language Policies into Neurosymbolic Predicate Programs](https://arxiv.org/abs/2610.31062) — Primary abstract excerpt: “Policy enforcement for LLM agents has shifted from single-turn content moderation to compound, application-specific policies evaluated over multi-turn…”
  - Surfaced by: HF Oct 23.

- [What Makes a Good Unmasking Policy? A Controlled Study of Learned Unmasking in Diffusion Language Models](https://arxiv.org/abs/2610.31576) — Primary abstract excerpt: “Masked diffusion language models generate tokens in parallel, but their efficiency depends on which predictions are committed. Learned…”
  - Surfaced by: HF Oct 23.

- [LLM-Attack Suite: A Unified Red-Team Framework for Privacy Evaluation of Split and Distributed LLM Systems](https://arxiv.org/abs/2610.22722) — Primary abstract excerpt: “Split language models keep input text on a client but send intermediate representations to a server. Attacks can…”
  - Surfaced by: HF Oct 23.

- [Diffusion Language Models Change Speed Across Tasks and Languages](https://arxiv.org/abs/2610.25835) — Primary abstract excerpt: “Diffusion language models can write several tokens in one forward pass, and they decide during generation how many…”
  - Surfaced by: HF Oct 23.

- [Foundation4D: Towards a unified perception and reconstruction model for autonomous vehicles](https://arxiv.org/abs/2610.30340) — Primary abstract excerpt: “We introduce Foundation4D, a unified feed-forward model for geometry estimation, 3D detection, semantic occupancy, and Gaussian reconstruction from…”
  - Surfaced by: HF Oct 23.

- [Realism VS Accuracy: Event Sequence Forecasting from a Generative Modeling Perspective](https://arxiv.org/abs/2610.12586) — Primary abstract excerpt: “Event sequences are chains of random events, each described by heterogeneous (numerical and categorical) features. The problem of…”
  - Surfaced by: HF Oct 23.

- [GitSwarm: Decentralized Compounding Inference](https://arxiv.org/abs/2610.04862) — Primary abstract excerpt: “Long-horizon problem solving and scientific research require computation to accumulate across successive attempts. Partial solutions, experimental findings, and…”
  - Surfaced by: DAIR Oct 12–18.

- [LoGRA: Scaling LLM Reinforcement Learning with Low-Rank Gradient Sketches](https://arxiv.org/abs/2610.06647) — Primary abstract excerpt: “Reinforcement learning has greatly advanced the capabilities of large language models, but its memory demands remain a barrier…”
  - Surfaced by: DAIR Oct 12–18.

- [Direct Pass@$k$ Optimization for Thought Pruning: Balancing Quality and Diversity in Test-Time Reasoning](https://arxiv.org/abs/2610.31667) — Primary abstract excerpt: “Test-time scaling has emerged as a key inference strategy for reasoning models, where a model generates a large…”
  - Surfaced by: arXiv query: Reasoning and planning.

- [Causal Chain of Thought: Mitigating Attention Leakage via Context Isolation](https://arxiv.org/abs/2610.31639) — Primary abstract excerpt: “Chain-of-thought (CoT) prompting elicits step-by-step rationales that appear to explain model predictions, but there is no guarantee these…”
  - Surfaced by: arXiv query: Reasoning and planning.

- [Questioning Instrumental Convergence in RLVR: Checkpoint Evidence from OLMo-3](https://arxiv.org/abs/2610.31624) — Primary abstract excerpt: “Instrumental convergence is often invoked as a general reason to expect capable agents to acquire or express power-seeking…”
  - Surfaced by: arXiv query: Reasoning and planning.

- [VERA: A Responsible AI Dashboard for Assessing LLM Deployments in Light of the EU AI Act](https://arxiv.org/abs/2610.31588) — Primary abstract excerpt: “Institutions that deploy large language models in regulated settings often need technical evidence of responsible AI practices before…”
  - Surfaced by: arXiv query: Coding agents and software engineering.

- [From Structured Records to Patient Narratives: Preserving Clinical Alignment in LLM-Generated Health Summaries](https://arxiv.org/abs/2610.31467) — Primary abstract excerpt: “As wearable and digital health systems increasingly generate longitudinal physiological records, communicating these observations in patient-accessible language remains…”
  - Surfaced by: arXiv query: RAG and memory.

- [Cost-Aware Abstention for LLM-Based IT Ticket Classification](https://arxiv.org/abs/2610.31657) — Primary abstract excerpt: “Wrong automatic routing of an IT support ticket can cost more than human triage. We evaluate cost-aware abstention…”
  - Surfaced by: arXiv query: Evals and benchmarks.

- [Bilingual Language Models Capture Cross-Linguistic Influence in Second-Language Reading](https://arxiv.org/abs/2610.31620) — Primary abstract excerpt: “While monolingual language model (LM) surprisal is widely established as a predictor of reading times, it cannot capture…”
  - Surfaced by: arXiv query: Evals and benchmarks.

- [Diffusion Language Models for Perplexity-Aware Black-Box Attacks](https://arxiv.org/abs/2610.31558) — Primary abstract excerpt: “\emph{Continuous-space} attacks find prompts that trigger malicious behaviors, such as overthinking, in black-box LLMs by sampling or optimizing…”
  - Surfaced by: arXiv query: Evals and benchmarks.

- [An Empirical Study of Recent Large Language Models for Knowledge Graph to Text Generation on Standard Benchmarks](https://arxiv.org/abs/2610.31529) — Primary abstract excerpt: “Knowledge graph-to-text (KG-to-text) generation verbalizes a set of knowledge graph triples into fluent natural language. While fine-tuned encoder-decoder…”
  - Surfaced by: arXiv query: Evals and benchmarks.

- [Towards User Simulators That Stay On Task And Still Sound Natural](https://arxiv.org/abs/2610.31512) — Primary abstract excerpt: “Users increasingly rely on AI systems for extended, multi-turn tasks, yet evidence indicates that LLM-based system performance degrades…”
  - Surfaced by: arXiv query: Evals and benchmarks.

- [On the Token Collapse Phenomenon in Textual Graph Soft Prompting](https://arxiv.org/abs/2610.31572) — Primary abstract excerpt: “Recent methods for injecting graph structure into LLM prompts include graph soft prompting, in which a graph neural…”
  - Surfaced by: arXiv query: Post-training and alignment.

- [Reliable AI-Assisted Decisions via Selective Auditing](https://arxiv.org/abs/2610.31662) — Primary abstract excerpt: “We consider online monitoring of an AI system that produces a sequence of decisions. At each round, the…”
  - Surfaced by: arXiv query: Efficient training and inference.

- [OP-Print: Tracing Membership Imprints in On-Policy Self-Distillation](https://arxiv.org/abs/2610.31616) — Primary abstract excerpt: “On-policy distillation has been widely adopted for alleviating the distribution mismatch of off-policy distillation. Self-distillation further removes the…”
  - Surfaced by: arXiv query: Efficient training and inference.

- [Efficient and Optimal Learning of Discrete Distributions with Person-Level Privacy](https://arxiv.org/abs/2610.31612) — Primary abstract excerpt: “We study learning a discrete distribution under person-level differential privacy in the batched setting. Given $n$ users, each…”
  - Surfaced by: arXiv query: Efficient training and inference.

- [Phase Transition from Random Features to Fully Trainable Networks](https://arxiv.org/abs/2610.31663) — Primary abstract excerpt: “Constructing accurate and computationally tractable approximation spaces is a fundamental task in scientific computing. Partially trainable neural networks…”
  - Surfaced by: arXiv query: Model architecture and scaling.

- [SpectralCanary: Embarrassingly Simple Low-Frequency Traces for T2I Dataset-Use Auditing](https://arxiv.org/abs/2610.31659) — Primary abstract excerpt: “Auditing whether a text-to-image (T2I) model was fine-tuned on a particular image collection is difficult: a model can…”
  - Surfaced by: arXiv query: Model architecture and scaling.

### Memory, context and continual learning (19)

- [Deep Fusion Memory: A Chunk-Level Parametric Memory for Large Language Models](https://arxiv.org/abs/2610.25100) — Primary abstract excerpt: “Large language models need effective ways to acquire and use external knowledge beyond what they retain from pretraining.…”
  - Surfaced by: HF Oct 23.

- [Meta Expert: Cross-Layer Expert Sharing for Storage- and Retrieval-Efficient MoE](https://arxiv.org/abs/2610.27598) — Primary abstract excerpt: “As model parameters scale up, sparsely activated Mixture-of-Experts (MoE) approaches have become essential for model scaling. However, mainstream…”
  - Surfaced by: HF Oct 23.

- [Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought](https://arxiv.org/abs/2610.30755) — Primary abstract excerpt: “LLM memory is widely used in long-term conversation understanding. Agentic memory systems often use mutation, structural organization, learned…”
  - Surfaced by: HF Oct 23.

- [Cola2: Co-Adaptive Hierarchical Language Modeling with Continuous Semantic Compression and Balanced Discrete Generation](https://arxiv.org/abs/2610.31305) — Primary abstract excerpt: “Hierarchical language generation separates continuous semantic modeling from discrete text realization, but its effectiveness depends on what the…”
  - Surfaced by: HF Oct 23.

- [Rethinking Sequence Compression with Test-time Regression](https://arxiv.org/abs/2610.31574) — Primary abstract excerpt: “Sequence compression is a fundamental operation and a critical information bottleneck in efficient language and multimodal models, and…”
  - Surfaced by: HF Oct 23.

- [LongHarness: Advancing Agentic Reasoning over 100M-Token Corpora via Stateful Evidence Management](https://arxiv.org/abs/2610.13075) — Primary abstract excerpt: “Corpus-level long-context reasoning requires agents to acquire and integrate evidence across document collections that exceed their context windows.…”
  - Surfaced by: DAIR Oct 12–18.

- [Harness^2: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224) — Primary abstract excerpt: “LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement…”
  - Surfaced by: DAIR Oct 12–18.

- [Scaling Discovery Requires Forgetting](https://arxiv.org/abs/2610.20563) — Primary abstract excerpt: “Automated research with LLM agents has shown promising results in various domains. Through iterative refinement and scored verifiers,…”
  - Surfaced by: DAIR Oct 12–18.

- [Recurrent Harness for Agentic Continual Learning](https://arxiv.org/abs/2610.12668) — Primary abstract excerpt: “Language model agents increasingly operate over long interaction streams, requiring online adaptation to distribution shifts through continual learning.…”
  - Surfaced by: DAIR Oct 12–18.

- [Certified Execution Harness for Agentic AI: Safe and Least-Intrusive Petri-Net Supervisory Control Between Reasoning and Action](https://arxiv.org/abs/2610.31376) — Primary abstract excerpt: “This paper studies the problem of safe tool execution for large language model (LLM) agents under prompt injection.…”
  - Surfaced by: arXiv query: LLM agents.

- [Muffin - A Shared Memory Buffer for Asynchronous AI Agents](https://arxiv.org/abs/2610.31355) — Primary abstract excerpt: “The rise of Agentic AI systems has changed the landscape of artificial intelligence by enabling strong reasoning capabilities…”
  - Surfaced by: arXiv query: LLM agents.

- [The Value of Memory in Language Agents](https://arxiv.org/abs/2610.31303) — Primary abstract excerpt: “Memory enables language agents to carry useful distinctions from past experience into future decisions. Its value depends on…”
  - Surfaced by: arXiv query: LLM agents.

- [Low-Bit N-Gram Embeddings for Language Models](https://arxiv.org/abs/2610.31646) — Primary abstract excerpt: “Many recent open-weight language models use n-gram embedding tables to improve performance. These tables store learned representations of…”
  - Surfaced by: arXiv query: RAG and memory.

- [How Ground Truth Shapes Retrieval Scores: Evidence-Aware Evaluation of a Retrieval-Augmented Generation System for Breast Lesions](https://arxiv.org/abs/2610.31606) — Primary abstract excerpt: “Purpose: To describe an evidence-aware retrieval evaluation protocol for a clinical retrieval-augmented generation (RAG) system over breast lesion…”
  - Surfaced by: arXiv query: RAG and memory.

- [HERD: Harness-Evolving Recursive Distillation for Continual Learning](https://arxiv.org/abs/2610.31401) — Primary abstract excerpt: “Continual learning requires a model to keep acquiring new skills and knowledge without compromising its existing capabilities. Parametric…”
  - Surfaced by: arXiv query: RAG and memory.

- [When LLMs Forget What They Believe: Characterizing State Integrity Collapse in Long-Horizon Dialogues](https://arxiv.org/abs/2610.31314) — Primary abstract excerpt: “Large language models can repeat an instruction while failing to keep obeying it. We study this recall-compliance dissociation…”
  - Surfaced by: arXiv query: RAG and memory.

- [BeNice! Closing Looping's Inference-Memory Gap via KV-Sharing](https://arxiv.org/abs/2610.31633) — Primary abstract excerpt: “Looped architectures scale quality while keeping parameter count fixed by repeatedly passing activations through the same block of…”
  - Surfaced by: arXiv query: Post-training and alignment.

- [Fine-Grained Analysis of Catastrophic Forgetting in Continual Learning via Algorithmic Stability](https://arxiv.org/abs/2610.31551) — Primary abstract excerpt: “Understanding catastrophic forgetting, in which learning new tasks degrades performance on previously learned tasks, remains a fundamental challenge…”
  - Surfaced by: arXiv query: Post-training and alignment.

- [METTA: Memory-Enhanced Test-Time Adaptation for Meta-Reinforcement Learning](https://arxiv.org/abs/2610.31656) — Primary abstract excerpt: “Meta-reinforcement learning aims to train agents that adapt quickly to unseen tasks from limited interaction, but this requires…”
  - Surfaced by: arXiv query: Efficient training and inference.

### Older curriculum prerequisite (1)

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — Primary abstract excerpt: “While large language models (LLMs) have demonstrated impressive capabilities across tasks in language understanding and interactive decision making,…”
  - Surfaced by: Henry curriculum (older ReAct prerequisite).

## Source Receipts

- https://huggingface.co/papers/date/2026-10-23
- https://huggingface.co/api/daily_papers?date=2026-10-23&limit=100
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md#top-ai-papers-of-the-week-october-12---october-18---2026
- https://github.com/henrythe9th/AI-Crash-Course
- https://export.arxiv.org/api/query
- https://openreview.net/
- https://api2.openreview.net/notes?limit=20&sort=cdate:desc
- https://api.openreview.net/notes?limit=20&sort=cdate:desc
