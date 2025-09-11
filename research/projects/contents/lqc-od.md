---
layout: project

slug: lqc-od
permalink: /research/projects/contents/lqc-od/
image: /assets/research/projects/lqc-od-1.png

title: Domain Knowledge-Informed Functional Outlier Detection for LQC
summary: An ST-based method using failure pattern knowledge to detect tiny anomalies in manufacturing time-series data.
organizer: LG Electronics
period: 2022.01 – 2022.12
category: System Monitoring & Anomaly Detection
tags:
  - Manufacturing
  - LQC
  - ST
  - Domain Knowledge

---
<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/lqc-od-1.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
</figure>

<!-- Motivation, Goal, Methodology는 필수 작성 (전체 영어) -->

## Motivation
- In the manufacturing process, time-series data are collected from multi-sensors and used for quality control.
- In the line quality control system (LQC) process, weak failures that are difficult to detect with conventional detection methods occur.

## Goal
- To develop a methodology for detecting tiny anomaly patterns in manufacturing time-series data using Sequential Transformation (ST) and domain knowledge of failure patterns.

## Methodology
- The ST maximizes the time-series pattern of a tiny anomaly sample through various calculation.
- We utilize domain knowledge of failure patterns to define new derivatives and combine them with ST to improve their performance.
