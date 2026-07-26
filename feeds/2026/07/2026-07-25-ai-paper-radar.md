# AI Radar Daily Feed - 2026-07-25

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 37.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, OpenReview, and arXiv.
- Source limitations: Hugging Face's latest published page was July 24;
  DAIR.AI's July 12-19 issue remains its latest; OpenReview forum pages were
  blocked by browser verification, so only indexed forum summaries were used;
  the configured arXiv query scan was unavailable after bounded rate-limit and
  service-error retries.

## Recommended Tonight

- [AREX: Towards a Recursively Self-Improving Agent for Deep Research](https://arxiv.org/abs/2607.21461)
  - Tags: agents, deep-research, recursive-self-improvement, verification.
  - What the paper claims: an inner evidence-gathering loop and an outer
    constraint-wise audit can recursively improve a research answer while a
    learned update tool compresses verified evidence and unresolved claims.
  - Why builders should inspect it: it offers a concrete architecture for
    research agents that need to verify, retain progress, and avoid repeating
    failed search directions.
  - First reading action: trace one answer through audit, follow-up research,
    and context compression.
- [Sample-Efficient Learning from Agent Experience](https://arxiv.org/abs/2607.21051)
  - Tags: agents, continual-learning, experience-distillation,
    sample-efficiency.
  - What the paper claims: in-context gains from trial-and-error histories can
    be distilled into model weights without more environment interaction.
  - Why builders should inspect it: it separates expensive experience
    collection from later capability retention and compares the result with
    direct supervised fine-tuning.
  - First reading action: inspect the experience representation, distillation
    target, and the direct-SFT baseline.
- [LLMs Get Lost in Evolving User Intent](https://arxiv.org/abs/2607.20734)
  - Tags: human-agent-interaction, intent-tracking, multi-turn-evaluation.
  - What the paper claims: models that perform well on static tasks degrade
    when user intent is revealed, revised, or redirected during a conversation.
  - Why builders should inspect it: real collaborators change their minds, and
    fixed-prompt benchmarks hide whether an agent follows the new goal.
  - First reading action: inspect how static tasks are converted into dynamic
    conversations without changing the final grader.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://arxiv.org/abs/2607.21557)
  - Tags: agents, reinforcement-learning, harnesses, computer-use.
  - What the paper claims: real multi-process agent harnesses can be trained
    with standard RL infrastructure by capturing model calls and running
    isolated remote rollouts.
  - Why builders should inspect it: it makes the deployed harness and
    environment part of the training surface instead of replacing them with a
    simplified loop.
  - First reading action: follow one rollout from harness call capture through
    update and environment reset.
- [Self-Improvements in Modern Agentic Systems: A Survey](https://arxiv.org/abs/2607.13104)
  - Tags: agents, self-improvement, continual-learning, survey.
  - What the paper claims: self-improving systems can be organized by what
    changes—the model or its scaffold—and by the source of the learning signal.
  - Why builders should inspect it: the taxonomy separates weight updates,
    prompts, memory, tools, and whole-harness changes that are often bundled
    under one vague label.
  - First reading action: place the other four recommendations into the
    survey's update-target and signal-source taxonomy.

## Full Candidate List

### Hugging Face Daily Papers - July 24

- [AREX](https://arxiv.org/abs/2607.21461) - Recursively audits and improves deep-research answers while retaining verified progress.
- [K12-KGraph](https://arxiv.org/abs/2605.09635) - Benchmarks prerequisite, taxonomy, evidence, sequencing, and visual curriculum cognition.
- [ReferTrack](https://arxiv.org/abs/2607.20061) - Grounds embodied tracking in explicit image-space target references and temporal geometry.
- [Visual Contrastive Self-Distillation](https://arxiv.org/abs/2607.21556) - Turns image-content removal into an on-policy visual distillation signal.
- [Show, Don't Tell](https://arxiv.org/abs/2607.21072) - Evaluates spatial cognition expressed directly through protocol-constrained pixels.
- [NVIDIA-labs OO Agents](https://arxiv.org/abs/2607.20709) - Represents agents as typed Python objects with methods, state, and model-callable contracts.
- [SANA-Video 2.0](https://arxiv.org/abs/2607.21553) - Combines linear attention with periodic softmax anchors for efficient long-video generation.
- [Tencent WorkBuddy Bench](https://arxiv.org/abs/2607.20911) - Releases contamination-resistant agent tasks across code, web, office, and security.
- [LLMs Get Lost in Evolving User Intent](https://arxiv.org/abs/2607.20734) - Tests whether models track goals that change during multi-turn collaboration.
- [Color Pass-Through](https://arxiv.org/abs/2607.12746) - Learns camera-to-display color reproduction as one coupled system.
- [Structured Dynamics from Videos](https://arxiv.org/abs/2607.21576) - Separates camera motion from residual object dynamics in learned video representations.
- [WorldWeaver](https://arxiv.org/abs/2607.21594) - Maintains shared world state across agents and generated video views with explicit registers.
- [Sample-Efficient Learning from Agent Experience](https://arxiv.org/abs/2607.21051) - Distills trial-and-error histories into persistent model capability.
- [Robostral Navigate](https://arxiv.org/abs/2607.20785) - Predicts image-space navigation waypoints from monocular RGB across robot embodiments.
- [Multi-Turn On-Policy Distillation with Prefix Replay](https://arxiv.org/abs/2607.04763) - Reuses teacher prefixes to reduce live tool interaction during agent distillation.
- [Predictive Divergence Masks for LLM RL](https://arxiv.org/abs/2607.10848) - Aligns update masking with predicted changes in the trust-region divergence.
- [Recurrent Sinusoidal INRs](https://arxiv.org/abs/2607.21485) - Uses recurrent sinusoidal blocks for compact, high-fidelity image and 3D representations.
- [TableVerse](https://arxiv.org/abs/2607.21017) - Builds physically stable real-to-sim tabletop scenes and manipulation trajectories.
- [OpenForgeRL](https://arxiv.org/abs/2607.21557) - Trains agents inside their real harnesses and environments with open RL infrastructure.
- [FinanceComplexQA](https://arxiv.org/abs/2607.19238) - Benchmarks agentic reasoning over complex bilingual financial documents.
- [GraphVid](https://arxiv.org/abs/2607.21580) - Controls multi-object video interactions through structured graphs.
- [Dataset Distillation by Influence Matching](https://arxiv.org/abs/2607.16859) - Matches the converged parameter influence of a full dataset with a compact synthetic set.

### DAIR.AI Papers of the Week - July 12-19

- [Self-Improvements in Modern Agentic Systems](https://arxiv.org/abs/2607.13104) - Maps self-improvement by update target and learning-signal source.
- [Metacognition in LLMs: Foundations, Progress, and Opportunities](https://arxiv.org/abs/2607.11881) - Unifies confidence, verification, stopping, and deferral as monitor-and-control behavior.
- [When is Routing Meaningful? Diversity and Robustness in Language Model Societies](https://arxiv.org/abs/2607.09197) - Requires behavioral diversity and paraphrase-stable assignments for useful model routing.
- [Rethinking Harness Evolution](https://arxiv.org/abs/2607.12227) - Tests harness search against matched-budget baselines and held-out tasks.
- [Tracing Agentic Failure from the Flow of Success](https://arxiv.org/abs/2607.12747) - Localizes failed steps by modeling deviations from successful trajectory dynamics.
- [Failure as a Process: An Anatomy of CLI Coding Agent Trajectories](https://arxiv.org/abs/2607.09510) - Separates an agent error's onset, irreversibility, and observability.
- [Infinite Worlds with Versatile Interactions](https://arxiv.org/abs/2607.07534) - Targets real-time, long-horizon interactive world generation.
- [How does information access affect LLM monitors' ability to detect sabotage?](https://arxiv.org/abs/2601.21112) - Tests filtered reasoning excerpts as a stronger sabotage-monitoring surface than full traces.
- [GFlowRL: Scaling Distribution-Matching RL to Large Language Models](https://arxiv.org/abs/2607.13394) - Adapts GFlowNet-style objectives to preserve diverse reasoning modes during large-model RL.
- [From Foundation to Application: Improving VLA Models in Practice](https://arxiv.org/abs/2607.06403) - Trains a generalist embodied policy across multiple robot configurations.

### Curriculum and OpenReview

- [ReAct](https://arxiv.org/abs/2210.03629) - Interleaves reasoning with actions and observations as a foundational agent pattern.
- [Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation](https://openreview.net/forum?id=vUaY1t64ZZ) - Proposes standardized, cost-aware, third-party agent evaluation infrastructure.
- [Towards a Science of AI Agent Reliability](https://openreview.net/forum?id=QmdQRRJYE5) - Separates aggregate capability from reliability across models and benchmarks.
- [Measuring Agents in Production](https://openreview.net/forum?id=FxNCt9xtOZ) - Examines autonomy and human intervention in production agent systems.
- [Implicit Intelligence - Evaluating Agents on What Users Don't Say](https://openreview.net/forum?id=IhdGi9qknL) - Evaluates whether agents infer user goals beyond literal prompt following.

## Source Receipts

- https://huggingface.co/papers/date/2026-07-24
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://openreview.net/
- https://arxiv.org/
