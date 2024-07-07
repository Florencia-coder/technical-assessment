from pydantic import BaseModel
from typing import Optional


class model_team(BaseModel):
    team: str
    goals: int
    yellow_cards: int
    shots: int


class model_teams(BaseModel):
    teams: Optional[list[model_team]] = None
