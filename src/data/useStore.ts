import { CommonData } from 'data/stores/CommonData';
import { AdminData } from 'data/stores/AdminData';

export const useStore = () => {
  return { CommonData, AdminData };
};

export default useStore;
