from fastapi import APIRouter

router = APIRouter()

# Example route
@router.get("/resume/test")
async def test_resume():
    return {"message": "Resume service is active"}
