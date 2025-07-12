from fastapi import UploadFile
from typing import List, Dict
import uuid

# Sample in-memory resume data
resume_data = []

async def upload_resume(file: UploadFile) -> Dict:
    """Upload a resume file"""
    # In a real implementation, you'd save the file to storage
    # For now, just simulate a successful upload
    
    resume_id = str(uuid.uuid4())
    resume_entry = {
        "id": resume_id,
        "filename": file.filename,
        "content_type": file.content_type,
        "size": file.size if hasattr(file, 'size') else 0,
        "status": "uploaded"
    }
    
    resume_data.append(resume_entry)
    
    return {
        "message": "Resume uploaded successfully",
        "resume_id": resume_id,
        "filename": file.filename
    }

async def list_resumes() -> List[Dict]:
    """List all uploaded resumes"""
    return resume_data