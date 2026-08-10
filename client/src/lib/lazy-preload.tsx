import { lazy, type ComponentType, type ReactElement } from "react";

export interface PreloadableComponent<P = {}> {
  (props: P): ReactElement;
  preload: () => Promise<void>;
}

/**
 * Like React.lazy, but with a preload() hook. Once preloaded, the component
 * renders synchronously (no suspension). The SSR entry preloads every page
 * before rendering, so the prerendered HTML is fully inline — no deferred
 * Suspense segments. The client never calls preload() and keeps normal
 * code-splitting via React.lazy.
 */
export function lazyWithPreload<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> }>,
): PreloadableComponent<P> {
  let Loaded: ComponentType<P> | null = null;
  const Lazy = lazy(loader);

  function Wrapped(props: P) {
    if (Loaded) {
      const C = Loaded;
      return <C {...props} />;
    }
    return <Lazy {...(props as any)} />;
  }

  (Wrapped as PreloadableComponent<P>).preload = async () => {
    if (!Loaded) {
      Loaded = (await loader()).default;
    }
  };

  return Wrapped as PreloadableComponent<P>;
}
