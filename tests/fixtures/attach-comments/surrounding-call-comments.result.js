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
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "foo",
                                "range": [
                                    36,
                                    39
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 7
                                    }
                                }
                            },
                            "arguments": [],
                            "range": [
                                36,
                                41
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 4
                                },
                                "end": {
                                    "line": 3,
                                    "column": 9
                                }
                            }
                        },
                        "range": [
                            36,
                            42
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 10
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
                                    47,
                                    58
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
                    60
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
                60
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
        60
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
                47,
                58
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