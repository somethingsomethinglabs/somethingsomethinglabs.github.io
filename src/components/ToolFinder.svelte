<script lang="ts">
  const possibilities = [
    {
      prompt: 'They need a price',
      title: 'Let the site do the first calculation.',
      copy: 'A calculator or estimator can give people a useful starting point and send better-prepared enquiries to the business.',
      examples: ['Cost calculators', 'Estimators', 'Quote builders'],
    },
    {
      prompt: 'They cannot choose',
      title: 'Make the options easier to compare.',
      copy: 'A guided selector or comparison can ask a few good questions, narrow the choices, and explain why an option fits.',
      examples: ['Guided selectors', 'Comparisons', 'Recommendations'],
    },
    {
      prompt: 'It is hard to explain',
      title: 'Show how the difficult bit works.',
      copy: 'An interactive diagram or step-by-step explainer can turn specialist knowledge into something people grasp. When it genuinely helps, AI can tailor the explanation to their question.',
      examples: ['Interactive diagrams', 'Visual explainers', 'Careful AI guidance'],
    },
    {
      prompt: 'Every enquiry starts at zero',
      title: 'Collect the useful details first.',
      copy: 'A guided enquiry can ask only the questions that matter, then give the business enough context to have a better first conversation.',
      examples: ['Smart forms', 'Lead qualification', 'Booking flows'],
    },
  ];

  let selected = $state(0);
</script>

<div class="tool-finder">
  <div class="tool-choices" aria-label="Choose where customers get stuck">
    <p>Where does a customer get stuck?</p>
    {#each possibilities as possibility, index}
      <button
        type="button"
        aria-pressed={selected === index}
        onclick={() => (selected = index)}
      >
        <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        {possibility.prompt}
      </button>
    {/each}
  </div>

  <div class="tool-result" aria-live="polite">
    <p class="tool-result-kicker">Something useful</p>
    <h3>{possibilities[selected].title}</h3>
    <p>{possibilities[selected].copy}</p>
    <ul aria-label="Example website tools">
      {#each possibilities[selected].examples as example}
        <li>{example}</li>
      {/each}
    </ul>
  </div>
</div>
