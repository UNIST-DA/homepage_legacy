---
layout: project

slug: lqc-od
permalink: /research/projects/contents/lqc-od/
image: /assets/research/projects/lqc-od.png

title: Domain Knowledge-Informed Functional Outlier Detection for LQC
summary: 작성중
organizer: 작성중
period: 2021.00 – 2024.00
category: System Monitoring & Anomaly Detection
tags:
  - Manufacturing
  - LQC
  - ST
  - Domain Knowledge

---


<!-- 이미지 삽입 방법 (링크 및 크기 조절 가능) -->

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/lqc-od.png' | relative_url }}" 
       alt="Monitoring framework integrating domain knowledge" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
  <figcaption style="margin-top:8px;font-size:14px;color:#6b7280;">
    Figure 1. 이미지 설명을 적어주세요
  </figcaption>
</figure>


<!-- Background, Goals, Methods는 필수 작성 (전체 영어) -->

## Motivation
- In the manufactureing process, time-series data are collected from multi-sensors and used for quality control.
- In the line quality control system (LQC) process, weak failures that are difficult to detect with conventional detection methods occur.

## Goal
- To develop a methodology for detecting tiny anomaly patterns in manufacturing time-series data using Sequential Transformation (ST) and domain knowledge of failure patterns.

## Methodology
- The ST maximizes the time-series pattern of a tiny anomaly sample through various calculation.
- We utilize domain knowledge of failure patterns to defiine new derivatives and combine them with ST to improve their performance.
