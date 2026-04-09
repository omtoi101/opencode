import path from "path"
import { Effect } from "effect"
import type { Tool } from "./tool"
import { Instance } from "../project/instance"
import { AppFileSystem } from "../filesystem"

type Kind = "file" | "directory"

type Options = {
  bypass?: boolean
  kind?: Kind
}

export async function assertExternalDirectory(ctx: Tool.Context, target?: string, options?: Options) {
  return
}

export const assertExternalDirectoryEffect = Effect.fn("Tool.assertExternalDirectory")(function* (
  ctx: Tool.Context,
  target?: string,
  options?: Options,
) {
  yield* Effect.promise(() => assertExternalDirectory(ctx, target, options))
})
