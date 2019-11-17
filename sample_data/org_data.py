sample1 = [
    {
        'label': 'F.C Barcelona',
        'expanded': True,
        'children': [
            {
                'label': 'F.C Barcelona',
                'expanded': True,
                'children': [
                    {
                        'label': 'Chelsea FC',
                    },
                    {
                        'label': 'F.C. Barcelona',
                    },
                ],
            },
            {
                'label': 'Real Madrid',
                'expanded': True,
                'children': [
                    {
                        'label': 'Bayern Munich',
                    },
                    {
                        'label': 'Real Madrid',
                    },
                ],
            },
        ],
    },
]

sample2 = [
    {
        'label': 'CEO',
        'type': 'person',
        'className': 'p-person',
        'expanded': True,
        'data': {
            'name': 'Walter White',
            'avatar':
            './assets/man.png',
        },
        'children': [
            {
                'label': 'CFO',
                'type': 'person',
                'className': 'p-person',
                'expanded': True,
                'data': {
                    'name': 'Saul Goodman',
                    'avatar':
                    './assets/woman.png',
                },
                'children': [
                    {
                        'label': 'Tax',
                        'className': 'department-cfo',
                    },
                    {
                        'label': 'Legal',
                        'className': 'department-cfo',
                    },
                ],
            },
            {
                'label': 'COO',
                'type': 'person',
                'className': 'p-person',
                'expanded': True,
                'data': {
                    'name': 'Mike E.',
                    'avatar':
                    './assets/man.png',
                },
                'children': [
                    {
                        'label': 'Operations',
                        'className': 'department-coo',
                    },
                ],
            },
            {
                'label': 'CTO',
                'type': 'person',
                'className': 'p-person',
                'expanded': True,
                'data': {
                    'name': 'Jesse Pinkman',
                    'avatar':
                    './assets/woman.png',
                },
                'children': [
                    {
                        'label': 'Development',
                        'className': 'department-cto',
                        'expanded': True,
                        'children': [
                            {
                                'label': 'Analysis',
                                'className': 'department-cto',
                            },
                            {
                                'label': 'Front End',
                                'className': 'department-cto',
                            },
                            {
                                'label': 'Back End',
                                'className': 'department-cto',
                            },
                        ],
                    },
                    {
                        'label': 'QA',
                        'className': 'department-cto',
                    },
                    {
                        'label': 'R&D',
                        'className': 'department-cto',
                    },
                ],
            },
        ],
    },
]
