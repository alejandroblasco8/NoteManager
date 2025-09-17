from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
import os

load_dotenv()



engine = create_engine(os.getenv("DB_URL"), connect_args={'check_same_thread': False})

session = sessionmaker(bind=engine)

base = declarative_base()