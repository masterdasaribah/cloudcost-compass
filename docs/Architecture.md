# Architecture - CloudCost Compass

```text
User Browser
  ↓
React Frontend
  ↓
FastAPI Backend
  ↓
Pricing Comparison Service
  ↓
Seed Pricing Data
```

## Frontend

React-based UI for collecting compute requirements and displaying comparison results.

## Backend

FastAPI service exposing health and compute comparison endpoints.

## Pricing Engine

Normalizes provider records and selects the closest matching compute option.

## Data Layer

Seed JSON dataset for MVP. Future versions can replace this with PostgreSQL and scheduled CSP pricing ingestion.

## Normalization

- AWS, GCP, Azure use vCPU
- OCI OCPU mapping can be normalized later; MVP seed data stores normalized vCPU values
- Memory stored in GB
- Monthly price = hourly price × hours per month
