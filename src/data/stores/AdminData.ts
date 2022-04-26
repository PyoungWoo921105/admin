import { observable } from 'mobx';

export interface AdminDataType {
  /* a */
  A: boolean;
  setA: (e: boolean) => void;
}

const AdminData = observable<AdminDataType>({
  /* a */
  A: false,
  setA(e: boolean) {
    this.A = e;
  },
});

export { AdminData };
