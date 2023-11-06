import type { MachineSrc, StateMachine as S } from "@zag-js/core";

export type HookOptions<
  TContext extends Record<string, any>,
  TState extends S.StateSchema,
  TEvent extends S.EventObject = S.AnyEventObject,
> = Omit<S.HookOptions<TContext, TState, TEvent>, "context"> & {
  // context?: Store<Partial<TContext>> | Accessor<Partial<TContext>>;
  context?: any;
};

export interface UseServiceInput<
  TContext extends Record<string, any>,
  TState extends S.StateSchema,
  TEvent extends S.EventObject = S.AnyEventObject,
> {
  machine: MachineSrc<TContext, TState, TEvent>;
  options?: HookOptions<TContext, TState, TEvent>;
}
