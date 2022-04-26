import { observable } from 'mobx';

export interface PopUpDataType {
  Category: string;
  Name: string;
  Title: string;
  Contents: string[];
  Actions: string[];
}

export interface CommonDataType {
  /* Loading */
  LoadingFlag: boolean;
  setLoadingFlag: (e: boolean) => void;
  /* Pop Up */
  PopUpFlag: boolean;
  setPopUpFlag: (e: boolean) => void;

  PopUpData: PopUpDataType | null;
  setPopUpData: (e: PopUpDataType) => void;
}

const CommonData = observable<CommonDataType>({
  /* Loading */
  LoadingFlag: false,
  setLoadingFlag(e: boolean) {
    this.LoadingFlag = e;
  },
  /* Pop Up */
  PopUpFlag: false,
  setPopUpFlag(e: boolean) {
    this.PopUpFlag = e;
  },

  PopUpData: null,
  setPopUpData(e: PopUpDataType) {
    this.PopUpData = e;
  },
});

export { CommonData };
