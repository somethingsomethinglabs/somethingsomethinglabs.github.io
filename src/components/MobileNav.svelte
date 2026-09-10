<script lang="ts">
  import { List, X } from 'phosphor-svelte';

  let open = $state(false);

  const close = () => {
    open = false;
  };
</script>

<button
  class="menu-button"
  type="button"
  aria-label={open ? 'Close navigation' : 'Open navigation'}
  aria-controls="mobile-navigation"
  aria-expanded={open}
  onclick={() => (open = !open)}
>
  {#if open}
    <X size={23} weight="bold" />
  {:else}
    <List size={25} weight="bold" />
  {/if}
</button>

<nav id="mobile-navigation" class:open aria-label="Mobile navigation">
  <a href="#work" onclick={close}>Work</a>
  <a href="#process" onclick={close}>Process</a>
  <a href="#approach" onclick={close}>Approach</a>
  <a href="#about" onclick={close}>About</a>
  <button type="button" data-contact-open onclick={close}>Start somewhere</button>
</nav>
