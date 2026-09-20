# AI Radar Daily Feed - 2026-09-19

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 34.
- Recommended tonight: 5, as a flexible reading menu.
- Sources checked: Hugging Face Daily Papers September 18, DAIR.AI Papers of the Week September 7–13, Henry Shi’s AI Crash Course, arXiv, and OpenReview.
- Source limits: arXiv query API returned 503/429 and timed out before the full nine-query scan could complete; OpenReview notes API returned 403; the DAIR.AI September 14–20 issue was not yet available.

## Recommended Tonight

- [An Empirical Study of Harness Design for Coding Agents](https://arxiv.org/abs/2609.20804)
  - Tags: coding-agents, harnesses, context-management, evaluation.
  - What the paper claims: With a fixed execution loop, the authors compare 176 settings across planning, action space, context strategy, and context budget, reporting that component value changes with model capability and available context.
  - Why builders should inspect it: The matched 176-setting design isolates which context, planning, and tool-interface choices actually help coding agents under different budgets.
  - First reading action: Inspect the fixed loop, component matrix, matched budget controls, and context-overflow failure analysis.
  - Evidence / code: No official code repository was verified; the paper provides matched benchmark settings and trajectory analysis.

- [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519)
  - Tags: coding-agents, harnesses, efficiency, recursive-improvement.
  - What the paper claims: Four selected mechanisms for action execution, context compaction, observation handling, and delegated reading reportedly keep comparable EdgeBench performance while cutting recorded token traffic by 44.7–49.0%.
  - Why builders should inspect it: Its four selected harness mechanisms make a concrete efficiency bet for long agent trajectories, with code available to inspect.
  - First reading action: Inspect the selection loop and the four mechanisms before reading the cost table.
  - Evidence / code: Official paper-linked code: https://github.com/NVlabs/SoL-Pi; 51-task EdgeBench evaluation is author-reported.

- [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](https://arxiv.org/abs/2609.09153)
  - Tags: agents, planning, procedural-memory, continual-improvement.
  - What the paper claims: A procedural graph guides an agent with local what-to-do structure and edits itself from successful and failed trajectories, accepting edits only when held-out performance holds or improves.
  - Why builders should inspect it: A self-editing procedural graph is an inspectable way to guide long tasks and connects directly to long-running agent design.
  - First reading action: Inspect the procedure triplets, active-node localization, edit acceptance rule, and flawed-prior experiment.
  - Evidence / code: The paper reports held-out validation of graph edits; no official code repository was verified.

- [PARSER: Read in Parallel, Reason in Depth for Long-Context LLM Agents](https://arxiv.org/abs/2609.06702)
  - Tags: long-context, multi-agent, retrieval, reasoning.
  - What the paper claims: Frozen chunk-reading subagents work in parallel while a trained lead agent iterates through scatter-gather reasoning; the authors report stronger long-context QA and lower latency than sequential memory baselines.
  - Why builders should inspect it: It separates parallel document reading from iterative reasoning, a useful architecture to compare with long-context and retrieval systems.
  - First reading action: Inspect the scatter-gather loop and controlled evidence-placement tests.
  - Evidence / code: Author-reported multi-hop QA, evidence-position perturbations, and latency study; no official code repository verified.

- [Designing Proactive Thought Partners for Writing](https://arxiv.org/abs/2609.01588)
  - Tags: human-ai-interaction, proactive-agents, writing, user-agency.
  - What the paper claims: In a one-week technology probe with 16 writers, participants configured proactive writing partners and valued non-directive, visually light suggestions for ideation and self-monitoring.
  - Why builders should inspect it: A one-week study of 16 writers gives a human-centered counterpoint: when and how a proactive assistant should offer help.
  - First reading action: Inspect the probe design, participant tasks, intervention triggers, and evidence for non-intrusive framing.
  - Evidence / code: One-week, 16-participant technology probe; no official code repository verified.

## Full Candidate List

### Hugging Face Daily Papers (Sep 18)

- [DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression](https://arxiv.org/abs/2609.19969) — The widespread adoption of long-horizon agents has made model workloads increasingly input-heavy. Source: Hugging Face Daily Papers (Sep 18).
- [Can MiniMax-H3 Reason About the Physical World? An Evaluation of Omni-Modal Generative Model](https://arxiv.org/abs/2609.18323) — Recent Omni-Modal Generative Models (Omni-Models) have advanced content generation toward unified modeling of text, images, video, and audio. Source: Hugging Face Daily Papers (Sep 18).
- [When EOS Tokens Disagree: Understanding Length Inflation in On-Policy Distillation](https://arxiv.org/abs/2609.20511) — We study length inflation in on-policy distillation (OPD), where student responses can become excessively long and even exhaust the generation budget. Source: Hugging Face Daily Papers (Sep 18).
- [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519) — As coding agents move from supervised code completion to unattended, around-the-clock exploration, their work expands from isolated predictions into long trajectories of reasoning, tool use, and feedback. Source: Hugging Face Daily Papers (Sep 18).
- [An Empirical Study of Harness Design for Coding Agents](https://arxiv.org/abs/2609.20804) — Coding harnesses shape how autonomous coding agents translate model capabilities into long-horizon software-engineering performance, yet existing work typically evaluates harnesses as monolithic systems, leaving the effectiveness of individual components unclear. Source: Hugging Face Daily Papers (Sep 18).
- [JEPA-Anything: Learning Predictive Models across Different Worlds](https://arxiv.org/abs/2609.20800) — World modeling enables intelligence to anticipate consequences, guide interventions, and learn from interaction. Source: Hugging Face Daily Papers (Sep 18).
- [Verifiable Social Reasoning for LLM Assistants](https://arxiv.org/abs/2609.17496) — LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii)… Source: Hugging Face Daily Papers (Sep 18).
- [Self-Evolving Search Index](https://arxiv.org/abs/2609.19656) — Information retrieval is increasingly important as LLM agents tackle complex tasks involving diverse information needs. Source: Hugging Face Daily Papers (Sep 18).
- [RiskChainBench: A Benchmark for Obfuscated Platform Message Restoration and Evidence-Grounded Web Investigation](https://arxiv.org/abs/2609.16900) — Platform abuse campaigns conceal redirection instructions with emojis, homophones, character decomposition, and redundant symbols, then route users through disguised links to services associated with pornography, fraud, gambling, or illicit transactions. Source: Hugging Face Daily Papers (Sep 18).
- [RetireOPD: Self-Retiring On-Policy Distillation for Agentic Reinforcement Learning](https://arxiv.org/abs/2609.20784) — Multi-turn agents trained with reinforcement learning (RL) receive a single scalar reward per trajectory, which motivates self on-policy distillation (OPD) to supply dense token-level supervision from a self-teacher with privileged task skills, letting a skill-free… Source: Hugging Face Daily Papers (Sep 18).
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://arxiv.org/abs/2609.17653) — GUI agents execute long-horizon tasks on dynamic graphical user interfaces, where pop-ups, delayed loads, and relocated widgets routinely invalidate plans fixed before execution. Source: Hugging Face Daily Papers (Sep 18).
- [Video DeltaNet: A Video-Native Hybrid Attention for Livestream Video Generation](https://arxiv.org/abs/2609.20744) — Video diffusion models repeatedly process long spatiotemporal token sequences during denoising, making attention a major computational bottleneck. Source: Hugging Face Daily Papers (Sep 18).
- [WeVisDoc: From Coverage to Capability for Robust End-to-End Document Parsing](https://arxiv.org/abs/2609.20423) — Document parsing converts document images into structured content and requires reliable performance across diverse layouts and acquisition conditions. Source: Hugging Face Daily Papers (Sep 18).
- [VABench: Measuring Embodied Spatial Intelligence through Visual Demonstrations, Active Perception, and Metric Control](https://arxiv.org/abs/2609.19554) — Spatial intelligence requires more than describing object locations. Source: Hugging Face Daily Papers (Sep 18).
- [When2Think: Learning Difficulty-Aware Length Control for Efficient Hybrid Reasoning Models](https://arxiv.org/abs/2609.19671) — Large Reasoning Models (LRMs) achieve strong performance on complex tasks but exhibit systematic inefficiency: they often overthink easy problems and underthink hard ones. Source: Hugging Face Daily Papers (Sep 18).
- [FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations](https://arxiv.org/abs/2609.20817) — Modeling articulated objects from sparse monocular views is challenging because each observation reveals only partial geometry and motion evidence. Source: Hugging Face Daily Papers (Sep 18).
- [What Does Privileged Information Add to On-Policy Self-Distillation?](https://arxiv.org/abs/2609.20612) — On-policy self-distillation (OPSD) lets a language model learn from a frozen copy of itself that sees an answer or a worked solution. Source: Hugging Face Daily Papers (Sep 18).
- [Sample Count Is Not Enough: Candidate-Generation Strategy Shapes the Energy and Performance of LLM Test-Time Scaling](https://arxiv.org/abs/2609.19499) — Test-time scaling can improve large language model reasoning by generating and combining multiple candidate responses. Source: Hugging Face Daily Papers (Sep 18).
- [Don't Mask the Environment: Observation Supervision Changes How Agents Explore Under RL](https://arxiv.org/abs/2609.20715) — Agent trajectories record what an agent does and what happens next. Source: Hugging Face Daily Papers (Sep 18).
- [UFO: Chain-of-Evaluation for Omni-Condition Alignment in Multi-Modal Image Generation](https://arxiv.org/abs/2609.12397) — Multi-modal image generation, particularly subject-driven customization, has garnered growing attention in recent years. Source: Hugging Face Daily Papers (Sep 18).
- [Region-Level Policy Optimization for Fine-grained MLLM Perception](https://arxiv.org/abs/2609.19745) — Fine-grained visual perception in MLLMs is commonly improved by raising the resolution, but the added visual tokens inflate vision-encoding and language-model prefilling costs. Source: Hugging Face Daily Papers (Sep 18).
- [Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts](https://arxiv.org/abs/2609.05661) — We present Srijika, a system for producing installable OpenType fonts for nine Brahmic scripts: Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, and Odia. Source: Hugging Face Daily Papers (Sep 18).
- [PACT: Can Enterprise AI Assistants Be Trusted Under Pressure?](https://arxiv.org/abs/2609.18605) — As corporate AI adoption continues to grow, enterprise-grade LLM agents are being deployed into sensitive contexts such as hiring, healthcare, and finance. Source: Hugging Face Daily Papers (Sep 18).
- [VākQA: A Benchmark and Evaluation Study for Telugu Spoken Factoid Question Answering](https://arxiv.org/abs/2609.19879) — Question answering has advanced rapidly with large language models, but predominantly for high-resource languages, in both text and spoken settings. Source: Hugging Face Daily Papers (Sep 18).

### DAIR.AI Papers of the Week (Sep 7–13)

- [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](https://arxiv.org/abs/2609.09153) — Large language models are increasingly deployed as agents that plan over long horizons and act through external tools. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [FrogNano: Training a 4B Coding Agent via Online Task Synthesis](https://arxiv.org/abs/2609.07925) — We present FrogNano, a 4B coding agent designed to tackle software engineering (SWE) tasks efficiently and effectively, even under resource-constrained environments. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [STAIR (STructure Aware Information Retriever): A novel dataset and LLM based retriever for document structure augmentation](https://arxiv.org/abs/2609.03874) — Retrieval Augmented Generation (RAG) is a key component for generating accurate and hallucination free answers using Large Language Models (LLMs). Source: DAIR.AI Papers of the Week (Sep 7–13).
- [Design Docs Are All You Need: An AI-native Machine-Learning Performance Tool](https://arxiv.org/abs/2609.05364) — Machine-learning performance modeling is a uniquely hostile terrain for long-lived software: the assumptions baked into today's abstractions are invalidated by tomorrow's models and systems, forcing perpetual refactoring of performance-modeling frameworks. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [PARSER: Read in Parallel, Reason in Depth for Long-Context LLM Agents](https://arxiv.org/abs/2609.06702) — Sequential memory agents process long documents by reading chunks one after another while maintaining a compact memory state, coupling document traversal to reasoning depth. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [Designing Proactive Thought Partners for Writing](https://arxiv.org/abs/2609.01588) — Writing involves diverse cognitive activities, from ideation to revision, and writers' needs vary across individuals and moments. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [Codebook Agent: Amortized Topology Design for LLM Multi-Agent Systems](https://arxiv.org/abs/2609.02264) — Adapting the communication topology of an LLM multi-agent system to each query improves both accuracy and efficiency, yet current designers treat this as conditional graph generation: a variational, autoregressive, or diffusion decoder searches the $N \times N$… Source: DAIR.AI Papers of the Week (Sep 7–13).
- [A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms](https://arxiv.org/abs/2609.04170) — Multi-agent AI science ecosystems rely on agents possessing tools that allow them to communicate, coordinate, and build on each other's work. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails](https://arxiv.org/abs/2609.09134) — Agent harnesses (the system prompt, tool set, execution hooks, and context-management scaffolding around a model) are a critical determinant of agentic task success. Source: DAIR.AI Papers of the Week (Sep 7–13).
- [The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](https://arxiv.org/abs/2609.11873) — Recursive self-improvement (RSI) enables AI systems to turn experience and feedback into persistent changes that improve both their capabilities and the process of future improvement. Source: DAIR.AI Papers of the Week (Sep 7–13).

## Source Receipts

- https://huggingface.co/papers/date/2026-09-18
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://export.arxiv.org/api/query
- https://openreview.net/group?id=ICLR.cc/2027/Conference
