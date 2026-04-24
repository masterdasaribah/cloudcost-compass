# Product Requirements Document - CloudCost Compass

## Product Overview

CloudCost Compass is a web application for comparing cloud compute pricing across AWS, GCP, Azure, and OCI.

## Target Users

- Cloud architects
- FinOps engineers
- Engineering leaders
- Solution architects
- Cloud migration teams

## MVP Features

### Compute Input Form

Users can enter region, vCPU, memory, OS, and monthly runtime hours.

### Comparison Table

The app displays provider, service, instance type, vCPU, memory, hourly cost, monthly cost, and match quality.

### Closest Match Engine

The backend identifies the closest matching compute option for each CSP based on CPU and memory.

### Seed Pricing Data

The MVP starts with seed pricing data to prove product logic before live API integration.

## Non-Functional Requirements

- Simple local setup
- Modular backend
- Clean API design
- Extensible pricing data model
- Professional documentation
