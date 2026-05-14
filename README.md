# Trinethra Supervisor Feedback Analyzer

AI-assisted supervisor feedback analysis tool built for the DeepThought Software Developer Internship Assignment.

---

# Overview

Trinethra is an internal supervisory layer used to evaluate Fellow performance across client engagements.

This project helps psychology interns analyze supervisor feedback transcripts faster using a locally running LLM through Ollama.

The application takes a supervisor transcript as input and generates:

- Extracted behavioral evidence
- Suggested rubric score
- KPI mapping
- Gap analysis
- Follow-up questions

The AI generates a draft analysis while the human reviewer makes the final decision.

---

# Tech Stack

## Frontend
- React + Vite
- Tailwind CSS
- Axios
- Lucide React

## Backend
- Node.js
- Express.js

## AI / LLM
- Ollama
- Llama 3.2 model

---

# Why Llama 3.2?

I chose `llama3.2` because:

- Lightweight and fast for local inference
- Works well on standard laptops
- Good structured response quality
- Easy Ollama integration
- Suitable for iterative prompt engineering

---

# Features

- Paste supervisor transcript
- Run AI-powered analysis locally
- Extract evidence quotes
- Generate rubric score with justification
- KPI mapping
- Gap analysis detection
- Suggested follow-up questions
- Human review warning banner
- Clean SaaS-style dashboard UI

---

# Architecture Overview

```text
Frontend (React)
      ↓
Express API Backend
      ↓
Prompt Builder
      ↓
Ollama Local API
      ↓
Llama 3.2 Model
      ↓
Structured JSON Response
      ↓
Frontend Dashboard UI



# Author

## Ayushi Kushwaha
