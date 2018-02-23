// @flow

import { observable, computed } from 'mobx';

class AppFlow {
  @observable userId: undefined | string = undefined;

  @computed
  get isAuthenticated(): boolean {
    return this.userId !== undefined;
  }
}

export default new AppFlow();
