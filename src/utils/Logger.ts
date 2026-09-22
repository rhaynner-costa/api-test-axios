import { AxiosResponse } from 'axios';

export class Logger {
    static printResponse(response: AxiosResponse, titulo = 'Response') {
        console.log(`\n----- ${titulo} -----`);
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(response.data, null, 2));
        console.log('----------------------\n');
    }
}
