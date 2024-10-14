<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";

  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
 
  import { toggleMode } from "mode-watcher";
</script>

<div class="w-full h-full flex justify-center items-center relative">
  <Button on:click={toggleMode} variant="outline" size="icon" class="absolute top-2 right-2">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
  
  <Card.Root class="w-full max-w-sm mx-4">
    <Card.Header>
      <Card.Title class="text-2xl">Msg-app</Card.Title>
      <Card.Description>Click the button to log in with your Microsoft account and start chatting.</Card.Description>
    </Card.Header>
    <Card.Footer>
      <Button href="/chat" class="w-full">Sign in</Button>
    </Card.Footer>
  </Card.Root>
</div>