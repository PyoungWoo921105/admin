/*
 * Copyright (c) 2022 Medir Inc.
 */

export const ConvertContactNumber = (props: string) =>
  props
    .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3')
    .replace('--', '-');

export default ConvertContactNumber;
