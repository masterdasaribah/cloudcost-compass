# Engineering Decisions

## Why FastAPI?

- Lightweight
- Fast for API development
- Strong typing with Pydantic

## Why Seed Data First?

- Avoid complexity of CSP pricing APIs initially
- Focus on product logic first
- Enables rapid MVP delivery

## Why Normalize CPU and Memory?

Each CSP uses different units:
- AWS/GCP/Azure → vCPU
- OCI → OCPU

Normalization allows fair comparison.

## Why Closest Match Instead of Exact Only?

Exact matches are rare across CSPs.

Closest match ensures:
- Practical usability
- Real-world relevance