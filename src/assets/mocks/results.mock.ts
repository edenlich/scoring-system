import { CreateResult } from "src/app/services/results.service";

export const createdResultsMock: CreateResult[] = [
    {
        testId: '1',
        companyName: 'Google',
        answers: [2, 4],
        result: 2.4
    },
    {
        testId: '2',
        companyName: 'Entrio',
        answers: [1, 3],
        result: 1.4
    },    {
        testId: '3',
        companyName: 'Microsoft',
        answers: [3, 4],
        result: 3.2
    },
]