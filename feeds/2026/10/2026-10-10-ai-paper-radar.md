# AI Radar Daily Feed - 2026-10-10

Public-safe daily paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 114.
- Recommended tonight: 5 optional picks, not required assignments.
- Sources checked: HF October 9 (72), arXiv nine queries (43 unique), DAIR September 28–October 4 (10), Henry’s curriculum lane (one selected foundation overlapping HF), OpenReview official index/APIs plus bounded indexed search.
- Coverage limits: OpenReview APIs returned 403; a newly indexed skill paper could not be resolved to an exact paper URL and was excluded. Current DAIR issue was not listed; Henry’s curriculum is foundational rather than current news.
- Deduplication: version-normalized arXiv ID, then DOI/title fallback; 126 source appearances yield 114 papers. Primary abstract URLs all returned HTTP 200. Results are author claims, not independent replications; no acceptance status is inferred.

## Recommended Tonight

- [Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?](https://arxiv.org/abs/2610.08215)
  - Tags: agents, experience-grounded-learning, evaluation.
  - What the paper claims: Novel and counterintuitive text games isolate learning from interaction; retained full histories outperform strategy summaries in the reported comparisons.
  - Why builders should inspect it: Start here to distinguish actual learning from pretrained competence, and question whether distilled rules preserve useful experience.
  - First reading action: Novel-rule game design, repeat-attempt protocol, held-out instances, and history-versus-summary comparison.
  - Code / evidence: Discovery-linked repository returned HTTP 200; execution and results not reproduced. https://github.com/liushiliushi/Learn2Play-Bench

- [AgentGarten: Code Worlds for Evolving Agents](https://arxiv.org/abs/2610.12374)
  - Tags: agents, world-models, continual-learning.
  - What the paper claims: Programmatic simulators maintain world state while a shared neural renderer supplies observations; agents pass experience through evolving playbooks.
  - Why builders should inspect it: It makes the environment itself part of the learning system, a concrete complement to experience-grounded agent learning.
  - First reading action: Simulator/renderer interface, Adversarial Forcing mechanism, playbook inheritance, and the learning-efficiency comparison.
  - Code / evidence: Discovery-linked repository returned HTTP 200; execution and results not reproduced. https://github.com/MirroS-Lab/AgentGarten

- [What Did the Agent Actually Do? Evidence-Grounded Oversight for Long-Horizon Agents](https://arxiv.org/abs/2610.06406)
  - Tags: agent-evaluation, reliable-ai-systems, oversight.
  - What the paper claims: AgentMonBench measures consequential-decision identification and evidence localization; a behavior graph organizes source-linked execution evidence.
  - Why builders should inspect it: It asks how a person can verify what a long-running agent actually did, directly relevant to supervising autonomous work.
  - First reading action: Three benchmark subsets, behavior-graph construction, monitor baselines, and evidence-localization evaluation.
  - Code / evidence: Discovery-linked repository returned HTTP 200; execution and results not reproduced. https://github.com/zhk-lab/EBG

- [REMORY: Learning Residual Memory for Context Compaction](https://arxiv.org/abs/2610.11287)
  - Tags: memory, context-engineering, efficient-inference.
  - What the paper claims: A trained memory network adds bounded soft tokens to a textual summary so a frozen model better approximates full-history continuation.
  - Why builders should inspect it: It treats compaction loss as something to learn around, offering a useful comparison with purely textual memory.
  - First reading action: Residual-token training objective, frozen-backbone interface, summary-only baselines, source-attribution scoring, and agent error analysis.
  - Code / evidence: Discovery-linked repository returned HTTP 200; execution and results not reproduced. https://github.com/1ring2rta/Remory

- [SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction](https://arxiv.org/abs/2610.12349)
  - Tags: world-models, representation-learning, foundations.
  - What the paper claims: A reconstruction-free JEPA separates invariant and variant latent subspaces under stated Gaussian dynamics and variation assumptions, with synthetic and robot experiments.
  - Why builders should inspect it: This is the mathematical sidecar: what makes a learned world representation stable under nuisance changes?
  - First reading action: Invariant/variant definition, identification theorem assumptions, synthetic controls, and manipulation robustness results.
  - Code / evidence: No code link found in scanned metadata; inspect theorem assumptions and synthetic/robot experiments. This does not establish that code is unavailable.

## Full Candidate List

All deduplicated candidates from the bounded reads; inspection targets are topics, not verified result claims.

### Agents, memory, context, and retrieval (45)

- [AgentGarten: Code Worlds for Evolving Agents](https://arxiv.org/abs/2610.12374) — Programmatic simulators maintain world state while a shared neural renderer supplies observations; agents pass experience through evolving playbooks. Sources: HF Oct 9.
- [Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?](https://arxiv.org/abs/2610.08215) — Novel and counterintuitive text games isolate learning from interaction; retained full histories outperform strategy summaries in the reported comparisons. Sources: HF Oct 9.
- [From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation](https://arxiv.org/abs/2610.06100) — Inspection target: Agentic Language World Models for Interactive Environment Simulation. Sources: HF Oct 9.
- [SuperNav: An Agentic Navigation System for Any Task in Any Scene](https://arxiv.org/abs/2610.12126) — Inspection target: An Agentic Navigation System for Any Task in Any Scene. Sources: HF Oct 9.
- [Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction](https://arxiv.org/abs/2610.12299) — Inspection target: Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction. Sources: HF Oct 9.
- [In-context Robot Learning Made Simple: A Democratized Recipe for Manipulation Tasks](https://arxiv.org/abs/2609.38173) — Inspection target: A Democratized Recipe for Manipulation Tasks. Sources: HF Oct 9.
- [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) — Inspection target: Model-Based Recursive Self-Improvement through Reflective Rulebooks. Sources: HF Oct 9.
- [OneSearch-VL: Unified Multimodal Deep Research Agent for Image and Video](https://arxiv.org/abs/2610.12419) — Inspection target: Unified Multimodal Deep Research Agent for Image and Video. Sources: HF Oct 9.
- [What Did the Agent Actually Do? Evidence-Grounded Oversight for Long-Horizon Agents](https://arxiv.org/abs/2610.06406) — AgentMonBench measures consequential-decision identification and evidence localization; a behavior graph organizes source-linked execution evidence. Sources: HF Oct 9.
- [Opera: A Verbal Critic Framework for Long-horizon Coding Agents](https://arxiv.org/abs/2609.33987) — Inspection target: A Verbal Critic Framework for Long-horizon Coding Agents. Sources: HF Oct 9.
- [ViSkill: Reinforcing VLM Agents with Evolving Visual-Native Skills](https://arxiv.org/abs/2610.12403) — Inspection target: Reinforcing VLM Agents with Evolving Visual-Native Skills. Sources: HF Oct 9, arXiv scan.
- [SpatialOPSD: Self-Distilling Spatial Intelligence from Verified Coding Agent Traces](https://arxiv.org/abs/2610.11366) — Inspection target: Self-Distilling Spatial Intelligence from Verified Coding Agent Traces. Sources: HF Oct 9.
- [Retrieval-Centric Deep Learning in Growing Nonparametric Neural Networks](https://arxiv.org/abs/2610.03858) — Inspection target: Retrieval-Centric Deep Learning in Growing Nonparametric Neural Networks. Sources: HF Oct 9.
- [REMORY: Learning Residual Memory for Context Compaction](https://arxiv.org/abs/2610.11287) — A trained memory network adds bounded soft tokens to a textual summary so a frozen model better approximates full-history continuation. Sources: HF Oct 9.
- [Can AI Agents Make Open-Ended Scientific Discovery? Evidence from Station](https://arxiv.org/abs/2610.08927) — Inspection target: Can AI Agents Make Open-Ended Scientific Discovery? Evidence from Station. Sources: HF Oct 9.
- [A Closer Look at Agentic BBO: Benchmarking LLM Agents for Black-Box Optimization](https://arxiv.org/abs/2610.12183) — Inspection target: Benchmarking LLM Agents for Black-Box Optimization. Sources: HF Oct 9.
- [Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](https://arxiv.org/abs/2610.12360) — Inspection target: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict. Sources: HF Oct 9, arXiv scan.
- [Chaos in the Text: Revealing the Modality Preference in Mixed-Modality Retrievers](https://arxiv.org/abs/2610.11816) — Inspection target: Revealing the Modality Preference in Mixed-Modality Retrievers. Sources: HF Oct 9.
- [Synthesis Through Simulation: Generating Coherent Enterprise Data via Scalable Agent-System Interaction](https://arxiv.org/abs/2610.10549) — Inspection target: Generating Coherent Enterprise Data via Scalable Agent-System Interaction. Sources: HF Oct 9.
- [Incremental Open-Ended Deep Research with Structured Harness](https://arxiv.org/abs/2610.11566) — Inspection target: Incremental Open-Ended Deep Research with Structured Harness. Sources: HF Oct 9.
- [BrickBench: Evaluating Agentic Brick Design](https://arxiv.org/abs/2610.12452) — Inspection target: Evaluating Agentic Brick Design. Sources: HF Oct 9, arXiv scan.
- [You Changed Your Mind, The Model Didn't: Demystifying Intent in Multi-Turn Dialogue](https://arxiv.org/abs/2610.06496) — Inspection target: Demystifying Intent in Multi-Turn Dialogue. Sources: HF Oct 9.
- [On-Policy Distillation Teaches New Skills but Not New Knowledge](https://arxiv.org/abs/2610.09639) — Inspection target: On-Policy Distillation Teaches New Skills but Not New Knowledge. Sources: HF Oct 9.
- [Skill Constellations: Tracing the Supply Chain of Agent Skills on GitHub](https://arxiv.org/abs/2610.11169) — Inspection target: Tracing the Supply Chain of Agent Skills on GitHub. Sources: HF Oct 9.
- [MIRA: A Musical Intent Refinement Agent for Aligning Text-to-Music Generation with User Intent](https://arxiv.org/abs/2610.10355) — Inspection target: A Musical Intent Refinement Agent for Aligning Text-to-Music Generation with User Intent. Sources: HF Oct 9.
- [Investigating the Role of Reasoning-Language Alignment in Monolingual Retrieval-Augmented Generation](https://arxiv.org/abs/2610.03136) — Inspection target: Investigating the Role of Reasoning-Language Alignment in Monolingual Retrieval-Augmented Generation. Sources: HF Oct 9.
- [MARGIN: Runtime Confidence Calibration for Multi-Agent Foundation Model Coordination](https://arxiv.org/abs/2605.22949) — Inspection target: Runtime Confidence Calibration for Multi-Agent Foundation Model Coordination. Sources: HF Oct 9.
- [From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents](https://arxiv.org/abs/2610.12463) — Inspection target: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents. Sources: arXiv scan.
- [Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff](https://arxiv.org/abs/2610.12436) — Inspection target: Collaboration Creates a Population Threshold for Takeoff. Sources: arXiv scan.
- [OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories via Streaming Structure-Aware Optimal Transport](https://arxiv.org/abs/2610.12375) — Inspection target: Real-Time Monitoring and Intervention in LLM Agent Trajectories via Streaming Structure-Aware Optimal Transport. Sources: arXiv scan.
- [Can AI Agents Learn Their Way to the Top? Evaluating Heuristic Learning in a Long-Running Game Agent Competition](https://arxiv.org/abs/2610.12341) — Inspection target: Can AI Agents Learn Their Way to the Top? Evaluating Heuristic Learning in a Long-Running Game Agent Competition. Sources: arXiv scan.
- [Cadence: Strategic Guidance for Coding Agents](https://arxiv.org/abs/2610.12269) — Inspection target: Strategic Guidance for Coding Agents. Sources: arXiv scan.
- [NativeScope: Relation-Localized Retrieval over Native Topology with a Correct Anchor](https://arxiv.org/abs/2610.12243) — Inspection target: Relation-Localized Retrieval over Native Topology with a Correct Anchor. Sources: arXiv scan.
- [Event-Centric Memory with Query-Aware Graph Augmentation for Long-Term Conversational Agents](https://arxiv.org/abs/2610.11920) — Inspection target: Event-Centric Memory with Query-Aware Graph Augmentation for Long-Term Conversational Agents. Sources: arXiv scan.
- [Forms of LLM-Integrated Applications from LLM-Chats to Autonomous AI Agent System](https://arxiv.org/abs/2610.11899) — Inspection target: Forms of LLM-Integrated Applications from LLM-Chats to Autonomous AI Agent System. Sources: arXiv scan.
- [CSF: Contextual Safety Filtering for Motion Generators](https://arxiv.org/abs/2610.12467) — Inspection target: Contextual Safety Filtering for Motion Generators. Sources: arXiv scan.
- [Context Language Models](https://arxiv.org/abs/2609.37725) — Inspection target: Context Language Models. Sources: DAIR Sep 28–Oct 4.
- [Harness as a Language: A Minimalist Agent Framework With Maximal Expressivity](https://arxiv.org/abs/2609.26891) — Inspection target: A Minimalist Agent Framework With Maximal Expressivity. Sources: DAIR Sep 28–Oct 4.
- [Agensh: Scaling Organizational Intelligence to 1,024 Agents](https://arxiv.org/abs/2609.26781) — Inspection target: Scaling Organizational Intelligence to 1,024 Agents. Sources: DAIR Sep 28–Oct 4.
- [AutoGym: Blueprint-First Generation of Verifiable Agent Gyms](https://arxiv.org/abs/2609.22592) — Inspection target: Blueprint-First Generation of Verifiable Agent Gyms. Sources: DAIR Sep 28–Oct 4.
- [Coding Agents are Strong Prompt Optimizers](https://arxiv.org/abs/2609.26261) — Inspection target: Coding Agents are Strong Prompt Optimizers. Sources: DAIR Sep 28–Oct 4.
- [The Tasteful Agent: Measuring and Improving Taste in Long-Horizon Tasks](https://arxiv.org/abs/2609.25804) — Inspection target: Measuring and Improving Taste in Long-Horizon Tasks. Sources: DAIR Sep 28–Oct 4.
- [Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986) — Inspection target: System-One-Controlled Agentic Memory for Efficient AI Agents. Sources: DAIR Sep 28–Oct 4.
- [SkillGym: Internalizing Human Skills into LLMs for Real-World Problem Solving](https://arxiv.org/abs/2609.27717) — Inspection target: Internalizing Human Skills into LLMs for Real-World Problem Solving. Sources: DAIR Sep 28–Oct 4.
- [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](https://arxiv.org/abs/2610.02163) — Inspection target: Learning When to Compact Context in Long-Horizon Coding Agents. Sources: DAIR Sep 28–Oct 4.

### Learning, reasoning, architecture, and efficiency (31)

- [TokenRouter: Efficient Serving System for Token-Level LLM Routing](https://arxiv.org/abs/2610.12242) — Inspection target: Efficient Serving System for Token-Level LLM Routing. Sources: HF Oct 9.
- [U-Space: Uncovering When and Why Uncertainty Arises in Language Models](https://arxiv.org/abs/2610.09087) — Inspection target: Uncovering When and Why Uncertainty Arises in Language Models. Sources: HF Oct 9.
- [MC-Sparse: Deconstructing and Closing the Dense-Sparse Attention Gap in Diffusion Transformers](https://arxiv.org/abs/2610.06801) — Inspection target: Deconstructing and Closing the Dense-Sparse Attention Gap in Diffusion Transformers. Sources: HF Oct 9.
- [DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training](https://arxiv.org/abs/2610.12468) — Inspection target: Action-Faithful Robot World Model with Counterfactual Post-Training. Sources: HF Oct 9, arXiv scan.
- [Post-Training Frontier Text-to-Image Models by Composing Preference and Rubric Rewards](https://arxiv.org/abs/2610.02967) — Inspection target: Post-Training Frontier Text-to-Image Models by Composing Preference and Rubric Rewards. Sources: HF Oct 9.
- [SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference](https://arxiv.org/abs/2610.12327) — Inspection target: Decoding-Aware Pruning for Accurate and Efficient LLM Inference. Sources: HF Oct 9, arXiv scan.
- [Reasoning-Informed Visual Editing](https://arxiv.org/abs/2610.12343) — Inspection target: Reasoning-Informed Visual Editing. Sources: HF Oct 9.
- [SparseEngine: Sparse-First Inference Engine](https://arxiv.org/abs/2609.39068) — Inspection target: Sparse-First Inference Engine. Sources: HF Oct 9.
- [SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730) — Inspection target: A Looped Typed Decision Model for System 1.5 Thinking. Sources: HF Oct 9.
- [Do LLMs Understand Sequential Structure? A Controlled Study of Inference and Generation](https://arxiv.org/abs/2610.04977) — Inspection target: Do LLMs Understand Sequential Structure? A Controlled Study of Inference and Generation. Sources: HF Oct 9.
- [V-CoLA: Vision Token Compression with Linear Attention](https://arxiv.org/abs/2610.11251) — Inspection target: Vision Token Compression with Linear Attention. Sources: HF Oct 9.
- [SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models](https://arxiv.org/abs/2610.12402) — Inspection target: Evaluating Predictive Spatial Reasoning in Vision-Language Models. Sources: HF Oct 9, arXiv scan.
- [Distilling Routed 3D Privilege for Spatial Reasoning in Vision-Language Models](https://arxiv.org/abs/2610.12355) — Inspection target: Distilling Routed 3D Privilege for Spatial Reasoning in Vision-Language Models. Sources: HF Oct 9.
- [Scaling to Tens of Thousands of Test-Time Iterations with Loop-Native Attention Residuals](https://arxiv.org/abs/2610.11570) — Inspection target: Scaling to Tens of Thousands of Test-Time Iterations with Loop-Native Attention Residuals. Sources: HF Oct 9.
- [SpecFold: Folding Multi-Branch Redundancy for Faster Speculative Decoding in Diffusion Language Models](https://arxiv.org/abs/2610.04875) — Inspection target: Folding Multi-Branch Redundancy for Faster Speculative Decoding in Diffusion Language Models. Sources: HF Oct 9.
- [EDiS: Edge Disjoint Subgraph Sparsification Framework for Graph Neural Networks](https://arxiv.org/abs/2610.09059) — Inspection target: Edge Disjoint Subgraph Sparsification Framework for Graph Neural Networks. Sources: HF Oct 9.
- [CARE: Certifying Acceleration for Vision-Language-Action Inference](https://arxiv.org/abs/2610.08917) — Inspection target: Certifying Acceleration for Vision-Language-Action Inference. Sources: HF Oct 9.
- [Predicting Cable Dynamics with Physical Attention Bias](https://arxiv.org/abs/2610.11975) — Inspection target: Predicting Cable Dynamics with Physical Attention Bias. Sources: HF Oct 9.
- [Large language models are vulnerable to incidental information in clinical documentation and reasoning](https://arxiv.org/abs/2610.08585) — Inspection target: Large language models are vulnerable to incidental information in clinical documentation and reasoning. Sources: HF Oct 9.
- [Learning to Steer, Steering to See: Unveiling the Geometry of RLVR in Large Language Models via Trainable Vectors](https://arxiv.org/abs/2609.34344) — Inspection target: Unveiling the Geometry of RLVR in Large Language Models via Trainable Vectors. Sources: HF Oct 9.
- [TerraVis: Towards Evaluation of World-Grounded Visual Consistency in Text-to-Image Generation via MLLM Workflows](https://arxiv.org/abs/2610.02959) — Inspection target: Towards Evaluation of World-Grounded Visual Consistency in Text-to-Image Generation via MLLM Workflows. Sources: HF Oct 9.
- [LeWAM: A JEPA World Action Model with Diffusion-Steering-Based MPC](https://arxiv.org/abs/2610.12407) — Inspection target: A JEPA World Action Model with Diffusion-Steering-Based MPC. Sources: arXiv scan.
- [ARC: A Reasoning Recipe for Robot Foundation Models](https://arxiv.org/abs/2610.12386) — Inspection target: A Reasoning Recipe for Robot Foundation Models. Sources: arXiv scan.
- [Universal Textual Teaching for LLMs](https://arxiv.org/abs/2610.12114) — Inspection target: Universal Textual Teaching for LLMs. Sources: arXiv scan.
- [WOVEN: Weaving Visual World Modeling into Multimodal LLMs](https://arxiv.org/abs/2610.12417) — Inspection target: Weaving Visual World Modeling into Multimodal LLMs. Sources: arXiv scan.
- [Predicting Alignment Generalization with Value Representations](https://arxiv.org/abs/2610.12410) — Inspection target: Predicting Alignment Generalization with Value Representations. Sources: arXiv scan.
- [Long Text to Predictive Features: LLM-Guided Blockwise Feature Engineering via Executable Program Search](https://arxiv.org/abs/2610.12390) — Inspection target: LLM-Guided Blockwise Feature Engineering via Executable Program Search. Sources: arXiv scan.
- [Learning Kilometer-Scale Weather Prediction with Global-Regional Alignment](https://arxiv.org/abs/2610.12401) — Inspection target: Learning Kilometer-Scale Weather Prediction with Global-Regional Alignment. Sources: arXiv scan.
- [ContiLNN: Mitigating Slice Sampling Discontinuity with Liquid Neural Networks for Medical Image Restoration](https://arxiv.org/abs/2610.12337) — Inspection target: Mitigating Slice Sampling Discontinuity with Liquid Neural Networks for Medical Image Restoration. Sources: arXiv scan.
- [Rounding in Preconditioner Space: Redesigning 4-bit AdamW Optimizer-State Quantization](https://arxiv.org/abs/2610.12444) — Inspection target: Redesigning 4-bit AdamW Optimizer-State Quantization. Sources: arXiv scan.
- [SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction](https://arxiv.org/abs/2610.12349) — A reconstruction-free JEPA separates invariant and variant latent subspaces under stated Gaussian dynamics and variation assumptions, with synthetic and robot experiments. Sources: arXiv scan.

### Embodied, multimodal, and specialist methods (37)

- [MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement](https://arxiv.org/abs/2610.11959) — Inspection target: Scaling Reinforcement Learning Towards Self-Improvement. Sources: HF Oct 9.
- [Beyond Spatio-Temporal Priors: A Generalizable Approach for Dense Correspondence Matching](https://arxiv.org/abs/2610.12421) — Inspection target: A Generalizable Approach for Dense Correspondence Matching. Sources: HF Oct 9.
- [OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs](https://arxiv.org/abs/2610.12461) — Inspection target: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs. Sources: HF Oct 9, arXiv scan.
- [TestPrism: Rethinking Test Evaluation Beyond a Single Reference](https://arxiv.org/abs/2610.12289) — Inspection target: Rethinking Test Evaluation Beyond a Single Reference. Sources: HF Oct 9, arXiv scan.
- [LEGO: A Lifting-Free Approach for Exocentric-to-Egocentric Video Generation](https://arxiv.org/abs/2610.12442) — Inspection target: A Lifting-Free Approach for Exocentric-to-Egocentric Video Generation. Sources: HF Oct 9.
- [Embodied Turing Machines: Stateful Code for Robot Recursive Self-Improvement](https://arxiv.org/abs/2610.12369) — Inspection target: Stateful Code for Robot Recursive Self-Improvement. Sources: HF Oct 9.
- [Pumpire: Unified Benchmark for Metric Distance Estimation](https://arxiv.org/abs/2610.12423) — Inspection target: Unified Benchmark for Metric Distance Estimation. Sources: HF Oct 9.
- [VibeEdit: Image Editing with Canvas Instructions](https://arxiv.org/abs/2610.12229) — Inspection target: Image Editing with Canvas Instructions. Sources: HF Oct 9.
- [USDCraft: Geometrically Grounded Programmatic Modeling of Articulated 3D Assets for Simulation](https://arxiv.org/abs/2610.11322) — Inspection target: Geometrically Grounded Programmatic Modeling of Articulated 3D Assets for Simulation. Sources: HF Oct 9.
- [OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning](https://arxiv.org/abs/2610.12458) — Inspection target: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning. Sources: HF Oct 9, arXiv scan.
- [ReSPO: Reshaped Sequence Policy Optimization for Gradient Starvation in Off-Policy Learning](https://arxiv.org/abs/2609.35433) — Inspection target: Reshaped Sequence Policy Optimization for Gradient Starvation in Off-Policy Learning. Sources: HF Oct 9.
- [A GPU-Parallel Framework for Heterogeneous Multi-Task Reinforcement Learning](https://arxiv.org/abs/2606.03335) — Inspection target: A GPU-Parallel Framework for Heterogeneous Multi-Task Reinforcement Learning. Sources: HF Oct 9.
- [From Prompting to Composing: A Spatial Canvas Interface for Poster Generation](https://arxiv.org/abs/2610.12230) — Inspection target: A Spatial Canvas Interface for Poster Generation. Sources: HF Oct 9.
- [WorldGuide: Goal-Directed Video World Model for Procedural Task Execution](https://arxiv.org/abs/2610.12459) — Inspection target: Goal-Directed Video World Model for Procedural Task Execution. Sources: HF Oct 9, arXiv scan.
- [Mara Chain: Rethinking Failure as a Stepping Stone for AI System Auto-Evolution](https://arxiv.org/abs/2609.35855) — Inspection target: Rethinking Failure as a Stepping Stone for AI System Auto-Evolution. Sources: HF Oct 9.
- [One Block, Multiple Depths: Recurrent Vision Transformers with Depth-Programmed Experts](https://arxiv.org/abs/2610.12448) — Inspection target: Recurrent Vision Transformers with Depth-Programmed Experts. Sources: HF Oct 9, arXiv scan.
- [SpaceFlow: Locally Controllable 3D Generation](https://arxiv.org/abs/2610.12399) — Inspection target: Locally Controllable 3D Generation. Sources: HF Oct 9.
- [Frozen Models, Evolving Expertise: Model-Agnostic Learning from Deployment Experience for Multimodal Medical AI](https://arxiv.org/abs/2610.09146) — Inspection target: Model-Agnostic Learning from Deployment Experience for Multimodal Medical AI. Sources: HF Oct 9.
- [SPW-Nav: A Streaming Panoramic World Model for Language-Guided Navigation](https://arxiv.org/abs/2610.08941) — Inspection target: A Streaming Panoramic World Model for Language-Guided Navigation. Sources: HF Oct 9.
- [The Lattice of Transition Laws](https://arxiv.org/abs/2610.11216) — Inspection target: The Lattice of Transition Laws. Sources: HF Oct 9.
- [Behavioral Persistence and Incomplete Functional Transfer of Co-evolved Communication in Evolutionary Robotics](https://arxiv.org/abs/2609.38527) — Inspection target: Behavioral Persistence and Incomplete Functional Transfer of Co-evolved Communication in Evolutionary Robotics. Sources: HF Oct 9.
- [Evaluating the Transfer of Co-Evolved Communication from 2D to 3D Simulation](https://arxiv.org/abs/2610.09280) — Inspection target: Evaluating the Transfer of Co-Evolved Communication from 2D to 3D Simulation. Sources: HF Oct 9.
- [SatNav: A Scalable Benchmark for Long-Horizon UAV Vision-Language Navigation from Satellite Imagery](https://arxiv.org/abs/2609.31507) — Inspection target: A Scalable Benchmark for Long-Horizon UAV Vision-Language Navigation from Satellite Imagery. Sources: HF Oct 9.
- [Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception](https://arxiv.org/abs/2610.12445) — Inspection target: Probes Effectively Detect Sabotage and Catch Unverbalized Deception. Sources: arXiv scan.
- [RoboRSI: Stable, efficient, and reusable robot self-evolution in complex real-world environments](https://arxiv.org/abs/2610.12424) — Inspection target: Stable, efficient, and reusable robot self-evolution in complex real-world environments. Sources: arXiv scan.
- [MAMHOI: Factorizing Scene-Aware Human-Object Interaction through Affordances](https://arxiv.org/abs/2610.12416) — Inspection target: Factorizing Scene-Aware Human-Object Interaction through Affordances. Sources: arXiv scan.
- [GeoReform: Reflective Formalization Evolution for Multimodal Geometry Problem Solving](https://arxiv.org/abs/2610.12391) — Inspection target: Reflective Formalization Evolution for Multimodal Geometry Problem Solving. Sources: arXiv scan.
- [Reliability Characterization for N-version Object Detection](https://arxiv.org/abs/2610.12149) — Inspection target: Reliability Characterization for N-version Object Detection. Sources: arXiv scan.
- [VFold: Symmetry-Aware Cross-Layer Value Cache Compression](https://arxiv.org/abs/2610.12338) — Inspection target: Symmetry-Aware Cross-Layer Value Cache Compression. Sources: arXiv scan.
- [Rehearse Everything, Remember Nothing: Attic-KV Rehearses What Will Be Read](https://arxiv.org/abs/2610.12133) — Inspection target: Attic-KV Rehearses What Will Be Read. Sources: arXiv scan.
- [FastBench: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?](https://arxiv.org/abs/2610.12427) — Inspection target: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?. Sources: arXiv scan.
- [Density Ratio Estimation with Stein Displacement Fields](https://arxiv.org/abs/2610.12437) — Inspection target: Density Ratio Estimation with Stein Displacement Fields. Sources: arXiv scan.
- [Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration](https://arxiv.org/abs/2610.12470) — Inspection target: Learning Dexterous Manipulation from a Single Human Demonstration. Sources: arXiv scan.
- [What 30,000 Hours of Ego-centric Video Does Not Teach](https://arxiv.org/abs/2610.12464) — Inspection target: What 30,000 Hours of Ego-centric Video Does Not Teach. Sources: arXiv scan.
- [A Balanced Data Diet: Addressing the Exploration Bottleneck in Mega-Scale RL for Robot Control](https://arxiv.org/abs/2610.12465) — Inspection target: Addressing the Exploration Bottleneck in Mega-Scale RL for Robot Control. Sources: arXiv scan.
- [Bi-FORK: Generative Modeling of High-Dimensional Bifurcating Systems](https://arxiv.org/abs/2610.12449) — Inspection target: Generative Modeling of High-Dimensional Bifurcating Systems. Sources: arXiv scan.
- [Critical-State RL: Diagnosing Trainable States for Multi-Turn Tool Use](https://arxiv.org/abs/2609.24985) — Inspection target: Diagnosing Trainable States for Multi-Turn Tool Use. Sources: DAIR Sep 28–Oct 4.

### Foundations (1)

- [Foundations of Large Language Models](https://arxiv.org/abs/2501.09223) — Inspection target: Foundations of Large Language Models. Sources: HF Oct 9, Henry curriculum.

## Source Receipts

- Hugging Face: https://huggingface.co/papers?date=2026-10-09 ; https://huggingface.co/api/daily_papers?date=2026-10-09&limit=100 . HTML/API IDs reconciled exactly, 72 each.
- DAIR: https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md#top-ai-papers-of-the-week-september-28---october-4---2026 . Latest available 10-paper issue; no October 5–11 issue listed at scan time.
- Henry’s curriculum: https://github.com/henrythe9th/AI-Crash-Course . Foundations lane, last commit February 23, 2026; selected reference overlaps HF.
- arXiv: https://export.arxiv.org/api/query . Nine configured query lanes, six entries each; 43 unique scan papers. Eleven overlap HF. Every candidate uses an exact primary arXiv URL.
- OpenReview: https://openreview.net/ ; https://api2.openreview.net/notes?limit=100&sort=tcdate:desc ; https://api.openreview.net/notes?limit=100&sort=tcdate:desc . Index readable, APIs 403.
- OpenReview bounded indexed lead: https://openreview.net/search?content=authors&group=all&sort=cdate%3Adesc&source=forum&term=~Gaoyuan_Du1 . A skill/harness item appeared in the indexed result, but direct retrieval yielded only a loading shell; exact paper URL unresolved and excluded.
- Semantic Scholar not used; citation expansion was unnecessary for this menu.
- Official code URLs in recommendations are availability signals only; no reproduction or code-quality claim.
