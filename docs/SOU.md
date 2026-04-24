# Statement of Understanding - CloudCost Compass

## Purpose

CloudCost Compass will be built as an MVP software product to compare compute pricing across AWS, GCP, Azure, and OCI.

## Business Problem

Organizations struggle to compare cloud compute costs because CSPs use different instance families, CPU models, memory ratios, regions, discounts, and operating system licensing structures.

## MVP Objective

Create a working local MVP where a user enters region, vCPU, memory, OS, and monthly runtime hours and receives comparable on-demand compute options across four CSPs.

## In Scope

- VM compute comparison
- AWS, GCP, Azure, OCI
- Region filtering
- CPU and memory matching
- Linux OS for initial MVP
- On-demand pricing
- Monthly cost calculation
- Seed dataset
- GitHub-ready documentation

## Out of Scope for MVP

- Live CSP pricing API integration
- Reserved pricing
- Savings Plans
- Spot pricing
- Enterprise discounts
- Database and storage pricing
- Authentication

## Success Criteria

- User can run the app locally
- User can submit compute requirements
- App returns CSP comparison results
- Documentation is professional enough for GitHub and interview showcase
