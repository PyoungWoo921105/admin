import { observable } from 'mobx';

export interface CommonDataType {
  /* Loading */
  LoadingFlag: boolean;
  setLoadingFlag: (e: boolean) => void;
}

const CommonData = observable<CommonDataType>({
  /* Loading */
  LoadingFlag: false,
  setLoadingFlag(e: boolean) {
    this.LoadingFlag = e;
  },
});

export { CommonData };
