# AI Radar Daily Feed - 2026-07-14

Public-safe daily paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 31.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, OpenReview/TMLR, and arXiv.
- Source limitation: the configured arXiv raw-query scan was rate-limited; its
  primary records were used only to verify papers surfaced by other sources.

## Recommended Tonight

- [Weak-to-Strong Generalization via Direct On-Policy Distillation](https://arxiv.org/abs/2607.05394)
  - Tags: post-training, reinforcement-learning, weak-to-strong.
  - What the paper claims: a weak model's pre/post-RL policy shift can become a
    dense implicit reward for a stronger student's on-policy trajectories.
  - Why builders should inspect it: it offers a reusable alternative to
    repeating expensive sparse-reward RL on every target model.
  - First reading action: derive the checkpoint log-ratio signal and compare it
    with ordinary teacher imitation.
- [Proxy Exploration and Reusable Guidance](https://arxiv.org/abs/2607.11505)
  - Tags: post-training, proxy-models, signal-transfer.
  - What the paper claims: a lightweight proxy can discover relative
    improvement signals that transfer to a stronger primary model.
  - Why builders should inspect it: it turns post-training into separable,
    cacheable stages and has public code and experiment artifacts.
  - First reading action: compare PUST's transferred signal with Direct-OPD's
    teacher-pair policy shift.
- [ABot-AgentOS: A General Robotic Agent OS with Lifelong Multi-modal Memory](https://arxiv.org/abs/2607.10350)
  - Tags: agents, continual-learning, multimodal-memory, verification.
  - What the paper claims: an agent runtime can combine planning, isolated
    skills, graph memory, verification, and failure-gated self-evolution above
    low-level controllers.
  - Why builders should inspect it: it treats long-horizon memory and learning
    as governed system components with trace-grounded evaluation.
  - First reading action: inspect the memory graph and the rule that prevents
    current-split evaluation leakage.
- [NeuroCogMap Reveals Cognitive Organization of Large Language Models](https://arxiv.org/abs/2607.00397)
  - Tags: mechanistic-interpretability, cognition, neuroscience.
  - What the paper claims: sparse model features can be organized into
    functional parcels linked to capabilities, failures, and cortical data.
  - Why builders should inspect it: the work pairs an ambitious cognition
    framing with public code, processed data, and intervention targets.
  - First reading action: separate the model-internal evidence from the broader
    human-cognition interpretation.
- [WAREX: Web Agent Reliability Evaluation on Existing Benchmarks](https://openreview.net/forum?id=o4pXVP8RCD)
  - Tags: web-agents, reliability, fault-injection, evaluation.
  - What the paper claims: realistic web failures expose robustness gaps that
    clean benchmark conditions miss.
  - Why builders should inspect it: fault injection and recovery traces are a
    practical upgrade to web-agent evaluation.
  - First reading action: map one network failure and one interface failure to
    a recovery metric in an existing harness.

## Full Candidate List

### Hugging Face Daily Papers

- [Weak-to-Strong Generalization via Direct On-Policy Distillation](https://arxiv.org/abs/2607.05394) - Transfers a weak model's RL-induced policy shift to a stronger student.
- [ABot-N1](https://arxiv.org/abs/2607.10383) - Separates slow visual-language reasoning from fast navigation control.
- [ABot-AgentOS](https://arxiv.org/abs/2607.10350) - Adds auditable memory, verification, and self-evolution to an embodied agent runtime.
- [4D Human-Scene Reconstruction from Low-Overlap Captures](https://arxiv.org/abs/2607.09125) - Reconstructs dynamic humans and scenes from limited-overlap views.
- [LightMem-Ego](https://arxiv.org/abs/2607.11487) - Builds hierarchical memory from continuous egocentric inputs.
- [AdvancedMathBench](https://arxiv.org/abs/2607.11849) - Benchmarks advanced proof generation and verification.
- [Metacognition in LLMs](https://arxiv.org/abs/2607.11881) - Surveys measurement and improvement of model self-monitoring.
- [EgoSteer](https://arxiv.org/abs/2607.09701) - Learns steerable dexterous manipulation from egocentric video.
- [Proxy Exploration and Reusable Guidance](https://arxiv.org/abs/2607.11505) - Transfers reusable improvement signals discovered by a lightweight proxy.
- [MET](https://arxiv.org/abs/2607.11736) - Combines culturally adapted moral evaluation with theory-grounded multilingual reasoning.
- [Multi-Agent LLMs Fail to Explore Each Other](https://arxiv.org/abs/2607.11250) - Uses structured peer selection to improve multi-agent exploration.
- [NeuroCogMap](https://arxiv.org/abs/2607.00397) - Maps model features into functional parcels linked to behavior and failure.
- [Xiaomi-Robotics-U0](https://arxiv.org/abs/2607.11643) - Unifies embodied synthesis with a world foundation model.
- [CtrlVTON](https://arxiv.org/abs/2607.09362) - Adds visual-instance control to virtual try-on.
- [Latent-Identity Tuning](https://arxiv.org/abs/2607.11885) - Tunes identity representations for personalized image generation.
- [Motion4Motion](https://arxiv.org/abs/2607.11644) - Transfers motion across subjects at inference time.
- [LATO.2](https://arxiv.org/abs/2607.10623) - Factorizes 3D mesh generation into vertex and topology flows.
- [A Theory of Contrastive Learning with Natural Images](https://arxiv.org/abs/2607.07470) - Studies contrastive learning through natural-image structure.
- [Evidence-Backed Video Question Answering](https://arxiv.org/abs/2607.11862) - Requires answers to include explicit spatiotemporal evidence.

### DAIR.AI Papers of the Week

- [LLM-as-a-Verifier](https://arxiv.org/abs/2607.05391) - Reads continuous verifier scores from scoring-token logits.
- [Always-On Agents](https://arxiv.org/abs/2606.30306) - Treats durable state, authority, provenance, and rollback as one governed system.
- [HOLA](https://arxiv.org/abs/2607.02303) - Pairs compressive linear-attention state with bounded exact memory.
- [Puzzle-75B](https://arxiv.org/abs/2607.04371) - Compresses a hybrid MoE model for higher serving throughput.
- [The Harness Effect](https://arxiv.org/abs/2607.06906) - Measures how orchestration changes agent cost and performance with models fixed.
- [ReContext](https://arxiv.org/abs/2607.02509) - Replays query-relevant evidence before long-context generation.
- [Agent Limitations Taxonomy](https://arxiv.org/abs/2607.05775) - Organizes recurring agent failures across benchmarks.
- [BlockSearch](https://arxiv.org/abs/2607.01538) - Studies language-model retrieval at million-token scale.
- [RLVR Meets Human Likeness](https://arxiv.org/abs/2607.01181) - Adds a learned human-likeness signal beside verifiable rewards.
- [Replicating ML Papers with Agents](https://arxiv.org/abs/2607.02134) - Gates paper replication on explicit workspace evidence.

### Curriculum and OpenReview

- [ReAct](https://arxiv.org/abs/2210.03629) - Interleaves reasoning with actions and observations.
- [WAREX](https://openreview.net/forum?id=o4pXVP8RCD) - Injects realistic web failures into existing agent benchmarks.

## Source Receipts

- https://huggingface.co/papers/date/2026-07-14
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://openreview.net/forum?id=o4pXVP8RCD
- https://arxiv.org/
