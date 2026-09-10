<script lang="ts">
  import { ArrowRight, X } from 'phosphor-svelte';

  let dialog: HTMLDialogElement;
  let sent = $state(false);

  $effect(() => {
    const openers = document.querySelectorAll<HTMLElement>('[data-contact-open]');
    const open = () => {
      sent = false;
      dialog.showModal();
    };

    openers.forEach((opener) => opener.addEventListener('click', open));
    return () => openers.forEach((opener) => opener.removeEventListener('click', open));
  });

  function submit(event: SubmitEvent) {
    event.preventDefault();
    sent = true;
  }
</script>

<dialog bind:this={dialog} class="contact-dialog" aria-labelledby="contact-title">
  <button class="dialog-close" type="button" aria-label="Close enquiry form" onclick={() => dialog.close()}>
    <X size={24} weight="bold" />
  </button>

  {#if sent}
    <div class="form-success" aria-live="polite">
      <p class="section-kicker">That is enough to start</p>
      <h2 id="contact-title">The rough idea is the useful bit.</h2>
      <p>This prototype does not send email yet, but the enquiry flow is ready for a real delivery service.</p>
      <button class="button button-primary" type="button" onclick={() => dialog.close()}>Back to the site</button>
    </div>
  {:else}
    <div class="dialog-heading">
      <p class="section-kicker">Start somewhere</p>
      <h2 id="contact-title">Tell us the rough version.</h2>
      <p>You do not need a brief. A few plain sentences about the business and what is not working will do.</p>
    </div>

    <form onsubmit={submit}>
      <div class="field-row">
        <label>
          <span>Your name</span>
          <input name="name" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autocomplete="email" required />
        </label>
      </div>
      <label>
        <span>Business name <small>optional</small></span>
        <input name="business" autocomplete="organization" />
      </label>
      <label>
        <span>What is the rough idea?</span>
        <textarea name="idea" rows="5" required placeholder="Something is not working, we need a new site, we are not sure where to start..."></textarea>
      </label>
      <p class="prototype-note">This is a working mock-up. It does not send or store your details.</p>
      <button class="button button-primary" type="submit">
        Send the rough idea <ArrowRight size={18} weight="bold" />
      </button>
    </form>
  {/if}
</dialog>
