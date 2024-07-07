def parse_error(exc):
    dic_error = []
    for error in exc.errors():
        ret = f"{error['msg']}"
        ret += f", Input: {error['input']}"
        ret += f", Location: {error['loc']}"
        dic_error.append(ret)
    return dic_error