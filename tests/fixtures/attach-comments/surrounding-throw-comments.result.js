module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "a",
                "range": [
                    9,
                    10
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 10
                    }
                }
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ThrowStatement",
                        "argument": {
                            "type": "Literal",
                            "value": 55,
                            "raw": "55",
                            "range": [
                                42,
                                44
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 10
                                },
                                "end": {
                                    "line": 3,
                                    "column": 12
                                }
                            }
                        },
                        "range": [
                            36,
                            45
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 13
                            }
                        },
                        "leadingComments": [
                            {
                                "type": "Block",
                                "value": " before ",
                                "range": [
                                    19,
                                    31
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 16
                                    }
                                }
                            }
                        ],
                        "trailingComments": [
                            {
                                "type": "Block",
                                "value": " after ",
                                "range": [
                                    50,
                                    61
                                ],
                                "loc": {
                                    "start": {
                                        "line": 4,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 15
                                    }
                                }
                            }
                        ]
                    }
                ],
                "range": [
                    13,
                    63
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 13
                    },
                    "end": {
                        "line": 5,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                63
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        63
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 5,
            "column": 1
        }
    },
    "comments": [
        {
            "type": "Block",
            "value": " before ",
            "range": [
                19,
                31
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            }
        },
        {
            "type": "Block",
            "value": " after ",
            "range": [
                50,
                61
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 15
                }
            }
        }
    ]
};