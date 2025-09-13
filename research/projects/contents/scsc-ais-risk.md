---
layout: project

slug: scsc-ais-risk
permalink: /research/projects/contents/scsc-ais-risk/
image: /assets/research/projects/scsc-ais-risk-1.png

title: Risk-Aware Imitation Learning with Environmental Context for AIS
summary: Imitation-learning anomaly detection for AIS is improved by adding environmental data (wind, waves), so the model can tell apart risky vessel behavior from safe weather-driven detours.
organizer: Human Centered – Carbon Neutral Global Supply Chain Research Center
period: 2025.08 – 
category: Time-Series Representation Learning
tags:
  - Imitation Learning
  - Anomaly Detection
  - Risk-Aware
  - Environmental Data

---

## Motivation
- Most imitation-learning approaches to anomaly detection rely only on vessel trajectories.
- Without environmental context, hazard-avoidance maneuvers are often misclassified as anomalies.
- By enhancing imitation-learning–based anomaly detection with environmental context (e.g., wind, waves), the model can better distinguish unsafe vessel actions from safe, weather-driven detours.

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/scsc-ais-risk-1.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
  <figcaption style="margin-top:8px;font-size:14px;color:#6b7280;">
    Representative image of OIL-AD, which serves as the reference for this preliminary research.
  </figcaption>
</figure>

## Methodology
- Redefine the imitation-learning state space to include ERA5 environmental variables.
- Train policies on normal trajectories under environmental context.
- Evaluate with hazard-injection scenarios to test decision robustness.

## Contribution (Expected)
- Hazard-injection evaluation pipeline for imitation learning under weather impact.
- Framework showing how enriched state representations improve risk-sensitive imitation learning for anomaly detection
