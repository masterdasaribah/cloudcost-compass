# API Specification

## GET /api/v1/health

Returns service health.

## POST /api/v1/compare/compute

### Request

```json
{
  "region": "us-east-1",
  "vcpu": 4,
  "memory_gb": 16,
  "os": "linux",
  "hours_per_month": 730
}
```

### Response

```json
{
  "request": {},
  "results": [
    {
      "provider": "AWS",
      "service": "EC2",
      "instance_type": "m6i.xlarge",
      "region": "us-east-1",
      "vcpu": 4,
      "memory_gb": 16,
      "hourly_price": 0.192,
      "monthly_price": 140.16,
      "currency": "USD",
      "match_quality": "Exact"
    }
  ]
}
```
