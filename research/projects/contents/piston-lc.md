---
layout: project

slug: piston-lc
permalink: /research/projects/contents/piston-lc/
image: /assets/research/projects/piston-lc.png

title: Deep Learning Approach for Behavior of Piston of Linear Compressor
summary: 
organizer: 
period: 2021.00 – 2024.00
category: 
tags:
  - tag 1
  - tag 2
  - tag 3

---


<!-- 이미지 삽입 방법 (링크 및 크기 조절 가능) -->

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/piston-lc.png' | relative_url }}" 
       alt="Monitoring framework integrating domain knowledge" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
  <figcaption style="margin-top:8px;font-size:14px;color:#6b7280;">
    Figure 1. 이미지 설명을 적어주세요
  </figcaption>
</figure>


<!-- Background, Goals, Methods는 필수 작성 (전체 영어) -->

## Motivation
- 80% of the total refrigerator power consumption is consumed by the compressor
- Cooling is determined by distance and position of piston movement

## Goal
Precision control of piston and sensorless technology required

## Methodology
- Data: Build an automated data collection system which can measure current, voltage, and stroke
- Modeling a Multi Layer Perceptron (MLP) consisting of four layers (with drop-out)
- More than 90% performance improvement
