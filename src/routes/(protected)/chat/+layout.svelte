<script lang="ts">
  import Menu from "lucide-svelte/icons/menu";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { House, LogOut, MessageSquare } from "lucide-svelte";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode } from "mode-watcher";

  export let data;
  const user = data.user;
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
  <div class="bg-muted/40 hidden border-r md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold text-foreground">
          <MessageSquare class="h-6 w-6"/>
          <span>msg-app</span>
        </a>
      </div>
      <div class="h-full flex flex-col justify-between items-center my-4">
        <nav class="w-full grid items-start px-2 text-sm font-medium lg:px-4">
          <a
            href="/"
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <House class="h-5 w-5" />
            Home
          </a>
        </nav>
        <div class="flex justify-around items-center w-[90%] text-foreground">
          <p class="m-0 font-bold">{user.fullName}</p>
          <Button href="/logout" variant="ghost" size="icon">
            <LogOut />
            <span class="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <header class="bg-muted/40 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
            builders={[builder]}
          >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left" class="flex flex-col justify-between">
          <nav class="grid gap-2 text-lg font-medium">
            <a href="##" class="flex items-center gap-2 text-lg font-semibold text-foreground">
              <MessageSquare class="h-6 w-6" />
              <span>msg-app</span>
            </a>
            <a
              href="/"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <House class="h-5 w-5" />
              Home
            </a>
          </nav>
          <div class="flex justify-around items-center w-[90%] text-foreground">
            <p class="m-0 font-bold">{user.fullName}</p>
            <Button href="/logout" variant="ghost" size="icon">
              <LogOut />
              <span class="sr-only">Logout</span>
            </Button>
          </div>
        </Sheet.Content>
      </Sheet.Root>
      <Button on:click={toggleMode} variant="outline" size="icon" class="absolute top-2 right-2">
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </header>

    <slot />

  </div>
</div>
