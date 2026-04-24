import json
from pathlib import Path
from app.models.schemas import ComputeCompareRequest

DATA_FILE = Path(__file__).resolve().parents[1] / "data" / "compute_prices_seed.json"

def load_seed_prices():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)

def determine_match_quality(item, request):
    if item["vcpu"] == request.vcpu and item["memory_gb"] == request.memory_gb:
        return "Exact"
    if item["vcpu"] >= request.vcpu and item["memory_gb"] >= request.memory_gb:
        return "Overprovisioned"
    return "Approximate"

def score_match(item, request):
    return abs(item["vcpu"] - request.vcpu) + abs(item["memory_gb"] - request.memory_gb)

def compare_compute_prices(request: ComputeCompareRequest):
    prices = load_seed_prices()
    filtered = [p for p in prices if p["region"] == request.region and p["os"].lower() == request.os.lower()]
    results = []
    for provider in ["AWS", "GCP", "Azure", "OCI"]:
        provider_items = [p for p in filtered if p["provider"] == provider]
        if not provider_items:
            continue
        best = sorted(provider_items, key=lambda x: score_match(x, request))[0]
        results.append({
            "provider": best["provider"],
            "service": best["service"],
            "instance_type": best["instance_type"],
            "region": best["region"],
            "vcpu": best["vcpu"],
            "memory_gb": best["memory_gb"],
            "hourly_price": best["hourly_price"],
            "monthly_price": round(best["hourly_price"] * request.hours_per_month, 2),
            "currency": best["currency"],
            "match_quality": determine_match_quality(best, request),
            "notes": best.get("notes")
        })
    return sorted(results, key=lambda r: r["monthly_price"])
