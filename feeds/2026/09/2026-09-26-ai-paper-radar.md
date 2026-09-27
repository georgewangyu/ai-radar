# AI Radar Daily Feed - 2026-09-26

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 32.
- Recommended tonight: 5, as a flexible reading menu.
- Sources checked: Hugging Face Daily Papers September 25, DAIR.AI Papers of the Week September 14–20, Henry Shi’s AI Crash Course, arXiv, and OpenReview.
- Source limits: arXiv query API returned 429/503 before its first configured query completed; OpenReview notes APIs returned 403; the DAIR.AI September 21–27 issue was not yet published.

## Recommended Tonight

- [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](https://arxiv.org/abs/2609.28416)
  - Tags: agents, world-models, state-revision, continual-improvement.
  - What the paper claims: AEWM judges critical, exploratory, and noisy decisions, then revises a task state from the same observed history; the authors report gains across six agent benchmarks.
  - Why builders should inspect it: It tests whether editing an agent’s mistaken state after real feedback is more useful than predicting tool output, a direct fit for experience-grounded agent improvement.
  - First reading action: Inspect the Action Judge, State Revision, and EditAct diagrams, then the ablations.
  - Evidence / code: Paper-linked code: https://github.com/RUCAIBox/Agent-Editing-World-Model; six-benchmark, three-backbone comparison is author-reported.

- [ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199)
  - Tags: agent-evaluation, exploration, experience-grounded-learning, scientific-discovery.
  - What the paper claims: ExplorationBench uses executable alien-world rules, flawed manuals, and held-out tasks to test learning from exploration rather than recall; the paper evaluates ten AI systems.
  - Why builders should inspect it: Its verifiable unfamiliar environments offer a concrete way to ask whether an agent learned from feedback rather than memorized a familiar benchmark.
  - First reading action: Read the task construction, what the agent can observe, and the held-out scoring setup.
  - Evidence / code: Executable AlienCode and AlienLogic sandboxes are described; no paper-linked public code repository was found in the bounded source read.

- [GAUGE: When Not to Trust LLM-as-a-Judge in User-Simulated Evaluation of Task-Oriented Agents](https://arxiv.org/abs/2609.12191)
  - Tags: agent-evaluation, llm-as-judge, reliability, benchmark-validity.
  - What the paper claims: GAUGE compares simulator-and-judge rankings with verifiable rewards across 25 agents; its authors report a satisfaction–success gap and weak discrimination between close agents.
  - Why builders should inspect it: It challenges a common agent release gate and gives a practical check before trusting a judge score to select a new version.
  - First reading action: Inspect reward definitions, near-equal pair construction, and the proposed completion-bit tripwire.
  - Evidence / code: Paper-reported comparisons on tau2-bench and SimulatorArena; no official code repository verified in this bounded read.

- [Is Bash All You Need? An Empirical Study of Tool Interfaces for Enterprise Digital Worker Agents](https://arxiv.org/abs/2609.11999)
  - Tags: agents, tool-interfaces, enterprise-workflows, evaluation.
  - What the paper claims: Across two enterprise-agent benchmarks and two model backbones, the authors report bash alone outperforming typed tools while using fewer tokens.
  - Why builders should inspect it: It makes tool-interface design an empirical question for agent builders and offers a direct comparison with constrained programmatic calls.
  - First reading action: Inspect the five interface definitions, execution isolation, scoring, and token accounting.
  - Evidence / code: Paper-reported five-interface comparison on TheAgentCompany and APEX-Agents; no official code repository verified in this bounded read.

- [Training Object Permanence in World Models](https://arxiv.org/abs/2609.28654)
  - Tags: world-models, embodied-ai, evaluation, video.
  - What the paper claims: The authors introduce object-permanence tasks, a synthetic training corpus, and an exam for video world models; they report comparisons across 14 models.
  - Why builders should inspect it: It connects a concrete cognitive prior to a measurable world-model test, broadening the menu beyond language agents.
  - First reading action: Inspect task categories, train/test separation, example videos, and the exam rubric.
  - Evidence / code: Paper-linked data/model/training stack: https://github.com/hokindeng/object-permanence; 300-question exam and 14-model evaluation are author-reported.

## Full Candidate List

### Hugging Face Daily Papers (Sep 25)

- [Training Object Permanence in World Models](https://arxiv.org/abs/2609.28654) — Object permanence and solidity are hallmarks of human cognitive priors. Source: Hugging Face Daily Papers (Sep 25).

- [Your Transformer Can Hold Two Thoughts at Once: Evidence of Linear Superposition in LLMs](https://arxiv.org/abs/2609.29845) — While Large Language Models (LLMs) rely on highly non-linear components, in this work we demonstrate that they exhibit fundamental linearity: when inputs from distinct text streams are linearly combined, the model outputs a superposition of the indiv Source: Hugging Face Daily Papers (Sep 25).

- [WanPE: Towards Cinematic Prompt Enhancement for Modern Text-to-Video Generation](https://arxiv.org/abs/2609.30221) — Video generation begins in text space by authoring a cinematic screenplay, then materializes into pixels. Source: Hugging Face Daily Papers (Sep 25).

- [OmniEcho: Audio-Visual Spatial Understanding for Omni-Modal Embodied Agents](https://arxiv.org/abs/2609.23407) — Humans can effortlessly localize the direction of a sound source and integrate it with visual cues for reasoning, yet this remains challenging for embodied agents. Source: Hugging Face Daily Papers (Sep 25).

- [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](https://arxiv.org/abs/2609.28416) — Recent advances in large language models (LLMs) have enabled agents to tackle long-horizon tasks across diverse environments. Source: Hugging Face Daily Papers (Sep 25).

- [Rufus-Air: An Open LLM Post-Training Recipe](https://arxiv.org/abs/2609.29421) — Rufus-Air is an open and reproducible post-training recipe on GLM-4.5-Air-Base (106B-A12B), organized as a serial pipeline of eight stages: SFT, Reasoning RL, Coding RL, Instruction-Following RL, General Agent, Coding Agent, Search Agent, and RLHF. Source: Hugging Face Daily Papers (Sep 25).

- [Parts-of-Speech as Emergent Categories in SAE Latent Space](https://arxiv.org/abs/2609.29362) — Sparse AutoEncoders (SAEs) offer a promising way to inspect language model representations, but it is still unclear what kind of linguistic structure their latents expose. Source: Hugging Face Daily Papers (Sep 25).

- [Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://arxiv.org/abs/2609.29892) — The rapid progression of large language models is extending AI from passive content generation into the active workflows of engineering and scientific discovery. Source: Hugging Face Daily Papers (Sep 25).

- [Coding Agents for Generalized Task and Motion Planning Problems](https://arxiv.org/abs/2609.30233) — Task and motion planning (TAMP) problems remain difficult even with full observability and object-centric states because discrete decisions are tightly coupled to geometric, kinematic, and dynamic constraints. Source: Hugging Face Daily Papers (Sep 25).

- [IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis](https://arxiv.org/abs/2609.29444) — Deep search requires LLM agents to decompose complex queries, search for evidence, and synthesize grounded answers, yet existing ReAct-style agents suffer from two limitations: role coupling, where one policy must handle planning, evidence use, and s Source: Hugging Face Daily Papers (Sep 25).

- [ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) — Scientific discovery begins where known problems end. Source: Hugging Face Daily Papers (Sep 25).

- [Learning to Discover Interesting Mathematics](https://arxiv.org/abs/2609.28603) — Recently, Large Language Models (LLMs) have been increasingly able to solve advanced mathematical problems, including many that have been open for decades. Source: Hugging Face Daily Papers (Sep 25).

- [RGBD20K: A Large-Scale Benchmark for RGB-D Semantic Segmentation](https://arxiv.org/abs/2609.29028) — In this paper, we propose RGBD20K, a novel dataset for facilitating the development of more robust and general RGB-D semantic segmentation by encompassing abundant categories and high-quality annotations. Source: Hugging Face Daily Papers (Sep 25).

- [Neural Spectral Capacity: Measuring and Designing Architectures from Network Specification Alone](https://arxiv.org/abs/2609.23087) — Modern Transformer design and compression both reduce to allocating capacity under a budget. Source: Hugging Face Daily Papers (Sep 25).

- [AgentKernel: The Trust-Native Agentic Operating System](https://arxiv.org/abs/2609.29647) — Modern AI agents routinely cross trust boundaries: they ingest untrusted content, combine it with privileged instructions, persist intermediate beliefs in long-term memory, and invoke privileged tools. Source: Hugging Face Daily Papers (Sep 25).

- [World Action Agent: Harnessing VLMs for Robot Manipulation via World Action Rehearsal](https://arxiv.org/abs/2609.29964) — General-purpose vision-language models (VLMs) bring broad knowledge and spatial reasoning to robot manipulation, yet existing systems either use them indirectly, to predict constraints or write programs, or give them a view of the scene rather than a Source: Hugging Face Daily Papers (Sep 25).

- [Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429) — Detectors of alignment failures screen deployed language models and score alignment benchmarks. Source: Hugging Face Daily Papers (Sep 25).

- [PUBG Ally: A Conversational Embodied Agent as an AI Teammate](https://arxiv.org/abs/2609.29837) — We introduce PUBG Ally, an embodied agent for PUBG: BATTLEGROUNDS that can reason, act autonomously, and play alongside players as a voice-enabled teammate. Source: Hugging Face Daily Papers (Sep 25).

- [AV-GRPO: Modality-Anchored Decoupling Diffusion Reinforcement Learning for Joint Audio-Video Generation](https://arxiv.org/abs/2609.29816) — Recent years have witnessed major progress in joint audio-video generation. Source: Hugging Face Daily Papers (Sep 25).

- [DeltaWAM: Delta World Action Models for Bimanual Manipulation](https://arxiv.org/abs/2609.28811) — World-action models (WAMs) transfer visual and motion priors from pretrained video generators to robot control by jointly modeling visual dynamics and actions. Source: Hugging Face Daily Papers (Sep 25).

- [ViRDM: Taming Representation Distribution Matching for Few-Step Causal Video Generation](https://arxiv.org/abs/2609.28923) — Few-step autoregressive (AR) video diffusion enables low-latency streaming generation, but existing post-training methods predominantly rely on Distribution Matching Distillation (DMD), requiring both a large pretrained teacher and an online critic t Source: Hugging Face Daily Papers (Sep 25).

- [Rate-distortion optimization for full-reference image quality metrics via stochastic Hessian estimates](https://arxiv.org/abs/2609.30077) — Block-based video codecs select coding parameters based on the input by optimizing a rate-distortion trade-off. Source: Hugging Face Daily Papers (Sep 25).

### DAIR.AI Papers of the Week (Sep 14–20)

- [Breaking the Token Ceiling: Distilling Smaller, Stronger Byte Models](https://arxiv.org/abs/2609.12303) — Small models are made more capable through distillation from a larger one that shares their tokenization scheme. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519) — As coding agents move from supervised code completion to unattended, around-the-clock exploration, their work expands from isolated predictions into long trajectories of reasoning, tool use, and feedback. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](https://arxiv.org/abs/2609.15983) — Language models can produce plausible short proofs, but may still be unreliable on long-horizon research problems, where progress depends on a sequence of uncertain and interdependent decisions. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [GAUGE: When Not to Trust LLM-as-a-Judge in User-Simulated Evaluation of Task-Oriented Agents](https://arxiv.org/abs/2609.12191) — Comparing and selecting task-oriented LLM agents increasingly relies on a low-cost offline evaluation gate: persona-driven LLM user-simulators converse with each candidate, an LLM-as-a-judge scores the transcripts, and the higher-scoring agent is pro Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Divide, Consult, Conquer: Capability Laundering Through Aligned LLMs](https://arxiv.org/abs/2609.15383) — Language model safety is typically evaluated one interaction at a time. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Is Bash All You Need? An Empirical Study of Tool Interfaces for Enterprise Digital Worker Agents](https://arxiv.org/abs/2609.11999) — In this study, we examine whether a general shell can outperform specialized tools on enterprise tasks. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Salesforce Koa: An Enterprise Language Model for Agentic Tool Use](https://arxiv.org/abs/2609.15066) — We present Salesforce Koa, an enterprise language model built by post-training the open-weight Nemotron-3-Super-120B foundation model with reinforcement learning using Group Relative Policy Optimization (GRPO). Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Mo' Models, Mo' Problems: How to best select model pools when designing Multi-Agent Systems](https://arxiv.org/abs/2609.17306) — Multi-agent Systems (MAS) combine multiple model outputs to solve complex reasoning tasks. Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Verifiable Social Reasoning for LLM Assistants](https://arxiv.org/abs/2609.17496) — LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narra Source: DAIR.AI Papers of the Week (Sep 14–20).

- [Skill-based Agentic Evaluation for Real-time Data Science Tasks](https://arxiv.org/abs/2609.16487) — We present a framework for evaluating data-science agents on live, continuously updated data using executable ground truth and format-agnostic factoid scoring. Source: DAIR.AI Papers of the Week (Sep 14–20).

## Source Receipts

- https://huggingface.co/papers/date/2026-09-25
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://export.arxiv.org/api/query
- https://openreview.net/
