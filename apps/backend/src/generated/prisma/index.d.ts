
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PersonalInfo
 * 
 */
export type PersonalInfo = $Result.DefaultSelection<Prisma.$PersonalInfoPayload>
/**
 * Model PersonalInfoStates
 * 
 */
export type PersonalInfoStates = $Result.DefaultSelection<Prisma.$PersonalInfoStatesPayload>
/**
 * Model Credentials
 * 
 */
export type Credentials = $Result.DefaultSelection<Prisma.$CredentialsPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model DepositPaymentMethodHandToHand
 * 
 */
export type DepositPaymentMethodHandToHand = $Result.DefaultSelection<Prisma.$DepositPaymentMethodHandToHandPayload>
/**
 * Model DepositPaymentMethodPhone
 * 
 */
export type DepositPaymentMethodPhone = $Result.DefaultSelection<Prisma.$DepositPaymentMethodPhonePayload>
/**
 * Model DepositPaymentMethodBank
 * 
 */
export type DepositPaymentMethodBank = $Result.DefaultSelection<Prisma.$DepositPaymentMethodBankPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Active: 'Active',
  Suspended: 'Suspended',
  Deleted: 'Deleted',
  Rejected: 'Rejected',
  Pending: 'Pending'
};

export type Status = (typeof Status)[keyof typeof Status]


export const PaymentStatus: {
  Completed: 'Completed',
  Canceled: 'Canceled',
  Pending: 'Pending'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const Role: {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PersonalInfos
 * const personalInfos = await prisma.personalInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PersonalInfos
   * const personalInfos = await prisma.personalInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personalInfo`: Exposes CRUD operations for the **PersonalInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalInfos
    * const personalInfos = await prisma.personalInfo.findMany()
    * ```
    */
  get personalInfo(): Prisma.PersonalInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalInfoStates`: Exposes CRUD operations for the **PersonalInfoStates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalInfoStates
    * const personalInfoStates = await prisma.personalInfoStates.findMany()
    * ```
    */
  get personalInfoStates(): Prisma.PersonalInfoStatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentials`: Exposes CRUD operations for the **Credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credentials.findMany()
    * ```
    */
  get credentials(): Prisma.CredentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositPaymentMethodHandToHand`: Exposes CRUD operations for the **DepositPaymentMethodHandToHand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositPaymentMethodHandToHands
    * const depositPaymentMethodHandToHands = await prisma.depositPaymentMethodHandToHand.findMany()
    * ```
    */
  get depositPaymentMethodHandToHand(): Prisma.DepositPaymentMethodHandToHandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositPaymentMethodPhone`: Exposes CRUD operations for the **DepositPaymentMethodPhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositPaymentMethodPhones
    * const depositPaymentMethodPhones = await prisma.depositPaymentMethodPhone.findMany()
    * ```
    */
  get depositPaymentMethodPhone(): Prisma.DepositPaymentMethodPhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depositPaymentMethodBank`: Exposes CRUD operations for the **DepositPaymentMethodBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepositPaymentMethodBanks
    * const depositPaymentMethodBanks = await prisma.depositPaymentMethodBank.findMany()
    * ```
    */
  get depositPaymentMethodBank(): Prisma.DepositPaymentMethodBankDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PersonalInfo: 'PersonalInfo',
    PersonalInfoStates: 'PersonalInfoStates',
    Credentials: 'Credentials',
    Deposit: 'Deposit',
    DepositPaymentMethodHandToHand: 'DepositPaymentMethodHandToHand',
    DepositPaymentMethodPhone: 'DepositPaymentMethodPhone',
    DepositPaymentMethodBank: 'DepositPaymentMethodBank'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personalInfo" | "personalInfoStates" | "credentials" | "deposit" | "depositPaymentMethodHandToHand" | "depositPaymentMethodPhone" | "depositPaymentMethodBank"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PersonalInfo: {
        payload: Prisma.$PersonalInfoPayload<ExtArgs>
        fields: Prisma.PersonalInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          findFirst: {
            args: Prisma.PersonalInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          findMany: {
            args: Prisma.PersonalInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>[]
          }
          create: {
            args: Prisma.PersonalInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          createMany: {
            args: Prisma.PersonalInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>[]
          }
          delete: {
            args: Prisma.PersonalInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          update: {
            args: Prisma.PersonalInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          deleteMany: {
            args: Prisma.PersonalInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>[]
          }
          upsert: {
            args: Prisma.PersonalInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoPayload>
          }
          aggregate: {
            args: Prisma.PersonalInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalInfo>
          }
          groupBy: {
            args: Prisma.PersonalInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalInfoCountAggregateOutputType> | number
          }
        }
      }
      PersonalInfoStates: {
        payload: Prisma.$PersonalInfoStatesPayload<ExtArgs>
        fields: Prisma.PersonalInfoStatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalInfoStatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalInfoStatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          findFirst: {
            args: Prisma.PersonalInfoStatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalInfoStatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          findMany: {
            args: Prisma.PersonalInfoStatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>[]
          }
          create: {
            args: Prisma.PersonalInfoStatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          createMany: {
            args: Prisma.PersonalInfoStatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalInfoStatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>[]
          }
          delete: {
            args: Prisma.PersonalInfoStatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          update: {
            args: Prisma.PersonalInfoStatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          deleteMany: {
            args: Prisma.PersonalInfoStatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalInfoStatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalInfoStatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>[]
          }
          upsert: {
            args: Prisma.PersonalInfoStatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInfoStatesPayload>
          }
          aggregate: {
            args: Prisma.PersonalInfoStatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalInfoStates>
          }
          groupBy: {
            args: Prisma.PersonalInfoStatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalInfoStatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalInfoStatesCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalInfoStatesCountAggregateOutputType> | number
          }
        }
      }
      Credentials: {
        payload: Prisma.$CredentialsPayload<ExtArgs>
        fields: Prisma.CredentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findFirst: {
            args: Prisma.CredentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          findMany: {
            args: Prisma.CredentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          create: {
            args: Prisma.CredentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          createMany: {
            args: Prisma.CredentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          delete: {
            args: Prisma.CredentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          update: {
            args: Prisma.CredentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          deleteMany: {
            args: Prisma.CredentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>[]
          }
          upsert: {
            args: Prisma.CredentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialsPayload>
          }
          aggregate: {
            args: Prisma.CredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentials>
          }
          groupBy: {
            args: Prisma.CredentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialsCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialsCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      DepositPaymentMethodHandToHand: {
        payload: Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>
        fields: Prisma.DepositPaymentMethodHandToHandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositPaymentMethodHandToHandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositPaymentMethodHandToHandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          findFirst: {
            args: Prisma.DepositPaymentMethodHandToHandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositPaymentMethodHandToHandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          findMany: {
            args: Prisma.DepositPaymentMethodHandToHandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>[]
          }
          create: {
            args: Prisma.DepositPaymentMethodHandToHandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          createMany: {
            args: Prisma.DepositPaymentMethodHandToHandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositPaymentMethodHandToHandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>[]
          }
          delete: {
            args: Prisma.DepositPaymentMethodHandToHandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          update: {
            args: Prisma.DepositPaymentMethodHandToHandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          deleteMany: {
            args: Prisma.DepositPaymentMethodHandToHandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositPaymentMethodHandToHandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositPaymentMethodHandToHandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>[]
          }
          upsert: {
            args: Prisma.DepositPaymentMethodHandToHandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodHandToHandPayload>
          }
          aggregate: {
            args: Prisma.DepositPaymentMethodHandToHandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositPaymentMethodHandToHand>
          }
          groupBy: {
            args: Prisma.DepositPaymentMethodHandToHandGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodHandToHandGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositPaymentMethodHandToHandCountArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodHandToHandCountAggregateOutputType> | number
          }
        }
      }
      DepositPaymentMethodPhone: {
        payload: Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>
        fields: Prisma.DepositPaymentMethodPhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositPaymentMethodPhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositPaymentMethodPhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          findFirst: {
            args: Prisma.DepositPaymentMethodPhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositPaymentMethodPhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          findMany: {
            args: Prisma.DepositPaymentMethodPhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>[]
          }
          create: {
            args: Prisma.DepositPaymentMethodPhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          createMany: {
            args: Prisma.DepositPaymentMethodPhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositPaymentMethodPhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>[]
          }
          delete: {
            args: Prisma.DepositPaymentMethodPhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          update: {
            args: Prisma.DepositPaymentMethodPhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          deleteMany: {
            args: Prisma.DepositPaymentMethodPhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositPaymentMethodPhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositPaymentMethodPhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>[]
          }
          upsert: {
            args: Prisma.DepositPaymentMethodPhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodPhonePayload>
          }
          aggregate: {
            args: Prisma.DepositPaymentMethodPhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositPaymentMethodPhone>
          }
          groupBy: {
            args: Prisma.DepositPaymentMethodPhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodPhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositPaymentMethodPhoneCountArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodPhoneCountAggregateOutputType> | number
          }
        }
      }
      DepositPaymentMethodBank: {
        payload: Prisma.$DepositPaymentMethodBankPayload<ExtArgs>
        fields: Prisma.DepositPaymentMethodBankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositPaymentMethodBankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositPaymentMethodBankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          findFirst: {
            args: Prisma.DepositPaymentMethodBankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositPaymentMethodBankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          findMany: {
            args: Prisma.DepositPaymentMethodBankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>[]
          }
          create: {
            args: Prisma.DepositPaymentMethodBankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          createMany: {
            args: Prisma.DepositPaymentMethodBankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositPaymentMethodBankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>[]
          }
          delete: {
            args: Prisma.DepositPaymentMethodBankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          update: {
            args: Prisma.DepositPaymentMethodBankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          deleteMany: {
            args: Prisma.DepositPaymentMethodBankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositPaymentMethodBankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositPaymentMethodBankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>[]
          }
          upsert: {
            args: Prisma.DepositPaymentMethodBankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPaymentMethodBankPayload>
          }
          aggregate: {
            args: Prisma.DepositPaymentMethodBankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepositPaymentMethodBank>
          }
          groupBy: {
            args: Prisma.DepositPaymentMethodBankGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositPaymentMethodBankCountArgs<ExtArgs>
            result: $Utils.Optional<DepositPaymentMethodBankCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personalInfo?: PersonalInfoOmit
    personalInfoStates?: PersonalInfoStatesOmit
    credentials?: CredentialsOmit
    deposit?: DepositOmit
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandOmit
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneOmit
    depositPaymentMethodBank?: DepositPaymentMethodBankOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PersonalInfo
   */

  export type AggregatePersonalInfo = {
    _count: PersonalInfoCountAggregateOutputType | null
    _avg: PersonalInfoAvgAggregateOutputType | null
    _sum: PersonalInfoSumAggregateOutputType | null
    _min: PersonalInfoMinAggregateOutputType | null
    _max: PersonalInfoMaxAggregateOutputType | null
  }

  export type PersonalInfoAvgAggregateOutputType = {
    phone: number | null
    memberId: number | null
    nid: number | null
  }

  export type PersonalInfoSumAggregateOutputType = {
    phone: number | null
    memberId: number | null
    nid: number | null
  }

  export type PersonalInfoMinAggregateOutputType = {
    id: string | null
    name: string | null
    fatherName: string | null
    motherName: string | null
    address: string | null
    occupation: string | null
    email: string | null
    phone: number | null
    memberId: number | null
    nid: number | null
    status: $Enums.Status | null
    joingDate: Date | null
    refarenceName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalInfoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fatherName: string | null
    motherName: string | null
    address: string | null
    occupation: string | null
    email: string | null
    phone: number | null
    memberId: number | null
    nid: number | null
    status: $Enums.Status | null
    joingDate: Date | null
    refarenceName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalInfoCountAggregateOutputType = {
    id: number
    name: number
    fatherName: number
    motherName: number
    address: number
    occupation: number
    email: number
    phone: number
    memberId: number
    nid: number
    status: number
    joingDate: number
    refarenceName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonalInfoAvgAggregateInputType = {
    phone?: true
    memberId?: true
    nid?: true
  }

  export type PersonalInfoSumAggregateInputType = {
    phone?: true
    memberId?: true
    nid?: true
  }

  export type PersonalInfoMinAggregateInputType = {
    id?: true
    name?: true
    fatherName?: true
    motherName?: true
    address?: true
    occupation?: true
    email?: true
    phone?: true
    memberId?: true
    nid?: true
    status?: true
    joingDate?: true
    refarenceName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalInfoMaxAggregateInputType = {
    id?: true
    name?: true
    fatherName?: true
    motherName?: true
    address?: true
    occupation?: true
    email?: true
    phone?: true
    memberId?: true
    nid?: true
    status?: true
    joingDate?: true
    refarenceName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalInfoCountAggregateInputType = {
    id?: true
    name?: true
    fatherName?: true
    motherName?: true
    address?: true
    occupation?: true
    email?: true
    phone?: true
    memberId?: true
    nid?: true
    status?: true
    joingDate?: true
    refarenceName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonalInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInfo to aggregate.
     */
    where?: PersonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfos to fetch.
     */
    orderBy?: PersonalInfoOrderByWithRelationInput | PersonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalInfos
    **/
    _count?: true | PersonalInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalInfoMaxAggregateInputType
  }

  export type GetPersonalInfoAggregateType<T extends PersonalInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalInfo[P]>
      : GetScalarType<T[P], AggregatePersonalInfo[P]>
  }




  export type PersonalInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalInfoWhereInput
    orderBy?: PersonalInfoOrderByWithAggregationInput | PersonalInfoOrderByWithAggregationInput[]
    by: PersonalInfoScalarFieldEnum[] | PersonalInfoScalarFieldEnum
    having?: PersonalInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalInfoCountAggregateInputType | true
    _avg?: PersonalInfoAvgAggregateInputType
    _sum?: PersonalInfoSumAggregateInputType
    _min?: PersonalInfoMinAggregateInputType
    _max?: PersonalInfoMaxAggregateInputType
  }

  export type PersonalInfoGroupByOutputType = {
    id: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    memberId: number
    nid: number
    status: $Enums.Status
    joingDate: Date
    refarenceName: string
    createdAt: Date
    updatedAt: Date
    _count: PersonalInfoCountAggregateOutputType | null
    _avg: PersonalInfoAvgAggregateOutputType | null
    _sum: PersonalInfoSumAggregateOutputType | null
    _min: PersonalInfoMinAggregateOutputType | null
    _max: PersonalInfoMaxAggregateOutputType | null
  }

  type GetPersonalInfoGroupByPayload<T extends PersonalInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalInfoGroupByOutputType[P]>
        }
      >
    >


  export type PersonalInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    occupation?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    nid?: boolean
    status?: boolean
    joingDate?: boolean
    refarenceName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personalInfoStates?: boolean | PersonalInfo$personalInfoStatesArgs<ExtArgs>
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfo"]>

  export type PersonalInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    occupation?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    nid?: boolean
    status?: boolean
    joingDate?: boolean
    refarenceName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfo"]>

  export type PersonalInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    occupation?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    nid?: boolean
    status?: boolean
    joingDate?: boolean
    refarenceName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfo"]>

  export type PersonalInfoSelectScalar = {
    id?: boolean
    name?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    occupation?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    nid?: boolean
    status?: boolean
    joingDate?: boolean
    refarenceName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonalInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fatherName" | "motherName" | "address" | "occupation" | "email" | "phone" | "memberId" | "nid" | "status" | "joingDate" | "refarenceName" | "createdAt" | "updatedAt", ExtArgs["result"]["personalInfo"]>
  export type PersonalInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInfoStates?: boolean | PersonalInfo$personalInfoStatesArgs<ExtArgs>
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }
  export type PersonalInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }
  export type PersonalInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }

  export type $PersonalInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalInfo"
    objects: {
      personalInfoStates: Prisma.$PersonalInfoStatesPayload<ExtArgs> | null
      credentials: Prisma.$CredentialsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fatherName: string
      motherName: string
      address: string
      occupation: string
      email: string
      phone: number
      memberId: number
      nid: number
      status: $Enums.Status
      joingDate: Date
      refarenceName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personalInfo"]>
    composites: {}
  }

  type PersonalInfoGetPayload<S extends boolean | null | undefined | PersonalInfoDefaultArgs> = $Result.GetResult<Prisma.$PersonalInfoPayload, S>

  type PersonalInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalInfoCountAggregateInputType | true
    }

  export interface PersonalInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalInfo'], meta: { name: 'PersonalInfo' } }
    /**
     * Find zero or one PersonalInfo that matches the filter.
     * @param {PersonalInfoFindUniqueArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalInfoFindUniqueArgs>(args: SelectSubset<T, PersonalInfoFindUniqueArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalInfoFindUniqueOrThrowArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoFindFirstArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalInfoFindFirstArgs>(args?: SelectSubset<T, PersonalInfoFindFirstArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoFindFirstOrThrowArgs} args - Arguments to find a PersonalInfo
     * @example
     * // Get one PersonalInfo
     * const personalInfo = await prisma.personalInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalInfos
     * const personalInfos = await prisma.personalInfo.findMany()
     * 
     * // Get first 10 PersonalInfos
     * const personalInfos = await prisma.personalInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalInfoFindManyArgs>(args?: SelectSubset<T, PersonalInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalInfo.
     * @param {PersonalInfoCreateArgs} args - Arguments to create a PersonalInfo.
     * @example
     * // Create one PersonalInfo
     * const PersonalInfo = await prisma.personalInfo.create({
     *   data: {
     *     // ... data to create a PersonalInfo
     *   }
     * })
     * 
     */
    create<T extends PersonalInfoCreateArgs>(args: SelectSubset<T, PersonalInfoCreateArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalInfos.
     * @param {PersonalInfoCreateManyArgs} args - Arguments to create many PersonalInfos.
     * @example
     * // Create many PersonalInfos
     * const personalInfo = await prisma.personalInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalInfoCreateManyArgs>(args?: SelectSubset<T, PersonalInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalInfos and returns the data saved in the database.
     * @param {PersonalInfoCreateManyAndReturnArgs} args - Arguments to create many PersonalInfos.
     * @example
     * // Create many PersonalInfos
     * const personalInfo = await prisma.personalInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalInfos and only return the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalInfo.
     * @param {PersonalInfoDeleteArgs} args - Arguments to delete one PersonalInfo.
     * @example
     * // Delete one PersonalInfo
     * const PersonalInfo = await prisma.personalInfo.delete({
     *   where: {
     *     // ... filter to delete one PersonalInfo
     *   }
     * })
     * 
     */
    delete<T extends PersonalInfoDeleteArgs>(args: SelectSubset<T, PersonalInfoDeleteArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalInfo.
     * @param {PersonalInfoUpdateArgs} args - Arguments to update one PersonalInfo.
     * @example
     * // Update one PersonalInfo
     * const personalInfo = await prisma.personalInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalInfoUpdateArgs>(args: SelectSubset<T, PersonalInfoUpdateArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalInfos.
     * @param {PersonalInfoDeleteManyArgs} args - Arguments to filter PersonalInfos to delete.
     * @example
     * // Delete a few PersonalInfos
     * const { count } = await prisma.personalInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalInfoDeleteManyArgs>(args?: SelectSubset<T, PersonalInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalInfos
     * const personalInfo = await prisma.personalInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalInfoUpdateManyArgs>(args: SelectSubset<T, PersonalInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInfos and returns the data updated in the database.
     * @param {PersonalInfoUpdateManyAndReturnArgs} args - Arguments to update many PersonalInfos.
     * @example
     * // Update many PersonalInfos
     * const personalInfo = await prisma.personalInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalInfos and only return the `id`
     * const personalInfoWithIdOnly = await prisma.personalInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalInfo.
     * @param {PersonalInfoUpsertArgs} args - Arguments to update or create a PersonalInfo.
     * @example
     * // Update or create a PersonalInfo
     * const personalInfo = await prisma.personalInfo.upsert({
     *   create: {
     *     // ... data to create a PersonalInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalInfo we want to update
     *   }
     * })
     */
    upsert<T extends PersonalInfoUpsertArgs>(args: SelectSubset<T, PersonalInfoUpsertArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoCountArgs} args - Arguments to filter PersonalInfos to count.
     * @example
     * // Count the number of PersonalInfos
     * const count = await prisma.personalInfo.count({
     *   where: {
     *     // ... the filter for the PersonalInfos we want to count
     *   }
     * })
    **/
    count<T extends PersonalInfoCountArgs>(
      args?: Subset<T, PersonalInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalInfoAggregateArgs>(args: Subset<T, PersonalInfoAggregateArgs>): Prisma.PrismaPromise<GetPersonalInfoAggregateType<T>>

    /**
     * Group by PersonalInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalInfoGroupByArgs['orderBy'] }
        : { orderBy?: PersonalInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalInfo model
   */
  readonly fields: PersonalInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalInfoStates<T extends PersonalInfo$personalInfoStatesArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInfo$personalInfoStatesArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    credentials<T extends CredentialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CredentialsDefaultArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalInfo model
   */
  interface PersonalInfoFieldRefs {
    readonly id: FieldRef<"PersonalInfo", 'String'>
    readonly name: FieldRef<"PersonalInfo", 'String'>
    readonly fatherName: FieldRef<"PersonalInfo", 'String'>
    readonly motherName: FieldRef<"PersonalInfo", 'String'>
    readonly address: FieldRef<"PersonalInfo", 'String'>
    readonly occupation: FieldRef<"PersonalInfo", 'String'>
    readonly email: FieldRef<"PersonalInfo", 'String'>
    readonly phone: FieldRef<"PersonalInfo", 'Int'>
    readonly memberId: FieldRef<"PersonalInfo", 'Int'>
    readonly nid: FieldRef<"PersonalInfo", 'Int'>
    readonly status: FieldRef<"PersonalInfo", 'Status'>
    readonly joingDate: FieldRef<"PersonalInfo", 'DateTime'>
    readonly refarenceName: FieldRef<"PersonalInfo", 'String'>
    readonly createdAt: FieldRef<"PersonalInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"PersonalInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalInfo findUnique
   */
  export type PersonalInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfo to fetch.
     */
    where: PersonalInfoWhereUniqueInput
  }

  /**
   * PersonalInfo findUniqueOrThrow
   */
  export type PersonalInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfo to fetch.
     */
    where: PersonalInfoWhereUniqueInput
  }

  /**
   * PersonalInfo findFirst
   */
  export type PersonalInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfo to fetch.
     */
    where?: PersonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfos to fetch.
     */
    orderBy?: PersonalInfoOrderByWithRelationInput | PersonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInfos.
     */
    cursor?: PersonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInfos.
     */
    distinct?: PersonalInfoScalarFieldEnum | PersonalInfoScalarFieldEnum[]
  }

  /**
   * PersonalInfo findFirstOrThrow
   */
  export type PersonalInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfo to fetch.
     */
    where?: PersonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfos to fetch.
     */
    orderBy?: PersonalInfoOrderByWithRelationInput | PersonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInfos.
     */
    cursor?: PersonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInfos.
     */
    distinct?: PersonalInfoScalarFieldEnum | PersonalInfoScalarFieldEnum[]
  }

  /**
   * PersonalInfo findMany
   */
  export type PersonalInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfos to fetch.
     */
    where?: PersonalInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfos to fetch.
     */
    orderBy?: PersonalInfoOrderByWithRelationInput | PersonalInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalInfos.
     */
    cursor?: PersonalInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfos.
     */
    skip?: number
    distinct?: PersonalInfoScalarFieldEnum | PersonalInfoScalarFieldEnum[]
  }

  /**
   * PersonalInfo create
   */
  export type PersonalInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalInfo.
     */
    data: XOR<PersonalInfoCreateInput, PersonalInfoUncheckedCreateInput>
  }

  /**
   * PersonalInfo createMany
   */
  export type PersonalInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalInfos.
     */
    data: PersonalInfoCreateManyInput | PersonalInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalInfo createManyAndReturn
   */
  export type PersonalInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalInfos.
     */
    data: PersonalInfoCreateManyInput | PersonalInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalInfo update
   */
  export type PersonalInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalInfo.
     */
    data: XOR<PersonalInfoUpdateInput, PersonalInfoUncheckedUpdateInput>
    /**
     * Choose, which PersonalInfo to update.
     */
    where: PersonalInfoWhereUniqueInput
  }

  /**
   * PersonalInfo updateMany
   */
  export type PersonalInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalInfos.
     */
    data: XOR<PersonalInfoUpdateManyMutationInput, PersonalInfoUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInfos to update
     */
    where?: PersonalInfoWhereInput
    /**
     * Limit how many PersonalInfos to update.
     */
    limit?: number
  }

  /**
   * PersonalInfo updateManyAndReturn
   */
  export type PersonalInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * The data used to update PersonalInfos.
     */
    data: XOR<PersonalInfoUpdateManyMutationInput, PersonalInfoUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInfos to update
     */
    where?: PersonalInfoWhereInput
    /**
     * Limit how many PersonalInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalInfo upsert
   */
  export type PersonalInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalInfo to update in case it exists.
     */
    where: PersonalInfoWhereUniqueInput
    /**
     * In case the PersonalInfo found by the `where` argument doesn't exist, create a new PersonalInfo with this data.
     */
    create: XOR<PersonalInfoCreateInput, PersonalInfoUncheckedCreateInput>
    /**
     * In case the PersonalInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalInfoUpdateInput, PersonalInfoUncheckedUpdateInput>
  }

  /**
   * PersonalInfo delete
   */
  export type PersonalInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    /**
     * Filter which PersonalInfo to delete.
     */
    where: PersonalInfoWhereUniqueInput
  }

  /**
   * PersonalInfo deleteMany
   */
  export type PersonalInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInfos to delete
     */
    where?: PersonalInfoWhereInput
    /**
     * Limit how many PersonalInfos to delete.
     */
    limit?: number
  }

  /**
   * PersonalInfo.personalInfoStates
   */
  export type PersonalInfo$personalInfoStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    where?: PersonalInfoStatesWhereInput
  }

  /**
   * PersonalInfo without action
   */
  export type PersonalInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
  }


  /**
   * Model PersonalInfoStates
   */

  export type AggregatePersonalInfoStates = {
    _count: PersonalInfoStatesCountAggregateOutputType | null
    _avg: PersonalInfoStatesAvgAggregateOutputType | null
    _sum: PersonalInfoStatesSumAggregateOutputType | null
    _min: PersonalInfoStatesMinAggregateOutputType | null
    _max: PersonalInfoStatesMaxAggregateOutputType | null
  }

  export type PersonalInfoStatesAvgAggregateOutputType = {
    memberId: number | null
    totalDeposit: number | null
    montlyDeposit: number | null
    totalMonthDeposit: number | null
    totalPenalties: number | null
    totalPenaltiesMonth: number | null
    registrationFee: number | null
    paymentStreak: number | null
  }

  export type PersonalInfoStatesSumAggregateOutputType = {
    memberId: number | null
    totalDeposit: number | null
    montlyDeposit: number | null
    totalMonthDeposit: number | null
    totalPenalties: number | null
    totalPenaltiesMonth: number | null
    registrationFee: number | null
    paymentStreak: number | null
  }

  export type PersonalInfoStatesMinAggregateOutputType = {
    id: string | null
    memberId: number | null
    totalDeposit: number | null
    montlyDeposit: number | null
    totalMonthDeposit: number | null
    totalPenalties: number | null
    totalPenaltiesMonth: number | null
    registrationFee: number | null
    paymentMethod: string | null
    paymentStreak: number | null
  }

  export type PersonalInfoStatesMaxAggregateOutputType = {
    id: string | null
    memberId: number | null
    totalDeposit: number | null
    montlyDeposit: number | null
    totalMonthDeposit: number | null
    totalPenalties: number | null
    totalPenaltiesMonth: number | null
    registrationFee: number | null
    paymentMethod: string | null
    paymentStreak: number | null
  }

  export type PersonalInfoStatesCountAggregateOutputType = {
    id: number
    memberId: number
    totalDeposit: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties: number
    totalPenaltiesMonth: number
    registrationFee: number
    paymentMethod: number
    paymentStreak: number
    _all: number
  }


  export type PersonalInfoStatesAvgAggregateInputType = {
    memberId?: true
    totalDeposit?: true
    montlyDeposit?: true
    totalMonthDeposit?: true
    totalPenalties?: true
    totalPenaltiesMonth?: true
    registrationFee?: true
    paymentStreak?: true
  }

  export type PersonalInfoStatesSumAggregateInputType = {
    memberId?: true
    totalDeposit?: true
    montlyDeposit?: true
    totalMonthDeposit?: true
    totalPenalties?: true
    totalPenaltiesMonth?: true
    registrationFee?: true
    paymentStreak?: true
  }

  export type PersonalInfoStatesMinAggregateInputType = {
    id?: true
    memberId?: true
    totalDeposit?: true
    montlyDeposit?: true
    totalMonthDeposit?: true
    totalPenalties?: true
    totalPenaltiesMonth?: true
    registrationFee?: true
    paymentMethod?: true
    paymentStreak?: true
  }

  export type PersonalInfoStatesMaxAggregateInputType = {
    id?: true
    memberId?: true
    totalDeposit?: true
    montlyDeposit?: true
    totalMonthDeposit?: true
    totalPenalties?: true
    totalPenaltiesMonth?: true
    registrationFee?: true
    paymentMethod?: true
    paymentStreak?: true
  }

  export type PersonalInfoStatesCountAggregateInputType = {
    id?: true
    memberId?: true
    totalDeposit?: true
    montlyDeposit?: true
    totalMonthDeposit?: true
    totalPenalties?: true
    totalPenaltiesMonth?: true
    registrationFee?: true
    paymentMethod?: true
    paymentStreak?: true
    _all?: true
  }

  export type PersonalInfoStatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInfoStates to aggregate.
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfoStates to fetch.
     */
    orderBy?: PersonalInfoStatesOrderByWithRelationInput | PersonalInfoStatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalInfoStatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfoStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfoStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalInfoStates
    **/
    _count?: true | PersonalInfoStatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalInfoStatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalInfoStatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalInfoStatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalInfoStatesMaxAggregateInputType
  }

  export type GetPersonalInfoStatesAggregateType<T extends PersonalInfoStatesAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalInfoStates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalInfoStates[P]>
      : GetScalarType<T[P], AggregatePersonalInfoStates[P]>
  }




  export type PersonalInfoStatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalInfoStatesWhereInput
    orderBy?: PersonalInfoStatesOrderByWithAggregationInput | PersonalInfoStatesOrderByWithAggregationInput[]
    by: PersonalInfoStatesScalarFieldEnum[] | PersonalInfoStatesScalarFieldEnum
    having?: PersonalInfoStatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalInfoStatesCountAggregateInputType | true
    _avg?: PersonalInfoStatesAvgAggregateInputType
    _sum?: PersonalInfoStatesSumAggregateInputType
    _min?: PersonalInfoStatesMinAggregateInputType
    _max?: PersonalInfoStatesMaxAggregateInputType
  }

  export type PersonalInfoStatesGroupByOutputType = {
    id: string
    memberId: number
    totalDeposit: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties: number
    totalPenaltiesMonth: number
    registrationFee: number
    paymentMethod: string
    paymentStreak: number
    _count: PersonalInfoStatesCountAggregateOutputType | null
    _avg: PersonalInfoStatesAvgAggregateOutputType | null
    _sum: PersonalInfoStatesSumAggregateOutputType | null
    _min: PersonalInfoStatesMinAggregateOutputType | null
    _max: PersonalInfoStatesMaxAggregateOutputType | null
  }

  type GetPersonalInfoStatesGroupByPayload<T extends PersonalInfoStatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalInfoStatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalInfoStatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalInfoStatesGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalInfoStatesGroupByOutputType[P]>
        }
      >
    >


  export type PersonalInfoStatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    totalDeposit?: boolean
    montlyDeposit?: boolean
    totalMonthDeposit?: boolean
    totalPenalties?: boolean
    totalPenaltiesMonth?: boolean
    registrationFee?: boolean
    paymentMethod?: boolean
    paymentStreak?: boolean
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfoStates"]>

  export type PersonalInfoStatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    totalDeposit?: boolean
    montlyDeposit?: boolean
    totalMonthDeposit?: boolean
    totalPenalties?: boolean
    totalPenaltiesMonth?: boolean
    registrationFee?: boolean
    paymentMethod?: boolean
    paymentStreak?: boolean
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfoStates"]>

  export type PersonalInfoStatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    totalDeposit?: boolean
    montlyDeposit?: boolean
    totalMonthDeposit?: boolean
    totalPenalties?: boolean
    totalPenaltiesMonth?: boolean
    registrationFee?: boolean
    paymentMethod?: boolean
    paymentStreak?: boolean
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInfoStates"]>

  export type PersonalInfoStatesSelectScalar = {
    id?: boolean
    memberId?: boolean
    totalDeposit?: boolean
    montlyDeposit?: boolean
    totalMonthDeposit?: boolean
    totalPenalties?: boolean
    totalPenaltiesMonth?: boolean
    registrationFee?: boolean
    paymentMethod?: boolean
    paymentStreak?: boolean
  }

  export type PersonalInfoStatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "totalDeposit" | "montlyDeposit" | "totalMonthDeposit" | "totalPenalties" | "totalPenaltiesMonth" | "registrationFee" | "paymentMethod" | "paymentStreak", ExtArgs["result"]["personalInfoStates"]>
  export type PersonalInfoStatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }
  export type PersonalInfoStatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }
  export type PersonalInfoStatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInfo?: boolean | PersonalInfoDefaultArgs<ExtArgs>
  }

  export type $PersonalInfoStatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalInfoStates"
    objects: {
      personalInfo: Prisma.$PersonalInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: number
      totalDeposit: number
      montlyDeposit: number
      totalMonthDeposit: number
      totalPenalties: number
      totalPenaltiesMonth: number
      registrationFee: number
      paymentMethod: string
      paymentStreak: number
    }, ExtArgs["result"]["personalInfoStates"]>
    composites: {}
  }

  type PersonalInfoStatesGetPayload<S extends boolean | null | undefined | PersonalInfoStatesDefaultArgs> = $Result.GetResult<Prisma.$PersonalInfoStatesPayload, S>

  type PersonalInfoStatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalInfoStatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalInfoStatesCountAggregateInputType | true
    }

  export interface PersonalInfoStatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalInfoStates'], meta: { name: 'PersonalInfoStates' } }
    /**
     * Find zero or one PersonalInfoStates that matches the filter.
     * @param {PersonalInfoStatesFindUniqueArgs} args - Arguments to find a PersonalInfoStates
     * @example
     * // Get one PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalInfoStatesFindUniqueArgs>(args: SelectSubset<T, PersonalInfoStatesFindUniqueArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalInfoStates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalInfoStatesFindUniqueOrThrowArgs} args - Arguments to find a PersonalInfoStates
     * @example
     * // Get one PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalInfoStatesFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalInfoStatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalInfoStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesFindFirstArgs} args - Arguments to find a PersonalInfoStates
     * @example
     * // Get one PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalInfoStatesFindFirstArgs>(args?: SelectSubset<T, PersonalInfoStatesFindFirstArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalInfoStates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesFindFirstOrThrowArgs} args - Arguments to find a PersonalInfoStates
     * @example
     * // Get one PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalInfoStatesFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalInfoStatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalInfoStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findMany()
     * 
     * // Get first 10 PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalInfoStatesWithIdOnly = await prisma.personalInfoStates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalInfoStatesFindManyArgs>(args?: SelectSubset<T, PersonalInfoStatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalInfoStates.
     * @param {PersonalInfoStatesCreateArgs} args - Arguments to create a PersonalInfoStates.
     * @example
     * // Create one PersonalInfoStates
     * const PersonalInfoStates = await prisma.personalInfoStates.create({
     *   data: {
     *     // ... data to create a PersonalInfoStates
     *   }
     * })
     * 
     */
    create<T extends PersonalInfoStatesCreateArgs>(args: SelectSubset<T, PersonalInfoStatesCreateArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalInfoStates.
     * @param {PersonalInfoStatesCreateManyArgs} args - Arguments to create many PersonalInfoStates.
     * @example
     * // Create many PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalInfoStatesCreateManyArgs>(args?: SelectSubset<T, PersonalInfoStatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalInfoStates and returns the data saved in the database.
     * @param {PersonalInfoStatesCreateManyAndReturnArgs} args - Arguments to create many PersonalInfoStates.
     * @example
     * // Create many PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalInfoStates and only return the `id`
     * const personalInfoStatesWithIdOnly = await prisma.personalInfoStates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalInfoStatesCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalInfoStatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalInfoStates.
     * @param {PersonalInfoStatesDeleteArgs} args - Arguments to delete one PersonalInfoStates.
     * @example
     * // Delete one PersonalInfoStates
     * const PersonalInfoStates = await prisma.personalInfoStates.delete({
     *   where: {
     *     // ... filter to delete one PersonalInfoStates
     *   }
     * })
     * 
     */
    delete<T extends PersonalInfoStatesDeleteArgs>(args: SelectSubset<T, PersonalInfoStatesDeleteArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalInfoStates.
     * @param {PersonalInfoStatesUpdateArgs} args - Arguments to update one PersonalInfoStates.
     * @example
     * // Update one PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalInfoStatesUpdateArgs>(args: SelectSubset<T, PersonalInfoStatesUpdateArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalInfoStates.
     * @param {PersonalInfoStatesDeleteManyArgs} args - Arguments to filter PersonalInfoStates to delete.
     * @example
     * // Delete a few PersonalInfoStates
     * const { count } = await prisma.personalInfoStates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalInfoStatesDeleteManyArgs>(args?: SelectSubset<T, PersonalInfoStatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInfoStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalInfoStatesUpdateManyArgs>(args: SelectSubset<T, PersonalInfoStatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInfoStates and returns the data updated in the database.
     * @param {PersonalInfoStatesUpdateManyAndReturnArgs} args - Arguments to update many PersonalInfoStates.
     * @example
     * // Update many PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalInfoStates and only return the `id`
     * const personalInfoStatesWithIdOnly = await prisma.personalInfoStates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalInfoStatesUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalInfoStatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalInfoStates.
     * @param {PersonalInfoStatesUpsertArgs} args - Arguments to update or create a PersonalInfoStates.
     * @example
     * // Update or create a PersonalInfoStates
     * const personalInfoStates = await prisma.personalInfoStates.upsert({
     *   create: {
     *     // ... data to create a PersonalInfoStates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalInfoStates we want to update
     *   }
     * })
     */
    upsert<T extends PersonalInfoStatesUpsertArgs>(args: SelectSubset<T, PersonalInfoStatesUpsertArgs<ExtArgs>>): Prisma__PersonalInfoStatesClient<$Result.GetResult<Prisma.$PersonalInfoStatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalInfoStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesCountArgs} args - Arguments to filter PersonalInfoStates to count.
     * @example
     * // Count the number of PersonalInfoStates
     * const count = await prisma.personalInfoStates.count({
     *   where: {
     *     // ... the filter for the PersonalInfoStates we want to count
     *   }
     * })
    **/
    count<T extends PersonalInfoStatesCountArgs>(
      args?: Subset<T, PersonalInfoStatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalInfoStatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalInfoStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalInfoStatesAggregateArgs>(args: Subset<T, PersonalInfoStatesAggregateArgs>): Prisma.PrismaPromise<GetPersonalInfoStatesAggregateType<T>>

    /**
     * Group by PersonalInfoStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInfoStatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalInfoStatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalInfoStatesGroupByArgs['orderBy'] }
        : { orderBy?: PersonalInfoStatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalInfoStatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalInfoStatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalInfoStates model
   */
  readonly fields: PersonalInfoStatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalInfoStates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalInfoStatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalInfo<T extends PersonalInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInfoDefaultArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalInfoStates model
   */
  interface PersonalInfoStatesFieldRefs {
    readonly id: FieldRef<"PersonalInfoStates", 'String'>
    readonly memberId: FieldRef<"PersonalInfoStates", 'Int'>
    readonly totalDeposit: FieldRef<"PersonalInfoStates", 'Int'>
    readonly montlyDeposit: FieldRef<"PersonalInfoStates", 'Int'>
    readonly totalMonthDeposit: FieldRef<"PersonalInfoStates", 'Int'>
    readonly totalPenalties: FieldRef<"PersonalInfoStates", 'Int'>
    readonly totalPenaltiesMonth: FieldRef<"PersonalInfoStates", 'Int'>
    readonly registrationFee: FieldRef<"PersonalInfoStates", 'Int'>
    readonly paymentMethod: FieldRef<"PersonalInfoStates", 'String'>
    readonly paymentStreak: FieldRef<"PersonalInfoStates", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PersonalInfoStates findUnique
   */
  export type PersonalInfoStatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfoStates to fetch.
     */
    where: PersonalInfoStatesWhereUniqueInput
  }

  /**
   * PersonalInfoStates findUniqueOrThrow
   */
  export type PersonalInfoStatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfoStates to fetch.
     */
    where: PersonalInfoStatesWhereUniqueInput
  }

  /**
   * PersonalInfoStates findFirst
   */
  export type PersonalInfoStatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfoStates to fetch.
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfoStates to fetch.
     */
    orderBy?: PersonalInfoStatesOrderByWithRelationInput | PersonalInfoStatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInfoStates.
     */
    cursor?: PersonalInfoStatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfoStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfoStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInfoStates.
     */
    distinct?: PersonalInfoStatesScalarFieldEnum | PersonalInfoStatesScalarFieldEnum[]
  }

  /**
   * PersonalInfoStates findFirstOrThrow
   */
  export type PersonalInfoStatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfoStates to fetch.
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfoStates to fetch.
     */
    orderBy?: PersonalInfoStatesOrderByWithRelationInput | PersonalInfoStatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInfoStates.
     */
    cursor?: PersonalInfoStatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfoStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfoStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInfoStates.
     */
    distinct?: PersonalInfoStatesScalarFieldEnum | PersonalInfoStatesScalarFieldEnum[]
  }

  /**
   * PersonalInfoStates findMany
   */
  export type PersonalInfoStatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInfoStates to fetch.
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInfoStates to fetch.
     */
    orderBy?: PersonalInfoStatesOrderByWithRelationInput | PersonalInfoStatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalInfoStates.
     */
    cursor?: PersonalInfoStatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInfoStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInfoStates.
     */
    skip?: number
    distinct?: PersonalInfoStatesScalarFieldEnum | PersonalInfoStatesScalarFieldEnum[]
  }

  /**
   * PersonalInfoStates create
   */
  export type PersonalInfoStatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalInfoStates.
     */
    data: XOR<PersonalInfoStatesCreateInput, PersonalInfoStatesUncheckedCreateInput>
  }

  /**
   * PersonalInfoStates createMany
   */
  export type PersonalInfoStatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalInfoStates.
     */
    data: PersonalInfoStatesCreateManyInput | PersonalInfoStatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalInfoStates createManyAndReturn
   */
  export type PersonalInfoStatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalInfoStates.
     */
    data: PersonalInfoStatesCreateManyInput | PersonalInfoStatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalInfoStates update
   */
  export type PersonalInfoStatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalInfoStates.
     */
    data: XOR<PersonalInfoStatesUpdateInput, PersonalInfoStatesUncheckedUpdateInput>
    /**
     * Choose, which PersonalInfoStates to update.
     */
    where: PersonalInfoStatesWhereUniqueInput
  }

  /**
   * PersonalInfoStates updateMany
   */
  export type PersonalInfoStatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalInfoStates.
     */
    data: XOR<PersonalInfoStatesUpdateManyMutationInput, PersonalInfoStatesUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInfoStates to update
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * Limit how many PersonalInfoStates to update.
     */
    limit?: number
  }

  /**
   * PersonalInfoStates updateManyAndReturn
   */
  export type PersonalInfoStatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * The data used to update PersonalInfoStates.
     */
    data: XOR<PersonalInfoStatesUpdateManyMutationInput, PersonalInfoStatesUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInfoStates to update
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * Limit how many PersonalInfoStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalInfoStates upsert
   */
  export type PersonalInfoStatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalInfoStates to update in case it exists.
     */
    where: PersonalInfoStatesWhereUniqueInput
    /**
     * In case the PersonalInfoStates found by the `where` argument doesn't exist, create a new PersonalInfoStates with this data.
     */
    create: XOR<PersonalInfoStatesCreateInput, PersonalInfoStatesUncheckedCreateInput>
    /**
     * In case the PersonalInfoStates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalInfoStatesUpdateInput, PersonalInfoStatesUncheckedUpdateInput>
  }

  /**
   * PersonalInfoStates delete
   */
  export type PersonalInfoStatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
    /**
     * Filter which PersonalInfoStates to delete.
     */
    where: PersonalInfoStatesWhereUniqueInput
  }

  /**
   * PersonalInfoStates deleteMany
   */
  export type PersonalInfoStatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInfoStates to delete
     */
    where?: PersonalInfoStatesWhereInput
    /**
     * Limit how many PersonalInfoStates to delete.
     */
    limit?: number
  }

  /**
   * PersonalInfoStates without action
   */
  export type PersonalInfoStatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfoStates
     */
    select?: PersonalInfoStatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfoStates
     */
    omit?: PersonalInfoStatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoStatesInclude<ExtArgs> | null
  }


  /**
   * Model Credentials
   */

  export type AggregateCredentials = {
    _count: CredentialsCountAggregateOutputType | null
    _avg: CredentialsAvgAggregateOutputType | null
    _sum: CredentialsSumAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  export type CredentialsAvgAggregateOutputType = {
    phone: number | null
    memberId: number | null
  }

  export type CredentialsSumAggregateOutputType = {
    phone: number | null
    memberId: number | null
  }

  export type CredentialsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: number | null
    memberId: number | null
    password: string | null
    role: $Enums.Role | null
    updatedAt: Date | null
  }

  export type CredentialsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: number | null
    memberId: number | null
    password: string | null
    role: $Enums.Role | null
    updatedAt: Date | null
  }

  export type CredentialsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    memberId: number
    password: number
    role: number
    updatedAt: number
    _all: number
  }


  export type CredentialsAvgAggregateInputType = {
    phone?: true
    memberId?: true
  }

  export type CredentialsSumAggregateInputType = {
    phone?: true
    memberId?: true
  }

  export type CredentialsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    memberId?: true
    password?: true
    role?: true
    updatedAt?: true
  }

  export type CredentialsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    memberId?: true
    password?: true
    role?: true
    updatedAt?: true
  }

  export type CredentialsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    memberId?: true
    password?: true
    role?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to aggregate.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialsMaxAggregateInputType
  }

  export type GetCredentialsAggregateType<T extends CredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentials[P]>
      : GetScalarType<T[P], AggregateCredentials[P]>
  }




  export type CredentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialsWhereInput
    orderBy?: CredentialsOrderByWithAggregationInput | CredentialsOrderByWithAggregationInput[]
    by: CredentialsScalarFieldEnum[] | CredentialsScalarFieldEnum
    having?: CredentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialsCountAggregateInputType | true
    _avg?: CredentialsAvgAggregateInputType
    _sum?: CredentialsSumAggregateInputType
    _min?: CredentialsMinAggregateInputType
    _max?: CredentialsMaxAggregateInputType
  }

  export type CredentialsGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: number
    memberId: number
    password: string
    role: $Enums.Role
    updatedAt: Date
    _count: CredentialsCountAggregateOutputType | null
    _avg: CredentialsAvgAggregateOutputType | null
    _sum: CredentialsSumAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  type GetCredentialsGroupByPayload<T extends CredentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
        }
      >
    >


  export type CredentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    password?: boolean
    role?: boolean
    updatedAt?: boolean
    personalInfo?: boolean | Credentials$personalInfoArgs<ExtArgs>
    Deposit?: boolean | Credentials$DepositArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    password?: boolean
    role?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    password?: boolean
    role?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type CredentialsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    memberId?: boolean
    password?: boolean
    role?: boolean
    updatedAt?: boolean
  }

  export type CredentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "memberId" | "password" | "role" | "updatedAt", ExtArgs["result"]["credentials"]>
  export type CredentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInfo?: boolean | Credentials$personalInfoArgs<ExtArgs>
    Deposit?: boolean | Credentials$DepositArgs<ExtArgs>
  }
  export type CredentialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CredentialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CredentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credentials"
    objects: {
      personalInfo: Prisma.$PersonalInfoPayload<ExtArgs> | null
      Deposit: Prisma.$DepositPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: number
      memberId: number
      password: string
      role: $Enums.Role
      updatedAt: Date
    }, ExtArgs["result"]["credentials"]>
    composites: {}
  }

  type CredentialsGetPayload<S extends boolean | null | undefined | CredentialsDefaultArgs> = $Result.GetResult<Prisma.$CredentialsPayload, S>

  type CredentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialsCountAggregateInputType | true
    }

  export interface CredentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credentials'], meta: { name: 'Credentials' } }
    /**
     * Find zero or one Credentials that matches the filter.
     * @param {CredentialsFindUniqueArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialsFindUniqueArgs>(args: SelectSubset<T, CredentialsFindUniqueArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialsFindUniqueOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialsFindFirstArgs>(args?: SelectSubset<T, CredentialsFindFirstArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindFirstOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credentials.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialsWithIdOnly = await prisma.credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialsFindManyArgs>(args?: SelectSubset<T, CredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credentials.
     * @param {CredentialsCreateArgs} args - Arguments to create a Credentials.
     * @example
     * // Create one Credentials
     * const Credentials = await prisma.credentials.create({
     *   data: {
     *     // ... data to create a Credentials
     *   }
     * })
     * 
     */
    create<T extends CredentialsCreateArgs>(args: SelectSubset<T, CredentialsCreateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialsCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialsCreateManyArgs>(args?: SelectSubset<T, CredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialsCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credentials.
     * @param {CredentialsDeleteArgs} args - Arguments to delete one Credentials.
     * @example
     * // Delete one Credentials
     * const Credentials = await prisma.credentials.delete({
     *   where: {
     *     // ... filter to delete one Credentials
     *   }
     * })
     * 
     */
    delete<T extends CredentialsDeleteArgs>(args: SelectSubset<T, CredentialsDeleteArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credentials.
     * @param {CredentialsUpdateArgs} args - Arguments to update one Credentials.
     * @example
     * // Update one Credentials
     * const credentials = await prisma.credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialsUpdateArgs>(args: SelectSubset<T, CredentialsUpdateArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialsDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialsDeleteManyArgs>(args?: SelectSubset<T, CredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialsUpdateManyArgs>(args: SelectSubset<T, CredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialsUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CredentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credentials.
     * @param {CredentialsUpsertArgs} args - Arguments to update or create a Credentials.
     * @example
     * // Update or create a Credentials
     * const credentials = await prisma.credentials.upsert({
     *   create: {
     *     // ... data to create a Credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credentials we want to update
     *   }
     * })
     */
    upsert<T extends CredentialsUpsertArgs>(args: SelectSubset<T, CredentialsUpsertArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credentials.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialsCountArgs>(
      args?: Subset<T, CredentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialsAggregateArgs>(args: Subset<T, CredentialsAggregateArgs>): Prisma.PrismaPromise<GetCredentialsAggregateType<T>>

    /**
     * Group by Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CredentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialsGroupByArgs['orderBy'] }
        : { orderBy?: CredentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credentials model
   */
  readonly fields: CredentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalInfo<T extends Credentials$personalInfoArgs<ExtArgs> = {}>(args?: Subset<T, Credentials$personalInfoArgs<ExtArgs>>): Prisma__PersonalInfoClient<$Result.GetResult<Prisma.$PersonalInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Deposit<T extends Credentials$DepositArgs<ExtArgs> = {}>(args?: Subset<T, Credentials$DepositArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credentials model
   */
  interface CredentialsFieldRefs {
    readonly id: FieldRef<"Credentials", 'String'>
    readonly name: FieldRef<"Credentials", 'String'>
    readonly email: FieldRef<"Credentials", 'String'>
    readonly phone: FieldRef<"Credentials", 'Int'>
    readonly memberId: FieldRef<"Credentials", 'Int'>
    readonly password: FieldRef<"Credentials", 'String'>
    readonly role: FieldRef<"Credentials", 'Role'>
    readonly updatedAt: FieldRef<"Credentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credentials findUnique
   */
  export type CredentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findUniqueOrThrow
   */
  export type CredentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials findFirst
   */
  export type CredentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findFirstOrThrow
   */
  export type CredentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials findMany
   */
  export type CredentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialsOrderByWithRelationInput | CredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * Credentials create
   */
  export type CredentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Credentials.
     */
    data: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
  }

  /**
   * Credentials createMany
   */
  export type CredentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credentials createManyAndReturn
   */
  export type CredentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialsCreateManyInput | CredentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credentials update
   */
  export type CredentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Credentials.
     */
    data: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
    /**
     * Choose, which Credentials to update.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials updateMany
   */
  export type CredentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credentials updateManyAndReturn
   */
  export type CredentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialsUpdateManyMutationInput, CredentialsUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credentials upsert
   */
  export type CredentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Credentials to update in case it exists.
     */
    where: CredentialsWhereUniqueInput
    /**
     * In case the Credentials found by the `where` argument doesn't exist, create a new Credentials with this data.
     */
    create: XOR<CredentialsCreateInput, CredentialsUncheckedCreateInput>
    /**
     * In case the Credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialsUpdateInput, CredentialsUncheckedUpdateInput>
  }

  /**
   * Credentials delete
   */
  export type CredentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
    /**
     * Filter which Credentials to delete.
     */
    where: CredentialsWhereUniqueInput
  }

  /**
   * Credentials deleteMany
   */
  export type CredentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialsWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credentials.personalInfo
   */
  export type Credentials$personalInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInfo
     */
    select?: PersonalInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInfo
     */
    omit?: PersonalInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInfoInclude<ExtArgs> | null
    where?: PersonalInfoWhereInput
  }

  /**
   * Credentials.Deposit
   */
  export type Credentials$DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
  }

  /**
   * Credentials without action
   */
  export type CredentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credentials
     */
    select?: CredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credentials
     */
    omit?: CredentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialsInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    memberId: number | null
    monthlyDepositAmount: number | null
    penalty: number | null
  }

  export type DepositSumAggregateOutputType = {
    memberId: number | null
    monthlyDepositAmount: number | null
    penalty: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    memberId: number | null
    monthlyDepositAmount: number | null
    month: Date | null
    referenceName: string | null
    paymentProof: string | null
    status: $Enums.PaymentStatus | null
    penalty: number | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    memberId: number | null
    monthlyDepositAmount: number | null
    month: Date | null
    referenceName: string | null
    paymentProof: string | null
    status: $Enums.PaymentStatus | null
    penalty: number | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    memberId: number
    monthlyDepositAmount: number
    month: number
    referenceName: number
    paymentProof: number
    status: number
    penalty: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    memberId?: true
    monthlyDepositAmount?: true
    penalty?: true
  }

  export type DepositSumAggregateInputType = {
    memberId?: true
    monthlyDepositAmount?: true
    penalty?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    memberId?: true
    monthlyDepositAmount?: true
    month?: true
    referenceName?: true
    paymentProof?: true
    status?: true
    penalty?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    memberId?: true
    monthlyDepositAmount?: true
    month?: true
    referenceName?: true
    paymentProof?: true
    status?: true
    penalty?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    memberId?: true
    monthlyDepositAmount?: true
    month?: true
    referenceName?: true
    paymentProof?: true
    status?: true
    penalty?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    memberId: number
    monthlyDepositAmount: number
    month: Date
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty: number
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    monthlyDepositAmount?: boolean
    month?: boolean
    referenceName?: boolean
    paymentProof?: boolean
    status?: boolean
    penalty?: boolean
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
    depositPaymentMethodHandToHand?: boolean | Deposit$depositPaymentMethodHandToHandArgs<ExtArgs>
    depositPaymentMethodPhone?: boolean | Deposit$depositPaymentMethodPhoneArgs<ExtArgs>
    depositPaymentMethodBank?: boolean | Deposit$depositPaymentMethodBankArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    monthlyDepositAmount?: boolean
    month?: boolean
    referenceName?: boolean
    paymentProof?: boolean
    status?: boolean
    penalty?: boolean
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    monthlyDepositAmount?: boolean
    month?: boolean
    referenceName?: boolean
    paymentProof?: boolean
    status?: boolean
    penalty?: boolean
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    memberId?: boolean
    monthlyDepositAmount?: boolean
    month?: boolean
    referenceName?: boolean
    paymentProof?: boolean
    status?: boolean
    penalty?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "monthlyDepositAmount" | "month" | "referenceName" | "paymentProof" | "status" | "penalty", ExtArgs["result"]["deposit"]>
  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
    depositPaymentMethodHandToHand?: boolean | Deposit$depositPaymentMethodHandToHandArgs<ExtArgs>
    depositPaymentMethodPhone?: boolean | Deposit$depositPaymentMethodPhoneArgs<ExtArgs>
    depositPaymentMethodBank?: boolean | Deposit$depositPaymentMethodBankArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }
  export type DepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialsDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      credentials: Prisma.$CredentialsPayload<ExtArgs>
      depositPaymentMethodHandToHand: Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs> | null
      depositPaymentMethodPhone: Prisma.$DepositPaymentMethodPhonePayload<ExtArgs> | null
      depositPaymentMethodBank: Prisma.$DepositPaymentMethodBankPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: number
      monthlyDepositAmount: number
      month: Date
      referenceName: string
      paymentProof: string
      status: $Enums.PaymentStatus
      penalty: number
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credentials<T extends CredentialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CredentialsDefaultArgs<ExtArgs>>): Prisma__CredentialsClient<$Result.GetResult<Prisma.$CredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    depositPaymentMethodHandToHand<T extends Deposit$depositPaymentMethodHandToHandArgs<ExtArgs> = {}>(args?: Subset<T, Deposit$depositPaymentMethodHandToHandArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    depositPaymentMethodPhone<T extends Deposit$depositPaymentMethodPhoneArgs<ExtArgs> = {}>(args?: Subset<T, Deposit$depositPaymentMethodPhoneArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    depositPaymentMethodBank<T extends Deposit$depositPaymentMethodBankArgs<ExtArgs> = {}>(args?: Subset<T, Deposit$depositPaymentMethodBankArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly memberId: FieldRef<"Deposit", 'Int'>
    readonly monthlyDepositAmount: FieldRef<"Deposit", 'Int'>
    readonly month: FieldRef<"Deposit", 'DateTime'>
    readonly referenceName: FieldRef<"Deposit", 'String'>
    readonly paymentProof: FieldRef<"Deposit", 'String'>
    readonly status: FieldRef<"Deposit", 'PaymentStatus'>
    readonly penalty: FieldRef<"Deposit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit.depositPaymentMethodHandToHand
   */
  export type Deposit$depositPaymentMethodHandToHandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    where?: DepositPaymentMethodHandToHandWhereInput
  }

  /**
   * Deposit.depositPaymentMethodPhone
   */
  export type Deposit$depositPaymentMethodPhoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    where?: DepositPaymentMethodPhoneWhereInput
  }

  /**
   * Deposit.depositPaymentMethodBank
   */
  export type Deposit$depositPaymentMethodBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    where?: DepositPaymentMethodBankWhereInput
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model DepositPaymentMethodHandToHand
   */

  export type AggregateDepositPaymentMethodHandToHand = {
    _count: DepositPaymentMethodHandToHandCountAggregateOutputType | null
    _min: DepositPaymentMethodHandToHandMinAggregateOutputType | null
    _max: DepositPaymentMethodHandToHandMaxAggregateOutputType | null
  }

  export type DepositPaymentMethodHandToHandMinAggregateOutputType = {
    id: string | null
    depositId: string | null
    reciverName: string | null
    date: Date | null
    time: string | null
    location: string | null
  }

  export type DepositPaymentMethodHandToHandMaxAggregateOutputType = {
    id: string | null
    depositId: string | null
    reciverName: string | null
    date: Date | null
    time: string | null
    location: string | null
  }

  export type DepositPaymentMethodHandToHandCountAggregateOutputType = {
    id: number
    depositId: number
    reciverName: number
    date: number
    time: number
    location: number
    _all: number
  }


  export type DepositPaymentMethodHandToHandMinAggregateInputType = {
    id?: true
    depositId?: true
    reciverName?: true
    date?: true
    time?: true
    location?: true
  }

  export type DepositPaymentMethodHandToHandMaxAggregateInputType = {
    id?: true
    depositId?: true
    reciverName?: true
    date?: true
    time?: true
    location?: true
  }

  export type DepositPaymentMethodHandToHandCountAggregateInputType = {
    id?: true
    depositId?: true
    reciverName?: true
    date?: true
    time?: true
    location?: true
    _all?: true
  }

  export type DepositPaymentMethodHandToHandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodHandToHand to aggregate.
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodHandToHands to fetch.
     */
    orderBy?: DepositPaymentMethodHandToHandOrderByWithRelationInput | DepositPaymentMethodHandToHandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositPaymentMethodHandToHandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodHandToHands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodHandToHands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositPaymentMethodHandToHands
    **/
    _count?: true | DepositPaymentMethodHandToHandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositPaymentMethodHandToHandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositPaymentMethodHandToHandMaxAggregateInputType
  }

  export type GetDepositPaymentMethodHandToHandAggregateType<T extends DepositPaymentMethodHandToHandAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositPaymentMethodHandToHand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositPaymentMethodHandToHand[P]>
      : GetScalarType<T[P], AggregateDepositPaymentMethodHandToHand[P]>
  }




  export type DepositPaymentMethodHandToHandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositPaymentMethodHandToHandWhereInput
    orderBy?: DepositPaymentMethodHandToHandOrderByWithAggregationInput | DepositPaymentMethodHandToHandOrderByWithAggregationInput[]
    by: DepositPaymentMethodHandToHandScalarFieldEnum[] | DepositPaymentMethodHandToHandScalarFieldEnum
    having?: DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositPaymentMethodHandToHandCountAggregateInputType | true
    _min?: DepositPaymentMethodHandToHandMinAggregateInputType
    _max?: DepositPaymentMethodHandToHandMaxAggregateInputType
  }

  export type DepositPaymentMethodHandToHandGroupByOutputType = {
    id: string
    depositId: string
    reciverName: string
    date: Date
    time: string
    location: string
    _count: DepositPaymentMethodHandToHandCountAggregateOutputType | null
    _min: DepositPaymentMethodHandToHandMinAggregateOutputType | null
    _max: DepositPaymentMethodHandToHandMaxAggregateOutputType | null
  }

  type GetDepositPaymentMethodHandToHandGroupByPayload<T extends DepositPaymentMethodHandToHandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositPaymentMethodHandToHandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositPaymentMethodHandToHandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositPaymentMethodHandToHandGroupByOutputType[P]>
            : GetScalarType<T[P], DepositPaymentMethodHandToHandGroupByOutputType[P]>
        }
      >
    >


  export type DepositPaymentMethodHandToHandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    reciverName?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodHandToHand"]>

  export type DepositPaymentMethodHandToHandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    reciverName?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodHandToHand"]>

  export type DepositPaymentMethodHandToHandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    reciverName?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodHandToHand"]>

  export type DepositPaymentMethodHandToHandSelectScalar = {
    id?: boolean
    depositId?: boolean
    reciverName?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
  }

  export type DepositPaymentMethodHandToHandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositId" | "reciverName" | "date" | "time" | "location", ExtArgs["result"]["depositPaymentMethodHandToHand"]>
  export type DepositPaymentMethodHandToHandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodHandToHandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodHandToHandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }

  export type $DepositPaymentMethodHandToHandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositPaymentMethodHandToHand"
    objects: {
      deposit: Prisma.$DepositPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      depositId: string
      reciverName: string
      date: Date
      time: string
      location: string
    }, ExtArgs["result"]["depositPaymentMethodHandToHand"]>
    composites: {}
  }

  type DepositPaymentMethodHandToHandGetPayload<S extends boolean | null | undefined | DepositPaymentMethodHandToHandDefaultArgs> = $Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload, S>

  type DepositPaymentMethodHandToHandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositPaymentMethodHandToHandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositPaymentMethodHandToHandCountAggregateInputType | true
    }

  export interface DepositPaymentMethodHandToHandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositPaymentMethodHandToHand'], meta: { name: 'DepositPaymentMethodHandToHand' } }
    /**
     * Find zero or one DepositPaymentMethodHandToHand that matches the filter.
     * @param {DepositPaymentMethodHandToHandFindUniqueArgs} args - Arguments to find a DepositPaymentMethodHandToHand
     * @example
     * // Get one DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositPaymentMethodHandToHandFindUniqueArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandFindUniqueArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositPaymentMethodHandToHand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositPaymentMethodHandToHandFindUniqueOrThrowArgs} args - Arguments to find a DepositPaymentMethodHandToHand
     * @example
     * // Get one DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositPaymentMethodHandToHandFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodHandToHand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandFindFirstArgs} args - Arguments to find a DepositPaymentMethodHandToHand
     * @example
     * // Get one DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositPaymentMethodHandToHandFindFirstArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandFindFirstArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodHandToHand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandFindFirstOrThrowArgs} args - Arguments to find a DepositPaymentMethodHandToHand
     * @example
     * // Get one DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositPaymentMethodHandToHandFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositPaymentMethodHandToHands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHands = await prisma.depositPaymentMethodHandToHand.findMany()
     * 
     * // Get first 10 DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHands = await prisma.depositPaymentMethodHandToHand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositPaymentMethodHandToHandWithIdOnly = await prisma.depositPaymentMethodHandToHand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositPaymentMethodHandToHandFindManyArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositPaymentMethodHandToHand.
     * @param {DepositPaymentMethodHandToHandCreateArgs} args - Arguments to create a DepositPaymentMethodHandToHand.
     * @example
     * // Create one DepositPaymentMethodHandToHand
     * const DepositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.create({
     *   data: {
     *     // ... data to create a DepositPaymentMethodHandToHand
     *   }
     * })
     * 
     */
    create<T extends DepositPaymentMethodHandToHandCreateArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandCreateArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositPaymentMethodHandToHands.
     * @param {DepositPaymentMethodHandToHandCreateManyArgs} args - Arguments to create many DepositPaymentMethodHandToHands.
     * @example
     * // Create many DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositPaymentMethodHandToHandCreateManyArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepositPaymentMethodHandToHands and returns the data saved in the database.
     * @param {DepositPaymentMethodHandToHandCreateManyAndReturnArgs} args - Arguments to create many DepositPaymentMethodHandToHands.
     * @example
     * // Create many DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepositPaymentMethodHandToHands and only return the `id`
     * const depositPaymentMethodHandToHandWithIdOnly = await prisma.depositPaymentMethodHandToHand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositPaymentMethodHandToHandCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepositPaymentMethodHandToHand.
     * @param {DepositPaymentMethodHandToHandDeleteArgs} args - Arguments to delete one DepositPaymentMethodHandToHand.
     * @example
     * // Delete one DepositPaymentMethodHandToHand
     * const DepositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.delete({
     *   where: {
     *     // ... filter to delete one DepositPaymentMethodHandToHand
     *   }
     * })
     * 
     */
    delete<T extends DepositPaymentMethodHandToHandDeleteArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandDeleteArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositPaymentMethodHandToHand.
     * @param {DepositPaymentMethodHandToHandUpdateArgs} args - Arguments to update one DepositPaymentMethodHandToHand.
     * @example
     * // Update one DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositPaymentMethodHandToHandUpdateArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandUpdateArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositPaymentMethodHandToHands.
     * @param {DepositPaymentMethodHandToHandDeleteManyArgs} args - Arguments to filter DepositPaymentMethodHandToHands to delete.
     * @example
     * // Delete a few DepositPaymentMethodHandToHands
     * const { count } = await prisma.depositPaymentMethodHandToHand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositPaymentMethodHandToHandDeleteManyArgs>(args?: SelectSubset<T, DepositPaymentMethodHandToHandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodHandToHands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositPaymentMethodHandToHandUpdateManyArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodHandToHands and returns the data updated in the database.
     * @param {DepositPaymentMethodHandToHandUpdateManyAndReturnArgs} args - Arguments to update many DepositPaymentMethodHandToHands.
     * @example
     * // Update many DepositPaymentMethodHandToHands
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepositPaymentMethodHandToHands and only return the `id`
     * const depositPaymentMethodHandToHandWithIdOnly = await prisma.depositPaymentMethodHandToHand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositPaymentMethodHandToHandUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepositPaymentMethodHandToHand.
     * @param {DepositPaymentMethodHandToHandUpsertArgs} args - Arguments to update or create a DepositPaymentMethodHandToHand.
     * @example
     * // Update or create a DepositPaymentMethodHandToHand
     * const depositPaymentMethodHandToHand = await prisma.depositPaymentMethodHandToHand.upsert({
     *   create: {
     *     // ... data to create a DepositPaymentMethodHandToHand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositPaymentMethodHandToHand we want to update
     *   }
     * })
     */
    upsert<T extends DepositPaymentMethodHandToHandUpsertArgs>(args: SelectSubset<T, DepositPaymentMethodHandToHandUpsertArgs<ExtArgs>>): Prisma__DepositPaymentMethodHandToHandClient<$Result.GetResult<Prisma.$DepositPaymentMethodHandToHandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepositPaymentMethodHandToHands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandCountArgs} args - Arguments to filter DepositPaymentMethodHandToHands to count.
     * @example
     * // Count the number of DepositPaymentMethodHandToHands
     * const count = await prisma.depositPaymentMethodHandToHand.count({
     *   where: {
     *     // ... the filter for the DepositPaymentMethodHandToHands we want to count
     *   }
     * })
    **/
    count<T extends DepositPaymentMethodHandToHandCountArgs>(
      args?: Subset<T, DepositPaymentMethodHandToHandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositPaymentMethodHandToHandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositPaymentMethodHandToHand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositPaymentMethodHandToHandAggregateArgs>(args: Subset<T, DepositPaymentMethodHandToHandAggregateArgs>): Prisma.PrismaPromise<GetDepositPaymentMethodHandToHandAggregateType<T>>

    /**
     * Group by DepositPaymentMethodHandToHand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodHandToHandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositPaymentMethodHandToHandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositPaymentMethodHandToHandGroupByArgs['orderBy'] }
        : { orderBy?: DepositPaymentMethodHandToHandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositPaymentMethodHandToHandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositPaymentMethodHandToHandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositPaymentMethodHandToHand model
   */
  readonly fields: DepositPaymentMethodHandToHandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositPaymentMethodHandToHand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositPaymentMethodHandToHandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposit<T extends DepositDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepositDefaultArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositPaymentMethodHandToHand model
   */
  interface DepositPaymentMethodHandToHandFieldRefs {
    readonly id: FieldRef<"DepositPaymentMethodHandToHand", 'String'>
    readonly depositId: FieldRef<"DepositPaymentMethodHandToHand", 'String'>
    readonly reciverName: FieldRef<"DepositPaymentMethodHandToHand", 'String'>
    readonly date: FieldRef<"DepositPaymentMethodHandToHand", 'DateTime'>
    readonly time: FieldRef<"DepositPaymentMethodHandToHand", 'String'>
    readonly location: FieldRef<"DepositPaymentMethodHandToHand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepositPaymentMethodHandToHand findUnique
   */
  export type DepositPaymentMethodHandToHandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodHandToHand to fetch.
     */
    where: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  /**
   * DepositPaymentMethodHandToHand findUniqueOrThrow
   */
  export type DepositPaymentMethodHandToHandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodHandToHand to fetch.
     */
    where: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  /**
   * DepositPaymentMethodHandToHand findFirst
   */
  export type DepositPaymentMethodHandToHandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodHandToHand to fetch.
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodHandToHands to fetch.
     */
    orderBy?: DepositPaymentMethodHandToHandOrderByWithRelationInput | DepositPaymentMethodHandToHandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodHandToHands.
     */
    cursor?: DepositPaymentMethodHandToHandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodHandToHands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodHandToHands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodHandToHands.
     */
    distinct?: DepositPaymentMethodHandToHandScalarFieldEnum | DepositPaymentMethodHandToHandScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodHandToHand findFirstOrThrow
   */
  export type DepositPaymentMethodHandToHandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodHandToHand to fetch.
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodHandToHands to fetch.
     */
    orderBy?: DepositPaymentMethodHandToHandOrderByWithRelationInput | DepositPaymentMethodHandToHandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodHandToHands.
     */
    cursor?: DepositPaymentMethodHandToHandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodHandToHands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodHandToHands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodHandToHands.
     */
    distinct?: DepositPaymentMethodHandToHandScalarFieldEnum | DepositPaymentMethodHandToHandScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodHandToHand findMany
   */
  export type DepositPaymentMethodHandToHandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodHandToHands to fetch.
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodHandToHands to fetch.
     */
    orderBy?: DepositPaymentMethodHandToHandOrderByWithRelationInput | DepositPaymentMethodHandToHandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositPaymentMethodHandToHands.
     */
    cursor?: DepositPaymentMethodHandToHandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodHandToHands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodHandToHands.
     */
    skip?: number
    distinct?: DepositPaymentMethodHandToHandScalarFieldEnum | DepositPaymentMethodHandToHandScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodHandToHand create
   */
  export type DepositPaymentMethodHandToHandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * The data needed to create a DepositPaymentMethodHandToHand.
     */
    data: XOR<DepositPaymentMethodHandToHandCreateInput, DepositPaymentMethodHandToHandUncheckedCreateInput>
  }

  /**
   * DepositPaymentMethodHandToHand createMany
   */
  export type DepositPaymentMethodHandToHandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositPaymentMethodHandToHands.
     */
    data: DepositPaymentMethodHandToHandCreateManyInput | DepositPaymentMethodHandToHandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositPaymentMethodHandToHand createManyAndReturn
   */
  export type DepositPaymentMethodHandToHandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * The data used to create many DepositPaymentMethodHandToHands.
     */
    data: DepositPaymentMethodHandToHandCreateManyInput | DepositPaymentMethodHandToHandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodHandToHand update
   */
  export type DepositPaymentMethodHandToHandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * The data needed to update a DepositPaymentMethodHandToHand.
     */
    data: XOR<DepositPaymentMethodHandToHandUpdateInput, DepositPaymentMethodHandToHandUncheckedUpdateInput>
    /**
     * Choose, which DepositPaymentMethodHandToHand to update.
     */
    where: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  /**
   * DepositPaymentMethodHandToHand updateMany
   */
  export type DepositPaymentMethodHandToHandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositPaymentMethodHandToHands.
     */
    data: XOR<DepositPaymentMethodHandToHandUpdateManyMutationInput, DepositPaymentMethodHandToHandUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodHandToHands to update
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * Limit how many DepositPaymentMethodHandToHands to update.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodHandToHand updateManyAndReturn
   */
  export type DepositPaymentMethodHandToHandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * The data used to update DepositPaymentMethodHandToHands.
     */
    data: XOR<DepositPaymentMethodHandToHandUpdateManyMutationInput, DepositPaymentMethodHandToHandUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodHandToHands to update
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * Limit how many DepositPaymentMethodHandToHands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodHandToHand upsert
   */
  export type DepositPaymentMethodHandToHandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * The filter to search for the DepositPaymentMethodHandToHand to update in case it exists.
     */
    where: DepositPaymentMethodHandToHandWhereUniqueInput
    /**
     * In case the DepositPaymentMethodHandToHand found by the `where` argument doesn't exist, create a new DepositPaymentMethodHandToHand with this data.
     */
    create: XOR<DepositPaymentMethodHandToHandCreateInput, DepositPaymentMethodHandToHandUncheckedCreateInput>
    /**
     * In case the DepositPaymentMethodHandToHand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositPaymentMethodHandToHandUpdateInput, DepositPaymentMethodHandToHandUncheckedUpdateInput>
  }

  /**
   * DepositPaymentMethodHandToHand delete
   */
  export type DepositPaymentMethodHandToHandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
    /**
     * Filter which DepositPaymentMethodHandToHand to delete.
     */
    where: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  /**
   * DepositPaymentMethodHandToHand deleteMany
   */
  export type DepositPaymentMethodHandToHandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodHandToHands to delete
     */
    where?: DepositPaymentMethodHandToHandWhereInput
    /**
     * Limit how many DepositPaymentMethodHandToHands to delete.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodHandToHand without action
   */
  export type DepositPaymentMethodHandToHandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodHandToHand
     */
    select?: DepositPaymentMethodHandToHandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodHandToHand
     */
    omit?: DepositPaymentMethodHandToHandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodHandToHandInclude<ExtArgs> | null
  }


  /**
   * Model DepositPaymentMethodPhone
   */

  export type AggregateDepositPaymentMethodPhone = {
    _count: DepositPaymentMethodPhoneCountAggregateOutputType | null
    _avg: DepositPaymentMethodPhoneAvgAggregateOutputType | null
    _sum: DepositPaymentMethodPhoneSumAggregateOutputType | null
    _min: DepositPaymentMethodPhoneMinAggregateOutputType | null
    _max: DepositPaymentMethodPhoneMaxAggregateOutputType | null
  }

  export type DepositPaymentMethodPhoneAvgAggregateOutputType = {
    phoneNumber: number | null
  }

  export type DepositPaymentMethodPhoneSumAggregateOutputType = {
    phoneNumber: number | null
  }

  export type DepositPaymentMethodPhoneMinAggregateOutputType = {
    id: string | null
    depositId: string | null
    paymentMethodName: string | null
    phoneNumber: number | null
    transitionID: string | null
  }

  export type DepositPaymentMethodPhoneMaxAggregateOutputType = {
    id: string | null
    depositId: string | null
    paymentMethodName: string | null
    phoneNumber: number | null
    transitionID: string | null
  }

  export type DepositPaymentMethodPhoneCountAggregateOutputType = {
    id: number
    depositId: number
    paymentMethodName: number
    phoneNumber: number
    transitionID: number
    _all: number
  }


  export type DepositPaymentMethodPhoneAvgAggregateInputType = {
    phoneNumber?: true
  }

  export type DepositPaymentMethodPhoneSumAggregateInputType = {
    phoneNumber?: true
  }

  export type DepositPaymentMethodPhoneMinAggregateInputType = {
    id?: true
    depositId?: true
    paymentMethodName?: true
    phoneNumber?: true
    transitionID?: true
  }

  export type DepositPaymentMethodPhoneMaxAggregateInputType = {
    id?: true
    depositId?: true
    paymentMethodName?: true
    phoneNumber?: true
    transitionID?: true
  }

  export type DepositPaymentMethodPhoneCountAggregateInputType = {
    id?: true
    depositId?: true
    paymentMethodName?: true
    phoneNumber?: true
    transitionID?: true
    _all?: true
  }

  export type DepositPaymentMethodPhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodPhone to aggregate.
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodPhones to fetch.
     */
    orderBy?: DepositPaymentMethodPhoneOrderByWithRelationInput | DepositPaymentMethodPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositPaymentMethodPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositPaymentMethodPhones
    **/
    _count?: true | DepositPaymentMethodPhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositPaymentMethodPhoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositPaymentMethodPhoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositPaymentMethodPhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositPaymentMethodPhoneMaxAggregateInputType
  }

  export type GetDepositPaymentMethodPhoneAggregateType<T extends DepositPaymentMethodPhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositPaymentMethodPhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositPaymentMethodPhone[P]>
      : GetScalarType<T[P], AggregateDepositPaymentMethodPhone[P]>
  }




  export type DepositPaymentMethodPhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositPaymentMethodPhoneWhereInput
    orderBy?: DepositPaymentMethodPhoneOrderByWithAggregationInput | DepositPaymentMethodPhoneOrderByWithAggregationInput[]
    by: DepositPaymentMethodPhoneScalarFieldEnum[] | DepositPaymentMethodPhoneScalarFieldEnum
    having?: DepositPaymentMethodPhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositPaymentMethodPhoneCountAggregateInputType | true
    _avg?: DepositPaymentMethodPhoneAvgAggregateInputType
    _sum?: DepositPaymentMethodPhoneSumAggregateInputType
    _min?: DepositPaymentMethodPhoneMinAggregateInputType
    _max?: DepositPaymentMethodPhoneMaxAggregateInputType
  }

  export type DepositPaymentMethodPhoneGroupByOutputType = {
    id: string
    depositId: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
    _count: DepositPaymentMethodPhoneCountAggregateOutputType | null
    _avg: DepositPaymentMethodPhoneAvgAggregateOutputType | null
    _sum: DepositPaymentMethodPhoneSumAggregateOutputType | null
    _min: DepositPaymentMethodPhoneMinAggregateOutputType | null
    _max: DepositPaymentMethodPhoneMaxAggregateOutputType | null
  }

  type GetDepositPaymentMethodPhoneGroupByPayload<T extends DepositPaymentMethodPhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositPaymentMethodPhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositPaymentMethodPhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositPaymentMethodPhoneGroupByOutputType[P]>
            : GetScalarType<T[P], DepositPaymentMethodPhoneGroupByOutputType[P]>
        }
      >
    >


  export type DepositPaymentMethodPhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    paymentMethodName?: boolean
    phoneNumber?: boolean
    transitionID?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodPhone"]>

  export type DepositPaymentMethodPhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    paymentMethodName?: boolean
    phoneNumber?: boolean
    transitionID?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodPhone"]>

  export type DepositPaymentMethodPhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    paymentMethodName?: boolean
    phoneNumber?: boolean
    transitionID?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodPhone"]>

  export type DepositPaymentMethodPhoneSelectScalar = {
    id?: boolean
    depositId?: boolean
    paymentMethodName?: boolean
    phoneNumber?: boolean
    transitionID?: boolean
  }

  export type DepositPaymentMethodPhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositId" | "paymentMethodName" | "phoneNumber" | "transitionID", ExtArgs["result"]["depositPaymentMethodPhone"]>
  export type DepositPaymentMethodPhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodPhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodPhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }

  export type $DepositPaymentMethodPhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositPaymentMethodPhone"
    objects: {
      deposit: Prisma.$DepositPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      depositId: string
      paymentMethodName: string
      phoneNumber: number
      transitionID: string
    }, ExtArgs["result"]["depositPaymentMethodPhone"]>
    composites: {}
  }

  type DepositPaymentMethodPhoneGetPayload<S extends boolean | null | undefined | DepositPaymentMethodPhoneDefaultArgs> = $Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload, S>

  type DepositPaymentMethodPhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositPaymentMethodPhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositPaymentMethodPhoneCountAggregateInputType | true
    }

  export interface DepositPaymentMethodPhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositPaymentMethodPhone'], meta: { name: 'DepositPaymentMethodPhone' } }
    /**
     * Find zero or one DepositPaymentMethodPhone that matches the filter.
     * @param {DepositPaymentMethodPhoneFindUniqueArgs} args - Arguments to find a DepositPaymentMethodPhone
     * @example
     * // Get one DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositPaymentMethodPhoneFindUniqueArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneFindUniqueArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositPaymentMethodPhone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositPaymentMethodPhoneFindUniqueOrThrowArgs} args - Arguments to find a DepositPaymentMethodPhone
     * @example
     * // Get one DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositPaymentMethodPhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodPhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneFindFirstArgs} args - Arguments to find a DepositPaymentMethodPhone
     * @example
     * // Get one DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositPaymentMethodPhoneFindFirstArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneFindFirstArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodPhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneFindFirstOrThrowArgs} args - Arguments to find a DepositPaymentMethodPhone
     * @example
     * // Get one DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositPaymentMethodPhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositPaymentMethodPhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositPaymentMethodPhones
     * const depositPaymentMethodPhones = await prisma.depositPaymentMethodPhone.findMany()
     * 
     * // Get first 10 DepositPaymentMethodPhones
     * const depositPaymentMethodPhones = await prisma.depositPaymentMethodPhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositPaymentMethodPhoneWithIdOnly = await prisma.depositPaymentMethodPhone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositPaymentMethodPhoneFindManyArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositPaymentMethodPhone.
     * @param {DepositPaymentMethodPhoneCreateArgs} args - Arguments to create a DepositPaymentMethodPhone.
     * @example
     * // Create one DepositPaymentMethodPhone
     * const DepositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.create({
     *   data: {
     *     // ... data to create a DepositPaymentMethodPhone
     *   }
     * })
     * 
     */
    create<T extends DepositPaymentMethodPhoneCreateArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneCreateArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositPaymentMethodPhones.
     * @param {DepositPaymentMethodPhoneCreateManyArgs} args - Arguments to create many DepositPaymentMethodPhones.
     * @example
     * // Create many DepositPaymentMethodPhones
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositPaymentMethodPhoneCreateManyArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepositPaymentMethodPhones and returns the data saved in the database.
     * @param {DepositPaymentMethodPhoneCreateManyAndReturnArgs} args - Arguments to create many DepositPaymentMethodPhones.
     * @example
     * // Create many DepositPaymentMethodPhones
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepositPaymentMethodPhones and only return the `id`
     * const depositPaymentMethodPhoneWithIdOnly = await prisma.depositPaymentMethodPhone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositPaymentMethodPhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepositPaymentMethodPhone.
     * @param {DepositPaymentMethodPhoneDeleteArgs} args - Arguments to delete one DepositPaymentMethodPhone.
     * @example
     * // Delete one DepositPaymentMethodPhone
     * const DepositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.delete({
     *   where: {
     *     // ... filter to delete one DepositPaymentMethodPhone
     *   }
     * })
     * 
     */
    delete<T extends DepositPaymentMethodPhoneDeleteArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneDeleteArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositPaymentMethodPhone.
     * @param {DepositPaymentMethodPhoneUpdateArgs} args - Arguments to update one DepositPaymentMethodPhone.
     * @example
     * // Update one DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositPaymentMethodPhoneUpdateArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneUpdateArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositPaymentMethodPhones.
     * @param {DepositPaymentMethodPhoneDeleteManyArgs} args - Arguments to filter DepositPaymentMethodPhones to delete.
     * @example
     * // Delete a few DepositPaymentMethodPhones
     * const { count } = await prisma.depositPaymentMethodPhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositPaymentMethodPhoneDeleteManyArgs>(args?: SelectSubset<T, DepositPaymentMethodPhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositPaymentMethodPhones
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositPaymentMethodPhoneUpdateManyArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodPhones and returns the data updated in the database.
     * @param {DepositPaymentMethodPhoneUpdateManyAndReturnArgs} args - Arguments to update many DepositPaymentMethodPhones.
     * @example
     * // Update many DepositPaymentMethodPhones
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepositPaymentMethodPhones and only return the `id`
     * const depositPaymentMethodPhoneWithIdOnly = await prisma.depositPaymentMethodPhone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositPaymentMethodPhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepositPaymentMethodPhone.
     * @param {DepositPaymentMethodPhoneUpsertArgs} args - Arguments to update or create a DepositPaymentMethodPhone.
     * @example
     * // Update or create a DepositPaymentMethodPhone
     * const depositPaymentMethodPhone = await prisma.depositPaymentMethodPhone.upsert({
     *   create: {
     *     // ... data to create a DepositPaymentMethodPhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositPaymentMethodPhone we want to update
     *   }
     * })
     */
    upsert<T extends DepositPaymentMethodPhoneUpsertArgs>(args: SelectSubset<T, DepositPaymentMethodPhoneUpsertArgs<ExtArgs>>): Prisma__DepositPaymentMethodPhoneClient<$Result.GetResult<Prisma.$DepositPaymentMethodPhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepositPaymentMethodPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneCountArgs} args - Arguments to filter DepositPaymentMethodPhones to count.
     * @example
     * // Count the number of DepositPaymentMethodPhones
     * const count = await prisma.depositPaymentMethodPhone.count({
     *   where: {
     *     // ... the filter for the DepositPaymentMethodPhones we want to count
     *   }
     * })
    **/
    count<T extends DepositPaymentMethodPhoneCountArgs>(
      args?: Subset<T, DepositPaymentMethodPhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositPaymentMethodPhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositPaymentMethodPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositPaymentMethodPhoneAggregateArgs>(args: Subset<T, DepositPaymentMethodPhoneAggregateArgs>): Prisma.PrismaPromise<GetDepositPaymentMethodPhoneAggregateType<T>>

    /**
     * Group by DepositPaymentMethodPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodPhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositPaymentMethodPhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositPaymentMethodPhoneGroupByArgs['orderBy'] }
        : { orderBy?: DepositPaymentMethodPhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositPaymentMethodPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositPaymentMethodPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositPaymentMethodPhone model
   */
  readonly fields: DepositPaymentMethodPhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositPaymentMethodPhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositPaymentMethodPhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposit<T extends DepositDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepositDefaultArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositPaymentMethodPhone model
   */
  interface DepositPaymentMethodPhoneFieldRefs {
    readonly id: FieldRef<"DepositPaymentMethodPhone", 'String'>
    readonly depositId: FieldRef<"DepositPaymentMethodPhone", 'String'>
    readonly paymentMethodName: FieldRef<"DepositPaymentMethodPhone", 'String'>
    readonly phoneNumber: FieldRef<"DepositPaymentMethodPhone", 'Int'>
    readonly transitionID: FieldRef<"DepositPaymentMethodPhone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepositPaymentMethodPhone findUnique
   */
  export type DepositPaymentMethodPhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodPhone to fetch.
     */
    where: DepositPaymentMethodPhoneWhereUniqueInput
  }

  /**
   * DepositPaymentMethodPhone findUniqueOrThrow
   */
  export type DepositPaymentMethodPhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodPhone to fetch.
     */
    where: DepositPaymentMethodPhoneWhereUniqueInput
  }

  /**
   * DepositPaymentMethodPhone findFirst
   */
  export type DepositPaymentMethodPhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodPhone to fetch.
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodPhones to fetch.
     */
    orderBy?: DepositPaymentMethodPhoneOrderByWithRelationInput | DepositPaymentMethodPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodPhones.
     */
    cursor?: DepositPaymentMethodPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodPhones.
     */
    distinct?: DepositPaymentMethodPhoneScalarFieldEnum | DepositPaymentMethodPhoneScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodPhone findFirstOrThrow
   */
  export type DepositPaymentMethodPhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodPhone to fetch.
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodPhones to fetch.
     */
    orderBy?: DepositPaymentMethodPhoneOrderByWithRelationInput | DepositPaymentMethodPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodPhones.
     */
    cursor?: DepositPaymentMethodPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodPhones.
     */
    distinct?: DepositPaymentMethodPhoneScalarFieldEnum | DepositPaymentMethodPhoneScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodPhone findMany
   */
  export type DepositPaymentMethodPhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodPhones to fetch.
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodPhones to fetch.
     */
    orderBy?: DepositPaymentMethodPhoneOrderByWithRelationInput | DepositPaymentMethodPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositPaymentMethodPhones.
     */
    cursor?: DepositPaymentMethodPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodPhones.
     */
    skip?: number
    distinct?: DepositPaymentMethodPhoneScalarFieldEnum | DepositPaymentMethodPhoneScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodPhone create
   */
  export type DepositPaymentMethodPhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a DepositPaymentMethodPhone.
     */
    data: XOR<DepositPaymentMethodPhoneCreateInput, DepositPaymentMethodPhoneUncheckedCreateInput>
  }

  /**
   * DepositPaymentMethodPhone createMany
   */
  export type DepositPaymentMethodPhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositPaymentMethodPhones.
     */
    data: DepositPaymentMethodPhoneCreateManyInput | DepositPaymentMethodPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositPaymentMethodPhone createManyAndReturn
   */
  export type DepositPaymentMethodPhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * The data used to create many DepositPaymentMethodPhones.
     */
    data: DepositPaymentMethodPhoneCreateManyInput | DepositPaymentMethodPhoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodPhone update
   */
  export type DepositPaymentMethodPhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a DepositPaymentMethodPhone.
     */
    data: XOR<DepositPaymentMethodPhoneUpdateInput, DepositPaymentMethodPhoneUncheckedUpdateInput>
    /**
     * Choose, which DepositPaymentMethodPhone to update.
     */
    where: DepositPaymentMethodPhoneWhereUniqueInput
  }

  /**
   * DepositPaymentMethodPhone updateMany
   */
  export type DepositPaymentMethodPhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositPaymentMethodPhones.
     */
    data: XOR<DepositPaymentMethodPhoneUpdateManyMutationInput, DepositPaymentMethodPhoneUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodPhones to update
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * Limit how many DepositPaymentMethodPhones to update.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodPhone updateManyAndReturn
   */
  export type DepositPaymentMethodPhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * The data used to update DepositPaymentMethodPhones.
     */
    data: XOR<DepositPaymentMethodPhoneUpdateManyMutationInput, DepositPaymentMethodPhoneUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodPhones to update
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * Limit how many DepositPaymentMethodPhones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodPhone upsert
   */
  export type DepositPaymentMethodPhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the DepositPaymentMethodPhone to update in case it exists.
     */
    where: DepositPaymentMethodPhoneWhereUniqueInput
    /**
     * In case the DepositPaymentMethodPhone found by the `where` argument doesn't exist, create a new DepositPaymentMethodPhone with this data.
     */
    create: XOR<DepositPaymentMethodPhoneCreateInput, DepositPaymentMethodPhoneUncheckedCreateInput>
    /**
     * In case the DepositPaymentMethodPhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositPaymentMethodPhoneUpdateInput, DepositPaymentMethodPhoneUncheckedUpdateInput>
  }

  /**
   * DepositPaymentMethodPhone delete
   */
  export type DepositPaymentMethodPhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
    /**
     * Filter which DepositPaymentMethodPhone to delete.
     */
    where: DepositPaymentMethodPhoneWhereUniqueInput
  }

  /**
   * DepositPaymentMethodPhone deleteMany
   */
  export type DepositPaymentMethodPhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodPhones to delete
     */
    where?: DepositPaymentMethodPhoneWhereInput
    /**
     * Limit how many DepositPaymentMethodPhones to delete.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodPhone without action
   */
  export type DepositPaymentMethodPhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodPhone
     */
    select?: DepositPaymentMethodPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodPhone
     */
    omit?: DepositPaymentMethodPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodPhoneInclude<ExtArgs> | null
  }


  /**
   * Model DepositPaymentMethodBank
   */

  export type AggregateDepositPaymentMethodBank = {
    _count: DepositPaymentMethodBankCountAggregateOutputType | null
    _min: DepositPaymentMethodBankMinAggregateOutputType | null
    _max: DepositPaymentMethodBankMaxAggregateOutputType | null
  }

  export type DepositPaymentMethodBankMinAggregateOutputType = {
    id: string | null
    depositId: string | null
    bankACNumber: string | null
    bankHolderName: string | null
  }

  export type DepositPaymentMethodBankMaxAggregateOutputType = {
    id: string | null
    depositId: string | null
    bankACNumber: string | null
    bankHolderName: string | null
  }

  export type DepositPaymentMethodBankCountAggregateOutputType = {
    id: number
    depositId: number
    bankACNumber: number
    bankHolderName: number
    _all: number
  }


  export type DepositPaymentMethodBankMinAggregateInputType = {
    id?: true
    depositId?: true
    bankACNumber?: true
    bankHolderName?: true
  }

  export type DepositPaymentMethodBankMaxAggregateInputType = {
    id?: true
    depositId?: true
    bankACNumber?: true
    bankHolderName?: true
  }

  export type DepositPaymentMethodBankCountAggregateInputType = {
    id?: true
    depositId?: true
    bankACNumber?: true
    bankHolderName?: true
    _all?: true
  }

  export type DepositPaymentMethodBankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodBank to aggregate.
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodBanks to fetch.
     */
    orderBy?: DepositPaymentMethodBankOrderByWithRelationInput | DepositPaymentMethodBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositPaymentMethodBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepositPaymentMethodBanks
    **/
    _count?: true | DepositPaymentMethodBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositPaymentMethodBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositPaymentMethodBankMaxAggregateInputType
  }

  export type GetDepositPaymentMethodBankAggregateType<T extends DepositPaymentMethodBankAggregateArgs> = {
        [P in keyof T & keyof AggregateDepositPaymentMethodBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepositPaymentMethodBank[P]>
      : GetScalarType<T[P], AggregateDepositPaymentMethodBank[P]>
  }




  export type DepositPaymentMethodBankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositPaymentMethodBankWhereInput
    orderBy?: DepositPaymentMethodBankOrderByWithAggregationInput | DepositPaymentMethodBankOrderByWithAggregationInput[]
    by: DepositPaymentMethodBankScalarFieldEnum[] | DepositPaymentMethodBankScalarFieldEnum
    having?: DepositPaymentMethodBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositPaymentMethodBankCountAggregateInputType | true
    _min?: DepositPaymentMethodBankMinAggregateInputType
    _max?: DepositPaymentMethodBankMaxAggregateInputType
  }

  export type DepositPaymentMethodBankGroupByOutputType = {
    id: string
    depositId: string
    bankACNumber: string
    bankHolderName: string
    _count: DepositPaymentMethodBankCountAggregateOutputType | null
    _min: DepositPaymentMethodBankMinAggregateOutputType | null
    _max: DepositPaymentMethodBankMaxAggregateOutputType | null
  }

  type GetDepositPaymentMethodBankGroupByPayload<T extends DepositPaymentMethodBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositPaymentMethodBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositPaymentMethodBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositPaymentMethodBankGroupByOutputType[P]>
            : GetScalarType<T[P], DepositPaymentMethodBankGroupByOutputType[P]>
        }
      >
    >


  export type DepositPaymentMethodBankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    bankACNumber?: boolean
    bankHolderName?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodBank"]>

  export type DepositPaymentMethodBankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    bankACNumber?: boolean
    bankHolderName?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodBank"]>

  export type DepositPaymentMethodBankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositId?: boolean
    bankACNumber?: boolean
    bankHolderName?: boolean
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depositPaymentMethodBank"]>

  export type DepositPaymentMethodBankSelectScalar = {
    id?: boolean
    depositId?: boolean
    bankACNumber?: boolean
    bankHolderName?: boolean
  }

  export type DepositPaymentMethodBankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositId" | "bankACNumber" | "bankHolderName", ExtArgs["result"]["depositPaymentMethodBank"]>
  export type DepositPaymentMethodBankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodBankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }
  export type DepositPaymentMethodBankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | DepositDefaultArgs<ExtArgs>
  }

  export type $DepositPaymentMethodBankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepositPaymentMethodBank"
    objects: {
      deposit: Prisma.$DepositPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      depositId: string
      bankACNumber: string
      bankHolderName: string
    }, ExtArgs["result"]["depositPaymentMethodBank"]>
    composites: {}
  }

  type DepositPaymentMethodBankGetPayload<S extends boolean | null | undefined | DepositPaymentMethodBankDefaultArgs> = $Result.GetResult<Prisma.$DepositPaymentMethodBankPayload, S>

  type DepositPaymentMethodBankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositPaymentMethodBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositPaymentMethodBankCountAggregateInputType | true
    }

  export interface DepositPaymentMethodBankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepositPaymentMethodBank'], meta: { name: 'DepositPaymentMethodBank' } }
    /**
     * Find zero or one DepositPaymentMethodBank that matches the filter.
     * @param {DepositPaymentMethodBankFindUniqueArgs} args - Arguments to find a DepositPaymentMethodBank
     * @example
     * // Get one DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositPaymentMethodBankFindUniqueArgs>(args: SelectSubset<T, DepositPaymentMethodBankFindUniqueArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepositPaymentMethodBank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositPaymentMethodBankFindUniqueOrThrowArgs} args - Arguments to find a DepositPaymentMethodBank
     * @example
     * // Get one DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositPaymentMethodBankFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositPaymentMethodBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankFindFirstArgs} args - Arguments to find a DepositPaymentMethodBank
     * @example
     * // Get one DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositPaymentMethodBankFindFirstArgs>(args?: SelectSubset<T, DepositPaymentMethodBankFindFirstArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepositPaymentMethodBank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankFindFirstOrThrowArgs} args - Arguments to find a DepositPaymentMethodBank
     * @example
     * // Get one DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositPaymentMethodBankFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositPaymentMethodBankFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepositPaymentMethodBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepositPaymentMethodBanks
     * const depositPaymentMethodBanks = await prisma.depositPaymentMethodBank.findMany()
     * 
     * // Get first 10 DepositPaymentMethodBanks
     * const depositPaymentMethodBanks = await prisma.depositPaymentMethodBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositPaymentMethodBankWithIdOnly = await prisma.depositPaymentMethodBank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositPaymentMethodBankFindManyArgs>(args?: SelectSubset<T, DepositPaymentMethodBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepositPaymentMethodBank.
     * @param {DepositPaymentMethodBankCreateArgs} args - Arguments to create a DepositPaymentMethodBank.
     * @example
     * // Create one DepositPaymentMethodBank
     * const DepositPaymentMethodBank = await prisma.depositPaymentMethodBank.create({
     *   data: {
     *     // ... data to create a DepositPaymentMethodBank
     *   }
     * })
     * 
     */
    create<T extends DepositPaymentMethodBankCreateArgs>(args: SelectSubset<T, DepositPaymentMethodBankCreateArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepositPaymentMethodBanks.
     * @param {DepositPaymentMethodBankCreateManyArgs} args - Arguments to create many DepositPaymentMethodBanks.
     * @example
     * // Create many DepositPaymentMethodBanks
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositPaymentMethodBankCreateManyArgs>(args?: SelectSubset<T, DepositPaymentMethodBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepositPaymentMethodBanks and returns the data saved in the database.
     * @param {DepositPaymentMethodBankCreateManyAndReturnArgs} args - Arguments to create many DepositPaymentMethodBanks.
     * @example
     * // Create many DepositPaymentMethodBanks
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepositPaymentMethodBanks and only return the `id`
     * const depositPaymentMethodBankWithIdOnly = await prisma.depositPaymentMethodBank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositPaymentMethodBankCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositPaymentMethodBankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepositPaymentMethodBank.
     * @param {DepositPaymentMethodBankDeleteArgs} args - Arguments to delete one DepositPaymentMethodBank.
     * @example
     * // Delete one DepositPaymentMethodBank
     * const DepositPaymentMethodBank = await prisma.depositPaymentMethodBank.delete({
     *   where: {
     *     // ... filter to delete one DepositPaymentMethodBank
     *   }
     * })
     * 
     */
    delete<T extends DepositPaymentMethodBankDeleteArgs>(args: SelectSubset<T, DepositPaymentMethodBankDeleteArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepositPaymentMethodBank.
     * @param {DepositPaymentMethodBankUpdateArgs} args - Arguments to update one DepositPaymentMethodBank.
     * @example
     * // Update one DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositPaymentMethodBankUpdateArgs>(args: SelectSubset<T, DepositPaymentMethodBankUpdateArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepositPaymentMethodBanks.
     * @param {DepositPaymentMethodBankDeleteManyArgs} args - Arguments to filter DepositPaymentMethodBanks to delete.
     * @example
     * // Delete a few DepositPaymentMethodBanks
     * const { count } = await prisma.depositPaymentMethodBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositPaymentMethodBankDeleteManyArgs>(args?: SelectSubset<T, DepositPaymentMethodBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepositPaymentMethodBanks
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositPaymentMethodBankUpdateManyArgs>(args: SelectSubset<T, DepositPaymentMethodBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepositPaymentMethodBanks and returns the data updated in the database.
     * @param {DepositPaymentMethodBankUpdateManyAndReturnArgs} args - Arguments to update many DepositPaymentMethodBanks.
     * @example
     * // Update many DepositPaymentMethodBanks
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepositPaymentMethodBanks and only return the `id`
     * const depositPaymentMethodBankWithIdOnly = await prisma.depositPaymentMethodBank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositPaymentMethodBankUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositPaymentMethodBankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepositPaymentMethodBank.
     * @param {DepositPaymentMethodBankUpsertArgs} args - Arguments to update or create a DepositPaymentMethodBank.
     * @example
     * // Update or create a DepositPaymentMethodBank
     * const depositPaymentMethodBank = await prisma.depositPaymentMethodBank.upsert({
     *   create: {
     *     // ... data to create a DepositPaymentMethodBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepositPaymentMethodBank we want to update
     *   }
     * })
     */
    upsert<T extends DepositPaymentMethodBankUpsertArgs>(args: SelectSubset<T, DepositPaymentMethodBankUpsertArgs<ExtArgs>>): Prisma__DepositPaymentMethodBankClient<$Result.GetResult<Prisma.$DepositPaymentMethodBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepositPaymentMethodBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankCountArgs} args - Arguments to filter DepositPaymentMethodBanks to count.
     * @example
     * // Count the number of DepositPaymentMethodBanks
     * const count = await prisma.depositPaymentMethodBank.count({
     *   where: {
     *     // ... the filter for the DepositPaymentMethodBanks we want to count
     *   }
     * })
    **/
    count<T extends DepositPaymentMethodBankCountArgs>(
      args?: Subset<T, DepositPaymentMethodBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositPaymentMethodBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepositPaymentMethodBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositPaymentMethodBankAggregateArgs>(args: Subset<T, DepositPaymentMethodBankAggregateArgs>): Prisma.PrismaPromise<GetDepositPaymentMethodBankAggregateType<T>>

    /**
     * Group by DepositPaymentMethodBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositPaymentMethodBankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositPaymentMethodBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositPaymentMethodBankGroupByArgs['orderBy'] }
        : { orderBy?: DepositPaymentMethodBankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositPaymentMethodBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositPaymentMethodBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepositPaymentMethodBank model
   */
  readonly fields: DepositPaymentMethodBankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepositPaymentMethodBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositPaymentMethodBankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposit<T extends DepositDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepositDefaultArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepositPaymentMethodBank model
   */
  interface DepositPaymentMethodBankFieldRefs {
    readonly id: FieldRef<"DepositPaymentMethodBank", 'String'>
    readonly depositId: FieldRef<"DepositPaymentMethodBank", 'String'>
    readonly bankACNumber: FieldRef<"DepositPaymentMethodBank", 'String'>
    readonly bankHolderName: FieldRef<"DepositPaymentMethodBank", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepositPaymentMethodBank findUnique
   */
  export type DepositPaymentMethodBankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodBank to fetch.
     */
    where: DepositPaymentMethodBankWhereUniqueInput
  }

  /**
   * DepositPaymentMethodBank findUniqueOrThrow
   */
  export type DepositPaymentMethodBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodBank to fetch.
     */
    where: DepositPaymentMethodBankWhereUniqueInput
  }

  /**
   * DepositPaymentMethodBank findFirst
   */
  export type DepositPaymentMethodBankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodBank to fetch.
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodBanks to fetch.
     */
    orderBy?: DepositPaymentMethodBankOrderByWithRelationInput | DepositPaymentMethodBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodBanks.
     */
    cursor?: DepositPaymentMethodBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodBanks.
     */
    distinct?: DepositPaymentMethodBankScalarFieldEnum | DepositPaymentMethodBankScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodBank findFirstOrThrow
   */
  export type DepositPaymentMethodBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodBank to fetch.
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodBanks to fetch.
     */
    orderBy?: DepositPaymentMethodBankOrderByWithRelationInput | DepositPaymentMethodBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepositPaymentMethodBanks.
     */
    cursor?: DepositPaymentMethodBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepositPaymentMethodBanks.
     */
    distinct?: DepositPaymentMethodBankScalarFieldEnum | DepositPaymentMethodBankScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodBank findMany
   */
  export type DepositPaymentMethodBankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter, which DepositPaymentMethodBanks to fetch.
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepositPaymentMethodBanks to fetch.
     */
    orderBy?: DepositPaymentMethodBankOrderByWithRelationInput | DepositPaymentMethodBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepositPaymentMethodBanks.
     */
    cursor?: DepositPaymentMethodBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepositPaymentMethodBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepositPaymentMethodBanks.
     */
    skip?: number
    distinct?: DepositPaymentMethodBankScalarFieldEnum | DepositPaymentMethodBankScalarFieldEnum[]
  }

  /**
   * DepositPaymentMethodBank create
   */
  export type DepositPaymentMethodBankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * The data needed to create a DepositPaymentMethodBank.
     */
    data: XOR<DepositPaymentMethodBankCreateInput, DepositPaymentMethodBankUncheckedCreateInput>
  }

  /**
   * DepositPaymentMethodBank createMany
   */
  export type DepositPaymentMethodBankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepositPaymentMethodBanks.
     */
    data: DepositPaymentMethodBankCreateManyInput | DepositPaymentMethodBankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepositPaymentMethodBank createManyAndReturn
   */
  export type DepositPaymentMethodBankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * The data used to create many DepositPaymentMethodBanks.
     */
    data: DepositPaymentMethodBankCreateManyInput | DepositPaymentMethodBankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodBank update
   */
  export type DepositPaymentMethodBankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * The data needed to update a DepositPaymentMethodBank.
     */
    data: XOR<DepositPaymentMethodBankUpdateInput, DepositPaymentMethodBankUncheckedUpdateInput>
    /**
     * Choose, which DepositPaymentMethodBank to update.
     */
    where: DepositPaymentMethodBankWhereUniqueInput
  }

  /**
   * DepositPaymentMethodBank updateMany
   */
  export type DepositPaymentMethodBankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepositPaymentMethodBanks.
     */
    data: XOR<DepositPaymentMethodBankUpdateManyMutationInput, DepositPaymentMethodBankUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodBanks to update
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * Limit how many DepositPaymentMethodBanks to update.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodBank updateManyAndReturn
   */
  export type DepositPaymentMethodBankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * The data used to update DepositPaymentMethodBanks.
     */
    data: XOR<DepositPaymentMethodBankUpdateManyMutationInput, DepositPaymentMethodBankUncheckedUpdateManyInput>
    /**
     * Filter which DepositPaymentMethodBanks to update
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * Limit how many DepositPaymentMethodBanks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepositPaymentMethodBank upsert
   */
  export type DepositPaymentMethodBankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * The filter to search for the DepositPaymentMethodBank to update in case it exists.
     */
    where: DepositPaymentMethodBankWhereUniqueInput
    /**
     * In case the DepositPaymentMethodBank found by the `where` argument doesn't exist, create a new DepositPaymentMethodBank with this data.
     */
    create: XOR<DepositPaymentMethodBankCreateInput, DepositPaymentMethodBankUncheckedCreateInput>
    /**
     * In case the DepositPaymentMethodBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositPaymentMethodBankUpdateInput, DepositPaymentMethodBankUncheckedUpdateInput>
  }

  /**
   * DepositPaymentMethodBank delete
   */
  export type DepositPaymentMethodBankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
    /**
     * Filter which DepositPaymentMethodBank to delete.
     */
    where: DepositPaymentMethodBankWhereUniqueInput
  }

  /**
   * DepositPaymentMethodBank deleteMany
   */
  export type DepositPaymentMethodBankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepositPaymentMethodBanks to delete
     */
    where?: DepositPaymentMethodBankWhereInput
    /**
     * Limit how many DepositPaymentMethodBanks to delete.
     */
    limit?: number
  }

  /**
   * DepositPaymentMethodBank without action
   */
  export type DepositPaymentMethodBankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositPaymentMethodBank
     */
    select?: DepositPaymentMethodBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepositPaymentMethodBank
     */
    omit?: DepositPaymentMethodBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositPaymentMethodBankInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonalInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fatherName: 'fatherName',
    motherName: 'motherName',
    address: 'address',
    occupation: 'occupation',
    email: 'email',
    phone: 'phone',
    memberId: 'memberId',
    nid: 'nid',
    status: 'status',
    joingDate: 'joingDate',
    refarenceName: 'refarenceName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonalInfoScalarFieldEnum = (typeof PersonalInfoScalarFieldEnum)[keyof typeof PersonalInfoScalarFieldEnum]


  export const PersonalInfoStatesScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    totalDeposit: 'totalDeposit',
    montlyDeposit: 'montlyDeposit',
    totalMonthDeposit: 'totalMonthDeposit',
    totalPenalties: 'totalPenalties',
    totalPenaltiesMonth: 'totalPenaltiesMonth',
    registrationFee: 'registrationFee',
    paymentMethod: 'paymentMethod',
    paymentStreak: 'paymentStreak'
  };

  export type PersonalInfoStatesScalarFieldEnum = (typeof PersonalInfoStatesScalarFieldEnum)[keyof typeof PersonalInfoStatesScalarFieldEnum]


  export const CredentialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    memberId: 'memberId',
    password: 'password',
    role: 'role',
    updatedAt: 'updatedAt'
  };

  export type CredentialsScalarFieldEnum = (typeof CredentialsScalarFieldEnum)[keyof typeof CredentialsScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    monthlyDepositAmount: 'monthlyDepositAmount',
    month: 'month',
    referenceName: 'referenceName',
    paymentProof: 'paymentProof',
    status: 'status',
    penalty: 'penalty'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const DepositPaymentMethodHandToHandScalarFieldEnum: {
    id: 'id',
    depositId: 'depositId',
    reciverName: 'reciverName',
    date: 'date',
    time: 'time',
    location: 'location'
  };

  export type DepositPaymentMethodHandToHandScalarFieldEnum = (typeof DepositPaymentMethodHandToHandScalarFieldEnum)[keyof typeof DepositPaymentMethodHandToHandScalarFieldEnum]


  export const DepositPaymentMethodPhoneScalarFieldEnum: {
    id: 'id',
    depositId: 'depositId',
    paymentMethodName: 'paymentMethodName',
    phoneNumber: 'phoneNumber',
    transitionID: 'transitionID'
  };

  export type DepositPaymentMethodPhoneScalarFieldEnum = (typeof DepositPaymentMethodPhoneScalarFieldEnum)[keyof typeof DepositPaymentMethodPhoneScalarFieldEnum]


  export const DepositPaymentMethodBankScalarFieldEnum: {
    id: 'id',
    depositId: 'depositId',
    bankACNumber: 'bankACNumber',
    bankHolderName: 'bankHolderName'
  };

  export type DepositPaymentMethodBankScalarFieldEnum = (typeof DepositPaymentMethodBankScalarFieldEnum)[keyof typeof DepositPaymentMethodBankScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonalInfoWhereInput = {
    AND?: PersonalInfoWhereInput | PersonalInfoWhereInput[]
    OR?: PersonalInfoWhereInput[]
    NOT?: PersonalInfoWhereInput | PersonalInfoWhereInput[]
    id?: StringFilter<"PersonalInfo"> | string
    name?: StringFilter<"PersonalInfo"> | string
    fatherName?: StringFilter<"PersonalInfo"> | string
    motherName?: StringFilter<"PersonalInfo"> | string
    address?: StringFilter<"PersonalInfo"> | string
    occupation?: StringFilter<"PersonalInfo"> | string
    email?: StringFilter<"PersonalInfo"> | string
    phone?: IntFilter<"PersonalInfo"> | number
    memberId?: IntFilter<"PersonalInfo"> | number
    nid?: IntFilter<"PersonalInfo"> | number
    status?: EnumStatusFilter<"PersonalInfo"> | $Enums.Status
    joingDate?: DateTimeFilter<"PersonalInfo"> | Date | string
    refarenceName?: StringFilter<"PersonalInfo"> | string
    createdAt?: DateTimeFilter<"PersonalInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalInfo"> | Date | string
    personalInfoStates?: XOR<PersonalInfoStatesNullableScalarRelationFilter, PersonalInfoStatesWhereInput> | null
    credentials?: XOR<CredentialsScalarRelationFilter, CredentialsWhereInput>
  }

  export type PersonalInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
    status?: SortOrder
    joingDate?: SortOrder
    refarenceName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personalInfoStates?: PersonalInfoStatesOrderByWithRelationInput
    credentials?: CredentialsOrderByWithRelationInput
  }

  export type PersonalInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: number
    nid?: number
    AND?: PersonalInfoWhereInput | PersonalInfoWhereInput[]
    OR?: PersonalInfoWhereInput[]
    NOT?: PersonalInfoWhereInput | PersonalInfoWhereInput[]
    name?: StringFilter<"PersonalInfo"> | string
    fatherName?: StringFilter<"PersonalInfo"> | string
    motherName?: StringFilter<"PersonalInfo"> | string
    address?: StringFilter<"PersonalInfo"> | string
    occupation?: StringFilter<"PersonalInfo"> | string
    email?: StringFilter<"PersonalInfo"> | string
    phone?: IntFilter<"PersonalInfo"> | number
    status?: EnumStatusFilter<"PersonalInfo"> | $Enums.Status
    joingDate?: DateTimeFilter<"PersonalInfo"> | Date | string
    refarenceName?: StringFilter<"PersonalInfo"> | string
    createdAt?: DateTimeFilter<"PersonalInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalInfo"> | Date | string
    personalInfoStates?: XOR<PersonalInfoStatesNullableScalarRelationFilter, PersonalInfoStatesWhereInput> | null
    credentials?: XOR<CredentialsScalarRelationFilter, CredentialsWhereInput>
  }, "id" | "memberId" | "nid">

  export type PersonalInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
    status?: SortOrder
    joingDate?: SortOrder
    refarenceName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonalInfoCountOrderByAggregateInput
    _avg?: PersonalInfoAvgOrderByAggregateInput
    _max?: PersonalInfoMaxOrderByAggregateInput
    _min?: PersonalInfoMinOrderByAggregateInput
    _sum?: PersonalInfoSumOrderByAggregateInput
  }

  export type PersonalInfoScalarWhereWithAggregatesInput = {
    AND?: PersonalInfoScalarWhereWithAggregatesInput | PersonalInfoScalarWhereWithAggregatesInput[]
    OR?: PersonalInfoScalarWhereWithAggregatesInput[]
    NOT?: PersonalInfoScalarWhereWithAggregatesInput | PersonalInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalInfo"> | string
    name?: StringWithAggregatesFilter<"PersonalInfo"> | string
    fatherName?: StringWithAggregatesFilter<"PersonalInfo"> | string
    motherName?: StringWithAggregatesFilter<"PersonalInfo"> | string
    address?: StringWithAggregatesFilter<"PersonalInfo"> | string
    occupation?: StringWithAggregatesFilter<"PersonalInfo"> | string
    email?: StringWithAggregatesFilter<"PersonalInfo"> | string
    phone?: IntWithAggregatesFilter<"PersonalInfo"> | number
    memberId?: IntWithAggregatesFilter<"PersonalInfo"> | number
    nid?: IntWithAggregatesFilter<"PersonalInfo"> | number
    status?: EnumStatusWithAggregatesFilter<"PersonalInfo"> | $Enums.Status
    joingDate?: DateTimeWithAggregatesFilter<"PersonalInfo"> | Date | string
    refarenceName?: StringWithAggregatesFilter<"PersonalInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PersonalInfo"> | Date | string
  }

  export type PersonalInfoStatesWhereInput = {
    AND?: PersonalInfoStatesWhereInput | PersonalInfoStatesWhereInput[]
    OR?: PersonalInfoStatesWhereInput[]
    NOT?: PersonalInfoStatesWhereInput | PersonalInfoStatesWhereInput[]
    id?: StringFilter<"PersonalInfoStates"> | string
    memberId?: IntFilter<"PersonalInfoStates"> | number
    totalDeposit?: IntFilter<"PersonalInfoStates"> | number
    montlyDeposit?: IntFilter<"PersonalInfoStates"> | number
    totalMonthDeposit?: IntFilter<"PersonalInfoStates"> | number
    totalPenalties?: IntFilter<"PersonalInfoStates"> | number
    totalPenaltiesMonth?: IntFilter<"PersonalInfoStates"> | number
    registrationFee?: IntFilter<"PersonalInfoStates"> | number
    paymentMethod?: StringFilter<"PersonalInfoStates"> | string
    paymentStreak?: IntFilter<"PersonalInfoStates"> | number
    personalInfo?: XOR<PersonalInfoScalarRelationFilter, PersonalInfoWhereInput>
  }

  export type PersonalInfoStatesOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentMethod?: SortOrder
    paymentStreak?: SortOrder
    personalInfo?: PersonalInfoOrderByWithRelationInput
  }

  export type PersonalInfoStatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: number
    AND?: PersonalInfoStatesWhereInput | PersonalInfoStatesWhereInput[]
    OR?: PersonalInfoStatesWhereInput[]
    NOT?: PersonalInfoStatesWhereInput | PersonalInfoStatesWhereInput[]
    totalDeposit?: IntFilter<"PersonalInfoStates"> | number
    montlyDeposit?: IntFilter<"PersonalInfoStates"> | number
    totalMonthDeposit?: IntFilter<"PersonalInfoStates"> | number
    totalPenalties?: IntFilter<"PersonalInfoStates"> | number
    totalPenaltiesMonth?: IntFilter<"PersonalInfoStates"> | number
    registrationFee?: IntFilter<"PersonalInfoStates"> | number
    paymentMethod?: StringFilter<"PersonalInfoStates"> | string
    paymentStreak?: IntFilter<"PersonalInfoStates"> | number
    personalInfo?: XOR<PersonalInfoScalarRelationFilter, PersonalInfoWhereInput>
  }, "id" | "memberId">

  export type PersonalInfoStatesOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentMethod?: SortOrder
    paymentStreak?: SortOrder
    _count?: PersonalInfoStatesCountOrderByAggregateInput
    _avg?: PersonalInfoStatesAvgOrderByAggregateInput
    _max?: PersonalInfoStatesMaxOrderByAggregateInput
    _min?: PersonalInfoStatesMinOrderByAggregateInput
    _sum?: PersonalInfoStatesSumOrderByAggregateInput
  }

  export type PersonalInfoStatesScalarWhereWithAggregatesInput = {
    AND?: PersonalInfoStatesScalarWhereWithAggregatesInput | PersonalInfoStatesScalarWhereWithAggregatesInput[]
    OR?: PersonalInfoStatesScalarWhereWithAggregatesInput[]
    NOT?: PersonalInfoStatesScalarWhereWithAggregatesInput | PersonalInfoStatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalInfoStates"> | string
    memberId?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    totalDeposit?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    montlyDeposit?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    totalMonthDeposit?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    totalPenalties?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    totalPenaltiesMonth?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    registrationFee?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
    paymentMethod?: StringWithAggregatesFilter<"PersonalInfoStates"> | string
    paymentStreak?: IntWithAggregatesFilter<"PersonalInfoStates"> | number
  }

  export type CredentialsWhereInput = {
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    id?: StringFilter<"Credentials"> | string
    name?: StringFilter<"Credentials"> | string
    email?: StringFilter<"Credentials"> | string
    phone?: IntFilter<"Credentials"> | number
    memberId?: IntFilter<"Credentials"> | number
    password?: StringFilter<"Credentials"> | string
    role?: EnumRoleFilter<"Credentials"> | $Enums.Role
    updatedAt?: DateTimeFilter<"Credentials"> | Date | string
    personalInfo?: XOR<PersonalInfoNullableScalarRelationFilter, PersonalInfoWhereInput> | null
    Deposit?: XOR<DepositNullableScalarRelationFilter, DepositWhereInput> | null
  }

  export type CredentialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
    personalInfo?: PersonalInfoOrderByWithRelationInput
    Deposit?: DepositOrderByWithRelationInput
  }

  export type CredentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: number
    AND?: CredentialsWhereInput | CredentialsWhereInput[]
    OR?: CredentialsWhereInput[]
    NOT?: CredentialsWhereInput | CredentialsWhereInput[]
    name?: StringFilter<"Credentials"> | string
    email?: StringFilter<"Credentials"> | string
    phone?: IntFilter<"Credentials"> | number
    password?: StringFilter<"Credentials"> | string
    role?: EnumRoleFilter<"Credentials"> | $Enums.Role
    updatedAt?: DateTimeFilter<"Credentials"> | Date | string
    personalInfo?: XOR<PersonalInfoNullableScalarRelationFilter, PersonalInfoWhereInput> | null
    Deposit?: XOR<DepositNullableScalarRelationFilter, DepositWhereInput> | null
  }, "id" | "memberId">

  export type CredentialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
    _count?: CredentialsCountOrderByAggregateInput
    _avg?: CredentialsAvgOrderByAggregateInput
    _max?: CredentialsMaxOrderByAggregateInput
    _min?: CredentialsMinOrderByAggregateInput
    _sum?: CredentialsSumOrderByAggregateInput
  }

  export type CredentialsScalarWhereWithAggregatesInput = {
    AND?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    OR?: CredentialsScalarWhereWithAggregatesInput[]
    NOT?: CredentialsScalarWhereWithAggregatesInput | CredentialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credentials"> | string
    name?: StringWithAggregatesFilter<"Credentials"> | string
    email?: StringWithAggregatesFilter<"Credentials"> | string
    phone?: IntWithAggregatesFilter<"Credentials"> | number
    memberId?: IntWithAggregatesFilter<"Credentials"> | number
    password?: StringWithAggregatesFilter<"Credentials"> | string
    role?: EnumRoleWithAggregatesFilter<"Credentials"> | $Enums.Role
    updatedAt?: DateTimeWithAggregatesFilter<"Credentials"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    memberId?: IntFilter<"Deposit"> | number
    monthlyDepositAmount?: IntFilter<"Deposit"> | number
    month?: DateTimeFilter<"Deposit"> | Date | string
    referenceName?: StringFilter<"Deposit"> | string
    paymentProof?: StringFilter<"Deposit"> | string
    status?: EnumPaymentStatusFilter<"Deposit"> | $Enums.PaymentStatus
    penalty?: IntFilter<"Deposit"> | number
    credentials?: XOR<CredentialsScalarRelationFilter, CredentialsWhereInput>
    depositPaymentMethodHandToHand?: XOR<DepositPaymentMethodHandToHandNullableScalarRelationFilter, DepositPaymentMethodHandToHandWhereInput> | null
    depositPaymentMethodPhone?: XOR<DepositPaymentMethodPhoneNullableScalarRelationFilter, DepositPaymentMethodPhoneWhereInput> | null
    depositPaymentMethodBank?: XOR<DepositPaymentMethodBankNullableScalarRelationFilter, DepositPaymentMethodBankWhereInput> | null
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    month?: SortOrder
    referenceName?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    penalty?: SortOrder
    credentials?: CredentialsOrderByWithRelationInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandOrderByWithRelationInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneOrderByWithRelationInput
    depositPaymentMethodBank?: DepositPaymentMethodBankOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: number
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    monthlyDepositAmount?: IntFilter<"Deposit"> | number
    month?: DateTimeFilter<"Deposit"> | Date | string
    referenceName?: StringFilter<"Deposit"> | string
    paymentProof?: StringFilter<"Deposit"> | string
    status?: EnumPaymentStatusFilter<"Deposit"> | $Enums.PaymentStatus
    penalty?: IntFilter<"Deposit"> | number
    credentials?: XOR<CredentialsScalarRelationFilter, CredentialsWhereInput>
    depositPaymentMethodHandToHand?: XOR<DepositPaymentMethodHandToHandNullableScalarRelationFilter, DepositPaymentMethodHandToHandWhereInput> | null
    depositPaymentMethodPhone?: XOR<DepositPaymentMethodPhoneNullableScalarRelationFilter, DepositPaymentMethodPhoneWhereInput> | null
    depositPaymentMethodBank?: XOR<DepositPaymentMethodBankNullableScalarRelationFilter, DepositPaymentMethodBankWhereInput> | null
  }, "id" | "memberId">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    month?: SortOrder
    referenceName?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    penalty?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    memberId?: IntWithAggregatesFilter<"Deposit"> | number
    monthlyDepositAmount?: IntWithAggregatesFilter<"Deposit"> | number
    month?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    referenceName?: StringWithAggregatesFilter<"Deposit"> | string
    paymentProof?: StringWithAggregatesFilter<"Deposit"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Deposit"> | $Enums.PaymentStatus
    penalty?: IntWithAggregatesFilter<"Deposit"> | number
  }

  export type DepositPaymentMethodHandToHandWhereInput = {
    AND?: DepositPaymentMethodHandToHandWhereInput | DepositPaymentMethodHandToHandWhereInput[]
    OR?: DepositPaymentMethodHandToHandWhereInput[]
    NOT?: DepositPaymentMethodHandToHandWhereInput | DepositPaymentMethodHandToHandWhereInput[]
    id?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    depositId?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    reciverName?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    date?: DateTimeFilter<"DepositPaymentMethodHandToHand"> | Date | string
    time?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    location?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }

  export type DepositPaymentMethodHandToHandOrderByWithRelationInput = {
    id?: SortOrder
    depositId?: SortOrder
    reciverName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    deposit?: DepositOrderByWithRelationInput
  }

  export type DepositPaymentMethodHandToHandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    depositId?: string
    AND?: DepositPaymentMethodHandToHandWhereInput | DepositPaymentMethodHandToHandWhereInput[]
    OR?: DepositPaymentMethodHandToHandWhereInput[]
    NOT?: DepositPaymentMethodHandToHandWhereInput | DepositPaymentMethodHandToHandWhereInput[]
    reciverName?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    date?: DateTimeFilter<"DepositPaymentMethodHandToHand"> | Date | string
    time?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    location?: StringFilter<"DepositPaymentMethodHandToHand"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }, "id" | "depositId">

  export type DepositPaymentMethodHandToHandOrderByWithAggregationInput = {
    id?: SortOrder
    depositId?: SortOrder
    reciverName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    _count?: DepositPaymentMethodHandToHandCountOrderByAggregateInput
    _max?: DepositPaymentMethodHandToHandMaxOrderByAggregateInput
    _min?: DepositPaymentMethodHandToHandMinOrderByAggregateInput
  }

  export type DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput = {
    AND?: DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput | DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput[]
    OR?: DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput[]
    NOT?: DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput | DepositPaymentMethodHandToHandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | string
    depositId?: StringWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | string
    reciverName?: StringWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | string
    date?: DateTimeWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | Date | string
    time?: StringWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | string
    location?: StringWithAggregatesFilter<"DepositPaymentMethodHandToHand"> | string
  }

  export type DepositPaymentMethodPhoneWhereInput = {
    AND?: DepositPaymentMethodPhoneWhereInput | DepositPaymentMethodPhoneWhereInput[]
    OR?: DepositPaymentMethodPhoneWhereInput[]
    NOT?: DepositPaymentMethodPhoneWhereInput | DepositPaymentMethodPhoneWhereInput[]
    id?: StringFilter<"DepositPaymentMethodPhone"> | string
    depositId?: StringFilter<"DepositPaymentMethodPhone"> | string
    paymentMethodName?: StringFilter<"DepositPaymentMethodPhone"> | string
    phoneNumber?: IntFilter<"DepositPaymentMethodPhone"> | number
    transitionID?: StringFilter<"DepositPaymentMethodPhone"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }

  export type DepositPaymentMethodPhoneOrderByWithRelationInput = {
    id?: SortOrder
    depositId?: SortOrder
    paymentMethodName?: SortOrder
    phoneNumber?: SortOrder
    transitionID?: SortOrder
    deposit?: DepositOrderByWithRelationInput
  }

  export type DepositPaymentMethodPhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    depositId?: string
    AND?: DepositPaymentMethodPhoneWhereInput | DepositPaymentMethodPhoneWhereInput[]
    OR?: DepositPaymentMethodPhoneWhereInput[]
    NOT?: DepositPaymentMethodPhoneWhereInput | DepositPaymentMethodPhoneWhereInput[]
    paymentMethodName?: StringFilter<"DepositPaymentMethodPhone"> | string
    phoneNumber?: IntFilter<"DepositPaymentMethodPhone"> | number
    transitionID?: StringFilter<"DepositPaymentMethodPhone"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }, "id" | "depositId">

  export type DepositPaymentMethodPhoneOrderByWithAggregationInput = {
    id?: SortOrder
    depositId?: SortOrder
    paymentMethodName?: SortOrder
    phoneNumber?: SortOrder
    transitionID?: SortOrder
    _count?: DepositPaymentMethodPhoneCountOrderByAggregateInput
    _avg?: DepositPaymentMethodPhoneAvgOrderByAggregateInput
    _max?: DepositPaymentMethodPhoneMaxOrderByAggregateInput
    _min?: DepositPaymentMethodPhoneMinOrderByAggregateInput
    _sum?: DepositPaymentMethodPhoneSumOrderByAggregateInput
  }

  export type DepositPaymentMethodPhoneScalarWhereWithAggregatesInput = {
    AND?: DepositPaymentMethodPhoneScalarWhereWithAggregatesInput | DepositPaymentMethodPhoneScalarWhereWithAggregatesInput[]
    OR?: DepositPaymentMethodPhoneScalarWhereWithAggregatesInput[]
    NOT?: DepositPaymentMethodPhoneScalarWhereWithAggregatesInput | DepositPaymentMethodPhoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositPaymentMethodPhone"> | string
    depositId?: StringWithAggregatesFilter<"DepositPaymentMethodPhone"> | string
    paymentMethodName?: StringWithAggregatesFilter<"DepositPaymentMethodPhone"> | string
    phoneNumber?: IntWithAggregatesFilter<"DepositPaymentMethodPhone"> | number
    transitionID?: StringWithAggregatesFilter<"DepositPaymentMethodPhone"> | string
  }

  export type DepositPaymentMethodBankWhereInput = {
    AND?: DepositPaymentMethodBankWhereInput | DepositPaymentMethodBankWhereInput[]
    OR?: DepositPaymentMethodBankWhereInput[]
    NOT?: DepositPaymentMethodBankWhereInput | DepositPaymentMethodBankWhereInput[]
    id?: StringFilter<"DepositPaymentMethodBank"> | string
    depositId?: StringFilter<"DepositPaymentMethodBank"> | string
    bankACNumber?: StringFilter<"DepositPaymentMethodBank"> | string
    bankHolderName?: StringFilter<"DepositPaymentMethodBank"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }

  export type DepositPaymentMethodBankOrderByWithRelationInput = {
    id?: SortOrder
    depositId?: SortOrder
    bankACNumber?: SortOrder
    bankHolderName?: SortOrder
    deposit?: DepositOrderByWithRelationInput
  }

  export type DepositPaymentMethodBankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    depositId?: string
    AND?: DepositPaymentMethodBankWhereInput | DepositPaymentMethodBankWhereInput[]
    OR?: DepositPaymentMethodBankWhereInput[]
    NOT?: DepositPaymentMethodBankWhereInput | DepositPaymentMethodBankWhereInput[]
    bankACNumber?: StringFilter<"DepositPaymentMethodBank"> | string
    bankHolderName?: StringFilter<"DepositPaymentMethodBank"> | string
    deposit?: XOR<DepositScalarRelationFilter, DepositWhereInput>
  }, "id" | "depositId">

  export type DepositPaymentMethodBankOrderByWithAggregationInput = {
    id?: SortOrder
    depositId?: SortOrder
    bankACNumber?: SortOrder
    bankHolderName?: SortOrder
    _count?: DepositPaymentMethodBankCountOrderByAggregateInput
    _max?: DepositPaymentMethodBankMaxOrderByAggregateInput
    _min?: DepositPaymentMethodBankMinOrderByAggregateInput
  }

  export type DepositPaymentMethodBankScalarWhereWithAggregatesInput = {
    AND?: DepositPaymentMethodBankScalarWhereWithAggregatesInput | DepositPaymentMethodBankScalarWhereWithAggregatesInput[]
    OR?: DepositPaymentMethodBankScalarWhereWithAggregatesInput[]
    NOT?: DepositPaymentMethodBankScalarWhereWithAggregatesInput | DepositPaymentMethodBankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepositPaymentMethodBank"> | string
    depositId?: StringWithAggregatesFilter<"DepositPaymentMethodBank"> | string
    bankACNumber?: StringWithAggregatesFilter<"DepositPaymentMethodBank"> | string
    bankHolderName?: StringWithAggregatesFilter<"DepositPaymentMethodBank"> | string
  }

  export type PersonalInfoCreateInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInfoStates?: PersonalInfoStatesCreateNestedOneWithoutPersonalInfoInput
    credentials: CredentialsCreateNestedOneWithoutPersonalInfoInput
  }

  export type PersonalInfoUncheckedCreateInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    memberId: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInfoStates?: PersonalInfoStatesUncheckedCreateNestedOneWithoutPersonalInfoInput
  }

  export type PersonalInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfoStates?: PersonalInfoStatesUpdateOneWithoutPersonalInfoNestedInput
    credentials?: CredentialsUpdateOneRequiredWithoutPersonalInfoNestedInput
  }

  export type PersonalInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfoStates?: PersonalInfoStatesUncheckedUpdateOneWithoutPersonalInfoNestedInput
  }

  export type PersonalInfoCreateManyInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    memberId: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalInfoStatesCreateInput = {
    id?: string
    totalDeposit?: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties?: number
    totalPenaltiesMonth?: number
    registrationFee: number
    paymentMethod: string
    paymentStreak?: number
    personalInfo: PersonalInfoCreateNestedOneWithoutPersonalInfoStatesInput
  }

  export type PersonalInfoStatesUncheckedCreateInput = {
    id?: string
    memberId: number
    totalDeposit?: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties?: number
    totalPenaltiesMonth?: number
    registrationFee: number
    paymentMethod: string
    paymentStreak?: number
  }

  export type PersonalInfoStatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
    personalInfo?: PersonalInfoUpdateOneRequiredWithoutPersonalInfoStatesNestedInput
  }

  export type PersonalInfoStatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalInfoStatesCreateManyInput = {
    id?: string
    memberId: number
    totalDeposit?: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties?: number
    totalPenaltiesMonth?: number
    registrationFee: number
    paymentMethod: string
    paymentStreak?: number
  }

  export type PersonalInfoStatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalInfoStatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsCreateInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    personalInfo?: PersonalInfoCreateNestedOneWithoutCredentialsInput
    Deposit?: DepositCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    personalInfo?: PersonalInfoUncheckedCreateNestedOneWithoutCredentialsInput
    Deposit?: DepositUncheckedCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfo?: PersonalInfoUpdateOneWithoutCredentialsNestedInput
    Deposit?: DepositUpdateOneWithoutCredentialsNestedInput
  }

  export type CredentialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfo?: PersonalInfoUncheckedUpdateOneWithoutCredentialsNestedInput
    Deposit?: DepositUncheckedUpdateOneWithoutCredentialsNestedInput
  }

  export type CredentialsCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
  }

  export type CredentialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    credentials: CredentialsCreateNestedOneWithoutDepositInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    memberId: number
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedCreateNestedOneWithoutDepositInput
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    credentials?: CredentialsUpdateOneRequiredWithoutDepositNestedInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUpdateOneWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedUpdateOneWithoutDepositNestedInput
  }

  export type DepositCreateManyInput = {
    id?: string
    memberId: number
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
  }

  export type DepositPaymentMethodHandToHandCreateInput = {
    id?: string
    reciverName: string
    date: Date | string
    time: string
    location: string
    deposit: DepositCreateNestedOneWithoutDepositPaymentMethodHandToHandInput
  }

  export type DepositPaymentMethodHandToHandUncheckedCreateInput = {
    id?: string
    depositId: string
    reciverName: string
    date: Date | string
    time: string
    location: string
  }

  export type DepositPaymentMethodHandToHandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    deposit?: DepositUpdateOneRequiredWithoutDepositPaymentMethodHandToHandNestedInput
  }

  export type DepositPaymentMethodHandToHandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodHandToHandCreateManyInput = {
    id?: string
    depositId: string
    reciverName: string
    date: Date | string
    time: string
    location: string
  }

  export type DepositPaymentMethodHandToHandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodHandToHandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodPhoneCreateInput = {
    id?: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
    deposit: DepositCreateNestedOneWithoutDepositPaymentMethodPhoneInput
  }

  export type DepositPaymentMethodPhoneUncheckedCreateInput = {
    id?: string
    depositId: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
  }

  export type DepositPaymentMethodPhoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
    deposit?: DepositUpdateOneRequiredWithoutDepositPaymentMethodPhoneNestedInput
  }

  export type DepositPaymentMethodPhoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodPhoneCreateManyInput = {
    id?: string
    depositId: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
  }

  export type DepositPaymentMethodPhoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodPhoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodBankCreateInput = {
    id?: string
    bankACNumber: string
    bankHolderName: string
    deposit: DepositCreateNestedOneWithoutDepositPaymentMethodBankInput
  }

  export type DepositPaymentMethodBankUncheckedCreateInput = {
    id?: string
    depositId: string
    bankACNumber: string
    bankHolderName: string
  }

  export type DepositPaymentMethodBankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
    deposit?: DepositUpdateOneRequiredWithoutDepositPaymentMethodBankNestedInput
  }

  export type DepositPaymentMethodBankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodBankCreateManyInput = {
    id?: string
    depositId: string
    bankACNumber: string
    bankHolderName: string
  }

  export type DepositPaymentMethodBankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodBankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    depositId?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonalInfoStatesNullableScalarRelationFilter = {
    is?: PersonalInfoStatesWhereInput | null
    isNot?: PersonalInfoStatesWhereInput | null
  }

  export type CredentialsScalarRelationFilter = {
    is?: CredentialsWhereInput
    isNot?: CredentialsWhereInput
  }

  export type PersonalInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
    status?: SortOrder
    joingDate?: SortOrder
    refarenceName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalInfoAvgOrderByAggregateInput = {
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
  }

  export type PersonalInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
    status?: SortOrder
    joingDate?: SortOrder
    refarenceName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    occupation?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
    status?: SortOrder
    joingDate?: SortOrder
    refarenceName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalInfoSumOrderByAggregateInput = {
    phone?: SortOrder
    memberId?: SortOrder
    nid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonalInfoScalarRelationFilter = {
    is?: PersonalInfoWhereInput
    isNot?: PersonalInfoWhereInput
  }

  export type PersonalInfoStatesCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentMethod?: SortOrder
    paymentStreak?: SortOrder
  }

  export type PersonalInfoStatesAvgOrderByAggregateInput = {
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentStreak?: SortOrder
  }

  export type PersonalInfoStatesMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentMethod?: SortOrder
    paymentStreak?: SortOrder
  }

  export type PersonalInfoStatesMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentMethod?: SortOrder
    paymentStreak?: SortOrder
  }

  export type PersonalInfoStatesSumOrderByAggregateInput = {
    memberId?: SortOrder
    totalDeposit?: SortOrder
    montlyDeposit?: SortOrder
    totalMonthDeposit?: SortOrder
    totalPenalties?: SortOrder
    totalPenaltiesMonth?: SortOrder
    registrationFee?: SortOrder
    paymentStreak?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PersonalInfoNullableScalarRelationFilter = {
    is?: PersonalInfoWhereInput | null
    isNot?: PersonalInfoWhereInput | null
  }

  export type DepositNullableScalarRelationFilter = {
    is?: DepositWhereInput | null
    isNot?: DepositWhereInput | null
  }

  export type CredentialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsAvgOrderByAggregateInput = {
    phone?: SortOrder
    memberId?: SortOrder
  }

  export type CredentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialsSumOrderByAggregateInput = {
    phone?: SortOrder
    memberId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DepositPaymentMethodHandToHandNullableScalarRelationFilter = {
    is?: DepositPaymentMethodHandToHandWhereInput | null
    isNot?: DepositPaymentMethodHandToHandWhereInput | null
  }

  export type DepositPaymentMethodPhoneNullableScalarRelationFilter = {
    is?: DepositPaymentMethodPhoneWhereInput | null
    isNot?: DepositPaymentMethodPhoneWhereInput | null
  }

  export type DepositPaymentMethodBankNullableScalarRelationFilter = {
    is?: DepositPaymentMethodBankWhereInput | null
    isNot?: DepositPaymentMethodBankWhereInput | null
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    month?: SortOrder
    referenceName?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    penalty?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    penalty?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    month?: SortOrder
    referenceName?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    penalty?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    month?: SortOrder
    referenceName?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    penalty?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    memberId?: SortOrder
    monthlyDepositAmount?: SortOrder
    penalty?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DepositScalarRelationFilter = {
    is?: DepositWhereInput
    isNot?: DepositWhereInput
  }

  export type DepositPaymentMethodHandToHandCountOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    reciverName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type DepositPaymentMethodHandToHandMaxOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    reciverName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type DepositPaymentMethodHandToHandMinOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    reciverName?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type DepositPaymentMethodPhoneCountOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    paymentMethodName?: SortOrder
    phoneNumber?: SortOrder
    transitionID?: SortOrder
  }

  export type DepositPaymentMethodPhoneAvgOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type DepositPaymentMethodPhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    paymentMethodName?: SortOrder
    phoneNumber?: SortOrder
    transitionID?: SortOrder
  }

  export type DepositPaymentMethodPhoneMinOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    paymentMethodName?: SortOrder
    phoneNumber?: SortOrder
    transitionID?: SortOrder
  }

  export type DepositPaymentMethodPhoneSumOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type DepositPaymentMethodBankCountOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    bankACNumber?: SortOrder
    bankHolderName?: SortOrder
  }

  export type DepositPaymentMethodBankMaxOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    bankACNumber?: SortOrder
    bankHolderName?: SortOrder
  }

  export type DepositPaymentMethodBankMinOrderByAggregateInput = {
    id?: SortOrder
    depositId?: SortOrder
    bankACNumber?: SortOrder
    bankHolderName?: SortOrder
  }

  export type PersonalInfoStatesCreateNestedOneWithoutPersonalInfoInput = {
    create?: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: PersonalInfoStatesCreateOrConnectWithoutPersonalInfoInput
    connect?: PersonalInfoStatesWhereUniqueInput
  }

  export type CredentialsCreateNestedOneWithoutPersonalInfoInput = {
    create?: XOR<CredentialsCreateWithoutPersonalInfoInput, CredentialsUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutPersonalInfoInput
    connect?: CredentialsWhereUniqueInput
  }

  export type PersonalInfoStatesUncheckedCreateNestedOneWithoutPersonalInfoInput = {
    create?: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: PersonalInfoStatesCreateOrConnectWithoutPersonalInfoInput
    connect?: PersonalInfoStatesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonalInfoStatesUpdateOneWithoutPersonalInfoNestedInput = {
    create?: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: PersonalInfoStatesCreateOrConnectWithoutPersonalInfoInput
    upsert?: PersonalInfoStatesUpsertWithoutPersonalInfoInput
    disconnect?: PersonalInfoStatesWhereInput | boolean
    delete?: PersonalInfoStatesWhereInput | boolean
    connect?: PersonalInfoStatesWhereUniqueInput
    update?: XOR<XOR<PersonalInfoStatesUpdateToOneWithWhereWithoutPersonalInfoInput, PersonalInfoStatesUpdateWithoutPersonalInfoInput>, PersonalInfoStatesUncheckedUpdateWithoutPersonalInfoInput>
  }

  export type CredentialsUpdateOneRequiredWithoutPersonalInfoNestedInput = {
    create?: XOR<CredentialsCreateWithoutPersonalInfoInput, CredentialsUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutPersonalInfoInput
    upsert?: CredentialsUpsertWithoutPersonalInfoInput
    connect?: CredentialsWhereUniqueInput
    update?: XOR<XOR<CredentialsUpdateToOneWithWhereWithoutPersonalInfoInput, CredentialsUpdateWithoutPersonalInfoInput>, CredentialsUncheckedUpdateWithoutPersonalInfoInput>
  }

  export type PersonalInfoStatesUncheckedUpdateOneWithoutPersonalInfoNestedInput = {
    create?: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
    connectOrCreate?: PersonalInfoStatesCreateOrConnectWithoutPersonalInfoInput
    upsert?: PersonalInfoStatesUpsertWithoutPersonalInfoInput
    disconnect?: PersonalInfoStatesWhereInput | boolean
    delete?: PersonalInfoStatesWhereInput | boolean
    connect?: PersonalInfoStatesWhereUniqueInput
    update?: XOR<XOR<PersonalInfoStatesUpdateToOneWithWhereWithoutPersonalInfoInput, PersonalInfoStatesUpdateWithoutPersonalInfoInput>, PersonalInfoStatesUncheckedUpdateWithoutPersonalInfoInput>
  }

  export type PersonalInfoCreateNestedOneWithoutPersonalInfoStatesInput = {
    create?: XOR<PersonalInfoCreateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedCreateWithoutPersonalInfoStatesInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutPersonalInfoStatesInput
    connect?: PersonalInfoWhereUniqueInput
  }

  export type PersonalInfoUpdateOneRequiredWithoutPersonalInfoStatesNestedInput = {
    create?: XOR<PersonalInfoCreateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedCreateWithoutPersonalInfoStatesInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutPersonalInfoStatesInput
    upsert?: PersonalInfoUpsertWithoutPersonalInfoStatesInput
    connect?: PersonalInfoWhereUniqueInput
    update?: XOR<XOR<PersonalInfoUpdateToOneWithWhereWithoutPersonalInfoStatesInput, PersonalInfoUpdateWithoutPersonalInfoStatesInput>, PersonalInfoUncheckedUpdateWithoutPersonalInfoStatesInput>
  }

  export type PersonalInfoCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutCredentialsInput
    connect?: PersonalInfoWhereUniqueInput
  }

  export type DepositCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutCredentialsInput
    connect?: DepositWhereUniqueInput
  }

  export type PersonalInfoUncheckedCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutCredentialsInput
    connect?: PersonalInfoWhereUniqueInput
  }

  export type DepositUncheckedCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutCredentialsInput
    connect?: DepositWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PersonalInfoUpdateOneWithoutCredentialsNestedInput = {
    create?: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutCredentialsInput
    upsert?: PersonalInfoUpsertWithoutCredentialsInput
    disconnect?: PersonalInfoWhereInput | boolean
    delete?: PersonalInfoWhereInput | boolean
    connect?: PersonalInfoWhereUniqueInput
    update?: XOR<XOR<PersonalInfoUpdateToOneWithWhereWithoutCredentialsInput, PersonalInfoUpdateWithoutCredentialsInput>, PersonalInfoUncheckedUpdateWithoutCredentialsInput>
  }

  export type DepositUpdateOneWithoutCredentialsNestedInput = {
    create?: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutCredentialsInput
    upsert?: DepositUpsertWithoutCredentialsInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutCredentialsInput, DepositUpdateWithoutCredentialsInput>, DepositUncheckedUpdateWithoutCredentialsInput>
  }

  export type PersonalInfoUncheckedUpdateOneWithoutCredentialsNestedInput = {
    create?: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: PersonalInfoCreateOrConnectWithoutCredentialsInput
    upsert?: PersonalInfoUpsertWithoutCredentialsInput
    disconnect?: PersonalInfoWhereInput | boolean
    delete?: PersonalInfoWhereInput | boolean
    connect?: PersonalInfoWhereUniqueInput
    update?: XOR<XOR<PersonalInfoUpdateToOneWithWhereWithoutCredentialsInput, PersonalInfoUpdateWithoutCredentialsInput>, PersonalInfoUncheckedUpdateWithoutCredentialsInput>
  }

  export type DepositUncheckedUpdateOneWithoutCredentialsNestedInput = {
    create?: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutCredentialsInput
    upsert?: DepositUpsertWithoutCredentialsInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutCredentialsInput, DepositUpdateWithoutCredentialsInput>, DepositUncheckedUpdateWithoutCredentialsInput>
  }

  export type CredentialsCreateNestedOneWithoutDepositInput = {
    create?: XOR<CredentialsCreateWithoutDepositInput, CredentialsUncheckedCreateWithoutDepositInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutDepositInput
    connect?: CredentialsWhereUniqueInput
  }

  export type DepositPaymentMethodHandToHandCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodHandToHandCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  export type DepositPaymentMethodPhoneCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodPhoneCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodPhoneWhereUniqueInput
  }

  export type DepositPaymentMethodBankCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodBankCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodBankWhereUniqueInput
  }

  export type DepositPaymentMethodHandToHandUncheckedCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodHandToHandCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodHandToHandWhereUniqueInput
  }

  export type DepositPaymentMethodPhoneUncheckedCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodPhoneCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodPhoneWhereUniqueInput
  }

  export type DepositPaymentMethodBankUncheckedCreateNestedOneWithoutDepositInput = {
    create?: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodBankCreateOrConnectWithoutDepositInput
    connect?: DepositPaymentMethodBankWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CredentialsUpdateOneRequiredWithoutDepositNestedInput = {
    create?: XOR<CredentialsCreateWithoutDepositInput, CredentialsUncheckedCreateWithoutDepositInput>
    connectOrCreate?: CredentialsCreateOrConnectWithoutDepositInput
    upsert?: CredentialsUpsertWithoutDepositInput
    connect?: CredentialsWhereUniqueInput
    update?: XOR<XOR<CredentialsUpdateToOneWithWhereWithoutDepositInput, CredentialsUpdateWithoutDepositInput>, CredentialsUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodHandToHandUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodHandToHandCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodHandToHandUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodHandToHandWhereInput | boolean
    delete?: DepositPaymentMethodHandToHandWhereInput | boolean
    connect?: DepositPaymentMethodHandToHandWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodHandToHandUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodHandToHandUpdateWithoutDepositInput>, DepositPaymentMethodHandToHandUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodPhoneUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodPhoneCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodPhoneUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodPhoneWhereInput | boolean
    delete?: DepositPaymentMethodPhoneWhereInput | boolean
    connect?: DepositPaymentMethodPhoneWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodPhoneUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodPhoneUpdateWithoutDepositInput>, DepositPaymentMethodPhoneUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodBankUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodBankCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodBankUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodBankWhereInput | boolean
    delete?: DepositPaymentMethodBankWhereInput | boolean
    connect?: DepositPaymentMethodBankWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodBankUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodBankUpdateWithoutDepositInput>, DepositPaymentMethodBankUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodHandToHandUncheckedUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodHandToHandCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodHandToHandUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodHandToHandWhereInput | boolean
    delete?: DepositPaymentMethodHandToHandWhereInput | boolean
    connect?: DepositPaymentMethodHandToHandWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodHandToHandUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodHandToHandUpdateWithoutDepositInput>, DepositPaymentMethodHandToHandUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodPhoneUncheckedUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodPhoneCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodPhoneUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodPhoneWhereInput | boolean
    delete?: DepositPaymentMethodPhoneWhereInput | boolean
    connect?: DepositPaymentMethodPhoneWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodPhoneUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodPhoneUpdateWithoutDepositInput>, DepositPaymentMethodPhoneUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodBankUncheckedUpdateOneWithoutDepositNestedInput = {
    create?: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
    connectOrCreate?: DepositPaymentMethodBankCreateOrConnectWithoutDepositInput
    upsert?: DepositPaymentMethodBankUpsertWithoutDepositInput
    disconnect?: DepositPaymentMethodBankWhereInput | boolean
    delete?: DepositPaymentMethodBankWhereInput | boolean
    connect?: DepositPaymentMethodBankWhereUniqueInput
    update?: XOR<XOR<DepositPaymentMethodBankUpdateToOneWithWhereWithoutDepositInput, DepositPaymentMethodBankUpdateWithoutDepositInput>, DepositPaymentMethodBankUncheckedUpdateWithoutDepositInput>
  }

  export type DepositCreateNestedOneWithoutDepositPaymentMethodHandToHandInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedCreateWithoutDepositPaymentMethodHandToHandInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodHandToHandInput
    connect?: DepositWhereUniqueInput
  }

  export type DepositUpdateOneRequiredWithoutDepositPaymentMethodHandToHandNestedInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedCreateWithoutDepositPaymentMethodHandToHandInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodHandToHandInput
    upsert?: DepositUpsertWithoutDepositPaymentMethodHandToHandInput
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutDepositPaymentMethodHandToHandInput, DepositUpdateWithoutDepositPaymentMethodHandToHandInput>, DepositUncheckedUpdateWithoutDepositPaymentMethodHandToHandInput>
  }

  export type DepositCreateNestedOneWithoutDepositPaymentMethodPhoneInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedCreateWithoutDepositPaymentMethodPhoneInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodPhoneInput
    connect?: DepositWhereUniqueInput
  }

  export type DepositUpdateOneRequiredWithoutDepositPaymentMethodPhoneNestedInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedCreateWithoutDepositPaymentMethodPhoneInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodPhoneInput
    upsert?: DepositUpsertWithoutDepositPaymentMethodPhoneInput
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutDepositPaymentMethodPhoneInput, DepositUpdateWithoutDepositPaymentMethodPhoneInput>, DepositUncheckedUpdateWithoutDepositPaymentMethodPhoneInput>
  }

  export type DepositCreateNestedOneWithoutDepositPaymentMethodBankInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodBankInput, DepositUncheckedCreateWithoutDepositPaymentMethodBankInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodBankInput
    connect?: DepositWhereUniqueInput
  }

  export type DepositUpdateOneRequiredWithoutDepositPaymentMethodBankNestedInput = {
    create?: XOR<DepositCreateWithoutDepositPaymentMethodBankInput, DepositUncheckedCreateWithoutDepositPaymentMethodBankInput>
    connectOrCreate?: DepositCreateOrConnectWithoutDepositPaymentMethodBankInput
    upsert?: DepositUpsertWithoutDepositPaymentMethodBankInput
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutDepositPaymentMethodBankInput, DepositUpdateWithoutDepositPaymentMethodBankInput>, DepositUncheckedUpdateWithoutDepositPaymentMethodBankInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PersonalInfoStatesCreateWithoutPersonalInfoInput = {
    id?: string
    totalDeposit?: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties?: number
    totalPenaltiesMonth?: number
    registrationFee: number
    paymentMethod: string
    paymentStreak?: number
  }

  export type PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput = {
    id?: string
    totalDeposit?: number
    montlyDeposit: number
    totalMonthDeposit: number
    totalPenalties?: number
    totalPenaltiesMonth?: number
    registrationFee: number
    paymentMethod: string
    paymentStreak?: number
  }

  export type PersonalInfoStatesCreateOrConnectWithoutPersonalInfoInput = {
    where: PersonalInfoStatesWhereUniqueInput
    create: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
  }

  export type CredentialsCreateWithoutPersonalInfoInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    Deposit?: DepositCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsUncheckedCreateWithoutPersonalInfoInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    Deposit?: DepositUncheckedCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsCreateOrConnectWithoutPersonalInfoInput = {
    where: CredentialsWhereUniqueInput
    create: XOR<CredentialsCreateWithoutPersonalInfoInput, CredentialsUncheckedCreateWithoutPersonalInfoInput>
  }

  export type PersonalInfoStatesUpsertWithoutPersonalInfoInput = {
    update: XOR<PersonalInfoStatesUpdateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedUpdateWithoutPersonalInfoInput>
    create: XOR<PersonalInfoStatesCreateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedCreateWithoutPersonalInfoInput>
    where?: PersonalInfoStatesWhereInput
  }

  export type PersonalInfoStatesUpdateToOneWithWhereWithoutPersonalInfoInput = {
    where?: PersonalInfoStatesWhereInput
    data: XOR<PersonalInfoStatesUpdateWithoutPersonalInfoInput, PersonalInfoStatesUncheckedUpdateWithoutPersonalInfoInput>
  }

  export type PersonalInfoStatesUpdateWithoutPersonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalInfoStatesUncheckedUpdateWithoutPersonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDeposit?: IntFieldUpdateOperationsInput | number
    montlyDeposit?: IntFieldUpdateOperationsInput | number
    totalMonthDeposit?: IntFieldUpdateOperationsInput | number
    totalPenalties?: IntFieldUpdateOperationsInput | number
    totalPenaltiesMonth?: IntFieldUpdateOperationsInput | number
    registrationFee?: IntFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStreak?: IntFieldUpdateOperationsInput | number
  }

  export type CredentialsUpsertWithoutPersonalInfoInput = {
    update: XOR<CredentialsUpdateWithoutPersonalInfoInput, CredentialsUncheckedUpdateWithoutPersonalInfoInput>
    create: XOR<CredentialsCreateWithoutPersonalInfoInput, CredentialsUncheckedCreateWithoutPersonalInfoInput>
    where?: CredentialsWhereInput
  }

  export type CredentialsUpdateToOneWithWhereWithoutPersonalInfoInput = {
    where?: CredentialsWhereInput
    data: XOR<CredentialsUpdateWithoutPersonalInfoInput, CredentialsUncheckedUpdateWithoutPersonalInfoInput>
  }

  export type CredentialsUpdateWithoutPersonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Deposit?: DepositUpdateOneWithoutCredentialsNestedInput
  }

  export type CredentialsUncheckedUpdateWithoutPersonalInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Deposit?: DepositUncheckedUpdateOneWithoutCredentialsNestedInput
  }

  export type PersonalInfoCreateWithoutPersonalInfoStatesInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials: CredentialsCreateNestedOneWithoutPersonalInfoInput
  }

  export type PersonalInfoUncheckedCreateWithoutPersonalInfoStatesInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    memberId: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalInfoCreateOrConnectWithoutPersonalInfoStatesInput = {
    where: PersonalInfoWhereUniqueInput
    create: XOR<PersonalInfoCreateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedCreateWithoutPersonalInfoStatesInput>
  }

  export type PersonalInfoUpsertWithoutPersonalInfoStatesInput = {
    update: XOR<PersonalInfoUpdateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedUpdateWithoutPersonalInfoStatesInput>
    create: XOR<PersonalInfoCreateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedCreateWithoutPersonalInfoStatesInput>
    where?: PersonalInfoWhereInput
  }

  export type PersonalInfoUpdateToOneWithWhereWithoutPersonalInfoStatesInput = {
    where?: PersonalInfoWhereInput
    data: XOR<PersonalInfoUpdateWithoutPersonalInfoStatesInput, PersonalInfoUncheckedUpdateWithoutPersonalInfoStatesInput>
  }

  export type PersonalInfoUpdateWithoutPersonalInfoStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: CredentialsUpdateOneRequiredWithoutPersonalInfoNestedInput
  }

  export type PersonalInfoUncheckedUpdateWithoutPersonalInfoStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalInfoCreateWithoutCredentialsInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInfoStates?: PersonalInfoStatesCreateNestedOneWithoutPersonalInfoInput
  }

  export type PersonalInfoUncheckedCreateWithoutCredentialsInput = {
    id?: string
    name: string
    fatherName: string
    motherName: string
    address: string
    occupation: string
    email: string
    phone: number
    nid: number
    status?: $Enums.Status
    joingDate: Date | string
    refarenceName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInfoStates?: PersonalInfoStatesUncheckedCreateNestedOneWithoutPersonalInfoInput
  }

  export type PersonalInfoCreateOrConnectWithoutCredentialsInput = {
    where: PersonalInfoWhereUniqueInput
    create: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
  }

  export type DepositCreateWithoutCredentialsInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutCredentialsInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedCreateNestedOneWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutCredentialsInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
  }

  export type PersonalInfoUpsertWithoutCredentialsInput = {
    update: XOR<PersonalInfoUpdateWithoutCredentialsInput, PersonalInfoUncheckedUpdateWithoutCredentialsInput>
    create: XOR<PersonalInfoCreateWithoutCredentialsInput, PersonalInfoUncheckedCreateWithoutCredentialsInput>
    where?: PersonalInfoWhereInput
  }

  export type PersonalInfoUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: PersonalInfoWhereInput
    data: XOR<PersonalInfoUpdateWithoutCredentialsInput, PersonalInfoUncheckedUpdateWithoutCredentialsInput>
  }

  export type PersonalInfoUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfoStates?: PersonalInfoStatesUpdateOneWithoutPersonalInfoNestedInput
  }

  export type PersonalInfoUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    nid?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    joingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refarenceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfoStates?: PersonalInfoStatesUncheckedUpdateOneWithoutPersonalInfoNestedInput
  }

  export type DepositUpsertWithoutCredentialsInput = {
    update: XOR<DepositUpdateWithoutCredentialsInput, DepositUncheckedUpdateWithoutCredentialsInput>
    create: XOR<DepositCreateWithoutCredentialsInput, DepositUncheckedCreateWithoutCredentialsInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutCredentialsInput, DepositUncheckedUpdateWithoutCredentialsInput>
  }

  export type DepositUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUpdateOneWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedUpdateOneWithoutDepositNestedInput
  }

  export type CredentialsCreateWithoutDepositInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    personalInfo?: PersonalInfoCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsUncheckedCreateWithoutDepositInput = {
    id?: string
    name: string
    email: string
    phone: number
    memberId?: number
    password: string
    role: $Enums.Role
    updatedAt?: Date | string
    personalInfo?: PersonalInfoUncheckedCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialsCreateOrConnectWithoutDepositInput = {
    where: CredentialsWhereUniqueInput
    create: XOR<CredentialsCreateWithoutDepositInput, CredentialsUncheckedCreateWithoutDepositInput>
  }

  export type DepositPaymentMethodHandToHandCreateWithoutDepositInput = {
    id?: string
    reciverName: string
    date: Date | string
    time: string
    location: string
  }

  export type DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput = {
    id?: string
    reciverName: string
    date: Date | string
    time: string
    location: string
  }

  export type DepositPaymentMethodHandToHandCreateOrConnectWithoutDepositInput = {
    where: DepositPaymentMethodHandToHandWhereUniqueInput
    create: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
  }

  export type DepositPaymentMethodPhoneCreateWithoutDepositInput = {
    id?: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
  }

  export type DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput = {
    id?: string
    paymentMethodName: string
    phoneNumber: number
    transitionID: string
  }

  export type DepositPaymentMethodPhoneCreateOrConnectWithoutDepositInput = {
    where: DepositPaymentMethodPhoneWhereUniqueInput
    create: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
  }

  export type DepositPaymentMethodBankCreateWithoutDepositInput = {
    id?: string
    bankACNumber: string
    bankHolderName: string
  }

  export type DepositPaymentMethodBankUncheckedCreateWithoutDepositInput = {
    id?: string
    bankACNumber: string
    bankHolderName: string
  }

  export type DepositPaymentMethodBankCreateOrConnectWithoutDepositInput = {
    where: DepositPaymentMethodBankWhereUniqueInput
    create: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
  }

  export type CredentialsUpsertWithoutDepositInput = {
    update: XOR<CredentialsUpdateWithoutDepositInput, CredentialsUncheckedUpdateWithoutDepositInput>
    create: XOR<CredentialsCreateWithoutDepositInput, CredentialsUncheckedCreateWithoutDepositInput>
    where?: CredentialsWhereInput
  }

  export type CredentialsUpdateToOneWithWhereWithoutDepositInput = {
    where?: CredentialsWhereInput
    data: XOR<CredentialsUpdateWithoutDepositInput, CredentialsUncheckedUpdateWithoutDepositInput>
  }

  export type CredentialsUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfo?: PersonalInfoUpdateOneWithoutCredentialsNestedInput
  }

  export type CredentialsUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInfo?: PersonalInfoUncheckedUpdateOneWithoutCredentialsNestedInput
  }

  export type DepositPaymentMethodHandToHandUpsertWithoutDepositInput = {
    update: XOR<DepositPaymentMethodHandToHandUpdateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedUpdateWithoutDepositInput>
    create: XOR<DepositPaymentMethodHandToHandCreateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedCreateWithoutDepositInput>
    where?: DepositPaymentMethodHandToHandWhereInput
  }

  export type DepositPaymentMethodHandToHandUpdateToOneWithWhereWithoutDepositInput = {
    where?: DepositPaymentMethodHandToHandWhereInput
    data: XOR<DepositPaymentMethodHandToHandUpdateWithoutDepositInput, DepositPaymentMethodHandToHandUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodHandToHandUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodHandToHandUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    reciverName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodPhoneUpsertWithoutDepositInput = {
    update: XOR<DepositPaymentMethodPhoneUpdateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedUpdateWithoutDepositInput>
    create: XOR<DepositPaymentMethodPhoneCreateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedCreateWithoutDepositInput>
    where?: DepositPaymentMethodPhoneWhereInput
  }

  export type DepositPaymentMethodPhoneUpdateToOneWithWhereWithoutDepositInput = {
    where?: DepositPaymentMethodPhoneWhereInput
    data: XOR<DepositPaymentMethodPhoneUpdateWithoutDepositInput, DepositPaymentMethodPhoneUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodPhoneUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodPhoneUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    transitionID?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodBankUpsertWithoutDepositInput = {
    update: XOR<DepositPaymentMethodBankUpdateWithoutDepositInput, DepositPaymentMethodBankUncheckedUpdateWithoutDepositInput>
    create: XOR<DepositPaymentMethodBankCreateWithoutDepositInput, DepositPaymentMethodBankUncheckedCreateWithoutDepositInput>
    where?: DepositPaymentMethodBankWhereInput
  }

  export type DepositPaymentMethodBankUpdateToOneWithWhereWithoutDepositInput = {
    where?: DepositPaymentMethodBankWhereInput
    data: XOR<DepositPaymentMethodBankUpdateWithoutDepositInput, DepositPaymentMethodBankUncheckedUpdateWithoutDepositInput>
  }

  export type DepositPaymentMethodBankUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
  }

  export type DepositPaymentMethodBankUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankACNumber?: StringFieldUpdateOperationsInput | string
    bankHolderName?: StringFieldUpdateOperationsInput | string
  }

  export type DepositCreateWithoutDepositPaymentMethodHandToHandInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    credentials: CredentialsCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutDepositPaymentMethodHandToHandInput = {
    id?: string
    memberId: number
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedCreateNestedOneWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutDepositPaymentMethodHandToHandInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedCreateWithoutDepositPaymentMethodHandToHandInput>
  }

  export type DepositUpsertWithoutDepositPaymentMethodHandToHandInput = {
    update: XOR<DepositUpdateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedUpdateWithoutDepositPaymentMethodHandToHandInput>
    create: XOR<DepositCreateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedCreateWithoutDepositPaymentMethodHandToHandInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutDepositPaymentMethodHandToHandInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutDepositPaymentMethodHandToHandInput, DepositUncheckedUpdateWithoutDepositPaymentMethodHandToHandInput>
  }

  export type DepositUpdateWithoutDepositPaymentMethodHandToHandInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    credentials?: CredentialsUpdateOneRequiredWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUpdateOneWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutDepositPaymentMethodHandToHandInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedUpdateOneWithoutDepositNestedInput
  }

  export type DepositCreateWithoutDepositPaymentMethodPhoneInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    credentials: CredentialsCreateNestedOneWithoutDepositInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutDepositPaymentMethodPhoneInput = {
    id?: string
    memberId: number
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedCreateNestedOneWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutDepositPaymentMethodPhoneInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedCreateWithoutDepositPaymentMethodPhoneInput>
  }

  export type DepositUpsertWithoutDepositPaymentMethodPhoneInput = {
    update: XOR<DepositUpdateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedUpdateWithoutDepositPaymentMethodPhoneInput>
    create: XOR<DepositCreateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedCreateWithoutDepositPaymentMethodPhoneInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutDepositPaymentMethodPhoneInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutDepositPaymentMethodPhoneInput, DepositUncheckedUpdateWithoutDepositPaymentMethodPhoneInput>
  }

  export type DepositUpdateWithoutDepositPaymentMethodPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    credentials?: CredentialsUpdateOneRequiredWithoutDepositNestedInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUpdateOneWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutDepositPaymentMethodPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodBank?: DepositPaymentMethodBankUncheckedUpdateOneWithoutDepositNestedInput
  }

  export type DepositCreateWithoutDepositPaymentMethodBankInput = {
    id?: string
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    credentials: CredentialsCreateNestedOneWithoutDepositInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutDepositPaymentMethodBankInput = {
    id?: string
    memberId: number
    monthlyDepositAmount: number
    month: Date | string
    referenceName: string
    paymentProof: string
    status: $Enums.PaymentStatus
    penalty?: number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedCreateNestedOneWithoutDepositInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedCreateNestedOneWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutDepositPaymentMethodBankInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutDepositPaymentMethodBankInput, DepositUncheckedCreateWithoutDepositPaymentMethodBankInput>
  }

  export type DepositUpsertWithoutDepositPaymentMethodBankInput = {
    update: XOR<DepositUpdateWithoutDepositPaymentMethodBankInput, DepositUncheckedUpdateWithoutDepositPaymentMethodBankInput>
    create: XOR<DepositCreateWithoutDepositPaymentMethodBankInput, DepositUncheckedCreateWithoutDepositPaymentMethodBankInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutDepositPaymentMethodBankInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutDepositPaymentMethodBankInput, DepositUncheckedUpdateWithoutDepositPaymentMethodBankInput>
  }

  export type DepositUpdateWithoutDepositPaymentMethodBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    credentials?: CredentialsUpdateOneRequiredWithoutDepositNestedInput
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUpdateOneWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutDepositPaymentMethodBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: IntFieldUpdateOperationsInput | number
    monthlyDepositAmount?: IntFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceName?: StringFieldUpdateOperationsInput | string
    paymentProof?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    penalty?: IntFieldUpdateOperationsInput | number
    depositPaymentMethodHandToHand?: DepositPaymentMethodHandToHandUncheckedUpdateOneWithoutDepositNestedInput
    depositPaymentMethodPhone?: DepositPaymentMethodPhoneUncheckedUpdateOneWithoutDepositNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}