module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "bar",
                "range": [
                    9,
                    12
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 12
                    }
                }
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a",
                    "range": [
                        13,
                        14
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 13
                        },
                        "end": {
                            "line": 1,
                            "column": 14
                        }
                    }
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Identifier",
                            "name": "a",
                            "range": [
                                30,
                                31
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 12
                                },
                                "end": {
                                    "line": 2,
                                    "column": 13
                                }
                            }
                        },
                        "cases": [
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "range": [
                                        48,
                                        49
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "range": [
                                            63,
                                            69
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 18
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    43,
                                    69
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 18
                                    }
                                }
                            },
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "range": [
                                        83,
                                        84
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "range": [
                                            98,
                                            104
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 6,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 6,
                                                "column": 18
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    78,
                                    104
                                ],
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 18
                                    }
                                },
                                "trailingComments": [
                                    {
                                        "type": "Line",
                                        "value": "no default",
                                        "range": [
                                            113,
                                            125
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 7,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 7,
                                                "column": 20
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "range": [
                            22,
                            131
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 8,
                                "column": 5
                            }
                        }
                    }
                ],
                "range": [
                    16,
                    133
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 16
                    },
                    "end": {
                        "line": 9,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                133
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 9,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        133
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 9,
            "column": 1
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": "no default",
            "range": [
                113,
                125
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 20
                }
            }
        }
    ]
};