# AI Radar Daily Feed - 2026-09-05

Public-safe daily paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 41.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.

## Recommended Tonight

- [Evaluating Skills, Not Just Agents: Agentic Continuous Evaluation of Skills](https://arxiv.org/abs/2608.20614)
  - Tags: agents, skills, evaluation, paired-trials.
  - What the paper claims: ACES measures Skill Lift by comparing controlled
    agent runs with and without the target skill.
  - Why builders should inspect it: it replaces document-only review with an
    outcome-oriented test of whether a capability package helps.
  - First reading action: inspect the paired-run controls, metric definitions,
    and ATIF normalization; code: https://github.com/NVIDIA/SkillEvaluator.
- [The Compaction Cliff in Long-Running AI Agent Memory](https://arxiv.org/abs/2608.22752)
  - Tags: agents, context-engineering, safety, memory.
  - What the paper claims: repeated uniform context compaction rapidly erases
    exact safety rules, while type-aware retention preserves more of them.
  - Why builders should inspect it: long-running agents need different policies
    for exact instructions and lossy episodic narrative.
  - First reading action: inspect the retention protocol and the TypeCompact,
    TypeDecompose, and TypeRetrieve operators.
- [Context as an Environment: Programmatic Context Management for Long-Horizon Agents](https://arxiv.org/abs/2608.21690)
  - Tags: agents, context-engineering, memory, event-logs.
  - What the paper claims: Scroll lets model-written code operate over lossless
    session history and persistent typed state, printing only selected context.
  - Why builders should inspect it: the design cleanly separates durable
    evidence, computed state, and prompt-visible projections.
  - First reading action: inspect the event log, namespace, projection boundary,
    and eviction index.
- [Knowing When Not to Reuse: Conditional Experience Transfer in Autonomous LLM Post-Training](https://arxiv.org/abs/2608.26730)
  - Tags: continual-learning, post-training, provenance, regression-testing.
  - What the paper claims: BCIT authorizes reuse of past update evidence only
    when its source context still applies or a bounded current trial supports it.
  - Why builders should inspect it: compounding experience needs provenance and
    conflict checks so stale success does not become permission.
  - First reading action: inspect the experience record, conflict taxonomy,
    bounded trial, and adoption rule.
- [VeriPhy: Agentic Physical Reasoning for World Model Evaluation and Refinement](https://arxiv.org/abs/2609.03153)
  - Tags: world-models, multimodal, evaluation, provenance.
  - What the paper claims: VeriPhy converts prompts into typed physical
    obligations and traceable supported, contradicted, or unknown judgments.
  - Why builders should inspect it: it tests generated video through auditable
    physical evidence instead of relying on one opaque quality score.
  - First reading action: inspect the obligation compiler, evidence schema,
    resolver, and localized failure examples.

## Full Candidate List

### Hugging Face Daily Papers - September 4

- [Compile by Training: Turning Natural-Language Specifications into Local Neural Functions](https://arxiv.org/abs/2609.04199) - compiles a described text task into a reusable small neural function.
- [Terminal-Universe: Turning Agent Trajectories into Scalable Terminal Environments](https://arxiv.org/abs/2609.04148) - reconstructs executable terminal environments from agent trajectories.
- [LLaDA-Image: Building Strong Image Generators with Fully Open Training Recipes](https://arxiv.org/abs/2609.03796) - presents an open image-generation training recipe and model release.
- [Random Attention: Rethinking KV Cache Eviction for Efficient Reasoning](https://arxiv.org/abs/2609.03430) - tests prompt-preserving random KV-cache eviction for reasoning workloads.
- [Knowing When Not to Reuse: Conditional Experience Transfer in Autonomous LLM Post-Training](https://arxiv.org/abs/2608.26730) - gates experience reuse on current applicability and bounded evidence.
- [LatentPress: Context Compression Beyond Text and Vision](https://arxiv.org/abs/2609.01507) - stores compressed context as continuous memory tokens.
- [RoboTok: An Internet-Scale Data Engine for Human Demonstration Retrieval and Dexterous Manipulation Learning](https://arxiv.org/abs/2609.03199) - retrieves human manipulation demonstrations from web video.
- [Rethinking On-Policy Distillation of Large Language Models II: One Training Example](https://arxiv.org/abs/2609.04172) - studies the unexpectedly broad state coverage of one-query distillation.
- [Why Gated DeltaNet Survives 4-Bit Quantization: NVFP4 W4A4 for the Recurrent Half of a Hybrid 27B LLM](https://arxiv.org/abs/2609.04098) - tests full 4-bit quantization of a hybrid recurrent-attention model.
- [Puffin-World: Scaling a Unified Multimodal Model with Native 3D World States](https://arxiv.org/abs/2609.04196) - jointly models physics, geometry, appearance, and camera state.
- [Scal3R: Learning Efficient Multi-Relative Pose Query for Scalable Online 3D Reconstruction](https://arxiv.org/abs/2609.04201) - uses multi-reference pose queries for long-video 3D reconstruction.
- [Editable Visual Design](https://arxiv.org/abs/2609.04034) - combines coding-agent layout with generated assets for editable designs.
- [The Missing Temporal Link: Temporal Context Routing for Script-Driven Audio-Video Generation](https://arxiv.org/abs/2609.02367) - aligns timed scripts with audio-video generation coordinates.
- [Beyond Retrieval: Progressive Latent Memory Evolution for Streaming Video Understanding](https://arxiv.org/abs/2609.04131) - evolves bounded latent memory for causal streaming-video reasoning.
- [Last Translation Benchmark](https://arxiv.org/abs/2609.04173) - pairs hard translation examples with concrete verification rules.
- [CORE: Improving Compositional Reasoning in MLLM Embedding via Reranker Distillation](https://arxiv.org/abs/2609.04083) - distills compositional reranker judgments into multimodal embeddings.
- [RealSWE: A Compositional Evaluation of Coding Agents under Realistic User Requests](https://arxiv.org/abs/2608.27831) - compares benchmark issues with shorter real coding-agent requests.
- [DRACO: Fine-Grained Credit Assignment with Dynamic Rubrics for Long-Horizon Agent Training](https://arxiv.org/abs/2609.04094) - distributes dynamic rubric feedback across long trajectories.
- [WorldReward: Reward Modeling for Camera-Conditioned World Models](https://arxiv.org/abs/2609.03952) - relates commanded camera actions to generated visual outcomes.
- [PACE: Towards Surfacing Hidden Conflicts in User Requests](https://arxiv.org/abs/2609.03293) - tests assistants that retrieve context and surface hidden request conflicts.
- [FlashRender: Few-Step Generative Rendering via Camera-Controlled Video MeanFlow](https://arxiv.org/abs/2609.03563) - distills camera-controlled rendering into a few generation steps.
- [Using Grounded Theory for Agent Behavior Analysis at Scale](https://arxiv.org/abs/2608.30391) - applies auditable grounded-theory analysis to agent trajectories.
- [Environment Evolution for Terminal Agents](https://arxiv.org/abs/2609.04128) - evolves terminal environments to preserve useful training signal.
- [Principia: Relational Physics Tests for Video Models](https://arxiv.org/abs/2609.04200) - evaluates physics through calibration-independent object relationships.
- [Select, Compress, Reinvest: A Controlled Study of Visual-Token Allocation in Long-Video MLLMs](https://arxiv.org/abs/2609.03820) - isolates visual-token selection, compression, and reinvestment choices.
- [Let Confidence Change, Not the Prediction: Prediction-Preserving Repair for Post-hoc Calibration](https://arxiv.org/abs/2609.01072) - repairs confidence calibration while preserving top-1 decisions.
- [Percolation Dynamics in Optimization: Variance Cascades and Discrete Scale Invariance](https://arxiv.org/abs/2609.02373) - models optimizer transitions between subnetworks as percolation.
- [QCell: Recombining and Aligning Cell Queries for Overlapping Instance Segmentation](https://arxiv.org/abs/2608.29253) - separates overlapping microscopy cells with recombined queries.
- [VeriPhy: Agentic Physical Reasoning for World Model Evaluation and Refinement](https://arxiv.org/abs/2609.03153) - grounds video judgments in typed, provenance-bearing measurements.
- [A Common Measure of Communication for Speech Brain-Computer Interfaces](https://arxiv.org/abs/2609.02887) - proposes a comparable information measure for speech BCIs.
- [Locked at the Entrance, Open Inside: Where RLVR Narrows the Solution Space](https://arxiv.org/abs/2608.29188) - localizes RLVR diversity loss to early solution-family access.

### DAIR.AI Papers of the Week - August 24-30

- [The Lifecycle of LLM-as-a-Judge for Large-Scale Recommendation Explanations](https://arxiv.org/abs/2608.18300) - describes building, tuning, deploying, and monitoring production judges.
- [Evaluating Skills, Not Just Agents: Agentic Continuous Evaluation of Skills](https://arxiv.org/abs/2608.20614) - measures skill value through controlled paired runtime trials.
- [Context as an Environment: Programmatic Context Management for Long-Horizon Agents](https://arxiv.org/abs/2608.21690) - manages long sessions through event logs, typed state, and code.
- [JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution](https://arxiv.org/abs/2608.25593) - generates and repairs task-specific agent harnesses.
- [Prime Agent: A Self-Improving RLM Harness](https://arxiv.org/abs/2608.23552) - persists programmatic context and harness state across trajectories.
- [The Compaction Cliff in Long-Running AI Agent Memory](https://arxiv.org/abs/2608.22752) - measures instruction loss and proposes type-aware context retention.
- [Accelerating Scientific Research with Gemini in the Real-World](https://arxiv.org/abs/2608.26701) - validates Co-Scientist across real scientific workflows.
- [Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](https://arxiv.org/abs/2608.24876) - couples task-state memory with validation-gated skill updates.
- [Meta^n: Recursive Self-Improvement through Emergent Depth](https://arxiv.org/abs/2608.24735) - recursively applies a fixed meta-operation to growing solver artifacts.
- [EVOMAL: Self-Poisoning in Self-Evolving Coding Agents](https://arxiv.org/abs/2608.25776) - demonstrates malicious propagation through agent-authored skill libraries.

## Source Receipts

- Hugging Face Daily Papers: https://huggingface.co/papers/date/2026-09-04
- DAIR.AI Papers of the Week: https://github.com/dair-ai/AI-Papers-of-the-Week
- Henry Shi's AI Crash Course: https://github.com/henrythe9th/AI-Crash-Course
- arXiv: https://arxiv.org/
- OpenReview: https://openreview.net/
