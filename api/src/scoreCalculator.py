def calculate(teams):
    dic = []
    for index, team in enumerate(teams["teams"], start=1):
        json_dic = {
            "id": index,
            "team": team["team"],
            "points": total_score(team["goals"], team["yellow_cards"], team["shots"])
        }
        dic.append(json_dic)
    return dic

def total_score(goals, yellow_cards, shots):
    total = goals * 30
    total += shots * 5
    total -= yellow_cards * 5
    return total
