# CloudCost Compass

CloudCost Compass is a portfolio-grade multi-cloud FinOps MVP for comparing on-demand compute pricing across AWS, GCP, Azure, and OCI.

## Vision

Enable architects, engineers, FinOps teams, and technology leaders to make faster and clearer multi-cloud compute cost decisions.

## Problem

Cloud pricing is difficult to compare because each provider uses different terminology, instance shapes, regions, pricing models, and licensing assumptions.

## MVP Scope

- Compare on-demand VM compute pricing
- Support AWS, GCP, Azure, and OCI
- Region selection
- vCPU and memory based matching
- Linux OS selection for MVP
- Monthly cost estimation
- Seed pricing data first, live pricing APIs later

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Python FastAPI |
| Data | JSON seed data for MVP |
| Deployment | Docker Compose ready |

## Run Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Example

```http
POST /api/v1/compare/compute
```

```json
{
  "region": "us-east-1",
  "vcpu": 4,
  "memory_gb": 16,
  "os": "linux",
  "hours_per_month": 730
}
```

## GitHub Positioning

This project demonstrates multi-cloud knowledge, FinOps thinking, software architecture, Agile delivery, product documentation, and practical engineering implementation.
