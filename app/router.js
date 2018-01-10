import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

// eslint-disable-next-line array-callback-return
Router.map(function routerMap() {
  this.route('start');

  this.route('setup', function setupRoute() {
    this.route('download');
    this.route('start');
    this.route('import');
    this.route('backup');
    this.route('password', { path: '/:wallet_id' });
  });

  this.route('wallets', { path: '/:wallet_id' }, function walletsRoute() {
    this.route('overview');
    this.route('send');
    this.route('accounts', { path: '/:account_id' }, function accountsRoute() {
      this.route('send');
      this.route('history');
    });
    this.route('logout');
  });
  this.route('login');
  this.route('logout');
  this.route('error');
});

export default Router;
