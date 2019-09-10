import { StandardComponentsModule } from './standard-components.module';

describe('StandardComponentsModule', () => {
    let standardComponentsModule: StandardComponentsModule;

    beforeEach(() => {
        standardComponentsModule = new StandardComponentsModule();
    });

    it('should create an instance', () => {
        expect(standardComponentsModule).toBeTruthy();
    });
});
