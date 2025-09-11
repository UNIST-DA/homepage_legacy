---
layout: project

slug: traffic-cong
permalink: /research/projects/contents/traffic-cong/
image: /assets/research/projects/traffic-cong-1.png

title: Prediction of Traffic Congestion Propagation
summary: Modeling and quantifying the time-lagged propagation of accident-induced non-recurrent traffic congestion using causal inference and bootstrap-based uncertainty analysis.
organizer: 작성중
period: 2021.00 – 2024.00
category: Time-Series Representation Learning
tags:
  - Non-recurrent Congestion
  - Propagation Mechanism
  - Bootstrap Uncertainty

---

<!-- Motivation, Goal, Methodology는 필수 작성 (전체 영어) -->

## Motivation
- The impact of congestion caused by the accident is transmitted to subsequent roads, and this congestion propagation is delayed and manifested on some subsequent roads.
- Unpredictable delayed event, lack of histofical irregular event data make the pattern of traffic congestion propagation difficult.

## Goal
To identify and quantify the propagation mechanisms and time-lag effects of accident-induced non-recurrent traffic congestion.

## Methodology
- Modeling the pattern of traffic congestion propagation caused by non-recurrent traffic accidents.
- Identify the statistical causal relationship between the accident road and the subsequent road, and use the bootstrap method to quantify uncertainties about lags that delay congestion propagation.

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/traffic-cong-2.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
</figure>

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/traffic-cong-1.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
</figure>
