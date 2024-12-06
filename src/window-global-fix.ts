(window as any).module = module;
(window as any).global = window;
(window as any).process = {
    env: { DEBUG: undefined },
  };