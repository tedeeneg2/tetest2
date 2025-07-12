from beanie import Document
from pydantic import Field, EmailStr
from typing import Optional, List
from datetime import datetime

class Profile(Document):
    user_id: str  # Reference to User document
    bio: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None
    linkedin: Optional[str] = None
    github: Optional[str] = None
    
    # Professional Information
    current_position: Optional[str] = None
    experience_years: Optional[int] = None
    skills: Optional[List[str]] = []
    education: Optional[List[dict]] = []  # List of education entries
    work_experience: Optional[List[dict]] = []  # List of work experiences
    
    # Preferences (for job seekers)
    desired_salary_min: Optional[int] = None
    desired_salary_max: Optional[int] = None
    preferred_locations: Optional[List[str]] = []
    remote_work: Optional[bool] = True
    availability: Optional[str] = None  # "immediate", "2weeks", "1month", etc.
    
    # Profile visibility
    public_profile: bool = True
    searchable: bool = True
    
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "profiles"

    model_config = {
        "json_schema_extra": {
            "example": {
                "user_id": "user123",
                "bio": "Experienced software developer with 5+ years in web development",
                "current_position": "Senior Frontend Developer",
                "experience_years": 5,
                "skills": ["React", "JavaScript", "Python", "SQL"],
                "desired_salary_min": 80000,
                "desired_salary_max": 120000,
                "remote_work": True
            }
        }
    }
