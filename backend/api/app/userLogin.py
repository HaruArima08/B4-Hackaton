from pydantic import BaseModel

class LoginRequest(BaseModel):
    username: str
    password: str

def authenticate_user(req):
    username = req.username
    password = req.password

    if username == "admin" and password == "secret":
        return {"message": "Login successful"}
    else:
        return {"message": "Invalid credentials"}