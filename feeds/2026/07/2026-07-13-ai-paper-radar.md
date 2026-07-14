# AI Radar Daily Feed - 2026-07-13

Public-safe daily paper discovery from AI Radar.

<!-- ai-radar-feed-version: 2 -->
<!-- ai-radar-feed-type: daily -->

## Summary

- Candidate count after deduplication: 70.
- Recommended tonight: 5.
- Sources checked: arXiv, Hugging Face Daily Papers, DAIR.AI Papers of the Week, Henry Shi's AI Crash Course, OpenReview, targeted project repositories, and one reader-supplied Oak Lab item.
- Source note: OpenReview required browser verification during this run, so no OpenReview-only candidate was included.

## Recommended Tonight

- [The OaK Architecture: A Vision of SuperIntelligence from Experience](https://oaklab.ai/posts/the-oak-architecture)
  - Tags: continual learning, reinforcement learning, planning, world models.
  - What the source claims: continually learning agents should meta-learn how their parameters change and build reusable abstractions through Feature Construction, SubTask, Option, Model, and Planning.
  - Why builders should inspect it: it frames an agent as a persistent learning process rather than a frozen model wrapped in tools and memory.
  - Source boundary: this is an invited keynote and active research program, not a peer-reviewed paper or a completed end-to-end system.
  - First reading action: read Oak Lab's [credit-assignment post](https://oaklab.ai/posts/learning-from-experience-instead-of-curated-datasets), then draw the five FC-STOMP stages while watching the keynote.
- [Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming](https://arxiv.org/abs/2607.11698)
  - Tags: agents, evaluation, security, red-teaming.
  - What the paper claims: a falsifiable discovery loop can accumulate reusable vulnerability concepts for production agents and transfer them across tested scenarios and attack channels.
  - Why builders should inspect it: it turns red-team episodes into auditable knowledge rather than a pile of disconnected attacks.
  - First reading action: reconstruct the hypothesis, falsifier, attack, reflection, and concept-promotion loop.
- [LLM-as-a-Verifier: A General-Purpose Verification Framework](https://arxiv.org/abs/2607.05391)
  - Tags: verification, calibration, dense reward, agent evaluation.
  - What the paper claims: continuous scores derived from scoring-token logits enable finer verification and can also estimate progress and provide reinforcement-learning feedback.
  - Why builders should inspect it: it offers a concrete alternative to brittle pass/fail or discrete judge prompts.
  - First reading action: isolate the scoring equation and compare it with a discrete evaluator.
- [Multi-Agent LLMs Fail to Explore Each Other](https://arxiv.org/abs/2607.11250)
  - Tags: multi-agent systems, exploration, coordination, evaluation.
  - What the paper claims: current LLM agents interact myopically with peers, while structured peer selection improves exploration in the paper's evaluated settings.
  - Why builders should inspect it: parallel agents are useful only when they probe complementary capability instead of repeating the same decomposition.
  - First reading action: identify the paper's exploration metric and peer-selection rule.
- [Metacognition in LLMs: Foundations, Progress, and Opportunities](https://arxiv.org/abs/2607.11881)
  - Tags: metacognition, calibration, self-correction, survey.
  - What the paper claims: the field can be organized around methods and benchmarks for measuring, eliciting, improving, and applying LLM metacognition.
  - Why builders should inspect it: it supplies a research map for confidence, self-monitoring, critique, and escalation.
  - First reading action: extract the taxonomy and choose one measurable construct for an experiment.
## Full Candidate List

### Reader-selected addition

- [The OaK Architecture](https://oaklab.ai/posts/the-oak-architecture) - continual learning, online meta-learning, temporal abstraction, and model-based planning; invited keynote/research program rather than a peer-reviewed paper.

### Fresh arXiv query set

- [Agent Hacks Agent](https://arxiv.org/abs/2607.11698) - production-agent red-teaming with reusable vulnerability concepts.
- [CVPR 2026 AdvML Workshop Challenge Report](https://arxiv.org/abs/2607.11560) - adversarial multimodal attacks against driving vision-language agents.
- [Compile, Then Page](https://arxiv.org/abs/2607.11346) - executable SOP programs and capability-gated runtimes for procedural agents.
- [Mako](https://arxiv.org/abs/2607.11288) - a self-evolving autonomous web-exploitation system with dual-use restrictions.
- [Automated Textbook Auditing with Multi-Agent LLM Systems](https://arxiv.org/abs/2607.11276) - agent ensembles, judge filtering, and human validation for textbook QA.
- [Multi-Agent LLMs Fail to Explore Each Other](https://arxiv.org/abs/2607.11250) - peer exploration and coordination in multi-agent systems.
- [Invariant Learning Dynamics of Transformers](https://arxiv.org/abs/2607.11875) - a low-dimensional framework for studying learned reasoning circuits.
- [Evidence-Backed Video Question Answering](https://arxiv.org/abs/2607.11862) - video answers paired with dense spatiotemporal evidence.
- [MM-ToolSandBox](https://arxiv.org/abs/2607.11818) - evaluation for visual tool-calling agents.
- [Time-Lag-Aware Deep RL for Flexible Job-Shop Scheduling](https://arxiv.org/abs/2607.11725) - reinforcement learning for industrial scheduling.
- [Think Through a Bottleneck](https://arxiv.org/abs/2607.11696) - hourglass reasoning for rigorous induction.
- [From World Action Models to Embodied Brains](https://arxiv.org/abs/2607.11689) - a roadmap for open-world physical intelligence.
- [Complexity Theory of Randomised Testing](https://arxiv.org/abs/2607.11811) - theory for randomized software testing.
- [Evaluating RE Practices for Explainability](https://arxiv.org/abs/2607.11771) - requirements-engineering practices for explainable systems.
- [Which Optimizer, At What Budget?](https://arxiv.org/abs/2607.11705) - budget-dependent optimizer selection for search-based software engineering.
- [Self-Healing Visual Recovery for Autonomous Ground Vehicles](https://arxiv.org/abs/2607.11686) - camera-only runtime recovery for ground robots.
- [Mediating Multi-Modal Human Intent into Safe UAV Maneuvers](https://arxiv.org/abs/2607.11654) - requirements-governed interpretation of UAV commands.
- [ThinkLog](https://arxiv.org/abs/2607.11615) - reasoning-assisted log-statement generation.
- [Forgetting Our Way to Shared Meaning](https://arxiv.org/abs/2607.11787) - effects of memory degradation on conceptual coordination.
- [How Temperature Shapes Ideological Discourse in RAG](https://arxiv.org/abs/2607.11783) - sampling temperature and discourse transfer through retrieval.
- [RAGU](https://arxiv.org/abs/2607.11683) - a staged, modular GraphRAG engine.
- [Extending LLM Context via Associative Recurrent Memory](https://arxiv.org/abs/2607.11614) - recurrent associative memory for longer-context processing.
- [LightMem-Ego](https://arxiv.org/abs/2607.11487) - hierarchical streaming multimodal memory for personal assistants.
- [Cross-Architecture LLM Ensembles for Legal Information Processing](https://arxiv.org/abs/2607.11400) - retrieval, reranking, prompting, and ensembles for legal tasks.
- [Metacognition in LLMs](https://arxiv.org/abs/2607.11881) - a survey of LLM metacognition methods and benchmarks.
- [Durability and Cross-Language Transfer for Teaching-Feedback Classification](https://arxiv.org/abs/2607.11873) - a benchmark of protocol and representation durability.
- [Inside the Unfair Judge](https://arxiv.org/abs/2607.11871) - mechanistic analysis of LLM-as-judge bias.
- [AdvancedMathBench](https://arxiv.org/abs/2607.11849) - advanced mathematical proof generation and verification.
- [MET](https://arxiv.org/abs/2607.11736) - theory-grounded multilingual moral reasoning.
- [STEP](https://arxiv.org/abs/2607.11722) - temporal and educational modeling for career-path recommendation.
- [Requential Coding](https://arxiv.org/abs/2607.11883) - self-generated training data for model compression.
- [StoryTeller](https://arxiv.org/abs/2607.11798) - training-free narrative grounding for long-form audio description.
- [Factor-Wise Expert Composition in Discrete Diffusion Models](https://arxiv.org/abs/2607.11758) - compositional expert selection in discrete diffusion.
- [Paradoxes of Game-Theoretic Equilibria and Price of Anarchy](https://arxiv.org/abs/2607.11752) - game-theoretic equilibrium analysis.
- [Transformer-Guided Swarm Intelligence for Frugal NAS](https://arxiv.org/abs/2607.11826) - transformer-guided neural architecture search.
- [HiFi-LLP](https://arxiv.org/abs/2607.11746) - confidence-aware latency prediction for hardware-aware NAS.
- [NeuralActuator](https://arxiv.org/abs/2607.11734) - learned robot dynamics and external-force perception.
- [CatRetriever](https://arxiv.org/abs/2607.11712) - contrastive retrieval for catalyst discovery.
- [Read It Back](https://arxiv.org/abs/2607.11886) - pretrained multimodal models as zero-shot image-generation reward models.
- [Minimalist Retargeting-Guided RL for Dexterous Manipulation](https://arxiv.org/abs/2607.11874) - reinforcement learning for dexterous robotics.
- [Agentic Multi-View Reasoning in Sports Video Understanding](https://arxiv.org/abs/2607.11844) - agentic reasoning across multiple sports-video views.
- [LoRA-Based Cascaded Multimodal Fusion](https://arxiv.org/abs/2607.11839) - multimodal action recognition in medical training.
- [HASTE](https://arxiv.org/abs/2607.11838) - rapid post-disaster building-damage assessment.
- [Input-Aware Dynamic Backdoor Attack Against Quantum Neural Networks](https://arxiv.org/abs/2607.11843) - backdoor attacks against quantum neural networks.

### Hugging Face Daily Papers for July 13

- [Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964) - long-horizon terminal-agent evaluation with dense grading.
- [Video Generation Models are General-Purpose Vision Learners](https://arxiv.org/abs/2607.09024) - transfer from video generation to general vision learning.
- [Scalable Visual Pretraining for Language Intelligence](https://arxiv.org/abs/2607.09657) - visual pretraining connected to language capability.
- [KronQ](https://arxiv.org/abs/2607.07964) - Kronecker-factored Hessian quantization.
- [Trust Region Policy Distillation](https://arxiv.org/abs/2607.04751) - policy distillation with trust-region constraints.
- [From RGB Generation to Dense Field Readout](https://arxiv.org/abs/2607.06553) - dense prediction using text-to-image models.
- [Why Memorized Knowledge Fails to Generalize in LLM Finetuning](https://arxiv.org/abs/2607.08393) - mechanisms behind memorization and generalization gaps.
- [PanoWorld](https://arxiv.org/abs/2607.09661) - real-world panoramic generation.
- [Self-Guided Test-Time Training for Long-Context LLMs](https://arxiv.org/abs/2607.09415) - test-time adaptation for long-context models.
- [Flow-ERD](https://arxiv.org/abs/2607.06957) - diverse traffic simulation using flow matching.
- [Phone Segmentation and Recognition through Phonological Activation Mapping](https://arxiv.org/abs/2607.09020) - phonological speech representation.
- [MedPMC](https://arxiv.org/abs/2607.07673) - scaling high-fidelity medical multimodal data.
- [A Sovereign Open-Source Foundation Model for German and English](https://arxiv.org/abs/2607.09424) - a bilingual open foundation model.
- [VaseMuseum](https://arxiv.org/abs/2607.06374) - an intelligent digital museum for ancient pottery.

### DAIR.AI Papers of the Week, July 5-12

- [LLM-as-a-Verifier](https://arxiv.org/abs/2607.05391) - continuous logit-based verification across agentic domains.
- [Always-On Agents](https://arxiv.org/abs/2606.30306) - durable agent state, authority, provenance, audit, and rollback.
- [HOLA](https://arxiv.org/abs/2607.02303) - exact-memory support for linear attention.
- [Puzzle-75B](https://arxiv.org/abs/2607.04371) - compressed hybrid mixture-of-experts serving.
- [The Harness Effect](https://arxiv.org/abs/2607.06906) - orchestration-layer effects on agent cost and performance.
- [ReContext](https://arxiv.org/abs/2607.02509) - inference-time evidence replay for long-context reasoning.
- [Agent Limitations Taxonomy](https://arxiv.org/abs/2607.05775) - a cross-benchmark taxonomy of agent failures.
- [BlockSearch](https://arxiv.org/abs/2607.01538) - in-context retrieval at million-token scale.
- [RLVR Meets Human Likeness](https://arxiv.org/abs/2607.01181) - combining verifiable rewards with a human-likeness signal.
- [Replicating ML Papers with Agents](https://arxiv.org/abs/2607.02134) - evidence-gated replication of machine-learning papers by coding agents.

### Curriculum connection

- [ReAct](https://arxiv.org/abs/2210.03629) - foundational reasoning-and-acting loop for tool-using agents.

## Source Receipts

- https://export.arxiv.org/api/query
- https://huggingface.co/papers/date/2026-07-13
- https://github.com/dair-ai/AI-Papers-of-the-Week/blob/main/years/2026.md
- https://github.com/henrythe9th/AI-Crash-Course
- https://openreview.net/
- https://github.com/henrymao2004/Auto-research-red-teaming-in-sleep
- https://github.com/llm-as-a-verifier/llm-as-a-verifier
- https://github.com/deeplearning-wisc/mace
- https://github.com/yale-nlp/LLM-Metacognition
- https://react-lm.github.io/
- https://oaklab.ai/posts/the-oak-architecture
- https://oaklab.ai/posts/learning-from-experience-instead-of-curated-datasets
- https://www.reddit.com/r/singularity/s/j2a1Ui2ZhK
