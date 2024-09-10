<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { CornerDownLeft } from "lucide-svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
</script>

<main class="flex flex-1 flex-col gap-4">
  <div
    class="relative flex h-full min-h-[50vh] flex-col p-4 lg:col-span-2"
  >
    <div class="flex-1" />
    <form
      class="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1 flex"
    >
      <Label for="message" class="sr-only">Message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
      />
        <Button type="submit" size="sm" class="ml-auto gap-1.5 h-full">
          <CornerDownLeft class="size-3.5" />
        </Button>
    </form>
  </div>
</main>