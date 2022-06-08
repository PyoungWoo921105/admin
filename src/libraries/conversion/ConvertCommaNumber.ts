/*
 * Copyright (c) 2022 Medir Inc.
 */

export const ConvertCommaNumber = (props: string) =>
  props.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

export default ConvertCommaNumber;
