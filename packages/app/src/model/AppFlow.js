// @flow

import { observable, computed, action } from 'mobx';

class AppFlow {
  @observable credential: undefined | {} = undefined;

  @computed
  get isAuthenticated(): boolean {
    return this.credential !== undefined;
  }
  @action
  setCredential(credential) {
    this.credential = credential;
  }
}

export default new AppFlow();
