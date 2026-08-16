# AI Radar Daily Feed - 2026-08-15

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 77.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.
- Reading posture: a flexible weekly menu, not five assignments.

## Recommended Tonight

- [DarwinX: Evolving Agent Harnesses Through Natural Selection](https://arxiv.org/abs/2608.07545)
  - Tags: agents, harnesses, self-improvement, evaluation.
  - What the paper claims: population-based harness evolution can preserve prior
    coverage while transferring gains across agent benchmarks with frozen model
    weights.
  - Why builders should inspect it: it treats prompts, tools, skills, and control
    flow as an evolvable capability surface with an explicit regression gate.
  - Code / evidence: https://huggingface.co/spaces/CoderDoge/darwinx.
  - First reading action: inspect the preserve-and-extend contract and the
    held-out transfer design before the headline scores.
- [Vero: Can AI Agents Build Formally Verified Software Repositories?](https://arxiv.org/abs/2608.13522)
  - Tags: coding-agents, formal-verification, benchmarks, reliability.
  - What the paper claims: agents can be evaluated on joint repository
    implementation and machine-checked proofs across 43 multi-module Lean 4
    instances.
  - Why builders should inspect it: it tests correctness beyond passing unit
    tests and lets agents formally expose broken benchmark specifications.
  - Code / evidence: https://github.com/sunblaze-ucb/vero.
  - First reading action: read the evaluation modes, audit mechanism, and
    anti-cheat grader, then inspect one exemplar repository.
- [Spatial Memory Agent](https://arxiv.org/abs/2608.12743)
  - Tags: agents, memory, continual-learning, multimodal-reasoning.
  - What the paper claims: verifier-scored experiences can become reusable
    lessons whose transfer reliability is recalibrated from later retrieval
    outcomes.
  - Why builders should inspect it: memory quality becomes an evidence-updated
    property rather than an untested summary stored forever.
  - Code / evidence: https://aim-uofa.github.io/SMA/; no source repository was
    independently verified.
  - First reading action: compare transfer-reliability ranking against plain
    similarity retrieval and reflection.
- [A Unifying Perspective on Causal World Models](https://arxiv.org/abs/2608.13456)
  - Tags: world-models, causality, representations, planning.
  - What the paper claims: useful world models should represent causal entity
    and interaction structure tied to supported tasks and identifiability.
  - Why builders should inspect it: it separates task-grounded world modeling
    from merely generating plausible future observations.
  - Code / evidence: conceptual paper; no code artifact independently listed.
  - First reading action: read the formal definition and identifiability section.
- [Training AI Scientists to Replicate Research](https://arxiv.org/abs/2608.13331)
  - Tags: ai-scientists, replication, agent-evaluation, scientific-method.
  - What the paper claims: scalable replication tasks and a rubric-based judge
    can train a long-horizon scientific agent that uses coding agents as tools.
  - Why builders should inspect it: replication pressure-tests evidence recovery
    and experimental judgment more directly than fluent idea generation.
  - Code / evidence: 47-page paper with 12 figures; no official repository was
    independently verified.
  - First reading action: inspect task construction and judge-human agreement
    before the model comparison.

## Full Candidate List

### Hugging Face + arXiv overlap

- [AutoDesign](https://arxiv.org/abs/2608.13560) — meta-harness optimization for long-horizon design; code: https://github.com/Yaxin9Luo/AutoDesign.
- [OmniScientist](https://arxiv.org/abs/2608.13558) — research from heterogeneous raw evidence; project: https://omni-scientist.github.io/.
- [Intern-S2-Preview](https://arxiv.org/abs/2608.13505) — scientific multimodal and agentic foundation model.
- [PlayWorld](https://arxiv.org/abs/2608.13552) — agent-player evaluation for interactive world models; code: https://github.com/kxding/PlayWorld.

### Hugging Face Daily Papers

- [Alaya-EVOKE](https://arxiv.org/abs/2608.13546) — bounded-context persistent interactive world generation.
- [LLMRouter](https://arxiv.org/abs/2608.06867) — unified LLM router infrastructure and benchmark; code: https://github.com/ulab-uiuc/LLMRouter.
- [DreamX-Phi 1.0](https://arxiv.org/abs/2608.13489) — action-conditioned robot video world model; code: https://github.com/AMAP-ML/DreamX-Phi.
- [DarwinX](https://arxiv.org/abs/2608.07545) — population-based agent-harness evolution.
- [How Can Rhetoric Reward-Hack AI Reviewers?](https://arxiv.org/abs/2608.08975) — rhetorical sensitivity in AI peer review.
- [Spatial Memory Agent](https://arxiv.org/abs/2608.12743) — transfer-calibrated procedural memory.
- [Massive Activations in Hybrid Linear Attention LLMs](https://arxiv.org/abs/2608.12149) — architecture-aligned activation spikes; code: https://github.com/StartluxLabs/Massive-Activations-HLA.
- [UniSwap](https://arxiv.org/abs/2608.11752) — streaming joint audio-visual identity replacement; code: https://github.com/uniswap-av/UniSwap.
- [LiveAnimate](https://arxiv.org/abs/2608.11745) — real-time long-form streaming animation; code: https://github.com/liveanimate/LiveAnimate.
- [Full-bandwidth transformer](https://arxiv.org/abs/2608.08888) — transformer information-flow analysis.
- [H2R-Bench](https://arxiv.org/abs/2608.13049) — human-to-robot video world-model evaluation; code: https://github.com/Rongdingyi/H2R-Bench.
- [An AI4AI Framework for Visual Token Pruning](https://arxiv.org/abs/2608.07193) — AI-guided visual token pruning.
- [AVA-Encoder](https://arxiv.org/abs/2608.12313) — agent-native video representations.
- [Thought-Level Beam Search for Reasoning](https://arxiv.org/abs/2608.08020) — beam search over reasoning units; code: https://github.com/Dao-AILab/gambit-parallel-reasoning.
- [Context-Matched Distillation](https://arxiv.org/abs/2608.13391) — causal context alignment for video distillation.
- [SKILLER](https://arxiv.org/abs/2608.10538) — language-level RL for small-model skills; code: https://github.com/DANG-ai/SKILLER.
- [Maglev](https://arxiv.org/abs/2608.02870) — fixed-size sliding recurrent transformer memory.
- [LycheeMemory V2](https://arxiv.org/abs/2608.12990) — segment-level long-term agent memory; code: https://github.com/LycheeMem/LycheeMem.
- [Are You Sure You're Sure?](https://arxiv.org/abs/2608.13430) — instruction tuning, confidence, and rationale diversity.
- [Hybrid-Policy Self-Editing](https://arxiv.org/abs/2608.11660) — composable unstructured knowledge editing.
- [Knowing When to Quit](https://arxiv.org/abs/2607.29211) — capability-aligned refusal for futile reasoning; code: https://github.com/icip-cas/Knowing-When-to-Quit.
- [Specification-first convergence with an AI coding agent](https://arxiv.org/abs/2608.12440) — instrumented large-codebase refactor case study.
- [From Inaudible Inputs to Model Failures](https://arxiv.org/abs/2608.09158) — low-frequency attacks on audio-language models.
- [CW-BASS v2](https://arxiv.org/abs/2608.12773) — saturation-aware pseudo-label selection; code: https://github.com/psychofict/CW-BASS-v2.
- [TailBooster](https://arxiv.org/abs/2608.11951) — operationally filtered extreme-event synthesis.
- [Mitigating Gender Bias in English to Romanian Machine Translation](https://arxiv.org/abs/2608.08606) — tag-aware gender translation.
- [PixSDS](https://arxiv.org/abs/2608.12997) — VAE-consistent gradient repair for SDS; code: https://github.com/sevashasla/PixSDS.
- [RibAssist 3D](https://arxiv.org/abs/2608.06914) — selective cross-view fracture localization; code: https://github.com/kabJhai/RibAssist-3D.

### Configured arXiv scan

- [Vero](https://arxiv.org/abs/2608.13522) — repository-scale verified code generation; code: https://github.com/sunblaze-ucb/vero.
- [Heterogeneity-Aware Belief Synchronization](https://arxiv.org/abs/2608.13394) — latent belief translation across heterogeneous agents.
- [Training AI Scientists to Replicate Research](https://arxiv.org/abs/2608.13331) — replication-task training for scientific agents.
- [Teach the Magnitude, Not the Direction](https://arxiv.org/abs/2608.13179) — verifier-bounded multi-turn credit assignment.
- [SkillShapley](https://arxiv.org/abs/2608.13173) — agent skill-step attribution.
- [Beyond Handcrafted Security](https://arxiv.org/abs/2608.12977) — self-evolving runtime defense for agents.
- [DFM Mimir v1](https://arxiv.org/abs/2608.13517) — permissibly trained 1B hierarchical reasoning model.
- [MARC v1](https://arxiv.org/abs/2608.13476) — deterministic clinical multi-agent orchestration; code: https://github.com/Penn-RAIL/MARC-v1.
- [AaLLM](https://arxiv.org/abs/2608.13472) — end-to-end analog-circuit agent workflow.
- [MLLM-Routed Heterogeneous Ensembles](https://arxiv.org/abs/2608.13463) — language-model routing across vision backbones.
- [A Unifying Perspective on Causal World Models](https://arxiv.org/abs/2608.13456) — causal structure and identifiability for world models.
- [QuoteBench](https://arxiv.org/abs/2608.13547) — shell command-path failure evaluation.
- [CAPRI](https://arxiv.org/abs/2608.13459) — contract-aware Isabelle proof repair.
- [LLM-Assisted Dynamic Threat Analysis](https://arxiv.org/abs/2608.13450) — attacker-reachable autonomous-vehicle software weaknesses.
- [Does Fixing Break Security?](https://arxiv.org/abs/2608.13404) — security regressions in iterative infrastructure repair.
- [RippleMem](https://arxiv.org/abs/2608.13334) — associative long-term agent recollection.
- [When Should Multi-Round RAG Stop?](https://arxiv.org/abs/2608.13237) — learned retrieval stopping judgments.
- [Better Decomposition, Free Aggregation](https://arxiv.org/abs/2608.13160) — multilingual multi-hop RAG synthesis.
- [TEMPO](https://arxiv.org/abs/2608.13057) — makespan-aware expert-parallel load balancing.
- [RAGSieve](https://arxiv.org/abs/2608.13010) — retrieval-poison detection; code: https://github.com/XrazyMee/RAGSieve.
- [LittleLearner](https://arxiv.org/abs/2608.13545) — controlled knowledge-exposure sandbox.
- [Toward a Gricean Retreat](https://arxiv.org/abs/2608.13484) — knowledge boundaries and answer specificity.
- [HumanTracker](https://arxiv.org/abs/2608.13555) — human-aligned humanoid-motion evaluation.
- [Measuring Task-Agnostic Training Data Influence](https://arxiv.org/abs/2608.13515) — trajectory-level pretraining influence.
- [Defensive Boosting](https://arxiv.org/abs/2608.13554) — online probabilistic forecasting guarantees.
- [DARTree](https://arxiv.org/abs/2608.13524) — speculative diffusion decoding with draft trees.
- [Exponential quantum advantage for learning signals with a single qubit](https://arxiv.org/abs/2608.13521) — quantum-enhanced measurement efficiency.
- [Intervention-Aware Clinical World Model](https://arxiv.org/abs/2608.13518) — irregular-event post-operative forecasting.
- [On the Structural Limits of Machine Learning Decision Systems](https://arxiv.org/abs/2608.13510) — informational and dynamical limits.
- [V-RAE](https://arxiv.org/abs/2608.13556) — semantic video latents for generation.
- [SAEVerbalizer](https://arxiv.org/abs/2608.13538) — direct verbalization of sparse-autoencoder features.

### DAIR.AI Papers of the Week

- [Model or Harness](https://arxiv.org/abs/2607.28802) — actionable attribution of agent failure modes.
- [Zero-Mem](https://arxiv.org/abs/2607.29377) — zero-generation memory operations over raw traces.
- [Sample More Reflect Less](https://arxiv.org/abs/2607.28576) — equal-token tests of self-reflection.
- [Harness-R1](https://arxiv.org/abs/2608.02276) — learned harness repair from agent failures.
- [DataSpace](https://arxiv.org/abs/2608.03451) — verifiable heterogeneous workspace analytics.
- [Prompt-Induced Waste](https://arxiv.org/abs/2608.01347) — prompt and harness effects on agent effort.
- [Rehearse](https://arxiv.org/abs/2607.27687) — pre-execution selection for autoresearch loops.
- [ContinualSkillBench](https://arxiv.org/abs/2608.03874) — testing when skill libraries actually compound.
- [MerchantBench](https://arxiv.org/abs/2607.28956) — long-horizon commercial planning benchmark.
- [TokTier](https://arxiv.org/abs/2607.29678) — exact incremental tokenization for serving.

### OpenReview relevance search

- [XSkill](https://openreview.net/forum?id=AjP1yvCyoG) — continual experience and skill learning for multimodal agents; code: https://github.com/XSkill-Agent/XSkill.
- [From Player to Master](https://openreview.net/forum?id=gNWNtstp3r) — reinforcement learning over agent memory updates.
- [τ-Knowledge](https://openreview.net/forum?id=XHZK5abtw2) — conversational-agent evaluation over unstructured knowledge.
- [What is the role of memorization in Continual Learning?](https://openreview.net/forum?id=Ohq5sk3agt) — memorization, forgetting, and replay-buffer policy.

## Source Receipts

- Hugging Face Daily Papers: https://huggingface.co/papers
- DAIR.AI Papers of the Week: https://github.com/dair-ai/AI-Papers-of-the-Week
- Henry Shi's AI Crash Course: https://github.com/henrythe9th/AI-Crash-Course
- arXiv: https://arxiv.org/
- OpenReview: https://openreview.net/
