import { err, ok, type Result } from "@showichiro/result";

/**
 * @enum FetchError
 * @description Fetch処理で発生する可能性のあるエラーを定義します。
 */
export enum FetchError {
  InvalidResponse = "InvalidResponse",
  InvalidJSON = "InvalidJSON",
  InvalidStatusCode = "InvalidStatusCode",
}

/**
 * @description Fetch処理の結果をResult型で表現します。
 * @template Response 成功時のレスポンス型
 */
export type FetchResult<Response> = Result<
  Response,
  { message: FetchError; cause?: unknown }
>;

/**
 * @function fetcher
 * @description fetch処理を行う汎用的な関数です。
 * @template Response レスポンスの型
 * @param {string | URL | Request} url fetch先のURL
 * @param {RequestInit} options fetchオプション
 * @returns {Promise<FetchResult<Response>>} fetch処理の結果
 */
export const fetcher = async <Response>(
  url: string | URL | Request,
  options: RequestInit = {}
): Promise<FetchResult<Response>> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return err({
        message: FetchError.InvalidStatusCode,
      });
    }
    const data = await response.json();

    return ok(data);
  } catch (error) {
    return err({
      message: FetchError.InvalidJSON,
      cause: error,
    });
  }
};
