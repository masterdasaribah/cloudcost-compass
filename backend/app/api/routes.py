from fastapi import APIRouter
from app.models.schemas import ComputeCompareRequest, ComputeCompareResponse
from app.services.compare_service import compare_compute_prices

router = APIRouter()

@router.get("/health")
def health_check():
    return {"status": "ok", "service": "cloudcost-compass"}

@router.post("/compare/compute", response_model=ComputeCompareResponse)
def compare_compute(request: ComputeCompareRequest):
    return {"request": request, "results": compare_compute_prices(request)}
