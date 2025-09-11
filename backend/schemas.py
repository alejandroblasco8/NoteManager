from pydantic import BaseModel

class Note(BaseModel):
    id: int
    title: str
    content: str
    owner_id: int

class NoteCreate(BaseModel):
    title: str
    content: str

class User(BaseModel):
    id: int
    username: str
    email: str

class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    password2: str
