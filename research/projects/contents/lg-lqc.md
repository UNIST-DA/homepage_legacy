---
layout: project

slug: lg-lqc
permalink: /research/projects/contents/lg-lqc/
image: /assets/research/projects/lg-lqc-1.png

title: Fault Detection via Domain-Knowledge-Based Training Data Refinement
summary: A domain knowledge–based data refinement methodology for detecting defective products that cannot be filtered out in the LQC process.
organizer: LG Electronics
period: 2023.07 - 2024.10
category: System Monitoring & Anomaly Detection
tags:
  - Outlier Detection
  - Manufacturing AI
  - Quality Inspection

---

<!-- Motivation, Goal, Methodology는 필수 작성 (전체 영어) -->

## Motivation
Defective products that are not detected during the LQC process are shipped to customers and later returned due to quality issues.

## Methodology
Based on domain knowledge, the conditions of abnormal patterns are specified, and these are used to refine the training data for the model. A self-supervised learning methodology is employed, taking into account data contamination issues and the extremely limited information on minor defects.

## Contribution
Before data refinement, defective products were rarely detected; after refinement, more than 80% of them were identified. The model also learned to distinguish abnormal data from normal data more effectively.

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/lg-lqc-1.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
  <figcaption style="margin-top:8px;font-size:14px;color:#6b7280;">
    A general process for detecting product defects through Line Quality Control.
  </figcaption>
</figure>

