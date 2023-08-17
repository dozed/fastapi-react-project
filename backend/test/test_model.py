import unittest
from unittest import TestCase

from backend.app import store
from backend.app.model import Info


class ModelTests(TestCase):

    def test_info(self):
        info = Info('foo', 42)

        self.assertEqual('foo', info.foo)
        self.assertEqual(42, info.bar)

    def test_store(self):
        infos = store.get_infos()

        self.assertEqual(2, len(infos))


if __name__ == '__main__':
    unittest.main()
