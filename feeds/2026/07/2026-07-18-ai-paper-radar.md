# AI Radar Daily Feed - 2026-07-18

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 41.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, OpenReview, and arXiv.
- Source limitations: Hugging Face's July 18 URL redirected to its latest July
  17 page; DAIR.AI's July 5-12 issue remains its latest; the configured arXiv
  raw-query scan was rate-limited and unavailable after bounded retries.

## Recommended Tonight

- [SEED: Self-Evolving On-Policy Distillation for Agentic Reinforcement Learning](https://arxiv.org/abs/2607.14777)
  - Tags: agents, self-evolution, reinforcement-learning,
    on-policy-distillation.
  - What the paper claims: completed on-policy trajectories can produce
    hindsight skills whose token-level effect is distilled back into the
    current policy alongside outcome RL.
  - Why builders should inspect it: it offers a concrete training loop for
    internalizing reusable workflows and failure-avoidance rules from agent
    experience.
  - First reading action: trace one trajectory through skill extraction,
    rescoring, and the joint objective.
- [SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration](https://arxiv.org/abs/2607.15257)
  - Tags: agents, deep-research, persistent-state, failure-memory.
  - What the paper claims: explicit frontier, evidence, coverage, and failure
    state can coordinate parallel search agents and reduce repeated dead ends.
  - Why builders should inspect it: the state schema is directly applicable to
    long-running, citation-grounded research systems.
  - First reading action: map its four shared-state objects to one existing
    research workflow.
- [Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227)
  - Tags: agents, harnesses, evaluation, generalization.
  - What the paper claims: under matched feedback and inference budgets,
    automatic harness evolution does not consistently beat simpler search and
    shows limited held-out generalization in the reported experiments.
  - Why builders should inspect it: it supplies a stricter baseline and split
    discipline for claims about self-improving agent loops.
  - First reading action: inspect the held-out task design and matched-budget
    baseline.
- [How can we assess human-agent interactions? Case studies in software agent design](https://openreview.net/forum?id=PemVmA0nUE)
  - Tags: human-agent-interaction, coding-agents, evaluation, OpenHands.
  - What the paper claims: a learned satisfaction predictor can augment direct
    user ratings when evaluating agent designs at deployment scale.
  - Why builders should inspect it: it measures whether agent changes help
    people in practice, not only whether they lift benchmark completion.
  - First reading action: separate the human labels, pseudo-labels, and final
    decision metric.
- [BadWAM: When World-Action Models Dream Right but Act Wrong](https://arxiv.org/abs/2607.15207)
  - Tags: world-models, embodied-ai, safety, adversarial-evaluation.
  - What the paper claims: small visual perturbations can shift executed
    actions while preserving a plausible predicted future.
  - Why builders should inspect it: visual plausibility alone is not enough to
    validate action safety in predictive control systems.
  - First reading action: inspect the imagination-preserving attack and its
    proposed detection boundary.

## Full Candidate List

### Hugging Face Daily Papers - July 17

- [LongStraw](https://arxiv.org/abs/2607.14952) - Fits million-token RL execution into a fixed GPU budget through prompt-state replay, with incomplete training paths clearly disclosed.
- [VideoChat3](https://arxiv.org/abs/2607.14935) - Develops an efficient open video MLLM for diverse and streaming video understanding.
- [SEED](https://arxiv.org/abs/2607.14777) - Distills evolving hindsight skills from an agent policy's own trajectories.
- [SearchOS-V1](https://arxiv.org/abs/2607.15257) - Coordinates information-seeking agents through explicit shared search state and failure memory.
- [BadWAM](https://arxiv.org/abs/2607.15207) - Tests whether imagined futures remain trustworthy when adversarial inputs shift executed actions.
- [KeyFrame-Compass](https://arxiv.org/abs/2607.14202) - Benchmarks keyframe execution and quality in conditioned video generation.
- [MultiRef-Compass](https://arxiv.org/abs/2607.14189) - Evaluates multi-reference binding in audio-video generation.
- [UniVR](https://arxiv.org/abs/2607.12800) - Learns visual reasoning, dynamics, and planning from visual demonstrations.
- [Concurrent Image Understanding and Generation](https://arxiv.org/abs/2607.13188) - Couples text and image denoising so cross-modal contradictions can be revised.
- [From Pixels to States](https://arxiv.org/abs/2607.14076) - Reframes interactive world models around persistent state rather than only predicted pixels.
- [Spectral Rewiring](https://arxiv.org/abs/2607.03065) - Extracts compact reasoning-effective update directions while filtering interference.
- [RxBrain](https://arxiv.org/abs/2607.14187) - Couples language plans with visual state imagination for embodied tasks.
- [Video = World + Event Stream](https://arxiv.org/abs/2607.15038) - Separates persistent world context from real-time multimodal events.
- [Demystifying On-Policy Distillation](https://arxiv.org/abs/2607.13399) - Studies teacher mismatch and length exploitation in on-policy distillation.
- [RoboTTT](https://arxiv.org/abs/2607.15275) - Uses test-time training to compress long robot histories into fast weights.
- [DeepLoop](https://arxiv.org/abs/2607.13491) - Studies stable depth scaling for repeatedly applied Transformer blocks.
- [WanSong v1.0 Technical Report](https://arxiv.org/abs/2607.14749) - Presents long-form controllable music generation with a pure diffusion model.
- [MeanFlowNFT](https://arxiv.org/abs/2607.15273) - Brings forward-process reinforcement learning to few-step average-velocity generators.
- [Smarter and Cheaper at Once](https://arxiv.org/abs/2607.14431) - Reuses byte-exact verified KV state in a frozen model, with a proprietary engine and hash-based receipts.
- [VIABench](https://arxiv.org/abs/2607.14660) - Evaluates video assistants using first-person scenarios from blind people.
- [SUFLECA](https://arxiv.org/abs/2607.15058) - Learns geometry-aware features for fast zero-shot CAD alignment.
- [Partition, Prompt, Aggregate](https://arxiv.org/abs/2607.15277) - Tests probabilistic consistency by aggregating partition-conditioned model outputs.
- [AsySplat](https://arxiv.org/abs/2607.10995) - Splits geometry and appearance compute for efficient long-sequence 3D reconstruction.
- [Token Time Continuous Diffusion for Language Modeling](https://arxiv.org/abs/2607.14106) - Gives tokens individual continuous denoising times for fast generation.
- [Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227) - Compares harness search with matched-budget baselines and held-out tasks.
- [GRASP](https://arxiv.org/abs/2607.10463) - Learns when to use semantic, lexical, and expanded-context retrieval actions.
- [Chat2Scenic](https://arxiv.org/abs/2607.14387) - Grounds executable driving scenarios in regulations and DSL syntax.
- [Hierarchical Denoising For Multi-Step Visual Reasoning](https://arxiv.org/abs/2607.15278) - Plans visual solutions through coarse-to-fine hierarchical denoising.
- [On Locality and Length Generalization in Visual Reasoning](https://arxiv.org/abs/2607.09061) - Tests whether local recurrent perception avoids global shortcuts on visual reasoning tasks.

### DAIR.AI Papers of the Week - July 5-12

- [LLM-as-a-Verifier](https://arxiv.org/abs/2607.05391) - Reads continuous verifier signals from scoring-token logits.
- [Always-On Agents](https://arxiv.org/abs/2606.30306) - Treats durable state, authority, provenance, and rollback as one governed system.
- [HOLA](https://arxiv.org/abs/2607.02303) - Pairs compressive linear-attention state with bounded exact memory.
- [Puzzle-75B](https://arxiv.org/abs/2607.04371) - Compresses a hybrid MoE model for higher serving throughput.
- [The Harness Effect](https://arxiv.org/abs/2607.06906) - Measures how orchestration changes agent cost and performance with models fixed.
- [ReContext](https://arxiv.org/abs/2607.02509) - Replays query-relevant evidence before long-context generation.
- [Agent Limitations Taxonomy](https://arxiv.org/abs/2607.05775) - Organizes recurring failures across agent benchmarks.
- [BlockSearch](https://arxiv.org/abs/2607.01538) - Studies language-model retrieval at million-token corpus scale.
- [RLVR Meets Human Likeness](https://arxiv.org/abs/2607.01181) - Adds a learned human-likeness signal beside verifiable rewards.
- [Replicating ML Papers with Agents](https://arxiv.org/abs/2607.02134) - Gates paper replication on explicit workspace evidence.

### Curriculum and OpenReview

- [ReAct](https://arxiv.org/abs/2210.03629) - Interleaves reasoning with actions and observations.
- [How can we assess human-agent interactions?](https://openreview.net/forum?id=PemVmA0nUE) - Augments direct user ratings with learned satisfaction estimates for agent-design evaluation.

## Source Receipts

- https://huggingface.co/papers/date/2026-07-17
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://openreview.net/forum?id=PemVmA0nUE
- https://arxiv.org/
