# AI Radar Daily Feed - 2026-09-12

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 36.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.

## Recommended Tonight

- [EvoSafeHarness: Evolving Model- and Domain-Specific Harnesses for Securing Agents](https://arxiv.org/abs/2609.05903)
  - Tags: agents, agent-safety, harnesses, prompt-injection.
  - What the paper claims: a deployment-specific search over language policy
    and executable enforcement logic improves the reported safety-utility
    frontier across four agent benchmark families.
  - Why builders should inspect it: it treats agent safety as a property of the
    model, domain, effects, and runtime together rather than a universal prompt.
  - First reading action: inspect the harness representation, adversarial-review
    loop, held-out transfer, and adaptive-attack limits.
- [Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](https://arxiv.org/abs/2609.01481)
  - Tags: coding-agents, long-horizon-agents, harnesses, evaluation.
  - What the paper claims: repeated planner, developer, and independent-QA
    loops improve existing coding-agent harnesses across the reported benchmarks.
  - Why builders should inspect it: the independent evaluation boundary is a
    practical design for multi-day agent work that must accumulate evidence.
  - First reading action: compare the role contracts, output constraints, and
    matched three-iteration results with each standalone harness.
- [Language Models Can Control Their Own Attention](https://arxiv.org/abs/2609.02737)
  - Tags: context-engineering, sparse-attention, long-context, inference.
  - What the paper claims: models can declare global, focused-region, or local
    attention modes so an inference engine skips unnecessary KV-cache reads.
  - Why builders should inspect it: it turns context routing into an explicit,
    inspectable model action rather than another opaque retrieval heuristic.
  - First reading action: inspect the declaration grammar, engine integration,
    and accuracy-versus-attended-token tradeoff.
- [IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications](https://arxiv.org/abs/2609.10539)
  - Tags: coding-agents, specifications, reproducibility, clarification.
  - What the paper claims: models are substantially better at proposing a
    clarification after a defect is identified than locating real-world
    implementation-critical gaps unaided.
  - Why builders should inspect it: it targets the point where a coding agent
    should ask for missing information instead of inventing an implementation.
  - First reading action: inspect the real-world gap set, localization metric,
    clarification rubric, and oracle-resolution experiment.
- [NCP-ArchPreview Technical Report: Moving towards Latent Space Language Models through Next Concept Prediction](https://arxiv.org/abs/2609.10715)
  - Tags: foundation-models, latent-reasoning, pretraining, representations.
  - What the paper claims: joint next-token and product-quantized next-concept
    prediction improves reported training efficiency and downstream performance
    against its stated OLMo-3 baselines.
  - Why builders should inspect it: it tests whether explicit multi-token
    concepts can become a reusable model interface rather than staying implicit.
  - First reading action: inspect the architecture, aligned controls, compute
    accounting, and post-pretraining concept-module experiments.

## Full Candidate List

### Hugging Face Daily Papers - September 11

- [NCP-ArchPreview Technical Report](https://arxiv.org/abs/2609.10715) - jointly predicts tokens and product-quantized future concepts in an 8.9B latent-space language model.
- [SenseNova-U1.5](https://arxiv.org/abs/2609.11929) - unifies visual understanding, reasoning, generation, and editing in an encoder-free, VAE-free model.
- [SpatialBlock](https://arxiv.org/abs/2609.07064) - uses a synthetic block-stacking curriculum to teach spatial reasoning that transfers to real scenes.
- [EvoSafeHarness](https://arxiv.org/abs/2609.05903) - evolves deployment-specific language policy and executable safety logic for frozen agent models.
- [Mi-Ripple](https://arxiv.org/abs/2609.11317) - diagnoses and repairs lattice and granular artifacts from repeated AI image editing.
- [X-AuT](https://arxiv.org/abs/2609.11412) - combines progressive speech-encoder pruning with cross-scale distillation and lightweight adaptation.
- [Memory as Plans](https://arxiv.org/abs/2609.11561) - turns multimodal episodic memory into compact plans for fixed-context robot execution.
- [FreeFlow](https://arxiv.org/abs/2609.11486) - applies a feed-forward hierarchical transformer to optical flow without task-specific correlation or warping modules.
- [An Open Recipe for IMO Gold](https://arxiv.org/abs/2609.10712) - studies specialist post-training and iterative proof search in an open natural-language mathematics pipeline.
- [MetroLLM-Bench](https://arxiv.org/abs/2609.10016) - tests language models as structured transit-kiosk policies across 955 cases and six metro systems.
- [Studying Image Tokenizers as Visual Languages](https://arxiv.org/abs/2609.09143) - evaluates tokenizer choices through task-specific losses during controlled joint text-image training.
- [Recursive Code World Models](https://arxiv.org/abs/2609.11499) - recursively reconstructs executable 3D scene programs from global structure to local parts and back.
- [World in World](https://arxiv.org/abs/2609.11548) - explores hierarchical control for interactive long-horizon video world models.
- [TempCloze](https://arxiv.org/abs/2609.01515) - asks video models to recover a missing temporal middle with fewer language shortcuts.
- [Negative Self-Distillation](https://arxiv.org/abs/2609.11699) - learns from self-generated reasoning flaws while restricting updates to reasoning-critical tokens.
- [HyQuant](https://arxiv.org/abs/2608.27875) - keeps selected vertical and local attention states in high precision while quantizing the rest.
- [Building Multilingual Bridges](https://arxiv.org/abs/2609.10445) - studies how multilingual data composition transfers in-language reasoning to held-out languages.
- [Beyond Solver Verdicts](https://arxiv.org/abs/2609.11085) - detects formal encodings that preserve a solver verdict while changing the intended meaning.
- [UniH^3](https://arxiv.org/abs/2609.11156) - balances shared anatomical priors and task differences in one medical-image restoration model.
- [Generative Late-Interaction Embeddings](https://arxiv.org/abs/2609.11808) - stores a compact retrieval index and regenerates full page embeddings only for top candidates.
- [CARDEA](https://arxiv.org/abs/2609.06931) - grounds coronary-angiography reasoning in auditable spatial evidence.
- [DRG-MAPPO](https://arxiv.org/abs/2609.11155) - combines dynamic role assignment with graph-based multi-agent reinforcement learning.
- [IdeaAMBIG](https://arxiv.org/abs/2609.10539) - benchmarks whether models can identify and clarify research-method gaps that block faithful implementation.
- [Think Before You Link](https://arxiv.org/abs/2609.10745) - combines iterative retrieval and reasoning for rare multilingual multimodal entity linking.
- [ActReview](https://arxiv.org/abs/2609.09076) - uses review-rebuttal evidence to train grounded diagnoses and actionable revision suggestions.
- [Adaptive Bridge](https://arxiv.org/abs/2608.15380) - isolates critical ROS 2 subscribers from network-impaired peers through proxy routing and rate control.

### DAIR.AI Papers of the Week - August 31 to September 6

- [Language Models Can Control Their Own Attention](https://arxiv.org/abs/2609.02737) - lets a model declare which KV-cache region its next reasoning span should read.
- [Harness-of-Harness](https://arxiv.org/abs/2609.01481) - adds planning, coding, and independent testing iterations around existing coding harnesses.
- [WikiSkill](https://arxiv.org/abs/2608.27454) - compiles execution experience into a persistent wiki that supports reversible skill evolution.
- [SKILL.state](https://arxiv.org/abs/2608.26263) - replaces append-only procedural history with explicit validated mutable execution state.
- [CORAL](https://arxiv.org/abs/2609.02730) - runs a constrained observe-reason-optimize-measure loop around production recommender systems.
- [E-Commerce Bench](https://arxiv.org/abs/2608.30730) - evaluates long-horizon agents operating multiple stores through a deterministic simulated year.
- [AI Research Preference Models](https://arxiv.org/abs/2608.13940) - ranks research-agent branches before committing expensive experimental compute.
- [Trace as State](https://arxiv.org/abs/2609.02702) - moves a discovered reasoning trace before a long context so it can guide a fresh causal pass.
- [Selective Forgetting](https://arxiv.org/abs/2608.28978) - reports a matched negative result for graph retrieval while testing low-cost graph-memory pruning.
- [Runtime-Independent Persistent Agents](https://arxiv.org/abs/2609.00546) - separates continuity-bearing identity, memory, and code from replaceable runtimes and hosts.

## Source Receipts

- https://huggingface.co/papers/date/2026-09-11
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://arxiv.org/
- https://openreview.net/

The arXiv configured-query scan was unavailable after bounded HTTP 429/503
retries. OpenReview's official APIs returned HTTP 403, and a bounded indexed
fallback added no fresh candidate. These gaps are disclosed rather than filled
with inferred metadata.
