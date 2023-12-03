import { Test } from "src/app/services/tests.service";

export const testsMock: Test[] = [
    {
        id: '1',
        name: 'How big is the company?',
        description: `test to check the company's scale`,
        criterias: [
            {
                question: 'company size',
                weight: 0.8,
                scores: ['1-50 employees', '51-200 employees', '201-500 employees', '501+ employees']
            },
            {
                question: 'company funding',
                weight: 0.2,
                scores: ['up to 1M dollars', '1M-10M dollars', '10M - 100M dollars', '100M and up dollars']
            }
        ],
        
    },
    {
        id: '2',
        name: 'Engineering progress test',
        description: 'Test to check to rank the R&D department',
        criterias: [
            {
                question: 'engineers in company amount',
                weight: 0.8,
                scores: ['1-20 engineers', '21-50 engineers', '51-100 engineers', '101+ engineers']
            },
            {
                question: 'version releases rate',
                weight: 0.2,
                scores: ['once a week', 'once every two weeks', 'once a month', 'once every several months']
            }
        ],
        
    },
    {
        id: '3',
        name: 'Recruiting rate test',
        description: 'Test to check to rank the HR department',
        criterias: [
            {
                question: 'recruiters in company amount',
                weight: 0.8,
                scores: ['1-2 recruiters', '3-5 recruiters', '6-10 recruiters', '11+ recruiters']
            },
            {
                question: 'recruitment amount per month',
                weight: 0.2,
                scores: ['0-1 new employees', '2-5 new employees', '6-10 new employees', '11+ new employees']
            }
        ],
        
    }
]