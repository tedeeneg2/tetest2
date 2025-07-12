from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

router = APIRouter()

class Job(BaseModel):
    id: str
    title: str
    company: str
    location: str
    salary: str
    description: str

# Sample in-memory job data
job_list = [
    Job(id="1", title="Frontend Developer", company="Techify", location="Remote", salary="$80k", description="React + Tailwind project"),
    Job(id="2", title="Backend Engineer", company="ScaleX", location="Bangalore", salary="$100k", description="Python + FastAPI microservices"),
]

@router.get("/sample", response_model=List[Job])
async def get_sample_jobs():
    return job_list
