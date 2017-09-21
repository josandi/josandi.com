import { JosandiAppPage } from './app.po';

describe('josandi-app App', () => {
  let page: JosandiAppPage;

  beforeEach(() => {
    page = new JosandiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
