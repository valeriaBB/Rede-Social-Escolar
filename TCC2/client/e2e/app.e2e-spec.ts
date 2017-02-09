import { PontoclientPage } from './app.po';

describe('pontoclient App', function() {
  let page: PontoclientPage;

  beforeEach(() => {
    page = new PontoclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
