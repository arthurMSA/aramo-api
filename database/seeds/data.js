module.exports = [
    {
        'model': 'Plan',
        'documents': [
            {
                'name': 'FaleMais 30',
                'time': 30,
                'unitTime': 'minutes',
                'rateException': 10
            },
            {
                'name': 'FaleMais 60',
                'time': 60,
                'unitTime': 'minutes',
                'rateException': 10
            },
            {
                'name': 'FaleMais 120',
                'time': 120,
                'unitTime': 'minutes',
                'rateException': 10
            }
        ],
    },
    {
        'model': 'Fee',
        'documents': [
            {
                'price': 1.20,
                'origin': '011',
                'destination': '016'
           },
           {
                'price': 2.90,
                'origin': '016',
                'destination': '011'
           },
           {
                'price': 1.70,
                'origin': '011',
                'destination': '017'
           },
           {
                'price': 2.70,
                'origin': '017',
                'destination': '011'
           },
           {
                'price': 0.90,
                'origin': '018',
                'destination': '011'
           }
        ]
    },
    {
        'model': 'Region',
        'documents': [
            {
                'name': 'São Paulo',
                'state': 'SP',
                'ddd': '011'
            },
            {
                'name': 'Jundiaí',
                'state': 'SP',
                'ddd': '011'
            },
            {
                'name': 'Bragança Paulista',
                'state': 'SP',
                'ddd': '011'
            },
            {
                'name': 'Ribeirão Preto',
                'state': 'SP',
                'ddd': '016'
            },
            {
                'name': 'Franca',
                'state': 'SP',
                'ddd': '016'
            },
            {
                'name': 'São Carlos',
                'state': 'SP',
                'ddd': '016'
            },
            {
                'name': 'Araraquara',
                'state': 'SP',
                'ddd': '016'
            },
            {
                'name': 'São José do Rio Preto',
                'state': 'SP',
                'ddd': '017'
            },
            {
                'name': 'Catanduva',
                'state': 'SP',
                'ddd': '017'
            },
            {
                'name': 'Barretos',
                'state': 'SP',
                'ddd': '017'
            },
            {
                'name': 'Votuporanga',
                'state': 'SP',
                'ddd': '017'
            },
            {
                'name': 'Presidente Prudente',
                'state': 'SP',
                'ddd': '018'
            },
            {
                'name': 'Araçatuba',
                'state': 'SP',
                'ddd': '018'
            },
            {
                'name': 'Birigui',
                'state': 'SP',
                'ddd': '018'
            },
            {
                'name': 'Assis',
                'state': 'SP',
                'ddd': '018'
            },
        ]
    }
]