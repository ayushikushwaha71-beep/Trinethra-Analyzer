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

The frontend sends transcript data to the backend.

The backend:

Builds a structured prompt
Sends it to Ollama
Receives the LLM response
Parses JSON output
Returns structured analysis to frontend
Folder Structure
trinethra-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   └── server.js
Setup Instructions
1. Clone Repository
git clone https://github.com/ayushikushwaha71-beep/Trinethra-Analyzer.git
2. Install Ollama

Download and install:

https://ollama.com

3. Pull Llama Model
ollama pull llama3.2
4. Start Ollama
ollama run llama3.2
5. Start Backend
cd backend
npm install
npm run dev

Backend runs on:

http://localhost:5000
6. Start Frontend
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
Prompt Engineering Approach

The prompt was designed with the following goals:

Prevent hallucinations
Force structured JSON output
Ensure evidence-based analysis
Detect missing information
Generate actionable follow-up questions

The prompt explicitly instructs the model:

Not to invent evidence
Only use transcript information
Return valid JSON only
Mark unavailable data as "Not Mentioned"
Design Challenges Tackled
1. Structured Output Reliability
Challenge

LLMs often return inconsistent JSON.

Approach
Used strict JSON prompting
Restricted model responses
Added predictable schema
Used backend JSON parsing
2. Showing Uncertainty
Challenge

Users may blindly trust AI output.

Approach

Added warning banner:

"AI-generated recommendations. Please validate findings before finalizing the assessment."

Positioned AI as assistant, not decision-maker.

Product Decisions
Included
Core transcript analysis workflow
Simple SaaS dashboard UI
Evidence-first analysis structure
Human review messaging
Excluded
Authentication
Database storage
Deployment
Complex analytics
Multi-user workflows
Reason

Focused on delivering a reliable MVP within assignment scope.

Future Improvements

If given more time, I would improve:

Side-by-side transcript and evidence linking
Editable analysis sections
Confidence scoring
Retry mechanism for malformed JSON
Transcript history storage
Multi-model support
Better gap reasoning logic
Inline evidence highlighting
Sample Workflow
Paste transcript
Click "Run Analysis"
Backend sends transcript to Ollama
Llama 3.2 generates structured analysis
Results displayed in dashboard cards
Important Note

This tool generates AI-assisted draft recommendations only.

Human validation is required before finalizing assessments.

Author
Ayushi Kushwaha
