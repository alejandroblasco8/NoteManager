import models
from database import *
models.base.metadata.create_all(bind=engine)