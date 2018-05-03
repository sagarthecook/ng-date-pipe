import { NgDatePipePage } from './app.po';

describe('ng-date-pipe App', () => {
  let page: NgDatePipePage;

  beforeEach(() => {
    page = new NgDatePipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
