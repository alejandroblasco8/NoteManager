from datetime import datetime, timedelta
from dotenv import load_dotenv
import os
from jose import jwt, JWTError
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer


load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
TOKEN_EXPIRE_TIME = int(os.getenv("TOKEN_EXPIRE_TIME"))


crypt_context = CryptContext(schemes=["argon2"], deprecated="auto") #argon2 as hashing algorithm and configurated to rehash the saved passwords if the algorithm is changed
oauth2 = OAuth2PasswordBearer(tokenUrl="token")

def get_password_hash(password):
    return crypt_context.hash(password)

def verify_password_hash(password, password_hash):
    return crypt_context.verify(password, password_hash)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now() + timedelta(minutes=TOKEN_EXPIRE_TIME)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
