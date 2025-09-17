import models, schemas, auth
from database import *
from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session

models.base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db(): #Ensure that the connection to the db is closed when the session ends
    db = session()
    try:
        yield db
    finally:
        db.close()

@app.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):

    if user.password != user.password2:
        raise ValueError("Passwords don't match")
    password_hash = auth.get_password_hash(user.password)
    db_user = models.User(name=user.username, email=user.email, password=password_hash)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/token")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    user_dict = db.query(models.User).filter(models.User.email == user.email).first()
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    if not auth.verify_password_hash(user.password, user_dict.password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    token = auth.create_access_token(data = {"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}