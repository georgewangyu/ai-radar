# AI Radar Daily Feed - 2026-08-01

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 53.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, OpenReview, and arXiv.
- Source limitations: Hugging Face's latest published page was July 31;
  DAIR.AI's July 20-26 issue remains its latest; OpenReview forum pages were
  blocked by browser verification, so indexed records were used; the
  configured arXiv query scan was unavailable after four HTTP `429`
  responses.

## Recommended Tonight

- [Metis: Memory Foundation Model](https://arxiv.org/abs/2607.26760)
  - Tags: memory, agents, continual-learning, architecture.
  - What the paper claims: a foundation model can maintain and update a native
    memory state through forward computation while its learned weights remain
    frozen.
  - Why builders should inspect it: it creates a concrete comparison between
    native model memory, external retrieval, recurrent state, and weight
    updates.
  - First reading action: inspect the architecture, memory-update procedure,
    ablations, and limitations.
- [Qwen-UI-Agent Technical Report](https://arxiv.org/abs/2607.28227)
  - Tags: gui-agents, computer-use, reinforcement-learning, harnesses.
  - What the paper claims: one agent system can combine GUI and CLI actions
    across mobile, desktop, browser, and research tasks while training on
    long-horizon online rollouts.
  - Why builders should inspect it: it exposes environment construction,
    failure diagnosis, data generation, model training, and stateful harness
    design as one system.
  - First reading action: trace one real-device task through action schema,
    rollout, diagnosis, and evaluation.
- [Frontis-MA1](https://arxiv.org/abs/2607.28568)
  - Tags: agents, recursive-self-improvement, machine-learning-engineering,
    search.
  - What the paper claims: execution-grounded Draft, Improve, Debug, and
    Crossover operators can be trained and composed into long-horizon search
    for machine-learning engineering.
  - Why builders should inspect it: the evaluation separates the learned
    operator model from the search framework and releases a reproducible
    full-stack system.
  - First reading action: inspect the operator training data and model-versus-
    framework swap experiments before the headline scores.
- [Is Progressive Disclosure All You Need for Long-Context Agents?](https://arxiv.org/abs/2607.17598)
  - Tags: context-engineering, agent-skills, retrieval, evaluation.
  - What the paper claims: progressive disclosure helps under weak navigation
    or multi-book scale, adds little beside strong retrieval, and can degrade
    when routing becomes too deep.
  - Why builders should inspect it: it replaces a popular Agent Skills design
    intuition with controlled harness- and corpus-dependent evidence.
  - First reading action: compare single-book and multi-book results across
    raw navigation, skill packs, and hybrid retrieval.
- [Verbalizable Representations Form a Global Workspace in Language Models](https://arxiv.org/abs/2607.15495)
  - Tags: interpretability, reasoning, global-workspace, alignment.
  - What the paper claims: an intermediate-layer representation space carries
    reportable, controllable, reasoning-relevant contents with functional
    hallmarks of a global workspace.
  - Why builders should inspect it: the paper offers mechanistic interventions
    and carefully scopes the analogy to conscious access rather than claiming
    phenomenal consciousness.
  - First reading action: read the operational definition, intervention
    evidence, and claim-scope discussion.

## Full Candidate List

### Hugging Face Daily Papers - July 31

- [AskChem](https://arxiv.org/abs/2607.28618) - Retrieves provenance-carrying claims rather than only ranked papers.
- [Qwen-UI-Agent](https://arxiv.org/abs/2607.28227) - Unifies GUI and CLI execution across real-device agent environments.
- [Metis](https://arxiv.org/abs/2607.26760) - Adds a persistent, forward-updated memory state to a foundation model.
- [Frontis-MA1](https://arxiv.org/abs/2607.28568) - Trains program-evolution operators for executable AI-for-AI improvement.
- [PhiZero](https://arxiv.org/abs/2607.28624) - Represents physical world transitions through a discrete physical language.
- [VideoCoCo](https://arxiv.org/abs/2607.27380) - Uses code as an explicit reasoning layer for physically consistent video.
- [Memory Decoder at Scale](https://arxiv.org/abs/2607.27919) - Separates parametric long-term memory from the reasoning model.
- [Beacon](https://arxiv.org/abs/2607.28595) - Learns when and how to invoke agentic visual reasoning.
- [BM25 Wins at Scale](https://arxiv.org/abs/2607.26497) - Compares the accuracy-cost scaling of lexical, dense, graph, and agentic RAG.
- [Flux-OPD](https://arxiv.org/abs/2607.28022) - Studies on-policy distillation under evolving training contexts.
- [MPIE-Bench](https://arxiv.org/abs/2607.27616) - Benchmarks anatomical plausibility in multi-person image editing.
- [ACE-Data-0](https://arxiv.org/abs/2607.28625) - Uses human-centric ambient capture as an embodied-data engine.
- [Beyond Borrowed Histories](https://arxiv.org/abs/2607.27816) - Aligns user simulation with individual role-playing personas.
- [RefCaptioner](https://arxiv.org/abs/2607.28509) - Grounds video captions to multiple reference images.
- [See2Think](https://arxiv.org/abs/2607.26769) - Tests whether multimodal models use intermediate visual states.
- [SpatialCLI](https://arxiv.org/abs/2607.27703) - Trains spatial reasoning with tools and tests transfer without them.
- [beta-OPSD](https://arxiv.org/abs/2607.28582) - Derives on-policy self-distillation through policy optimization.
- [Chimera](https://arxiv.org/abs/2607.28611) - Designs and scales hybrid-attention visual diffusion transformers.
- [ShadowDancer](https://arxiv.org/abs/2607.28362) - Learns unified dynamics for frame-level video world-model control.
- [Can Large Language Models Execute Parent Orders?](https://arxiv.org/abs/2607.28410) - Evaluates LLM decision policies for algorithmic order execution.
- [MemHarness](https://arxiv.org/abs/2607.28272) - Reconstructs retrieved experience for the present state instead of replaying it.
- [Sigma-Mem](https://arxiv.org/abs/2607.27958) - Tracks which agents are reliable under which conditions.
- [INTACT](https://arxiv.org/abs/2607.26056) - Learns intent-to-action mappings for search-free world-model control.
- [Explorative Modeling](https://arxiv.org/abs/2607.27372) - Proposes exploration as an additional pretraining axis.
- [LEDGERMIND](https://arxiv.org/abs/2607.28374) - Constrains multimodal agent reasoning with a provenance ledger.
- [Echoverse](https://arxiv.org/abs/2607.28074) - Creates deep, evolving environments for computer-use-agent training.
- [Multi-Head Attention Residuals](https://arxiv.org/abs/2607.27230) - Replaces one residual stream with attention-addressable residual states.
- [Filesystem-Based Memory for LLM Agents](https://arxiv.org/abs/2607.26637) - Measures organization, cost, and answer quality in agent-managed memory filesystems.
- [Revisiting Lossy Verification in Speculative Decoding](https://arxiv.org/abs/2607.26627) - Maps mechanisms and failure modes in relaxed speculative verification.
- [Harness-G](https://arxiv.org/abs/2607.27652) - Represents search-agent harnesses as explicit graphs.
- [ReToken](https://arxiv.org/abs/2607.28627) - Adds a retrieval token for long visual contexts.
- [OmniScope](https://arxiv.org/abs/2607.23193) - Compresses omnimodal context without one modality controlling retention.
- [Is Deep Research Reliable?](https://arxiv.org/abs/2607.20891) - Tests how misleading retrieved knowledge induces false conclusions.
- [AI Tour Meeting](https://arxiv.org/abs/2607.18806) - Coordinates multiple LLM agents for group travel planning.
- [Beyond Geometric Complementarity](https://arxiv.org/abs/2607.28308) - Studies coherent overlap in sparse mixture-of-experts routing.
- [Fairness Pruning](https://arxiv.org/abs/2607.28319) - Locates demographic bias in GLU-MLP layers.
- [AMRD](https://arxiv.org/abs/2607.25289) - Distills multiple teachers into lightweight speech-emotion recognition.
- [Pedestrian Archetypes Extension](https://arxiv.org/abs/2607.16922) - Adds pedestrian behavior models for autonomous-vehicle safety tests.

### DAIR.AI Papers of the Week - July 20-26

- [Harness Handbook](https://arxiv.org/abs/2607.13285) - Generates a behavior-centered, source-linked map of an evolving harness.
- [From Memory to Skills](https://arxiv.org/abs/2607.16621) - Converts grounded experience into governed memory and callable skills.
- [PRO-LONG](https://arxiv.org/abs/2607.20064) - Keeps complete interaction logs searchable by coding-agent tools.
- [Global Workspace in Language Models](https://arxiv.org/abs/2607.15495) - Identifies verbalizable, reasoning-relevant internal representations.
- [GAMUT](https://arxiv.org/abs/2607.19322) - Evaluates answer completeness with structured, evidence-backed rubrics.
- [Progressive Disclosure for Long-Context Agents](https://arxiv.org/abs/2607.17598) - Measures when skill-pack disclosure helps over navigation and retrieval.
- [Structured Output Collapses Diversity](https://arxiv.org/abs/2607.18476) - Tests how JSON and XML prompting alter model-output diversity.
- [Bad Memory in Agents](https://arxiv.org/abs/2607.14611) - Evaluates prompt injection planted in persistent coding-agent memory.
- [Frontier Models Struggle to Copy](https://arxiv.org/abs/2607.16072) - Tests a positional-encoding account of long-copy failures.
- [RoboTTT](https://arxiv.org/abs/2607.15275) - Applies test-time training to long visuomotor context.

### Curriculum and OpenReview

- [ReAct](https://arxiv.org/abs/2210.03629) - Interleaves reasoning, actions, and observations as a foundational agent pattern.
- [Holistic Agent Leaderboard](https://openreview.net/forum?id=vUaY1t64ZZ) - Standardizes cost-aware evaluation across models, scaffolds, and benchmarks.
- [Towards a Science of AI Agent Reliability](https://openreview.net/forum?id=QmdQRRJYE5) - Decomposes reliability into consistency, robustness, predictability, and safety.
- [Measuring Agents in Production](https://openreview.net/forum?id=FxNCt9xtOZ) - Studies how practitioners build and evaluate deployed agents.
- [Implicit Intelligence](https://openreview.net/forum?id=IhdGi9qknL) - Evaluates whether agents discover unstated user constraints.

## Source Receipts

- https://huggingface.co/papers/date/2026-07-31
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://openreview.net/
- https://arxiv.org/
