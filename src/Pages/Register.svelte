<script>
  import { onMount } from "svelte";
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
</style>

<div class="register-container">

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
