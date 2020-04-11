<script>
  import Button from "../components/Button.svelte";

  let username = "";
  let password = "";
</script>

<style>
  .form-wrapper {
    display: flex;
    justify-content: end;
    padding-top: 2rem;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  button {
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 0.7rem;
  }
</style>

<div class="form-wrapper">
  <div class="form">
    <input placeholder="username" />
    <input placeholder="password" />
    <button>
      <p>register</p>
    </button>
  </div>
</div>
