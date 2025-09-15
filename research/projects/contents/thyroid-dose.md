---
layout: project

slug: throid-dose
permalink: /research/projects/contents/thyroid-dose/
image: /assets/research/projects/thyroid-dose-1.webp

title: Personalized Dose Determination for Patients with Thyroid Hormone Disorders
summary: Optimal and Personalized Dose Determination for Patients with Thyroid Hormone Disorders Using Deep Learning-Based Survival Analysis
organizer: Thyroscope
period: 2022.01 – 2025.12
category: AI in Quality Engineering
tags:
  - Survival Analysis
  - Deep Learning
  - Time Series Data

---

## Motivation
A drawback of traditional thyroid hormone therapy is the difficulty in determining the initial dosage. An inappropriate initial dosage can lead to 1) goiter, 2) thyroid eye disease, 3) prolonged treatment duration, and 4) increased medical costs and patient dissatisfaction.

## Methodology
- In the training phase, **longitudinal patient data** is fed into a deep learning survival analysis model to train it to calculate a cumulative incidence function that fits **individual patient profiles.**
- In the testing phase, **only first patient data** is fed into the model to calculate different cumulative incidence functions for **different dose levels.** The dose with the highest value is recommended as the **optimal initial dose.**

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/thyroid-dose-1.webp' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
</figure>

## Contribution
- Existing approaches to treating hyperthyroidism have often relied on physician experience, but we have developed a data-driven model that leverages deep learning and survival analysis to provide individualized dose recommendations for patients with hyperthyroidism.
- This approach effectively addresses the challenges posed by complex, nonlinear and irregularly sampled data that are hyperthyroidism patients
