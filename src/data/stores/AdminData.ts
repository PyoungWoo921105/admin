/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

export interface AdminDataType {
  /* Log In */
  LogInPrivateFlag: boolean;
  setLogInPrivateFlag: (e: boolean) => void;
  LogInUserID: string;
  setLogInUserID: (e: string) => void;
  LogInUserPassword: string;
  setLogInUserPassword: (e: string) => void;
  LogInValidateFlag: boolean;
  setLogInValidateFlag: (e: boolean) => void;
  LogInMessage: string;
  setLogInMessage: (e: string) => void;
  /* Filter */
  FilterSwitchFlag: boolean;
  setFilterSwitchFlag: (e: boolean) => void;
}

const AdminData = observable<AdminDataType>({
  /* Log In */
  LogInPrivateFlag: true,
  setLogInPrivateFlag(e: boolean) {
    this.LogInPrivateFlag = e;
  },
  LogInUserID: '',
  setLogInUserID(e: string) {
    this.LogInUserID = e;
  },
  LogInUserPassword: '',
  setLogInUserPassword(e: string) {
    this.LogInUserPassword = e;
  },
  LogInValidateFlag: false,
  setLogInValidateFlag(e: boolean) {
    this.LogInValidateFlag = e;
  },
  LogInMessage: '',
  setLogInMessage(e: string) {
    this.LogInMessage = e;
  },
  /* Filter */
  FilterSwitchFlag: true,
  setFilterSwitchFlag(e: boolean) {
    this.FilterSwitchFlag = e;
  },
});

export { AdminData };
