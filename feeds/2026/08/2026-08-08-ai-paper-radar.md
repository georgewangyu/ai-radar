# AI Radar Daily Feed - 2026-08-08

Public-safe weekly paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 80.
- Recommended tonight: 5.
- Sources checked: Hugging Face Daily Papers, DAIR.AI Papers of the Week,
  Henry Shi's AI Crash Course, arXiv, and OpenReview.
- Source limitations: Hugging Face's latest published page was August 7;
  DAIR.AI's July 27-August 2 issue remains its latest; OpenReview forum pages
  and APIs were blocked by browser verification, `429`, or `403`, so exact
  indexed records were used.

## Recommended Tonight

- [EnvACE: Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning](https://arxiv.org/abs/2608.06197)
  - Tags: agents, world-models, reinforcement-learning, tool-use.
  - What the paper claims: one policy can learn to alternate between acting and
    rehearsing environment responses, then use that internalized dynamics model
    before committing a real action.
  - Why builders should inspect it: it turns environment simulation into a
    trainable part of the agent and exposes a sharp question about where
    imagined rollouts still need real-world verification.
  - First reading action: compare the real-environment, simulator, and world-
    rehearsal loops, then inspect the controlled evaluation and limitations.
- [HarnessOpt-Bench: Evaluating LLMs at Harness Optimization](https://arxiv.org/abs/2608.06301)
  - Tags: harnesses, agent-evaluation, optimization, trusted-execution.
  - What the paper claims: harness improvement can be evaluated under a fixed
    budget with held-out scoring and a trusted execution boundary.
  - Why builders should inspect it: it separates durable improvement to prompts,
    tools, memory, and control flow from gains that come from search leakage or
    extra evaluation spend.
  - First reading action: inspect the task protocol, held-out boundary, and
    native-versus-shared harness results before the model ranking.
- [Continual Learning in Transition](https://arxiv.org/abs/2608.06216)
  - Tags: continual-learning, agents, memory, skills, test-time-learning.
  - What the paper claims: modern continual learning should include not only
    parameter updates but also on-policy learning, inference-time adaptation,
    memory, skills, and harness structure.
  - Why builders should inspect it: the when-how-where map gives teams a clearer
    vocabulary for deciding what part of an evolving AI system is actually
    changing.
  - First reading action: read the taxonomy figures and the system-level
    adaptation section, then follow only the references tied to an active use
    case.
- [Not All LLM Reasoning is Visible in the Chain-of-Thought](https://arxiv.org/abs/2607.22925)
  - Tags: reasoning, chain-of-thought, monitoring, safety.
  - What the paper claims: some frontier models use semantically irrelevant
    filler tokens for consequential computation that is not visible as an
    interpretable reasoning trace.
  - Why builders should inspect it: systems that treat chain-of-thought as a
    complete audit log may be relying on a stronger assumption than the
    evidence supports.
  - First reading action: inspect the filler-token controls and hidden-objective
    experiment before extending the result beyond its synthetic tasks.
- [Interpretable MEG Decoding of Perceived Speech](https://arxiv.org/abs/2608.01481)
  - Tags: neuroscience, speech, interpretability, representation-learning.
  - What the paper claims: a compact MEG-to-audio retrieval model can map
    spatial and temporal filters to cortical sources and identify the stimulus
    features that drive retrieval.
  - Why builders should inspect it: it is a concrete example of redesigning a
    high-performing neural decoder so its representations correspond to
    physiologically interpretable quantities.
  - First reading action: inspect the source-mapping figures and input
    interventions before considering the much heavier reproduction path.

## Full Candidate List

### Hugging Face + arXiv overlap - 5

- [EnvACE](https://arxiv.org/abs/2608.06197) - Rehearses environment responses inside the acting policy; surfaced by Hugging Face and arXiv.
- [HarnessOpt-Bench](https://arxiv.org/abs/2608.06301) - Evaluates held-out harness improvement under a metered execution boundary; surfaced by Hugging Face and arXiv.
- [Continual Learning in Transition](https://arxiv.org/abs/2608.06216) - Maps learning by when, how, and where system state changes; surfaced by Hugging Face and arXiv.
- [MASS](https://arxiv.org/abs/2608.06257) - Separates authoritative multiplayer world state from view rendering; surfaced by Hugging Face and arXiv.
- [CalibForge](https://arxiv.org/abs/2608.06352) - Revises executable tasks toward solver-relative learnability; surfaced by Hugging Face and arXiv.

### Hugging Face Daily Papers - August 7, exclusive 25

- [AgentOPSD](https://arxiv.org/abs/2608.05987) - Turns teacher-student gaps into recursive turn-level credit.
- [OSReward](https://arxiv.org/abs/2607.28609) - Benchmarks VLM judges of cross-platform computer-use trajectories.
- [Interpretable MEG Decoding of Perceived Speech](https://arxiv.org/abs/2608.01481) - Maps compact MEG retrieval filters to cortical sources and stimulus features.
- [WorldClaw](https://arxiv.org/abs/2608.05248) - Generates editable, explorable 3D open worlds with an agentic pipeline.
- [GST-Bench](https://arxiv.org/abs/2608.05747) - Tests global spatial awareness across long-horizon visual streams.
- [ChronoVision](https://arxiv.org/abs/2608.05631) - Reconstructs latent temporal states for multi-step visual reasoning.
- [Learning from Failures](https://arxiv.org/abs/2608.06060) - Uses failure-derived hard negatives to train retrieval-centered reasoning.
- [From Economic Agents to Agentic Economies](https://arxiv.org/abs/2608.06020) - Proposes a systems blueprint for generative economies of heterogeneous agents.
- [DataSpace](https://arxiv.org/abs/2608.03451) - Benchmarks verifiable analytics across heterogeneous workspaces.
- [On-Policy Delta Distillation for Multilingual Math Reasoning](https://arxiv.org/abs/2608.05802) - Studies delta-based on-policy distillation across languages.
- [Teaching Nemotron Greek](https://arxiv.org/abs/2608.05138) - Adapts retrieval and grounded generation for specialist Greek domains.
- [World-to-Wrist](https://arxiv.org/abs/2608.05369) - Treats wrist-view futures as a task-conditioned manipulation signal.
- [DyPES-VLA](https://arxiv.org/abs/2608.06374) - Separates shared dynamics priors from embodiment-specific control.
- [Activity Frames](https://arxiv.org/abs/2608.05784) - Compiles screen activity into deterministic memory and replay artifacts.
- [SmartMage](https://arxiv.org/abs/2608.05137) - Dynamically selects task-relevant visual and geometric modalities.
- [EffectLearner](https://arxiv.org/abs/2608.05565) - Models object effects so video removal restores more than the visible target.
- [PaDoc](https://arxiv.org/abs/2608.06146) - Grounds parallel regional decoding in document layout.
- [KVAE](https://arxiv.org/abs/2608.05798) - Proposes a tokenizer family for multimodal latent generation.
- [MameLoshnLM](https://arxiv.org/abs/2608.05850) - Releases an 8B Yiddish model and evaluation benchmark.
- [Invisible Shortcuts](https://arxiv.org/abs/2608.05424) - Audits camera-specific cues encoded by vision backbones.
- [ContextMaster](https://arxiv.org/abs/2608.04956) - Routes sparse fixed-budget context across interactive multi-shot video creation.
- [Weights or Skills?](https://arxiv.org/abs/2608.01851) - Compares action-predicting weights with robots that write executable skills.
- [FactorJEPA](https://arxiv.org/abs/2608.01049) - Factorizes future prediction into layout, agent, and interaction channels.
- [Task-Conditional Flow Matching](https://arxiv.org/abs/2608.05785) - Adapts multilingual embeddings with task-conditioned flow matching.
- [GaussianSelector](https://arxiv.org/abs/2608.01492) - Selects complete 3D objects from sparse human guidance.

### Configured arXiv scan - exclusive 35

- [AV-AIVAT](https://arxiv.org/abs/2608.06362) - Combines variance reduction with anytime-valid stopping for auditable agent comparisons.
- [Resourced Authority](https://arxiv.org/abs/2608.06353) - Models participatory authorization through metered compute budgets.
- [Improving the Realism of Synthetic Clinical Benchmarks](https://arxiv.org/abs/2608.06265) - Improves realism while preserving an operational utility floor.
- [Learning Globally Reusable Skills for Coding Agents](https://arxiv.org/abs/2608.06153) - Co-evolves skill relations and uses replay verification to reduce overfitting.
- [Hardware Keystores for AI Agent Signing Workflows](https://arxiv.org/abs/2608.06130) - Confines keys in hardware and layers semantic authorization around signing.
- [Learning When to Trust](https://arxiv.org/abs/2608.06377) - Trains models to distinguish useful from misleading context.
- [Tracing the Heart](https://arxiv.org/abs/2608.06366) - Builds an evidence-linked multi-agent pipeline for heart-failure features.
- [The Low Frequency Trap](https://arxiv.org/abs/2608.06361) - Uses executable event traces to localize video-counting failures.
- [The Illusion of Visual Tool-Use](https://arxiv.org/abs/2608.06270) - Tests whether returned visual observations causally affect model answers.
- [DASH](https://arxiv.org/abs/2608.06243) - Adapts teacher supervision horizon to policy divergence.
- [From Passive Mirrors to Active Agents](https://arxiv.org/abs/2608.06227) - Proposes holonic digital twins for networked physical systems.
- [TRAJDEBUG](https://arxiv.org/abs/2608.06346) - Traces error onset, propagation, and critical failure points in agent trajectories.
- [Automatic Translation of Unstructured Requirements into Linear Temporal Logic](https://arxiv.org/abs/2608.06287) - Converts natural-language requirements into verifiable temporal logic.
- [Predicting Agile Success](https://arxiv.org/abs/2608.06228) - Identifies a small set of factors associated with Agile project outcomes.
- [DCAS](https://arxiv.org/abs/2608.06113) - Decouples planning from one CLI scaffold to improve cross-scaffold transfer.
- [IcFuzz](https://arxiv.org/abs/2608.06088) - Fuzzes Isaac Sim with semantic scene guidance and multi-level mutation.
- [Beyond Top-K](https://arxiv.org/abs/2608.06305) - Replaces opaque top-k retrieval with explicit agentic operations.
- [NeSy-RAG](https://arxiv.org/abs/2608.06292) - Combines neural retrieval with symbolic structures for explainable QA.
- [ECHO](https://arxiv.org/abs/2608.06110) - Combines local deployment, temporal memory, speech assessment, and health guardrails.
- [Training-Free Token-Level Steering for Personalized Co-Writing](https://arxiv.org/abs/2608.06069) - Steers token generation with personalized signals without training.
- [Causal Episodic Memory for Feedback-Driven Agent Repair](https://arxiv.org/abs/2608.05906) - Stores causal repair episodes so later failures can reuse validated corrections.
- [The Bitter Lesson of Tool Calling](https://arxiv.org/abs/2608.06370) - Tests whether programmatic tool use scales better than rigid call schemas.
- [RP-OPSD](https://arxiv.org/abs/2608.06347) - Transfers multilingual reasoning around selected pivot steps.
- [Benchmarking the Benchmarks](https://arxiv.org/abs/2608.06329) - Evaluates the quality of benchmarks used for conversational agents.
- [Benchmarking Rule-Intensive Review of National Standard Documents](https://arxiv.org/abs/2608.06312) - Tests LLM review under dense formal rules.
- [On-Policy Self-Distillation without Any Supervision](https://arxiv.org/abs/2608.06296) - Studies self-distillation without an external teacher or labels.
- [A Six-Dimensional Taxonomy of Post-Training Adaptation Techniques](https://arxiv.org/abs/2608.06246) - Maps adaptation by mechanism, goal, data, persistence, scope, and model type.
- [BaKron](https://arxiv.org/abs/2608.06291) - Accelerates two-sided curvature-aware adaptive rounding.
- [The Tamed Subgradient Unadjusted Langevin Algorithm beyond Convexity](https://arxiv.org/abs/2608.06283) - Gives explicit subgradient Langevin updates under difficult non-convex conditions.
- [Timestep-Conditioned Transformers for Global Weather Forecasting](https://arxiv.org/abs/2608.06241) - Lets one model select different forecast timesteps at inference.
- [Muon on the Stiefel Manifold](https://arxiv.org/abs/2608.06218) - Derives an exact closed-form orthogonality-constrained Muon update.
- [Bias Analysis of L2 Speaking Assessment Systems](https://arxiv.org/abs/2608.06300) - Distinguishes concept recoverability from influence in automated speaking scores.
- [TLNM](https://arxiv.org/abs/2608.06275) - Detects and numbers teeth from consumer photographs with external validation.
- [OTLesMix](https://arxiv.org/abs/2608.06264) - Generates synthetic lesions with more varied shapes and locations.
- [Scalable Estimation of VARMA Models](https://arxiv.org/abs/2608.06340) - Makes VARMA optimization independent of series length per iteration.

### DAIR.AI Papers of the Week - July 27-August 2, 10

- [NOOA](https://arxiv.org/abs/2607.20709) - Represents prompts, tools, state, and agent actions as typed Python objects.
- [ReOPD](https://arxiv.org/abs/2607.04763) - Replays reliable teacher prefixes to distill agents without fresh tool interaction.
- [Not All LLM Reasoning is Visible in the Chain-of-Thought](https://arxiv.org/abs/2607.22925) - Demonstrates consequential computation through semantically irrelevant filler tokens.
- [Molt](https://arxiv.org/abs/2607.21653) - Makes agent-RL algorithms readable without sacrificing matched asynchronous throughput.
- [JAXBench](https://arxiv.org/abs/2607.20466) - Separates documentation-driven correctness from search-driven kernel speed.
- [ACM](https://arxiv.org/abs/2607.23809) - Lets an agent decide when to compress context and recover offloaded detail.
- [Filesystem-Based Memory for LLM Agents](https://arxiv.org/abs/2607.26637) - Finds that organization reduces retrieval cost without reliably improving answers.
- [Beyond AdamW](https://arxiv.org/abs/2607.20548) - Compares stabilized higher-order optimizers with AdamW at large scale.
- [Role Drift](https://arxiv.org/abs/2607.21627) - Shows end-task gains can hide a module abandoning its assigned role.
- [The Self-Speculating Agent](https://arxiv.org/abs/2607.25816) - Trains one model to act and predict its own next tool call.

### Henry Shi curriculum anchor - 1

- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - Compares process-level and outcome-level supervision for reasoning.

### OpenReview bounded relevance search - 4

- [Scaling Long-Horizon Agent via Context Folding](https://openreview.net/forum?id=lNRgWoGfYg) - Folds completed subtask trajectories into compact retained context.
- [Agentic Aggregation for Parallel Scaling](https://openreview.net/forum?id=hXzAocijH7) - Uses an agent to inspect and synthesize parallel long-horizon trajectories.
- [On Training Large Language Models for Long-Horizon Tasks](https://openreview.net/forum?id=PnHfrCMKtp) - Isolates horizon length as a training bottleneck and tests horizon reduction.
- [ShiftBench](https://openreview.net/forum?id=CCSztIjmOy) - Measures post-shift memory recovery separately from aggregate retrieval accuracy.

## Source Receipts

- https://huggingface.co/papers/date/2026-08-07
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://arxiv.org/
- https://openreview.net/
