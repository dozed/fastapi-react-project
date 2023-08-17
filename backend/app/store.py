from app.model import Info


def get_infos() -> list[Info]:
    infos = [
        Info('foo', 42),
        Info('fnord', 43),
    ]

    return infos
