---
layout: project

slug: scsc-llm-maritime
permalink: /research/projects/contents/scsc-llm-maritime/
image: /assets/research/projects/scsc-llm-maritime-1.png

title: LLM Agent for Maritime Data Analysis
summary: This project develops a Hybrid Prompt Agent that enables natural-language analysis of maritime AIS data by combining query classification with dynamic prompting.
organizer: SCSC
period: 2024.06 - 2025.08
category: System Monitoring & Anomaly Detection
tags:
  - LLM Agent
  - Prompt Engineering
  - AIS Data
  - Maritime Data Analytics
  - Conversation Agents

---

<!-- Motivation, Goal, Methodology는 필수 작성 (전체 영어) -->

## Motivation
Conventional AIS analysis requires SQL/GIS/Python expertise, while single-prompt LLM agents cannot balance factual accuracy and analytical reasoning.

## Methodology
A two-stage agent: first classify query types (fact/aggregation vs. inference/analysis), then apply tailored prompts—compact for accuracy or CoT for reasoning—executed via safe tool-calling on AIS datasets.

## Contribution
- Hybrid prompt architecture validated on 100 AIS QA benchmark
- Balanced improvements in accuracy, reasoning, and efficiency

<figure style="margin:20px 0;text-align:center">
  <img src="{{ '/assets/research/projects/scsc-llm-maritime-1.png' | relative_url }}" 
       style="display:block;margin:0 auto;width:60%;border-radius:8px;">
  <figcaption style="margin-top:8px;font-size:14px;color:#6b7280;">
    Hybrid Prompt Agent workflow with AIS tracks and analysis results
  </figcaption>
</figure>
