# AI Radar Daily Feed - 2026-08-22

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 72.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.
- This is a flexible weekly menu, not a reading quota.

## Recommended Tonight

- [EnvHarness: Awakening Static Worlds for Agent Learning](https://arxiv.org/abs/2608.19880)
  - Tags: agents, harnesses, reinforcement-learning, environment-design.
  - What the paper claims: programmable environment wrappers can target an
    agent's weaknesses while retaining the underlying benchmark verifier.
  - Why builders should inspect it: it treats the environment, not only the
    agent prompt or harness, as an evolvable but auditable capability layer.
  - First reading action: inspect Setup/Rule/Link, the retained-verifier
    contract, and one held-out transfer result; code:
    https://github.com/google-research/envharness.

- [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](https://arxiv.org/abs/2608.20274)
  - Tags: agents, skills, memory, transfer.
  - What the paper claims: subtask-level text skills transfer better on average
    than task-level or code skills, while poorly induced skills can hurt.
  - Why builders should inspect it: skill libraries need a negative-transfer
    test, not only a relevance retriever.
  - First reading action: inspect the transfer matrix and the proposed
    specificity-plus-abstractness skill-utility score; no official code was
    independently verified.

- [MemTrapBench: Benchmarking Cognitive Traps in LLM Memory Use](https://arxiv.org/abs/2608.20202)
  - Tags: agents, memory, reasoning, evaluation.
  - What the paper claims: faithful, relevant memories can still induce
    reasoning fixation or belief distortion and underperform no memory.
  - Why builders should inspect it: retrieval correctness does not prove that
    retrieved experience helps the current decision.
  - First reading action: compare the no-memory controls with the strongest
    memory baselines; code: https://github.com/zjunlp/MemTrapBench.

- [AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](https://arxiv.org/abs/2608.20318)
  - Tags: agents, self-improvement, algorithm-design, benchmarks.
  - What the paper claims: a frozen-repository benchmark can distinguish
    changes to learning algorithms from peripheral code or hyperparameter work.
  - Why builders should inspect it: it raises the proof bar for claims that an
    agent improved the process that produces better models.
  - First reading action: inspect fresh formal retraining, hidden evaluation,
    and the algorithm-change taxonomy; code:
    https://github.com/Einsia/AI4AI-Bench.

- [Skaling: Chinchilla's Exponents Meet Kaplan's Coupling](https://arxiv.org/abs/2608.07222)
  - Tags: scaling-laws, pretraining, compute-allocation, foundations.
  - What the paper claims: one interaction exponent coupling model size and
    data improves the reported fit at data-scarce and overtraining extremes.
  - Why builders should inspect it: it is a compact foundational update to how
    small pretraining experiments may be extrapolated into compute decisions.
  - First reading action: compare the coupled mixed derivative and sparse-grid
    extrapolation against the additive Chinchilla form; no official code was
    independently verified.

## Full Candidate List

### Hugging Face + arXiv overlap

- [4DAnyone: Create Anyone in 4D from a Casual Monocular Video](https://arxiv.org/abs/2608.20335) — reconstructs 4D humans from monocular video with multiview-consistent generation.
- [MemTrapBench: Benchmarking Cognitive Traps in LLM Memory Use](https://arxiv.org/abs/2608.20202) — tests when relevant memories distort current reasoning.
- [Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization](https://arxiv.org/abs/2608.20281) — separates bounded-corpus injection, QA alignment, and capability recovery.

### Hugging Face Daily Papers

- [EnvHarness: Awakening Static Worlds for Agent Learning](https://arxiv.org/abs/2608.19880) — adds programmable, verifier-preserving wrappers to static agent environments.
- [FACET: Preserving Source Intent and Executable State in Terminal Task Synthesis](https://arxiv.org/abs/2608.18580) — grounds synthesized terminal tasks and verifiers in one executable state.
- [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) — evaluates repository repair across scientific software domains.
- [WithEveryone: Unified Planning and Identity Grounding for Group Image Generation](https://arxiv.org/abs/2608.20336) — grounds multiple reference identities in group-image layouts.
- [SkillEvo: Self-Renewing Evolution Gradients from Multi-Turn Interaction Feedback](https://arxiv.org/abs/2608.13120) — evolves agent skills from multi-turn failure feedback.
- [ForgeWM: Progressive Causal Training for Few-Step Action-Conditioned Video World Models](https://arxiv.org/abs/2608.14022) — distills controllable video world models into few-step causal students.
- [Repo0: Design-Driven Zero-to-All Code Generation](https://arxiv.org/abs/2608.19854) — evolves explicit repository architecture before full-project generation.
- [FlashPrefill V2: Block-Sparse Prefill Attention for Long-Context LLM Serving](https://arxiv.org/abs/2608.19758) — integrates block-sparse prefill with practical serving features.
- [Thinking in a Low-Resource Language: What SFT Builds, What RL Fixes, What Accuracy Cannot See](https://arxiv.org/abs/2608.17744) — measures reasoning-language and formatting behavior beyond accuracy.
- [EXIMO: VLM Guided Exploration of VLA Policies](https://arxiv.org/abs/2608.19891) — uses VLM planning for sample-efficient robot-policy exploration.
- [Hierarchical Self-Improvement: A Framework for Task-Specific Evolvable Agent Harnesses](https://arxiv.org/abs/2608.08466) — searches over task-specific executable agent harnesses.
- [τ_0-VLA: a Hierarchical Robot Foundation Model with World-Model-Guided Test-Time Computation](https://arxiv.org/abs/2608.16885) — applies world-model search to long-horizon robotic control.
- [Towards Quantifying Benchmark Optimization in ASR Models](https://arxiv.org/abs/2608.19936) — measures benchmark-specific optimization in speech recognition.
- [TinyCast: Probabilistic Zero-Shot Forecasting with Computed Periodicity](https://arxiv.org/abs/2608.15767) — combines a tiny forecaster with explicit periodicity computation.
- [NARU: A Benchmark for NARrative Evolution and Cultural Nuance Understanding in Japanese Extreme Long Video](https://arxiv.org/abs/2608.13210) — tests narrative change and cultural nuance in long Japanese video.
- [PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents](https://arxiv.org/abs/2608.19861) — guides policy compliance across complete agent workflows.
- [Chain-of-Experience for Continual LLM Improvement](https://arxiv.org/abs/2608.18027) — studies inference-time learning from accumulated interactions.
- [The Embedder's Dilemma: LLMs Are Better, but at What Cost?](https://arxiv.org/abs/2608.12875) — compares LLM and embedding-model quality and cost across 37 tasks.
- [QuoteBench: How Matched Scores Can Hide Command-Path Failures](https://arxiv.org/abs/2608.13547) — evaluates quoting and reparsing failures in coding-agent shell paths.
- [GOAG: Generative and Object-Agnostic Grasp Planner for Dexterous Robotic Manipulation](https://arxiv.org/abs/2608.19759) — generates object-agnostic multifinger grasps.
- [CoToGrasp: Contact-Topology-Conditioned Dexterous Grasp Synthesis via Canonical Workspace Learning](https://arxiv.org/abs/2608.19776) — conditions dexterous grasps on functional contact topology.
- [Listening Forward: Next Patch Embedding Prediction Enables Scalable Audio Learners](https://arxiv.org/abs/2608.19863) — learns audio representations through next-patch embedding prediction.
- [FlowEvo: Self-Evolving Agents through the Co-Evolution of Workflows and Executable Skills](https://arxiv.org/abs/2607.21596) — co-evolves workflows and reusable executable skills.

### Configured arXiv scan

- [AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](https://arxiv.org/abs/2608.20318) — isolates agent changes to training algorithms in frozen research repositories.
- [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](https://arxiv.org/abs/2608.20274) — studies when induced skills transfer or harm future tasks.
- [Task-CoEvolve: Efficient Harness Optimization via Adaptive Validation Task Selection](https://arxiv.org/abs/2608.20169) — focuses harness evaluation on discriminative validation tasks.
- [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](https://arxiv.org/abs/2608.19993) — optimizes skill sets under token budgets with a formal guarantee.
- [ReguSim: Evaluating LLM Agent Rule Grounding in Financial Compliance](https://arxiv.org/abs/2608.19974) — separates agent rationale, action, enforcement, and monitoring evidence.
- [Bringing analytic rigor to agentic AI for science: The Brain Researcher platform for neuroimaging data analysis](https://arxiv.org/abs/2608.19902) — embeds methodological checks and claim scope in scientific-agent workflows.
- [Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation](https://arxiv.org/abs/2608.20316) — models when expensive routing estimates justify their cost.
- [MidTool: Mid-training Data Synthesis for Agentic Tool Use](https://arxiv.org/abs/2608.20314) — synthesizes mid-training data for APIs, MCP skills, and tool workflows.
- [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](https://arxiv.org/abs/2608.20256) — trains explicit no-, short-, and long-reasoning modes.
- [Rule-Compliant Visual Spatial Planning for Multimodal Large Language Models](https://arxiv.org/abs/2608.20237) — separates perception, execution, and rule checking in visual planning.
- [ContractScrub: A benchmark for final review of legal contracts](https://arxiv.org/abs/2608.20204) — evaluates long-document contract inconsistency detection.
- [The Third Restructuring of Software Form: From the Three-Tier Architecture to Storage, Models, and Agents](https://arxiv.org/abs/2608.20201) — proposes storage, models, and agents as a software architecture.
- [From Agent Behaviour to Agent-Friendly Documentation: An Empirical Study of How Coding Agents Discover, Read, and Write Technical Documentation](https://arxiv.org/abs/2608.20195) — studies documentation behavior in coding-agent workflows.
- [BreakGuard: Towards Detecting Dependency Breaking Changes with LLM-Generated Tests](https://arxiv.org/abs/2608.20167) — generates tests for dependency breaking changes.
- [Evaluating Automated Testing on an Open-Source Web Application Using Cypress](https://arxiv.org/abs/2608.19960) — evaluates end-to-end Cypress testing on an open-source app.
- [TESTNAV: Pareto-Guided Search for Compositional Robustness Testing](https://arxiv.org/abs/2608.19882) — searches combinations of input corruptions for robustness failures.
- [Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference](https://arxiv.org/abs/2608.20210) — designs a compact language model around CPU constraints.
- [SABET-QA: Temporal Knowledge Graph Question Answering](https://arxiv.org/abs/2608.20083) — reasons over multi-step time-sensitive knowledge-graph facts.
- [Interrupting the Loop: Periodic Subject Changes Raise Judged Surprise and Connection in Base Language Models](https://arxiv.org/abs/2608.19893) — studies novelty in long base-model generation streams.
- [LoRA-GA²: Low Rank Adaptation with Multi-step Gradient Adaptive Alignment](https://arxiv.org/abs/2608.19800) — aligns low-rank adaptation with multi-step gradients.
- [ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models](https://arxiv.org/abs/2608.20338) — evaluates unlearning across harmful and benign contexts.
- [G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation](https://arxiv.org/abs/2608.20331) — aligns patient-facing reports to grounded clinical checklists.
- [An Agentic Approach for Active Data Collection, Travel Behavior Modeling, and Weather-Sensitive Demand Prediction](https://arxiv.org/abs/2608.20320) — combines conversational data collection and auditable demand modeling.
- [Phantom Gains: Auditing Self-Improvement Against a Measured Null](https://arxiv.org/abs/2608.20290) — requires frozen-control nulls for per-problem self-improvement claims.
- [Explainable Transformer Models for Clinical Prediction Tasks on Structured Electronic Health Records](https://arxiv.org/abs/2608.20315) — combines laboratory-value tokens with input-grounded attributions.
- [Physical-Support Confidence Sets for Highly Coherent Dictionaries](https://arxiv.org/abs/2608.20295) — quantifies uncertainty in physical interpretations of sparse supports.
- [DICS: Data-Informed Centroid Splitting for Decision Tree Classifiers](https://arxiv.org/abs/2608.20258) — reduces tree split search with class-aware candidate priors.
- [Gravitational-wave parameter estimation with machine-learning generated surrogate waveforms](https://arxiv.org/abs/2608.20222) — tests fast surrogate waveforms and downstream inference bias.
- [Inter-X++: A Comprehensive Benchmark for Multimodal Human-Human Interaction Analysis](https://arxiv.org/abs/2608.20312) — unifies motion, contact, language, and social interaction annotations.
- [DreamHand: Repurposing Video Diffusion Models for Occlusion-Robust Egocentric 3D Hand Motion Recovery](https://arxiv.org/abs/2608.20308) — uses video-diffusion latents for occlusion-robust hand geometry.
- [Towards Surgical World-Action Modeling: A Preliminary Joint Visual-Trajectory Forecasting for Surgical Motion Planning](https://arxiv.org/abs/2608.20284) — jointly predicts surgical scenes and instrument trajectories.
- [Catching the Rug: Early Prediction of Fraudulent Memecoins on Solana via Machine Learning](https://arxiv.org/abs/2608.20271) — predicts short-horizon rug-pull risk from early trading data.

### DAIR.AI Papers of the Week

- [Skaling: Chinchilla's Exponents Meet Kaplan's Coupling](https://arxiv.org/abs/2608.07222) — couples model size and data in a revised scaling law.
- [Stealing Reasoning Traces from Proprietary LLM APIs](https://arxiv.org/abs/2608.09867) — demonstrates attacks against interchangeable encrypted reasoning blocks.
- [Mind Viruses: Self-Propagating Ideas in Multi-Agent LLM Systems](https://arxiv.org/abs/2608.10218) — studies evolved ideas that spread across agent networks.
- [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](https://arxiv.org/abs/2608.11095) — traces instruction-file growth to lost rationale.
- [The Bitter Lesson of Tool Calling](https://arxiv.org/abs/2608.06370) — compares programmatic and JSON tool interfaces.
- [Reason Wide, Not Deep: Amortizing the Reasoning Premium into Distilled Skills](https://arxiv.org/abs/2608.07885) — distills cross-episode reasoning into reusable skills.
- [Harness-IF: Evaluating Instruction Following Across Instruction Surfaces in Coding Agents](https://arxiv.org/abs/2608.11727) — evaluates rules across coding-agent instruction surfaces.
- [Lost in Compaction: Evaluating Side-Constraint Loss under Context Compaction](https://arxiv.org/abs/2608.11242) — measures persistent-constraint loss during compaction.
- [Cracks in the Foundation: Seemingly Minor Architectural Choices Impact Long Context Extension](https://arxiv.org/abs/2608.10296) — tests compounded architectural effects on long-context extension.
- [CEDAR: Agent-Orchestrated Tree Search for Goal-Directed Optimization of Complex Systems](https://arxiv.org/abs/2608.06871) — searches executable feedback structures with agents and tree search.

### OpenReview relevance search

- [Comparative Analysis of Agent Evaluation Frameworks](https://openreview.net/forum?id=8QmjOvWuXE) — compares trace-based, text-only, and deterministic evaluation frameworks.
- [A Protocol-Driven Platform for Agent-Agnostic Evaluation of LLM Agents](https://openreview.net/forum?id=G9YKfCddN3) — standardizes agent evaluation through a minimal integration protocol.
- [Accuracy Masking in LLM-as-Judge Evaluation: Dimension-Level Failures in Web-Agent Trajectory Assessment](https://openreview.net/forum?id=Cm1bd917HK) — shows headline accuracy can conceal side-effect evaluation failures.
- [How Many Tasks Are Enough for Agent Benchmark Decisions? A Replay Analysis of Public LLM Agent Benchmarks](https://openreview.net/forum?id=n1WYndFCkb) — estimates when partial benchmark runs preserve decisions and coverage.

## Source Receipts

- https://huggingface.co/papers/date/2026-08-21
- https://github.com/dair-ai/AI-Papers-of-the-Week
- https://github.com/henrythe9th/AI-Crash-Course
- https://export.arxiv.org/api/query
- https://openreview.net/
