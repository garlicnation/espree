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
                    "name": "foo",
                    "range": [
                        13,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 13
                        },
                        "end": {
                            "line": 1,
                            "column": 16
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
                            "name": "foo",
                            "range": [
                                31,
                                34
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 11
                                },
                                "end": {
                                    "line": 2,
                                    "column": 14
                                }
                            }
                        },
                        "cases": [
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "range": [
                                        66,
                                        67
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [],
                                "range": [
                                    61,
                                    68
                                ],
                                "loc": {
                                    "start": {
                                        "line": 4,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 15
                                    }
                                },
                                "leadingComments": [
                                    {
                                        "type": "Line",
                                        "value": " foo",
                                        "range": [
                                            46,
                                            52
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 14
                                            }
                                        }
                                    }
                                ],
                                "trailingComments": [
                                    {
                                        "type": "Line",
                                        "value": " falls through",
                                        "range": [
                                            81,
                                            97
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 28
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "range": [
                                        111,
                                        112
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "doIt",
                                                "range": [
                                                    126,
                                                    130
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 7,
                                                        "column": 12
                                                    },
                                                    "end": {
                                                        "line": 7,
                                                        "column": 16
                                                    }
                                                }
                                            },
                                            "arguments": [],
                                            "range": [
                                                126,
                                                132
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 7,
                                                    "column": 12
                                                },
                                                "end": {
                                                    "line": 7,
                                                    "column": 18
                                                }
                                            }
                                        },
                                        "range": [
                                            126,
                                            133
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 7,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 7,
                                                "column": 19
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    106,
                                    133
                                ],
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 19
                                    }
                                },
                                "leadingComments": [
                                    {
                                        "type": "Line",
                                        "value": " falls through",
                                        "range": [
                                            81,
                                            97
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 28
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "range": [
                            24,
                            139
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
                    18,
                    141
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 18
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
                141
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
        141
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
            "value": " foo",
            "range": [
                46,
                52
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 14
                }
            }
        },
        {
            "type": "Line",
            "value": " falls through",
            "range": [
                81,
                97
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 28
                }
            }
        }
    ]
};