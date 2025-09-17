from pydantic import BaseModel, EmailStr

class Note(BaseModel):
    id: int
    title: str
    content: str
    owner_id: int

class NoteCreate(BaseModel):
    title: str
    content: str

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    password2: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str
