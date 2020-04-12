<script>
  import Navigation from "./../components/Navigation.svelte";
  // import { onMount } from "svelte";
  import {
    emailValidator,
    requiredValidator,
    passValidator
  } from "../validation/validator.js";
  import { createFieldValidator } from "../validation/validation.js";

  // onMount(async () => {
  //   await fetch(``).then(r => r.json());
  // });

  const [validity, validate] = createFieldValidator(
    requiredValidator(),
    emailValidator()
  );

  function handleSubmit(e) {
    const { elements } = e.target;
    console.log(e);
  }

  let email = null;
  let pass = null;
</script>

<style>
  p {
    width: 20%;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 10px;
    padding: 2.5%;
  }
  .register-container {
    background-image: url("/images/meditate_girl.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 48rem;
  }
  .register-title {
    display: flex;
    width: 25%;
    text-align: center;
    color: crimson;
  }
  .form-wrapper {
    padding-top: 10rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    border-radius: 5px;
    color: crimson;
  }
  .testimonial-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .testimonial-wrapper {
    display: flex;
    justify-content: space-around;
  }
  .testiomonial-quotes {
    display: flex;
    justify-content: space-around;
  }
  img {
    border-radius: 50%;
  }
</style>

<div class="register-container">
  <Navigation />
  <div class="register-title">
    <h1>Join the social market for vendors</h1>
  </div>

  <div class="form-wrapper">
    <form>
      <input
        class="input"
        type="text"
        bind:value={email}
        placeholder="Your Email"
        class:field-danger={!$validity.valid}
        class:field-success={$validity.valid}
        use:validate={email} />
      {#if $validity.dirty && !$validity.valid}
        <span class="validation-hint">
          {$validity.message} {$validity.dirty}
        </span>
      {/if}
      <input
        class="input"
        type="text"
        bind:value={pass}
        placeholder="password"
        class:field-danger={!$validity.valid}
        class:field-success={$validity.valid}
        use:validate={pass} />
      {#if $validity.dirty && !$validity.valid}
        <span class="validation-hint">
          {$validity.message} {$validity.dirty}
        </span>
      {/if}
      <button
        on:submit|preventDefault={handleSubmit}
        disabled={!$validity.valid}>
        Register
      </button>
    </form>
  </div>
</div>

<h1>Testimonials from people of all places. Bringing communities together.</h1>

<div class="testimonial-container">

  <div class="testimonial-wrapper">
    <img src="/images/testimonial3.png" alt="testimonial-3-photo" />
    <img src="/images/testimonial1.png" alt="testimonial-1-photo" />
    <img src="/images/testimonial2.png" alt="testimonial-2-photo" />
  </div>

  <div class="testiomonial-quotes">
    <p>
      “I just moved to Austin and wanted to support local from the start. This
      made it so easy!” - Alandra S.
    </p>

    <p>
      “I just moved to Austin and wanted to support local from the start. This
      made it so easy!” - Alandra S.
    </p>
    <p>
      “I just moved to Austin and wanted to support local from the start. This
      made it so easy!” - Alandra S.
    </p>
  </div>
</div>
