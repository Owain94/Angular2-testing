import { Injectable } from 'angular2/core';
import { MockData, MockData2 } from './mock-data';
import { MockInterface } from './mock-interface';

@Injectable()
export class TestService {
    getMockData() {
        return Promise.resolve(MockData);
    }

    getMockSlowly() {
        return new Promise<MockInterface[]>(resolve =>
            setTimeout(() => resolve(MockData2), 2000)
        );
    }
}