# AI Radar Daily Feed - 2026-10-17

Public-safe weekly paper discovery from AI Radar. This is a flexible evening menu; choose how many papers merit a closer look.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 95 (84 HF October 16 + 10 DAIR October 5–11 + one older curriculum selection).
- Recommended tonight: 5 optional papers.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week, Henry Shi’s AI Crash Course, arXiv, and OpenReview.
- Coverage limits: arXiv query endpoint rate-limited or timed out; OpenReview notes APIs returned HTTP 403. DAIR’s October 12–18 issue was not yet listed; Henry’s curriculum last changed February 23. No new query-discovered arXiv or resolved current-week OpenReview candidate. All 95 primary paper pages returned HTTP 200.
- Deduplication uses version-normalized arXiv ID, then DOI, then normalized title. No same-run independent source overlap; primary-URL verification does not add discovery overlap. MuZero is an older foundation, not a current release.
- Evidence level: primary abstracts screened; no experiments reproduced and no acceptance status inferred.

## Recommended Tonight

- [Mosaic: Multi-Session Agentic Reinforcement Learning](https://arxiv.org/abs/2610.22174)
  - Tags: reinforcement-learning, experience-grounded-learning.
  - What the paper claims: Assigns credit across agent sessions instead of broadcasting one advantage.
  - Why builders should inspect it: Tests whether compaction and subagent sessions can receive useful learning credit rather than sharing a single trajectory reward.
  - First reading action: Hierarchical advantage construction, marginal session contribution estimates, compaction/forking comparisons, and matched-budget BrowseComp evaluation.
  - Code / evidence: Discovery-linked repository returned HTTP 200; implementation and results not reproduced. https://github.com/LARK-AI-Lab/Mosaic

- [ANTE: Anticipate, Then Execute -- Learning Internal World Models for Coding Agents from Verified Beliefs](https://arxiv.org/abs/2610.15368)
  - Tags: world-models, planning.
  - What the paper claims: Verifies pre-action beliefs to train predictive coding-agent policies.
  - Why builders should inspect it: Connects world-model learning to coding agents by checking what an edit is predicted to do before using the outcome as feedback.
  - First reading action: Belief-Anchored Policy Optimization, belief verification, abstention decisions, matched GRPO ablation, and inference action selection.
  - Code / evidence: No code repository verified in the retrieved primary abstract or discovery record; do not assume availability.

- [Agent Plasticity: Measuring Self-Improvement Through Experience](https://arxiv.org/abs/2610.08902)
  - Tags: agent-evaluation, reliable-ai-systems.
  - What the paper claims: Measures held-out improvement per learning cost rather than endpoint capability alone.
  - Why builders should inspect it: Provides a measurement discipline for experience-driven agents: does learning improve held-out performance efficiently?
  - First reading action: Plasticity definition, learning-cost accounting, held-out environment protocol, artifact inheritance, and reuse-versus-quality failure analysis.
  - Code / evidence: Primary abstract verified; no executable release verified in this pass.

- [Continuous Memory Machines](https://arxiv.org/abs/2610.07907)
  - Tags: memory, context-engineering.
  - What the paper claims: Separates short-term computation and long-term retention in recurrent matrix memories.
  - Why builders should inspect it: Provides a distinct architectural route to persistent memory, beyond adding more text to an agent context.
  - First reading action: Short- and long-term matrix-state update rules, Transformer read/write interface, algorithmic-task baselines, and length-generalization experiments.
  - Code / evidence: Paper-linked repository returned HTTP 404 at run time. Paper evidence is available; runnable code is currently unverified. https://github.com/SakanaAI/continuous-memory-machines

- [FDE-Gym: The Last Mile of AI Delivery](https://arxiv.org/abs/2610.22350)
  - Tags: agent-evaluation, reliable-ai-systems.
  - What the paper claims: Tests delivery under ambiguous requirements and hidden customer constraints.
  - Why builders should inspect it: Broadens agent evaluation from solving a clear ticket to discovering constraints and delivering a useful result.
  - First reading action: Customer scenario construction, hidden-constraint protocol, stakeholder interaction penalties, business-uplift scoring, and failure breakdown.
  - Code / evidence: Discovery-linked repository returned HTTP 200; environments and scoring not executed. https://github.com/deeplethe/fde-gym

## Full Candidate List

Every deduplicated candidate from the bounded reads. Source labels preserve independent discovery; brief claims are abstract paraphrases.

### Learning, reasoning, and post-training (11)

- [Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation](https://arxiv.org/abs/2610.21601) — Distills teacher policy shifts using gated on-policy updates. Sources: HF Oct 16.
- [Each Reward to Its Relevant Tokens: Reward-Specific Token-Level Credit Assignment for Multi-Reward RL](https://arxiv.org/abs/2610.21439) — Assigns separate reward signals to their relevant tokens. Sources: HF Oct 16.
- [Mosaic: Multi-Session Agentic Reinforcement Learning](https://arxiv.org/abs/2610.22174) — Assigns credit across agent sessions instead of broadcasting one advantage. Sources: HF Oct 16.
- [Routing Policy Optimization for Online Diffusion Reinforcement Learning](https://arxiv.org/abs/2610.22282) — Optimizes routing policies during online diffusion reinforcement learning. Sources: HF Oct 16.
- [Learning Self-Orchestration in Decentralized Agent Swarms](https://arxiv.org/abs/2610.22322) — Learns bids and actions for decentralized agent coordination. Sources: HF Oct 16.
- [Beyond Policy Rollouts: Embedding-Space Directional Exploration with Anchored Noise for LLM RLVR](https://arxiv.org/abs/2610.16105) — Explores policy updates along directions in embedding space. Sources: HF Oct 16.
- [LeanPRM: Lean-Grounded Process Supervision for Natural Language Proof Verification](https://arxiv.org/abs/2610.17697) — Grounds natural-language proof supervision in Lean verification. Sources: HF Oct 16.
- [SERO: Learning from Executable Oracle Continuations for Long-Horizon Agentic Reinforcement Learning](https://arxiv.org/abs/2610.19397) — Learns from executable oracle continuations rooted in policy-reached states. Sources: HF Oct 16.
- [Skill-Decoupled On-Policy Expert Distillation for Unified Vision-Language Models](https://arxiv.org/abs/2610.22217) — Distills separate expert skills into unified vision-language models. Sources: HF Oct 16.
- [Recursive Self-Improvement through Multi-Agent Self-Supervision](https://arxiv.org/abs/2610.12176) — Alternates orchestration search with training on multi-agent traces. Sources: DAIR Oct 5–11.
- [Sharpening Tax in Post-Training](https://arxiv.org/abs/2610.01509) — Measures the solution-coverage cost of sharpened post-training policies. Sources: DAIR Oct 5–11.

### Agent systems, tools, and environments (25)

- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://arxiv.org/abs/2610.22200) — Lets models choose visual and programmatic computer interaction. Sources: HF Oct 16.
- [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) — Formalizes persistent harness revision with conditional generalization and retention guarantees. Sources: HF Oct 16.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://arxiv.org/abs/2610.20939) — Combines mobile and desktop GUI evaluation with reinforcement-learning infrastructure. Sources: HF Oct 16.
- [AutoSFT: An Agentic System for Automated Data Research in Supervised Fine-Tuning](https://arxiv.org/abs/2610.22194) — Automates data research for supervised fine-tuning. Sources: HF Oct 16.
- [Data World: Scaling Data Environments from Scratch](https://arxiv.org/abs/2610.21656) — Scales constructed data environments for agents. Sources: HF Oct 16.
- [EdgeWise: Bringing Long-Horizon Agents to the Edge via Selective Cloud Delegation](https://arxiv.org/abs/2610.17560) — Delegates selected long-horizon decisions from edge devices to cloud models. Sources: HF Oct 16.
- [MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering](https://arxiv.org/abs/2610.22344) — Develops a generalist agent for machine-learning engineering. Sources: HF Oct 16.
- [Terminal-RSI: Recursive Self-Improving Terminal Agents via Recursive Self-Rewrite and Policy-Refine](https://arxiv.org/abs/2610.22192) — Combines terminal-agent self-rewriting with policy refinement. Sources: HF Oct 16.
- [Trajectory-Level Speculation with Semantic Verification for Tool-Using Agents](https://arxiv.org/abs/2610.21463) — Speculates over tool-use trajectories with semantic checks. Sources: HF Oct 16.
- [JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs](https://arxiv.org/abs/2610.21412) — Calibrates delegation between decision models and language-model agents. Sources: HF Oct 16.
- [SWE-at-Scale: Scalable Issue Synthesis from Historical Bug Fixes](https://arxiv.org/abs/2610.21359) — Synthesizes software issues from historical fixes. Sources: HF Oct 16.
- [Athanor: An Agent-Native System for Autonomous Post-Training Research](https://arxiv.org/abs/2610.21055) — Automates experimental work on model post-training. Sources: HF Oct 16.
- [Cowork-Gym: Synthesizing Interactive Work Environments at Scale](https://arxiv.org/abs/2610.17670) — Synthesizes interactive work environments at scale. Sources: HF Oct 16.
- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://arxiv.org/abs/2610.22280) — Escalates uncertain computer-use decisions to stronger models. Sources: HF Oct 16.
- [MMSearch-OPD: Easy Made Hard, Hard Made Learnable for Long-Horizon Multimodal Search Agents](https://arxiv.org/abs/2610.22240) — Uses on-policy distillation for long-horizon multimodal search. Sources: HF Oct 16.
- [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](https://arxiv.org/abs/2610.06829) — Uses conformal verification for web-agent training and inference. Sources: HF Oct 16.
- [Scalable Weak-to-Strong Verifier Hardening for Agent Environments](https://arxiv.org/abs/2610.15924) — Hardens agent-environment verifiers through weak-to-strong training. Sources: HF Oct 16.
- [Recursive Environment Scaling for General Long-Horizon Agents](https://arxiv.org/abs/2610.16397) — Recursively scales environments for long-horizon agent learning. Sources: HF Oct 16.
- [A team of Gemini 4 Argon agents beats Minecraft](https://arxiv.org/abs/2610.22319) — Reports a team of agents completing Minecraft. Sources: HF Oct 16.
- [TimeRSI: Towards Self-Improved Agentic Deployment for Time-Series Foundation Models](https://arxiv.org/abs/2610.19725) — Self-improves agentic deployment of time-series models. Sources: HF Oct 16.
- [AI-Driven, Timing-Aware Power Optimization](https://arxiv.org/abs/2610.18890) — Uses AI for timing-aware hardware power optimization. Sources: HF Oct 16.
- [Harness Learning Enables Generalizable Test-Time Adaptation](https://arxiv.org/abs/2609.35738) — Trains a proposer to adapt executable harnesses from feedback. Sources: DAIR Oct 5–11.
- [Harness Engineering for Software Engineering via Modular Executable Dev-Primitives](https://arxiv.org/abs/2610.07832) — Makes repository components active participants in software-engineering work. Sources: DAIR Oct 5–11.
- [VERA: Scaling Verifiable Environments for Agentic co-Evolution](https://arxiv.org/abs/2610.05923) — Builds verifiable restartable environments for model and harness co-evolution. Sources: DAIR Oct 5–11.
- [MIMESIS: Learning User Simulators as Training Environments for Interactive Agents](https://arxiv.org/abs/2610.09484) — Trains user simulators from human interactions for agent learning. Sources: DAIR Oct 5–11.

### World models, spatial reasoning, and robotics (22)

- [MJev-Spatial: System One Spatial Intelligence via Native Attention Matching](https://arxiv.org/abs/2610.22276) — Uses attention matching for fast spatial decisions. Sources: HF Oct 16.
- [RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment](https://arxiv.org/abs/2610.17665) — Tests spatial reasoning by interactively aligning projections. Sources: HF Oct 16.
- [InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views](https://arxiv.org/abs/2610.20341) — Analyzes and improves feed-forward Gaussian splatting from varied views. Sources: HF Oct 16.
- [3DCodeVerse: Exploring 3D Worlds as Code](https://arxiv.org/abs/2610.22341) — Represents and explores three-dimensional environments through code. Sources: HF Oct 16.
- [VLA-$\Delta$: Learning Physical State Transition for Vision-Language-Action Models](https://arxiv.org/abs/2610.21306) — Supervises physical state changes to improve vision-language-action training. Sources: HF Oct 16.
- [Can World and Action Modeling Benefit Each Other under Unified Causal Training?](https://arxiv.org/abs/2610.21095) — Studies joint causal training for world prediction and action. Sources: HF Oct 16.
- [Orbia: Do Generated Videos Form a Consistent 3D World?](https://arxiv.org/abs/2610.20693) — Tests whether generated videos maintain consistent three-dimensional structure. Sources: HF Oct 16.
- [WorldCast: Exploring Intelligent Visual Generation in World State Prediction](https://arxiv.org/abs/2610.20731) — Studies visual generation as future world-state prediction. Sources: HF Oct 16.
- [OmniVerifier-C1: Decomposed Graded Verifier for Rule-Governed Generative World Modeling](https://arxiv.org/abs/2610.22355) — Decomposes verification for rule-governed generated worlds. Sources: HF Oct 16.
- [Velox: Spatial Memory Makes World Models Efficient](https://arxiv.org/abs/2610.22311) — Adds spatial memory to improve world-model efficiency. Sources: HF Oct 16.
- [Do Better Visual Representations Always Lead to Better End-to-End Autonomous Driving?](https://arxiv.org/abs/2610.09695) — Tests the connection between visual representations and driving performance. Sources: HF Oct 16.
- [SimVTA: Simulation-Grounded Video-Trajectory Alignment for Driving World Action Models](https://arxiv.org/abs/2610.13781) — Aligns video and driving trajectories using simulation. Sources: HF Oct 16.
- [CarryOn: A Dual-Loop Harness for Personalized and Reliable Robot Assistance](https://arxiv.org/abs/2610.21453) — Combines personalized planning with reliable robotic execution. Sources: HF Oct 16.
- [CoDA: Co-Evolution of Data Engines and Action Policies](https://arxiv.org/abs/2610.22362) — Co-evolves data generation and robot action policies. Sources: HF Oct 16.
- [SUPRA-TEX: 3D Generation with Super-Aligned Texture](https://arxiv.org/abs/2610.22352) — Aligns textures during three-dimensional generation. Sources: HF Oct 16.
- [Gen4P: Video Generators are 4D Perceivers](https://arxiv.org/abs/2610.22371) — Uses video generators for four-dimensional perception. Sources: HF Oct 16.
- [PathFM: Fast Generative Forecasting of Multivariate Trajectories](https://arxiv.org/abs/2610.22358) — Generates multivariate future trajectories efficiently. Sources: HF Oct 16.
- [ANTE: Anticipate, Then Execute -- Learning Internal World Models for Coding Agents from Verified Beliefs](https://arxiv.org/abs/2610.15368) — Verifies pre-action beliefs to train predictive coding-agent policies. Sources: HF Oct 16.
- [CoWorld Reasoner: Agentic Multimodal Reasoning with the Evolving Video World Model-Driven Harness](https://arxiv.org/abs/2610.21910) — Uses evolving visual-imagination tools for multimodal reasoning. Sources: HF Oct 16.
- [PINT: A Unified Model with Shared Predictive Intent for Robot Manipulation](https://arxiv.org/abs/2610.16355) — Shares predictive intent across robot-manipulation tasks. Sources: HF Oct 16.
- [SimForcing: Distilling Simulation Motion Priors into Real-Domain Robot World Models](https://arxiv.org/abs/2610.06598) — Distills simulated motion priors into robot world models. Sources: HF Oct 16.
- [PAIR: Bridging Perception and Action in Vision-Language-Action Models](https://arxiv.org/abs/2610.09016) — Connects visual perception to action in robotic models. Sources: HF Oct 16.

### Multimodal generation and perception (17)

- [OmniCompass: A Holistic Benchmark for Omni-Modal Video Grounding and Understanding](https://arxiv.org/abs/2610.18829) — Benchmarks grounding and understanding across video modalities. Sources: HF Oct 16.
- [Learning Where to Split: Dynamic Band Splitting for Audio Source Separation](https://arxiv.org/abs/2610.14993) — Learns how to divide audio bands for source separation. Sources: HF Oct 16.
- [SCOPE: Semantic Bounded Credit Optimization for Prompt Engineering in Text-to-image Generation](https://arxiv.org/abs/2610.22264) — Optimizes image-generation prompts through bounded semantic credit assignment. Sources: HF Oct 16.
- [Speculative Forcing for Efficient Autoregressive Video Generation](https://arxiv.org/abs/2610.22347) — Accelerates autoregressive video generation with speculative computation. Sources: HF Oct 16.
- [CommerceGen-Studio: An End-to-End Framework for Commercial-Grade Main-Image Generation](https://arxiv.org/abs/2610.20603) — Combines stages of commercial product-image generation. Sources: HF Oct 16.
- [Intern Lumina U2: A Multi-Codebook Diffusion Large Language Model for Omni-Visual Understanding and Image Generation](https://arxiv.org/abs/2610.20818) — Unifies visual understanding and generation with multiple discrete codebooks. Sources: HF Oct 16.
- [DeltaStreamer: Towards Human-Like Agentic Streaming Video Understanding](https://arxiv.org/abs/2610.19849) — Processes streaming video through agentic updates. Sources: HF Oct 16.
- [InfoVis: Unified Slide Image Generation and Editing](https://arxiv.org/abs/2610.16784) — Combines slide-image creation and editing. Sources: HF Oct 16.
- [Intern-Decision: Efficient Multimodal Decision Making with Autoregressive Masked Language Modeling](https://arxiv.org/abs/2610.22131) — Uses autoregressive masked modeling for multimodal decision-making. Sources: HF Oct 16.
- [MFVSR: A Multi-Style and Fine-Grained Benchmark for Video Subtitle Removal](https://arxiv.org/abs/2610.18461) — Benchmarks removal of video subtitles across styles and fine-grained cases. Sources: HF Oct 16.
- [Mine, Sample, Render: Test-Time Diversity Alignment Of Generative Models](https://arxiv.org/abs/2610.21185) — Aligns generation diversity through test-time sampling and rendering. Sources: HF Oct 16.
- [H-DDCM: Hadamard Codebooks for Fast Generative Image and Video Compression](https://arxiv.org/abs/2610.18125) — Uses Hadamard codebooks for generative visual compression. Sources: HF Oct 16.
- [RepForcing: Representation-Space Initialization for Autoregressive Video Distillation](https://arxiv.org/abs/2610.20111) — Initializes video distillation in representation space. Sources: HF Oct 16.
- [ForcingBooster: Adaptive Patch-wise Denoising for Fast Autoregressive Video Diffusion](https://arxiv.org/abs/2610.12625) — Adapts patch-level denoising for faster autoregressive video diffusion. Sources: HF Oct 16.
- [VascuSR: Iterative Anatomy-Aware Diffusion for CT Super-Resolution](https://arxiv.org/abs/2610.20509) — Applies anatomy-aware diffusion to CT super-resolution. Sources: HF Oct 16.
- [EVA-Cap: Optimizing Audiovisual Video Captioning via Event-Centric Alignment](https://arxiv.org/abs/2610.22186) — Aligns video captioning around audiovisual events. Sources: HF Oct 16.
- [Speech event detector: Timestamped detection of non-verbal vocalizations and background sounds for rich speech transcription](https://arxiv.org/abs/2610.14232) — Detects timestamped nonverbal vocalizations and background sounds. Sources: HF Oct 16.

### Architecture, efficiency, and foundations (10)

- [Behavioral Compositionality of Sparse Autoencoder Representations](https://arxiv.org/abs/2610.21261) — Measures feature interactions beyond additive sparse-autoencoder explanations. Sources: HF Oct 16.
- [Virtual Head Attention](https://arxiv.org/abs/2610.17959) — Studies attention computation through virtual heads. Sources: HF Oct 16.
- [FlashMask-3: Efficient and Expressive Mask-Aware Distributed Attention](https://arxiv.org/abs/2610.17901) — Optimizes distributed attention with expressive masking. Sources: HF Oct 16.
- [Copy-Paste Language Models](https://arxiv.org/abs/2610.19247) — Studies language models with a copying mechanism. Sources: HF Oct 16.
- [PN-Mix: Pair-Norm Guided Mixed-Precision Key Cache Quantization for Efficient Long-Output LLM Inference](https://arxiv.org/abs/2610.19605) — Quantizes attention key caches using pair-norm guidance. Sources: HF Oct 16.
- [Learning to Read Out: Unembedding Dynamics in Language Model Pretraining](https://arxiv.org/abs/2610.21025) — Separates hidden-state task information from the readout learning to express it. Sources: HF Oct 16.
- [Explaining the Roles of Experts in Mixture-of-Experts LLMs for Personalization](https://arxiv.org/abs/2610.22127) — Examines expert roles in personalized mixture-of-experts models. Sources: HF Oct 16.
- [When the KV Cache Is Slower Than the GPU: Scaling Remote KV Tiers for Context-Parallel Prefill](https://arxiv.org/abs/2610.21500) — Studies remote key-value cache bottlenecks during parallel prefill. Sources: HF Oct 16.
- [Diminishing Returns of Data in Sparse Autoencoders: Functional Behavior does not Guarantee Feature Reproducibility](https://arxiv.org/abs/2610.20680) — Distinguishes sparse-autoencoder behavioral convergence from reproducible feature recovery. Sources: HF Oct 16.
- [Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265) — Learns a model supporting planning without supplied environment dynamics. Sources: Henry curriculum.

### Memory and retrieval (3)

- [Memory as Weights: Internalizing Long-Term History for Streaming Videos](https://arxiv.org/abs/2610.22070) — Consolidates streaming video history into evolving lightweight model weights. Sources: HF Oct 16.
- [Follow the Entities: A Corpus Map for Agentic Search](https://arxiv.org/abs/2609.37226) — Links documents through recurring entities for agentic search. Sources: DAIR Oct 5–11.
- [Continuous Memory Machines](https://arxiv.org/abs/2610.07907) — Separates short-term computation and long-term retention in recurrent matrix memories. Sources: DAIR Oct 5–11.

### Evaluation and reliability (7)

- [FDE-Gym: The Last Mile of AI Delivery](https://arxiv.org/abs/2610.22350) — Tests delivery under ambiguous requirements and hidden customer constraints. Sources: HF Oct 16.
- [Calibrated Typed Decisions for Entity, Relation, and Event Extraction](https://arxiv.org/abs/2610.17113) — Calibrates structured extraction decisions across entities, relations, and events. Sources: HF Oct 16.
- [WorldMemBench: A Comprehensive Benchmark for Memory of Video World Models](https://arxiv.org/abs/2610.19063) — Separates static retention from dynamic state persistence in generated worlds. Sources: HF Oct 16.
- [Equal CER, Unequal Damage: Severity-Weighted Character Error Rate for OCR](https://arxiv.org/abs/2610.20461) — Weights OCR errors by their downstream severity. Sources: HF Oct 16.
- [One Bias Score, Two Factors: How Mitigations Affect Option Bias in Multiple-Choice Evaluation](https://arxiv.org/abs/2610.20993) — Separates factors behind option bias in multiple-choice evaluation. Sources: HF Oct 16.
- [VeriHarness: Scaling Agentic Verification for Long-Horizon Tasks](https://arxiv.org/abs/2610.00972) — Checks both disagreements and shared errors across agent rollouts. Sources: DAIR Oct 5–11.
- [Agent Plasticity: Measuring Self-Improvement Through Experience](https://arxiv.org/abs/2610.08902) — Measures held-out improvement per learning cost rather than endpoint capability alone. Sources: DAIR Oct 5–11.

## Source Receipts

- Hugging Face October 16 HTML: https://huggingface.co/papers/date/2026-10-16
- Hugging Face October 16 API (limit 100; 84 records, exact HTML ID equality): https://huggingface.co/api/daily_papers?date=2026-10-16&limit=100
- DAIR.AI latest listed issue: https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md#top-ai-papers-of-the-week-october-5---october-11---2026
- Henry Shi curriculum: https://github.com/henrythe9th/AI-Crash-Course
- arXiv query endpoint: https://export.arxiv.org/api/query — four rate-limited scanner attempts on the first query; nine bounded independent query reads produced seven rate limits and two timeouts; no query candidates.
- OpenReview venue index: https://openreview.net/ — readable. Notes APIs https://api2.openreview.net/notes?limit=20&sort=tcdate:desc and https://api.openreview.net/notes?limit=20&sort=tcdate:desc returned HTTP 403; bounded indexed fallback did not resolve a current-week primary forum URL. Older unresolved leads excluded.
- Semantic Scholar not used; citation expansion was not needed. GitHub checked only for implementation evidence.
