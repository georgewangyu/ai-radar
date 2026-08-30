# AI Radar Daily Feed - 2026-08-29

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 33.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.
- Source limitations: the arXiv API scan was HTTP 429-limited after bounded
  retries, so exact arXiv IDs from successful Hugging Face and DAIR.AI reads
  provide degraded primary-paper coverage. OpenReview's API returned HTTP 403
  and added no fresh paper to the August 24-29 window.

## Recommended Tonight

- [Agent Lightning v1.0: Towards Harnessed Agentic RL](https://arxiv.org/abs/2608.17528)
  - Tags: agents, harnesses, reinforcement-learning, post-training.
  - What the paper claims: an endpoint proxy can connect arbitrary deploy-time
    harnesses to reproducible RL while exposing trace assembly and training
    failure modes specific to harness-owned interaction loops.
  - Why builders should inspect it: it turns a working agent harness into a
    concrete training boundary instead of requiring the agent to be rewritten
    around the trainer.
  - First reading action: inspect the proxy architecture and trace-to-sample
    construction; official code: https://github.com/microsoft/agent-lightning.
- [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](https://arxiv.org/abs/2608.19013)
  - Tags: agents, continual-learning, harnesses, regression-testing.
  - What the paper claims: prompts, memories, tools, skills, and routers can
    forget earlier behavior even with frozen model weights, and candidate
    harnesses can be gated on improvement, retention, and validity.
  - Why builders should inspect it: any self-editing agent needs a regression
    model for external state, not only checkpoints for model weights.
  - First reading action: compare the guarded commit criteria with the
    historical-anchor retention sweep.
- [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://arxiv.org/abs/2608.27454)
  - Tags: agents, skills, memory, continual-learning.
  - What the paper claims: separating raw experience, accumulated knowledge,
    and executable skills improves skill evolution and transfer across models.
  - Why builders should inspect it: it offers a testable architecture for
    keeping logs, durable synthesis, and procedures from collapsing into one
    noisy memory store.
  - First reading action: inspect the three-layer design and the
    persistent-knowledge ablation.
- [What Does an Evaluation License? A Commit-Bound Census of Claim-Relative Inference in Inspect Evals](https://arxiv.org/abs/2608.19269)
  - Tags: evaluation, benchmarks, reproducibility, provenance.
  - What the paper claims: runnable evaluation artifacts do not automatically
    support every historical claim attached to their metrics; the audit returns
    typed stops and stable substructure when replay cannot close.
  - Why builders should inspect it: a reproducible score is weaker than a
    reproducible conclusion, especially when evaluators and meanings change.
  - First reading action: inspect one exact-value claim, one winner claim, and
    one terminal stop.
- [PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](https://arxiv.org/abs/2608.27345)
  - Tags: world-models, multimodal, evaluation, stochasticity.
  - What the paper claims: repeated video rollouts from current systems do not
    consistently recover reference distributions over valid physical outcomes.
  - Why builders should inspect it: one plausible generated future is not proof
    that a world model learned which futures are possible or how likely they
    are.
  - First reading action: compare calibration and coverage on two released
    scenes; official code: https://github.com/Andrew0613/PAWBench.

## Full Candidate List

### Hugging Face Daily Papers - August 28

- [Agentic Game Development as a Verifiable Trajectory Data Engine for Scaling World Models](https://arxiv.org/abs/2608.25518) - executable game engines as verifiable long-horizon trajectory generators.
- [PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](https://arxiv.org/abs/2608.27345) - distribution-level evaluation for stochastic video world models.
- [UrbanGround: From Local Perception to Spatial Agency in a Real-Scale City](https://arxiv.org/abs/2608.27456) - long-horizon spatial agency in a realistic 3D city.
- [TTPO: Test-Time Policy Optimization](https://arxiv.org/abs/2608.27448) - label-free test-time adaptation from rollout consistency.
- [Self-OPD: On-Policy Distillation for Flow Matching Models without Teacher](https://arxiv.org/abs/2608.26872) - teacher-free flow-model alignment from self-explored rollouts.
- [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](https://arxiv.org/abs/2608.27260) - a cross-domain framework for valid, appropriately difficult, and behaviorally diverse agent experience.
- [Training Agents to Evolve with Their Harness: TaoLive Digital Avatar Agent Technical Report](https://arxiv.org/abs/2608.15763) - compact agents adapted across changing digital-avatar harnesses.
- [GameWAM: A World Action Model for Video Games](https://arxiv.org/abs/2608.26200) - joint prediction of game visuals and executable actions.
- [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) - supervisor steering plus experience-to-skill distillation.
- [Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization](https://arxiv.org/abs/2608.26103) - robotic task generalization from in-context human video.
- [Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](https://arxiv.org/abs/2608.27351) - evolution strategies for broader reasoning coverage.
- [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://arxiv.org/abs/2608.27454) - persistent knowledge compiled from experience to guide reusable skills.
- [Procedura: Agentic 3D Modeling with Procedural Control](https://arxiv.org/abs/2608.26238) - editable procedural 3D assemblies generated from text.
- [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](https://arxiv.org/abs/2608.27455) - critique guidance derived from weaker-model failures.
- [Magpie: Real-Time World Renderer for Interactive Games](https://arxiv.org/abs/2608.27168) - real-time generative rendering separated from gameplay logic.
- [Luce: Relightable Gaussians for 3D Asset Generation](https://arxiv.org/abs/2608.23943) - relightable Gaussian-based 3D asset generation.
- [CaRGo-T: Causal Reasoning Graph-of-Thought improves Multimodal Humor Comprehension](https://arxiv.org/abs/2608.23172) - causal graph reasoning for multimodal humor.
- [CaSKG: Counterfactual-Causal Skill Graphs for Scalable Agent Skill Retrieval](https://arxiv.org/abs/2608.25500) - causal skill graphs for compact procedural retrieval.
- [TacForcing: Streaming Action Generation with Execution-Time Tactile Feedback](https://arxiv.org/abs/2608.25798) - streaming robot actions conditioned on live tactile feedback.
- [Thinking on Shots: Consistent Multi-Shot Video Editing with Agentic Reasoning](https://arxiv.org/abs/2608.26809) - agentic multi-instruction editing across long videos.
- [EditaLive! Unified Character Video Editing for Live Streaming](https://arxiv.org/abs/2608.27123) - low-latency live character video editing.
- [Aphanta: Diagnosing Task-Aligned Image-Edited Intermediates for Multimodal Reasoning](https://arxiv.org/abs/2608.26993) - controlled evaluation of image-edited reasoning intermediates.
- [What Does an Evaluation License? A Commit-Bound Census of Claim-Relative Inference in Inspect Evals](https://arxiv.org/abs/2608.19269) - fail-closed replay of claims attached to versioned eval artifacts.

### DAIR.AI Papers of the Week - August 17-23

- [Agent Lightning v1.0: Towards Harnessed Agentic RL](https://arxiv.org/abs/2608.17528) - reproducible RL through arbitrary deploy-time agent harnesses.
- [@skills: Attention is all you have](https://arxiv.org/abs/2608.12610) - decoupling skill content, persistence, and automatic triggering.
- [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](https://arxiv.org/abs/2608.19013) - retention-aware evolution of prompts, memory, tools, skills, and routing.
- [From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems](https://arxiv.org/abs/2608.15127) - end-to-end profiling of agent-serving control-plane costs.
- [Demystifying Agent Skills: Why They Work-Until They Don't](https://arxiv.org/abs/2608.14036) - controlled study of skill mechanisms, selection, and failure.
- [What is Missing from AI Post-Training AI: An Empirical Analysis](https://arxiv.org/abs/2608.19072) - early strategy commitment during agentic post-training.
- [From Passive Delegates to Strategic Negotiators: Reinforcing Social Reasoning in Small Language Models with SocialRL](https://arxiv.org/abs/2608.13787) - principal-driven delegate reasoning for social interactions.
- [ClawGym II: Exploring Black-Box RL on Agent Harness](https://arxiv.org/abs/2608.16798) - RL over opaque multi-turn harness execution.
- [When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](https://arxiv.org/abs/2608.16801) - communication and coordination structure in multi-agent coding.
- [On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification](https://arxiv.org/abs/2608.18066) - self-improvement gains tested against variance and task-order effects.

## Source Receipts

- https://huggingface.co/papers/date/2026-08-28
- https://github.com/dair-ai/AI-Papers-of-the-Week
- https://github.com/henrythe9th/AI-Crash-Course
- https://arxiv.org/
- https://openreview.net/
