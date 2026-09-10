<script lang="ts">
  import { ArrowRight, X } from 'phosphor-svelte';

  const emailAddress = 'rowan.j.p.1998@gmail.com';
  let dialog: HTMLDialogElement;
  let sent = $state(false);
  let selectedPackage = $state('Not sure yet');
  let messageHref = $state(`mailto:${emailAddress}`);

  $effect(() => {
    const openers = document.querySelectorAll<HTMLElement>('[data-contact-open]');
    const open = (event: Event) => {
      sent = false;
      selectedPackage = (event.currentTarget as HTMLElement).dataset.contactPackage ?? 'Not sure yet';
      dialog.showModal();
    };

    openers.forEach((opener) => opener.addEventListener('click', open));
    return () => openers.forEach((opener) => opener.removeEventListener('click', open));
  });

  function submit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const fields = new FormData(form);
    const name = String(fields.get('name') ?? '').trim();
    const email = String(fields.get('email') ?? '').trim();
    const business = String(fields.get('business') ?? '').trim();
    const project = String(fields.get('project') ?? '').trim();
    const idea = String(fields.get('idea') ?? '').trim();
    const subject = `Website enquiry from ${business || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || 'Not supplied'}`,
      `Package: ${project}`,
      '',
      'What should be easier?',
      idea,
    ].join('\n');

    messageHref = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    sent = true;
    window.location.href = messageHref;
  }
</script>

<dialog bind:this={dialog} class="contact-dialog" aria-labelledby="contact-title">
  <button class="dialog-close" type="button" aria-label="Close enquiry form" onclick={() => dialog.close()}>
    <X size={24} weight="bold" />
  </button>

  {#if sent}
    <div class="form-success" aria-live="polite">
      <p class="section-kicker">Ready to send</p>
      <h2 id="contact-title">Your email app should be opening.</h2>
      <p>Review the message, then press send. If nothing opened, <a href={messageHref}>open the email again</a> or write to <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.</p>
      <button class="button button-primary" type="button" onclick={() => dialog.close()}>Back to the site</button>
    </div>
  {:else}
    <div class="dialog-heading">
      <p class="section-kicker">Start somewhere</p>
      <h2 id="contact-title">Where do people get stuck?</h2>
      <p>You do not need a feature list. Tell us what customers ask, avoid, misunderstand, or spend too long working out.</p>
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
        <span>Which package are you considering?</span>
        <select name="project" bind:value={selectedPackage}>
          <option>Not sure yet</option>
          <option>Essential website</option>
          <option>Business website</option>
          <option>Something outside these packages</option>
        </select>
      </label>
      <label>
        <span>What should be easier?</span>
        <textarea name="idea" rows="5" required placeholder="Customers keep asking for a price, our service is hard to explain, people do not know which option fits..."></textarea>
      </label>
      <p class="prototype-note">Pressing the button opens a ready-to-send message in your email app. Nothing is stored on this website.</p>
      <button class="button button-primary" type="submit">
        Open the email <ArrowRight size={18} weight="bold" />
      </button>
    </form>
  {/if}
</dialog>
