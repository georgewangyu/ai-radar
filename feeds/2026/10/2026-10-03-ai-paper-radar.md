# AI Radar Daily Feed - 2026-10-03

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 126 from 136 cross-source entries.
- Recommended tonight: 5, as a flexible reading menu.
- Sources checked: Hugging Face October 2: 84 papers (API limit=100 reconciled with all 84 HTML paper headings); DAIR.AI latest September 21–27 issue: 10 papers; arXiv: all nine configured queries, six results per query, 42 unique papers; Henry Shi’s AI Crash Course: curriculum/foundational lane checked.
- Source limits: OpenReview home/venue inventory was readable, but both notes APIs returned HTTP 403; a bounded indexed search established no current-week candidate. DAIR.AI’s September 28–October 4 issue was not yet listed. Henry’s course last commit is February 23, 2026 and is used as a foundational map, not a fresh-paper feed. Semantic Scholar was unnecessary for this bounded menu.
- Evidence: primary arXiv abstract pages for all 126 candidates returned HTTP 200. Claims remain author-reported; repositories were not executed and venue acceptance was not inferred.

## Recommended Tonight

- [From Knowledge Access to Source Learning: Developing Source-Specific Competence](https://arxiv.org/abs/2610.02150)
  - Tags: agents, continual-learning, source-learning, memory.
  - What the paper claims: SourceLearn refines a persistent source model through self-directed revisits and task feedback, rebuilding updates from authoritative source material.
  - Why builders should inspect it: It tests whether repeated source use can develop competence, linking experience-grounded learning with reliable retrieval.
  - First reading action: Source-model representation, the two update mechanisms, five-benchmark protocol, and ablations.
  - Evidence / code: Paper-linked repository reachable; reported five-benchmark, three-backbone comparisons have not been reproduced. https://github.com/luchengfu6/SourceLearn

- [Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States](https://arxiv.org/abs/2610.01415)
  - Tags: agents, belief-states, context-engineering, reliability.
  - What the paper claims: PoS maintains explicit beliefs about current state and unresolved requirements, validates consistency, and detects stalled progress for targeted recovery.
  - Why builders should inspect it: It offers a concrete alternative to retaining more history when a long-running agent loses track of what is true or unfinished.
  - First reading action: Belief-state schema, consistency checks, Belief Trapping detection/recovery, and context-growth ablations.
  - Evidence / code: Hugging Face links the reachable PoS repository; author-reported evaluation covers four benchmarks and three backbones. https://github.com/luoyu100/PoS

- [ActiveSaddler: Automated Curriculum Learning for Agent Harness Optimization](https://arxiv.org/abs/2610.00906)
  - Tags: agents, curriculum-learning, experience-grounded-learning, harness-optimization.
  - What the paper claims: ActiveSaddler treats training-scenario selection as a changing bandit problem and adapts failure-pattern targets alongside harness optimization.
  - Why builders should inspect it: It makes the choice of what to learn from part of the improvement loop, useful when improvement loops must adapt to new failures.
  - First reading action: Failure-pattern arms, progress estimator, scenario-selection policy, fixed-curriculum comparison, and ablations.
  - Evidence / code: The abstract reports GAIA2 and Terminal-Bench 2.0 experiments and ablations; no official code repository was verified.

- [On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics](https://arxiv.org/abs/2609.35259)
  - Tags: distillation, post-training, reinforcement-learning, generalization.
  - What the paper claims: The study independently varies rollout policy, KL direction, and learning rate, finding that objective and optimization settings qualify on-policy benefits.
  - Why builders should inspect it: It provides a controlled foundations paper for judging claims that on-policy learning inherently forgets less or generalizes better.
  - First reading action: Factorial experimental design, forward/reverse KL analysis, forgetting metrics, and harder Countdown transfer before and after RLVR.
  - Evidence / code: Primary abstract describes Llama3/Qwen2.5 comparisons and robustness checks; no official code repository was verified.

- [Learning What to Recall: Adaptive Multi-Cue Episodic Memory for World Models](https://arxiv.org/abs/2609.34677)
  - Tags: world-models, episodic-memory, representation-learning, experience-grounded-learning.
  - What the paper claims: Future-Aware Recall learns which memories and retrieval cues predict future observations during training while keeping inference retrieval future-blind.
  - Why builders should inspect it: It links learned experience to selective recall and broadens the menu beyond language-agent harnesses.
  - First reading action: Future-aware training supervision, cue scoring, future-blind inference boundary, three-setting comparisons, and cue ablations.
  - Evidence / code: Hugging Face links Sony’s reachable FAR repository; three-setting results are author-reported and not reproduced. https://github.com/sony/far

## Full Candidate List

All 126 candidates appear once; source sets preserve independent discovery. Primary-page verification does not add a discovery source.

### Hugging Face October 2 — 84 candidates (10 also arXiv)

- [OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction](https://arxiv.org/abs/2610.01762) — Focus: memory-and-context, multimodal. Discovery: HF Oct 2.

- [On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics](https://arxiv.org/abs/2609.35259) — Focus: distillation, post-training, reinforcement-learning, generalization. Discovery: HF Oct 2.

- [GraphForge: Training Working Agents with Graph-Anchored Workspace Synthesis](https://arxiv.org/abs/2609.38923) — Focus: agents. Discovery: HF Oct 2.

- [Adaptive Reward Routing: Dynamic Multi-Reward Optimization for Joint Audio-Video Diffusion via Forward-Process RL](https://arxiv.org/abs/2609.37200) — Focus: learning, multimodal, architecture-and-efficiency. Discovery: HF Oct 2.

- [Hierarchical Continuous Diffusion Language Models](https://arxiv.org/abs/2610.02193) — Focus: architecture-and-efficiency. Discovery: HF Oct 2, arXiv configured scan.

- [Sharpening Tax in Post-Training](https://arxiv.org/abs/2610.01509) — Focus: learning. Discovery: HF Oct 2.

- [Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States](https://arxiv.org/abs/2610.01415) — Focus: agents, belief-states, context-engineering, reliability. Discovery: HF Oct 2.

- [Agent Priors-guided Policy Learning](https://arxiv.org/abs/2609.35690) — Focus: agents, learning. Discovery: HF Oct 2.

- [World Observer: Joint Actor-Observer Generation for Persistent World Modeling](https://arxiv.org/abs/2610.02162) — Focus: world-models. Discovery: HF Oct 2.

- [A Missing Piece for Trustworthy AI Reviewers: From Benchmarking Rhetorical Robustness to SciCore Review](https://arxiv.org/abs/2609.39027) — Focus: evaluation. Discovery: HF Oct 2.

- [Transformers Stop Thinking Too Early, and a Tiny LoRA Fixes It](https://arxiv.org/abs/2609.36585) — Focus: architecture-and-efficiency. Discovery: HF Oct 2.

- [ROWBench: Do Video Models Render What the Program Specifies?](https://arxiv.org/abs/2610.02205) — Focus: evaluation, multimodal. Discovery: HF Oct 2, arXiv configured scan.

- [E-MoE: Enhanced Mixture-of-Experts for Non-Factorized Diffusion Language Models](https://arxiv.org/abs/2609.37533) — Focus: architecture-and-efficiency. Discovery: HF Oct 2.

- [ActiveSaddler: Automated Curriculum Learning for Agent Harness Optimization](https://arxiv.org/abs/2610.00906) — Focus: agents, curriculum-learning, experience-grounded-learning, harness-optimization. Discovery: HF Oct 2.

- [Make Sparse Rewards Count: Density-Aware Reward Aggregation for Multi-Reward RL](https://arxiv.org/abs/2610.00574) — Focus: learning. Discovery: HF Oct 2.

- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://arxiv.org/abs/2610.01215) — Focus: agents, world-models, multimodal. Discovery: HF Oct 2.

- [Retrieval-Augmented Skill Optimization via Cross-Harness Adaptation](https://arxiv.org/abs/2609.38024) — Focus: agents, memory-and-context, learning. Discovery: HF Oct 2.

- [Video Generation Models: A Survey of Post-Training and Alignment](https://arxiv.org/abs/2610.00812) — Focus: learning, multimodal. Discovery: HF Oct 2.

- [EgoTools: Towards Tool-Centric Reasoning in Real-World Egocentric Videos](https://arxiv.org/abs/2609.39378) — Focus: multimodal, reasoning. Discovery: HF Oct 2.

- [InterEvolve: Test-Time Evolution of Reward Programs for Humanoid Loco-Manipulation](https://arxiv.org/abs/2610.02196) — Focus: robotics, learning. Discovery: HF Oct 2.

- [X-Tree: Tokenizing Reusable Experience for Efficient Agent Generalization](https://arxiv.org/abs/2609.32993) — Focus: agents. Discovery: HF Oct 2.

- [Decentralized Master-Mind: Joint Action Refinement through Iterative Intent Denoising in Multi-Agent Pathfinding](https://arxiv.org/abs/2609.32019) — Focus: agents. Discovery: HF Oct 2.

- [Scaling and Distilling Text Embeddings for Better Diffusibility](https://arxiv.org/abs/2610.01016) — Focus: learning. Discovery: HF Oct 2.

- [Persona Dosing: Calibrated Activation Steering for Graded Trait Control](https://arxiv.org/abs/2609.36388) — Focus: methods. Discovery: HF Oct 2.

- [Beyond the Current Scene: Event-Referential Grasping with Active View Selection](https://arxiv.org/abs/2609.39375) — Focus: robotics. Discovery: HF Oct 2.

- [Fewer Tokens, Better Action: GPT-6 Astra Robot Agents with 14% Higher Success Rate but 65% Fewer Tokens](https://arxiv.org/abs/2610.01939) — Focus: agents, robotics. Discovery: HF Oct 2.

- [SILSA: Sliding-Window Slice Latents for Topology-Preserving High-Resolution 3D Generation](https://arxiv.org/abs/2610.02201) — Focus: multimodal. Discovery: HF Oct 2, arXiv configured scan.

- [4Director: Controlling Video World Models with Rigid 3D Geometry](https://arxiv.org/abs/2610.02160) — Focus: world-models, multimodal. Discovery: HF Oct 2.

- [Decoding Looped Transformers Better for (Almost) Free](https://arxiv.org/abs/2610.02185) — Focus: architecture-and-efficiency. Discovery: HF Oct 2, arXiv configured scan.

- [Architect-Ant: Editable Automatic Furnishing of Architectural Floor Plans](https://arxiv.org/abs/2606.10953) — Focus: methods. Discovery: HF Oct 2.

- [AutoDataBench: A Data-centric Testbed for Accelerating Auto Research](https://arxiv.org/abs/2609.40097) — Focus: evaluation, reasoning. Discovery: HF Oct 2.

- [Multimodal Flow: Unified Flow Modeling of Language and Vision in Embedding Spaces](https://arxiv.org/abs/2609.40362) — Focus: multimodal. Discovery: HF Oct 2.

- [CorrGRPO: Correlation-Normalized GRPO for Multi-Reward Learning](https://arxiv.org/abs/2609.36820) — Focus: learning. Discovery: HF Oct 2.

- [Ego2Act: Evaluating Goal-Directed Manipulation in Egocentric Video Generation](https://arxiv.org/abs/2610.01092) — Focus: robotics, evaluation, multimodal. Discovery: HF Oct 2.

- [Argo-Bench: Evaluating Data Agents on Enterprise-Scale Workflows](https://arxiv.org/abs/2610.02122) — Focus: agents, evaluation. Discovery: HF Oct 2, arXiv configured scan.

- [RPTune: Learned Context Curation for LLM Catalog Search](https://arxiv.org/abs/2610.00964) — Focus: memory-and-context, reasoning. Discovery: HF Oct 2.

- [Omni-Embed-Mini: Binding Modalities Without Forgetting via Dense Distillation](https://arxiv.org/abs/2610.02148) — Focus: learning. Discovery: HF Oct 2.

- [PhysVista: Benchmarking Physical Intelligence in VLMs via a Perception-Reasoning-Assessment Loop](https://arxiv.org/abs/2610.00559) — Focus: evaluation, reasoning. Discovery: HF Oct 2.

- [PixelDense: Dense Prediction as Representation Alignment for Pixel Diffusion](https://arxiv.org/abs/2610.00483) — Focus: architecture-and-efficiency. Discovery: HF Oct 2.

- [Smaller Models, Better Rejects: Preference Distillation Scaling](https://arxiv.org/abs/2609.38987) — Focus: learning. Discovery: HF Oct 2.

- [Where-OPD: Spatially Guided On-Policy Self-Distillation of MLLMs with Synthetic Scenes](https://arxiv.org/abs/2610.02117) — Focus: learning. Discovery: HF Oct 2, arXiv configured scan.

- [Better Supervision Is Nearby: Neighborhood On-Policy Self-Distillation](https://arxiv.org/abs/2609.39687) — Focus: learning. Discovery: HF Oct 2.

- [When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents](https://arxiv.org/abs/2609.32520) — Focus: agents. Discovery: HF Oct 2.

- [Pretrain Once, Route Anywhere: Towards a Foundation Model for LLM Routing](https://arxiv.org/abs/2609.37362) — Focus: methods. Discovery: HF Oct 2.

- [OpenTumorBoard: A Real-World Benchmark of Multidisciplinary Tumor Board Discussion Trajectories](https://arxiv.org/abs/2609.32810) — Focus: evaluation. Discovery: HF Oct 2.

- [AgSpec: Pushing the Limits of Retrieval-Based Speculative Decoding in Coding Agent Pipelines](https://arxiv.org/abs/2610.01108) — Focus: agents, memory-and-context, architecture-and-efficiency. Discovery: HF Oct 2.

- [Benchmarking and Enhancing Skill-Level Memory for Partially Observable Robotic Manipulation](https://arxiv.org/abs/2609.38886) — Focus: memory-and-context, robotics, evaluation. Discovery: HF Oct 2.

- [Do Audio LLMs Listen Before They Act? Diagnosing Acoustic-Context Gating in Voice Agents](https://arxiv.org/abs/2609.32536) — Focus: agents, memory-and-context, multimodal. Discovery: HF Oct 2.

- [OmniSeek: Native Tool Integration for Multi-turn Audio-Visual Reasoning](https://arxiv.org/abs/2610.02181) — Focus: multimodal, reasoning. Discovery: HF Oct 2, arXiv configured scan.

- [Align Then Reason: A Multimodal Lip-Sync Judge for Dubbing](https://arxiv.org/abs/2610.00825) — Focus: evaluation, multimodal, reasoning. Discovery: HF Oct 2.

- [RLE-Bench: A Qualifying Exam for Coding Agents as Robot Learning Engineers](https://arxiv.org/abs/2609.34210) — Focus: agents, robotics, evaluation, learning. Discovery: HF Oct 2.

- [SemanTok: Predictable Semantic Tokens for Efficient Autoregressive Video Generation](https://arxiv.org/abs/2610.00686) — Focus: multimodal. Discovery: HF Oct 2.

- [LOCI: Spatial Linear Memory for Streaming World Models](https://arxiv.org/abs/2609.40222) — Focus: memory-and-context, world-models. Discovery: HF Oct 2.

- [Removing the NEEDLE in the Haystack: Backdoor Removal in LLMs via Weight Orthogonalisation](https://arxiv.org/abs/2610.00348) — Focus: methods. Discovery: HF Oct 2.

- [VTR-Bench: A Systematic Benchmark for Evaluating Visual Text Rendering in Video Generation](https://arxiv.org/abs/2610.01499) — Focus: evaluation, multimodal. Discovery: HF Oct 2.

- [DataMagic: Authoring Data Videos through Declarative Multi-Agent Orchestration](https://arxiv.org/abs/2609.33403) — Focus: agents, multimodal. Discovery: HF Oct 2.

- [Memorizon: Training World Models Beyond Their Context Window](https://arxiv.org/abs/2610.00544) — Focus: memory-and-context, world-models. Discovery: HF Oct 2.

- [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) — Focus: memory-and-context, evaluation, reasoning. Discovery: HF Oct 2, arXiv configured scan.

- [Generalization Is Stability, Not Accuracy: Multi-Axis Evaluation of LLMs](https://arxiv.org/abs/2610.01428) — Focus: evaluation. Discovery: HF Oct 2.

- [Devils in Question Relay: Source-Conditioned Relay Steering to Mitigate Hallucinations in Audio-visual Large Language Models](https://arxiv.org/abs/2609.37568) — Focus: multimodal. Discovery: HF Oct 2.

- [KaliBench: A Fine-Grained Benchmark for Cybersecurity Tool Use on Kali Linux with Runtime-Free Verifiable Rewards](https://arxiv.org/abs/2610.02206) — Focus: evaluation, learning. Discovery: HF Oct 2, arXiv configured scan.

- [Prompt2Skill: Unsupervised Skill Optimization From Natural Language Instructions](https://arxiv.org/abs/2609.38593) — Focus: learning. Discovery: HF Oct 2.

- [Rules to Tools: Executable Checks for LLM Agents in Scientific Computing](https://arxiv.org/abs/2610.00313) — Focus: agents. Discovery: HF Oct 2.

- [Explore Broadly, Reason Sharply: Push Small Models toward the Frontier via Sampling](https://arxiv.org/abs/2609.38104) — Focus: reasoning. Discovery: HF Oct 2.

- [Does Native 3D Texture Generation Necessarily Require 3D Assets for Training?](https://arxiv.org/abs/2609.34621) — Focus: multimodal. Discovery: HF Oct 2.

- [Personalized Image Generation with Reasoning and Reflection](https://arxiv.org/abs/2610.00737) — Focus: multimodal, reasoning. Discovery: HF Oct 2.

- [FlexRouter: Learning Complementary Model Sets for Flexible LLM Routing](https://arxiv.org/abs/2609.38585) — Focus: learning. Discovery: HF Oct 2.

- [Joint and Cross-Modal Video-Audio Generation and Editing: A Unified Formulation and Design Taxonomy](https://arxiv.org/abs/2609.34381) — Focus: multimodal. Discovery: HF Oct 2.

- [MemFold: Learning Compact Soft Memory for Long-Context Personalization via On-Policy Optimization](https://arxiv.org/abs/2609.36435) — Focus: memory-and-context, learning. Discovery: HF Oct 2.

- [JevSpawn: Adaptive Agentic Inference through Compositional Action Spaces](https://arxiv.org/abs/2610.00437) — Focus: agents. Discovery: HF Oct 2.

- [When Does Correction Become Repair? Mechanistic Auditing of Internal Interventions in Tool-Using LLMs](https://arxiv.org/abs/2609.36138) — Focus: agents, evaluation. Discovery: HF Oct 2.

- [Prefill-Free Cross-Family KV Cache Transfer for Heterogeneous Multi-Agent LLMs](https://arxiv.org/abs/2609.32259) — Focus: agents, architecture-and-efficiency. Discovery: HF Oct 2.

- [Controlled Decoding Attacks on Black-Box LLMs](https://arxiv.org/abs/2609.36956) — Focus: architecture-and-efficiency. Discovery: HF Oct 2.

- [Learning What to Recall: Adaptive Multi-Cue Episodic Memory for World Models](https://arxiv.org/abs/2609.34677) — Focus: world-models, episodic-memory, representation-learning, experience-grounded-learning. Discovery: HF Oct 2.

- [It Takes Workflows to Evolve Better Workflows](https://arxiv.org/abs/2610.01026) — Focus: agents. Discovery: HF Oct 2.

- [Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753) — Focus: methods. Discovery: HF Oct 2.

- [Keyword Harnesses Fail Open: A Cheap Diagnostic Ladder for Tool-Use Claims in Small Language Models](https://arxiv.org/abs/2610.02142) — Focus: agents, evaluation. Discovery: HF Oct 2, arXiv configured scan.

- [OTRetarget: Joint Robot and Object Motion Retargeting via Optimal Transport](https://arxiv.org/abs/2609.36602) — Focus: robotics, learning. Discovery: HF Oct 2.

- [Latent-Foresight: End-to-End Learning Predictable Representations for Latent World Models](https://arxiv.org/abs/2610.01942) — Focus: world-models, learning. Discovery: HF Oct 2.

- [Before It Fades: Reinforcing Temporal Representations at Inference Time in VideoLLMs](https://arxiv.org/abs/2610.01595) — Focus: multimodal. Discovery: HF Oct 2.

- [Pay for the Fault, Not the Flow: Label-Free In-Flow Multi-Agent Workflow Optimization](https://arxiv.org/abs/2610.01017) — Focus: agents, learning. Discovery: HF Oct 2.

- [DexPolicy: Scheduled Exploration for Trajectory-Guided Dexterous Manipulation](https://arxiv.org/abs/2610.00360) — Focus: robotics. Discovery: HF Oct 2.

- [Predictive Credit: Measuring What Scientific Explanations Add to Experimental Forecasts](https://arxiv.org/abs/2610.00314) — Focus: methods. Discovery: HF Oct 2.

- [Honeycomb: Constant-Size Scene Memory Representation for Video World Models](https://arxiv.org/abs/2609.37690) — Focus: memory-and-context, world-models, multimodal. Discovery: HF Oct 2.

### DAIR.AI September 21–27 — 10 candidates

- [HySparse2: Hybrid Sparse Attention with Two-Level KV Sharing](https://arxiv.org/abs/2609.26368) — Focus: architecture-and-efficiency. Discovery: DAIR Sep 21–27.

- [Self Improvement via Fast Tree-search](https://arxiv.org/abs/2609.19526) — Focus: reasoning. Discovery: DAIR Sep 21–27.

- [GAVEL: Graph World Models for Verified and Efficient Long-Horizon LLM Task Planning](https://arxiv.org/abs/2609.19315) — Focus: world-models, reasoning. Discovery: DAIR Sep 21–27.

- [WFM: Wiki Foundation Model for Complex Agentic Reasoning](https://arxiv.org/abs/2609.18182) — Focus: agents, reasoning. Discovery: DAIR Sep 21–27.

- [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550) — Focus: evaluation. Discovery: DAIR Sep 21–27.

- [Harness-Zero: Harness Distillation via Agent-as-Harness](https://arxiv.org/abs/2609.24974) — Focus: agents, learning. Discovery: DAIR Sep 21–27.

- [Self-Organizing Agent Teams Learn to Reason Together](https://arxiv.org/abs/2609.22682) — Focus: agents, reasoning. Discovery: DAIR Sep 21–27.

- [ScientistTwo: Pioneering the Human Knowledge Frontier with Autonomous AI](https://arxiv.org/abs/2609.19644) — Focus: methods. Discovery: DAIR Sep 21–27.

- [XYEval: Agents say yes to bad advice](https://arxiv.org/abs/2609.23939) — Focus: agents. Discovery: DAIR Sep 21–27.

- [EvoOntology: A Self-Evolving Ontology Layer for Data Agents](https://arxiv.org/abs/2609.15779) — Focus: agents. Discovery: DAIR Sep 21–27.

### arXiv configured scan only — 32 candidates

- [From Knowledge Access to Source Learning: Developing Source-Specific Competence](https://arxiv.org/abs/2610.02150) — Focus: agents, continual-learning, source-learning, memory. Discovery: arXiv configured scan.

- [Mimir: Physics-Grounded LLM Agents for Long-Horizon Irrigation Control](https://arxiv.org/abs/2610.02038) — Focus: agents. Discovery: arXiv configured scan.

- [Global Coherence: When Every Agent Is Right and the Team Is Still Wrong - A Local-to-Global Semantic Foundation for Multi-Agent Collaboration](https://arxiv.org/abs/2610.02036) — Focus: agents. Discovery: arXiv configured scan.

- [Mem++: Non-Destructive Memory for Long-Term Organizational LLM Agents](https://arxiv.org/abs/2610.02002) — Focus: agents, memory-and-context. Discovery: arXiv configured scan.

- [Continuous Process-Level Evaluation for Evolving Enterprise AI Agent Skills](https://arxiv.org/abs/2610.01833) — Focus: agents, evaluation. Discovery: arXiv configured scan.

- [Chaining Skills to Hijack LLM Agents](https://arxiv.org/abs/2610.01564) — Focus: agents. Discovery: arXiv configured scan.

- [VISTA: A Visual Harness for Reasoning in an Interactive World](https://arxiv.org/abs/2610.02200) — Focus: agents, multimodal, reasoning. Discovery: arXiv configured scan.

- [DuoMind: Enabling Distributed Multi-Robot Coordination with Semantic Communication](https://arxiv.org/abs/2610.02161) — Focus: robotics. Discovery: arXiv configured scan.

- [Finetuning with Sampling: SFT Learns Better Than You Think](https://arxiv.org/abs/2610.02140) — Focus: methods. Discovery: arXiv configured scan.

- [CARM: Cancellation-Aware Response Masking for LLM Reinforcement Learning](https://arxiv.org/abs/2610.02039) — Focus: learning. Discovery: arXiv configured scan.

- [FastCI: Efficient GPU-Intensive CI for LLM Training Frameworks](https://arxiv.org/abs/2610.01967) — Focus: methods. Discovery: arXiv configured scan.

- [Detecting Inconsistencies in Model Specifications with LLM-as-Verifier Reasoning](https://arxiv.org/abs/2610.01847) — Focus: reasoning. Discovery: arXiv configured scan.

- [CONTRA: Discovering and Qualifying Behavior-Changing Questions for Selective Clarification in LLM Code Generation](https://arxiv.org/abs/2610.01769) — Focus: methods. Discovery: arXiv configured scan.

- [Code Detectors Have a Half-Life: Obsolescence and Metric Illusions in LLM-Generated Code Detection](https://arxiv.org/abs/2610.01664) — Focus: methods. Discovery: arXiv configured scan.

- [Typological Alignment of Stack-Based Language Models on Mildly Context-Sensitive Artificial Languages](https://arxiv.org/abs/2610.02040) — Focus: memory-and-context. Discovery: arXiv configured scan.

- [The Asymptotics of Language Model Alignment with Memory](https://arxiv.org/abs/2610.01828) — Focus: memory-and-context. Discovery: arXiv configured scan.

- [A Matryoshka Hierarchical RAG for Efficient Multi-Hop Question Answering](https://arxiv.org/abs/2610.01767) — Focus: methods. Discovery: arXiv configured scan.

- [Q-SPT: Learnable Query-Based Compression for Low-Frame-Rate Speech Tokenization](https://arxiv.org/abs/2610.01492) — Focus: methods. Discovery: arXiv configured scan.

- [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](https://arxiv.org/abs/2610.02163) — Focus: agents, memory-and-context, learning. Discovery: arXiv configured scan.

- [The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in Large Language Models](https://arxiv.org/abs/2610.02191) — Focus: reasoning. Discovery: arXiv configured scan.

- [Generative modeling of intrinsically disordered protein regions by reinforcing sparse autoencoder features](https://arxiv.org/abs/2610.02189) — Focus: methods. Discovery: arXiv configured scan.

- [Higher-Order Molecular Grammars for Generative and Foundation Models in Chemistry](https://arxiv.org/abs/2610.02186) — Focus: methods. Discovery: arXiv configured scan.

- [Faynt: Scaling and Optimizing Policies for Competitive Melee](https://arxiv.org/abs/2610.02144) — Focus: learning. Discovery: arXiv configured scan.

- [One Basis to Animate Them All: Gaussian Blendshape Distillation for Real-Time Avatars](https://arxiv.org/abs/2610.02207) — Focus: learning. Discovery: arXiv configured scan.

- [TACO: Ternary Absolute-max Column-wise One-sparse Optimizer for LLM Fine-Tuning](https://arxiv.org/abs/2610.02199) — Focus: learning. Discovery: arXiv configured scan.

- [FERPO: Forward Entropy-Regularized Policy Optimization](https://arxiv.org/abs/2610.02198) — Focus: learning. Discovery: arXiv configured scan.

- [Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents](https://arxiv.org/abs/2610.02204) — Focus: agents. Discovery: arXiv configured scan.

- [HiPhy: Hierarchical Alignment for Physically-Plausible Multi-Principle Video Generation](https://arxiv.org/abs/2610.02197) — Focus: multimodal. Discovery: arXiv configured scan.

- [DMAD: Distribution Matching as Adversarial Distillation for Fast Visual Generation](https://arxiv.org/abs/2610.02188) — Focus: learning, multimodal. Discovery: arXiv configured scan.

- [Embedding Prediction Helps Image Generation](https://arxiv.org/abs/2610.02203) — Focus: multimodal. Discovery: arXiv configured scan.

- [Trust the Direction, Search the Step: Zero-and-First-Order Methods for LLM Fine-Tuning](https://arxiv.org/abs/2610.02190) — Focus: learning, reasoning. Discovery: arXiv configured scan.

- [SoftServe: A Scalable Quasi-Newton Method for Deep Learning](https://arxiv.org/abs/2610.02182) — Focus: learning. Discovery: arXiv configured scan.

## Source Receipts

- https://huggingface.co/papers/date/2026-10-02
- https://huggingface.co/api/daily_papers?date=2026-10-02&limit=100
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://export.arxiv.org/api/query
- https://openreview.net/
