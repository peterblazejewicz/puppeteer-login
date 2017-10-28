export interface IPageSelectors {
  EmailInput: string;
  PasswordInput: string;
  SubmitButton: string;
  DashboardHeader: string;
  DashboardOverview: string;
}

const selectors: IPageSelectors = {
  EmailInput: '#js-email-field',
  PasswordInput: '#js-password-field',
  SubmitButton: '.selenium-login-submit',
  DashboardHeader: '.app-header--heading',
  DashboardOverview: '#dashboard-overview',
};
export default selectors;
