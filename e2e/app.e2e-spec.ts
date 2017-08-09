import { AntlerSitePage } from './app.po';

describe('antler-site App', () => {
  let page: AntlerSitePage;

  beforeEach(() => {
    page = new AntlerSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
