from pydantic import BaseModel, Field
from typing import List

class ComputeCompareRequest(BaseModel):
    region: str = Field(..., example="us-east-1")
    vcpu: int = Field(..., gt=0, example=4)
    memory_gb: int = Field(..., gt=0, example=16)
    os: str = Field(default="linux", example="linux")
    hours_per_month: int = Field(default=730, gt=0, example=730)

class ComputePriceResult(BaseModel):
    provider: str
    service: str
    instance_type: str
    region: str
    vcpu: int
    memory_gb: int
    hourly_price: float
    monthly_price: float
    currency: str
    match_quality: str
    notes: str | None = None

class ComputeCompareResponse(BaseModel):
    request: ComputeCompareRequest
    results: List[ComputePriceResult]
