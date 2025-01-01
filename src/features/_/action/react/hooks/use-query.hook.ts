import { useQuery as tsuseQuery } from '@tanstack/react-query';

import { GetterI } from '#action/domain';
import { Token } from '#di/domain';
import { useService } from '#di/react';

export function useQuery<
  TCacheTags extends string[] | Readonly<string[]>,
  TData,
  TArgs extends unknown[],
>(Getter: Token<GetterI<TCacheTags, TData, TArgs>>, ...args: TArgs) {
  const getter = useService(Getter);
  return tsuseQuery({
    queryKey: getter.cacheTags(...args),
    queryFn: () => getter.get(...args),
  });
}
