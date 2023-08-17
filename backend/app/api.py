import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pyinstrument import Profiler
from starlette.requests import Request
from starlette.responses import HTMLResponse

import app.store as store

logging.basicConfig(level=logging.INFO, format='%(asctime)s: %(levelname)s - %(message)s')

PROFILING = True
SECRET_KEY = '09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7'
ALGORITHM = 'HS256'

app = FastAPI()

origins = [
    'http://localhost:3000',
    'localhost:3000',
    'http://localhost',
    'localhost',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

if PROFILING:
    @app.middleware('http')
    async def profile_request(request: Request, call_next):
        profiling = request.query_params.get('profile', False)
        if profiling:
            profiler = Profiler(interval=0.001, async_mode='enabled')
            profiler.start()
            await call_next(request)
            profiler.stop()
            return HTMLResponse(profiler.output_html())
        else:
            return await call_next(request)


@app.get('/api/infos')
async def get_work_package_overview() -> dict:
    infos = store.get_infos()

    return {
        'infos': infos
    }
