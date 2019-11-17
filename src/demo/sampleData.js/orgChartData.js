export default {
    data: [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC',
                        },
                        {
                            label: 'F.C. Barcelona',
                        },
                    ],
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich',
                        },
                        {
                            label: 'Real Madrid',
                        },
                    ],
                },
            ],
        },
    ],
    data1: [
        {
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: {
                name: 'Walter White',
                avatar:
                    'https://res.cloudinary.com/danuluma/image/asset/v1532478604/back-108ba11cfbaffa537052c716e40005b7.png',
            },
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {
                        name: 'Saul Goodman',
                        avatar:
                            'https://res.cloudinary.com/danuluma/image/asset/v1532478604/back-108ba11cfbaffa537052c716e40005b7.png',
                    },
                    children: [
                        {
                            label: 'Tax',
                            className: 'department-cfo',
                        },
                        {
                            label: 'Legal',
                            className: 'department-cfo',
                        },
                    ],
                },
                {
                    label: 'COO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {
                        name: 'Mike E.',
                        avatar:
                            'https://res.cloudinary.com/danuluma/image/asset/v1532478604/back-108ba11cfbaffa537052c716e40005b7.png',
                    },
                    children: [
                        {
                            label: 'Operations',
                            className: 'department-coo',
                        },
                    ],
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {
                        name: 'Jesse Pinkman',
                        avatar:
                            'https://res.cloudinary.com/danuluma/image/asset/v1532478604/back-108ba11cfbaffa537052c716e40005b7.png',
                    },
                    children: [
                        {
                            label: 'Development',
                            className: 'department-cto',
                            expanded: true,
                            children: [
                                {
                                    label: 'Analysis',
                                    className: 'department-cto',
                                },
                                {
                                    label: 'Front End',
                                    className: 'department-cto',
                                },
                                {
                                    label: 'Back End',
                                    className: 'department-cto',
                                },
                            ],
                        },
                        {
                            label: 'QA',
                            className: 'department-cto',
                        },
                        {
                            label: 'R&D',
                            className: 'department-cto',
                        },
                    ],
                },
            ],
        },
    ],
};
