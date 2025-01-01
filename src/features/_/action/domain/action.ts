export abstract class ActionI<TData, Body> {
  abstract i18nKeys: {
    success: string;
    error: string;
    pending: string;
  };

  abstract execute(body: Body): Promise<TData>;

  abstract onSuccess(data: TData, body: Body): void;

  abstract onError(error: Error): void;
}

export abstract class Action<TData, Body> implements ActionI<TData, Body> {
  constructor(
    public readonly i18nKeys: {
      success: string;
      pending: string;
      error: string;
    },
  ) {}

  abstract execute(body: Body): Promise<TData>;

  abstract onSuccess(data: TData): void;

  abstract onError(error: Error): void;
}
