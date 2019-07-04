// tslint:disable-next-line:max-line-length
import { ClassProvider, DependencyContainer, FactoryProvider, InjectionToken, TokenProvider, ValueProvider } from 'tsyringe';

export abstract class Model {
  public abstract getName(): string;
  public abstract getNamespace(): string;
}

interface IProvide<T> {
  provide: InjectionToken<T>;
}

type Provider<T>
  = IProvide<T> & ValueProvider<T>
  | IProvide<T> & FactoryProvider<T>
  | IProvide<T> & TokenProvider<T> & { options?: RegistrationOptions; }
  | IProvide<T> & ClassProvider<T> & { options?: RegistrationOptions; };

export interface IPlatform {
  providers: Array<Provider<any>>;
}

export interface IApplication {
  readonly container: DependencyContainer;

  bootstrap(): Promise<void>;
}
