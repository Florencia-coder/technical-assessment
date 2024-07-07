from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from pydantic import ValidationError
from src.Validations import ValidationRules as VR
from src.scoreCalculator import calculate
from src.utils.genericFunc import parse_error

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/score", methods=["POST"])
def check_point():
    try:
        json_request = request.get_json()
        validator = VR.model_teams(**json_request)
        points_return = calculate(validator.dict())
        return jsonify(points_return), 200
    except ValidationError as exc:
        dic_error = parse_error(exc)
        return make_response(jsonify({"status": "error", "details": dic_error}), 400)
    except Exception as e:
        return make_response(jsonify({"status": "error", "details": str(e)}), 400)

@app.route("/api/")
def index():
    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=5000)
