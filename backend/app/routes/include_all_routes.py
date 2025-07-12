# app/routes/include_all_routers.py
from fastapi import FastAPI
from app.routes import auth, dashboard, jobs, resume

# Optional: dynamically add service routers
from app.services.analytics.routes.analytics_routes import router as analytics_router
from app.services.application.routes.application_routes import router as application_router
from app.services.auth_service.routes.auth_routes import router as auth_service_router
from app.services.job.routes.job_routes import router as job_service_router
from app.services.dashboard.routes.dashboard_routes import router as dashboard_router
from app.services.resume.routes.resume_routes import router as resume_router
from app.services.application.routes.application_routes import router as application_router


def include_all_routers(app: FastAPI):
    app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
    app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])
    app.include_router(jobs.router, prefix="/api/jobs", tags=["jobs"])
    app.include_router(resume.router, prefix="/api/resume", tags=["resume"])

    # Service routers
    app.include_router(analytics_router, prefix="/api/analytics", tags=["analytics"])
    app.include_router(application_router, prefix="/api/applications", tags=["applications"])
    app.include_router(auth_service_router, prefix="/api/users", tags=["users"])
    app.include_router(job_service_router, prefix="/api/jobs-service", tags=["jobs_service"])
    app.include_router(dashboard_router, prefix="/api/dash", tags=["dashboard_service"])
    app.include_router(resume_router, prefix="/api/resume-service", tags=["resume_service"])
    app.include_router(application_router, prefix="/api/applications", tags=["applications"])