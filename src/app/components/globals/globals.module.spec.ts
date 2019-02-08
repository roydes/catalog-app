import { GlobalsModule } from './globals.module';

describe('GlobalsModule', () => {
  let globalsModule: GlobalsModule;

  beforeEach(() => {
    globalsModule = new GlobalsModule();
  });

  it('should create an instance', () => {
    expect(globalsModule).toBeTruthy();
  });
});
