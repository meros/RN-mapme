// @flow

import { observable, computed, action } from 'mobx';

class AppFlow {
  @observable credentials: undefined | {} = undefined;

  @computed
  get isAuthenticated(): boolean {
    return this.credentials !== undefined;
  }
  @action
  setCredentials(credentials) {
    this.credentials = credentials;
  }
}

export default new AppFlow();
