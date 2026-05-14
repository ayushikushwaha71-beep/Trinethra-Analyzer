# Trinethra Supervisor Feedback Analyzer

This workspace contains a full stack starter app for analyzing supervisor feedback transcripts.

## Architecture

- `frontend/` - React + Vite application
- `backend/` - Express API server
- `backend/services/ollamaService.js` - sends prompts to local Ollama
- `backend/prompts/analysisPrompt.js` - strict JSON prompt for reliable output

## Features

- Paste supervisor transcript in the frontend
- Send transcript to backend with Axios
- Backend forwards prompt to Ollama `llama3.2`
- Returns structured JSON with:
  - evidence quotes
  - rubric score
  - KPI mapping
  - gap analysis
  - follow-up questions

## Run locally

1. Start backend

```bash
cd backend
npm run dev
```

2. Start frontend

```bash
cd frontend
npm run dev
```

## Notes

- Uses React + Express
- Uses Ollama locally with `llama3.2`
- Uses strict JSON prompting for output reliability
- Includes an uncertainty warning banner in the UI
- Built as an MVP-first architecture for quick feedback analysis
