import { ReplayModule } from './replay.module';

describe('ReplayModule', () => {
    let replayModule: ReplayModule;

    beforeEach(() => {
        replayModule = new ReplayModule();
    });

    it('should create an instance', () => {
        expect(replayModule).toBeTruthy();
    });
});
