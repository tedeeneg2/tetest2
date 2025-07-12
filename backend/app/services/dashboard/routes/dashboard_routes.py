# app/services/dashboard/routes/dashboard_routes.py
from fastapi import APIRouter
from app.services.dashboard.services import candidate_widgets, employer_widgets

router = APIRouter()

@router.get("/dashboard/candidate")
async def get_candidate_dashboard():
    return await candidate_widgets.get_candidate_summary()

@router.get("/dashboard/employer")
async def get_employer_dashboard():
    return await employer_widgets.get_employer_summary()
