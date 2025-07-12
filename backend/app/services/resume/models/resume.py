from beanie import Document
from pydantic import Field
from typing import Optional
from datetime import datetime
from enum import Enum

class ResumeStatus(str, Enum):
    PROCESSING = "processing"
    READY = "ready"
    ERROR = "error"

class Resume(Document):
    user_id: str
    filename: str
    original_filename: str
    content_type: str
    file_size: int
    file_content: str  # Base64 encoded content
    status: ResumeStatus = ResumeStatus.PROCESSING
    upload_path: Optional[str] = None
    parsed_data: Optional[dict] = None  # Extracted resume data
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "resumes"

    model_config = {
        "json_schema_extra": {
            "example": {
                "user_id": "user123",
                "filename": "john_doe_resume.pdf",
                "original_filename": "resume.pdf",
                "content_type": "application/pdf",
                "file_size": 1024000,
                "status": "ready"
            }
        }
    }
